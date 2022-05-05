/**
 * @file MonthPicker component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import TouchRipple from '../TouchRipple';
import ComponentUtil from '../_vendors/ComponentUtil';

// Statics
import SelectMode from '../_statics/SelectMode';
import Util from '../_vendors/Util';

class MonthPicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.defaultTable = {
            // eslint-disable-next-line camelcase
            row_number: 4,
            // eslint-disable-next-line camelcase
            col_number: 3
        };

        this.state = {
            selectYear: props.year,
            selectMonth: props.month,
            currentYear: moment(props.value).format('YYYY'),
            currentMonth: moment(props.value).format('MM')
        };

    }

    previousLevel = () => {
        this.props.previousClick?.('year');
    };

    selectDate = selectMonth => {
        const {onChange, dateFormat} = this.props, {selectYear} = this.state,
            timer = moment([selectYear, +selectMonth - 1]).format(dateFormat);
        this.setState({
            currentYear: selectYear,
            currentMonth: selectMonth
        }, () => {
            onChange && onChange({
                time: timer,
                year: selectYear,
                month: selectMonth
            });
        });
    };

    previousYear = () => {
        const {monthAndYearChange} = this.props,
            {currentYear, currentMonth, selectYear} = this.state;
        this.setState({
            selectYear: +selectYear - 1,
            selectMonth: +currentYear === +selectYear - 1 ? currentMonth : undefined
        }, () => {
            monthAndYearChange?.({
                year: +selectYear - 1,
                month: +currentYear === +selectYear - 1 ? currentMonth : undefined
            });
        });
    };

    nextYear = () => {
        const {monthAndYearChange} = this.props,
            {currentYear, currentMonth, selectYear} = this.state;
        this.setState({
            selectYear: +selectYear + 1,
            selectMonth: +currentYear === +selectYear + 1 ? currentMonth : undefined
        }, () => {
            monthAndYearChange?.({
                year: +selectYear + 1,
                month: +currentYear === +selectYear + 1 ? currentMonth : undefined
            });
        });
    };

    componentDidMount() {
        const {value, year, month} = this.props;
        if (value && year && month) {
            this.setState({
                selectYear: year,
                selectMonth: month,
                currentYear: moment(value).format('YYYY'),
                currentMonth: moment(value).format('MM')
            });
        }
    }

    static getDerivedStateFromProps(props, state) {

        const value = ComponentUtil.getDerivedState(props, state, 'value'),
            selectMode = ComponentUtil.getDerivedState(props, state, 'selectMode'),
            selectYear = ComponentUtil.getDerivedState(props, state, 'year', 'selectYear'),
            selectMonth = ComponentUtil.getDerivedState(props, state, 'month', 'selectMonth');

        return {
            prevProps: props,
            value,
            selectMode,
            selectYear,
            selectMonth,
            currentYear: moment(props.value).format('YYYY'),
            currentMonth: moment(props.value).format('MM')
        };
    }

    hoverDateHandle = selectMonth => {
        const {hoverHandle, dateFormat} = this.props, {selectYear} = this.state,
            month = +selectMonth - 1,
            timer = moment([selectYear, month]).format(dateFormat);

        hoverHandle && hoverHandle({
            time: timer,
            year: selectYear,
            month: month
        });
    };

    // eslint-disable-next-line complexity
    rangeDateCurrentMonthsRender = () => {
        const {startTime, endTime, hoverTime, maxValue, minValue} = this.props,
            {selectYear} = this.state, {selectDate, hoverDateHandle} = this;
        let currentMonths = [], monthslist = [],
            monthEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            start = moment(endTime).isBefore(startTime) ? endTime : startTime,
            end = moment(endTime).isBefore(startTime) ? startTime : endTime,
            hover = moment(hoverTime).isBefore(startTime) ? startTime : hoverTime;
        start = moment(hoverTime).isBefore(startTime) ? hoverTime : startTime;

        for (let i = 0; i < monthEn.length; i++) {
            const item = moment([Number(selectYear), i]).format('YYYY-MM'),
                liClassName = classNames({
                    'hover': (start && hover && moment(item).isBetween(start, hover, null, '[]')),
                    'current-years': !(maxValue && (moment(maxValue).format('YYYY') === selectYear?.toString()) &&
                            (+(moment(maxValue).format('MM'))) < (i + 1)) ||
                        (minValue && (moment(minValue).format('YYYY') === selectYear?.toString()) &&
                            (+(moment(minValue).format('MM'))) > (i + 1)),
                    'item-gray': (maxValue && (moment(item).isAfter(maxValue))) ||
                        (minValue && (moment(item).isBefore(minValue))),
                    'active': (start && !end && (moment(start).format('YYYY-MM') === item)) ||
                        (start && end && moment(item).isBetween(start, end, null, '[]'))
                });

            currentMonths.push(
                <li className={liClassName}
                    key={'current' + i}
                    onClick={() => liClassName.indexOf('item-gray') === -1 && selectDate(i + 1)}
                    onMouseOver={() => liClassName.indexOf('item-gray') === -1 && hoverDateHandle(i + 1)}
                >
                    <span className="date-text">
                        {monthEn[i]}
                        {
                            liClassName.indexOf('item-gray') === -1 ?
                                <TouchRipple/>
                                :
                                null
                        }
                    </span>
                </li>);
        }

        if (currentMonths.length > 0) {
            for (let i = 0; i < this.defaultTable.row_number; i++) {
                let rowlist = [],
                    startIndex = i * this.defaultTable.col_number,
                    endIndex = (i + 1) * this.defaultTable.col_number;
                for (let j = startIndex; j < endIndex; j++) {
                    rowlist.push(currentMonths[j]);
                }
                monthslist.push(rowlist);
            }
        }

        return monthslist;
    };


    singleDateCurrentMonthsRender = () => {
        const {maxValue, minValue, selectMode, value} = this.props,
            {selectYear, selectMonth, currentYear} = this.state, {selectDate} = this,
            MonthEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let currentMonths = [],
            monthslist = [];

        for (let i = 0; i < MonthEn.length; i++) {

            let liClassName = classNames({
                'active': selectMode === SelectMode.SINGLE_SELECT ?
                    (Number(currentYear) === Number(selectYear)) && (Number(selectMonth) === (i + 1))
                    :
                    value.find(item => (moment(item).format('YYYY') === selectYear?.toString()) &&
                        (Number(moment(item).format('MM')) === (i + 1))),
                'item-gray': (maxValue && (moment(maxValue).format('YYYY') === selectYear?.toString()) &&
                        (+(moment(maxValue).format('MM'))) < (i + 1)) ||
                    (minValue && (moment(minValue).format('YYYY') === selectYear?.toString()) &&
                        (+(moment(minValue).format('MM'))) > (i + 1)),
                'current-years': !(maxValue && (moment(maxValue).format('YYYY') === selectYear?.toString()) &&
                        (+(moment(maxValue).format('MM'))) < (i + 1)) ||
                    (minValue && (moment(minValue).format('YYYY') === selectYear?.toString()) &&
                        (+(moment(minValue).format('MM'))) > (i + 1))
            });

            currentMonths.push(<li className={liClassName}
                                   key={'current' + i}
                                   onClick={() => {
                                       liClassName.indexOf('item-gray') === -1 && selectDate(i + 1);
                                   }}>
                <span className="date-text">
                    {MonthEn[i]}
                    {
                        liClassName.indexOf('item-gray') === -1 ?
                            <TouchRipple/>
                            :
                            null
                    }
                </span>
            </li>);
        }

        if (currentMonths.length > 0) {
            for (let i = 0; i < this.defaultTable.row_number; i++) {
                let rowlist = [],
                    startIndex = i * this.defaultTable.col_number,
                    endIndex = (i + 1) * this.defaultTable.col_number;
                for (let j = startIndex; j < endIndex; j++) {
                    rowlist.push(currentMonths[j]);
                }
                monthslist.push(rowlist);
            }
        }

        return monthslist;
    };

    monthsRender = () => {
        const {isRange} = this.props;
        return isRange ? this.rangeDateCurrentMonthsRender() : this.singleDateCurrentMonthsRender();
    };

    render() {

        // eslint-disable-next-line react/prop-types
        const {maxValue, minValue, previousYearIconCls, nextYearIconCls} = this.props, {selectYear} = this.state,
            {previousYear, nextYear, previousLevel} = this,
            monthsRenderArray = this.monthsRender(),
            leftNextYear = maxValue && (
                +moment(maxValue).format('MM') === 1 ?
                    +moment(maxValue).format('YYYY') - 1 <= +selectYear
                    :
                    +moment(maxValue).format('YYYY') <= +selectYear
            ),
            rightPreYear = minValue && (
                +moment(minValue).format('MM') === 12 ?
                    +moment(minValue).format('YYYY') + 1 >= +selectYear
                    :
                    +moment(minValue).format('YYYY') >= +selectYear
            );

        return (
            <div className={'calendar'}>
                <div className="calendar-header">
                    {
                        rightPreYear ?
                            null
                            :
                            <i className={classNames('previous-year', {
                                [previousYearIconCls]: previousYearIconCls
                            })}
                               onClick={previousYear}>
                                <TouchRipple/>
                            </i>
                    }

                    <span className={classNames('date-text', {
                        disabled: rightPreYear && leftNextYear
                    })}
                          onClick={() => {
                              (!rightPreYear || !leftNextYear) && previousLevel?.();
                          }}>{selectYear}</span>
                    {
                        leftNextYear ?
                            null
                            :
                            <i className={classNames('next-year', {
                                [nextYearIconCls]: nextYearIconCls
                            })}
                               onClick={nextYear}>
                                <TouchRipple/>
                            </i>
                    }

                </div>
                <div className="calendar-body  calendar-month-body">
                    <div className="c-body-content">
                        {
                            monthsRenderArray && monthsRenderArray.map((item, key) =>
                                <ul key={'ul' + key}
                                    className="content-row month">
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

MonthPicker.propTypes = {
    className: PropTypes.string,
    value: PropTypes.any,
    isRange: PropTypes.bool,
    maxValue: PropTypes.any,
    minValue: PropTypes.any,
    startTime: PropTypes.string,
    endTime: PropTypes.any,
    hoverTime: PropTypes.any,
    otherSelectedDate: PropTypes.array,
    dateFormat: PropTypes.string,
    /**
     * The mode of monthField.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    month: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hoverHandle: PropTypes.func,
    onChange: PropTypes.func,
    monthAndYearChange: PropTypes.func,
    previousClick: PropTypes.func
};

MonthPicker.defaultProps = {
    selectMode: SelectMode.SINGLE_SELECT,
    isRange: false,
    otherSelectedDate: []
};

export default MonthPicker;
