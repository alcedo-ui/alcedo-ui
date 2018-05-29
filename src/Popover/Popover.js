/**
 * @file Popover component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TriggerPop from '../_TriggerPop';
import Theme from '../Theme';

import Position from '../_statics/Position';

import Event from '../_vendors/Event';
import Util from '../_vendors/Util';

class Popover extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.closeTimeout = null;

    }

    clearCloseTimeout = () => {
        if (this.closeTimeout) {
            clearTimeout(this.closeTimeout);
            this.closeTimeout = null;
        }
    };

    mouseOverHandler = () => {
        this.clearCloseTimeout();
    };

    mouseOutHandler = e => {
        const {onRequestClose} = this.props;
        this.clearCloseTimeout();
        this.closeTimeout = setTimeout(() => {
            onRequestClose && onRequestClose(e);
        }, 1000 / 6);
    };

    renderHandler = el => {
        const {triggerEl} = this.props;
        Event.addEvent(triggerEl, 'mouseover', this.mouseOverHandler);
        Event.addEvent(triggerEl, 'mouseout', this.mouseOutHandler);
        Event.addEvent(el, 'mouseover', this.mouseOverHandler);
        Event.addEvent(el, 'mouseout', this.mouseOutHandler);
    };

    destroyHandler = el => {
        const {triggerEl} = this.props;
        Event.removeEvent(triggerEl, 'mouseover', this.mouseOverHandler);
        Event.removeEvent(triggerEl, 'mouseout', this.mouseOutHandler);
        Event.removeEvent(el, 'mouseover', this.mouseOverHandler);
        Event.removeEvent(el, 'mousemove', this.mouseOutHandler);
    };

    /**
     * public
     */
    resetPosition = () => {
        this.refs.popover.resetPosition();
    };

    componentWillUnmount() {
        this.clearCloseTimeout();
    }

    render() {

        const {

                className, contentClassName,

                // not passing down these props
                onRequestClose,

                ...restProps

            } = this.props,

            popoverClassName = classNames('popover', {
                [className]: className
            }),

            popoverContentClassName = classNames('popover-content', {
                [contentClassName]: contentClassName
            });

        return (
            <TriggerPop {...restProps}
                        ref="popover"
                        className={popoverClassName}
                        contentClassName={popoverContentClassName}
                        onRender={this.renderHandler}
                        onDestroy={this.destroyHandler}/>
        );
    }

}

Popover.propTypes = {

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
     * The popover alignment.The value can be Popover.Position.LEFT or Popover.Position.RIGHT.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true, popover will have animation effects.
     */
    isAnimated: PropTypes.bool,

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    isBlurClose: PropTypes.bool,
    shouldPreventContainerScroll: PropTypes.bool,
    isTriggerPositionFixed: PropTypes.bool,
    showModal: PropTypes.bool,

    /**
     * The function of popover render.
     */
    onRender: PropTypes.func,

    /**
     * The function of popover rendered.
     */
    onRendered: PropTypes.func,

    /**
     * The function of popover destroy.
     */
    onDestroy: PropTypes.func,

    /**
     * The function of popover destroyed.
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

Popover.defaultProps = {

    depth: 6,

    visible: false,
    hasTriangle: true,
    theme: Theme.DEFAULT,
    position: Position.BOTTOM,
    isAnimated: true,

    isBlurClose: true,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false,
    showModal: false

};

export default Popover;