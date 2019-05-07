/**
 * @file ColorPicker component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
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

        this.activated = false;
        this.colorPickerArea = createRef();
        this.colorPickerAreaEl = null;

        const hsb = Color.rgb2hsb(Color.hex2rgb(props.value));
        this.state = {
            value: props.value,
            s: hsb ? hsb[1] : 0,
            b: hsb ? hsb[2] : 0,
            x: hsb ? `${hsb[1] * 100}%` : 0,
            y: hsb ? `${(1 - hsb[2]) * 100}%` : 0
        };

    }

    handleMouseDown = e => {
        this.activated = true;
        this.handleChange(e.pageX, e.pageY);
    };

    handleMouseMove = e => {
        if (this.activated) {
            this.handleChange(e.pageX, e.pageY);
        }
    };

    handleMouseUp = () => {
        this.activated = false;
    };

    /**
     * handle mouse event to calc new value
     * @param mouseX
     * @param mouseY
     */
    handleChange = (mouseX, mouseY) => {

        const {hue} = this.props,
            width = this.colorPickerAreaEl.offsetWidth,
            height = this.colorPickerAreaEl.offsetHeight,
            {left, top} = Dom.getOffset(this.colorPickerAreaEl),

            x = Valid.range(mouseX - left, 0, width),
            y = Valid.range(mouseY - top, 0, height),

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

        this.colorPickerAreaEl = this.colorPickerArea && this.colorPickerArea.current;

        Event.addEvent(document, 'mousemove', this.handleMouseMove);
        Event.addEvent(document, 'mouseup', this.handleMouseUp);

    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.handleMouseMove);
        Event.removeEvent(document, 'mouseup', this.handleMouseUp);
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
            areaColor = Color.hue2rgb(hue);

        return (
            <div className={classNames('color-picker', {
                [className]: className
            })}
                 style={style}>
                <div ref={this.colorPickerArea}
                     className="color-picker-area"
                     style={{
                         background: areaColor ? `rgb(${areaColor.join(', ')})` : null
                     }}
                     onMouseDown={this.handleMouseDown}>

                    <div className="color-picker-area-white-overlay"></div>
                    <div className="color-picker-area-black-overlay"></div>

                    <div className={classNames('color-picker-cursor', {
                        light: sum(Color.hex2rgb(value)) / 3 < 128
                    })}
                         style={{
                             left: x,
                             top: y
                         }}></div>

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

    onChange: PropTypes, func

};

ColorPicker.defaultProps = {
    hue: 0,
    value: 'ff0000'
};

export default ColorPicker;
