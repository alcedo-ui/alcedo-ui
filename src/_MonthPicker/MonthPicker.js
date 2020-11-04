/**
 * @file MonthPicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import TouchRipple from '../TouchRipple';
import ComponentUtil from '../_vendors/ComponentUtil';

class MonthPicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.defaultTable = {
            row_number: 4,
            col_number: 3
        };

        this.state = {
            selectYear: props.year,
            selectMonth: props.month,
            currentYear: moment(props.value).format('YYYY'),
            currentMonth: moment(props.value).format('MM'),
            selectDay: props.day
        };

    }

    previousLevel = () => {
        const {previousClick} = this.props;
        previousClick && previousClick('year');
    };

    selectDate = selectMonth => {
        const {onChange} = this.props, {selectYear} = this.state;
        this.setState({
            currentYear: selectYear,
            currentMonth: selectMonth,
            selectMonth: selectMonth
        }, () => {
            onChange && onChange({
                year: selectYear,
                month: selectMonth
            });
        });
    };

    previousYear = () => {
        const {currentYear, currentMonth, selectYear} = this.state;
        this.setState({
            selectYear: +selectYear - 1,
            selectMonth: +currentYear === +selectYear - 1 ? currentMonth : undefined
        });
    };

    nextYear = () => {
        const {currentYear, currentMonth, selectYear} = this.state;
        this.setState({
            selectYear: +selectYear + 1,
            selectMonth: +currentYear === +selectYear + 1 ? currentMonth : undefined
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
            selectYear = ComponentUtil.getDerivedState(props, state, 'year', 'selectYear'),
            selectMonth = ComponentUtil.getDerivedState(props, state, 'month', 'selectMonth');

        return {
            prevProps: props,
            value,
            selectYear,
            selectMonth,
            currentYear: moment(props.value).format('YYYY'),
            currentMonth: moment(props.value).format('MM')
        };
    }


    monthsRender = () => {
        const {maxValue, minValue} = this.props,
            {selectYear, selectMonth, currentYear} = this.state, {selectDate} = this,
            MonthEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let currentMonths = [],
            monthslist = [];

        for (let i = 0; i < MonthEn.length; i++) {

            let liClassName = classNames({
                'active': (currentYear == selectYear) && (Number(selectMonth) == (i + 1)),
                'item-gray': (maxValue && (moment(maxValue).format('YYYY') == selectYear) &&
                    (+(moment(maxValue).format('MM'))) < (i + 1)) || (minValue && (moment(minValue).format('YYYY') == selectYear) &&
                    (+(moment(minValue).format('MM'))) > (i + 1)),
                'current-years': !(maxValue && (moment(maxValue).format('YYYY') == selectYear) &&
                    (+(moment(maxValue).format('MM'))) < (i + 1)) || (minValue && (moment(minValue).format('YYYY') == selectYear) &&
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

    render() {

        const {maxValue, minValue, previousYearIconCls, nextYearIconCls} = this.props, {selectYear} = this.state,
            {previousYear, nextYear, previousLevel} = this,
            monthsRenderArray = this.monthsRender(),
            leftNextYear = maxValue && (moment(maxValue).format('YYYY') <= +selectYear),
            rightPreYear = minValue && (moment(minValue).format('YYYY') >= +selectYear);

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

                    <span className="date-text" onClick={previousLevel}>{selectYear}</span>
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
    maxValue: PropTypes.any,
    minValue: PropTypes.any,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    month: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    previousClick: PropTypes.func
};

export default MonthPicker;