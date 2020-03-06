/**
 * @file Pop component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, cloneElement} from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import Transition from 'react-transition-group/Transition';
import classNames from 'classnames';

// Components
import Portal from '../Portal';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// Vendors
import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

class Pop extends Component {

    static Position = Position;
    static Theme = Theme;

    static getDerivedStateFromProps(props) {

        const result = {
            prevProps: props
        };

        if (props.visible) {
            result.exited = !props.visible;
        }

        return result;

    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        // this.scrollEl = null;

        this.state = {
            enter: false,
            exited: true,
            transitionEl: null
        };

    }

    componentDidMount() {
        Event.addEvent(window, 'resize', this.debounceResetPosition);
    }

    componentDidUpdate(prevProps) {

        if (prevProps.position !== this.props.position) {
            const {resetPosition} = this.props;
            resetPosition && resetPosition(this.state.transitionEl);
        }

        // if (!prevProps.visible && this.props.visible) {
        //     this.addWatchScroll();
        // } else if (prevProps.visible && !this.props.visible) {
        //     this.scrollEl && Event.removeEvent(this.scrollEl, 'scroll', this.debounceResetPosition);
        //     this.scrollEl = null;
        // }

    }

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.debounceResetPosition);
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
    //     Event.addEvent(scrollEl, 'scroll', this.debounceResetPosition);
    //
    // };

    render() {

        const {

                children, container,
                modalClassName, className, parentEl, isAnimated, visible, showModal,
                onModalMouseDown, onModalMouseMove, onModalMouseUp, onModalMouseEnter, onModalMouseLeave, onModalClick,

                // not passing down these props
                contentClassName, position, triggerEl, resetPositionWait,
                resetPosition, onRender, onRendered, onDestroy, onDestroyed,

                ...restProps

            } = this.props,
            {enter, exited, transitionEl} = this.state;

        return (
            <Portal visible={!exited}
                    parentEl={parentEl}>

                {
                    showModal ?
                        <Transition appear
                                    in={visible}
                                    timeout={250}>
                            <div className={classNames('pop-modal', {
                                hidden: !enter,
                                'pop-modal-animated': isAnimated,
                                [modalClassName]: modalClassName
                            })}
                                 onMouseDown={onModalMouseDown}
                                 onMouseMove={onModalMouseMove}
                                 onMouseUp={onModalMouseUp}
                                 onMouseEnter={onModalMouseEnter}
                                 onMouseLeave={onModalMouseLeave}
                                 onClick={onModalClick}></div>
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
                            className: classNames({
                                hidden: !enter,
                                [className]: className
                            }),
                            children: typeof children === 'function' ? children(transitionEl) : children || null
                        })
                    }
                </Transition>

            </Portal>
        );

    }

}

Pop.propTypes = {

    children: PropTypes.any,
    container: PropTypes.any,

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

    resetPosition: PropTypes.func,

    onModalMouseDown: PropTypes.func,
    onModalMouseMove: PropTypes.func,
    onModalMouseUp: PropTypes.func,
    onModalMouseEnter: PropTypes.func,
    onModalMouseLeave: PropTypes.func,
    onModalClick: PropTypes.func

};

Pop.defaultProps = {

    theme: Theme.DEFAULT,
    parentEl: document.body,
    depth: 2,

    visible: false,
    showModal: false,
    position: Position.BOTTOM,
    isAnimated: true,

    resetPositionWait: 250

};

export default Pop;
