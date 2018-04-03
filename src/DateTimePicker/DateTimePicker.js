/**
 * @file DateTimePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';

import TextField from '../TextField';
import DayPicker from '../_DayPicker';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';
import TimeList from '../_TimeList';
import RaisedButton from '../RaisedButton';
import Popup from '../Popup';
import Theme from '../Theme';

import Position from '../_statics/Position';

class DateTimePicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.validValue = true;

        const defaultValue = props.value ? props.value : moment().format('YYYY-MM-DD HH:mm:ss');
        this.state = {
            value: props.value,
            popupVisible: false,
            triggerEl: null,
            year: moment(defaultValue).format('YYYY'),
            month: moment(defaultValue).format('MM'),
            day: moment(defaultValue).format('DD'),
            hour: moment(defaultValue).format('HH'),
            minute: moment(defaultValue).format('mm'),
            second: moment(defaultValue).format('ss'),
            datePickerLevel: 'day'
        };

        this.textFieldChangeHandle = ::this.textFieldChangeHandle;
        this.togglePopup = ::this.togglePopup;
        this.closePopup = ::this.closePopup;
        this.datePickerChangeHandle = ::this.datePickerChangeHandle;
        this.yearPickerChangeHandle = ::this.yearPickerChangeHandle;
        this.monthPickerChangeHandle = ::this.monthPickerChangeHandle;
        this.dayPickerChangeHandle = ::this.dayPickerChangeHandle;
        this.timePickerChangeHandle = ::this.timePickerChangeHandle;
        this.chooseDateAndTimeHandle = ::this.chooseDateAndTimeHandle;
        this.nowHandle = ::this.nowHandle;
        this.selectDateTimeHandle = ::this.selectDateTimeHandle;
    }

    datePickerChangeHandle(selectLevel) {
        this.setState({
            datePickerLevel: selectLevel
        });
    }

    textFieldChangeHandle(text) {
        const {minValue, maxValue, dateFormat} = this.props;
        if (text && text.length) {
            const flag = moment(text, dateFormat, true).isValid();
            if (flag) {
                if (minValue && moment(text).isBefore(minValue) || maxValue && moment(text).isAfter(maxValue)) {

                } else {
                    const select_year = moment(text).format('YYYY'),
                        select_month = moment(text).format('MM'),
                        select_day = moment(text).format('DD'),
                        hour = moment(text).format('HH'),
                        minute = moment(text).format('mm'),
                        second = moment(text).format('ss');
                    this.setState({
                        value: moment(text, dateFormat),
                        year: select_year,
                        month: select_month,
                        day: select_day,
                        hour: hour,
                        minute: minute,
                        second: second
                    });
                }
            }
        } else {
            this.setState({
                value: ''
            });
        }
    }

    dayPickerChangeHandle(date) {
        const {dateFormat} = this.props;
        this.setState({
            value: moment(date.time, dateFormat),
            year: date.year,
            month: date.month,
            day: date.day
        });
    }

    monthPickerChangeHandle(date) {
        this.setState({
            datePickerLevel: 'day',
            year: date.year,
            month: date.month
        });
    }

    yearPickerChangeHandle(year) {
        this.setState({
            datePickerLevel: 'month',
            year: year
        });
    }

    timePickerChangeHandle(obj) {
        let state = cloneDeep(this.state);
        state.hour = obj.hour;
        state.minute = obj.minute;
        state.second = obj.second;
        let timer = moment([state.year, +state.month - 1, state.day, state.hour, state.minute, state.second]).format(this.props.dateFormat);
        timer = moment(timer, this.props.dateFormat);
        this.setState({
            hour: obj.hour,
            minute: obj.minute,
            second: obj.second,
            value: timer
        });
    }

    chooseDateAndTimeHandle(value) {
        this.setState({
            datePickerLevel: value
        });
    }

    selectDateTimeHandle() {
        let state = cloneDeep(this.state);
        state.popupVisible = false;
        state.datePickerLevel = 'day';
        !this.props.disabled && this.setState(state, () => {
            this.props.onChange && this.props.onChange(state.value && moment(state.value).format(this.props.dateFormat));
        });
    }

    nowHandle() {
        const year = moment().format('YYYY'),
            month = moment().format('MM'),
            day = moment().format('DD'),
            hour = moment().format('HH'),
            minute = moment().format('mm'),
            second = moment().format('ss');

        let timer = moment(moment(), this.props.dateFormat);
        this.setState({
            value: timer,
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second
        });
    }

    togglePopup(e) {
        if (this.validValue) {
            this.setState({
                popupVisible: !this.state.popupVisible,
                triggerEl: e.target
            });
        }
    }

    closePopup() {
        const {value} = this.state;
        !this.props.disabled && this.setState({
            popupVisible: false
        }, () => {
            this.props.onChange && this.props.onChange(value && moment(value).format(this.props.dateFormat));
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value || nextProps.dateFormat !== this.props.dateFormat) {
            const value = moment(nextProps.value, nextProps.dateFormat);
            this.setState({
                value: value,
                dateFormat: nextProps.dateFormat,
                year: moment(nextProps.value).format('YYYY'),
                month: moment(nextProps.value).format('MM'),
                day: moment(nextProps.value).format('DD'),
                hour: moment(nextProps.value).format('HH'),
                minute: moment(nextProps.value).format('mm'),
                second: moment(nextProps.value).format('ss')
            });
        }
    }

    componentDidMount() {
        const {value, dateFormat} = this.props;
        let state = cloneDeep(this.state);
        if (value) {
            if (moment(value, dateFormat).isValid()) {
                const select_year = moment(value).format('YYYY'),
                    select_month = moment(value).format('MM'),
                    select_day = moment(value).format('DD');
                state.value = moment(value, dateFormat);
                state.year = select_year;
                state.month = select_month;
                state.day = select_day;
                this.setState(state);
            } else {
                console.error('Invalid date');
                this.validValue = false;
            }
        }

    }


    render() {

        const {className, style, name, placeholder, dateFormat, maxValue, minValue, isFooter, disabled, position} = this.props,
            {value, popupVisible, datePickerLevel, year, month, day, hour, minute, second, triggerEl} = this.state,

            pickerClassName = classNames('date-time-picker', {
                [className]: className
            }),

            textValue = value && moment(value).format(dateFormat);

        return (
            <div ref="datePicker"
                 className={pickerClassName}
                 style={style}>

                <TextField ref="trigger"
                           className="date-picker-field"
                           name={name}
                           placeholder={placeholder}
                           value={textValue}
                           readOnly={true}
                           disabled={disabled}
                           clearButtonVisible={false}
                           isFocusedSelectAll={false}
                           onTouchTap={e => {
                               this.togglePopup(e);
                           }}/>

                <Popup className={`date-time-picker-popup`}
                       visible={popupVisible}
                       triggerEl={triggerEl}
                       position={position}
                       hasTriangle={false}
                       onRequestClose={() => {
                           this.closePopup();
                       }}>

                    <div className="calendar-date-input-wrap">
                        <TextField className='calendar-input'
                                   placeholder={'Select Date'}
                                   clearButtonVisible={false}
                                   value={textValue}
                                   onChange={this.textFieldChangeHandle}/>
                    </div>

                    {
                        datePickerLevel == 'day' ?
                            <DayPicker
                                value={value}
                                dateFormat={dateFormat}
                                year={year}
                                month={month}
                                day={day}
                                hour={hour}
                                minute={minute}
                                second={second}
                                maxValue={maxValue ? moment(maxValue).format('YYYY-MM-DD') : null}
                                minValue={minValue ? moment(minValue).format('YYYY-MM-DD') : null}
                                isFooter={true}
                                onChange={this.dayPickerChangeHandle}
                                previousClick={this.datePickerChangeHandle}/>
                            : (
                                datePickerLevel == 'month' ?
                                    <MonthPicker
                                        value={value}
                                        year={year}
                                        month={month}
                                        day={day}
                                        maxValue={maxValue ? moment(maxValue).format('YYYY-MM-DD') : null}
                                        minValue={minValue ? moment(minValue).format('YYYY-MM-DD') : null}
                                        onChange={this.monthPickerChangeHandle}
                                        previousClick={this.datePickerChangeHandle}/>
                                    : (
                                        datePickerLevel == 'year' ?
                                            <YearPicker
                                                value={value}
                                                year={year}
                                                month={month}
                                                day={day}
                                                maxValue={maxValue ? moment(maxValue).format('YYYY-MM-DD') : null}
                                                minValue={minValue ? moment(minValue).format('YYYY-MM-DD') : null}
                                                onChange={this.yearPickerChangeHandle}/>
                                            :
                                            null
                                    )

                            )
                    }

                    {
                        <TimeList className={`time-picker-body ${datePickerLevel == 'time' ? '' : 'hidden'}`}
                                  dateFormat={dateFormat.split(' ')[1]}
                                  popupVisible={datePickerLevel == 'time' ? true : false}
                                  hour={hour}
                                  minute={minute}
                                  second={second}
                                  isRequired={(minValue && textValue.split(' ')[0] == minValue.split(' ')[0]) || (maxValue && textValue.split(' ')[0] == maxValue.split(' ')[0]) ? true : false}
                                  maxValue={maxValue && textValue.split(' ')[0] == maxValue.split(' ')[0] ? moment(maxValue).format('HH:mm:ss') : null}
                                  minValue={minValue && textValue.split(' ')[0] == minValue.split(' ')[0] ? moment(minValue).format('HH:mm:ss') : null}
                                  onChange={this.timePickerChangeHandle}/>
                    }

                    {
                        isFooter ?
                            <div className="calendar-footer">
                                <div className="action fl">
                                    {
                                        (minValue && moment(this.props.value).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(this.props.value)) ?
                                            <a href="javascript:;" className="fl">
                                                <span className="item-gray">Now</span>
                                            </a>
                                            :
                                            <a href="javascript:;"
                                               className="fl"
                                               onClick={this.nowHandle}>
                                                Now
                                            </a>
                                    }
                                    {
                                        datePickerLevel == 'time' ?
                                            <a href="javascript:;" className="fr" onClick={() => {
                                                this.chooseDateAndTimeHandle('day');
                                            }}>
                                                Select date
                                            </a>
                                            :
                                            <a href="javascript:;" className="fr" onClick={() => {
                                                this.chooseDateAndTimeHandle('time');
                                            }}>
                                                Select time
                                            </a>
                                    }
                                </div>
                                <div className="select-button fr" onClick={this.selectDateTimeHandle}>
                                    <RaisedButton
                                        className={year && month && day && hour && minute && second ? 'active' : ''}
                                        value="Ok"
                                        theme={Theme.HIGHLIGHT}/>
                                </div>
                            </div>
                            :
                            null
                    }

                </Popup>
            </div>
        );
    }
}

DateTimePicker.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Date picker input name.
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
     * DateTimePicker textField element placeholder.
     */
    placeholder: PropTypes.string,

    /**
     * Date Time format.
     */
    dateFormat: PropTypes.string,

    /**
     * Callback function that is fired when the date value changes.
     */
    onChange: PropTypes.func

};

DateTimePicker.defaultProps = {
    name: '',
    value: moment().format('YYYY-MM-DD HH:mm:ss'),
    maxValue: '',
    minValue: '',
    placeholder: 'Date',
    dateFormat: 'YYYY-MM-DD HH:mm:ss',
    isFooter: true,
    position: Position.BOTTOM_LEFT
};

export default DateTimePicker;