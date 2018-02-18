/**
 * @file Menu component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Popover from '../Popover';
import Theme from '../Theme';

import Position from '../_statics/Position';
import Event from '../_vendors/Event';
import Dom from '../_vendors/Dom';
import Util from '../_vendors/Util';

class Menu extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.closeTimeout = null;

        this.clearCloseTimeout = ::this.clearCloseTimeout;
        this.mouseMoveHandler = ::this.mouseMoveHandler;

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

    mouseMoveHandler(e) {

        const {visible, triggerEl, isAutoClose, triggerHandler, onRequestClose} = this.props,
            popupEl = this.refs.menu.getEl();

        if (!triggerEl) {
            return;
        }

        let currVisible;

        if (triggerHandler) {
            currVisible = triggerHandler(e.target, triggerEl, popupEl, visible, isAutoClose);
        } else if (!Dom.isParent(e.target, triggerEl)) {
            currVisible = this.triggerHandler(e.target, triggerEl, popupEl, visible, isAutoClose);
        }

        this.clearCloseTimeout();

        if (currVisible === false) {
            this.closeTimeout = setTimeout(() => {
                onRequestClose && onRequestClose(e);
            }, 100);
        }

    }

    /**
     * public
     */
    resetPosition() {
        this.refs.menu.resetPosition();
    }

    componentDidMount() {
        Event.addEvent(document, 'mousemove', this.mouseMoveHandler);
    }

    componentWillUnmount() {
        this.clearCloseTimeout();
        Event.removeEvent(document, 'mousemove', this.mouseMoveHandler);
    }

    render() {

        const {

                className,

                // not passing down these props
                triggerHandler, onRequestClose,

                ...restProps

            } = this.props,

            popupClassName = classNames('menu', {
                [className]: className
            });

        return (
            <Popover {...restProps}
                     ref="menu"
                     className={popupClassName}
                     contentClassName="menu-content"/>
        );
    }

};

Menu.propTypes = {

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
     * The popover alignment.The value can be Menu.Position.LEFT or Menu.Position.RIGHT.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true, menu will have animation effects.
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
     * The function of menu event handler.
     */
    triggerHandler: PropTypes.func,

    /**
     * The function of menu render.
     */
    onRender: PropTypes.func,

    /**
     * The function of menu rendered.
     */
    onRendered: PropTypes.func,

    /**
     * The function of menu destroy.
     */
    onDestroy: PropTypes.func,

    /**
     * The function of menu destroyed.
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

Menu.defaultProps = {

    className: null,
    style: null,
    depth: 6,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    theme: Theme.DEFAULT,
    position: Position.BOTTOM_LEFT,
    isAnimated: true,

    isAutoClose: true,
    isEscClose: true,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false

};

export default Menu;