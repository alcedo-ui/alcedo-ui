/**
 * @file YearPicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import TouchRipple from '../TouchRipple';
import ComponentUtil from '../_vendors/ComponentUtil';
import DateUtil from '../_vendors/DateUtil';


class YearPicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.defaultTable = {
            row_number: 4,
            col_number: 3
        };

        this.state = {
            YearArr: DateUtil.getYearArr(props.year),
            selectYear: props.year,
            currentYear: moment(props.value).format('YYYY'),
            selectMonth: props.month,
            selectDay: props.day,
            maxValue: props.maxValue,
            minValue: props.minValue
        };

    }

    selectDate = selectYear => {
        const {onChange} = this.props;
        this.setState({
            currentYear: selectYear,
            selectYear: selectYear
        }, () => {
            onChange && onChange(selectYear);
        });
    };

    previousYear = () => {
        const {selectYear} = this.state;
        this.setState({
            YearArr: DateUtil.getYearArr(+selectYear - 10),
            selectYear: +selectYear - 10
        });
    };

    nextYear = () => {
        const {selectYear} = this.state;
        this.setState({
            YearArr: DateUtil.getYearArr(+selectYear + 10),
            selectYear: +selectYear + 10
        });
    };

    componentDidMount() {
        const {value, year} = this.props;
        if (value && year) {
            this.setState({
                YearArr: DateUtil.getYearArr(year),
                selectYear: year,
                currentYear: moment(value).format('YYYY'),
                currentMonth: moment(value).format('MM')
            });
        }
    }

    static getDerivedStateFromProps(props, state) {

        const value = ComponentUtil.getDerivedState(props, state, 'value'),
            selectYear = ComponentUtil.getDerivedState(props, state, 'year', 'selectYear');

        return {
            prevProps: props,
            value,
            selectYear,
            YearArr: DateUtil.getYearArr(selectYear),
            currentYear: moment(value).format('YYYY'),
            currentMonth: moment(value).format('MM')
        };

    }


    yearsRender = () => {
        const {maxValue, minValue} = this.props, {YearArr, selectYear} = this.state, {selectDate} = this;
        let previousYearsArray = [],
            currentYearsArray = [],
            nextYearsArray = [],
            totalYearsArray = [],
            yearsList = [];
        previousYearsArray.push(
            <li className="item-gray"
                key={Number(YearArr[0]) - 1}>
                <span className="date-text">{Number(YearArr[0]) - 1}</span>
            </li>
        );
        for (let i = 0; i < YearArr.length; i++) {

            let liClassName = classNames({
                'active': Number(selectYear) == Number(YearArr[(i)]),
                'item-gray': (maxValue && (moment(maxValue).format('YYYY') < Number(YearArr[(i)]))) ||
                    (minValue && (moment(minValue).format('YYYY') > Number(YearArr[(i)]))),
                'current-years': !(maxValue && (moment(maxValue).format('YYYY') < Number(YearArr[(i)]))) ||
                    (minValue && (moment(minValue).format('YYYY') > Number(YearArr[(i)])))
            });

            currentYearsArray.push(<li className={liClassName}
                                       key={'current' + i}
                                       onClick={() => {
                                           liClassName.indexOf('item-gray') === -1 && selectDate(YearArr[(i)]);
                                       }}>
                <span className="date-text">
                    {YearArr[i]}
                    {
                        liClassName.indexOf('item-gray') === -1 ?
                            <TouchRipple/>
                            :
                            null
                    }
                </span>
            </li>);
        }
        nextYearsArray.push(
            <li className="item-gray" key={Number(YearArr[YearArr.length - 1]) + 1}>
                <span className="date-text">{Number(YearArr[YearArr.length - 1]) + 1}</span>
            </li>
        );
        totalYearsArray = previousYearsArray.concat(currentYearsArray, nextYearsArray);
        if (totalYearsArray.length > 0) {
            for (let i = 0; i < this.defaultTable.row_number; i++) {
                let rowlist = [],
                    startIndex = i * this.defaultTable.col_number,
                    endIndex = (i + 1) * this.defaultTable.col_number;
                for (let j = startIndex; j < endIndex; j++) {
                    rowlist.push(totalYearsArray[j]);
                }
                yearsList.push(rowlist);
            }
        }

        return yearsList;
    };

    render() {

        const {maxValue, minValue, previousYearIconCls, nextYearIconCls} = this.props, {YearArr, selectYear} = this.state,
            {previousYear, nextYear} = this, yearsRenderArray = this.yearsRender(),
            selectedYear = selectYear.toString(),
            yearRangeEnd = selectedYear.substr(0, selectedYear.length - 1) + '9',
            yearRangeStart = selectedYear.substr(0, selectedYear.length - 1) + '1',
            leftNextYear = maxValue && (moment(maxValue).format('YYYY') <= +yearRangeEnd) ? true : false,
            rightPreYear = minValue && (moment(minValue).format('YYYY') >= +yearRangeStart) ? true : false;

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

                    <span className="date-text">{YearArr[0]}-{YearArr[YearArr.length - 1]}</span>
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
                <div className="calendar-body calendar-year-body">
                    <div className="c-body-content">
                        {
                            yearsRenderArray && yearsRenderArray.map((item, key) =>
                                <ul key={'ul' + key}
                                    className="content-row year">
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

YearPicker.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.any,
    maxValue: PropTypes.any,
    minValue: PropTypes.any,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    month: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
};

export default YearPicker;