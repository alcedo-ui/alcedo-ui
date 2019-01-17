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

        this.state = {
            value: props.value,
            hsb: Color.rgb2hsb(props.value)
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

        const width = this.colorPickerAreaEl.offsetWidth,
            height = this.colorPickerAreaEl.offsetHeight,

            offsetX = Valid.range(mouseX - elOffset.left, 0, width),
            offsetY = Valid.range(mouseY - elOffset.top, 0, height),

            s = offsetX / width,
            b = 1 - offsetY / height,

            hsb = [this.state.hsb[0], s, b],
            value = Color.hsb2rgb(hsb);

        this.setState({
            value,
            hsb
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

        return {
            prevProps: props,
            value,
            hsb: Color.rgb2hsb(value)
        };

    }

    render() {

        const {className, style} = this.props,
            {value, hsb} = this.state,

            pickerClassName = classNames('color-picker', {
                [className]: className
            }),
            areaStyle = {
                background: `rgb(${Color.hue2rgb(hsb[0]).join(', ')})`
            },

            cursorClassName = classNames('color-picker-cursor', {
                light: sum(value) / 3 < 128
            }),
            cursorStyle = {
                left: `${hsb[1] * 100}%`,
                top: `${(1 - hsb[2]) * 100}%`
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
     * rgb array
     */
    value: PropTypes.array

};

ColorPicker.defaultProps = {
    value: [255, 0, 0]
};

export default ColorPicker;
