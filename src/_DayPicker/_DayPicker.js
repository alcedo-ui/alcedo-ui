/**
 * Created by Administrator on 2017/3/7.
 */
import React, {Component, PropTypes} from 'react';
import moment from 'moment';

import TouchRipple from '../TouchRipple';

export default class _DayPicker extends Component {

    constructor(props) {

        super(props);
        this.defaultTable = {
            row_number: 6,
            col_number: 7
        }
        this.state = {
            timer: this.props.defaultValue,
            select_year: this.props.year,
            select_month: this.props.month,
            select_day: this.props.day,
            hour: this.props.hour,
            minute: this.props.minute,
            second: this.props.second,
            current_year: this.props.year,
            current_month: this.props.month,
            current_day: this.props.day,
            date_num_array: this.MonthDays(this.props.year),
            first_day: this.weekday(this.props.year, this.props.month),
            maxValue: this.props.maxValue,
            minValue: this.props.minValue
        }

        this.previousLevel = this::this.previousLevel;
        this.selectDate = this::this.selectDate;
        this.previousMonth = this::this.previousMonth;
        this.nextMonth = this::this.nextMonth;
        this.previousYear = this::this.previousYear;
        this.nextYear = this::this.nextYear;
        this.hoverDateHandle = this::this.hoverDateHandle;
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
        this.props.previousClick && this.props.previousClick(0)
    }

    hoverDateHandle(s_day) {
        let {select_year, select_month} = this.state;
        s_day = s_day.toString();
        const selected_month = Number(select_month) - 1;
        let timer = moment([select_year, selected_month, s_day]).format(this.props.dateFormat);
        this.props.hoverHandle && this.props.hoverHandle({
            time: timer,
            year: select_year,
            month: select_month,
            day: s_day
        })
    }

    selectDate(s_day) {
        let {select_year, select_month, hour, minute, second} = this.state;
        s_day = s_day.toString();
        const selected_month = Number(select_month) - 1;
        let timer;
        if (hour && minute && second) {
            timer = moment([select_year, selected_month, s_day, hour, minute, second]).format(this.props.dateFormat);
        } else {
            timer = moment([select_year, selected_month, s_day]).format(this.props.dateFormat);
        }
        this.setState({
            history_year: select_year,
            history_month: select_month,
            history_day: s_day,
            select_day: s_day
        }, ()=> {
            this.props.onChange && this.props.onChange({
                time: timer,
                year: select_year,
                month: select_month,
                day: s_day
            })
        });
    }

    previousYear() {
        let {current_year, current_month, current_day, select_year, select_month, select_day, date_num_array, first_day} = this.state;
        select_year = +select_year - 1;
        date_num_array = this.MonthDays(select_year);
        first_day = this.weekday(select_year, select_month);
        if (Number(current_year) === Number(select_year) &&
            Number(current_month) === Number(select_month)) {
            select_day = current_day;
        } else {
            select_day = undefined;
        }
        this.setState({
            select_year: select_year,
            select_month: select_month,
            select_day: select_day,
            date_num_array: date_num_array,
            first_day: first_day
        }, ()=> {
            this.props.monthAndYearChange && this.props.monthAndYearChange({year: select_year, month: select_month})
        })
    }

    previousMonth() {
        // debugger
        let {current_year, current_month, current_day, select_year, select_month, select_day, date_num_array, first_day} = this.state;

        if (select_month == 1) {
            select_year = +select_year - 1;
            select_month = 12;
            date_num_array = this.MonthDays(select_year);
        } else {
            select_month = +select_month - 1;
        }

        first_day = this.weekday(select_year, select_month);
        if (Number(current_year) === Number(select_year) &&
            Number(current_month) === Number(select_month)) {
            select_day = current_day;
        } else {
            select_day = undefined;
        }
        this.setState({
            select_year: select_year,
            select_month: select_month,
            select_day: select_day,
            date_num_array: date_num_array,
            first_day: first_day
        }, ()=> {
            this.props.monthAndYearChange && this.props.monthAndYearChange({year: select_year, month: select_month})
        })
    }

    nextMonth() {
        // debugger
        let {current_year, current_month, current_day, select_year, select_month, select_day, date_num_array, first_day}=this.state;
        if (select_month == 12) {
            select_year = +select_year + 1;
            select_month = 1;
            date_num_array = this.MonthDays(select_year);
        } else {
            select_month = +select_month + 1;
        }

        first_day = this.weekday(select_year, select_month);
        if (Number(current_year) == Number(select_year) &&
            Number(current_month) === Number(select_month)) {
            select_day = current_day;
        } else {
            select_day = undefined;
        }
        this.setState({
            select_year: select_year,
            select_month: select_month,
            select_day: select_day,
            date_num_array: date_num_array,
            first_day: first_day
        }, ()=> {
            this.props.monthAndYearChange && this.props.monthAndYearChange({year: select_year, month: select_month})
        })
    }

    nextYear() {
        let {current_year, current_month, current_day, select_year, select_month, select_day, date_num_array, first_day}=this.state;
        select_year = +select_year + 1;
        date_num_array = this.MonthDays(select_year);
        first_day = this.weekday(select_year, select_month);
        if (Number(current_year) == Number(select_year) &&
            Number(current_month) === Number(select_month)) {
            select_day = current_day;
        } else {
            select_day = undefined;
        }
        this.setState({
            select_year: select_year,
            select_month: select_month,
            select_day: select_day,
            date_num_array: date_num_array,
            first_day: first_day
        }, ()=> {
            this.props.monthAndYearChange && this.props.monthAndYearChange({year: select_year, month: select_month})
        })
    }

    MonthEn(num) {
        num = num - 1;
        let MonthEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return MonthEn[num]
    }

    weekday(select_year, select_month) {
        let num = new Date(select_year + '/' + select_month + '/01').getDay();
        if (num == 0) {
            num = 7
        }
        return num
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.maxValue !== this.props.maxValue || nextProps.minValue !== this.props.minValue || nextProps.year !== this.props.year || nextProps.month !== this.props.month ||
            nextProps.day !== this.props.day || nextProps.hour !== this.props.hour || nextProps.minute !== this.props.minute || nextProps.second !== this.props.second) {
            this.setState({
                select_year: nextProps.year,
                select_month: nextProps.month,
                select_day: nextProps.day,
                hour: nextProps.hour,
                minute: nextProps.minute,
                second: nextProps.second,
                date_num_array: this.MonthDays(nextProps.year),
                first_day: this.weekday(nextProps.year, nextProps.month),
                maxValue: nextProps.maxValue,
                minValue: nextProps.minValue
            });
        }
    }

    componentDidMount() {
        const {year, month, day, hour, minute, second, maxValue, minValue} = this.props;
        if ((year && year != '') && (month && month != '') && (day && day != '')) {
            this.setState({
                select_year: year,
                select_month: month,
                select_day: day,
                hour: hour,
                minute: minute,
                second: second,
                date_num_array: this.MonthDays(year),
                first_day: this.weekday(year, month),
                maxValue: maxValue,
                minValue: minValue
            })

        }
    }

    render() {

        const {className, isFooter, isRange, startTime, endTime, hoverTime} = this.props;

        const {date_num_array, select_year, select_month, first_day, select_day, maxValue, minValue} = this.state;

        const {previousMonth, previousYear, nextYear, nextMonth, selectDate, previousLevel}=this;
        let month = Number(select_month);
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
                let item = moment([Number(select_year), (Number(select_month) - 1), (i + 1)]).format('YYYY-MM-DD');
                let current_link = (
                    <li className={`current-days ${start == item ? 'start' : ''} ${item == end || item == hover ? 'end' : ''} ${ moment(start).isBefore(item) && moment(item).isBefore(end)
                    || moment(start).isBefore(item) && moment(item).isBefore(hover) ? 'hover' : ''} ${i == 0 ? 'first-day' : ''} ${ i == (+month_days - 1) ? 'last-day' : ''}`}
                        key={'current' + i}
                        onClick={()=> {
                            selectDate(i + 1)
                        }}
                        onMouseOver={()=> {
                            this.hoverDateHandle((i + 1))
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
                let item = moment([Number(select_year), (Number(select_month) - 1), (i + 1)]).format('YYYY-MM-DD');
                let current_link = (<li className={`${i + 1 == select_day ? 'active' : ''}
                                                     ${(minValue && moment(item).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(item)) ? 'item-gray' : 'current-days'}`}
                                        key={'current' + i}
                                        onClick={()=> {
                                            if ((minValue && moment(item).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(item))) {
                                                return
                                            } else {
                                                selectDate(i + 1)
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
            <div className={"calendar " + className}>
                <div className="calendar-header">
                    {
                        minValue ?
                            (
                                (moment(minValue).format('YYYY') < +select_year - 1) || (moment(minValue).format('YYYY') == +select_year - 1 && moment(minValue).format('MM') <= select_month) ?
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
                            ((moment(minValue).format('YYYY') == select_year && moment(minValue).format('MM') < select_month) || moment(minValue).format('YYYY') < select_year ?
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
                        {MonthEn} {select_year}
                    </span>
                    {
                        maxValue ?
                            ((moment(maxValue).format('YYYY') == select_year && select_month < moment(maxValue).format('MM')) || maxValue && select_year < moment(maxValue).format('YYYY') ?
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
                            ((select_year < +moment(maxValue).format('YYYY') - 1) || (select_year == moment(maxValue).format('YYYY') - 1 && select_month <= moment(maxValue).format('MM')) ?
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

_DayPicker.propTypes = {
    select_year: PropTypes.string || PropTypes.number,
    select_month: PropTypes.string || PropTypes.number,
    select_day: PropTypes.any,
    current_year: PropTypes.string || PropTypes.number,
    current_month: PropTypes.string || PropTypes.number,
    current_day: PropTypes.any,
    date_num_array: PropTypes.array,
    first_day: PropTypes.string || PropTypes.number,
    isRange: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string,

    // timestamp
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
    placeholder: PropTypes.string,
    dateFormat: PropTypes.string

};

_DayPicker.defaultProps = {
    className: '',
    style: null,
    name: '',
    value: new Date().getTime(),
    placeholder: 'Date',
    dateFormat: 'YYYY-MM-DD',
    isRange: false
};
