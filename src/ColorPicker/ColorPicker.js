/**
 * @file ColorPicker component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import sum from 'lodash/sum';
import classNames from 'classnames';

import Dom from '../_vendors/Dom';
import Event from '../_vendors/Event';
import Valid from '../_vendors/Valid';
import Color from '../_vendors/Color';
import ComponentUtil from '../_vendors/ComponentUtil';

class ColorPicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        const hsb = Color.rgb2hsb(Color.hex2rgb(props.value));
        this.state = {
            value: props.value,
            s: hsb ? hsb[1] : 0,
            b: hsb ? hsb[2] : 0,
            x: hsb ? `${hsb[1] * 100}%` : 0,
            y: hsb ? `${(1 - hsb[2]) * 100}%` : 0
        };

        this.activated = false;

    }

    mouseDownHandler = e => {
        this.activated = true;
        this.handleChange(e.pageX, e.pageY);
    };

    mouseMoveHandler = e => {
        if (this.activated) {
            this.handleChange(e.pageX, e.pageY);
        }
    };

    mouseUpHandler = () => {
        this.activated = false;
    };

    /**
     * handle mouse event to calc new value
     * @param mouseX
     * @param mouseY
     */
    handleChange = (mouseX, mouseY) => {

        const elOffset = Dom.getOffset(this.colorPickerAreaEl);
        if (!elOffset) {
            return;
        }

        const {hue, scrollEl} = this.props,
            width = this.colorPickerAreaEl.offsetWidth,
            height = this.colorPickerAreaEl.offsetHeight,
            {left, top} = Dom.getTotalScrollOffset(this.colorPickerAreaEl, scrollEl),

            x = Valid.range(mouseX - elOffset.left + left, 0, width),
            y = Valid.range(mouseY - elOffset.top + top, 0, height),

            s = x / width,
            b = 1 - y / height,

            value = Color.rgb2hex(Color.hsb2rgb([hue, s, b]));

        this.setState({
            value,
            s,
            b,
            x,
            y
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    };

    componentDidMount() {

        this.colorPickerAreaEl = this.refs.colorPickerArea;

        Event.addEvent(document, 'mousemove', this.mouseMoveHandler);
        Event.addEvent(document, 'mouseup', this.mouseUpHandler);

    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.mouseMoveHandler);
        Event.removeEvent(document, 'mouseup', this.mouseUpHandler);
    }

    static getDerivedStateFromProps(props, state) {

        const value = ComponentUtil.getDerivedState(props, state, 'value');

        if (value === state.value) {
            return null;
        }

        const hsb = Color.rgb2hsb(Color.hex2rgb(value));
        return {
            prevProps: props,
            value,
            s: hsb ? hsb[1] : 0,
            b: hsb ? hsb[2] : 0,
            x: hsb ? `${hsb[1] * 100}%` : 0,
            y: hsb ? `${(1 - hsb[2]) * 100}%` : 0
        };

    }

    // handleHueChange = hue => {
    //
    //     const {hsb} = this.state;
    //     hsb[0] = hue;
    //
    //     const value = Color.hsb2rgb(hsb);
    //
    //     this.setState({
    //         value,
    //         hsb
    //     }, () => {
    //         const {onChange} = this.props;
    //         onChange && onChange(value);
    //     });
    //
    // };

    render() {

        const {className, style, hue} = this.props,
            {value, x, y} = this.state,

            pickerClassName = classNames('color-picker', {
                [className]: className
            }),

            areaColor = Color.hue2rgb(hue),
            areaStyle = {
                background: areaColor ? `rgb(${areaColor.join(', ')})` : null
            },

            cursorClassName = classNames('color-picker-cursor', {
                light: sum(Color.hex2rgb(value)) / 3 < 128
            }),
            cursorStyle = {
                left: x,
                top: y
            };

        return (
            <div className={pickerClassName}
                 style={style}>
                <div ref="colorPickerArea"
                     className="color-picker-area"
                     style={areaStyle}
                     onMouseDown={this.mouseDownHandler}>

                    <div className="color-picker-area-white-overlay"></div>
                    <div className="color-picker-area-black-overlay"></div>

                    <div className={cursorClassName}
                         style={cursorStyle}></div>

                </div>
            </div>
        );

    }
}

ColorPicker.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * hue value (deg)
     */
    hue: PropTypes.number,

    /**
     * rgb hex value
     */
    value: PropTypes.string,

    scrollEl: PropTypes.object

};

ColorPicker.defaultProps = {
    hue: 0,
    value: 'ff0000',
    scrollEl: document.body
};

export default ColorPicker;
