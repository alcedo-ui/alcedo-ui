/**
 * @file TriggerPop component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import Transition from 'react-transition-group/Transition';
import classNames from 'classnames';

import Portal from '../Portal';
import Paper from '../Paper';
import Theme from '../Theme';

import Position from '../_statics/Position';

import Event from '../_vendors/Event';
import Util from '../_vendors/Util';
import TriggerPopCalculation from '../_vendors/TriggerPopCalculation';
import Dom from '../_vendors/Dom';

class TriggerPop extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.scrollEl = null;

        this.state = {
            enter: false,
            exited: true
        };

    }

    enterHandler = el => {

        this.transitionEl = el;
        this.resetPosition();

        this.setState({
            enter: true
        }, () => {
            const {onRender} = this.props;
            onRender && onRender(el, this.props.triggerEl);
        });

    };

    enteredHandler = el => {
        const {onRendered} = this.props;
        onRendered && onRendered(el, this.props.triggerEl);
    };

    exitHandler = el => {
        this.setState({
            enter: false
        }, () => {
            const {onDestroy} = this.props;
            onDestroy && onDestroy(el, this.props.triggerEl);
        });
    };

    exitedHandler = el => {
        this.setState({
            exited: true
        }, () => {
            const {onDestroyed} = this.props;
            onDestroyed && onDestroyed(el, this.props.triggerEl);
        });
    };

    debounceResetPosition = debounce(() => {
        this.resetPosition();
    }, this.props.resetPositionWait);

    getEl = () => {
        return this.transitionEl;
    };

    resetPosition = (props = this.props) => {
        const {triggerEl, position, isTriggerPositionFixed} = props;
        TriggerPopCalculation.setStyle(triggerEl, this.transitionEl, position, isTriggerPositionFixed);
    };

    addWatchScroll = () => {

        const {triggerEl} = this.props;

        if (!triggerEl) {
            return;
        }

        const scrollEl = Dom.getClosestScrollable(triggerEl);

        if (!scrollEl || scrollEl == document.body) {
            return;
        }

        this.scrollEl = scrollEl;

        Event.addEvent(scrollEl, 'scroll', this.debounceResetPosition);

    };

    componentDidMount() {
        Event.addEvent(window, 'resize', this.debounceResetPosition);
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.visible && this.props.visible) {
            this.addWatchScroll();
        } else if (prevProps.visible && !this.props.visible) {
            this.scrollEl && Event.removeEvent(this.scrollEl, 'scroll', this.debounceResetPosition);
            this.scrollEl = null;
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.visible) {
            this.setState({
                exited: !nextProps.visible
            });
        }

        if (nextProps.position !== this.props.position) {
            this.resetPosition(nextProps);
        }

    }

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.debounceResetPosition);
    }

    render() {

        const {

                children,

                className, contentClassName, modalClassName, style, theme, hasTriangle, triangle, position,
                isAnimated, visible, showModal,

                // not passing down these props
                isEscClose, isBlurClose, shouldPreventContainerScroll, triggerEl, isTriggerPositionFixed,
                onRender, onRendered, onDestroy, onDestroyed,

                ...restProps

            } = this.props,
            {enter, exited} = this.state,

            popModalClassName = classNames('trigger-pop-modal', {
                hidden: !enter,
                'trigger-pop-modal-animated': isAnimated,
                [modalClassName]: modalClassName
            }),

            popupClassName = classNames('trigger-pop', {
                hidden: !enter,
                'trigger-pop-has-triangle': hasTriangle,
                [`theme-${theme}`]: theme,
                [`trigger-pop-${position}`]: position,
                'trigger-pop-animated': isAnimated,
                [className]: className
            }),

            popContentClassName = classNames('trigger-pop-content', {
                [contentClassName]: contentClassName
            });

        return (
            <Portal visible={!exited}>

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
                            onEnter={this.enterHandler}
                            onEntered={this.enteredHandler}
                            onExit={this.exitHandler}
                            onExited={this.exitedHandler}>
                    <Paper {...restProps}
                           className={popupClassName}
                           style={style}
                           onWheel={e => Event.wheelHandler(e, this.props)}>

                        {
                            hasTriangle ?
                                <div className="trigger-pop-triangle-wrapper">
                                    {triangle}
                                </div>
                                :
                                null
                        }

                        <div className={popContentClassName}
                             onWheel={e => Event.wheelHandler(e, this.props)}>
                            {children}
                        </div>

                    </Paper>
                </Transition>

            </Portal>
        );

    }

}

TriggerPop.propTypes = {

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

    /**
     * This is the DOM element that will be used to set the position of the trigger pop.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the trigger pop is visible.
     */
    visible: PropTypes.bool,

    /**
     * If true,the trigger pop will have a triangle on the top of the DOM element.
     */
    hasTriangle: PropTypes.bool,

    triangle: PropTypes.element,

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

    isBlurClose: PropTypes.bool,
    isEscClose: PropTypes.bool,
    shouldPreventContainerScroll: PropTypes.bool,
    isTriggerPositionFixed: PropTypes.bool,
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

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

TriggerPop.defaultProps = {

    theme: Theme.DEFAULT,
    depth: 3,

    visible: false,
    hasTriangle: true,
    triangle: <div className="trigger-pop-triangle"></div>,
    showModal: false,
    position: Position.BOTTOM,
    isAnimated: true,

    isBlurClose: true,
    isEscClose: true,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false,
    resetPositionWait: 250

};

export default TriggerPop;
