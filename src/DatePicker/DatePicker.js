/**
 * @file DatePicker component
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import moment from 'moment';
import classNames from 'classnames';

import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';
import DropdownCalculation from '../_vendors/DropdownCalculation';

import TextField from '../_DatePickerTextField';
import DayPicker from '../_DayPicker';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';
import Popup from '../Popup';
import FlatButton from '../FlatButton';

import Theme from '../Theme';
import Position from '../_statics/Position';

class DatePicker extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.validValue = true;
        this.trigger = createRef();
        this.triggerEl = null;

        const defaultValue = props.value ?
            props.value
            :
            props.minValue ?
                props.minValue
                :
                moment().format('YYYY-MM-DD');

        this.state = {
            value: props.value,
            minValue: props.minValue,
            popupVisible: false,
            isAbove: false,
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

    handleTextFieldChange = text => {
        const {minValue, maxValue, dateFormat} = this.props;
        if (text && text.length) {
            const flag = moment(text, this.props.dateFormat, true).isValid();
            if (flag) {
                if (minValue && moment(text).isBefore(minValue) || maxValue && moment(text).isAfter(maxValue)) {
                    return;
                } else {

                    !this.props.disabled && this.setState({
                        value: moment(text, dateFormat),
                        year: moment(text).format('YYYY'),
                        month: moment(text).format('MM'),
                        day: moment(text).format('DD')
                    }, () => {
                        this.props.onChange && this.props.onChange(moment(text).format(dateFormat));
                    });
                }
            }
        } else {
            this.setState({
                value: ''
            });
        }
    };

    handleDayPickerChange = date => {
        const {autoClose, dateFormat} = this.props;

        !this.props.disabled && this.setState({
            value: moment(date.time, dateFormat),
            year: date.year,
            month: date.month,
            day: date.day,
            popupVisible: !autoClose
        }, () => {
            this.props.onChange && this.props.onChange(moment(date.time).format(dateFormat));
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

    togglePopup = () => {
        if (this.validValue) {
            this.setState({
                popupVisible: !this.state.popupVisible
            });
        }
    };

    openPopup = () => {
        // debugger
        !this.props.disabled && this.setState({
            popupVisible: true
        });
    };

    closePopup = () => {
        // debugger
        !this.props.disabled && this.setState({
            popupVisible: false
        });
    };

    handlePopupRender = popupEl => {

        if (this.props.position) {
            return;
        }

        const isAbove = DropdownCalculation.isAbove(this.dropdownEl, this.triggerEl, findDOMNode(popupEl));
        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

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
                this.validValue = false;
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

        this.triggerEl = this.trigger && this.trigger.current && findDOMNode(this.trigger.current);

        const {value, minValue, dateFormat} = this.props;
        this.validValueFormat(value, minValue, dateFormat);
    }

    static getDerivedStateFromProps(props, state) {

        const value = ComponentUtil.getDerivedState(props, state, 'value'),
            minValue = ComponentUtil.getDerivedState(props, state, 'minValue'),
            dateFormat = ComponentUtil.getDerivedState(props, state, 'dateFormat');


        return {
            prevProps: props,
            dateFormat,
            value,
            year: props?.value !== state?.prevProps?.value || props?.minValue !== state?.prevProps?.minValue ?
                value ?
                    moment(value).format('YYYY')
                    :
                    minValue ?
                        moment(minValue).format('YYYY')
                        :
                        moment().format('YYYY')
                :
                state.year,
            month: props?.value !== state?.prevProps?.value || props?.minValue !== state?.prevProps?.minValue ?
                value ?
                    moment(value).format('MM')
                    :
                    minValue ?
                        moment(minValue).format('MM')
                        :
                        moment().format('MM')
                :
                state.month,
            day: props?.value !== state?.prevProps?.value || props?.minValue !== state?.prevProps?.minValue ?
                value ?
                    moment(value).format('DD')
                    :
                    minValue ?
                        moment(minValue).format('DD')
                        :
                        moment().format('DD')
                :
                state.day
        };
    }


    render() {

        const {
                className, name, placeholder, dateFormat, maxValue, minValue, isFooter, position,
                popupClassName, rightIconCls, previousYearIconCls, previousMonthIconCls, nextYearIconCls,
                nextMonthIconCls, readOnly, disabled, parentEl
            } = this.props,
            {value, popupVisible, datePickerLevel, year, month, day, isAbove} = this.state,
            textValue = value && moment(value).format(dateFormat);

        return (
            <div className={classNames('date-picker', {
                activated: popupVisible,
                [className]: className
            })}>

                <TextField className="date-picker-field"
                           ref={this.trigger}
                           name={name}
                           placeholder={placeholder}
                           value={textValue}
                           rightIconCls={rightIconCls}
                           readOnly={readOnly ? readOnly : !popupVisible}
                           popupVisible={popupVisible}
                           disabled={disabled}
                           clearButtonVisible={false}
                           isFocusedSelectAll={popupVisible}
                           onClick={e => this.togglePopup(e)}
                           onChange={this.handleTextFieldChange}/>

                <Popup className={`date-picker-popup ${popupClassName}`}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       parentEl={parentEl}
                       hasTriangle={false}
                       position={position ? position : (isAbove ? Position.TOP_LEFT : Position.BOTTOM_LEFT)}
                       onRender={this.handlePopupRender}
                       onRequestClose={this.closePopup}>

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

                </Popup>
            </div>
        );
    }
}

DatePicker.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the popup element.
     */
    popupClassName: PropTypes.string,

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
     * If true,datePicker textField is readOnly.
     */
    readOnly: PropTypes.bool,

    /**
     * If true,datePicker textField is disabled.
     */
    disabled: PropTypes.bool,

    isFooter: PropTypes.bool,
    position: PropTypes.oneOf(Util.enumerateValue(Position)),
    rightIconCls: PropTypes.string,
    previousYearIconCls: PropTypes.string,
    previousMonthIconCls: PropTypes.string,
    nextYearIconCls: PropTypes.string,
    nextMonthIconCls: PropTypes.string,
    parentEl: PropTypes.object,

    /**
     * Callback function that is fired when the date value changes.
     */
    onChange: PropTypes.func

};

DatePicker.defaultProps = {
    name: '',
    maxValue: '',
    minValue: '',
    placeholder: 'Date',
    popupClassName: '',
    dateFormat: 'YYYY-MM-DD',
    previousYearIconCls: 'fas fa-angle-double-left',
    previousMonthIconCls: 'fas fa-angle-left',
    nextYearIconCls: 'fas fa-angle-double-right',
    nextMonthIconCls: 'fas fa-angle-right',
    autoClose: true,
    isFooter: true,
    readOnly: false,
    disabled: false
};

export default DatePicker;
