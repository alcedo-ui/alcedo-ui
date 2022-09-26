/**
 * @file: /alcedo-ui/src/_QuarterPicker/QuarterPicker.js
 * @author: zhongweichao(zhongwei.chao@derbysoft.net)
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

class QuarterPicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.defaultTable = {
            // eslint-disable-next-line camelcase
            row_number: 1,
            // eslint-disable-next-line camelcase
            col_number: 4
        };

        this.state = {
            selectYear: props.year,
            selectQuarter: props.quarter,
            currentYear: moment(props.value).format('YYYY'),
            currentQuarter: props.value.split('-')[1]
        };

    }

    previousLevel = () => {
        this.props.previousClick?.('year');
    };

    selectDate = selectQuarter => {
        const {onChange, dateFormat} = this.props, {selectYear} = this.state,
            timer = moment([Number(selectYear)]).quarter(+selectQuarter).format(dateFormat);

        this.setState({
            currentYear: selectYear,
            currentQuarter: selectQuarter
        }, () => {
            onChange && onChange({
                time: timer,
                year: selectYear,
                quarter: selectQuarter
            });
        });
    };

    previousYear = () => {
        const {quarterAndYearChange} = this.props,
            {currentYear, currentQuarter, selectYear} = this.state;
        this.setState({
            selectYear: +selectYear - 1,
            selectQuarter: +currentYear === +selectYear - 1 ? currentQuarter : undefined
        }, () => {
            quarterAndYearChange?.({
                year: +selectYear - 1,
                quarter: +currentYear === +selectYear - 1 ? currentQuarter : undefined
            });
        });
    };

    nextYear = () => {
        const {quarterAndYearChange} = this.props,
            {currentYear, currentQuarter, selectYear} = this.state;
        this.setState({
            selectYear: +selectYear + 1,
            selectQuarter: +currentYear === +selectYear + 1 ? currentQuarter : undefined
        }, () => {
            quarterAndYearChange?.({
                year: +selectYear + 1,
                quarter: +currentYear === +selectYear + 1 ? currentQuarter : undefined
            });
        });
    };

    componentDidMount() {
        const {value, year, quarter} = this.props;
        if (value && year && quarter) {
            this.setState({
                selectYear: year,
                selectQuarter: quarter,
                currentYear: moment(value).format('YYYY'),
                currentQuarter: value.split('-')[1]
            });
        }
    }

    static getDerivedStateFromProps(props, state) {

        const value = ComponentUtil.getDerivedState(props, state, 'value'),
            selectMode = ComponentUtil.getDerivedState(props, state, 'selectMode'),
            selectYear = ComponentUtil.getDerivedState(props, state, 'year', 'selectYear'),
            selectQuarter = ComponentUtil.getDerivedState(props, state, 'quarter', 'selectQuarter');

        return {
            prevProps: props,
            value,
            selectMode,
            selectYear,
            selectQuarter,
            currentYear: moment(props.value).format('YYYY'),
            currentQuarter: props.value.split('-')[1]
        };
    }

    hoverDateHandle = selectQuarter => {
        const {hoverHandle, dateFormat} = this.props, {selectYear} = this.state,
            quarter = +selectQuarter,
            timer = moment([Number(selectYear)]).quarter(+selectQuarter).format(dateFormat);

        hoverHandle && hoverHandle({
            time: timer,
            year: selectYear,
            quarter: quarter
        });
    };

    // eslint-disable-next-line complexity
    rangeDateCurrentQuartersRender = () => {

        let {startTime, endTime, hoverTime, maxValue, minValue} = this.props,
            {selectYear} = this.state, {selectDate, hoverDateHandle} = this;
        let currentQuarters = [], quartersList = [],
            quarterEn = ['Q1', 'Q2', 'Q3', 'Q4'],
            start = moment(endTime).isBefore(startTime) ? endTime : startTime,
            end = moment(endTime).isBefore(startTime) ? startTime : endTime,
            hover = moment(hoverTime).isBefore(startTime) ? startTime : hoverTime;
        start = moment(hoverTime).isBefore(startTime) ? hoverTime : startTime;


        for (let i = 0; i < quarterEn.length; i++) {
            const item = moment([Number(selectYear)]).quarter(i + 1).format('YYYY-Q'),
                liClassName = classNames({
                    'hover': (start && hover && moment(item).isBetween(start, hover, null, '[]')),
                    'current-years': !(maxValue && (moment(maxValue).format('YYYY') === selectYear?.toString()) &&
                            (+maxValue.split('-')[1]) < (i + 1)) ||
                        (minValue && (moment(minValue).format('YYYY') === selectYear?.toString()) &&
                            (+minValue.split('-')[1]) > (i + 1)),
                    'item-gray': (maxValue && (moment(item).isAfter(maxValue))) ||
                        (minValue && (moment(item).isBefore(minValue))),
                    'active': (start && !end && (start === item)) ||
                        (start && end && moment(item).isBetween(start, end, null, '[]'))
                });

            currentQuarters.push(
                <li className={liClassName}
                    key={'current' + i}
                    onClick={() => liClassName.indexOf('item-gray') === -1 && selectDate(i + 1)}
                    onMouseOver={() => liClassName.indexOf('item-gray') === -1 && hoverDateHandle(i + 1)}
                >
                    <span className="date-text">
                        {quarterEn[i]}
                        {
                            liClassName.indexOf('item-gray') === -1 ?
                                <TouchRipple/>
                                :
                                null
                        }
                    </span>
                </li>);
        }

        if (currentQuarters.length > 0) {
            for (let i = 0; i < this.defaultTable.row_number; i++) {
                let rowlist = [],
                    startIndex = i * this.defaultTable.col_number,
                    endIndex = (i + 1) * this.defaultTable.col_number;
                for (let j = startIndex; j < endIndex; j++) {
                    rowlist.push(currentQuarters[j]);
                }
                quartersList.push(rowlist);
            }
        }

        return quartersList;
    };


    singleDateCurrentQuartersRender = () => {
        const {maxValue, minValue, selectMode, value} = this.props,
            {selectYear, selectQuarter, currentYear} = this.state, {selectDate} = this,
            quarterEn = ['Q1', 'Q2', 'Q3', 'Q4'];
        let currentQuarters = [],
            quartersList = [];

        for (let i = 0; i < quarterEn.length; i++) {

            let liClassName = classNames({
                'active': selectMode === SelectMode.SINGLE_SELECT ?
                    (Number(currentYear) === Number(selectYear)) && (Number(selectQuarter) === (i + 1))
                    :
                    value.find(item => (moment(item).format('YYYY') === selectYear?.toString()) &&
                        (Number(item?.split('-')[1]) === (i + 1))),
                'item-gray': (maxValue && (moment(maxValue).format('YYYY') === selectYear?.toString()) &&
                        (+(maxValue?.split('-')[1])) < (i + 1)) ||
                    (minValue && (moment(minValue).format('YYYY') === selectYear?.toString()) &&
                        (+(minValue?.split('-')[1])) > (i + 1)),
                'current-years': !(maxValue && (moment(maxValue).format('YYYY') === selectYear?.toString()) &&
                        (+(maxValue?.split('-')[1])) < (i + 1)) ||
                    (minValue && (moment(minValue).format('YYYY') === selectYear?.toString()) &&
                        (+(minValue?.split('-')[1])) > (i + 1))
            });

            currentQuarters.push(<li className={liClassName}
                                   key={'current' + i}
                                   onClick={() => {
                                       liClassName.indexOf('item-gray') === -1 && selectDate(i + 1);
                                   }}>
                <span className="date-text">
                    {quarterEn[i]}
                    {
                        liClassName.indexOf('item-gray') === -1 ?
                            <TouchRipple/>
                            :
                            null
                    }
                </span>
            </li>);
        }

        if (currentQuarters.length > 0) {
            for (let i = 0; i < this.defaultTable.row_number; i++) {
                let rowlist = [],
                    startIndex = i * this.defaultTable.col_number,
                    endIndex = (i + 1) * this.defaultTable.col_number;
                for (let j = startIndex; j < endIndex; j++) {
                    rowlist.push(currentQuarters[j]);
                }
                quartersList.push(rowlist);
            }
        }

        return quartersList;
    };

    quartersRender = () => {
        const {isRange} = this.props;
        return isRange ? this.rangeDateCurrentQuartersRender() : this.singleDateCurrentQuartersRender();
    };

    render() {

        // eslint-disable-next-line react/prop-types
        const {campareSelfLeft, campareSelfRight, maxValue, minValue, previousYearIconCls, nextYearIconCls} = this.props, {selectYear} = this.state,
            {previousYear, nextYear, previousLevel} = this,
            quartersRenderArray = this.quartersRender();

            let leftNextYear = false,
            // maxValue && (
            //     +maxValue.split('-')[1] === 1 ?
            //         +moment(maxValue).format('YYYY') - 1 <= +selectYear
            //         :
            //         +moment(maxValue).format('YYYY') <= +selectYear
            // ),
            rightPreYear = false;
            // minValue && (
            //     +minValue.split('-')[1] === 4 ?
            //         +moment(minValue).format('YYYY') + 1 >= +selectYear
            //         :
            //         +moment(minValue).format('YYYY') >= +selectYear
            // );

            if (campareSelfLeft) {
                if (minValue) {
                    rightPreYear = +moment(minValue).format('YYYY') >= +selectYear;
                } else {
                    rightPreYear = false;
                }
            } else {
                rightPreYear = +minValue.split('-')[1] === 4 ?
                        +moment(minValue).format('YYYY') + 1 >= +selectYear
                        :
                        +moment(minValue).format('YYYY') >= +selectYear;
            }


            if (campareSelfRight) {
                if (maxValue) {
                    leftNextYear = +moment(maxValue).format('YYYY') <= +selectYear;
                } else {
                    leftNextYear = false;
                }
            } else {
                leftNextYear = +maxValue.split('-')[1] === 1 ?
                    +moment(maxValue).format('YYYY') - 1 <= +selectYear
                    :
                    +moment(maxValue).format('YYYY') <= +selectYear;
            }

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
                <div className="calendar-body  calendar-quarter-body">
                    <div className="c-body-content">
                        {
                            quartersRenderArray && quartersRenderArray.map((item, key) =>
                                <ul key={'ul' + key}
                                    className="content-row quarter">
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

QuarterPicker.propTypes = {
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
    quarter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hoverHandle: PropTypes.func,
    onChange: PropTypes.func,
    quarterAndYearChange: PropTypes.func,
    previousClick: PropTypes.func
};

QuarterPicker.defaultProps = {
    selectMode: SelectMode.SINGLE_SELECT,
    isRange: false,
    otherSelectedDate: []
};

export default QuarterPicker;
