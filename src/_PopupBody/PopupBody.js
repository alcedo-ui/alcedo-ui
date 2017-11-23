/**
 * @file PopupBody component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Paper from '../Paper';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';
import Event from '../_vendors/Event';
import PopupManagement from '../_vendors/PopupManagement';
import PopupCalculation from '../_vendors/PopupCalculation';

export default class PopupBody extends Component {

    static Position = {

        TOP_LEFT: 'top-left',
        TOP: 'top',
        TOP_RIGHT: 'top-right',

        BOTTOM_LEFT: 'bottom-left',
        BOTTOM: 'bottom',
        BOTTOM_RIGHT: 'bottom-right',

        LEFT_TOP: 'left-top',
        LEFT: 'left',
        LEFT_BOTTOM: 'left-bottom',

        RIGHT_TOP: 'right-top',
        RIGHT: 'right',
        RIGHT_BOTTOM: 'right-bottom'

    };

    static TriggerMode = {
        TOGGLE: 'toggle',
        OPEN: 'open'
    };

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.hasMounted = false;
        this.requestCloseTimeout = null;

        this.state = {
            visible: false
        };

        this.getPopupStyle = ::this.getPopupStyle;
        this.mousedownHandler = ::this.mousedownHandler;
        this.resizeHandler = ::this.resizeHandler;
        this.debounceResizeHandler = _.debounce(::this.debounceResizeHandler, 150);
        this.initializeAnimation = ::this.initializeAnimation;
        this.animate = ::this.animate;
        this.wheelHandler = ::this.wheelHandler;

    }

    getPopupStyle() {

        const {triggerEl, position} = this.props;

        if (!triggerEl || !this.popupEl) {
            return;
        }

        const triggerOffset = Dom.getOffset(triggerEl);
        let left, top;

        switch (position) {
            case PopupBody.Position.TOP_LEFT: {
                left = PopupCalculation.leftVerticalLeft(triggerOffset);
                top = PopupCalculation.topVerticalTop(triggerOffset, this.popupEl);
                break;
            }
            case PopupBody.Position.TOP: {
                left = PopupCalculation.leftVerticalCenter(triggerEl, triggerOffset, this.popupEl);
                top = PopupCalculation.topVerticalTop(triggerOffset, this.popupEl);
                break;
            }
            case PopupBody.Position.TOP_RIGHT: {
                left = PopupCalculation.leftVerticalRight(triggerEl, triggerOffset, this.popupEl);
                top = PopupCalculation.topVerticalTop(triggerOffset, this.popupEl);
                break;
            }
            case PopupBody.Position.BOTTOM_LEFT: {
                left = PopupCalculation.leftVerticalLeft(triggerOffset);
                top = PopupCalculation.topVerticalBottom(triggerEl, triggerOffset);
                break;
            }
            case PopupBody.Position.BOTTOM: {
                left = PopupCalculation.leftVerticalCenter(triggerEl, triggerOffset, this.popupEl);
                top = PopupCalculation.topVerticalBottom(triggerEl, triggerOffset);
                break;
            }
            case PopupBody.Position.BOTTOM_RIGHT: {
                left = PopupCalculation.leftVerticalRight(triggerEl, triggerOffset, this.popupEl);
                top = PopupCalculation.topVerticalBottom(triggerEl, triggerOffset);
                break;
            }
            case PopupBody.Position.LEFT_TOP: {
                left = PopupCalculation.leftHorizontalLeft(triggerOffset, this.popupEl);
                top = PopupCalculation.topHorizontalTop(triggerOffset);
                break;
            }
            case PopupBody.Position.LEFT: {
                left = PopupCalculation.leftHorizontalLeft(triggerOffset, this.popupEl);
                top = PopupCalculation.topHorizontalMiddle(triggerEl, triggerOffset, this.popupEl);
                break;
            }
            case PopupBody.Position.LEFT_BOTTOM: {
                left = PopupCalculation.leftHorizontalLeft(triggerOffset, this.popupEl);
                top = PopupCalculation.topHorizontalBottom(triggerEl, triggerOffset, this.popupEl);
                break;
            }
            case PopupBody.Position.RIGHT_TOP: {
                left = PopupCalculation.leftHorizontalRight(triggerEl, triggerOffset);
                top = PopupCalculation.topHorizontalTop(triggerOffset);
                break;
            }
            case PopupBody.Position.RIGHT: {
                left = PopupCalculation.leftHorizontalRight(triggerEl, triggerOffset);
                top = PopupCalculation.topHorizontalMiddle(triggerEl, triggerOffset, this.popupEl);
                break;
            }
            case PopupBody.Position.RIGHT_BOTTOM: {
                left = PopupCalculation.leftHorizontalRight(triggerEl, triggerOffset);
                top = PopupCalculation.topHorizontalBottom(triggerEl, triggerOffset, this.popupEl);
                break;
            }
        }

        return {left, top};

    }

    triggerPopupEventHandle(el, triggerEl, popupEl, triggerMode, currentVisible, isAutoClose) {

        if (!triggerEl) {
            return true;
        }

        while (el) {
            if (el == popupEl) {
                return currentVisible;
            } else if (el == triggerEl) {
                return triggerMode === PopupBody.TriggerMode.TOGGLE ? !currentVisible : true;
            }
            el = el.parentNode;
        }

        return isAutoClose ? false : currentVisible;

    }

    mousedownHandler(e) {

        const {triggerEl, triggerMode, isAutoClose, triggerHandler, onRequestClose} = this.props,
            visible = triggerHandler ?
                triggerHandler(
                    e.target,
                    triggerEl,
                    this.popupEl,
                    triggerMode,
                    this.state.visible,
                    isAutoClose
                )
                :
                this.triggerPopupEventHandle(
                    e.target,
                    triggerEl,
                    this.popupEl,
                    triggerMode,
                    this.state.visible,
                    isAutoClose
                );

        this.setState({
            visible
        }, () => {
            if (!visible) {
                this.requestCloseTimeout && clearTimeout(this.requestCloseTimeout);
                this.requestCloseTimeout = setTimeout(() => {
                    this.hasMounted && onRequestClose && onRequestClose(e);
                }, 250);
            }
        });

    }

    resizeHandler() {
        this.debounceResizeHandler();
    }

    debounceResizeHandler() {
        this.forceUpdate();
    }

    wheelHandler(e) {
        const {shouldPreventContainerScroll, onWheel} = this.props;
        shouldPreventContainerScroll && Event.preventContainerScroll(e);
        onWheel && onWheel(e);
    }

    initializeAnimation(callback) {
        setTimeout(() => {
            this.hasMounted && callback();
        }, 0);
    }

    animate() {
        this.setState({
            visible: true
        });
    }

    componentDidMount() {

        this.hasMounted = true;
        this.popupEl = findDOMNode(this.refs.popup);

        Event.addEvent(document, 'mousedown', this.mousedownHandler);
        Event.addEvent(window, 'resize', this.resizeHandler);

        this.props.isEscClose && PopupManagement.push(this);

    }

    componentWillAppear(callback) {
        this.initializeAnimation(callback);
    }

    componentDidAppear() {
        this.animate();
    }

    componentDidUpdate() {
        const {onRender} = this.props,
            {visible} = this.state;
        visible && onRender && onRender(this.popupEl, this.props.triggerEl);
    }

    componentWillUnmount() {

        this.hasMounted = false;
        this.requestCloseTimeout && clearTimeout(this.requestCloseTimeout);

        Event.removeEvent(document, 'mousedown', this.mousedownHandler);
        Event.removeEvent(window, 'resize', this.resizeHandler);

    }

    render() {

        const {children, className, style, theme, hasTriangle, triangle, position, isAnimated, depth} = this.props,
            {visible} = this.state,
            popupClassName = (visible ? '' : ' hidden') + (hasTriangle ? ' popup-has-triangle' : '')
                + (theme ? ` theme-${theme}` : '') + (position ? ` popup-position-${position}` : '')
                + (isAnimated ? ' popup-animated' : '') + (className ? ' ' + className : '');

        return (
            <Paper ref="popup"
                   className={'popup' + popupClassName}
                   style={{...this.getPopupStyle(), ...style}}
                   depth={depth}
                   onWheel={this.wheelHandler}>

                {
                    hasTriangle ?
                        <div className="popup-triangle-wrapper">
                            {triangle}
                        </div>
                        :
                        null
                }

                <div className="popup-content"
                     onWheel={this.wheelHandler}>
                    {children}
                </div>

            </Paper>
        );

    }
};

PopupBody.propTypes = {

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
    position: PropTypes.oneOf(Util.enumerateValue(PopupBody.Position)),

    /**
     * If true,popup will have animation effects.
     */
    isAnimated: PropTypes.bool,

    /**
     * The status of popup-triangle.Can be open or toggle.
     */
    triggerMode: PropTypes.oneOf(Util.enumerateValue(PopupBody.TriggerMode)),

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    isAutoClose: PropTypes.bool,
    isEscClose: PropTypes.bool,
    shouldPreventContainerScroll: PropTypes.bool,

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

PopupBody.defaultProps = {

    className: '',
    style: null,
    depth: 6,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    triangle: <div className="popup-triangle"></div>,
    theme: Theme.DEFAULT,
    position: PopupBody.Position.BOTTOM_LEFT,
    isAnimated: true,
    triggerMode: PopupBody.TriggerMode.TOGGLE,

    isAutoClose: true,
    isEscClose: true,
    shouldPreventContainerScroll: true

};