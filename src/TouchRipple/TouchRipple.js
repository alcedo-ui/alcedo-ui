/**
 * @file TouchRipple component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

import Ripple from '../_Ripple';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';

class TouchRipple extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.ignoreNextMouseDown = false;
        this.nextKey = 0;
        this.timeoutIds = [];

        this.state = {
            ripples: []
        };

        this.getRippleStyle = ::this.getRippleStyle;
        this.addRipple = ::this.addRipple;
        this.removeRipple = ::this.removeRipple;
        this.clearRippleTimeout = ::this.clearRippleTimeout;
        this.mouseDownHandle = ::this.mouseDownHandle;

    }

    getRippleStyle(e) {

        const {displayCenter} = this.props,

            el = ReactDOM.findDOMNode(this),

            elWidth = el.offsetWidth,
            elHeight = el.offsetHeight;


        // get pointer offset of el
        let pointerX, pointerY;
        if (displayCenter) {
            pointerX = elWidth / 2;
            pointerY = elHeight / 2;
        } else {
            const {top, left} = Dom.getOffset(el);
            pointerX = e.pageX - left;
            pointerY = e.pageY - top;
        }

        // radius is the max distence
        const rippleRadius = Math.max(
            Util.getDiag(pointerX, pointerY),
            Util.getDiag(elWidth - pointerX, pointerY),
            Util.getDiag(elWidth - pointerX, elHeight - pointerY),
            Util.getDiag(pointerX, elHeight - pointerY)
        );
        const rippleSize = rippleRadius * 2;

        // calculate offset
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

export default TouchRipple;