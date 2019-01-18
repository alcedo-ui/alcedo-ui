/**
 * @file OpacityPicker component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
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

    mouseDownHandler = e => {
        this.activated = true;
        this.handleChange(e.pageX);
    };

    mouseMoveHandler = e => {
        if (this.activated) {
            this.handleChange(e.pageX);
        }
    };

    mouseUpHandler = () => {
        this.activated = false;
    };

    /**
     * handle mouse event change
     * @param mouseX
     */
    handleChange = mouseX => {

        const elOffset = Dom.getOffset(this.huePickerBarEl);
        if (!elOffset) {
            return;
        }

        const {scrollEl} = this.props,
            {left} = Dom.getTotalScrollOffset(this.huePickerBarEl, scrollEl),
            barWidth = this.huePickerBarEl.offsetWidth,
            sliderWidth = this.huePickerSliderEl.offsetWidth,

            halfSliderWidth = sliderWidth / 2,
            width = barWidth - sliderWidth,

            offsetX = Valid.range(mouseX - elOffset.left - halfSliderWidth + left, 0, width),

            value = offsetX / width;

        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    };

    componentDidMount() {

        this.huePickerBarEl = this.refs.huePickerBar;
        this.huePickerSliderEl = this.refs.huePickerSlider;

        Event.addEvent(document, 'mousemove', this.mouseMoveHandler);
        Event.addEvent(document, 'mouseup', this.mouseUpHandler);

    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.mouseMoveHandler);
        Event.removeEvent(document, 'mouseup', this.mouseUpHandler);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {className, style, color} = this.props,
            pickerClassName = classNames('opacity-picker', {
                [className]: className
            });

        return (
            <div className={pickerClassName}
                 style={style}>
                <div ref="huePickerBar"
                     className="opacity-picker-bar"
                     onMouseDown={this.mouseDownHandler}>

                    <div className="opacity-picker-color-overlay"
                         style={{
                             background: `linear-gradient(90deg, transparent, rgb(${color.join(',')}))`
                         }}></div>

                    <div ref="huePickerSlider"
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
     * Color display
     */
    color: PropTypes.array,

    scrollEl: PropTypes.object,

    onChange: PropTypes.func

};

OpacityPicker.defaultProps = {
    value: 1,
    color: [0, 0, 0],
    scrollEl: document.body
};

export default OpacityPicker;
