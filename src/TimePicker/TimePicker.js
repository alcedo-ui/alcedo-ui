/**
 * @file TimePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import TextField from '../_DatePickerTextField';
import TimeList from '../_TimeList';
import Popup from '../Popup';

import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import Theme from '../Theme';
import {findDOMNode} from 'react-dom';
import DropdownCalculation from '../_vendors/DropdownCalculation';
import ComponentUtil from '../_vendors/ComponentUtil';

class TimePicker extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.validValue = true;
        this.trigger = createRef();
        this.triggerEl = null;

        this.state = {
            value: props.value,
            popupVisible: false,
            hour: moment().format('HH'),
            minute: moment().format('mm'),
            second: moment().format('ss'),
            isAbove: false
        };

    }

    rangeData = range => {
        let arr = [];
        for (let i = 0; i < range; i++) {
            if (i < 10) {
                i = '0' + i;
            }
            arr.push({text: i, value: true});
        }
        return arr;
    };

    handleTextFieldChange = text => {
        if (text && text.length) {
            let validDate = '1970-01-01 ' + text;
            let validFormat = 'YYYY-MM-DD ' + this.props.dateFormat;
            const flag = moment(validDate, validFormat, true).isValid();
            if (flag) {
                const hour = moment(validDate).format('HH'),
                    minute = moment(validDate).format('mm'),
                    second = moment(validDate).format('ss');
                !this.props.disabled && this.setState({
                    value: text,
                    hour: hour,
                    minute: minute,
                    second: second
                }, () => {
                    this.props.onChange && this.props.onChange(text);
                });
            }
        } else {
            this.setState({
                value: text
            });
        }
    };

    handleTimePickerChange = obj => {
        let timer = obj.hour + ':' + obj.minute + ':' + obj.second;
        let validDate = '1970-01-01 ' + timer;
        timer = moment(validDate).format(this.props.dateFormat);
        !this.props.disabled && this.setState({
            hour: obj.hour,
            minute: obj.minute,
            second: obj.second,
            value: timer
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(timer);
        });
    };

    togglePopup = e => {
        if (this.validValue) {
            this.setState({
                popupVisible: !this.state.popupVisible
            });
        }
    };

    closePopup = () => {
        this.setState({
            popupVisible: false
        });
    };


    handlePopupRender = popupEl => {

        if (this.props.position) {
            return;
        }

        const isAbove = DropdownCalculation.isAbove(this.dropdownEl, this.triggerEl, findDOMNode(popupEl));
        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

    };

    componentDidMount() {

        this.triggerEl = this.trigger && this.trigger.current && findDOMNode(this.trigger.current);

        const {value} = this.props;
        let dateFormatValue = '2000-02-01 ' + value;
        if (value) {
            if (moment(dateFormatValue, 'YYYY-MM-DD HH:mm:ss').isValid()) {
                this.setState({
                    value,
                    hour: moment(dateFormatValue).format('HH'),
                    minute: moment(dateFormatValue).format('mm'),
                    second: moment(dateFormatValue).format('ss')
                });
            } else {
                this.validValue = false;
                console.error('Invalid date');
            }
        }

    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {
                className, style, name, placeholder, maxValue, minValue, dateFormat, position,
                popupClassName, rightIconCls, readOnly, disabled, parentEl
            } = this.props,
            {popupVisible, value, hour, minute, second, isAbove} = this.state;

        return (
            <div className={classNames('time-picker', {
                [className]: className
            })}
                 style={style}>

                <div className="wrapper">

                    <TextField ref={this.trigger}
                               className="time-picker-field"
                               name={name}
                               placeholder={placeholder}
                               value={value ?
                                   moment(moment().format('YYYY-MM-DD') + ' ' + hour + ':' + minute + ':' + second)
                                   .format(dateFormat)
                                   :
                                   value}
                               readOnly={readOnly ? readOnly : !popupVisible}
                               clearButtonVisible={false}
                               disabled={disabled}
                               isFocusedSelectAll={popupVisible}
                               popupVisible={popupVisible}
                               rightIconCls={rightIconCls}
                               onClick={e => this.togglePopup(e)}
                               onChange={this.handleTextFieldChange}/>

                    <Popup className={`time-picker-popup ${popupClassName}`}
                           visible={popupVisible}
                           triggerEl={this.triggerEl}
                           parentEl={parentEl}
                           position={position ? position : (isAbove ? Position.TOP_LEFT : Position.BOTTOM_LEFT)}
                           hasTriangle={false}
                           onRender={this.handlePopupRender}
                           onRequestClose={this.closePopup}>
                        <TimeList hour={hour}
                                  minute={minute}
                                  second={second}
                                  maxValue={maxValue}
                                  minValue={minValue}
                                  isRequired={true}
                                  dateFormat={dateFormat}
                                  popupVisible={popupVisible}
                                  onChange={this.handleTimePickerChange}/>
                    </Popup>
                </div>
            </div>
        );
    }
}

TimePicker.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the popup element.
     */
    popupClassName: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Time picker input name.
     */
    name: PropTypes.string,

    /**
     * This is the initial date value of the component.
     */
    value: PropTypes.string,

    /**
     * The ending of a range of valid dates. The range includes the endDate.
     */
    maxValue: PropTypes.string,

    /**
     * The beginning of a range of valid dates. The range includes the startDate.
     */
    minValue: PropTypes.string,

    /**
     * TimePicker textField element placeholder.
     */
    placeholder: PropTypes.string,

    /**
     * If true,timePicker textField is readOnly.
     */
    readOnly: PropTypes.bool,
    /**
     * If true,timePicker textField is disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Time format.
     */
    dateFormat: PropTypes.string,

    position: PropTypes.oneOf(Util.enumerateValue(Position)),
    rightIconCls: PropTypes.string,
    parentEl: PropTypes.object,

    onChange: PropTypes.func

};

TimePicker.defaultProps = {
    name: '',
    value: moment().format('HH:mm:ss'),
    placeholder: 'Time',
    popupClassName: '',
    dateFormat: 'HH:mm:ss',
    position: Position.BOTTOM_LEFT,
    readOnly: false,
    disabled: false
};

export default TimePicker;
