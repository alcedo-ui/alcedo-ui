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

    // getTipStyle() {
    //
    //     const {triggerEl, position} = this.props;
    //
    //     let tipStyle = {};
    //     if (triggerEl && this.refs.tip) {
    //         const offset = Util.getOffset(triggerEl);
    //
    //         switch (position) {
    //             case 'right':
    //                 tipStyle = {
    //                     left: offset.left + (triggerEl.clientWidth),
    //                     top: offset.top - (this.refs.tip.clientHeight - triggerEl.clientHeight) / 2
    //                 };
    //                 break;
    //             case 'left':
    //                 tipStyle = {
    //                     left: offset.left - (this.refs.tip.clientWidth),
    //                     top: offset.top - (this.refs.tip.clientHeight - triggerEl.clientHeight) / 2
    //                 };
    //                 break;
    //             case 'top-left':
    //                 tipStyle = {
    //                     left: offset.left - (this.refs.tip.clientWidth),
    //                     top: offset.top - (this.refs.tip.clientHeight)
    //                 };
    //                 break;
    //             case 'top-right':
    //                 tipStyle = {
    //                     left: offset.left + (triggerEl.clientWidth),
    //                     top: offset.top - (this.refs.tip.clientHeight)
    //                 };
    //                 break;
    //             case 'top-center':
    //                 tipStyle = {
    //                     left: offset.left - (this.refs.tip.clientWidth - triggerEl.clientWidth) / 2,
    //                     top: offset.top - (this.refs.tip.clientHeight)
    //                 };
    //                 break;
    //             case 'bottom-left':
    //                 tipStyle = {
    //                     left: offset.left - (this.refs.tip.clientWidth),
    //                     top: offset.top + (triggerEl.clientHeight)
    //                 };
    //                 break;
    //             case 'bottom-center':
    //                 tipStyle = {
    //                     left: offset.left - (this.refs.tip.clientWidth - triggerEl.clientWidth) / 2,
    //                     top: offset.top + (triggerEl.clientHeight)
    //                 };
    //                 break;
    //             case 'bottom-right':
    //                 tipStyle = {
    //                     left: offset.left + (triggerEl.clientWidth),
    //                     top: offset.top + (triggerEl.clientHeight)
    //                 };
    //                 break;
    //             default:
    //                 tipStyle = {
    //                     left: offset.left - (this.refs.tip.clientWidth - triggerEl.clientWidth) / 2,
    //                     top: offset.top + (triggerEl.clientHeight)
    //                 };
    //         }
    //     }
    //
    //     return tipStyle;
    //
    // }

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

TipBody.Position = {

    TOP: 'top',
    LEFT: 'left',
    RIGHT: 'right',
    BOTTOM: 'bottom',

    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right'

};

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
    theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

    position: PropTypes.oneOf(Object.keys(TipBody.Position).map(key => TipBody.Position[key])),

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
