/**
 * @file DateRangePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';

import DayPicker from '../_DayPicker';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';

import Util from '../_vendors/Util';
import Theme from '../Theme';
import {findDOMNode} from 'react-dom';
import ComponentUtil from '../_vendors/ComponentUtil';

class DateRangePickerContent extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        const initValue = moment();
        this.validValue = true;

        this.state = {
            value: props.value, // Moment object
            left: {
                text: '',
                datePickerLevel: 'day',
                year: initValue.format('YYYY'),
                month: initValue.format('MM'),
                day: initValue.format('DD')
            },
            right: {
                text: '',
                datePickerLevel: 'day',
                year: initValue.format('MM') == 12 ? +(initValue.format('YYYY')) + 1 : initValue.format('YYYY'),
                month: initValue.format('MM') == 12 ? 1 : +(initValue.format('MM')) + 1,
                day: initValue.format('DD')
            },
            startTime: '',
            endTime: '',
            historyStartTime: '',
            historyEndTime: '',
            hoverTime: ''
        };

    }

    datePickerChangeHandle = (select, selectLevel) => {
        let state = cloneDeep(this.state);
        state[select].datePickerLevel = selectLevel;
        this.setState(state);
    };

    dayPickerChangeHandle = (select, date) => {
        let state = cloneDeep(this.state);
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
            state.value = [
                moment(state.startTime).format(this.props.dateFormat),
                moment(state.endTime).format(this.props.dateFormat)
            ];
            this.setState(state, () => {
                this.props.onChange && this.props.onChange([
                    moment(state.startTime).format(this.props.dateFormat),
                    moment(state.endTime).format(this.props.dateFormat)
                ]);
            });
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
    };

    dayPickerHoverHandle = (select, date) => {
        let state = cloneDeep(this.state);
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
    };

    monthAndYearChangeHandle = (select, date) => {
        let state = cloneDeep(this.state);
        state[select].year = date.year;
        state[select].month = date.month;
        this.setState(state);
    };


    monthPickerChangeHandle = (select, date) => {
        let state = cloneDeep(this.state);
        state[select].datePickerLevel = 'day';
        state[select].year = date.year;
        state[select].month = date.month;
        this.setState(state);
    };

    yearPickerChangeHandle = (select, year) => {
        let state = cloneDeep(this.state);
        state[select].datePickerLevel = 'month';
        state[select].year = year;
        this.setState(state);
    };

    setValue = (value, format) => {
        let state = cloneDeep(this.state);
        if (value && value.length > 1) {
            let leftValue = value[0],
                rightValue = value[1];
            if (!!leftValue) {
                if (moment(leftValue, format).isValid() || (!!rightValue && moment(leftValue, format).isValid())) {
                    state.left.text = leftValue;
                    state.left.year = moment(value[0]).format('YYYY');
                    state.left.month = moment(value[0]).format('MM');
                    state.left.day = moment(value[0]).format('DD');
                    state.right.text = rightValue;
                    state.right.year = rightValue ? moment(value[1]).format('YYYY') : moment(value[0]).format('YYYY');
                    state.right.month = rightValue ? moment(value[1]).format('MM') : moment(value[0]).format('MM');
                    state.right.day = rightValue ? moment(value[1]).format('DD') : moment(value[0]).format('DD');
                    state.left = Util.setDateRange(state.left, state.right).start;
                    state.right = Util.setDateRange(state.left, state.right).end;
                    state.startTime = leftValue;
                    state.endTime = rightValue;
                    state.historyStartTime = leftValue;
                    state.historyEndTime = rightValue;
                    this.setState(state);
                } else {
                    this.validValue = false;
                    console.error('Invalid date');
                }
            } else {
                state.left.text = '';
                state.right.text = '';
                state.left.year = moment().format('YYYY');
                state.left.month = moment().format('MM');
                state.left.day = moment().format('DD');
                state.right.year = moment().format('YYYY');
                state.right.month = moment().format('MM');
                state.right.day = moment().format('DD');
                state.startTime = '';
                state.endTime = '';
                state.historyStartTime = '';
                state.historyEndTime = '';
                state.left = Util.setDateRange(state.left, state.right).start;
                state.right = Util.setDateRange(state.left, state.right).end;
                this.setState(state);
            }
        }
    };

    componentDidMount() {
        const {value, dateFormat} = this.props;
        this.setValue(value, dateFormat);
        this.datePicker = this.refs.datePicker;
        this.triggerEl = findDOMNode(this.refs.trigger);
    }

    static getDerivedStateFromProps(props, state) {

        const value = ComponentUtil.getDerivedState(props, state, 'value'),
            dateFormat = ComponentUtil.getDerivedState(props, state, 'dateFormat');

        return {
            prevProps: props,
            dateFormat,
            value
        };
    }

    render() {

        const {
                className, dateFormat, maxValue, minValue, previousYearIconCls, previousMonthIconCls, nextYearIconCls,
                nextMonthIconCls
            } = this.props,
            {left, right, startTime, endTime, hoverTime} = this.state;

        let maxYear = right.year, maxMonth = right.month;
        maxYear = maxMonth == 1 ? +maxYear - 1 : maxYear;
        maxMonth = maxMonth == 1 ? 11 : +maxMonth - 2;

        let maxDay = Util.MonthDays(maxYear)[maxMonth],
            leftMaxValue = maxValue && moment([maxYear, maxMonth, maxDay]).isAfter(maxValue) ?
                maxValue
                :
                moment([maxYear, maxMonth, maxDay]).format('YYYY-MM-DD'),
            minYear = left.year,
            minMonth = left.month;
        minYear = minMonth == 12 ? +minYear + 1 : minYear;
        minMonth = minMonth == 12 ? 1 : +minMonth + 1;

        let rightMinValue = minValue && moment([minYear, minMonth - 1, 1]).isBefore(minValue) ?
            minValue
            :
            moment([minYear, minMonth - 1, 1]).format('YYYY-MM-DD');
        return (

            <div className={`date-range-picker-content ${className}`}>
                {
                    left.datePickerLevel == 'day' ?
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
                            previousYearIconCls={previousYearIconCls}
                            previousMonthIconCls={previousMonthIconCls}
                            nextYearIconCls={nextYearIconCls}
                            nextMonthIconCls={nextMonthIconCls}
                            monthAndYearChange={(obj) => {
                                this.monthAndYearChangeHandle('left', obj);
                            }}
                            onChange={(obj) => {
                                this.dayPickerChangeHandle('left', obj);
                            }}
                            previousClick={(level) => {
                                this.datePickerChangeHandle('left', level);
                            }}
                            hoverHandle={(obj) => {
                                this.dayPickerHoverHandle('left', obj);
                            }}/>
                        :
                        (
                            left.datePickerLevel == 'month' ?
                                <MonthPicker
                                    value={left.text}
                                    year={left.year}
                                    month={left.month}
                                    day={left.day}
                                    maxValue={leftMaxValue}
                                    minValue={minValue}
                                    previousYearIconCls={previousYearIconCls}
                                    previousMonthIconCls={previousMonthIconCls}
                                    nextYearIconCls={nextYearIconCls}
                                    nextMonthIconCls={nextMonthIconCls}
                                    onChange={(obj) => {
                                        this.monthPickerChangeHandle('left', obj);
                                    }}
                                    previousClick={(level) => {
                                        this.datePickerChangeHandle('left', level);
                                    }}/>
                                :
                                <YearPicker
                                    value={left.text}
                                    year={left.year}
                                    month={left.month}
                                    day={left.day}
                                    maxValue={leftMaxValue}
                                    minValue={minValue}
                                    previousYearIconCls={previousYearIconCls}
                                    previousMonthIconCls={previousMonthIconCls}
                                    nextYearIconCls={nextYearIconCls}
                                    nextMonthIconCls={nextMonthIconCls}
                                    onChange={(obj) => {
                                        this.yearPickerChangeHandle('left', obj);
                                    }}/>
                        )

                }

                {
                    right.datePickerLevel == 'day' ?
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
                            previousYearIconCls={previousYearIconCls}
                            previousMonthIconCls={previousMonthIconCls}
                            nextYearIconCls={nextYearIconCls}
                            nextMonthIconCls={nextMonthIconCls}
                            monthAndYearChange={(obj) => {
                                this.monthAndYearChangeHandle('right', obj);
                            }}
                            onChange={(obj) => {
                                this.dayPickerChangeHandle('right', obj);
                            }}
                            previousClick={(level) => {
                                this.datePickerChangeHandle('right', level);
                            }}
                            hoverHandle={(obj) => {
                                this.dayPickerHoverHandle('left', obj);
                            }}/>
                        :
                        (
                            right.datePickerLevel == 'month' ?
                                <MonthPicker
                                    value={right.text}
                                    year={right.year}
                                    month={right.month}
                                    day={right.day}
                                    minValue={rightMinValue}
                                    maxValue={maxValue}
                                    previousYearIconCls={previousYearIconCls}
                                    previousMonthIconCls={previousMonthIconCls}
                                    nextYearIconCls={nextYearIconCls}
                                    nextMonthIconCls={nextMonthIconCls}
                                    onChange={(obj) => {
                                        this.monthPickerChangeHandle('right', obj);
                                    }}
                                    previousClick={(level) => {
                                        this.datePickerChangeHandle('right', level);
                                    }}/>
                                :
                                <YearPicker
                                    value={right.text}
                                    year={right.year}
                                    month={right.month}
                                    day={right.day}
                                    minValue={rightMinValue}
                                    maxValue={maxValue}
                                    previousYearIconCls={previousYearIconCls}
                                    previousMonthIconCls={previousMonthIconCls}
                                    nextYearIconCls={nextYearIconCls}
                                    nextMonthIconCls={nextMonthIconCls}
                                    onChange={(obj) => {
                                        this.yearPickerChangeHandle('right', obj);
                                    }}/>
                        )

                }

            </div>
        );
    }
}

DateRangePickerContent.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the popup element.
     */

    style: PropTypes.object,


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
     * Date format.
     */
    dateFormat: PropTypes.string,

    /**
     * Callback function that is fired when the date value changes.
     */
    onChange: PropTypes.func

};

DateRangePickerContent.defaultProps = {
    dateFormat: 'YYYY-MM-DD',
    previousYearIconCls: 'fas fa-angle-double-left',
    previousMonthIconCls: 'fas fa-angle-left',
    nextYearIconCls: 'fas fa-angle-double-right',
    nextMonthIconCls: 'fas fa-angle-right'
};

export default DateRangePickerContent;