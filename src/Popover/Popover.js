/**
 * @file Popover component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import TriggerPop from '../_TriggerPop';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// Vendors
import classNames from 'classnames';
import Event from '../_vendors/Event';
import Util from '../_vendors/Util';

class Popover extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.closeTimeout = null;

        this.pop = createRef();
        this.popInstance = null;

    }

    componentDidMount() {
        this.popInstance = this.pop && this.pop.current;
    }

    componentWillUnmount() {
        this.clearCloseTimeout();
    }

    /**
     * public
     */
    resetPosition = () => {
        this.popInstance && this.popInstance.resetPosition();
    };

    clearCloseTimeout = () => {
        if (this.closeTimeout) {
            clearTimeout(this.closeTimeout);
            this.closeTimeout = null;
        }
    };

    handleMouseOver = () => {
        this.clearCloseTimeout();
    };

    handleMouseOut = e => {
        const {onRequestClose} = this.props;
        this.clearCloseTimeout();
        this.closeTimeout = setTimeout(() => {
            onRequestClose && onRequestClose(e);
        }, 1000 / 6);
    };

    handleRender = (el, ...restArgs) => {

        const {triggerEl, onRender} = this.props;
        onRender?.(el, ...restArgs);

        Event.addEvent(triggerEl, 'mouseover', this.handleMouseOver);
        Event.addEvent(triggerEl, 'mouseout', this.handleMouseOut);
        Event.addEvent(el, 'mouseover', this.handleMouseOver);
        Event.addEvent(el, 'mouseout', this.handleMouseOut);

    };

    handleDestroy = (el, ...restArgs) => {

        const {triggerEl, onDestroy} = this.props;
        onDestroy?.(el, ...restArgs);

        Event.removeEvent(triggerEl, 'mouseover', this.handleMouseOver);
        Event.removeEvent(triggerEl, 'mouseout', this.handleMouseOut);
        Event.removeEvent(el, 'mouseover', this.handleMouseOver);
        Event.removeEvent(el, 'mousemove', this.handleMouseOut);

    };

    render() {

        const {

            className, contentClassName,

            // not passing down these props
            onRequestClose,

            ...restProps

        } = this.props;

        return (
            <TriggerPop {...restProps}
                        ref={this.pop}
                        className={classNames('popover', {
                            [className]: className
                        })}
                        contentClassName={classNames('popover-content', {
                            [contentClassName]: contentClassName
                        })}
                        onRender={this.handleRender}
                        onDestroy={this.handleDestroy}/>
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

    shouldFollowScroll: PropTypes.bool,
    scrollEl: PropTypes.object,

    resetPositionWait: PropTypes.number,
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

    parentEl: document.body,

    visible: false,
    hasTriangle: true,
    theme: Theme.DEFAULT,
    position: Position.BOTTOM,
    isAnimated: true,

    isBlurClose: true,
    shouldFollowScroll: false,
    resetPositionWait: 250,
    showModal: false

};

export default Popover;
