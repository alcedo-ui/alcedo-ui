/**
 * Created by Administrator on 2017/3/13.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import _ from 'lodash';

import TextField from '../TextField';
import DayPicker from '../_DayPicker';

import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';
import './DatePicker.css';

export default class DatePicker extends Component {

    constructor(props) {

        super(props);

        const value = this.props.value;
        this.state = {
            value: value,
            popupVisible: false,
            year: moment(value).format('YYYY'),
            month: moment(value).format('MM'),
            day: moment(value).format('DD'),
            datePickerLevel: 0,
            marginLeft: 0,
            isFooter: true
        };

        this.textFieldChangeHandle = this::this.textFieldChangeHandle;
        this.mousedownHandle = this::this.mousedownHandle;
        this.resizeHandle = this::this.resizeHandle;
        this.datePickerChangeHandle = this::this.datePickerChangeHandle;
        this.yearPickerChangeHandle = this::this.yearPickerChangeHandle;
        this.monthPickerChangeHandle = this::this.monthPickerChangeHandle;
        this.dayPickerChangeHandle = this::this.dayPickerChangeHandle;
        this.todayHandle = this::this.todayHandle;
    }

    datePickerChangeHandle(select) {
        let {datePickerLevel} = this.state;
        datePickerLevel = datePickerLevel + 1;
        this.setState({
            datePickerLevel: datePickerLevel
        });
    }

    textFieldChangeHandle(text) {
        const {minValue, maxValue} = this.props;
        if (text && text.length) {
            const flag = moment(text, this.props.dateFormat, true).isValid();
            if (flag) {
                if (minValue && moment(text).isBefore(minValue) || maxValue && moment(text).isAfter(maxValue)) {

                } else {
                    const year = moment(text).format('YYYY'),
                        month = moment(text).format('MM'),
                        day = moment(text).format('DD');
                    this.setState({
                        value: text,
                        year: year,
                        month: month,
                        day: day
                    });
                }
            }
        } else {
            this.setState({
                value: text
            });
        }
    }

    dayPickerChangeHandle(date) {
        const {autoClose} = this.props;
        let state = _.cloneDeep(this.state);
        state.value = date.time;
        state.year = date.year;
        state.month = date.month;
        state.day = date.day;

        if (autoClose) {
            state.popupVisible = false;
        }
        this.setState(state);
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

    todayHandle() {
        const year = moment().format('YYYY'),
            month = moment().format('MM'),
            day = moment().format('DD');
        let timer = moment().format(this.props.dateFormat);
        this.setState({
            value: timer,
            year: year,
            month: month,
            day: day
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
        const {left} = Util.getOffset(this.refs.datePicker);
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
            this.setState({
                value: nextProps.value,
                dateFormat: nextProps.dateFormat,
                year: moment(nextProps.value).format('YYYY'),
                month: moment(nextProps.value).format('MM'),
                day: moment(nextProps.value).format('DD')
            });
        }
    }

    componentDidMount() {
        // debugger
        const {value} = this.props;
        let state = _.cloneDeep(this.state);
        const {left} = Util.getOffset(this.refs.datePicker);
        const width = 300;
        const windowWidth = document.body.clientWidth;
        let marginLeft;
        if ((left + width) >= windowWidth) {
            marginLeft = (left + width) - windowWidth;
        } else {
            marginLeft = 0;
        }
        if (value) {
            const year = moment(value).format('YYYY'),
                month = moment(value).format('MM'),
                day = moment(value).format('DD');
            state.value = value;
            state.year = year;
            state.month = month;
            state.day = day;
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
        const {value, popupVisible, datePickerLevel, year, month, day, marginLeft, isFooter} = this.state;
        const popStyle = {
            left: '-' + marginLeft + 'px'
        };

        return (
            <div className={`date-picker ${className}`}
                 ref="datePicker"
                 style={style}>

                <TextField ref="trigger"
                           className="date-picker-field"
                           name={name}
                           placeholder={placeholder}
                           value={value}
                           iconCls="fa fa-calendar"
                           readOnly={true}
                           isClearIcon={false}
                />

                <div ref="popup"
                     className={`date-picker-popup ${popupVisible ? '' : 'hidden'}`}
                     style={popStyle}>
                    <div className="calendar-date-input-wrap">
                        <TextField className='calendar-input'
                                   placeholder={'Select Date'}
                                   isClearIcon={true}
                                   value={value}
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
                                maxValue={maxValue}
                                minValue={minValue}
                                isFooter={isFooter}
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
                                    maxValue={maxValue}
                                    minValue={minValue}
                                    onChange={this.monthPickerChangeHandle}
                                    previousClick={this.datePickerChangeHandle}
                                />
                                :
                                <YearPicker
                                    value={value}
                                    year={year}
                                    month={month}
                                    day={day}
                                    maxValue={maxValue}
                                    minValue={minValue}
                                    onChange={this.yearPickerChangeHandle}
                                />
                        )
                    }
                    {
                        isFooter ?
                            <div className="calendar-footer">
                                {
                                    (minValue && moment(this.props.value).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(this.props.value)) ?
                                        <a href="javascript:;">
                                            <span className="item-gray">Today</span>
                                        </a>
                                        :
                                        <a href="javascript:;" onClick={this.todayHandle}>
                                            Today
                                        </a>
                                }

                            </div>
                            :
                            null
                    }
                </div>

            </div>
        );
    }
};

DatePicker.propTypes = {

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
     * DatePicker textField element placeholder.
     */
    placeholder: PropTypes.string,

    /**
     * Date format.
     */
    dateFormat: PropTypes.string,

    /**
     * If true,hide date display.
     */
    autoClose: PropTypes.bool,

    /**
     * Callback function that is fired when the date value changes.
     */
    onChange: PropTypes.func
};

DatePicker.defaultProps = {
    className: '',
    style: null,
    name: '',
    value: moment().format('YYYY-MM-DD'),
    maxValue: '',
    minValue: '',
    placeholder: 'Date',
    dateFormat: 'YYYY-MM-DD',
    autoClose: true
};