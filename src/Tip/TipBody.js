import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import Theme from '../Theme';

export default class TipBody extends Component {

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

        const {triggerEl} = this.props;

        if (!triggerEl || !this.refs.tip) {
            return;
        }

        const triggerOffset = Util.getOffset(triggerEl);

        return {
            left: triggerOffset.left + triggerEl.clientWidth / 2 - this.refs.tip.clientWidth / 2,
            top: triggerOffset.top + triggerEl.clientHeight
        };

    }

    getRippleStyle(elOffset) {

        const {triggerEl} = this.props;

        if (!triggerEl || !this.refs.tip || !elOffset) {
            return;
        }

        let rippleStyle = {};

        const offset = Util.getOffset(triggerEl);
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

    triggerEventHandle(el, triggerEl) {

        while (el) {
            if (el == triggerEl) {
                return true;
            }
            el = el.parentNode;
        }

        return false;

    }

    mouseMoveHandle(e) {

        const {triggerEl, onRequestClose} = this.props,
            visible = this.triggerEventHandle(
                e.target,
                triggerEl
            );

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
     * The popover alignment.Possible values are: "bottom-center", "top-center", "bottom-right", "top-right", "bottom-left", "top-left", "left" and "right".
     */
    position: PropTypes.string,

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func

};

TipBody.defaultProps = {

    className: '',
    style: null,

    triggerEl: null,
    visible: false,
    position: 'bottom-center'

};
