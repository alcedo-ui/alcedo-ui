/**
 * @file YearPicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import TouchRipple from '../TouchRipple';

class YearPicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.defaultTable = {
            row_number: 4,
            col_number: 3
        };

        this.state = {
            YearArr: this.getYearArr(props.year),
            selectYear: props.year,
            currentYear: moment(props.value).format('YYYY'),
            selectMonth: props.month,
            selectDay: props.day,
            maxValue: props.maxValue,
            minValue: props.minValue
        };

    }

    selectDate = s_year => {
        this.setState({
            currentYear: s_year,
            selectYear: s_year
        }, () => {
            this.props.onChange && this.props.onChange(s_year);
        });
    };

    previousYear = () => {
        let {selectYear} = this.state;
        selectYear = +selectYear - 10;
        this.setState({
            YearArr: this.getYearArr(selectYear),
            selectYear: selectYear
        });
    };

    nextYear = () => {
        let {selectYear} = this.state;
        selectYear = +selectYear + 10;
        this.setState({
            YearArr: this.getYearArr(selectYear),
            selectYear: selectYear
        });
    };

    getYearArr = num => {
        let yearString = num.toString();
        yearString = yearString.substr(0, yearString.length - 1);
        let YearArr = [];
        for (let i = 0; i < 10; i++) {
            YearArr.push(yearString + i);
        }
        return YearArr;
    };

    componentDidMount() {
        const {value, year} = this.props;
        if (value && year) {
            this.setState({
                YearArr: this.getYearArr(year),
                selectYear: year,
                currentYear: moment(value).format('YYYY'),
                currentMonth: moment(value).format('MM')
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value || nextProps.year !== this.props.year) {
            const value = nextProps.value;
            this.setState({
                selectYear: nextProps.year,
                YearArr: this.getYearArr(nextProps.year),
                currentYear: moment(value).format('YYYY'),
                currentMonth: moment(value).format('MM')
            });
        }
    }

    render() {

        const {className, maxValue, minValue} = this.props;

        let {YearArr, selectYear} = this.state;

        const {previousYear, nextYear, selectDate} = this;
        let previous_years = [],
            current_years = [],
            next_years = [],
            total_years = [],
            ul_list = [];
        previous_years.push(
            (<li className="item-gray" key={Number(YearArr[0]) - 1}>
                <a href="javascript:;">{Number(YearArr[0]) - 1}</a>
            </li>)
        );
        for (let i = 0; i < YearArr.length; i++) {
            let Years = (<li className={`${Number(selectYear) == Number(YearArr[(i)]) ? 'active' : ''}
                                           ${(maxValue && (moment(maxValue).format('YYYY') < Number(YearArr[(i)]))) || (minValue && (moment(minValue).format('YYYY') > Number(YearArr[(i)]))) ? 'item-gray' : 'current-years'}`}
                             key={'current' + i}
                             onClick={() => {
                                 if ((maxValue && (moment(maxValue).format('YYYY') < Number(YearArr[(i)]))) || (minValue && (moment(minValue).format('YYYY') > Number(YearArr[(i)])))) {
                                     return;
                                 } else {
                                     selectDate(YearArr[(i)]);
                                 }
                             }}>
                <a href="javascript:;">
                    {YearArr[i]}
                    <TouchRipple/>
                </a>
            </li>);
            current_years.push(Years);
        }
        next_years.push(
            (<li className="item-gray" key={Number(YearArr[YearArr.length - 1]) + 1}>
                <a href="javascript:;">{Number(YearArr[YearArr.length - 1]) + 1}</a>
            </li>)
        );
        total_years = previous_years.concat(current_years, next_years);
        if (total_years.length > 0) {
            for (let i = 0; i < this.defaultTable.row_number; i++) {
                let li_list = [],
                    start_index = i * this.defaultTable.col_number,
                    end_index = (i + 1) * this.defaultTable.col_number;
                for (let j = start_index; j < end_index; j++) {
                    li_list.push(total_years[j]);
                }
                ul_list.push(li_list);
            }
        }
        selectYear = selectYear.toString();
        let yearRangeEnd = selectYear.substr(0, selectYear.length - 1) + '9';
        let yearRangeStart = selectYear.substr(0, selectYear.length - 1) + '1';

        let leftNextYear = maxValue && (moment(maxValue).format('YYYY') <= +yearRangeEnd) ? true : false;

        let rightPreYear = minValue && (moment(minValue).format('YYYY') >= +yearRangeStart) ? true : false;

        return (
            <div className={'calendar'}>
                <div className="calendar-header">
                    {
                        rightPreYear ?
                            null
                            :
                            <i className="fas fa-angle-double-left" onClick={previousYear}>
                                <TouchRipple/>
                            </i>
                    }

                    <span>{YearArr[0]}-{YearArr[YearArr.length - 1]}</span>
                    {
                        leftNextYear ?
                            null :
                            <i className="fas fa-angle-double-right" onClick={nextYear}>
                                <TouchRipple/>
                            </i>
                    }

                </div>
                <div className="calendar-body calendar-year-body">
                    <div className="c-body-content">
                        {
                            ul_list && ul_list.map((item, key) =>
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