/**
 * @file Popup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import Transition from 'react-transition-group/Transition';
import classNames from 'classnames';

import Portal from '../Portal';
import Paper from '../Paper';
import Theme from '../Theme';

import Position from '../_statics/Position';
import TriggerMode from '../_statics/TriggerMode';
import Event from '../_vendors/Event';
import PopupCalculation from '../_vendors/PopupCalculation';
import PopupManagement from '../_vendors/PopupManagement';
import Dom from '../_vendors/Dom';
import Util from '../_vendors/Util';
import PropTypes from 'prop-types';

class Popup extends Component {

    static Position = Position;
    static TriggerMode = TriggerMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            enter: false,
            exited: true
        };

        this.enterHandler = ::this.enterHandler;
        this.exitHandler = ::this.exitHandler;
        this.exitedHandler = ::this.exitedHandler;
        this.mousedownHandler = ::this.mousedownHandler;
        this.resizeHandler = ::this.resizeHandler;

    }

    reDraw() {
        this.forceUpdate();
    }

    enterHandler(el) {

        this.transitionEl = el;

        const {triggerEl, position, isTriggerPositionFixed} = this.props;
        PopupCalculation.setStyle(triggerEl, el, position, isTriggerPositionFixed);

        this.setState({
            enter: true
        });

    }

    exitHandler() {
        this.setState({
            enter: false
        });
    }

    exitedHandler() {
        this.setState({
            exited: true
        });
    }

    triggerHandler(el, triggerEl, popupEl, triggerMode, currentVisible, isAutoClose) {

        while (el) {
            if (el == popupEl) {
                return currentVisible;
            }
            el = el.parentNode;
        }

        return isAutoClose ? false : currentVisible;

    }

    mousedownHandler(e) {

        const {visible, triggerEl, triggerMode, isAutoClose, triggerHandler, onRequestClose} = this.props;

        let currVisible;

        if (triggerHandler) {
            currVisible = triggerHandler(e.target, triggerEl, this.popupEl, triggerMode, visible, isAutoClose);
        } else if (!Dom.isParent(e.target, triggerEl)) {
            currVisible = this.triggerHandler(e.target, triggerEl, this.popupEl, triggerMode, visible, isAutoClose);
        }

        if (currVisible === false) {
            onRequestClose && onRequestClose(e);
        }

    }

    resizeHandler = _.debounce(() => {
        const {triggerEl, position, isTriggerPositionFixed} = this.props;
        PopupCalculation.setStyle(triggerEl, this.transitionEl, position, isTriggerPositionFixed);
    }, 250);

    componentDidMount() {

        this.popupEl = findDOMNode(this.refs.popup);

        Event.addEvent(document, 'mousedown', this.mousedownHandler);
        Event.addEvent(window, 'resize', this.resizeHandler);

        this.props.isEscClose && PopupManagement.push(this);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({
                exited: false
            });
        }
    }

    // componentDidUpdate() {
    //     const {visible, onRender} = this.props;
    //     visible && onRender && onRender(this.popupEl, this.props.triggerEl);
    // }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.mousedownHandler);
        Event.removeEvent(window, 'resize', this.resizeHandler);
    }

    render() {

        const {

                children,

                className, style, theme, hasTriangle, triangle, position, isAnimated, visible,

                // not passing down these props
                isEscClose, isAutoClose, shouldPreventContainerScroll, triggerMode, triggerEl, isTriggerPositionFixed,
                onRender, onRequestClose, triggerHandler,

                ...restProps

            } = this.props,
            {enter, exited} = this.state,

            popupClassName = classNames('popup', {
                hidden: !enter,
                'popup-has-triangle': hasTriangle,
                [`theme-${theme}`]: theme,
                [`popup-position-${position}`]: position,
                'popup-animated': isAnimated,
                [className]: className
            });

        return (
            <Portal visible={!exited}>
                <Transition appear
                            in={visible}
                            timeout={250}
                            onEnter={this.enterHandler}
                            onExit={this.exitHandler}
                            onExited={this.exitedHandler}>
                    <Paper {...restProps}
                           className={popupClassName}
                           style={style}
                           onWheel={e => {
                               Event.wheelHandler(e, this.props);
                           }}>

                        {
                            hasTriangle ?
                                <div className="popup-triangle-wrapper">
                                    {triangle}
                                </div>
                                :
                                null
                        }

                        <div className="popup-content"
                             onWheel={e => {
                                 Event.wheelHandler(e, this.props);
                             }}>
                            {children}
                        </div>

                    </Paper>
                </Transition>
            </Portal>
        );

    }

};

Popup.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * This is the DOM element that will be used to set the position of the popover.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the popover is visible.
     */
    visible: PropTypes.bool,

    /**
     * If true,the popover will have a triangle on the top of the DOM element.
     */
    hasTriangle: PropTypes.bool,

    triangle: PropTypes.element,

    /**
     * The popover theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The popover alignment.The value can be Popup.Position.LEFT or Popup.Position.RIGHT.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true,popup will have animation effects.
     */
    isAnimated: PropTypes.bool,

    /**
     * The status of popup-triangle.Can be open or toggle.
     */
    triggerMode: PropTypes.oneOf(Util.enumerateValue(TriggerMode)),

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    isAutoClose: PropTypes.bool,
    isEscClose: PropTypes.bool,
    shouldPreventContainerScroll: PropTypes.bool,
    isTriggerPositionFixed: PropTypes.bool,

    /**
     * The function of popup event handler.
     */
    triggerHandler: PropTypes.func,

    /**
     * The function of popup render.
     */
    onRender: PropTypes.func,

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

Popup.defaultProps = {

    className: '',
    style: null,
    depth: 6,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    triangle: <div className="popup-triangle"></div>,
    theme: Theme.DEFAULT,
    position: Position.BOTTOM_LEFT,
    isAnimated: true,
    triggerMode: TriggerMode.TOGGLE,

    isAutoClose: true,
    isEscClose: true,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false

};

export default Popup;