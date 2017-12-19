/**
 * @file DateTimePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';

import TextField from '../TextField';
import DayPicker from '../_DayPicker';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';
import TimeList from '../_TimeList';
import RaisedButton from '../RaisedButton';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';
import Event from '../_vendors/Event';
import Theme from 'src/Theme';

export default class DateTimePicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            popupVisible: false,
            year: moment(props.value).format('YYYY'),
            month: moment(props.value).format('MM'),
            day: moment(props.value).format('DD'),
            hour: moment(props.value).format('HH'),
            minute: moment(props.value).format('mm'),
            second: moment(props.value).format('ss'),
            datePickerLevel: 0,
            marginLeft: 0,
            isFooter: true
        };

        this.textFieldChangeHandle = ::this.textFieldChangeHandle;
        this.mousedownHandle = ::this.mousedownHandle;
        this.resizeHandle = ::this.resizeHandle;
        this.datePickerChangeHandle = ::this.datePickerChangeHandle;
        this.yearPickerChangeHandle = ::this.yearPickerChangeHandle;
        this.monthPickerChangeHandle = ::this.monthPickerChangeHandle;
        this.dayPickerChangeHandle = ::this.dayPickerChangeHandle;
        this.timePickerChangeHandle = ::this.timePickerChangeHandle;
        this.chooseDateAndTimeHandle = ::this.chooseDateAndTimeHandle;
        this.nowHandle = ::this.nowHandle;
        this.selectDateTimeHandle = ::this.selectDateTimeHandle;
    }

    datePickerChangeHandle(select) {
        let {datePickerLevel} = this.state;
        datePickerLevel = datePickerLevel + 1;
        this.setState({
            datePickerLevel: datePickerLevel
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
                value: moment(text, dateFormat)
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
            datePickerLevel: 0,
            year: date.year,
            month: date.month
        });
    }

    yearPickerChangeHandle(year) {
        this.setState({
            datePickerLevel: 1,
            year: year
        });
    }

    timePickerChangeHandle(obj) {
        let state = _.cloneDeep(this.state);
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
        let state = _.cloneDeep(this.state);
        state.popupVisible = false;
        state.datePickerLevel = 0;
        this.setState(state);
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

    mousedownHandle(e) {
        const flag = Event.triggerPopupEventHandle(e.target, require('react-dom').findDOMNode(this.refs.trigger), this.refs.popup, this.state.popupVisible);
        if (flag) {
            !this.props.disabled && this.setState({
                popupVisible: flag
            });
        } else {
            !this.props.disabled && this.setState({
                popupVisible: flag,
                datePickerLevel: 0
            });
        }
    }

    resizeHandle() {
        const {left} = Dom.getOffset(this.refs.datePicker);
        const width = 300;
        const windowWidth = document.body.clientWidth;
        let marginLeft;
        if ((left + width) >= windowWidth) {
            marginLeft = (left + width) - windowWidth;
        } else {
            marginLeft = 0;
        }
        this.setState({
            marginLeft: marginLeft
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
        // debugger
        const {value, dateFormat} = this.props;
        let state = _.cloneDeep(this.state);
        const {left} = Dom.getOffset(this.refs.datePicker);
        const width = 300;
        const windowWidth = document.body.clientWidth;
        let marginLeft;
        if ((left + width) >= windowWidth) {
            marginLeft = (left + width) - windowWidth;
        } else {
            marginLeft = 0;
        }
        if (value) {
            const select_year = moment(value).format('YYYY'),
                select_month = moment(value).format('MM'),
                select_day = moment(value).format('DD');
            state.value = moment(value, dateFormat);
            state.year = select_year;
            state.month = select_month;
            state.day = select_day;
            if (marginLeft) {
                state.marginLeft = marginLeft;
            }
            this.setState(state);
        }

        Event.addEvent(window, 'mousedown', this.mousedownHandle);
        Event.addEvent(window, 'resize', this.resizeHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(window, 'mousedown', this.mousedownHandle);
        Event.removeEvent(window, 'resize', this.resizeHandle);
    }

    render() {
        const {className, style, name, placeholder, dateFormat, maxValue, minValue} = this.props;
        const {value, popupVisible, datePickerLevel, year, month, day, hour, minute, second, marginLeft, isFooter} = this.state;
        const popStyle = {
            left: '-' + marginLeft + 'px'
        };
        let textValue = moment(value).format(dateFormat);
        return (
            <div className={`date-time-picker ${className}`}
                 ref="datePicker"
                 style={style}>

                <TextField ref="trigger"
                           className="date-picker-field"
                           name={name}
                           placeholder={placeholder}
                           value={textValue}
                           iconCls="fa fa-calendar"
                           readOnly={true}
                           clearButtonVisible={false}
                />

                <div ref="popup"
                     className={`date-picker-popup ${popupVisible ? '' : 'hidden'}`}
                     style={popStyle}>
                    <div className="calendar-date-input-wrap">
                        <TextField className='calendar-input'
                                   placeholder={'Select Date'}
                                   clearButtonVisible={true}
                                   value={textValue}
                                   onChange={this.textFieldChangeHandle}/>
                    </div>
                    {
                        datePickerLevel == 0 ?
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
                                previousClick={this.datePickerChangeHandle}
                            />
                            : (
                            datePickerLevel == 1 ?
                                <MonthPicker
                                    value={value}
                                    year={year}
                                    month={month}
                                    day={day}
                                    maxValue={maxValue ? moment(maxValue).format('YYYY-MM-DD') : null}
                                    minValue={minValue ? moment(minValue).format('YYYY-MM-DD') : null}
                                    onChange={this.monthPickerChangeHandle}
                                    previousClick={this.datePickerChangeHandle}
                                />
                                : (
                                datePickerLevel == 2 ?
                                    <YearPicker
                                        value={value}
                                        year={year}
                                        month={month}
                                        day={day}
                                        maxValue={maxValue ? moment(maxValue).format('YYYY-MM-DD') : null}
                                        minValue={minValue ? moment(minValue).format('YYYY-MM-DD') : null}
                                        onChange={this.yearPickerChangeHandle}
                                    />
                                    :
                                    null
                            )

                        )
                    }
                    {
                        <TimeList className={`time-picker-body ${datePickerLevel == 3 ? '' : 'hidden'}`}
                                  dateFormat={dateFormat.split(' ')[1]}
                                  popupVisible={datePickerLevel == 3 ? true : false}
                                  hour={hour}
                                  minute={minute}
                                  second={second}
                                  isRequired={(minValue && textValue.split(' ')[0] == minValue.split(' ')[0]) || (maxValue && textValue.split(' ')[0] == maxValue.split(' ')[0]) ? true : false}
                                  maxValue={maxValue && textValue.split(' ')[0] == maxValue.split(' ')[0] ? moment(maxValue).format('HH:mm:ss') : null}
                                  minValue={minValue && textValue.split(' ')[0] == minValue.split(' ')[0] ? moment(minValue).format('HH:mm:ss') : null}
                                  onChange={this.timePickerChangeHandle}
                        />
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
                                        datePickerLevel == 3 ?
                                            <a href="javascript:;" className="fr" onClick={() => {
                                                this.chooseDateAndTimeHandle(0);
                                            }}>
                                                Select date
                                            </a>
                                            :
                                            <a href="javascript:;" className="fr" onClick={() => {
                                                this.chooseDateAndTimeHandle(3);
                                            }}>
                                                Select time
                                            </a>
                                    }
                                </div>
                                <div className="select-button fr" onClick={this.selectDateTimeHandle}>
                                    <RaisedButton
                                        className={year && month && day && hour && minute && second ? 'active' : ''}
                                        value="Ok"
                                        theme={Theme.HIGHLIGHT}
                                    />
                                </div>
                            </div>
                            :
                            null
                    }
                </div>

            </div>
        );
    }
};

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

    className: '',
    style: null,

    name: '',
    value: moment().format('YYYY-MM-DD HH:mm:ss'),
    maxValue: '',
    minValue: '',
    placeholder: 'Date',
    dateFormat: 'YYYY-MM-DD HH:mm:ss'

};