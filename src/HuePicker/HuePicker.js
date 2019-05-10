/**
 * @file HuePicker component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Event from '../_vendors/Event';
import Dom from '../_vendors/Dom';
import Valid from '../_vendors/Valid';
import ComponentUtil from '../_vendors/ComponentUtil';

class HuePicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.activated = false;

        this.huePickerBar = createRef();
        this.huePickerBarEl = null;
        this.huePickerSlider = createRef();
        this.huePickerSliderEl = null;

        this.state = {
            value: props.value
        };

    }

    /**
     * get slider css left by hue value
     * @param value
     * @returns {number}
     */
    calcSliderLeft = (value = this.state.value) => {

        if (!value || !this.huePickerBarEl || !this.huePickerSliderEl) {
            return 0;
        }

        const barWidth = this.huePickerBarEl.offsetWidth,
            sliderWidth = this.huePickerSliderEl.offsetWidth,
            width = barWidth - sliderWidth;

        return value / 360 * width;

    };

    handleMouseDown = e => {
        this.activated = true;
        this.handleChange(e.pageX);
    };

    handleMouseMove = e => {
        if (this.activated) {
            this.handleChange(e.pageX);
        }
    };

    handleMouseUp = () => {
        this.activated = false;
    };

    /**
     * handle mouse event change
     * @param mouseX
     */
    handleChange = mouseX => {

        const {left} = Dom.getOffset(this.huePickerBarEl),
            barWidth = this.huePickerBarEl.offsetWidth,
            sliderWidth = this.huePickerSliderEl.offsetWidth,

            halfSliderWidth = sliderWidth / 2,
            width = barWidth - sliderWidth,

            offsetX = Valid.range(mouseX - halfSliderWidth - left, 0, width),
            perCent = offsetX / width,

            value = Math.round(perCent * 360);

        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    };

    componentDidMount() {

        this.huePickerBarEl = this.huePickerBar && this.huePickerBar.current;
        this.huePickerSliderEl = this.huePickerSlider && this.huePickerSlider.current;

        Event.addEvent(document, 'mousemove', this.handleMouseMove);
        Event.addEvent(document, 'mouseup', this.handleMouseUp);

    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.handleMouseMove);
        Event.removeEvent(document, 'mouseup', this.handleMouseUp);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: Math.round(ComponentUtil.getDerivedState(props, state, 'value'))
        };
    }

    render() {

        const {className, style} = this.props;

        return (
            <div className={classNames('hue-picker', {
                [className]: className
            })}
                 style={style}>
                <div ref={this.huePickerBar}
                     className="hue-picker-bar"
                     onMouseDown={this.handleMouseDown}>
                    <div ref={this.huePickerSlider}
                         className="hue-picker-slider"
                         style={{left: this.calcSliderLeft()}}></div>
                </div>
            </div>
        );

    }
}

HuePicker.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * hue value (deg).
     */
    value: PropTypes.number,

    onChange: PropTypes.func

};

HuePicker.defaultProps = {
    value: 0
};

export default HuePicker;
