/**
 * @file DayPicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import TouchRipple from '../TouchRipple';

// Vendors
import classNames from 'classnames';
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
            dateNumArray: Util.MonthDays(selectYear),
            firstDay: DC.weekday(selectYear, selectMonth)
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
            dateNumArray: Util.MonthDays(props.year),
            firstDay: DC.weekday(props.year, props.month)
        };

    }

    previousLevel = () => {
        const {previousClick} = this.props;
        previousClick && previousClick('month');
    };

    hoverDateHandle = selectDay => {
        const {hoverHandle} = this.props, {selectYear, selectMonth} = this.state,
            selectedMonth = +selectMonth - 1,
            timer = moment([selectYear, selectedMonth, selectDay]).format(this.props.dateFormat);

        hoverHandle && hoverHandle({
            time: timer,
            year: selectYear,
            month: selectMonth,
            day: selectDay
        });
    };

    selectDate = selectDay => {
        const {onChange} = this.props, {selectYear, selectMonth, hour, minute, second} = this.state,
            selectedMonth = +selectMonth - 1,
            timer = (hour && minute && second) ?
                moment([selectYear, selectedMonth, selectDay, hour, minute, second]).format(this.props.dateFormat)
                :
                moment([selectYear, selectedMonth, selectDay]).format(this.props.dateFormat);
        this.setState({
            currentYear: selectYear,
            currentMonth: selectMonth,
            currentDay: selectDay,
            selectDay: selectDay
        }, () => {
            onChange && onChange({
                time: timer,
                year: selectYear,
                month: selectMonth,
                day: selectDay
            });
        });
    };

    previousYear = () => {
        const {monthAndYearChange} = this.props,
            {currentYear, currentMonth, currentDay, selectYear, selectMonth} = this.state,
            selectedYear = +selectYear - 1,
            selectedDay = Number(currentYear) === Number(selectedYear) &&
            Number(currentMonth) === Number(selectMonth) ?
                currentDay
                :
                undefined;

        this.setState({
            selectYear: selectedYear,
            selectMonth: selectMonth,
            selectDay: selectedDay,
            dateNumArray: Util.MonthDays(selectedYear),
            firstDay: DC.weekday(selectedYear, selectMonth)
        }, () => {
            monthAndYearChange && monthAndYearChange({
                year: selectedYear,
                month: selectMonth
            });
        });
    };

    previousMonth = () => {
        const {monthAndYearChange} = this.props, {
                currentYear, currentMonth, currentDay, selectYear, selectMonth, dateNumArray
            } = this.state,
            selectedYear = selectMonth == 1 ? +selectYear - 1 : selectYear,
            selectedMonth = selectMonth == 1 ? 12 : +selectMonth - 1,
            selectedDay = Number(currentYear) === Number(selectedYear) &&
            Number(currentMonth) === Number(selectedMonth) ?
                currentDay
                :
                undefined;
        this.setState({
            selectYear: selectedYear,
            selectMonth: selectedMonth,
            selectDay: selectedDay,
            dateNumArray: selectMonth == 1 ? Util.MonthDays(selectedYear) : dateNumArray,
            firstDay: DC.weekday(selectedYear, selectedMonth)
        }, () => {
            monthAndYearChange && monthAndYearChange({
                year: selectedYear,
                month: selectedMonth
            });
        });
    };

    nextMonth = () => {

        const {monthAndYearChange} = this.props, {
                currentYear, currentMonth, currentDay, selectYear, selectMonth, dateNumArray
            } = this.state,
            selectedYear = selectMonth == 12 ? +selectYear + 1 : selectYear,
            selectedMonth = selectMonth == 12 ? 1 : +selectMonth + 1,
            selectedDay = Number(currentYear) === Number(selectedYear) &&
            Number(currentMonth) === Number(selectedMonth) ?
                currentDay
                :
                undefined;

        this.setState({
            selectYear: selectedYear,
            selectMonth: selectedMonth,
            selectDay: selectedDay,
            dateNumArray: selectMonth == 12 ? Util.MonthDays(selectedYear) : dateNumArray,
            firstDay: DC.weekday(selectedYear, selectedMonth)
        }, () => {
            monthAndYearChange && monthAndYearChange({
                year: selectedYear,
                month: selectedMonth
            });
        });
    };

    nextYear = () => {
        const {monthAndYearChange} = this.props, {currentYear, currentMonth, currentDay, selectYear, selectMonth} = this.state,
            selectedYear = +selectYear + 1,
            selectedDay = Number(currentYear) === Number(selectedYear) &&
            Number(currentMonth) === Number(selectMonth) ?
                currentDay
                :
                undefined;

        this.setState({
            selectYear: selectedYear,
            selectMonth: selectMonth,
            selectDay: selectedDay,
            dateNumArray: Util.MonthDays(selectedYear),
            firstDay: DC.weekday(selectedYear, selectMonth)
        }, () => {
            monthAndYearChange && monthAndYearChange({
                year: selectedYear,
                month: selectMonth
            });
        });
    };

    previousMonthDaysRender = () => {

        const {dateNumArray, firstDay, selectMonth} = this.state,
            month = +selectMonth - 1,
            previousMonthDays = month === 0 ? 31 : dateNumArray[month - 1];
        let renderArray = [];
        for (let i = 0; i < firstDay; i++) {
            renderArray.push(<li className="item-gray" key={'previous' + i}>
                <span className="date-text">{previousMonthDays - (firstDay - i) + 1}</span></li>);
        }

        return renderArray;
    };

    rangeDateCurrentMonthDaysRender = () => {

        const {
            startTime, endTime, hoverTime, maxValue, minValue
        } = this.props, {dateNumArray, selectYear, selectMonth} = this.state, {selectDate, hoverDateHandle} = this;

        let month = +selectMonth - 1, monthDays = dateNumArray[month],
            start = moment(endTime).isBefore(startTime) ? endTime : startTime,
            end = moment(endTime).isBefore(startTime) ? startTime : endTime,
            hover = moment(hoverTime).isBefore(startTime) ? startTime : hoverTime;
        start = moment(hoverTime).isBefore(startTime) ? hoverTime : startTime;

        let renderArray = [];

        for (let i = 0; i < Number(monthDays); i++) {

            const item = moment([Number(selectYear), (Number(selectMonth) - 1), (i + 1)]).format('YYYY-MM-DD'),
                liClassName = classNames({
                    'start': start == item,
                    'end': item == end || item == hover,
                    'hover': moment(start).isBefore(item) && moment(item).isBefore(end) || moment(start).isBefore(item) && moment(item).isBefore(hover),
                    'first-day': i == 0,
                    'last-day': i == (+monthDays - 1),
                    'item-gray': (minValue && moment(item).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(item)),
                    'current-days': !(minValue && moment(item).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(item))
                });

            renderArray.push((
                <li className={liClassName}
                    key={'current' + i}
                    onClick={() => {
                        liClassName.indexOf('item-gray') === -1 && selectDate(i + 1);
                    }}
                    onMouseOver={() => {
                        liClassName.indexOf('item-gray') === -1 && hoverDateHandle((i + 1));
                    }}>
                    <span className="date-text">
                        {i + 1}
                        {
                            liClassName.indexOf('item-gray') === -1 ?
                                <TouchRipple/>
                                :
                                null
                        }
                    </span>
                </li>));
        }

        return renderArray;
    };

    singleDateCurrentMonthDaysRender = () => {

        const {maxValue, minValue} = this.props,
            {dateNumArray, selectYear, selectMonth, selectDay, currentYear, currentMonth} = this.state,
            {selectDate} = this;

        let month = +selectMonth - 1, monthDays = dateNumArray[month];
        let renderArray = [];

        for (let i = 0; i < Number(monthDays); i++) {

            const item = moment([Number(selectYear), (Number(selectMonth) - 1), (i + 1)]).format('YYYY-MM-DD'),
                liClassName = classNames({
                    'active': (selectYear == currentYear) && (selectMonth == currentMonth) && (i + 1 == selectDay),
                    'item-gray': (minValue && moment(item).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(item)),
                    'current-days': !(minValue && moment(item).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(item))
                });

            renderArray.push((
                <li className={liClassName}
                    key={'current' + i}
                    onClick={() => {
                        liClassName.indexOf('item-gray') === -1 && selectDate(i + 1);
                    }}>
                    <span className="date-text">
                        {i + 1}
                        {
                            liClassName.indexOf('item-gray') === -1 ?
                                <TouchRipple/>
                                :
                                null
                        }
                    </span>
                </li>));

        }

        return renderArray;

    };

    nextMonthDaysRender = () => {

        const {dateNumArray, selectMonth, firstDay} = this.state,
            month = +selectMonth - 1, monthDays = dateNumArray[month],
            nextDays = this.defaultTable.row_number * this.defaultTable.col_number - firstDay - monthDays;
        let renderArray = [];
        for (let i = 0; i < nextDays; i++) {
            renderArray.push(<li className="item-gray" key={'previous' + i}><span
                className="date-text">{i + 1}</span></li>);
        }
        return renderArray;
    };

    daysRender = () => {
        const {isRange} = this.props;
        let allDaysRenderArray = [], totalDays = [],
            previousDays = this.previousMonthDaysRender(),
            currentDays = isRange ? this.rangeDateCurrentMonthDaysRender() : this.singleDateCurrentMonthDaysRender(),
            nextDays = this.nextMonthDaysRender();
        totalDays = previousDays.concat(currentDays, nextDays);
        if (totalDays.length > 0) {
            for (let i = 0; i < this.defaultTable.row_number; i++) {
                let weekList = [],
                    startIndex = i * this.defaultTable.col_number,
                    endIndex = (i + 1) * this.defaultTable.col_number;
                for (let j = startIndex; j < endIndex; j++) {
                    weekList.push(totalDays[j]);
                }
                allDaysRenderArray.push(weekList);
            }
        }
        return allDaysRenderArray;
    };

    calendarHeaderLeftRender = () => {

        const {minValue, previousYearIconCls, previousMonthIconCls} = this.props,
            {selectYear, selectMonth} = this.state, {previousMonth, previousYear} = this;

        return (
            <>
                {
                    minValue ?
                        (moment(minValue).format('YYYY') < +selectYear - 1) ||
                        (moment(minValue).format('YYYY') == +selectYear - 1 && moment(minValue).format('MM') <= selectMonth) ?
                            <i className={classNames('previous-year', {
                                [previousYearIconCls]: previousYearIconCls
                            })}
                               onClick={previousYear}>
                                <TouchRipple/>
                            </i>
                            :
                            null
                        :
                        <i className={classNames('previous-year', {
                            [previousYearIconCls]: previousYearIconCls
                        })}
                           onClick={previousYear}>
                            <TouchRipple/>
                        </i>
                }
                {
                    minValue ?
                        (moment(minValue).format('YYYY') == selectYear && moment(minValue).format('MM') < selectMonth) ||
                        moment(minValue).format('YYYY') < selectYear ?
                            <i className={classNames('previous-month', {
                                [previousMonthIconCls]: previousMonthIconCls
                            })}
                               onClick={previousMonth}>
                                <TouchRipple/>
                            </i>
                            :
                            null
                        :
                        <i className={classNames('previous-month', {
                            [previousMonthIconCls]: previousMonthIconCls
                        })}
                           onClick={previousMonth}>
                            <TouchRipple/>
                        </i>
                }
            </>
        );
    };


    calendarHeaderRightRender = () => {
        const {maxValue, nextYearIconCls, nextMonthIconCls} = this.props,
            {selectYear, selectMonth} = this.state, {nextYear, nextMonth} = this;
        return (
            <>
                {
                    maxValue ?
                        (moment(maxValue).format('YYYY') == selectYear && selectMonth < moment(maxValue).format('MM')) ||
                        maxValue && selectYear < moment(maxValue).format('YYYY') ?
                            <i className={classNames('next-month', {
                                [nextMonthIconCls]: nextMonthIconCls
                            })}
                               onClick={nextMonth}>
                                <TouchRipple/>
                            </i>
                            :
                            null
                        :
                        <i className={classNames('next-month', {
                            [nextMonthIconCls]: nextMonthIconCls
                        })}
                           onClick={nextMonth}>
                            <TouchRipple/>
                        </i>

                }
                {
                    maxValue ?
                        (selectYear < +moment(maxValue).format('YYYY') - 1) ||
                        (selectYear == moment(maxValue).format('YYYY') - 1 && selectMonth <= moment(maxValue).format('MM')) ?
                            <i className={classNames('next-year', {
                                [nextYearIconCls]: nextYearIconCls
                            })}
                               onClick={nextYear}>
                                <TouchRipple/>
                            </i>
                            :
                            null
                        :
                        <i className={classNames('next-year', {
                            [nextYearIconCls]: nextYearIconCls
                        })}
                           onClick={nextYear}>
                            <TouchRipple/>
                        </i>

                }
            </>
        );
    };


    render() {

        const {isFooter} = this.props, {selectYear, selectMonth} = this.state,
            {previousLevel} = this, MonthEn = Util.getMonth(+selectMonth),
            calendarHeaderLeftRender = this.calendarHeaderLeftRender(),
            calendarHeaderRightRender = this.calendarHeaderRightRender(),
            daysRenderArray = this.daysRender();

        return (
            <div className="calendar">
                <div className="calendar-header">
                    {
                        calendarHeaderLeftRender ? calendarHeaderLeftRender : null
                    }

                    <span className="date-text" onClick={previousLevel}>
                        {MonthEn} {selectYear}
                    </span>
                    {
                        calendarHeaderRightRender ? calendarHeaderRightRender : null
                    }
                </div>
                <div className={classNames('calendar-body', 'calendar-day-body', {
                    'maxHeight': isFooter
                })}>
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
                            daysRenderArray && daysRenderArray.map((item, key) =>
                                <ul className="content-row margin-5"
                                    key={'ul' + key}>
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
