import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import Dom from '../_vendors/Dom';

export default class TipBody extends Component {

    static Position = {

        TOP: 'top',
        LEFT: 'left',
        RIGHT: 'right',
        BOTTOM: 'bottom',

        TOP_LEFT: 'top-left',
        TOP_RIGHT: 'top-right',
        BOTTOM_LEFT: 'bottom-left',
        BOTTOM_RIGHT: 'bottom-right'

    };

    constructor(props) {

        super(props);

        this.hasMounted = false;
        this.unrenderTimeout = null;

        this.state = {
            visible: false
        };

        this.getWrapperStyle = this::this.getWrapperStyle;
        this.getRippleStyle = this::this.getRippleStyle;
        this.mouseMoveHandle = this::this.mouseMoveHandle;
        this.initializeAnimation = this::this.initializeAnimation;
        this.animate = this::this.animate;

    }

    getDiag(a, b) {
        return Math.sqrt((a * a) + (b * b));
    }

    getWrapperStyle() {

        const {triggerEl, position} = this.props;

        if (!triggerEl || !this.refs.tip) {
            return;
        }

        const triggerOffset = Dom.getOffset(triggerEl);
        let WrapperStyle = {};
        switch (position) {
            case 'right':
                WrapperStyle.left = triggerOffset.left + triggerEl.clientHeight;
                WrapperStyle.top = triggerOffset.top;
                break;
            case 'left':
                WrapperStyle.left = triggerOffset.left - this.refs.tip.clientWidth;
                WrapperStyle.top = triggerOffset.top;
                break;
            case 'top':
                WrapperStyle.top = triggerOffset.top - triggerEl.clientHeight;
                WrapperStyle.left = triggerOffset.left + triggerEl.clientWidth / 2 - this.refs.tip.clientWidth / 2;
                break;
            case 'bottom':
                WrapperStyle.top = triggerOffset.top + triggerEl.clientHeight;
                WrapperStyle.left = triggerOffset.left + triggerEl.clientWidth / 2 - this.refs.tip.clientWidth / 2;
                break;
            case 'top-left':
                WrapperStyle.left = triggerOffset.left - this.refs.tip.clientWidth;
                WrapperStyle.top = triggerOffset.top - triggerEl.clientHeight;
                break;
            case 'top-right':
                WrapperStyle.left = triggerOffset.left + triggerEl.clientHeight;
                WrapperStyle.top = triggerOffset.top - triggerEl.clientHeight;
                break;
            case 'bottom-left':
                WrapperStyle.left = triggerOffset.left - this.refs.tip.clientWidth;
                WrapperStyle.top = triggerOffset.top + triggerEl.clientHeight;
                break;
            case 'bottom-right':
                WrapperStyle.left = triggerOffset.left + triggerEl.clientHeight;
                WrapperStyle.top = triggerOffset.top + triggerEl.clientHeight;
                break;
            default:
                WrapperStyle.top = triggerOffset.top + triggerEl.clientHeight;
                WrapperStyle.left = triggerOffset.left + triggerEl.clientWidth / 2 - this.refs.tip.clientWidth / 2;
        }

        return WrapperStyle;

    }

    getRippleStyle(elOffset) {

        const {triggerEl} = this.props;

        if (!triggerEl || !this.refs.tip || !elOffset) {
            return;
        }

        let rippleStyle = {};

        const offset = Dom.getOffset(triggerEl);
        rippleStyle.top = offset.top + triggerEl.clientHeight / 2;
        rippleStyle.left = offset.left + triggerEl.clientWidth / 2;

        const elWidth = this.refs.tip.clientWidth;
        const elHeight = this.refs.tip.clientHeight;

        const rippleRadius = Math.max(
            this.getDiag(elOffset.top - rippleStyle.top, elOffset.left - rippleStyle.left),
            this.getDiag(elOffset.top + elHeight - rippleStyle.top, elOffset.left - rippleStyle.left),
            this.getDiag(elOffset.top - rippleStyle.top, elOffset.left + elWidth - rippleStyle.left),
            this.getDiag(elOffset.top + elHeight - rippleStyle.top, elOffset.left + elWidth - rippleStyle.left)
        );

        const rippleSize = rippleRadius * 2;

        rippleStyle.width = rippleSize;
        rippleStyle.height = rippleSize;
        rippleStyle.top = rippleStyle.top - rippleRadius - elOffset.top;
        rippleStyle.left = rippleStyle.left - rippleRadius - elOffset.left;

        return rippleStyle;

    }

    triggerEventHandle(el, triggerEl, tipEl, currentVisible) {

        while (el) {
            if (el == triggerEl) {
                return true;
            } else if (el == tipEl) {
                return currentVisible;
            }
            el = el.parentNode;
        }

        return false;

    }

    mouseMoveHandle(e) {

        const {triggerEl, onRequestClose} = this.props,
            visible = this.triggerEventHandle(
                e.target,
                triggerEl,
                this.refs.tip,
                this.state.visible
            );

        if (visible === this.state.visible) {
            return;
        }

        this.setState({
            visible
        }, () => {
            if (!visible) {
                setTimeout(() => {
                    onRequestClose && onRequestClose();
                }, 250);
            }
        });

    }

    initializeAnimation(callback) {
        this.hasMounted && callback();
    }

    animate() {
        this.setState({
            visible: true
        });
    }

    componentDidMount() {
        this.hasMounted = true;
        Event.addEvent(document, 'mousemove', this.mouseMoveHandle);
    }

    componentWillAppear(callback) {
        this.initializeAnimation(callback);
    }

    componentWillEnter(callback) {
        this.initializeAnimation(callback);
    }

    componentDidAppear() {
        this.animate();
    }

    componentDidEnter() {
        this.animate();
    }

    componentWillLeave(callback) {
        this.setState({
            visible: false
        }, () => {
            this.unrenderTimeout = setTimeout(() => {
                this.hasMounted && callback();
            }, 250);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.setState({
                visible: !!nextProps.visible
            });
        }
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.mouseMoveHandle);
        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);
    }

    render() {

        const {className, style, position, text} = this.props;
        const {visible} = this.state;

        const wrapperStyle = this.getWrapperStyle();

        return (
            <div ref="tip"
                 className={`tip ${visible ? 'visible' : ''} ${className}`}
                 style={{...style, ...wrapperStyle}}>

                {text}

                <div className="tip-ripple"
                     style={this.getRippleStyle(wrapperStyle)}></div>

            </div>
        );

    }

}

TipBody.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Override the styles of the root element.
     */
    text: PropTypes.string,

    /**
     * This is the DOM element that will be used to set the position of the popover.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the popover is visible.
     */
    visible: PropTypes.bool,

    /**
     * The popover theme. Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The position of Tip.Can be top,left,right,bottom,top-left,top-right,bottom-left,bottom-right.
     */
    position: PropTypes.oneOf(Util.enumerateValue(TipBody.Position)),

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func

};

TipBody.defaultProps = {

    className: '',
    style: null,

    text: '',
    triggerEl: null,
    visible: false,
    theme: Theme.DEFAULT,
    position: TipBody.Position.BOTTOM

};
