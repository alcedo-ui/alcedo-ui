/**
 * @file ColorPicker component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import sum from 'lodash/sum';
import classNames from 'classnames';

import HuePicker from '../HuePicker';

import PureRender from '../_vendors/PureRender';
import Dom from '../_vendors/Dom';
import Event from '../_vendors/Event';
import Valid from '../_vendors/Valid';
import Color from '../_vendors/Color';

@PureRender
class ColorPicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            hsb: Color.rgb2hsb(props.value)
        };

        this.activated = false;

        this.mouseDownHandler = ::this.mouseDownHandler;
        this.mouseMoveHandler = ::this.mouseMoveHandler;
        this.mouseUpHandler = ::this.mouseUpHandler;
        this.changeHandler = ::this.changeHandler;
        this.hueChangeHandler = ::this.hueChangeHandler;

    }

    mouseDownHandler(e) {
        this.activated = true;
        this.changeHandler(e.pageX, e.pageY);
    }

    mouseMoveHandler(e) {
        if (this.activated) {
            this.changeHandler(e.pageX, e.pageY);
        }
    }

    mouseUpHandler() {
        this.activated = false;
    }

    changeHandler(mouseX, mouseY) {

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

    }

    hueChangeHandler(hue) {

        const {hsb} = this.state;
        hsb[0] = hue;

        const value = Color.hsb2rgb(hsb);

        this.setState({
            value,
            hsb
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    }

    componentDidMount() {

        this.colorPickerAreaEl = this.refs.colorPickerArea;

        Event.addEvent(document, 'mousemove', this.mouseMoveHandler);
        Event.addEvent(document, 'mouseup', this.mouseUpHandler);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.mouseMoveHandler);
        Event.removeEvent(document, 'mouseup', this.mouseUpHandler);
    }

    render() {

        const {className, style} = this.props,
            {value, hsb} = this.state,

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
            <div className={'color-picker' + (className ? ' ' + className : '')}
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

                <HuePicker value={hsb[0]}
                           onChange={this.hueChangeHandler}/>

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

    value: PropTypes.array

};

ColorPicker.defaultProps = {
    value: [255, 0, 0]
};

export default ColorPicker;