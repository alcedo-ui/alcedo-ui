/**
 * Created by Administrator on 2017/4/28.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} from 'react-dom';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

import './Tip.css';

export default class TipBody extends Component {

    constructor(props) {
        super(props);

        this.hasMounted = false;
        this.unrenderTimeout = null;

        this.state = {
            visible: false
        };

        this.getTipStyle = this::this.getTipStyle;
        this.mouseoverHandle = this::this.mouseoverHandle;
        this.initializeAnimation = this::this.initializeAnimation;
        this.animate = this::this.animate;
    }

    triggerTipEventHandle(el, triggerEl, tipEl) {

        let flag = true;

        while (el) {
            if (el == tipEl || el == triggerEl) {
                return true;
            }
            el = el.parentNode;
        }

        if (flag) {
            return false;
        }

    }

    mouseoverHandle(e) {
        const {triggerEl, onRequestClose} = this.props,
            visible = this.triggerTipEventHandle(
                e.target,
                triggerEl,
                this.refs.tip,
                this.state.visible
            );
        this.setState({
            visible
        }, () => {
            if(!visible){
                onRequestClose && onRequestClose();
            }
        });

    }

    getTipStyle() {

        const {triggerEl, position} = this.props;

        let tipStyle = {};
        if (triggerEl && this.refs.tip) {
            const offset = Util.getOffset(triggerEl);

            switch (position) {
                case 'right':
                    tipStyle = {
                        left: offset.left + (triggerEl.clientWidth),
                        top: offset.top - (this.refs.tip.clientHeight - triggerEl.clientHeight) / 2
                    };
                    break;
                case 'left':
                    tipStyle = {
                        left: offset.left - (this.refs.tip.clientWidth),
                        top: offset.top - (this.refs.tip.clientHeight - triggerEl.clientHeight) / 2
                    };
                    break;
                case 'top-left':
                    tipStyle = {
                        left: offset.left - (this.refs.tip.clientWidth),
                        top: offset.top - (this.refs.tip.clientHeight)
                    };
                    break;
                case 'top-right':
                    tipStyle = {
                        left: offset.left + (triggerEl.clientWidth),
                        top: offset.top - (this.refs.tip.clientHeight)
                    };
                    break;
                case 'top-center':
                    tipStyle = {
                        left: offset.left - (this.refs.tip.clientWidth - triggerEl.clientWidth) / 2,
                        top: offset.top - (this.refs.tip.clientHeight)
                    };
                    break;
                case 'bottom-left':
                    tipStyle = {
                        left: offset.left - (this.refs.tip.clientWidth),
                        top: offset.top + (triggerEl.clientHeight)
                    };
                    break;
                case 'bottom-center':
                    tipStyle = {
                        left: offset.left - (this.refs.tip.clientWidth - triggerEl.clientWidth) / 2,
                        top: offset.top + (triggerEl.clientHeight)
                    };
                    break;
                case 'bottom-right':
                    tipStyle = {
                        left: offset.left + (triggerEl.clientWidth),
                        top: offset.top + (triggerEl.clientHeight)
                    };
                    break;
                default:
                    tipStyle = {
                        left: offset.left - (this.refs.tip.clientWidth - triggerEl.clientWidth) / 2,
                        top: offset.top + (triggerEl.clientHeight)
                    };
            }
        }

        return tipStyle;

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

        Event.addEvent(document, 'mouseover', this.mouseoverHandle);

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

        Event.removeEvent(document, 'mouseover', this.mouseoverHandle);

        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);

    }

    render() {
        const {className, style, position, text} = this.props;
        const {visible} = this.state;
        return (
            <div className={`tip ${visible ? '' : 'hidden'} ${position ? `tip-position-${position}` : ''} ${className}`}
                 style={{...this.getTipStyle(), ...style}} ref="tip">

                {text}

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
