import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

import Ripple from '../_Ripple';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';

import './TouchRipple.css';

export default class TouchRipple extends Component {

    constructor(props) {

        super(props);

        this.ignoreNextMouseDown = false;
        this.nextKey = 0;
        this.timeoutIds = [];

        this.state = {
            ripples: []
        };

        this.getRippleStyle = this::this.getRippleStyle;
        this.addRipple = this::this.addRipple;
        this.removeRipple = this::this.removeRipple;
        this.clearRippleTimeout = this::this.clearRippleTimeout;
        this.mouseDownHandle = this::this.mouseDownHandle;

    }

    getRippleStyle(e) {

        const {displayCenter} = this.props;

        // 获取div
        const el = ReactDOM.findDOMNode(this);

        // 获取div 宽度、高度 和 偏移
        const elWidth = el.offsetWidth;
        const elHeight = el.offsetHeight;


        // 获取相对于div的点击位置偏移
        let pointerX, pointerY;
        if (displayCenter) {
            pointerX = elWidth / 2;
            pointerY = elHeight / 2;
        } else {
            const {top, left} = Dom.getOffset(el);
            pointerX = e.pageX - left;
            pointerY = e.pageY - top;
        }

        // 涟漪半径为4个距离的最大值
        const rippleRadius = Math.max(
            Util.getDiag(pointerX, pointerY),
            Util.getDiag(elWidth - pointerX, pointerY),
            Util.getDiag(elWidth - pointerX, elHeight - pointerY),
            Util.getDiag(pointerX, elHeight - pointerY)
        );
        const rippleSize = rippleRadius * 2;

        // 最终偏移量
        const left = pointerX - rippleRadius;
        const top = pointerY - rippleRadius;

        return {
            height: rippleSize,
            width: rippleSize,
            top: top,
            left: left
        };

    }

    addRipple(e) {

        if (this.ignoreNextMouseDown) {
            return;
        }

        this.ignoreNextMouseDown = true;
        let {ripples} = this.state;

        ripples.push(
            <Ripple key={this.nextKey++}
                    style={this.getRippleStyle(e)}/>
        );

        this.setState({
            ripples: ripples
        }, () => {
            this.ignoreNextMouseDown = false;
        });

    }

    removeRipple() {
        this.clearRippleTimeout();
        this.setState({
            ripples: []
        });
    }

    clearRippleTimeout() {

        if (!this.timeoutIds || this.timeoutIds.length < 1) {
            return;
        }

        this.timeoutIds.forEach(item => clearTimeout(item));
        this.timeoutIds = [];

    }

    mouseDownHandle(e) {

        this.timeoutIds[this.nextKey] = setTimeout(() => {
            this.removeRipple();
        }, 1000 / 60);

        this.addRipple(e);

    }

    componentWillUnmount() {
        this.clearRippleTimeout();
    }

    render() {

        const {className, style} = this.props;
        const {ripples} = this.state;

        return (
            <ReactCSSTransitionGroup component="div"
                                     className={`touch-ripple ${className}`}
                                     style={style}
                                     onMouseDown={this.mouseDownHandle}
                                     onMouseUp={this.removeRipple}
                                     onMouseLeave={this.removeRipple}>
                {
                    ripples && ripples.length > 0 ?
                        ripples
                        :
                        null
                }
            </ReactCSSTransitionGroup>
        );

    }
};

TouchRipple.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    displayCenter: PropTypes.bool

};

TouchRipple.defaultProps = {

    className: '',
    style: null,

    displayCenter: false

};