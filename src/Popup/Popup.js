/**
 * @file Popup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import query from 'dom-helpers/query';

import TriggerPop from '../_TriggerPop';
import Theme from '../Theme';

import Position from '../_statics/Position';

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

    }

    /**
     * public
     */
    getEl = () => {
        return this.refs.pop && this.refs.pop.getEl();
    };

    /**
     * public
     */
    resetPosition = () => {
        this.refs.pop && this.refs.pop.resetPosition();
    };

    clearCloseTimeout = () => {
        if (this.closeTimeout) {
            clearTimeout(this.closeTimeout);
            this.closeTimeout = null;
        }
    };

    triggerHandler = (el, triggerEl, popupEl, currentVisible, isBlurClose) => {

        // el is missing
        if (el && !query.contains(document, el)) {
            return currentVisible;
        }

        if ((triggerEl && el && query.contains(triggerEl, el))
            || (popupEl && el && query.contains(popupEl, el))) {
            return currentVisible;
        }

        return isBlurClose ? false : currentVisible;

    };

    closeHandler = e => {

        const {visible, triggerEl, isBlurClose, triggerHandler, onRequestClose} = this.props,
            popupEl = this.refs.pop.getEl();

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
                onRequestClose && onRequestClose(e);
            });
        }

    };

    renderHandler = (...args) => {

        PopManagement.push(this);

        const {onRender} = this.props;
        onRender && onRender(...args);

    };

    destroyHandler = (...args) => {

        PopManagement.pop(this);

        const {onDestroy} = this.props;
        onDestroy && onDestroy(...args);

    };

    componentDidMount() {
        Event.addEvent(document, 'click', this.closeHandler);
    }

    componentWillUnmount() {

        this.clearCloseTimeout();
        Event.removeEvent(document, 'click', this.closeHandler);

        PopManagement.pop(this);

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
                        ref="pop"
                        className={popupClassName}
                        contentClassName={popupContentClassName}
                        onRender={this.renderHandler}
                        onDestroy={this.destroyHandler}/>
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
    shouldPreventContainerScroll: PropTypes.bool,

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
    shouldPreventContainerScroll: true,
    shouldFollowScroll: false,
    resetPositionWait: 250,
    showModal: false

};

export default Popup;
