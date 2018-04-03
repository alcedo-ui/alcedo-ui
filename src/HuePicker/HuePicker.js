/**
 * @file HuePicker component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Event from '../_vendors/Event';
import Dom from '../_vendors/Dom';
import Valid from '../_vendors/Valid';

class HuePicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value
        };

        this.activated = false;

        this.mouseDownHandler = ::this.mouseDownHandler;
        this.mouseMoveHandler = ::this.mouseMoveHandler;
        this.mouseUpHandler = ::this.mouseUpHandler;
        this.changeHandler = ::this.changeHandler;

    }

    mouseDownHandler(e) {
        this.activated = true;
        this.changeHandler(e.pageX);
    }

    mouseMoveHandler(e) {
        if (this.activated) {
            this.changeHandler(e.pageX);
        }
    }

    mouseUpHandler() {
        this.activated = false;
    }

    changeHandler(mouseX) {

        const elOffset = Dom.getOffset(this.huePickerBarEl);
        if (!elOffset) {
            return;
        }

        const width = this.huePickerBarEl.offsetWidth,
            offsetX = Valid.range(mouseX - elOffset.left, 0, width),
            perCent = offsetX / width,
            value = perCent * 360;

        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    }

    componentDidMount() {

        this.huePickerBarEl = this.refs.huePickerBar;

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
            {value} = this.state,

            pickerClassName = classNames('hue-picker', {
                [className]: className
            }),
            pointerStyle = {
                left: `${value / 360 * 100}%`
            };

        return (
            <div className={pickerClassName}
                 style={style}>

                <div ref="huePickerBar"
                     className="hue-picker-bar"
                     onMouseDown={this.mouseDownHandler}>

                    <div className="hue-picker-pointer-wrapper"
                         style={pointerStyle}>
                        <i className="fas fa-caret-down hue-picker-pointer-top"></i>
                        <i className="fas fa-caret-up hue-picker-pointer-bottom"></i>
                    </div>

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