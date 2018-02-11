/**
 * @file TouchRipple component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

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
        this.mouseDownHandler = ::this.mouseDownHandler;

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

    removeRipple(rippleId) {

        const {ripples} = this.state;

        ripples.splice(ripples.findIndex(item => item.key === rippleId), 1);

        this.setState({
            ripples
        });

    }

    mouseDownHandler(e) {

        if (this.ignoreNextMouseDown) {
            return;
        }

        this.addRipple(e);

    }

    render() {

        const {className, style, duration} = this.props,
            {ripples} = this.state,

            wrapperClassName = classNames('touch-ripple', {
                [className]: className
            });

        return (
            <div className={wrapperClassName}
                 style={style}
                 onMouseDown={this.mouseDownHandler}>
                {
                    ripples.map(item =>
                        <Ripple {...item}
                                rippleId={item.key}
                                duration={duration}
                                onRequestClose={this.removeRipple}/>
                    )
                }
            </div>
        );

    }
};

TouchRipple.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    duration: PropTypes.number,
    displayCenter: PropTypes.bool

};

TouchRipple.defaultProps = {

    className: '',
    style: null,

    duration: 250,
    displayCenter: false

};

export default TouchRipple;