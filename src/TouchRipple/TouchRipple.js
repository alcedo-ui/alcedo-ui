/**
 * @file TouchRipple component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Ripple from '../_Ripple';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';

class TouchRipple extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.ignoreNextMouseDown = false;
        this.nextKey = 0;

        this.state = {
            ripples: []
        };

        this.getRippleStyle = ::this.getRippleStyle;
        this.addRipple = ::this.addRipple;
        this.removeRipple = ::this.removeRipple;
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

        ripples.push({
            key: this.nextKey++,
            style: this.getRippleStyle(e)
        });

        this.setState({
            ripples
        }, () => {
            this.ignoreNextMouseDown = false;
        });

    }

    removeRipple() {
        this.setState({
            ripples: []
        });
    }

    mouseDownHandle(e) {
        this.addRipple(e);
    }

    render() {

        const {className, style, duration} = this.props,
            {ripples} = this.state,

            wrapperClassName = classNames('touch-ripple', {
                [className]: className
            });

        return (
            <TransitionGroup className={wrapperClassName}
                             style={style}
                             onMouseDown={this.mouseDownHandle}
                             onMouseUp={this.removeRipple}
                             onMouseLeave={this.removeRipple}>
                {
                    ripples && ripples.map(item =>
                        <Ripple {...item}
                                duration={duration}/>
                    )
                }
            </TransitionGroup>
        );

    }
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

    TouchRipple.propTypes = {

        className: PropTypes.string,
        style: PropTypes.object,

        duration: PropTypes.number,
        displayCenter: PropTypes.bool

    };

}

TouchRipple.defaultProps = {
    duration: 500,
    displayCenter: false
};

export default TouchRipple;