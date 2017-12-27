/**
 * @file DateRangePicker component
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

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';
import Event from '../_vendors/Event';

export default class DateRangePicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        const initValue = moment();

        let startTime = '',
            endTime = '';

        this.state = {
            value: initValue, // Moment object
            popupVisible: false,
            left: {
                text: startTime,
                datePickerLevel: 0,
                year: initValue.format('YYYY'),
                month: initValue.format('MM'),
                day: initValue.format('DD')
            },
            right: {
                text: endTime,
                datePickerLevel: 0,
                year: initValue.format('MM') == 12 ? +(initValue.format('YYYY')) + 1 : initValue.format('YYYY'),
                month: initValue.format('MM') == 12 ? 1 : +(initValue.format('MM')) + 1,
                day: initValue.format('DD')
            },
            startTime: '',
            endTime: '',
            historyStartTime: '',
            historyEndTime: '',
            hoverTime: '',
            marginLeft: 0
        };

        this.textFieldChangeHandle = ::this.textFieldChangeHandle;
        this.mousedownHandle = ::this.mousedownHandle;
        this.resizeHandle = ::this.resizeHandle;
        this.datePickerChangeHandle = ::this.datePickerChangeHandle;
        this.yearPickerChangeHandle = ::this.yearPickerChangeHandle;
        this.monthPickerChangeHandle = ::this.monthPickerChangeHandle;
        this.dayPickerChangeHandle = ::this.dayPickerChangeHandle;
        this.dayPickerHoverHandle = ::this.dayPickerHoverHandle;
        this.monthAndYearChangeHandle = ::this.monthAndYearChangeHandle;
    }

    datePickerChangeHandle(select) {
        let state = _.cloneDeep(this.state);
        state[select].datePickerLevel = state[select].datePickerLevel + 1;
        this.setState(state);
    }

    textFieldChangeHandle(select, text) {
        if (text && text.length) {
            const flag = moment(text, this.props.dateFormat, true).isValid();
            if (flag) {
                const initValue = moment(text).format('YYYY-MM-DD');
                const select_year = initValue.split('-')[0],
                    select_month = initValue.split('-')[1],
                    select_day = initValue.split('-')[2];
                let state = _.cloneDeep(this.state);
                if (select == 'left') {
                    if (moment(text).isBefore(state.right.text)) {
                        state.startTime = text;
                        state.left.text = text;
                        state.left.year = select_year;
                        state.left.month = select_month;
                        state.left.day = select_day;
                        if (select_year == state.right.year && select_month == state.right.month) {
                            if (select_month == 12) {
                                state.right.month = 1;
                                state.right.year = +select_year + 1;
                            } else {
                                state.right.month = +select_month + 1;
                            }
                        }
                    }
                    this.setState(state);
                } else {
                    if (moment(state.startTime).isBefore(text)) {
                        state.endTime = text;
                        state.right.text = text;
                        if (select_year == state.left.year && select_month == state.left.month) {
                            state.right.month = +select_month + 1;
                        } else {
                            state.right.year = select_year;
                            state.right.month = select_month;
                            state.right.day = select_day;
                        }
                    }
                    this.setState(state);
                }
            }
        } else {
            let state = _.cloneDeep(this.state);
            state[select].text = text;
            this.setState(state);
        }
    }

    dayPickerChangeHandle(select, date) {
        let state = _.cloneDeep(this.state);
        if (state.endTime) {
            state[select].text = date.time;
            state[select].year = date.year;
            state[select].month = date.month;
            state[select].day = date.day;
            state.startTime = date.time;
            state.endTime = '';
            state.hoverTime = '';
            this.setState(state);
        } else if (state.startTime) {
            let startTime = state.startTime;
            let endTime;
            if (moment(startTime).isBefore(date.time)) {
                endTime = date.time;
            } else {
                endTime = startTime;
                startTime = date.time;
            }
            state.right.text = endTime;
            state.left.text = startTime;
            state.endTime = endTime;
            state.startTime = startTime;
            state.historyStartTime = startTime;
            state.historyEndTime = endTime;
            state.hoverTime = '';
            this.setState(state);
        } else {
            state[select].text = date.time;
            state[select].year = date.year;
            state[select].month = date.month;
            state[select].day = date.day;
            state.startTime = date.time;
            state.endTime = '';
            state.hoverTime = '';
            this.setState(state);
        }

    }

    dayPickerHoverHandle(select, date) {
        let state = _.cloneDeep(this.state);
        let startTime = state.startTime;
        let endTime = state.endTime;
        if (startTime && endTime == '') {
            state.hoverTime = date.time;
            if (moment(startTime).isBefore(date.time)) {
                state.left.text = startTime;
                state.right.text = date.time;
            } else {
                state.right.text = startTime;
                state.left.text = date.time;
            }
            this.setState(state);
        }
    }

    monthAndYearChangeHandle(select, date) {
        let state = _.cloneDeep(this.state);
        state[select].year = date.year;
        state[select].month = date.month;
        this.setState(state);
    }


    monthPickerChangeHandle(select, date) {
        let state = _.cloneDeep(this.state);
        state[select].datePickerLevel = 0;
        state[select].year = date.year;
        state[select].month = date.month;
        this.setState(state);
    }

    yearPickerChangeHandle(select, year) {
        let state = _.cloneDeep(this.state);
        state[select].datePickerLevel = 1;
        state[select].year = year;
        this.setState(state);
    }

    MonthDays(year) {
        // debugger
        let _date_array = [];
        for (var i = 0; i < 12; i++) {
            switch (i + 1) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    _date_array.push(31);
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    _date_array.push(30);
                    break;
                case 2:
                    if (moment(year + '-02-29', 'YYYY-MM-DD', true).isValid()) {
                        _date_array.push(29);
                    } else {
                        _date_array.push(28);
                    }
                    break;
                default:
                    break;
            }
        }
        return _date_array;
    }

    resizeHandle() {
        const {left} = Dom.getOffset(this.refs.datePicker);
        const width = 600;
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

    mousedownHandle(e) {
        // debugger
        const flag = Event.triggerPopupEventHandle(e.target, require('react-dom').findDOMNode(this.refs.trigger), this.refs.popup, this.state.popupVisible);
        let state = _.cloneDeep(this.state);
        if (flag) {
            state.popupVisible = flag;
            !this.props.disabled && this.setState(state);
        } else {
            state.popupVisible = flag;
            state.left.datePickerLevel = 0;
            state.right.datePickerLevel = 0;
            if (!state.endTime) {
                state.startTime = state.historyStartTime;
                state.endTime = state.historyEndTime;
                state.left.text = state.historyStartTime;
                state.right.text = state.historyEndTime;
                state.hoverTime = '';
                if (state.historyStartTime && state.historyEndTime) {
                    state.left.year = moment(state.historyStartTime).format('YYYY');
                    state.left.month = moment(state.historyStartTime).format('MM');
                    state.left.day = moment(state.historyStartTime).format('DD');
                    if (moment(state.historyStartTime).format('YYYY') == moment(state.historyEndTime).format('YYYY') && moment(state.historyStartTime).format('MM') == moment(state.historyEndTime).format('MM')) {
                        if (moment(state.historyEndTime).format('MM') == 12) {
                            state.right.year = +moment(state.historyEndTime).format('YYYY') + 1;
                            state.right.month = 1;
                        } else {
                            state.right.year = moment(state.historyEndTime).format('YYYY');
                            state.right.month = +moment(state.historyEndTime).format('MM') + 1;
                        }
                    } else {
                        state.right.year = moment(state.historyEndTime).format('YYYY');
                        state.right.month = moment(state.historyEndTime).format('MM');
                    }
                    state.right.day = moment(state.historyEndTime).format('DD');
                }
            }
            !this.props.disabled && this.setState(state);
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value || nextProps.dateFormat !== this.props.dateFormat) {
            const value = Util.value2Moment(nextProps.value, nextProps.dateFormat);
            this.setState({
                value,
                textFieldValue: value.format(nextProps.dateFormat)
            });
        }
    }

    componentDidMount() {

        const {value, dateFormat} = this.props;
        let state = _.cloneDeep(this.state);
        const {left} = Dom.getOffset(this.refs.datePicker);
        const width = 600;
        const windowWidth = document.body.clientWidth;
        let marginLeft;
        if ((left + width) >= windowWidth) {
            marginLeft = (left + width) - windowWidth;
        } else {
            marginLeft = 0;
        }
        if (value && value.length) {
            let leftValue = value[0],
                rightValue = value[1],
                leftYear = moment(value[0]).format('YYYY'),
                leftMonth = moment(value[0]).format('MM'),
                leftDay = moment(value[0]).format('DD'),
                rightYear = moment(value[1]).format('YYYY'),
                rightMonth = moment(value[1]).format('MM'),
                rightDay = moment(value[1]).format('DD');
            state.left.text = leftValue;
            state.left.year = leftYear;
            state.left.month = leftMonth;
            state.left.day = leftDay;
            state.right.text = rightValue;
            state.right.day = rightDay;
            if (leftYear == rightYear && leftMonth == rightMonth) {
                if (leftMonth == 12) {
                    state.right.year = +rightYear + 1;
                    state.right.month = 1;
                } else {
                    state.right.year = rightYear;
                    state.right.month = +rightMonth + 1;
                }
            } else {
                state.right.year = rightYear;
                state.right.month = rightMonth;
            }
            state.startTime = leftValue;
            state.endTime = rightValue;
            state.historyStartTime = leftValue;
            state.historyEndTime = rightValue;
            state.marginLeft = marginLeft;

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
        const {popupVisible, left, right, startTime, endTime, hoverTime, marginLeft} = this.state;

        let textFieldValue = left.text && right.text ? left.text + '~ ' + right.text : '';

        let maxYear = right.year;
        let maxMonth = right.month;
        maxYear = maxMonth == 1 ? +maxYear - 1 : maxYear;
        maxMonth = maxMonth == 1 ? 11 : +maxMonth - 2;

        let maxDay = this.MonthDays(maxYear)[maxMonth];
        let leftMaxValue = moment([maxYear, maxMonth, maxDay]).format('YYYY-MM-DD');
        // debugger
        let minYear = left.year;
        let minMonth = left.month;
        minYear = minMonth == 12 ? +minYear + 1 : minYear;
        minMonth = minMonth == 12 ? 1 : +minMonth + 1;

        let rightMinValue = moment([minYear, minMonth - 1, 1]).format('YYYY-MM-DD');
        const popStyle = {
            left: '-' + marginLeft + 'px'
        };
        return (
            <div className={`date-range-picker ${className}`}
                 ref="datePicker"
                 style={style}>
                <TextField ref="trigger"
                           className="date-picker-field"
                           name={name}
                           placeholder={placeholder}
                           value={textFieldValue}
                           iconCls="fa fa-calendar"
                           readOnly={true}
                           clearButtonVisible={false}
                />

                <div ref="popup"
                     className={`date-range-picker-popup ${popupVisible ? '' : 'hidden'}`}
                     style={popStyle}>
                    <div className="calendar-date-input-wrap">
                        <div className="DateRangePickerHeaderInput">
                            <TextField className='fl calendar-input'
                                       placeholder={placeholder}
                                       value={left.text}
                                       onChange={(text) => {
                                           this.textFieldChangeHandle('left', text);
                                       }}
                            />
                            <TextField className='fl calendar-input'
                                       placeholder={placeholder}
                                       value={right.text}
                                       onChange={(text) => {
                                           this.textFieldChangeHandle('right', text);
                                       }}
                            />
                        </div>
                    </div>
                    {
                        left.datePickerLevel == 0 ?
                            <DayPicker
                                value={left.text}
                                dateFormat={dateFormat}
                                year={left.year}
                                month={left.month}
                                day={left.day}
                                isFooter={false}
                                isRange={true}
                                maxValue={leftMaxValue}
                                minValue={minValue}
                                startTime={startTime}
                                endTime={endTime}
                                hoverTime={hoverTime}
                                monthAndYearChange={(obj) => {
                                    this.monthAndYearChangeHandle('left', obj);
                                }}
                                onChange={(obj) => {
                                    this.dayPickerChangeHandle('left', obj);
                                }}
                                previousClick={() => {
                                    this.datePickerChangeHandle('left');
                                }}
                                hoverHandle={(obj) => {
                                    this.dayPickerHoverHandle('left', obj);
                                }}
                            />
                            : (
                            left.datePickerLevel == 1 ?
                                <MonthPicker
                                    value={left.text}
                                    year={left.year}
                                    month={left.month}
                                    day={left.day}
                                    maxValue={leftMaxValue}
                                    minValue={minValue}
                                    onChange={(obj) => {
                                        this.monthPickerChangeHandle('left', obj);
                                    }}
                                    previousClick={() => {
                                        this.datePickerChangeHandle('left');
                                    }}
                                />
                                :
                                <YearPicker
                                    value={left.text}
                                    year={left.year}
                                    month={left.month}
                                    day={left.day}
                                    maxValue={leftMaxValue}
                                    minValue={minValue}
                                    onChange={(obj) => {
                                        this.yearPickerChangeHandle('left', obj);
                                    }}
                                />
                        )

                    }
                    {
                        right.datePickerLevel == 0 ?
                            <DayPicker
                                value={right.text}
                                dateFormat={dateFormat}
                                year={right.year}
                                month={right.month}
                                day={right.day}
                                isFooter={false}
                                isRange={true}
                                startTime={startTime}
                                endTime={endTime}
                                hoverTime={hoverTime}
                                minValue={rightMinValue}
                                maxValue={maxValue}
                                monthAndYearChange={(obj) => {
                                    this.monthAndYearChangeHandle('right', obj);
                                }}
                                onChange={(obj) => {
                                    this.dayPickerChangeHandle('right', obj);
                                }}
                                previousClick={() => {
                                    this.datePickerChangeHandle('right');
                                }}
                                hoverHandle={(obj) => {
                                    this.dayPickerHoverHandle('left', obj);
                                }}
                            />
                            : (
                            right.datePickerLevel == 1 ?
                                <MonthPicker
                                    value={right.text}
                                    year={right.year}
                                    month={right.month}
                                    day={right.day}
                                    minValue={rightMinValue}
                                    maxValue={maxValue}
                                    onChange={(obj) => {
                                        this.monthPickerChangeHandle('right', obj);
                                    }}
                                    previousClick={() => {
                                        this.datePickerChangeHandle('right');
                                    }}
                                />
                                :
                                <YearPicker
                                    value={right.text}
                                    year={right.year}
                                    month={right.month}
                                    day={right.day}
                                    minValue={rightMinValue}
                                    maxValue={maxValue}
                                    onChange={(obj) => {
                                        this.yearPickerChangeHandle('right', obj);
                                    }}
                                />
                        )

                    }
                </div>

            </div>
        );
    }
};

DateRangePicker.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * DateRangePicker input name.
     */
    name: PropTypes.string,

    /**
     * This is the initial date value of the component.
     */
    value: PropTypes.array,

    /**
     * The ending of a range of valid dates. The range includes the endDate.
     */
    maxValue: PropTypes.string,

    /**
     * The beginning of a range of valid dates. The range includes the startDate.
     */
    minValue: PropTypes.string,

    /**
     * DateRangePicker textField element placeholder.
     */
    placeholder: PropTypes.string,

    /**
     * Date format.
     */
    dateFormat: PropTypes.string,

    /**
     * If true,the date selection box will displayed.
     */
    popupVisible: PropTypes.bool,

    /**
     * Callback function that is fired when the date value changes.
     */
    onChange: PropTypes.func

};

DateRangePicker.defaultProps = {

    className: '',
    style: null,
    name: '',
    placeholder: 'Date',
    dateFormat: 'YYYY-MM-DD'

};