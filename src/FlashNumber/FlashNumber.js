/**
 * @file FlashNumber component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class FlashNumber extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.flashDuration = props.flashDuration; // flash animate duration
        this.startTime; // animationFrame start timestamp
        this.initValue = props.initValue; // value when animate start
        this.animationFrameId; // animationFrame id
        this.currentValue = 0; // current display value

        this.init = ::this.init;
        this.step = ::this.step;

    }

    init() {
        this.animationFrameId && cancelAnimationFrame(this.animationFrameId);
        this.startTime = undefined;
        this.initValue = this.currentValue;
    }

    /**
     * animationFrame callback
     */
    step(timeStamp) {

        // first request
        if (!this.startTime) {
            this.startTime = timeStamp;
        }

        // non first
        else {

            // calculate value
            let v = this.initValue + Math.round((this.props.value - this.initValue) * (timeStamp - this.startTime) / this.flashDuration);

            // valid value
            if (this.props.value < this.initValue) { // target value < init value
                this.refs.el.innerHTML = this.currentValue = v > this.props.value ? v : this.props.value;
            } else if (this.props.value > this.initValue) { // target value > init value
                this.refs.el.innerHTML = this.currentValue = v < this.props.value ? v : this.props.value;
            }

        }

        // request next animationFrame if not finish
        if (this.currentValue != this.props.value) {
            this.animationFrameId = requestAnimationFrame(this.step);
        } else {
            this.animationFrameId = undefined;
        }

    }

    componentWillReceiveProps(nextProps) {

        // start flash animate when value change
        if (nextProps.value !== this.props.value) {
            this.init();
            this.animationFrameId = requestAnimationFrame(this.step);
        }

        if (nextProps.flashDuration !== this.flashDuration) {
            this.flashDuration = nextProps.flashDuration;
        }

    }

    componentDidMount() {

        // start flash animate when value is not equal init value
        if (this.props.value != this.initValue) {
            this.animationFrameId = requestAnimationFrame(this.step);
        }

    }

    render() {

        const {className, style} = this.props,

            numberClassName = classNames('flash-number', {
                [className]: className
            });

        return (
            <span ref="el"
                  className={numberClassName}
                  style={style}>
				{this.currentValue}
			</span>
        );

    }
}

FlashNumber.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Initial result value.
     */
    initValue: PropTypes.number,

    /**
     * Result value.
     */
    value: PropTypes.number,

    /**
     * Animation execution time.
     */
    flashDuration: PropTypes.number

};

FlashNumber.defaultProps = {
    initValue: 0,
    value: 0,
    flashDuration: 450
};

export default FlashNumber;