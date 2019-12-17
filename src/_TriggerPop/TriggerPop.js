/**
 * @file TriggerPop component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Components
import Pop from '../_Pop';
import Paper from '../Paper';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// Vendors
import Util from '../_vendors/Util';
import TriggerPopCalculation from '../_vendors/TriggerPopCalculation';
import Dom from '../_vendors/Dom';
import Event from '../_vendors/Event';

class TriggerPop extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        // closest scrollable element of trigger
        this.scrollEl = null;

        this.pop = createRef();

    }

    /**
     * public
     */
    getEl = () => {
        return this.pop && this.pop.current && this.pop.current.getEl();
    };

    /**
     * reset pop position
     * @param transitionEl
     */
    resetPosition = (transitionEl = this.getEl()) => {

        const {parentEl, triggerEl, position} = this.props;

        TriggerPopCalculation.setStyle(parentEl, triggerEl, transitionEl, this.getScrollEl(), position);

    };

    /**
     * find the closest scrollable parent element
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
     * scroll event callback
     */
    handleScroll = () => {
        this.resetPosition();
    };

    /**
     * add scroll event
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
     * remove scroll event
     * @param scrollEl
     */
    removeWatchScroll = (scrollEl = this.getScrollEl()) => {
        scrollEl && Event.removeEvent(scrollEl, 'scroll', this.handleScroll);
    };

    componentDidUpdate(prevProps) {
        if (this.props.shouldFollowScroll && !prevProps.visible && this.props.visible) {
            this.addWatchScroll();
        } else if (prevProps.visible && !this.props.visible) {
            this.removeWatchScroll();
        }
    }

    render() {

        const {

            children,

            className, contentClassName, theme,
            hasTriangle, triangle, position, isAnimated,

            // not passing down these props
            isEscClose, isBlurClose, shouldFollowScroll, scrollEl,

            ...restProps

        } = this.props;

        return (
            <Pop {...restProps}
                 ref={this.pop}
                 className={classNames('trigger-pop', {
                     'trigger-pop-has-triangle': hasTriangle,
                     [`theme-${theme}`]: theme,
                     [`trigger-pop-${position}`]: position,
                     'trigger-pop-animated': isAnimated,
                     [className]: className
                 })}
                 container={<Paper></Paper>}
                 isAnimated={isAnimated}
                 resetPosition={this.resetPosition}>
                {
                    popEl => (
                        <Fragment>

                            {
                                hasTriangle ?
                                    <div className="trigger-pop-triangle-wrapper">
                                        {triangle}
                                    </div>
                                    :
                                    null
                            }

                            <div className={classNames('trigger-pop-content', {
                                [contentClassName]: contentClassName
                            })}>
                                {typeof children === 'function' ? children(popEl) : children}
                            </div>

                        </Fragment>
                    )
                }
            </Pop>
        );

    }

}

TriggerPop.propTypes = {

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
     * The trigger pop theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    parentEl: PropTypes.object,

    /**
     * This is the DOM element that will be used to set the position of the trigger pop.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the trigger pop is visible.
     */
    visible: PropTypes.bool,

    /**
     * If true,the trigger pop will have a triangle on the top of the DOM element.
     */
    hasTriangle: PropTypes.bool,

    triangle: PropTypes.element,

    showModal: PropTypes.bool,

    /**
     * The trigger pop alignment.The value can be Popup.Position.LEFT or Popup.Position.RIGHT.
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
    onWheel: PropTypes.func

};

TriggerPop.defaultProps = {

    theme: Theme.DEFAULT,
    parentEl: document.body,
    depth: 2,

    visible: false,
    hasTriangle: true,
    triangle: <div className="trigger-pop-triangle"></div>,
    showModal: false,
    position: Position.BOTTOM,
    isAnimated: true,

    isBlurClose: true,
    isEscClose: true,
    shouldFollowScroll: false,
    resetPositionWait: 250

};

export default TriggerPop;
