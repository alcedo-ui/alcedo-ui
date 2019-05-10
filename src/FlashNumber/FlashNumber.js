/**
 * @file FlashNumber component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
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

        this.wrapper = createRef();
        this.wrapperEl = null;

    }

    init = () => {
        this.animationFrameId && cancelAnimationFrame(this.animationFrameId);
        this.startTime = undefined;
        this.initValue = this.currentValue;
    };

    /**
     * animationFrame callback
     */
    step = timeStamp => {

        // first request
        if (!this.startTime) {
            this.startTime = timeStamp;
        } else { // non first
            if (this.wrapperEl) {

                // calculate value
                let v = this.initValue + Math.round((this.props.value - this.initValue) * (timeStamp - this.startTime) / this.flashDuration);

                // valid value
                if (this.props.value < this.initValue) { // target value < init value
                    this.wrapperEl.innerHTML = this.currentValue = v > this.props.value ? v : this.props.value;
                } else if (this.props.value > this.initValue) { // target value > init value
                    this.wrapperEl.innerHTML = this.currentValue = v < this.props.value ? v : this.props.value;
                }

            }
        }

        // request next animationFrame if not finish
        if (this.currentValue != this.props.value) {
            this.animationFrameId = requestAnimationFrame(this.step);
        } else {
            this.animationFrameId = undefined;
        }

    };

    componentDidMount() {

        this.wrapperEl = this.wrapper && this.wrapper.current;

        // start flash animate when value is not equal init value
        if (this.props.value != this.initValue) {
            this.animationFrameId = requestAnimationFrame(this.step);
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.value !== this.props.value) {
            this.init();
            this.animationFrameId = requestAnimationFrame(this.step);
        }

        if (prevProps.flashDuration !== this.flashDuration) {
            this.flashDuration = this.props.flashDuration;
        }

    }

    render() {

        const {className, style} = this.props;

        return (
            <span ref={this.wrapper}
                  className={classNames('flash-number', {
                      [className]: className
                  })}
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
