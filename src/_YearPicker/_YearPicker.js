/**
 * Created by Administrator on 2017/3/7.
 */
import React, {Component, PropTypes} from 'react';
import moment from 'moment';

import TouchRipple from '../TouchRipple';

export default class _YearPicker extends Component {

    constructor(props) {

        super(props);
        this.defaultTable = {
            row_number: 4,
            col_number: 3
        }
        this.state = {
            timer: this.props.defaultValue,
            YearArr: this.getYearArr(this.props.year),
            select_year: this.props.year,
            current_year: this.props.year,
            select_month: this.props.month,
            select_day: this.props.day,
            maxValue: this.props.maxValue,
            minValue: this.props.minValue
        }

        this.selectDate = this::this.selectDate;
        this.previousYear = this::this.previousYear;
        this.nextYear = this::this.nextYear;

    }

    selectDate(s_year) {
        this.setState({
            history_year: s_year,
            select_year: s_year
        }, ()=> {
            this.props.onChange && this.props.onChange(s_year);
        });
    }

    previousYear() {
        let {select_year} = this.state;
        select_year = +select_year - 10;
        this.setState({
            YearArr: this.getYearArr(select_year),
            select_year: select_year
        })
    }

    nextYear() {
        let {select_year}=this.state;
        select_year = +select_year + 10;
        this.setState({
            YearArr: this.getYearArr(select_year),
            select_year: select_year
        })
    }

    getYearArr(num) {
        let yearString = num.toString();
        yearString = yearString.substr(0, yearString.length - 1);
        let YearArr = [];
        for (let i = 0; i < 10; i++) {
            YearArr.push(yearString + i)
        }
        return YearArr
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.maxValue !== this.props.maxValue || nextProps.minValue !== this.props.minValue || nextProps.year !== this.props.year) {
            this.setState({
                select_year: nextProps.year,
                YearArr: this.getYearArr(nextProps.year),
                maxValue: nextProps.maxValue,
                minValue: nextProps.minValue
            });
        }
    }

    componentDidMount() {
        const {year, maxValue, minValue} = this.props;
        if (year && year != '') {
            this.setState({
                YearArr: this.getYearArr(year),
                select_year: year,
                maxValue: maxValue,
                minValue: minValue
            })
        }
    }

    render() {

        const {className} = this.props;

        let {YearArr, select_year, maxValue, minValue} = this.state;

        const {previousYear, nextYear, selectDate}=this;
        let previous_years = [],
            current_years = [],
            next_years = [],
            total_days = [],
            ul_list = [];
        previous_years.push(
            (<li className="item-gray" key={Number(YearArr[0]) - 1}>
                <a href="javascript:;">{Number(YearArr[0]) - 1}</a>
            </li>)
        )
        for (let i = 0; i < YearArr.length; i++) {
            let Years = (<li className={`${Number(select_year) == Number(YearArr[(i)]) ? 'active' : ''}
                                           ${(maxValue && (moment(maxValue).format('YYYY') < Number(YearArr[(i)]))) || (minValue && (moment(minValue).format('YYYY') > Number(YearArr[(i)]))) ? 'item-gray' : 'current-years'}`}
                             key={'current' + i}
                             onClick={()=> {
                                 if ((maxValue && (moment(maxValue).format('YYYY') < Number(YearArr[(i)]))) || (minValue && (moment(minValue).format('YYYY') > Number(YearArr[(i)])))) {
                                     return
                                 } else {
                                     selectDate(YearArr[(i)])
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
        )
        total_days = previous_years.concat(current_years, next_years);
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
        select_year = select_year.toString();
        let yearRangeEnd = select_year.substr(0, select_year.length - 1) + '9';
        let yearRangeStart = select_year.substr(0, select_year.length - 1) + '1';

        let leftNextYear = maxValue && (moment(maxValue).format('YYYY') <= +yearRangeEnd) ? true : false;

        let rightPreYear = minValue && (moment(minValue).format('YYYY') >= +yearRangeStart) ? true : false;

        return (
            <div className={"calendar " + className}>
                <div className="calendar-header">
                    {
                        rightPreYear ?
                            null
                            :
                            <i className="fa fa-angle-double-left" onClick={previousYear}>
                                <TouchRipple/>
                            </i>
                    }

                    <span>{YearArr[0]}-{YearArr[YearArr.length - 1]}</span>
                    {
                        leftNextYear ?
                            null :
                            <i className="fa fa-angle-double-right" onClick={nextYear}>
                                <TouchRipple/>
                            </i>
                    }

                </div>
                <div className="calendar-body calendar-year-body">
                    <div className="c-body-content">
                        {
                            ul_list.map((item, key) => {
                                return (<ul key={'ul' + key} className="content-row year">{item}</ul>);
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
};

_YearPicker.propTypes = {

    select_year: PropTypes.string || PropTypes.number,
    current_year: PropTypes.string || PropTypes.number,
    YearArr: PropTypes.array,

    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string,

    // timestamp
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
    placeholder: PropTypes.string,
    dateFormat: PropTypes.string

};
