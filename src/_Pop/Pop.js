/**
 * @file TriggerPop component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, cloneElement} from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import Transition from 'react-transition-group/Transition';
import eventsOn from 'dom-helpers/events/on';
import eventsOff from 'dom-helpers/events/off';
import classNames from 'classnames';

import Portal from '../Portal';
import Theme from '../Theme';

import Position from '../_statics/Position';

import Util from '../_vendors/Util';

// import Dom from '../_vendors/Dom';

class Pop extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        // this.scrollEl = null;

        this.state = {
            enter: false,
            exited: true,
            transitionEl: null
        };

    }

    /**
     * public
     */
    getEl = () => {
        return this.state.transitionEl;
    };

    handleEnter = el => {

        const {triggerEl, resetPosition} = this.props;
        resetPosition && resetPosition(el);

        this.setState({
            enter: true,
            transitionEl: el
        }, () => {
            const {onRender} = this.props;
            onRender && onRender(el, triggerEl);
        });

    };

    handleEntered = el => {
        const {triggerEl, onRendered} = this.props;
        onRendered && onRendered(el, triggerEl);
    };

    handleExit = el => {
        this.setState({
            enter: false
        }, () => {
            const {triggerEl, onDestroy} = this.props;
            onDestroy && onDestroy(el, triggerEl);
        });
    };

    handleExited = el => {
        this.setState({
            exited: true,
            transitionEl: null
        }, () => {
            const {triggerEl, onDestroyed} = this.props;
            onDestroyed && onDestroyed(el, triggerEl);
        });
    };

    debounceResetPosition = debounce(() => {
        const {resetPosition} = this.props;
        resetPosition && resetPosition(this.state.transitionEl);
    }, this.props.resetPositionWait);

    // addWatchScroll = () => {
    //
    //     const {triggerEl} = this.props;
    //
    //     if (!triggerEl) {
    //         return;
    //     }
    //
    //     const scrollEl = Dom.getClosestScrollable(triggerEl);
    //
    //     if (!scrollEl || scrollEl == document.body) {
    //         return;
    //     }
    //
    //     this.scrollEl = scrollEl;
    //
    //     eventsOn(scrollEl, 'scroll', this.debounceResetPosition);
    //
    // };

    componentDidMount() {
        eventsOn(window, 'resize', this.debounceResetPosition);
    }

    componentDidUpdate(prevProps) {

        if (prevProps.position !== this.props.position) {
            const {resetPosition} = this.props;
            resetPosition && resetPosition(this.state.transitionEl);
        }

        // if (!prevProps.visible && this.props.visible) {
        //     this.addWatchScroll();
        // } else if (prevProps.visible && !this.props.visible) {
        //     this.scrollEl && eventsOff(this.scrollEl, 'scroll', this.debounceResetPosition);
        //     this.scrollEl = null;
        // }

    }

    componentWillUnmount() {
        eventsOff(window, 'resize', this.debounceResetPosition);
    }

    static getDerivedStateFromProps(props) {

        const result = {
            prevProps: props
        };

        if (props.visible) {
            result.exited = !props.visible;
        }

        return result;

    }

    render() {

        const {

                children, container,
                modalClassName, className, parentEl, isAnimated, visible, showModal,

                // not passing down these props
                contentClassName, position, triggerEl, resetPositionWait,
                resetPosition, onRender, onRendered, onDestroy, onDestroyed,

                ...restProps

            } = this.props,
            {enter, exited, transitionEl} = this.state,

            popModalClassName = classNames('pop-modal', {
                hidden: !enter,
                'pop-modal-animated': isAnimated,
                [modalClassName]: modalClassName
            }),

            popClassName = classNames({
                hidden: !enter,
                [className]: className
            });

        return (
            <Portal visible={!exited}
                    parentEl={parentEl}>

                {
                    showModal ?
                        <Transition appear
                                    in={visible}
                                    timeout={250}>
                            <div className={popModalClassName}></div>
                        </Transition>
                        :
                        null
                }

                <Transition appear
                            in={visible}
                            timeout={250}
                            onEnter={this.handleEnter}
                            onEntered={this.handleEntered}
                            onExit={this.handleExit}
                            onExited={this.handleExited}>
                    {
                        cloneElement(container, {
                            ...restProps,
                            className: popClassName,
                            children: typeof children === 'function' ? children(transitionEl) : children
                        })
                    }
                </Transition>

            </Portal>
        );

    }

}

Pop.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the content element.
     */
    contentClassName: PropTypes.string,

    modalClassName: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The trigger pop theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    parentEl: PropTypes.object,

    /**
     * This is the DOM element that will be used to set the position of the trigger pop.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the trigger pop is visible.
     */
    visible: PropTypes.bool,

    showModal: PropTypes.bool,

    /**
     * The trigger pop alignment.The value can be Popup.Position.LEFT or Popup.Position.RIGHT.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true,popup will have animation effects.
     */
    isAnimated: PropTypes.bool,

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    resetPositionWait: PropTypes.number,

    /**
     * The function of popup render.
     */
    onRender: PropTypes.func,

    /**
     * The function of popup rendered.
     */
    onRendered: PropTypes.func,

    /**
     * The function of popup destroy.
     */
    onDestroy: PropTypes.func,

    /**
     * The function of popup destroyed.
     */
    onDestroyed: PropTypes.func,

    resetPosition: PropTypes.func

};

Pop.defaultProps = {

    theme: Theme.DEFAULT,
    parentEl: document.body,
    depth: 3,

    visible: false,
    showModal: false,
    position: Position.BOTTOM,
    isAnimated: true,

    resetPositionWait: 250

};

export default Pop;
