import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Paper from '../Paper';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

import './MenuBody.css';

export default class MenuBody extends Component {

    constructor(props) {

        super(props);

        this.hasMounted = false;
        this.prepareCloseTimeout = null;
        this.requestCloseTimeout = null;

        this.state = {
            visible: false
        };

        this.getPopupStyle = this::this.getPopupStyle;
        this.triggerMouseEnterHandler = this::this.triggerMouseEnterHandler;
        this.triggerMouseLeaveHandler = this::this.triggerMouseLeaveHandler;
        this.resizeHandler = this::this.resizeHandler;
        this.debounceResizeHandle = _.debounce(this::this.debounceResizeHandle, 150);
        this.initializeAnimation = this::this.initializeAnimation;
        this.animate = this::this.animate;

    }

    calTopVerticalBottom(triggerEl, triggerOffset) {
        return triggerOffset.top + triggerEl.offsetHeight;
    }

    calTopVerticalTop(triggerOffset, popupEl) {
        return triggerOffset.top - popupEl.offsetHeight
            - parseInt(getComputedStyle(popupEl).marginTop)
            - parseInt(getComputedStyle(popupEl).marginBottom);
    }

    calTopHorizontalTop(triggerOffset) {
        return triggerOffset.top;
    }

    calTopHorizontalMiddle(triggerEl, triggerOffset, popupEl) {
        return triggerOffset.top + triggerEl.offsetHeight / 2 - popupEl.offsetHeight / 2;
    }

    calTopHorizontalBottom(triggerEl, triggerOffset, popupEl) {
        return triggerOffset.top + triggerEl.offsetHeight - popupEl.offsetHeight;
    }

    calLeftVerticalLeft(triggerOffset) {
        return triggerOffset.left;
    }

    calLeftVerticalCenter(triggerEl, triggerOffset, popupEl) {
        return triggerOffset.left + triggerEl.offsetWidth / 2 - popupEl.offsetWidth / 2;
    }

    calLeftVerticalRight(triggerEl, triggerOffset, popupEl) {
        return triggerOffset.left - (popupEl.offsetWidth - triggerEl.offsetWidth);
    }

    calLeftHorizontalLeft(triggerOffset, popupEl) {
        return triggerOffset.left - popupEl.offsetWidth
            - parseInt(getComputedStyle(popupEl).marginLeft)
            - parseInt(getComputedStyle(popupEl).marginRight);
    }

    calLeftHorizontalRight(triggerEl, triggerOffset) {
        return triggerOffset.left + triggerEl.offsetWidth;
    }

    getPopupStyle() {

        const {triggerEl, position} = this.props;

        if (!triggerEl || !this.popupEl) {
            return;
        }

        const triggerOffset = Util.getOffset(triggerEl);
        let left, top;

        switch (position) {
            case MenuBody.Position.TOP_LEFT: {
                left = this.calLeftVerticalLeft(triggerOffset);
                top = this.calTopVerticalTop(triggerOffset, this.popupEl);
                break;
            }
            case MenuBody.Position.TOP: {
                left = this.calLeftVerticalCenter(triggerEl, triggerOffset, this.popupEl);
                top = this.calTopVerticalTop(triggerOffset, this.popupEl);
                break;
            }
            case MenuBody.Position.TOP_RIGHT: {
                left = this.calLeftVerticalRight(triggerEl, triggerOffset, this.popupEl);
                top = this.calTopVerticalTop(triggerOffset, this.popupEl);
                break;
            }
            case MenuBody.Position.BOTTOM_LEFT: {
                left = this.calLeftVerticalLeft(triggerOffset);
                top = this.calTopVerticalBottom(triggerEl, triggerOffset);
                break;
            }
            case MenuBody.Position.BOTTOM: {
                left = this.calLeftVerticalCenter(triggerEl, triggerOffset, this.popupEl);
                top = this.calTopVerticalBottom(triggerEl, triggerOffset);
                break;
            }
            case MenuBody.Position.BOTTOM_RIGHT: {
                left = this.calLeftVerticalRight(triggerEl, triggerOffset, this.popupEl);
                top = this.calTopVerticalBottom(triggerEl, triggerOffset);
                break;
            }
            case MenuBody.Position.LEFT_TOP: {
                left = this.calLeftHorizontalLeft(triggerOffset, this.popupEl);
                top = this.calTopHorizontalTop(triggerOffset);
                break;
            }
            case MenuBody.Position.LEFT: {
                left = this.calLeftHorizontalLeft(triggerOffset, this.popupEl);
                top = this.calTopHorizontalMiddle(triggerEl, triggerOffset, this.popupEl);
                break;
            }
            case MenuBody.Position.LEFT_BOTTOM: {
                left = this.calLeftHorizontalLeft(triggerOffset, this.popupEl);
                top = this.calTopHorizontalBottom(triggerEl, triggerOffset, this.popupEl);
                break;
            }
            case MenuBody.Position.RIGHT_TOP: {
                left = this.calLeftHorizontalRight(triggerEl, triggerOffset);
                top = this.calTopHorizontalTop(triggerOffset);
                break;
            }
            case MenuBody.Position.RIGHT: {
                left = this.calLeftHorizontalRight(triggerEl, triggerOffset);
                top = this.calTopHorizontalMiddle(triggerEl, triggerOffset, this.popupEl);
                break;
            }
            case MenuBody.Position.RIGHT_BOTTOM: {
                left = this.calLeftHorizontalRight(triggerEl, triggerOffset);
                top = this.calTopHorizontalBottom(triggerEl, triggerOffset, this.popupEl);
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
        this.popupEl = findDOMNode(this.refs.popup);

        Event.addEvent(this.props.triggerEl, 'mouseenter', this.triggerMouseEnterHandler);
        Event.addEvent(this.props.triggerEl, 'mouseleave', this.triggerMouseLeaveHandler);
        Event.addEvent(this.popupEl, 'mouseenter', this.triggerMouseEnterHandler);
        Event.addEvent(this.popupEl, 'mouseleave', this.triggerMouseLeaveHandler);
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
        visible && onRender && onRender(this.refs.popup);
    }

    componentWillUnmount() {

        this.hasMounted = false;
        this.prepareCloseTimeout && clearTimeout(this.prepareCloseTimeout);
        this.requestCloseTimeout && clearTimeout(this.requestCloseTimeout);

        Event.removeEvent(this.props.triggerEl, 'mouseenter', this.triggerMouseEnterHandler);
        Event.removeEvent(this.props.triggerEl, 'mouseleave', this.triggerMouseLeaveHandler);
        Event.removeEvent(this.popupEl, 'mouseenter', this.triggerMouseEnterHandler);
        Event.removeEvent(this.popupEl, 'mouseleave', this.triggerMouseLeaveHandler);
        Event.removeEvent(window, 'resize', this.resizeHandler);

    }

    render() {

        const {children, className, style, hasTriangle, theme, position, isAnimated, depth} = this.props,
            {visible} = this.state,
            popupClassName = (visible ? '' : ' hidden') + (hasTriangle ? ' popup-has-triangle' : '')
                + (theme ? ` theme-${theme}` : '') + (position ? ` popup-position-${position}` : '')
                + (isAnimated ? ' popup-animated' : '') + (className ? ' ' + className : '');

        return (
            <Paper ref="popup"
                   className={'popup' + popupClassName}
                   style={{...this.getPopupStyle(), ...style}}
                   depth={depth}>

                {
                    hasTriangle ?
                        <div className="popup-triangle"></div>
                        :
                        null
                }

                <div className="popup-content">
                    {children}
                </div>

            </Paper>
        );

    }
};

MenuBody.Position = {

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

MenuBody.TriggerMode = {
    TOGGLE: 'toggle',
    OPEN: 'open'
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

    /**
     * The popover theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The popover alignment.The value can be Popup.Position.LEFT or Popup.Position.RIGHT.
     */
    position: PropTypes.oneOf(Util.enumerateValue(MenuBody.Position)),

    /**
     * If true,popup will have animation effects.
     */
    isAnimated: PropTypes.bool,

    /**
     * The status of popup-triangle.Can be open or toggle.
     */
    triggerMode: PropTypes.oneOf(Util.enumerateValue(MenuBody.TriggerMode)),

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    /**
     * The function of popup render.
     */
    onRender: PropTypes.func,

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func

};

MenuBody.defaultProps = {

    className: '',
    style: null,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    theme: Theme.DEFAULT,
    position: MenuBody.Position.BOTTOM_LEFT,
    isAnimated: true,
    triggerMode: MenuBody.TriggerMode.TOGGLE,
    depth: 4

};