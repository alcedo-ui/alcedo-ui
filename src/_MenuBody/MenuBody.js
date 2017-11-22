/**
 * @file MenuBody component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Paper from '../Paper';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';
import Event from '../_vendors/Event';

export default class MenuBody extends Component {

    static Position = {

        TOP_LEFT: 'top-left',
        TOP: 'top',
        TOP_RIGHT: 'top-right',

        BOTTOM_LEFT: 'bottom-left',
        BOTTOM: 'bottom',
        BOTTOM_RIGHT: 'bottom-right',

        LEFT_TOP: 'left-top',
        LEFT: 'left',
        LEFT_BOTTOM: 'left-bottom',

        RIGHT_TOP: 'right-top',
        RIGHT: 'right',
        RIGHT_BOTTOM: 'right-bottom'

    };

    static TriggerMode = {
        TOGGLE: 'toggle',
        OPEN: 'open'
    };

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.hasMounted = false;
        this.prepareCloseTimeout = null;
        this.requestCloseTimeout = null;

        this.state = {
            visible: false
        };

        this.getMenuStyle = ::this.getMenuStyle;
        this.triggerMouseEnterHandler = ::this.triggerMouseEnterHandler;
        this.triggerMouseLeaveHandler = ::this.triggerMouseLeaveHandler;
        this.resizeHandler = ::this.resizeHandler;
        this.debounceResizeHandle = _.debounce(::this.debounceResizeHandle, 150);
        this.initializeAnimation = ::this.initializeAnimation;
        this.animate = ::this.animate;
        this.wheelHandler = ::this.wheelHandler;

    }

    calTopVerticalBottom(triggerEl, triggerOffset) {
        return triggerOffset.top + triggerEl.offsetHeight;
    }

    calTopVerticalTop(triggerOffset, menuEl) {
        return triggerOffset.top - menuEl.offsetHeight
            - parseInt(getComputedStyle(menuEl).marginTop)
            - parseInt(getComputedStyle(menuEl).marginBottom);
    }

    calTopHorizontalTop(triggerOffset) {
        return triggerOffset.top;
    }

    calTopHorizontalMiddle(triggerEl, triggerOffset, menuEl) {
        return triggerOffset.top + triggerEl.offsetHeight / 2 - menuEl.offsetHeight / 2;
    }

    calTopHorizontalBottom(triggerEl, triggerOffset, menuEl) {
        return triggerOffset.top + triggerEl.offsetHeight - menuEl.offsetHeight;
    }

    calLeftVerticalLeft(triggerOffset) {
        return triggerOffset.left;
    }

    calLeftVerticalCenter(triggerEl, triggerOffset, menuEl) {
        return triggerOffset.left + triggerEl.offsetWidth / 2 - menuEl.offsetWidth / 2;
    }

    calLeftVerticalRight(triggerEl, triggerOffset, menuEl) {
        return triggerOffset.left - (menuEl.offsetWidth - triggerEl.offsetWidth);
    }

    calLeftHorizontalLeft(triggerOffset, menuEl) {
        return triggerOffset.left - menuEl.offsetWidth
            - parseInt(getComputedStyle(menuEl).marginLeft)
            - parseInt(getComputedStyle(menuEl).marginRight);
    }

    calLeftHorizontalRight(triggerEl, triggerOffset) {
        return triggerOffset.left + triggerEl.offsetWidth;
    }

    getMenuStyle() {

        const {triggerEl, position} = this.props;

        if (!triggerEl || !this.menuEl) {
            return;
        }

        const triggerOffset = Dom.getOffset(triggerEl);
        let left, top;

        switch (position) {
            case MenuBody.Position.TOP_LEFT: {
                left = this.calLeftVerticalLeft(triggerOffset);
                top = this.calTopVerticalTop(triggerOffset, this.menuEl);
                break;
            }
            case MenuBody.Position.TOP: {
                left = this.calLeftVerticalCenter(triggerEl, triggerOffset, this.menuEl);
                top = this.calTopVerticalTop(triggerOffset, this.menuEl);
                break;
            }
            case MenuBody.Position.TOP_RIGHT: {
                left = this.calLeftVerticalRight(triggerEl, triggerOffset, this.menuEl);
                top = this.calTopVerticalTop(triggerOffset, this.menuEl);
                break;
            }
            case MenuBody.Position.BOTTOM_LEFT: {
                left = this.calLeftVerticalLeft(triggerOffset);
                top = this.calTopVerticalBottom(triggerEl, triggerOffset);
                break;
            }
            case MenuBody.Position.BOTTOM: {
                left = this.calLeftVerticalCenter(triggerEl, triggerOffset, this.menuEl);
                top = this.calTopVerticalBottom(triggerEl, triggerOffset);
                break;
            }
            case MenuBody.Position.BOTTOM_RIGHT: {
                left = this.calLeftVerticalRight(triggerEl, triggerOffset, this.menuEl);
                top = this.calTopVerticalBottom(triggerEl, triggerOffset);
                break;
            }
            case MenuBody.Position.LEFT_TOP: {
                left = this.calLeftHorizontalLeft(triggerOffset, this.menuEl);
                top = this.calTopHorizontalTop(triggerOffset);
                break;
            }
            case MenuBody.Position.LEFT: {
                left = this.calLeftHorizontalLeft(triggerOffset, this.menuEl);
                top = this.calTopHorizontalMiddle(triggerEl, triggerOffset, this.menuEl);
                break;
            }
            case MenuBody.Position.LEFT_BOTTOM: {
                left = this.calLeftHorizontalLeft(triggerOffset, this.menuEl);
                top = this.calTopHorizontalBottom(triggerEl, triggerOffset, this.menuEl);
                break;
            }
            case MenuBody.Position.RIGHT_TOP: {
                left = this.calLeftHorizontalRight(triggerEl, triggerOffset);
                top = this.calTopHorizontalTop(triggerOffset);
                break;
            }
            case MenuBody.Position.RIGHT: {
                left = this.calLeftHorizontalRight(triggerEl, triggerOffset);
                top = this.calTopHorizontalMiddle(triggerEl, triggerOffset, this.menuEl);
                break;
            }
            case MenuBody.Position.RIGHT_BOTTOM: {
                left = this.calLeftHorizontalRight(triggerEl, triggerOffset);
                top = this.calTopHorizontalBottom(triggerEl, triggerOffset, this.menuEl);
                break;
            }
        }

        return {left, top};

    }

    triggerMouseEnterHandler(e) {
        this.prepareCloseTimeout && clearTimeout(this.prepareCloseTimeout);
    }

    triggerMouseLeaveHandler(e) {
        this.prepareCloseTimeout && clearTimeout(this.prepareCloseTimeout);
        this.prepareCloseTimeout = setTimeout(() => {
            this.setState({
                visible: false
            }, () => {
                this.requestCloseTimeout && clearTimeout(this.requestCloseTimeout);
                this.requestCloseTimeout = setTimeout(() => {
                    const {onRequestClose} = this.props;
                    this.hasMounted && onRequestClose && onRequestClose();
                }, 250);
            });
        }, 100);
    }

    resizeHandler() {
        this.debounceResizeHandle();
    }

    debounceResizeHandle() {
        this.forceUpdate();
    }

    wheelHandler(e) {
        const {shouldPreventContainerScroll, onWheel} = this.props;
        shouldPreventContainerScroll && Event.preventContainerScroll(e);
        onWheel && onWheel(e);
    }

    initializeAnimation(callback) {
        setTimeout(() => {
            this.hasMounted && callback();
        }, 0);
    }

    animate() {
        this.setState({
            visible: true
        });
    }

    componentDidMount() {

        this.hasMounted = true;
        this.menuEl = findDOMNode(this.refs.menu);

        Event.addEvent(this.props.triggerEl, 'mouseenter', this.triggerMouseEnterHandler);
        Event.addEvent(this.props.triggerEl, 'mouseleave', this.triggerMouseLeaveHandler);
        Event.addEvent(this.menuEl, 'mouseenter', this.triggerMouseEnterHandler);
        Event.addEvent(this.menuEl, 'mouseleave', this.triggerMouseLeaveHandler);
        Event.addEvent(window, 'resize', this.resizeHandler);

    }

    componentWillAppear(callback) {
        this.initializeAnimation(callback);
    }

    componentDidAppear() {
        this.animate();
    }

    componentDidUpdate() {
        const {onRender} = this.props,
            {visible} = this.state;
        visible && onRender && onRender(this.menuEl, this.props.triggerEl);
    }

    componentWillUnmount() {

        this.hasMounted = false;
        this.prepareCloseTimeout && clearTimeout(this.prepareCloseTimeout);
        this.requestCloseTimeout && clearTimeout(this.requestCloseTimeout);

        Event.removeEvent(this.props.triggerEl, 'mouseenter', this.triggerMouseEnterHandler);
        Event.removeEvent(this.props.triggerEl, 'mouseleave', this.triggerMouseLeaveHandler);
        Event.removeEvent(this.menuEl, 'mouseenter', this.triggerMouseEnterHandler);
        Event.removeEvent(this.menuEl, 'mouseleave', this.triggerMouseLeaveHandler);
        Event.removeEvent(window, 'resize', this.resizeHandler);

    }

    render() {

        const {children, className, style, theme, hasTriangle, triangle, position, isAnimated, depth} = this.props,
            {visible} = this.state,

            menuClassName = (visible ? '' : ' hidden') + (hasTriangle ? ' menu-has-triangle' : '')
                + (theme ? ` theme-${theme}` : '') + (position ? ` menu-position-${position}` : '')
                + (isAnimated ? ' menu-animated' : '') + (className ? ' ' + className : '');

        return (
            <Paper ref="menu"
                   className={'menu' + menuClassName}
                   style={{...this.getMenuStyle(), ...style}}
                   depth={depth}
                   onWheel={this.wheelHandler}>

                {
                    hasTriangle ?
                        <div className="menu-triangle-wrapper">
                            {triangle}
                        </div>
                        :
                        null
                }

                <div className="menu-content"
                     onWheel={this.wheelHandler}>
                    {children}
                </div>

            </Paper>
        );

    }
};

MenuBody.propTypes = {

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
    position: PropTypes.oneOf(Util.enumerateValue(MenuBody.Position)),

    /**
     * If true, menu will have animation effects.
     */
    isAnimated: PropTypes.bool,

    shouldPreventContainerScroll: PropTypes.bool,

    /**
     * The status of menu-triangle.Can be open or toggle.
     */
    triggerMode: PropTypes.oneOf(Util.enumerateValue(MenuBody.TriggerMode)),

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    /**
     * The function of menu render.
     */
    onRender: PropTypes.func,

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

MenuBody.defaultProps = {

    className: '',
    style: null,
    theme: Theme.DEFAULT,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    triangle: <div className="menu-triangle"></div>,
    position: MenuBody.Position.BOTTOM_LEFT,
    isAnimated: true,
    triggerMode: MenuBody.TriggerMode.TOGGLE,
    depth: 6,
    shouldPreventContainerScroll: true

};