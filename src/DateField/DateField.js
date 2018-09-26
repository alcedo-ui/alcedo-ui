/**
 * @file DatePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';

import DayPicker from '../_DayPicker';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';

import FlatButton from '../FlatButton';

import Theme from '../Theme';

class DateField extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        const defaultValue = props.value ? props.value : moment().format('YYYY-MM-DD');

        this.state = {
            value: props.value,
            year: moment(defaultValue).format('YYYY'),
            month: moment(defaultValue).format('MM'),
            day: moment(defaultValue).format('DD'),
            datePickerLevel: 'day'
        };

    }

    datePickerChangeHandle = selectLevel => {
        this.setState({
            datePickerLevel: selectLevel
        });
    };

    dayPickerChangeHandle = date => {
        const {dateFormat, onChange} = this.props;
        let state = cloneDeep(this.state);
        state.value = moment(date.time, dateFormat);
        state.year = date.year;
        state.month = date.month;
        state.day = date.day;

        !this.props.disabled && this.setState(state, () => {
            onChange(moment(date.time).format(dateFormat));
        });

    };

    monthPickerChangeHandle = date => {
        this.setState({
            datePickerLevel: 'day',
            year: date.year,
            month: date.month
        });
    };

    yearPickerChangeHandle = year => {
        this.setState({
            datePickerLevel: 'month',
            year: year
        });
    };

    todayHandle = () => {
        const {dateFormat, onChange} = this.props;
        const year = moment().format('YYYY'),
            month = moment().format('MM'),
            day = moment().format('DD');
        let timer = moment(moment(), dateFormat);
        this.setState({
            value: timer,
            year: year,
            month: month,
            day: day
        }, () => {
            !this.props.disabled && onChange(value && moment(value).format(this.props.dateFormat));
        });
    };

    componentDidMount() {
        // debugger
        const {value, dateFormat} = this.props;
        let state = cloneDeep(this.state);
        if (value) {
            // debugger
            if (moment(value, dateFormat).isValid()) {
                const year = moment(value).format('YYYY'),
                    month = moment(value).format('MM'),
                    day = moment(value).format('DD');
                state.value = moment(value, dateFormat);
                state.year = year;
                state.month = month;
                state.day = day;
                this.setState(state);
            } else {
                console.error('Invalid date');
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value && nextProps.value !== this.props.value || nextProps.dateFormat !== this.props.dateFormat) {
            this.setState({
                value: moment(nextProps.value, nextProps.dateFormat),
                dateFormat: nextProps.dateFormat,
                year: moment(nextProps.value).format('YYYY'),
                month: moment(nextProps.value).format('MM'),
                day: moment(nextProps.value).format('DD')
            });
        }
    }

    render() {

        const {
                className, dateFormat, maxValue, minValue, isFooter, previousYearIconCls, previousMonthIconCls,
                nextYearIconCls, nextMonthIconCls
            } = this.props,
            {value, datePickerLevel, year, month, day} = this.state,

            pickerClassName = classNames('date-field', {
                [className]: className
            });

        return (
            <div ref="datePicker"
                 className={pickerClassName}>
                {
                    datePickerLevel == 'day' ?
                        <DayPicker
                            value={value}
                            dateFormat={dateFormat}
                            year={year}
                            month={month}
                            day={day}
                            maxValue={maxValue}
                            minValue={minValue}
                            isFooter={isFooter}
                            previousYearIconCls={previousYearIconCls}
                            previousMonthIconCls={previousMonthIconCls}
                            nextYearIconCls={nextYearIconCls}
                            nextMonthIconCls={nextMonthIconCls}
                            onChange={this.dayPickerChangeHandle}
                            previousClick={this.datePickerChangeHandle}/>
                        :
                        datePickerLevel == 'month' ?
                            <MonthPicker
                                value={value}
                                year={year}
                                month={month}
                                day={day}
                                maxValue={maxValue}
                                minValue={minValue}
                                previousYearIconCls={previousYearIconCls}
                                previousMonthIconCls={previousMonthIconCls}
                                nextYearIconCls={nextYearIconCls}
                                nextMonthIconCls={nextMonthIconCls}
                                onChange={this.monthPickerChangeHandle}
                                previousClick={this.datePickerChangeHandle}/>
                            :
                            <YearPicker
                                value={value}
                                year={year}
                                month={month}
                                day={day}
                                maxValue={maxValue}
                                minValue={minValue}
                                previousYearIconCls={previousYearIconCls}
                                previousMonthIconCls={previousMonthIconCls}
                                nextYearIconCls={nextYearIconCls}
                                nextMonthIconCls={nextMonthIconCls}
                                onChange={this.yearPickerChangeHandle}/>

                }

                {
                    isFooter && datePickerLevel == 'day' ?
                        <div className="calendar-footer">
                            {
                                (minValue && moment(this.props.value).isBefore(minValue))
                                || (maxValue && moment(maxValue).isBefore(this.props.value)) ?
                                    <a href="javascript:void(0);">
                                        <span className="item-gray">Today</span>
                                    </a>
                                    :
                                    <FlatButton className='today-button'
                                                value={'Today'}
                                                onClick={this.todayHandle}/>
                            }
                        </div>
                        :
                        null
                }
            </div>
        );
    }
}

DateField.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * This is the initial date value of the component.
     */
    value: PropTypes.any,

    /**
     * The ending of a range of valid dates. The range includes the endDate.
     */
    maxValue: PropTypes.any,

    /**
     * The beginning of a range of valid dates. The range includes the startDate.
     */
    minValue: PropTypes.any,

    /**
     * Date format.
     */
    dateFormat: PropTypes.string,

    /**
     * Callback function that is fired when the date value changes.
     */
    onChange: PropTypes.func

};

DateField.defaultProps = {
    maxValue: '',
    minValue: '',
    dateFormat: 'YYYY-MM-DD',
    previousYearIconCls: 'fas fa-angle-double-left',
    previousMonthIconCls: 'fas fa-angle-left',
    nextYearIconCls: 'fas fa-angle-double-right',
    nextMonthIconCls: 'fas fa-angle-right',
    isFooter: false
};

export default DateField;