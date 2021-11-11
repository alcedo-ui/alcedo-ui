/**
 * @file CursorPopover component
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import CursorPop from '../_CursorPop';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// Vendors
import classNames from 'classnames';
import Event from '../_vendors/Event';
import Util from '../_vendors/Util';

class CursorPopover extends Component {

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
    }

    componentWillUnmount() {
        this.clearCloseTimeout();
    }

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

    handleMouseEnter = () => {
        this.clearCloseTimeout();
    };

    handleMouseLeave = e => {

        this.clearCloseTimeout();

        const {enterable} = this.props;

        if (enterable) {
            this.closeTimeout = setTimeout(() => this.props.onRequestClose?.(e), 1000 / 6);
        } else {
            this.props.onRequestClose?.(e);
        }

    };

    handleRender = (el, triggerEl) => {

        const {enterable} = this.props;
        this.props.onRender?.(el, triggerEl);

        Event.addEvent(triggerEl, 'mouseenter', this.handleMouseEnter);
        Event.addEvent(triggerEl, 'mouseleave', this.handleMouseLeave);

        if (enterable) {
            Event.addEvent(el, 'mouseenter', this.handleMouseEnter);
            Event.addEvent(el, 'mouseleave', this.handleMouseLeave);
        }

    };

    handleDestroy = (el, triggerEl) => {

        const {enterable} = this.props;
        this.props.onDestroy?.(el, triggerEl);

        Event.removeEvent(triggerEl, 'mouseenter', this.handleMouseEnter);
        Event.removeEvent(triggerEl, 'mouseleave', this.handleMouseLeave);

        if (enterable) {
            Event.removeEvent(el, 'mouseenter', this.handleMouseEnter);
            Event.removeEvent(el, 'mouseleave', this.handleMouseLeave);
        }

    };

    render() {

        const {

            className, contentClassName,

            // not passing down these props
            // eslint-disable-next-line no-unused-vars
            onRequestClose,

            ...restProps

        } = this.props;

        return (
            <CursorPop {...restProps}
                       ref={this.pop}
                       className={classNames('cursor-popover', {
                           [className]: className
                       })}
                       contentClassName={classNames('cursor-popover-content', {
                           [contentClassName]: contentClassName
                       })}
                       onRender={this.handleRender}
                       onDestroy={this.handleDestroy}/>
        );
    }

}

CursorPopover.propTypes = {

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
     * This is the DOM element that will be used to set the position of the CursorPopover.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the CursorPopover is visible.
     */
    visible: PropTypes.bool,

    container: PropTypes.element,

    /**
     * The CursorPopover theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The CursorPopover alignment.The value can be CursorPopover.Position.LEFT or CursorPopover.Position.RIGHT.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true, CursorPopover will have animation effects.
     */
    isAnimated: PropTypes.bool,

    enterable: PropTypes.bool,

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    shouldFollowScroll: PropTypes.bool,
    scrollEl: PropTypes.object,

    resetPositionWait: PropTypes.number,

    /**
     * The function of CursorPopover render.
     */
    onRender: PropTypes.func,

    /**
     * The function of CursorPopover rendered.
     */
    onRendered: PropTypes.func,

    /**
     * The function of CursorPopover destroy.
     */
    onDestroy: PropTypes.func,

    /**
     * The function of CursorPopover destroyed.
     */
    onDestroyed: PropTypes.func,

    /**
     * Callback function fired when the CursorPopover is requested to be closed.
     */
    onRequestClose: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func,

    onCursorMove: PropTypes.func,
    onTargetChange: PropTypes.func

};

CursorPopover.defaultProps = {

    parentEl: document.body,

    visible: false,
    theme: Theme.DEFAULT,
    position: Position.BOTTOM_LEFT,
    isAnimated: true,
    enterable: false,

    shouldFollowScroll: false,
    resetPositionWait: 250

};

export default CursorPopover;
