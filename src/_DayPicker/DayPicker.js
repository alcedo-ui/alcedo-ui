/**
 * @file DayPicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import TouchRipple from '../TouchRipple';

// Vendors
import moment from 'moment';
import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';
import DC from '../_vendors/DateCalculation';

class DayPicker extends Component {

    static getDerivedStateFromProps(props, state) {

        const value = ComponentUtil.getDerivedState(props, state, 'value'),
            selectYear = ComponentUtil.getDerivedState(props, state, 'year', 'selectYear'),
            selectMonth = ComponentUtil.getDerivedState(props, state, 'month', 'selectMonth');

        return {
            prevProps: props,
            value,
            selectYear,
            selectMonth,
            selectDay: ComponentUtil.getDerivedState(props, state, 'day', 'selectDay'),
            hour: ComponentUtil.getDerivedState(props, state, 'hour'),
            minute: ComponentUtil.getDerivedState(props, state, 'minute'),
            second: ComponentUtil.getDerivedState(props, state, 'second'),
            currentYear: moment(value).format('YYYY'),
            currentMonth: moment(value).format('MM'),
            currentDay: moment(value).format('DD'),
            date_num_array: Util.MonthDays(selectYear),
            first_day: DC.weekday(selectYear, selectMonth)
        };

    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.defaultTable = {
            row_number: 6,
            col_number: 7
        };

        this.state = {
            selectYear: props.year,
            selectMonth: props.month,
            selectDay: props.day,
            hour: props.hour,
            minute: props.minute,
            second: props.second,
            currentYear: moment(props.value).format('YYYY'),
            currentMonth: moment(props.value).format('MM'),
            currentDay: moment(props.value).format('DD'),
            date_num_array: Util.MonthDays(props.year),
            first_day: DC.weekday(props.year, props.month)
        };

    }

    previousLevel = () => {
        this.props.previousClick && this.props.previousClick('month');
    };

    hoverDateHandle = s_day => {
        let {selectYear, selectMonth} = this.state;
        s_day = s_day.toString();
        const selected_month = Number(selectMonth) - 1;
        let timer = moment([selectYear, selected_month, s_day]).format(this.props.dateFormat);
        this.props.hoverHandle && this.props.hoverHandle({
            time: timer,
            year: selectYear,
            month: selectMonth,
            day: s_day
        });
    };

    selectDate = s_day => {
        let {selectYear, selectMonth, hour, minute, second} = this.state;
        s_day = s_day.toString();
        const selected_month = Number(selectMonth) - 1;
        let timer = (hour && minute && second) ?
            moment([selectYear, selected_month, s_day, hour, minute, second]).format(this.props.dateFormat)
            :
            moment([selectYear, selected_month, s_day]).format(this.props.dateFormat);
        this.setState({
            currentYear: selectYear,
            currentMonth: selectMonth,
            currentDay: s_day,
            selectDay: s_day
        }, () => {
            this.props.onChange && this.props.onChange({
                time: timer,
                year: selectYear,
                month: selectMonth,
                day: s_day
            });
        });
    };

    previousYear = () => {
        let {currentYear, currentMonth, currentDay, selectYear, selectMonth, selectDay, date_num_array, first_day} = this.state;
        selectYear = +selectYear - 1;
        date_num_array = Util.MonthDays(selectYear);
        first_day = DC.weekday(selectYear, selectMonth);
        selectDay = Number(currentYear) === Number(selectYear) &&
        Number(currentMonth) === Number(selectMonth) ?
            currentDay
            :
            undefined;

        this.setState({
            selectYear: selectYear,
            selectMonth: selectMonth,
            selectDay: selectDay,
            date_num_array: date_num_array,
            first_day: first_day
        }, () => {
            this.props.monthAndYearChange && this.props.monthAndYearChange({year: selectYear, month: selectMonth});
        });
    };

    previousMonth = () => {
        // debugger
        let {currentYear, currentMonth, currentDay, selectYear, selectMonth, selectDay, date_num_array, first_day} = this.state;

        if (selectMonth == 1) {
            selectYear = +selectYear - 1;
            selectMonth = 12;
            date_num_array = Util.MonthDays(selectYear);
        } else {
            selectMonth = +selectMonth - 1;
        }

        first_day = DC.weekday(selectYear, selectMonth);
        selectDay = Number(currentYear) === Number(selectYear) && Number(currentMonth) === Number(selectMonth) ? currentDay : undefined;
        this.setState({
            selectYear: selectYear,
            selectMonth: selectMonth,
            selectDay: selectDay,
            date_num_array: date_num_array,
            first_day: first_day
        }, () => {
            this.props.monthAndYearChange && this.props.monthAndYearChange({year: selectYear, month: selectMonth});
        });
    };

    nextMonth = () => {
        // debugger
        let {currentYear, currentMonth, currentDay, selectYear, selectMonth, selectDay, date_num_array, first_day} = this.state;
        if (selectMonth == 12) {
            selectYear = +selectYear + 1;
            selectMonth = 1;
            date_num_array = Util.MonthDays(selectYear);
        } else {
            selectMonth = +selectMonth + 1;
        }

        first_day = DC.weekday(selectYear, selectMonth);
        selectDay = Number(currentYear) === Number(selectYear) && Number(currentMonth) === Number(selectMonth) ? currentDay : undefined;

        this.setState({
            selectYear: selectYear,
            selectMonth: selectMonth,
            selectDay: selectDay,
            date_num_array: date_num_array,
            first_day: first_day
        }, () => {
            this.props.monthAndYearChange && this.props.monthAndYearChange({year: selectYear, month: selectMonth});
        });
    };

    nextYear = () => {
        let {currentYear, currentMonth, currentDay, selectYear, selectMonth, selectDay, date_num_array, first_day} = this.state;
        selectYear = +selectYear + 1;
        date_num_array = Util.MonthDays(selectYear);
        first_day = DC.weekday(selectYear, selectMonth);
        selectDay = Number(currentYear) === Number(selectYear) && Number(currentMonth) === Number(selectMonth) ? currentDay : undefined;

        this.setState({
            selectYear: selectYear,
            selectMonth: selectMonth,
            selectDay: selectDay,
            date_num_array: date_num_array,
            first_day: first_day
        }, () => {
            this.props.monthAndYearChange && this.props.monthAndYearChange({year: selectYear, month: selectMonth});
        });
    };

    MonthEn = num => {
        num = num - 1;
        let MonthEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return MonthEn[num];
    };

    render() {

        const {
            isFooter, isRange, startTime, endTime, hoverTime, maxValue, minValue, previousYearIconCls,
            previousMonthIconCls, nextYearIconCls, nextMonthIconCls
        } = this.props;

        const {date_num_array, selectYear, selectMonth, selectDay, first_day, currentYear, currentMonth} = this.state;

        const {previousMonth, previousYear, nextYear, nextMonth, selectDate, previousLevel} = this;
        let month = Number(selectMonth);
        let MonthEn = this.MonthEn(month);
        month = month - 1;
        let month_days = date_num_array[month];
        let previous_month_days = month === 0 ? 31 : date_num_array[month - 1],
            n_day = this.defaultTable.row_number * this.defaultTable.col_number - first_day - month_days,
            previous_days = [],
            current_days = [],
            next_days = [],
            total_days = [],
            ul_list = [];

        for (let i = 0; i < first_day; i++) {
            previous_days.push(<li className="item-gray" key={'previous' + i}>
                <a href="javascript:void(0);">{previous_month_days - (first_day - i) + 1}</a>
            </li>);
        }
        if (isRange) {
            let start, end, hover;
            start = moment(endTime).isBefore(startTime) ? endTime : startTime;
            end = moment(endTime).isBefore(startTime) ? startTime : endTime;
            start = moment(hoverTime).isBefore(startTime) ? hoverTime : startTime;
            hover = moment(hoverTime).isBefore(startTime) ? startTime : hoverTime;

            for (let i = 0; i < Number(month_days); i++) {
                let item = moment([Number(selectYear), (Number(selectMonth) - 1), (i + 1)]).format('YYYY-MM-DD');
                let liClassName = `${start == item ? 'start' : ''} ${item == end || item == hover ? 'end' : ''} ${moment(start).isBefore(item) && moment(item).isBefore(end)
                || moment(start).isBefore(item) && moment(item).isBefore(hover) ? 'hover' : ''} ${i == 0 ? 'first-day' : ''} ${i == (+month_days - 1) ? 'last-day' : ''}
                    ${(minValue && moment(item).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(item)) ? 'item-gray' : 'current-days'}`;
                let current_link = (
                    <li className={liClassName}
                        key={'current' + i}
                        onClick={() => {
                            liClassName.indexOf('item-gray') === -1 && selectDate(i + 1);
                        }}
                        onMouseOver={() => {
                            liClassName.indexOf('item-gray') === -1 && this.hoverDateHandle((i + 1));
                        }}>
                        <a href="javascript:;">
                            {i + 1}
                            {
                                liClassName.indexOf('item-gray') === -1 ?
                                    <TouchRipple/>
                                    :
                                    null
                            }
                        </a>
                    </li>);
                current_days.push(current_link);
            }
        } else {
            for (let i = 0; i < Number(month_days); i++) {
                let item = moment([Number(selectYear), (Number(selectMonth) - 1), (i + 1)]).format('YYYY-MM-DD');
                let liClassName = `${(selectYear == currentYear) && (selectMonth == currentMonth) && (i + 1 == selectDay) ? 'active' : ''} 
                ${(minValue && moment(item).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(item)) ? 'item-gray' : 'current-days'}`;
                let current_link = (
                    <li className={liClassName}
                        key={'current' + i}
                        onClick={() => {
                            liClassName.indexOf('item-gray') === -1 && selectDate(i + 1);
                        }}>
                        <a href="javascript:;">
                            {i + 1}
                            {
                                liClassName.indexOf('item-gray') === -1 ?
                                    <TouchRipple/>
                                    :
                                    null
                            }
                        </a>
                    </li>);
                current_days.push(current_link);
            }
        }
        for (let i = 0; i < n_day; i++) {
            next_days.push(<li className="item-gray" key={'previous' + i}>
                <a href="javascript:;">{i + 1}</a>
            </li>);
        }
        total_days = previous_days.concat(current_days, next_days);
        if (total_days.length > 0) {
            for (let i = 0; i < this.defaultTable.row_number; i++) {
                let li_list = [],
                    start_index = i * this.defaultTable.col_number,
                    end_index = (i + 1) * this.defaultTable.col_number;
                for (let j = start_index; j < end_index; j++) {
                    li_list.push(total_days[j]);
                }
                ul_list.push(li_list);
            }
        }
        return (
            <div className={`calendar`}>
                <div className="calendar-header">
                    {
                        minValue ?
                            (moment(minValue).format('YYYY') < +selectYear - 1) ||
                            (moment(minValue).format('YYYY') == +selectYear - 1 && moment(minValue).format('MM') <= selectMonth) ?
                                <i className={`previous-year ${previousYearIconCls}`}
                                   onClick={previousYear}>
                                    <TouchRipple/>
                                </i>
                                :
                                null
                            :
                            <i className={`previous-year ${previousYearIconCls}`}
                               onClick={previousYear}>
                                <TouchRipple/>
                            </i>
                    }
                    {
                        minValue ?
                            (moment(minValue).format('YYYY') == selectYear && moment(minValue).format('MM') < selectMonth) ||
                            moment(minValue).format('YYYY') < selectYear ?
                                <i className={`previous-month ${previousMonthIconCls}`}
                                   onClick={previousMonth}>
                                    <TouchRipple/>
                                </i>
                                :
                                null
                            :
                            <i className={`previous-month ${previousMonthIconCls}`}
                               onClick={previousMonth}>
                                <TouchRipple/>
                            </i>
                    }

                    <span onClick={previousLevel}>
                        {MonthEn} {selectYear}
                    </span>
                    {
                        maxValue ?
                            (moment(maxValue).format('YYYY') == selectYear && selectMonth < moment(maxValue).format('MM')) ||
                            maxValue && selectYear < moment(maxValue).format('YYYY') ?
                                <i className={`next-month ${nextMonthIconCls}`}
                                   onClick={nextMonth}>
                                    <TouchRipple/>
                                </i>
                                :
                                null
                            :
                            <i className={`next-month ${nextMonthIconCls}`}
                               onClick={nextMonth}>
                                <TouchRipple/>
                            </i>

                    }
                    {
                        maxValue ?
                            (selectYear < +moment(maxValue).format('YYYY') - 1) ||
                            (selectYear == moment(maxValue).format('YYYY') - 1 && selectMonth <= moment(maxValue).format('MM')) ?
                                <i className={`next-year ${nextYearIconCls}`}
                                   onClick={nextYear}>
                                    <TouchRipple/>
                                </i>
                                :
                                null
                            :
                            <i className={`next-year ${nextYearIconCls}`}
                               onClick={nextYear}>
                                <TouchRipple/>
                            </i>

                    }
                </div>
                <div className={`calendar-body calendar-day-body ${isFooter ? '' : ' maxHeight'}`}>
                    <ul className="c-body-head">
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                    </ul>
                    <div className="c-body-content">
                        {
                            ul_list && ul_list.map((item, key) =>
                                <ul key={'ul' + key}
                                    className="content-row margin-5">
                                    {item}
                                </ul>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

DayPicker.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.any,
    maxValue: PropTypes.any,
    minValue: PropTypes.any,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    month: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dateFormat: PropTypes.string,
    isRange: PropTypes.bool,
    isFooter: PropTypes.bool,
    onChange: PropTypes.func,
    previousClick: PropTypes.func
};

DayPicker.defaultProps = {
    isFooter: false
};

export default DayPicker;
