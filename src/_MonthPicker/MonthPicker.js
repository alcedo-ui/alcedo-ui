/**
 * @file MonthPicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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
        this.props.previousClick && this.props.previousClick('year');
    };

    selectDate = s_month => {
        let {selectYear} = this.state;
        this.setState({
            currentYear: selectYear,
            currentMonth: s_month,
            selectMonth: s_month
        }, () => {
            this.props.onChange && this.props.onChange({year: selectYear, month: s_month});
        });
    };

    previousYear = () => {
        let {currentYear, currentMonth, selectYear, selectMonth} = this.state;
        selectYear = +selectYear - 1;
        selectMonth = Number(currentYear) === Number(selectYear) ? currentMonth : undefined;
        this.setState({
            selectYear: selectYear,
            selectMonth: selectMonth
        });
    };

    nextYear = () => {
        let {currentYear, currentMonth, selectYear, selectMonth} = this.state;
        selectYear = +selectYear + 1;
        selectMonth = Number(currentYear) === Number(selectYear) ? currentMonth : undefined;
        this.setState({
            selectYear: selectYear,
            selectMonth: selectMonth
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

    render() {

        const {className, maxValue, minValue, previousYearIconCls, nextYearIconCls} = this.props;

        let {selectYear, selectMonth, currentYear} = this.state;

        const {previousYear, nextYear, selectDate, previousLevel} = this;
        let current_months = [],
            ul_list = [];
        let MonthEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


        for (let i = 0; i < MonthEn.length; i++) {
            let liClassName = `${(currentYear == selectYear) && (Number(selectMonth) == (i + 1)) ? 'active' : ''}
                                ${(maxValue && (moment(maxValue).format('YYYY') == selectYear) &&
                (+(moment(maxValue).format('MM'))) < (i + 1)) || (minValue && (moment(minValue).format('YYYY') == selectYear) &&
                (+(moment(minValue).format('MM'))) > (i + 1)) ? 'item-gray' : 'current-years'}`;
            let Months = (
                <li className={liClassName}
                    key={'current' + i}
                    onClick={() => {
                        liClassName.indexOf('item-gray') === -1 && selectDate(i + 1);
                    }}>
                    <a href="javascript:;">
                        {MonthEn[i]}
                        {
                            liClassName.indexOf('item-gray') === -1 ?
                                <TouchRipple/>
                                :
                                null
                        }
                    </a>
                </li>);
            current_months.push(Months);
        }
        if (current_months.length > 0) {
            for (let i = 0; i < this.defaultTable.row_number; i++) {
                let li_list = [],
                    start_index = i * this.defaultTable.col_number,
                    end_index = (i + 1) * this.defaultTable.col_number;
                for (let j = start_index; j < end_index; j++) {
                    li_list.push(current_months[j]);
                }
                ul_list.push(li_list);
            }
        }
        selectYear = selectYear.toString();
        let leftNextYear = maxValue && (moment(maxValue).format('YYYY') <= +selectYear);
        let rightPreYear = minValue && (moment(minValue).format('YYYY') >= +selectYear);

        return (
            <div className={'calendar'}>
                <div className="calendar-header">
                    {
                        rightPreYear ?
                            null
                            :
                            <i className={`previous-year ${previousYearIconCls}`}
                               onClick={previousYear}>
                                <TouchRipple/>
                            </i>
                    }

                    <span onClick={previousLevel}>{selectYear}</span>
                    {
                        leftNextYear ?
                            null
                            :
                            <i className={`next-year ${nextYearIconCls}`}
                               onClick={nextYear}>
                                <TouchRipple/>
                            </i>
                    }

                </div>
                <div className="calendar-body  calendar-month-body">
                    <div className="c-body-content">
                        {
                            ul_list && ul_list.map((item, key) =>
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