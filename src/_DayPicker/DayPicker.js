/**
 * @file DayPicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import TouchRipple from '../TouchRipple';

export default class DayPicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.defaultTable = {
            row_number: 6,
            col_number: 7
        };
        const value = this.props.value;

        this.state = {
            selectYear: this.props.year,
            selectMonth: this.props.month,
            selectDay: this.props.day,
            hour: this.props.hour,
            minute: this.props.minute,
            second: this.props.second,
            currentYear: moment(value).format('YYYY'),
            currentMonth: moment(value).format('MM'),
            currentDay: moment(value).format('DD'),
            date_num_array: this.MonthDays(this.props.year),
            first_day: this.weekday(this.props.year, this.props.month)
        };

        this.previousLevel = ::this.previousLevel;
        this.selectDate = ::this.selectDate;
        this.previousMonth = ::this.previousMonth;
        this.nextMonth = ::this.nextMonth;
        this.previousYear = ::this.previousYear;
        this.nextYear = ::this.nextYear;
        this.hoverDateHandle = ::this.hoverDateHandle;

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

    previousLevel() {
        this.props.previousClick && this.props.previousClick(0);
    }

    hoverDateHandle(s_day) {
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
    }

    selectDate(s_day) {
        let {selectYear, selectMonth, hour, minute, second} = this.state;
        s_day = s_day.toString();
        const selected_month = Number(selectMonth) - 1;
        let timer;
        if (hour && minute && second) {
            timer = moment([selectYear, selected_month, s_day, hour, minute, second]).format(this.props.dateFormat);
        } else {
            timer = moment([selectYear, selected_month, s_day]).format(this.props.dateFormat);
        }
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
    }

    previousYear() {
        let {currentYear, currentMonth, currentDay, selectYear, selectMonth, selectDay, date_num_array, first_day} = this.state;
        selectYear = +selectYear - 1;
        date_num_array = this.MonthDays(selectYear);
        first_day = this.weekday(selectYear, selectMonth);
        if (Number(currentYear) === Number(selectYear) &&
            Number(currentMonth) === Number(selectMonth)) {
            selectDay = currentDay;
        } else {
            selectDay = undefined;
        }
        this.setState({
            selectYear: selectYear,
            selectMonth: selectMonth,
            selectDay: selectDay,
            date_num_array: date_num_array,
            first_day: first_day
        }, () => {
            this.props.monthAndYearChange && this.props.monthAndYearChange({year: selectYear, month: selectMonth});
        });
    }

    previousMonth() {
        // debugger
        let {currentYear, currentMonth, currentDay, selectYear, selectMonth, selectDay, date_num_array, first_day} = this.state;

        if (selectMonth == 1) {
            selectYear = +selectYear - 1;
            selectMonth = 12;
            date_num_array = this.MonthDays(selectYear);
        } else {
            selectMonth = +selectMonth - 1;
        }

        first_day = this.weekday(selectYear, selectMonth);
        if (Number(currentYear) === Number(selectYear) &&
            Number(currentMonth) === Number(selectMonth)) {
            selectDay = currentDay;
        } else {
            selectDay = undefined;
        }
        this.setState({
            selectYear: selectYear,
            selectMonth: selectMonth,
            selectDay: selectDay,
            date_num_array: date_num_array,
            first_day: first_day
        }, () => {
            this.props.monthAndYearChange && this.props.monthAndYearChange({year: selectYear, month: selectMonth});
        });
    }

    nextMonth() {
        // debugger
        let {currentYear, currentMonth, currentDay, selectYear, selectMonth, selectDay, date_num_array, first_day} = this.state;
        if (selectMonth == 12) {
            selectYear = +selectYear + 1;
            selectMonth = 1;
            date_num_array = this.MonthDays(selectYear);
        } else {
            selectMonth = +selectMonth + 1;
        }

        first_day = this.weekday(selectYear, selectMonth);
        if (Number(currentYear) == Number(selectYear) &&
            Number(currentMonth) === Number(selectMonth)) {
            selectDay = currentDay;
        } else {
            selectDay = undefined;
        }
        this.setState({
            selectYear: selectYear,
            selectMonth: selectMonth,
            selectDay: selectDay,
            date_num_array: date_num_array,
            first_day: first_day
        }, () => {
            this.props.monthAndYearChange && this.props.monthAndYearChange({year: selectYear, month: selectMonth});
        });
    }

    nextYear() {
        let {currentYear, currentMonth, currentDay, selectYear, selectMonth, selectDay, date_num_array, first_day} = this.state;
        selectYear = +selectYear + 1;
        date_num_array = this.MonthDays(selectYear);
        first_day = this.weekday(selectYear, selectMonth);
        if (Number(currentYear) == Number(selectYear) &&
            Number(currentMonth) === Number(selectMonth)) {
            selectDay = currentDay;
        } else {
            selectDay = undefined;
        }
        this.setState({
            selectYear: selectYear,
            selectMonth: selectMonth,
            selectDay: selectDay,
            date_num_array: date_num_array,
            first_day: first_day
        }, () => {
            this.props.monthAndYearChange && this.props.monthAndYearChange({year: selectYear, month: selectMonth});
        });
    }

    MonthEn(num) {
        num = num - 1;
        let MonthEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return MonthEn[num];
    }

    weekday(selectYear, selectMonth) {
        let num = new Date(selectYear + '/' + selectMonth + '/01').getDay();
        if (num == 0) {
            num = 7;
        }
        return num;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value || nextProps.year !== this.props.year || nextProps.month !== this.props.month || nextProps.day !== this.props.day ||
            nextProps.hour !== this.props.hour || nextProps.minute !== this.props.minute || nextProps.second !== this.props.second) {
            const value = nextProps.value;
            this.setState({
                selectYear: nextProps.year,
                selectMonth: nextProps.month,
                selectDay: nextProps.day,
                hour: nextProps.hour,
                minute: nextProps.minute,
                second: nextProps.second,
                currentYear: moment(value).format('YYYY'),
                currentMonth: moment(value).format('MM'),
                currentDay: moment(value).format('DD'),
                date_num_array: this.MonthDays(nextProps.year),
                first_day: this.weekday(nextProps.year, nextProps.month)
            });
        }
    }

    componentDidMount() {
        const {value, year, month, day, hour, minute, second} = this.props;
        if (year && month && day && value) {
            this.setState({
                selectYear: year,
                selectMonth: month,
                selectDay: day,
                hour: hour,
                minute: minute,
                second: second,
                currentYear: moment(value).format('YYYY'),
                currentMonth: moment(value).format('MM'),
                currentDay: moment(value).format('DD'),
                date_num_array: this.MonthDays(year),
                first_day: this.weekday(year, month)
            });

        }
    }

    render() {

        const {className, isFooter, isRange, startTime, endTime, hoverTime, maxValue, minValue} = this.props;

        const {date_num_array, selectYear, selectMonth, selectDay, first_day, currentYear, currentMonth} = this.state;

        const {previousMonth, previousYear, nextYear, nextMonth, selectDate, previousLevel} = this;
        let month = Number(selectMonth);
        let MonthEn = this.MonthEn(month);
        month = month - 1;
        let month_days = date_num_array[month];
        let previous_month_days = undefined,
            n_day = this.defaultTable.row_number * this.defaultTable.col_number - first_day - month_days,
            previous_days = [],
            current_days = [],
            next_days = [],
            total_days = [],
            ul_list = [];
        if (month === 0) {
            previous_month_days = 31;
        } else {
            previous_month_days = date_num_array[month - 1];
        }
        for (let i = 0; i < first_day; i++) {
            let previous_link = (<li className="item-gray" key={'previous' + i}>
                <a href="javascript:;">{previous_month_days - (first_day - i) + 1}</a>
            </li>);
            previous_days.push(previous_link);
        }
        if (isRange) {
            let start, end, hover;
            if (moment(endTime).isBefore(startTime)) {
                start = endTime;
                end = startTime;
            } else {
                start = startTime;
                end = endTime;
            }
            if (moment(hoverTime).isBefore(startTime)) {
                start = hoverTime;
                hover = startTime;
            } else {
                start = startTime;
                hover = hoverTime;
            }

            for (let i = 0; i < Number(month_days); i++) {
                let item = moment([Number(selectYear), (Number(selectMonth) - 1), (i + 1)]).format('YYYY-MM-DD');
                let current_link = (
                    <li className={`${start == item ? 'start' : ''} ${item == end || item == hover ? 'end' : ''} ${ moment(start).isBefore(item) && moment(item).isBefore(end)
                    || moment(start).isBefore(item) && moment(item).isBefore(hover) ? 'hover' : ''} ${i == 0 ? 'first-day' : ''} ${ i == (+month_days - 1) ? 'last-day' : ''}
                    ${(minValue && moment(item).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(item)) ? 'item-gray' : 'current-days'}`}
                        key={'current' + i}
                        onClick={() => {
                            selectDate(i + 1);
                        }}
                        onMouseOver={() => {
                            this.hoverDateHandle((i + 1));
                        }}
                    >
                        <a href="javascript:;">
                            {i + 1}
                            <TouchRipple/>
                        </a>
                    </li>);
                current_days.push(current_link);
            }
        } else {
            for (let i = 0; i < Number(month_days); i++) {
                let item = moment([Number(selectYear), (Number(selectMonth) - 1), (i + 1)]).format('YYYY-MM-DD');
                let current_link = (
                    <li className={`${(selectYear == currentYear) && (selectMonth == currentMonth) && (i + 1 == selectDay) ? 'active' : ''} ${(minValue && moment(item).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(item)) ? 'item-gray' : 'current-days'}`}
                        key={'current' + i}
                        onClick={() => {
                            if ((minValue && moment(item).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(item))) {
                                return;
                            } else {
                                selectDate(i + 1);
                            }
                        }}>
                        <a href="javascript:;">
                            {i + 1}
                            <TouchRipple/>
                        </a>
                    </li>);
                current_days.push(current_link);
            }
        }
        for (let i = 0; i < n_day; i++) {
            let next_link = (<li className="item-gray" key={'previous' + i}>
                <a href="javascript:;">{i + 1}</a>
            </li>);
            next_days.push(next_link);
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
                            (
                                (moment(minValue).format('YYYY') < +selectYear - 1) || (moment(minValue).format('YYYY') == +selectYear - 1 && moment(minValue).format('MM') <= selectMonth) ?
                                    <i className="fa fa-angle-double-left" onClick={previousYear}>
                                        <TouchRipple/>
                                    </i>
                                    :
                                    null
                            )
                            :
                            <i className="fa fa-angle-double-left" onClick={previousYear}>
                                <TouchRipple/>
                            </i>
                    }
                    {
                        minValue ?
                            ((moment(minValue).format('YYYY') == selectYear && moment(minValue).format('MM') < selectMonth) || moment(minValue).format('YYYY') < selectYear ?
                                    <i className="fa fa-angle-left" onClick={previousMonth}>
                                        <TouchRipple/>
                                    </i>
                                    :
                                    null
                            )
                            :
                            <i className="fa fa-angle-left" onClick={previousMonth}>
                                <TouchRipple/>
                            </i>

                    }

                    <span onClick={previousLevel}>
                        {MonthEn} {selectYear}
                    </span>
                    {
                        maxValue ?
                            ((moment(maxValue).format('YYYY') == selectYear && selectMonth < moment(maxValue).format('MM')) || maxValue && selectYear < moment(maxValue).format('YYYY') ?
                                    <i className="fa fa-angle-right" onClick={nextMonth}>
                                        <TouchRipple/>
                                    </i>
                                    :
                                    null
                            )
                            :
                            <i className="fa fa-angle-right" onClick={nextMonth}>
                                <TouchRipple/>
                            </i>

                    }
                    {
                        maxValue ?
                            ((selectYear < +moment(maxValue).format('YYYY') - 1) || (selectYear == moment(maxValue).format('YYYY') - 1 && selectMonth <= moment(maxValue).format('MM')) ?
                                    <i className="fa fa-angle-double-right" onClick={nextYear}>
                                        <TouchRipple/>
                                    </i>
                                    :
                                    null
                            )
                            :
                            <i className="fa fa-angle-double-right" onClick={nextYear}>
                                <TouchRipple/>
                            </i>

                    }
                </div>
                <div className={`calendar-body${isFooter ? '' : ' maxHeight'}`}>
                    <ul className="c-body-head">
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                    </ul>
                    <div className='c-body-content'>
                        {
                            ul_list.map((item, key) => {
                                return (<ul key={'ul' + key} className="content-row margin-5">{item}</ul>);
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
};

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
