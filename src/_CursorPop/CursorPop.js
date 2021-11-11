/**
 * @file CursorPop component
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import Pop from '../_Pop';
import Paper from '../Paper';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';
import CursorPopCalculation from '../_vendors/CursorPopCalculation';
import Dom from '../_vendors/Dom';
import Event from '../_vendors/Event';

class CursorPop extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        // Closest scrollable element of cursor
        this.scrollEl = null;

        // Last cursor move target
        this.lastTarget = null;

        this.cursorOffset = {
            left: 0,
            top: 0
        };

        this.pop = createRef();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.shouldFollowScroll && !prevProps.visible && this.props.visible) {
            this.addWatchScroll();
        } else if (prevProps.visible && !this.props.visible) {
            this.removeWatchScroll();
        }
    }

    /**
     * public
     */
    getEl = () => {
        return this.pop?.current?.getEl?.();
    };

    /**
     * Reset pop position
     * @param transitionEl
     */
    resetPosition = (transitionEl = this.getEl()) => {
        const {parentEl, triggerEl, position} = this.props;
        CursorPopCalculation.setStyle(
            parentEl, triggerEl, transitionEl, this.getScrollEl(), position, this.cursorOffset
        );
    };

    handleMouseMove = e => {

        const {triggerEl} = this.props;

        if (e.target === triggerEl) {

            this.cursorOffset.left = (e?.offsetX || 0) + (triggerEl?.clientLeft || 0);
            this.cursorOffset.top = (e?.offsetY || 0) + (triggerEl?.clientTop || 0);

            this.resetPosition();

        }

        this.props.onCursorMove?.(e, triggerEl, this.getEl());

        if (e.target !== this.lastTarget) {
            this.props.onTargetChange?.(e.target, triggerEl, this.getEl(), e);
            this.lastTarget = e.target;
        }

    };

    handleRender = (el, triggerEl) => {
        Event.addEvent(triggerEl, 'mousemove', this.handleMouseMove);
        this.props.onRender?.(el, triggerEl);
    };

    handleDestroy = (el, triggerEl) => {
        Event.removeEvent(triggerEl, 'mousemove', this.handleMouseMove);
        this.props.onDestroy?.(el, triggerEl);
    };

    /**
     * Find the closest scrollable parent element
     * @param triggerEl
     * @returns {*}
     */
    getScrollEl = (triggerEl = this.props.triggerEl) => {

        if (this.props.scrollEl) {
            return this.props.scrollEl;
        }

        if (this.scrollEl) {
            return this.scrollEl;
        }

        const scrollEl = Dom.getClosestScrollable(triggerEl);
        return this.scrollEl = scrollEl || document.body;

    };

    /**
     * Scroll event callback
     */
    handleScroll = () => {
        this.resetPosition();
    };

    /**
     * Add scroll event
     * @param scrollEl
     */
    addWatchScroll = (scrollEl = this.getScrollEl()) => {

        const {triggerEl} = this.props;

        if (!triggerEl) {
            return;
        }

        scrollEl && Event.addEvent(scrollEl, 'scroll', this.handleScroll);

    };

    /**
     * Remove scroll event
     * @param scrollEl
     */
    removeWatchScroll = (scrollEl = this.getScrollEl()) => {
        scrollEl && Event.removeEvent(scrollEl, 'scroll', this.handleScroll);
    };

    render() {

        const {

            children,

            className, contentClassName, theme, container,
            position, isAnimated, enterable,

            // not passing down these props
            // eslint-disable-next-line no-unused-vars
            shouldFollowScroll, scrollEl, onCursorMove, onTargetChange,

            ...restProps

        } = this.props;

        return (
            <Pop {...restProps}
                 ref={this.pop}
                 className={classNames('cursor-pop', {
                     [`theme-${theme}`]: theme,
                     [`cursor-pop-${position}`]: position,
                     'cursor-pop-animated': isAnimated,
                     'cursor-pop-enterable': enterable,
                     [className]: className
                 })}
                 position={position}
                 container={container}
                 isAnimated={isAnimated}
                 resetPosition={this.resetPosition}
                 onRender={this.handleRender}
                 onDestroy={this.handleDestroy}>
                {
                    popEl => (
                        <div className={classNames('cursor-pop-content', {
                            [contentClassName]: contentClassName
                        })}>
                            {typeof children === 'function' ? children(popEl) : children}
                        </div>
                    )
                }
            </Pop>
        );

    }

}

CursorPop.propTypes = {

    children: PropTypes.any,

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
     * The cursor pop theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    parentEl: PropTypes.object,

    /**
     * This is the DOM element that will be used to set the position of the cursor pop.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the cursor pop is visible.
     */
    visible: PropTypes.bool,

    container: PropTypes.element,

    /**
     * The cursor pop alignment.The value can be Popup.Position.LEFT or Popup.Position.RIGHT.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true,popup will have animation effects.
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
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func,

    onCursorMove: PropTypes.func,
    onTargetChange: PropTypes.func

};

CursorPop.defaultProps = {

    theme: Theme.DEFAULT,
    parentEl: document.body,
    depth: 2,

    visible: false,
    container: <Paper/>,
    position: Position.BOTTOM_LEFT,
    isAnimated: true,
    enterable: false,

    shouldFollowScroll: false,
    resetPositionWait: 250

};

export default CursorPop;
