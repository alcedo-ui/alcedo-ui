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

import './PopupBody.css';

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

    constructor(props) {

        super(props);

        this.hasMounted = false;
        this.requestCloseTimeout = null;

        this.state = {
            visible: false
        };

        this.getPopupStyle = this::this.getPopupStyle;
        this.mousedownHandle = this::this.mousedownHandle;
        this.resizeHandle = this::this.resizeHandle;
        this.debounceResizeHandle = _.debounce(this::this.debounceResizeHandle, 150);
        this.initializeAnimation = this::this.initializeAnimation;
        this.animate = this::this.animate;

    }

    calTopVerticalBottom(triggerEl, triggerOffset) {
        return triggerOffset.top + triggerEl.offsetHeight;
    }

    calTopVerticalTop(triggerOffset, popupEl) {
        return triggerOffset.top - popupEl.offsetHeight
            - parseInt(getComputedStyle(popupEl).marginTop)
            - parseInt(getComputedStyle(popupEl).marginBottom);
    }

    calTopHorizontalTop(triggerOffset) {
        return triggerOffset.top;
    }

    calTopHorizontalMiddle(triggerEl, triggerOffset, popupEl) {
        return triggerOffset.top + triggerEl.offsetHeight / 2 - popupEl.offsetHeight / 2;
    }

    calTopHorizontalBottom(triggerEl, triggerOffset, popupEl) {
        return triggerOffset.top + triggerEl.offsetHeight - popupEl.offsetHeight;
    }

    calLeftVerticalLeft(triggerOffset) {
        return triggerOffset.left;
    }

    calLeftVerticalCenter(triggerEl, triggerOffset, popupEl) {
        return triggerOffset.left + triggerEl.offsetWidth / 2 - popupEl.offsetWidth / 2;
    }

    calLeftVerticalRight(triggerEl, triggerOffset, popupEl) {
        return triggerOffset.left - (popupEl.offsetWidth - triggerEl.offsetWidth);
    }

    calLeftHorizontalLeft(triggerOffset, popupEl) {
        return triggerOffset.left - popupEl.offsetWidth
            - parseInt(getComputedStyle(popupEl).marginLeft)
            - parseInt(getComputedStyle(popupEl).marginRight);
    }

    calLeftHorizontalRight(triggerEl, triggerOffset) {
        return triggerOffset.left + triggerEl.offsetWidth;
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
                left = this.calLeftVerticalLeft(triggerOffset);
                top = this.calTopVerticalTop(triggerOffset, this.popupEl);
                break;
            }
            case PopupBody.Position.TOP: {
                left = this.calLeftVerticalCenter(triggerEl, triggerOffset, this.popupEl);
                top = this.calTopVerticalTop(triggerOffset, this.popupEl);
                break;
            }
            case PopupBody.Position.TOP_RIGHT: {
                left = this.calLeftVerticalRight(triggerEl, triggerOffset, this.popupEl);
                top = this.calTopVerticalTop(triggerOffset, this.popupEl);
                break;
            }
            case PopupBody.Position.BOTTOM_LEFT: {
                left = this.calLeftVerticalLeft(triggerOffset);
                top = this.calTopVerticalBottom(triggerEl, triggerOffset);
                break;
            }
            case PopupBody.Position.BOTTOM: {
                left = this.calLeftVerticalCenter(triggerEl, triggerOffset, this.popupEl);
                top = this.calTopVerticalBottom(triggerEl, triggerOffset);
                break;
            }
            case PopupBody.Position.BOTTOM_RIGHT: {
                left = this.calLeftVerticalRight(triggerEl, triggerOffset, this.popupEl);
                top = this.calTopVerticalBottom(triggerEl, triggerOffset);
                break;
            }
            case PopupBody.Position.LEFT_TOP: {
                left = this.calLeftHorizontalLeft(triggerOffset, this.popupEl);
                top = this.calTopHorizontalTop(triggerOffset);
                break;
            }
            case PopupBody.Position.LEFT: {
                left = this.calLeftHorizontalLeft(triggerOffset, this.popupEl);
                top = this.calTopHorizontalMiddle(triggerEl, triggerOffset, this.popupEl);
                break;
            }
            case PopupBody.Position.LEFT_BOTTOM: {
                left = this.calLeftHorizontalLeft(triggerOffset, this.popupEl);
                top = this.calTopHorizontalBottom(triggerEl, triggerOffset, this.popupEl);
                break;
            }
            case PopupBody.Position.RIGHT_TOP: {
                left = this.calLeftHorizontalRight(triggerEl, triggerOffset);
                top = this.calTopHorizontalTop(triggerOffset);
                break;
            }
            case PopupBody.Position.RIGHT: {
                left = this.calLeftHorizontalRight(triggerEl, triggerOffset);
                top = this.calTopHorizontalMiddle(triggerEl, triggerOffset, this.popupEl);
                break;
            }
            case PopupBody.Position.RIGHT_BOTTOM: {
                left = this.calLeftHorizontalRight(triggerEl, triggerOffset);
                top = this.calTopHorizontalBottom(triggerEl, triggerOffset, this.popupEl);
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

    mousedownHandle(e) {

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
                    this.hasMounted && onRequestClose && onRequestClose();
                }, 250);
            }
        });

    }

    resizeHandle() {
        this.debounceResizeHandle();
    }

    debounceResizeHandle() {
        this.forceUpdate();
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

        Event.addEvent(document, 'mousedown', this.mousedownHandle);
        Event.addEvent(window, 'resize', this.resizeHandle);

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
        visible && onRender && onRender(this.refs.popup);
    }

    componentWillUnmount() {

        this.hasMounted = false;
        this.requestCloseTimeout && clearTimeout(this.requestCloseTimeout);

        Event.removeEvent(document, 'mousedown', this.mousedownHandle);
        Event.removeEvent(window, 'resize', this.resizeHandle);

    }

    render() {

        const {children, className, style, hasTriangle, theme, position, isAnimated, depth} = this.props,
            {visible} = this.state,
            popupClassName = (visible ? '' : ' hidden') + (hasTriangle ? ' popup-has-triangle' : '')
                + (theme ? ` theme-${theme}` : '') + (position ? ` popup-position-${position}` : '')
                + (isAnimated ? ' popup-animated' : '') + (className ? ' ' + className : '');

        return (
            <Paper ref="popup"
                   className={'popup' + popupClassName}
                   style={{...this.getPopupStyle(), ...style}}
                   depth={depth}>

                {
                    hasTriangle ?
                        <div className="popup-triangle"></div>
                        :
                        null
                }

                <div className="popup-content">
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
    onRequestClose: PropTypes.func

};

PopupBody.defaultProps = {

    className: '',
    style: null,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    theme: Theme.DEFAULT,
    position: PopupBody.Position.BOTTOM_LEFT,
    isAnimated: true,
    triggerMode: PopupBody.TriggerMode.TOGGLE,
    depth: 4,

    isAutoClose: true,
    isEscClose: true

};