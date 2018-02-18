/**
 * @file Menu component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TriggerPop from '../TriggerPop';
import Theme from '../Theme';

import Position from '../_statics/Position';
import Event from '../_vendors/Event';
import Util from '../_vendors/Util';

class Menu extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.closeTimeout = null;

        this.clearCloseTimeout = ::this.clearCloseTimeout;
        this.mouseOverHandler = ::this.mouseOverHandler;
        this.mouseOutHandler = ::this.mouseOutHandler;
        this.renderHandler = ::this.renderHandler;
        this.destroyHandler = ::this.destroyHandler;

    }

    clearCloseTimeout() {
        if (this.closeTimeout) {
            clearTimeout(this.closeTimeout);
            this.closeTimeout = null;
        }
    }

    mouseOverHandler() {
        this.clearCloseTimeout();
    }

    mouseOutHandler(e) {
        const {onRequestClose} = this.props;
        this.clearCloseTimeout();
        this.closeTimeout = setTimeout(() => {
            onRequestClose && onRequestClose(e);
        }, 1000 / 6);
    }

    renderHandler(el) {
        const {triggerEl} = this.props;
        Event.addEvent(triggerEl, 'mouseover', this.mouseOverHandler);
        Event.addEvent(triggerEl, 'mouseout', this.mouseOutHandler);
        Event.addEvent(el, 'mouseover', this.mouseOverHandler);
        Event.addEvent(el, 'mouseout', this.mouseOutHandler);
    }

    destroyHandler(el) {
        const {triggerEl} = this.props;
        Event.removeEvent(triggerEl, 'mouseover', this.mouseOverHandler);
        Event.removeEvent(triggerEl, 'mouseout', this.mouseOutHandler);
        Event.removeEvent(el, 'mouseover', this.mouseOverHandler);
        Event.removeEvent(el, 'mousemove', this.mouseOutHandler);
    }

    /**
     * public
     */
    resetPosition() {
        this.refs.menu.resetPosition();
    }

    componentWillUnmount() {
        this.clearCloseTimeout();
    }

    render() {

        const {

                className,

                // not passing down these props
                onRequestClose,

                ...restProps

            } = this.props,

            popupClassName = classNames('menu', {
                [className]: className
            });

        return (
            <TriggerPop {...restProps}
                        ref="menu"
                        className={popupClassName}
                        contentClassName="menu-content"
                        onRender={this.renderHandler}
                        onDestroy={this.destroyHandler}/>
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