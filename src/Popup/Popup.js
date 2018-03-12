/**
 * @file Popup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TriggerPop from '../_TriggerPop';
import Theme from '../Theme';

import Position from '../_statics/Position';
import Event from '../_vendors/Event';
import Dom from '../_vendors/Dom';
import Util from '../_vendors/Util';

class Popup extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.closeTimeout = null;

        this.clearCloseTimeout = ::this.clearCloseTimeout;
        this.mouseDownHandler = ::this.mouseDownHandler;

    }

    clearCloseTimeout() {
        if (this.closeTimeout) {
            clearTimeout(this.closeTimeout);
            this.closeTimeout = null;
        }
    }

    triggerHandler(el, triggerEl, popupEl, currentVisible, isAutoClose) {

        while (el) {
            if (el == popupEl) {
                return currentVisible;
            }
            el = el.parentNode;
        }

        return isAutoClose ? false : currentVisible;

    }

    mouseDownHandler(e) {

        const {visible, triggerEl, isAutoClose, triggerHandler, onRequestClose} = this.props,
            popupEl = this.refs.popup.getEl();

        if (!triggerEl) {
            return;
        }

        let currVisible;

        if (triggerHandler) {
            currVisible = triggerHandler(e.target, triggerEl, popupEl, visible, isAutoClose);
        } else if (!Dom.isParent(e.target, triggerEl)) {
            currVisible = this.triggerHandler(e.target, triggerEl, popupEl, visible, isAutoClose);
        }

        if (currVisible === false) {
            this.clearCloseTimeout();
            this.closeTimeout = setTimeout(() => {
                onRequestClose && onRequestClose(e);
            });
        }

    }

    /**
     * public
     */
    resetPosition() {
        this.refs.popup.resetPosition();
    }

    componentDidMount() {
        Event.addEvent(document, 'mousedown', this.mouseDownHandler);
    }

    componentWillUnmount() {
        this.clearCloseTimeout();
        Event.removeEvent(document, 'mousedown', this.mouseDownHandler);
    }

    render() {

        const {

                className, contentClassName,

                // not passing down these props
                triggerHandler, onRequestClose,

                ...restProps

            } = this.props,

            popupClassName = classNames('popup', {
                [className]: className
            }),

            popupContentClassName = classNames('popup-content', {
                [contentClassName]: contentClassName
            });

        return (
            <TriggerPop {...restProps}
                        ref="popup"
                        className={popupClassName}
                        contentClassName={popupContentClassName}/>
        );
    }

};

Popup.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the content element.
     */
    contentClassName: PropTypes.string,

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
     * The popup alignment.
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
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

Popup.defaultProps = {

    className: null,
    contentClassName: null,
    style: null,
    depth: 6,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    theme: Theme.DEFAULT,
    position: Position.BOTTOM,
    isAnimated: true,

    isAutoClose: true,
    isEscClose: true,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false

};

export default Popup;