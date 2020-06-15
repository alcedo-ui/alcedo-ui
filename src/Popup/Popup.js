/**
 * @file Popup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import domContains from 'dom-helpers/contains';

// Components
import TriggerPop from '../_TriggerPop';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// Vendors
import Event from '../_vendors/Event';
import Dom from '../_vendors/Dom';
import Util from '../_vendors/Util';
import PopManagement from '../_vendors/PopManagement';

class Popup extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.closeTimeout = null;
        this.pop = createRef();
        this.popInstance = null;

    }

    componentDidMount() {

        this.popInstance = this.pop?.current;

        Event.addEvent(document, 'click', this.handleClose);

    }

    componentWillUnmount() {

        this.clearCloseTimeout();
        Event.removeEvent(document, 'click', this.handleClose);

        PopManagement.pop(this);

    }

    /**
     * public
     */
    getEl = () => {
        return this.popInstance?.getEl?.();
    };

    /**
     * public
     */
    resetPosition = () => {
        this.popInstance?.resetPosition?.();
    };

    clearCloseTimeout = () => {
        if (this.closeTimeout) {
            clearTimeout(this.closeTimeout);
            this.closeTimeout = null;
        }
    };

    triggerHandler = (el, triggerEl, popupEl, currentVisible, isBlurClose) => {

        // el is missing
        if (el && !domContains(document, el)) {
            return currentVisible;
        }

        if ((triggerEl && el && domContains(triggerEl, el))
            || (popupEl && el && domContains(popupEl, el))) {
            return currentVisible;
        }

        return isBlurClose ? false : currentVisible;

    };

    handleClose = e => {

        const {visible, triggerEl, isBlurClose, triggerHandler, onRequestClose} = this.props,
            popupEl = this.popInstance.getEl();

        if (!visible || !triggerEl) {
            return;
        }

        let currVisible;

        if (triggerHandler) {
            currVisible = triggerHandler(e.target, triggerEl, popupEl, visible, isBlurClose);
        } else if (!Dom.isParent(e.target, triggerEl)) {
            currVisible = this.triggerHandler(e.target, triggerEl, popupEl, visible, isBlurClose);
        }

        if (currVisible === false) {
            this.clearCloseTimeout();
            this.closeTimeout = setTimeout(() => {
                onRequestClose?.(e);
            });
        }

    };

    handleRender = (...args) => {
        PopManagement.push(this);
        this.props.onRender?.(...args);
    };

    handleDestroy = (...args) => {
        PopManagement.pop(this);
        this.props.onDestroy?.(...args);
    };

    render() {

        const {

            className, contentClassName,

            // not passing down these props
            triggerHandler, onRequestClose,

            ...restProps

        } = this.props;

        return (
            <TriggerPop {...restProps}
                        ref={this.pop}
                        className={classNames('popup', {
                            [className]: className
                        })}
                        contentClassName={classNames('popup-content', {
                            [contentClassName]: contentClassName
                        })}
                        onRender={this.handleRender}
                        onDestroy={this.handleDestroy}/>
        );
    }

}

Popup.propTypes = {

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
     * The popover theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    parentEl: PropTypes.object,

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

    isBlurClose: PropTypes.bool,
    isEscClose: PropTypes.bool,

    shouldFollowScroll: PropTypes.bool,
    scrollEl: PropTypes.object,

    resetPositionWait: PropTypes.number,
    showModal: PropTypes.bool,

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

    parentEl: document.body,

    visible: false,
    hasTriangle: true,
    position: Position.BOTTOM,
    isAnimated: true,

    isBlurClose: true,
    isEscClose: true,
    shouldFollowScroll: false,
    resetPositionWait: 250,
    showModal: false

};

export default Popup;
