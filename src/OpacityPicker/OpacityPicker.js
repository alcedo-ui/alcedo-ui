/**
 * @file OpacityPicker component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Event from '../_vendors/Event';
import Dom from '../_vendors/Dom';
import Valid from '../_vendors/Valid';
import ComponentUtil from '../_vendors/ComponentUtil';

class OpacityPicker extends Component {

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
     * get slider css left by opacity value
     * @param value
     * @returns {number}
     */
    calcSliderLeft = (value = this.state.value) => {

        const barEl = this.huePickerBarEl,
            sliderEl = this.huePickerSliderEl;

        if (!value || !barEl || !sliderEl) {
            return 0;
        }

        const barWidth = barEl.offsetWidth,
            sliderWidth = sliderEl.offsetWidth,
            width = barWidth - sliderWidth;

        return value * width;

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

            value = Math.round(offsetX / width * 100) / 100;

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
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {className, style, color} = this.props;

        return (
            <div className={classNames('opacity-picker', {
                [className]: className
            })}
                 style={style}>
                <div ref={this.huePickerBar}
                     className="opacity-picker-bar"
                     onMouseDown={this.handleMouseDown}>

                    <div className="opacity-picker-color-overlay"
                         style={{
                             background: `linear-gradient(90deg, transparent, #${color})`
                         }}></div>

                    <div ref={this.huePickerSlider}
                         className="opacity-picker-slider"
                         style={{left: this.calcSliderLeft()}}></div>

                </div>
            </div>
        );

    }
}

OpacityPicker.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Transparency value ( range: [0, 1] ).
     */
    value: PropTypes.number,

    /**
     * Color hex value
     */
    color: PropTypes.string,

    onChange: PropTypes.func

};

OpacityPicker.defaultProps = {
    value: 1,
    color: '000000'
};

export default OpacityPicker;
