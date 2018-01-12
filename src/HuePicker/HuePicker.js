/**
 * @file HuePicker component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Event from '../_vendors/Event';
import Dom from '../_vendors/Dom';
import Valid from '../_vendors/Valid';

export default class HuePicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value
        };

        this.activated = false;

        this.mouseDownHandler = ::this.mouseDownHandler;
        this.mouseMoveHandler = ::this.mouseMoveHandler;
        this.mouseUpHandler = ::this.mouseUpHandler;

    }

    mouseDownHandler(e) {
        this.activated = true;
        this.changeHandler(e.clientX);
    }

    mouseMoveHandler(e) {
        if (this.activated) {
            this.changeHandler(e.clientX);
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

        const offsetX = mouseX - elOffset.left,
            width = this.huePickerBarEl.offsetWidth,
            offset = Valid.range(offsetX, 0, width),
            perCent = offset / width,
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

            wrapperClassName = (className ? ' ' + className : ''),

            pointerStyle = {
                left: `${value / 360 * 100}%`
            };

        return (
            <div className={'hue-picker' + wrapperClassName}
                 style={style}>

                <div ref="huePickerBar"
                     className="hue-picker-bar"
                     onMouseDown={this.mouseDownHandler}>

                    <div className="hue-picker-pointer-wrapper"
                         style={pointerStyle}>
                        <i className="fa fa-caret-down hue-picker-pointer-top"></i>
                        <i className="fa fa-caret-up hue-picker-pointer-bottom"></i>
                    </div>

                </div>

            </div>
        );

    }
};

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

    className: null,
    style: null,

    value: 0

};