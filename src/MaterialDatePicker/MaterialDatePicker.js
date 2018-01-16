/**
 * @file DatePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';

import MaterialDatePickerTextField from '../MaterialDatePickerTextField';
import DayPicker from '../_DayPicker';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';
import Popup from '../Popup';

import Theme from '../Theme';

export default class MaterialDatePicker extends Component {
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.validValue = true;
        this.state = {
            value: props.value,
            popupVisible: false,
            year: moment(props.value).format('YYYY'),
            month: moment(props.value).format('MM'),
            day: moment(props.value).format('DD'),
            datePickerLevel: 'day',
            marginLeft: 0
        };

        this.textFieldChangeHandle = ::this.textFieldChangeHandle;
        this.togglePopup = ::this.togglePopup;
        this.closePopup = ::this.closePopup;
        this.datePickerChangeHandle = ::this.datePickerChangeHandle;
        this.yearPickerChangeHandle = ::this.yearPickerChangeHandle;
        this.monthPickerChangeHandle = ::this.monthPickerChangeHandle;
        this.dayPickerChangeHandle = ::this.dayPickerChangeHandle;
        this.todayHandle = ::this.todayHandle;

    }

    datePickerChangeHandle(selectLevel) {
        this.setState({
            datePickerLevel: selectLevel
        });
    }

    textFieldChangeHandle(text) {
        const {minValue, maxValue, dateFormat} = this.props;
        if (text && text.length) {
            const flag = moment(text, this.props.dateFormat, true).isValid();
            if (flag) {
                if (minValue && moment(text).isBefore(minValue) || maxValue && moment(text).isAfter(maxValue)) {

                } else {
                    const year = moment(text).format('YYYY'),
                        month = moment(text).format('MM'),
                        day = moment(text).format('DD');
                    this.setState({
                        value: moment(text, dateFormat),
                        year: year,
                        month: month,
                        day: day
                    });
                }
            } else {

            }
        } else {
            this.setState({
                value: ''
            });
        }
    }

    dayPickerChangeHandle(date) {
        const {autoClose, dateFormat} = this.props;
        let state = _.cloneDeep(this.state);
        state.value = moment(date.time, dateFormat);
        state.year = date.year;
        state.month = date.month;
        state.day = date.day;
        state.popupVisible = !autoClose;
        if (state.popupVisible) {
            this.setState(state);
        } else {
            !this.props.disabled && this.setState(state, () => {
                this.props.onChange && this.props.onChange(moment(date.time).format(dateFormat));
            });
        }
    }

    monthPickerChangeHandle(date) {
        this.setState({
            datePickerLevel: 'day',
            year: date.year,
            month: date.month
        });
    }

    yearPickerChangeHandle(year) {
        this.setState({
            datePickerLevel: 'month',
            year: year
        });
    }

    todayHandle() {
        const {dateFormat} = this.props;
        const year = moment().format('YYYY'),
            month = moment().format('MM'),
            day = moment().format('DD');
        let timer = moment(moment(), dateFormat);
        this.setState({
            value: timer,
            year: year,
            month: month,
            day: day
        });
    }

    togglePopup(e) {
        if (this.validValue) {
            this.setState({
                popupVisible: !this.state.popupVisible,
                triggerEl: e.target
            });
        }
    }

    closePopup() {
        const {value} = this.state;
        !this.props.disabled && this.setState({
            popupVisible: false
        }, () => {
            this.props.onChange && this.props.onChange(value && moment(value).format(this.props.dateFormat));
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value || nextProps.dateFormat !== this.props.dateFormat) {
            this.setState({
                value: moment(nextProps.value, nextProps.dateFormat),
                dateFormat: nextProps.dateFormat,
                year: moment(nextProps.value).format('YYYY'),
                month: moment(nextProps.value).format('MM'),
                day: moment(nextProps.value).format('DD')
            });
        }
    }

    componentDidMount() {
        // debugger
        const {value, dateFormat} = this.props;
        let state = _.cloneDeep(this.state);
        if (value) {
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
        }
    }

    render() {

        const {className, name, placeholder, dateFormat, maxValue, minValue, label, isFooter} = this.props,
            {value, popupVisible, datePickerLevel, year, month, day, triggerEl, isHover, isFocus} = this.state;
        let textValue = value && moment(value).format(dateFormat);

        return (
            <div className={`date-picker ${className}`}
                 ref="datePicker">
                <MaterialDatePickerTextField
                    ref="datePickerInput"
                    name={name}
                    placeholder={placeholder}
                    value={textValue}
                    iconCls="fa fa-calendar"
                    readOnly={!popupVisible}
                    clearButtonVisible={false}
                    popupVisible={popupVisible}
                    label={label}
                    isLabelAnimate={false}
                    onChange={this.textFieldChangeHandle}
                    onTouchTap={e => {
                        this.togglePopup(e);
                    }}/>
                <Popup className={`material-date-picker-popup`}
                       visible={popupVisible}
                       triggerEl={triggerEl}
                       hasTriangle={false}
                       onRequestClose={() => {
                           this.closePopup(3);
                       }}>
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
                                onChange={this.dayPickerChangeHandle}
                                previousClick={this.datePickerChangeHandle}/>
                            : (
                            datePickerLevel == 'month' ?
                                <MonthPicker
                                    value={value}
                                    year={year}
                                    month={month}
                                    day={day}
                                    maxValue={maxValue}
                                    minValue={minValue}
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
                                    onChange={this.yearPickerChangeHandle}/>
                        )
                    }
                    {
                        isFooter && datePickerLevel == 'day' ?
                            <div className="calendar-footer">
                                {
                                    (minValue && moment(this.props.value).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(this.props.value)) ?
                                        <a href="javascript:;">
                                            <span className="item-gray">Today</span>
                                        </a>
                                        :
                                        <a href="javascript:;" onClick={this.todayHandle}>
                                            Today
                                        </a>
                                }

                            </div>
                            :
                            null
                    }
                </Popup>
            </div>
        );
    }
};

MaterialDatePicker.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Date picker input name.
     */
    name: PropTypes.string,

    /**
     * This is the initial date value of the component.
     */
    value: PropTypes.any,

    /**
     * The label of the date picker.
     */
    label: PropTypes.any,

    /**
     * The ending of a range of valid dates. The range includes the endDate.
     */
    maxValue: PropTypes.any,

    /**
     * The beginning of a range of valid dates. The range includes the startDate.
     */
    minValue: PropTypes.any,

    /**
     * DatePicker textField element placeholder.
     */
    placeholder: PropTypes.string,

    /**
     * Date format.
     */
    dateFormat: PropTypes.string,

    /**
     * If true,hide date display.
     */
    autoClose: PropTypes.bool,

    /**
     * Callback function that is fired when the date value changes.
     */
    onChange: PropTypes.func

};

MaterialDatePicker.defaultProps = {
    className: '',
    style: null,
    name: '',
    maxValue: '',
    minValue: '',
    placeholder: 'Date',
    dateFormat: 'YYYY-MM-DD',
    autoClose: true,
    isFooter: true
};