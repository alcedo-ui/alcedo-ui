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
import ComponentUtil from '../_vendors/ComponentUtil';

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

    handleDatePickerChange = selectLevel => {
        this.setState({
            datePickerLevel: selectLevel
        });
    };

    handleDayPickerChange = date => {

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
            !this.props.disabled && onChange(timer && moment(timer).format(this.props.dateFormat));
        });
    };

    validValueFormat = (value, dateFormat) => {
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
                this.validValue = false;
                console.error('Invalid date');
            }
        } else {
            state.value = '';
            state.year = moment(this.defaultValue).format('YYYY');
            state.month = moment(this.defaultValue).format('MM');
            state.day = moment(this.defaultValue).format('DD');
            this.setState(state);
        }
    };

    componentDidMount() {
        const {value, dateFormat} = this.props;
        this.validValueFormat(value, dateFormat);
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
                            onChange={this.handleDayPickerChange}
                            previousClick={this.handleDatePickerChange}/>
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
                    isFooter && datePickerLevel == 'day' ?
                        <div className="calendar-footer">
                            {
                                (minValue && moment(this.props.value).isBefore(minValue))
                                || (maxValue && moment(maxValue).isBefore(this.props.value)) ?
                                    <span className="date-text">
                                        <span className="item-gray">Today</span>
                                    </span>
                                    :
                                    <FlatButton className='today-button'
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
