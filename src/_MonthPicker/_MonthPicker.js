/**
 * Created by Administrator on 2017/3/7.
 */
import React, {Component, PropTypes} from 'react';
import moment from 'moment';

import TouchRipple from '../TouchRipple';

export default class _MonthPicker extends Component {

    constructor(props) {

        super(props);
        this.defaultTable = {
            row_number: 4,
            col_number: 3
        }
        this.state = {
            timer: this.props.defaultValue,
            select_year: this.props.year,
            select_month: this.props.month,
            current_year: this.props.year,
            current_month: this.props.month,
            select_day: this.props.day,
            maxValue: this.props.maxValue,
            minValue: this.props.minValue

        }
        this.previousLevel = this::this.previousLevel;
        this.selectDate = this::this.selectDate;
        this.previousYear = this::this.previousYear;
        this.nextYear = this::this.nextYear;

    }

    previousLevel() {
        this.props.previousClick && this.props.previousClick(1)
    }

    selectDate(s_month) {
        let {select_year} = this.state;
        this.setState({
            history_year: select_year,
            history_month: s_month,
            select_month: s_month
        }, ()=> {
            this.props.onChange && this.props.onChange({year: select_year, month: s_month})
        });
    }

    previousYear() {
        let {current_year, current_month, select_year, select_month} = this.state;
        select_year = +select_year - 1;
        if (Number(current_year) === Number(select_year)) {
            select_month = current_month;
        } else {
            select_month = undefined;
        }
        this.setState({
            select_year: select_year,
            select_month: select_month
        })
    }

    nextYear() {
        let {current_year, current_month, select_year, select_month}=this.state;
        select_year = +select_year + 1;

        if (Number(current_year) === Number(select_year)) {
            select_month = current_month;
        } else {
            select_month = undefined;
        }
        this.setState({
            select_year: select_year,
            select_month: select_month
        })
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.maxValue !== this.props.maxValue || nextProps.minValue !== this.props.minValue || nextProps.year !== this.props.year || nextProps.month !== this.props.month) {
            this.setState({
                select_year: nextProps.year,
                select_month: nextProps.month,
                maxValue: nextProps.maxValue,
                minValue: nextProps.minValue
            });
        }
    }

    componentDidMount() {
        const {year, month, maxValue, minValue} = this.props;
        if ((year && year != '') && (month && month != '')) {
            this.setState({
                select_year: year,
                select_month: month,
                maxValue: maxValue,
                minValue: minValue
            })

        }
    }

    render() {

        const {className} = this.props;

        let {select_year, select_month, maxValue, minValue} = this.state;

        const {previousYear, nextYear, selectDate, previousLevel}=this;
        let current_months = [],
            ul_list = [];
        let MonthEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


        for (let i = 0; i < MonthEn.length; i++) {
            let Months = (<li className={`${Number(select_month) == (i + 1) ? 'active' : ''}
                                ${(maxValue && (moment(maxValue).format('YYYY') == select_year) && (+(moment(maxValue).format('MM'))) <= (i + 1)) ||
            (minValue && (moment(minValue).format('YYYY') == select_year) && (+(moment(minValue).format('MM'))) >= (i + 1)) ? 'item-gray' : 'current-years'}
                                `}
                              key={'current' + i}
                              onClick={()=> {
                                  if ((maxValue && (moment(maxValue).format('YYYY') == select_year) && (+(moment(maxValue).format('MM'))) <= (i + 1)) ||
                                      (minValue && (moment(minValue).format('YYYY') == select_year) && (+(moment(minValue).format('MM'))) >= (i + 1))) {
                                      return
                                  } else {
                                      selectDate(i + 1)
                                  }
                              }}>
                <a href="javascript:;">
                    {MonthEn[i]}
                    <TouchRipple/>
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
        select_year = select_year.toString();
        let leftNextYear = maxValue && (moment(maxValue).format('YYYY') <= +select_year) ? true : false;

        let rightPreYear = minValue && (moment(minValue).format('YYYY') >= +select_year) ? true : false;

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

                    <span onClick={previousLevel}>{select_year}</span>
                    {
                        leftNextYear ?
                            null :
                            <i className="fa fa-angle-double-right" onClick={nextYear}>
                                <TouchRipple/>
                            </i>
                    }

                </div>
                <div className="calendar-body  calendar-month-body">
                    <div className="c-body-content">
                        {
                            ul_list.map((item, key) => {
                                return (<ul key={'ul' + key} className="content-row month">{item}</ul>);
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
};

_MonthPicker.propTypes = {

    timer: PropTypes.object,
    select_year: PropTypes.string || PropTypes.number,
    select_month: PropTypes.string || PropTypes.number,
    current_year: PropTypes.string || PropTypes.number,
    current_month: PropTypes.string || PropTypes.number,

    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string,

    // timestamp
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
    placeholder: PropTypes.string,
    dateFormat: PropTypes.string

};
