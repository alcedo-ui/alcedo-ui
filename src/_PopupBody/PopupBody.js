import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Paper from '../Paper';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

import './PopupBody.css';

export default class PopupBody extends Component {

    constructor(props) {

        super(props);

        this.hasMounted = false;
        this.unrenderTimeout = null;

        this.state = {
            visible: false
        };

        this.getPopupStyle = this::this.getPopupStyle;
        this.mousedownHandle = this::this.mousedownHandle;
        this.initializeAnimation = this::this.initializeAnimation;
        this.animate = this::this.animate;

    }

    triggerPopupEventHandle(el, triggerEl, popupEl, triggerMode, currentVisible) {

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

        return false;

    }

    mousedownHandle(e) {

        const {triggerEl, onRequestClose} = this.props,
            visible = this.triggerPopupEventHandle(
                e.target,
                triggerEl,
                this.popupEl,
                this.props.triggerMode,
                this.state.visible
            );

        this.setState({
            visible
        }, () => {
            if (!visible) {
                setTimeout(() => {
                    onRequestClose && onRequestClose();
                }, 250);
            }
        });

    }

    getPopupStyle() {

        const {triggerEl, position} = this.props;

        if (!triggerEl || !this.popupEl) {
            return;
        }

        const triggerOffset = Util.getOffset(triggerEl),

            // top
            topVerticalBottom = triggerOffset.top + triggerEl.clientHeight,
            topVerticalTop = triggerOffset.top - this.popupEl.offsetHeight
                - parseInt(getComputedStyle(this.popupEl).marginTop)
                - parseInt(getComputedStyle(this.popupEl).marginBottom),
            topHorizontalTop = triggerOffset.top,
            topHorizontalMiddle = triggerOffset.top + triggerEl.clientHeight / 2 - this.popupEl.clientHeight / 2,
            topHorizontalBottom = triggerOffset.top + triggerEl.clientHeight - this.popupEl.clientHeight,

            // left
            leftVerticalLeft = triggerOffset.left,
            leftVerticalCenter = triggerOffset.left + triggerEl.clientWidth / 2 - this.popupEl.clientWidth / 2,
            leftVerticalRight = triggerOffset.left - (this.popupEl.clientWidth - triggerEl.clientWidth),
            leftHorizontalLeft = triggerOffset.left - this.popupEl.clientWidth
                - parseInt(getComputedStyle(this.popupEl).marginLeft)
                - parseInt(getComputedStyle(this.popupEl).marginRight),
            leftHorizontalRight = triggerOffset.left + triggerEl.clientWidth;

        switch (position) {
            case PopupBody.Position.TOP_LEFT: {
                return {
                    top: topVerticalTop,
                    left: leftVerticalLeft
                };
            }
            case PopupBody.Position.TOP: {
                return {
                    top: topVerticalTop,
                    left: leftVerticalCenter
                };
            }
            case PopupBody.Position.TOP_RIGHT: {
                return {
                    top: topVerticalTop,
                    left: leftVerticalRight
                };
            }
            case PopupBody.Position.BOTTOM_LEFT: {
                return {
                    top: topVerticalBottom,
                    left: leftVerticalLeft
                };
            }
            case PopupBody.Position.BOTTOM: {
                return {
                    top: topVerticalBottom,
                    left: leftVerticalCenter
                };
            }
            case PopupBody.Position.BOTTOM_RIGHT: {
                return {
                    top: topVerticalBottom,
                    left: leftVerticalRight
                };
            }
            case PopupBody.Position.LEFT_TOP: {
                return {
                    top: topHorizontalTop,
                    left: leftHorizontalLeft
                };
            }
            case PopupBody.Position.LEFT: {
                return {
                    top: topHorizontalMiddle,
                    left: leftHorizontalLeft
                };
            }
            case PopupBody.Position.LEFT_BOTTOM: {
                return {
                    top: topHorizontalBottom,
                    left: leftHorizontalLeft
                };
            }
            case PopupBody.Position.RIGHT_TOP: {
                return {
                    top: topHorizontalTop,
                    left: leftHorizontalRight
                };
            }
            case PopupBody.Position.RIGHT: {
                return {
                    top: topHorizontalMiddle,
                    left: leftHorizontalRight
                };
            }
            case PopupBody.Position.RIGHT_BOTTOM: {
                return {
                    top: topHorizontalBottom,
                    left: leftHorizontalRight
                };
            }
        }

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
        this.popupEl = require('react-dom').findDOMNode(this.refs.popup);

        Event.addEvent(document, 'mousedown', this.mousedownHandle);

    }

    componentWillAppear(callback) {
        this.initializeAnimation(callback);
    }

    componentDidAppear() {
        this.animate();
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.mousedownHandle);
        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);
    }

    render() {

        const {children, className, style, hasTriangle, theme, position} = this.props,
            {visible} = this.state,
            popupClassName = (visible ? '' : ' hidden') + (hasTriangle ? ' popup-has-triangle' : '')
                + (theme ? ` theme-${theme}` : '') + (position ? ` popup-position-${position}` : '')
                + (className ? ' ' + className : '');

        return (
            <Paper ref="popup"
                   className={'popup' + popupClassName}
                   style={{...this.getPopupStyle(), ...style}}>

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

PopupBody.Position = {

    TOP_LEFT: 'top-left',
    TOP: 'top',
    TOP_RIGHT: 'top-right',

    BOTTOM_LEFT: 'bottom-left',
    BOTTOM: 'bottom',
    BOTTOM_RIGHT: 'bottom-right',

    LEFT_TOP: 'left-top',
    LEFT: 'left-top',
    LEFT_BOTTOM: 'left-bottom',

    RIGHT_TOP: 'right-top',
    RIGHT: 'right',
    RIGHT_BOTTOM: 'right-bottom'

};

PopupBody.TriggerMode = {
    TOGGLE: 'toggle',
    OPEN: 'open'
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
     * This number represents the zDepth of the popup shadow.
     */
    depth: PropTypes.number,

    /**
     *
     */
    triggerMode: PropTypes.oneOf(Util.enumerateValue(PopupBody.TriggerMode)),

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
    depth: 4,
    triggerMode: PopupBody.TriggerMode.TOGGLE

};