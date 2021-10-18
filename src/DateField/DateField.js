/**
 * @file DatePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import DayPicker from '../_DayPicker';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';
import FlatButton from '../FlatButton';

import Theme from '../Theme';
import ComponentUtil from '../_vendors/ComponentUtil';

class DateField extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        const defaultValue = props.value ?
            props.value
            :
            props.minValue ?
                props.minValue
                :
                moment().format('YYYY-MM-DD');
        this.state = {
            value: props.value,
            year: moment(defaultValue).format('YYYY'),
            month: moment(defaultValue).format('MM'),
            day: moment(defaultValue).format('DD'),
            datePickerLevel: 'day'
        };

    }

    handleDatePickerChange = selectLevel => {
        this.setState({
            datePickerLevel: selectLevel
        });
    };

    handleDayPickerChange = date => {

        const {dateFormat, onChange} = this.props;

        !this.props.disabled && this.setState({
            value: moment(date.time, dateFormat),
            year: date.year,
            month: date.month,
            day: date.day
        }, () => {
            onChange(moment(date.time).format(dateFormat));
        });

    };

    handleMonthPickerChange = date => {
        this.setState({
            datePickerLevel: 'day',
            year: date.year,
            month: date.month
        });
    };

    handleYearPickerChange = year => {
        this.setState({
            datePickerLevel: 'month',
            year: year
        });
    };

    handleToday = () => {
        const {dateFormat} = this.props;
        !this.props.disabled && this.setState({
            value: moment(moment(), dateFormat),
            year: moment().format('YYYY'),
            month: moment().format('MM'),
            day: moment().format('DD')
        }, () => {
            this.props.onChange && this.props.onChange(moment(moment(), dateFormat));
        });
    };

    validValueFormat = (value, minValue, dateFormat) => {
        if (value) {
            // debugger
            if (moment(value, dateFormat).isValid()) {
                this.setState({
                    value: moment(value, dateFormat),
                    year: moment(value).format('YYYY'),
                    month: moment(value).format('MM'),
                    day: moment(value).format('DD')
                });
            } else {
                console.error('Invalid date');
            }
        } else {
            const defaultValue = minValue ?
                minValue
                :
                moment().format('YYYY-MM-DD');
            this.setState({
                value: '',
                year: moment(defaultValue).format('YYYY'),
                month: moment(defaultValue).format('MM'),
                day: moment(defaultValue).format('DD')
            });
        }
    };

    componentDidMount() {
        const {value, minValue, dateFormat} = this.props;
        this.validValueFormat(value, minValue, dateFormat);
    }


    static getDerivedStateFromProps(props, state) {

        const value = ComponentUtil.getDerivedState(props, state, 'value'),
            dateFormat = ComponentUtil.getDerivedState(props, state, 'dateFormat');

        return {
            prevProps: props,
            dateFormat,
            value
        };
    }

    render() {

        const {
                className, dateFormat, maxValue, minValue, isFooter,
                previousYearIconCls, previousMonthIconCls, nextYearIconCls, nextMonthIconCls
            } = this.props,
            {value, datePickerLevel, year, month, day} = this.state;

        return (
            <div className={classNames('date-field', {
                [className]: className
            })}>
                {
                    datePickerLevel === 'day' ?
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
                            onChange={this.handleDayPickerChange}
                            previousClick={this.handleDatePickerChange}/>
                        :
                        datePickerLevel === 'month' ?
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
                                onChange={this.handleMonthPickerChange}
                                previousClick={this.handleDatePickerChange}/>
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
                                onChange={this.handleYearPickerChange}/>

                }

                {
                    isFooter && datePickerLevel === 'day' ?
                        <div className="calendar-footer">
                            {
                                (minValue && moment(this.props.value).isBefore(minValue))
                                || (maxValue && moment(maxValue).isBefore(this.props.value)) ?
                                    <span className="date-text">
                                        <span className="item-gray">Today</span>
                                    </span>
                                    :
                                    <FlatButton className="today-button"
                                                value={'Today'}
                                                onClick={this.handleToday}/>
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

    disabled: PropTypes.bool,
    isFooter: PropTypes.bool,
    previousYearIconCls: PropTypes.string,
    previousMonthIconCls: PropTypes.string,
    nextYearIconCls: PropTypes.string,
    nextMonthIconCls: PropTypes.string,

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
