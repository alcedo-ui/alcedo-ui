/**
 * @file MaterialDatePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';

import DatePickerTextField from '../_MaterialDatePickerTextField';
import DayPicker from '../_DayPicker';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';
import Popup from '../Popup';

import Theme from '../Theme';
import Position from '../_statics/Position';

import DropdownCalculation from '../_vendors/DropdownCalculation';
import Util from '../_vendors/Util';

class MaterialDatePicker extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.validValue = true;
        this.trigger = createRef();
        this.triggerEl = null;

        const defaultValue = props.value ? props.value : moment().format('YYYY-MM-DD');
        this.state = {
            value: props.value,
            popupVisible: false,
            isAbove: false,
            year: moment(defaultValue).format('YYYY'),
            month: moment(defaultValue).format('MM'),
            day: moment(defaultValue).format('DD'),
            datePickerLevel: 'day',
            marginLeft: 0
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

                } else {
                    const year = moment(text).format('YYYY'),
                        month = moment(text).format('MM'),
                        day = moment(text).format('DD');
                    !this.props.disabled && this.setState({
                        value: moment(text, dateFormat),
                        year: year,
                        month: month,
                        day: day
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
        let state = cloneDeep(this.state);
        state.value = moment(date.time, dateFormat);
        state.year = date.year;
        state.month = date.month;
        state.day = date.day;
        state.popupVisible = !autoClose;
        !this.props.disabled && this.setState(state, () => {
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
        const year = moment().format('YYYY'),
            month = moment().format('MM'),
            day = moment().format('DD');
        let timer = moment(moment(), dateFormat);
        !this.props.disabled && this.setState({
            value: timer,
            year: year,
            month: month,
            day: day
        }, () => {
            this.props.onChange && this.props.onChange(moment(timer).format(dateFormat));
        });
    };

    togglePopup = e => {
        if (this.validValue) {
            this.setState({
                popupVisible: !this.state.popupVisible
            });
        }
    };

    closePopup = () => {
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

        // debugger
        const {value, dateFormat} = this.props;
        this.validValueFormat(value, dateFormat);

        this.triggerEl = this.trigger && this.trigger.current && findDOMNode(this.trigger.current);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.value !== this.props.value || prevProps.dateFormat !== this.props.dateFormat) {
            this.validValueFormat(this.props.value, this.props.dateFormat);
        }
    }

    render() {

        const {
                popupChildren, className, name, placeholder, dateFormat, maxValue, minValue, label,
                isLabelAnimate, isFooter, position, theme, popupClassName, rightIconCls, previousYearIconCls,
                previousMonthIconCls, nextYearIconCls, nextMonthIconCls, readOnly, disabled, parentEl
            } = this.props,
            {value, popupVisible, datePickerLevel, year, month, day, isAbove} = this.state,
            textValue = value && moment(value).format(dateFormat);

        return (
            <div className={classNames('material-date-picker', {
                activated: popupVisible,
                [className]: className
            })}>

                <DatePickerTextField ref={this.trigger}
                                     name={name}
                                     placeholder={placeholder}
                                     value={textValue}
                                     theme={theme}
                                     readOnly={readOnly ? readOnly : !popupVisible}
                                     disabled={disabled}
                                     clearButtonVisible={false}
                                     isFocusedSelectAll={false}
                                     popupVisible={popupVisible}
                                     label={label}
                                     isLabelAnimate={isLabelAnimate}
                                     rightIconCls={rightIconCls}
                                     onChange={this.handleTextFieldChange}
                                     onClick={e => this.togglePopup(e)}/>

                <Popup className={`material-date-picker-popup ${popupClassName}`}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       parentEl={parentEl}
                       position={position ? position : (isAbove ? Position.TOP_LEFT : Position.BOTTOM_LEFT)}
                       hasTriangle={false}
                       onRender={this.handlePopupRender}
                       onRequestClose={this.closePopup}>

                    {
                        datePickerLevel == 'day' ?
                            <DayPicker value={value}
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
                            : (
                                datePickerLevel == 'month' ?
                                    <MonthPicker value={value}
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
                                    <YearPicker value={value}
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
                            )
                    }

                    {
                        isFooter && datePickerLevel == 'day' ?
                            <div className="calendar-footer">
                                {
                                    (minValue && moment(this.props.value).isBefore(minValue))
                                    || (maxValue && moment(maxValue).isBefore(this.props.value)) ?
                                        <a href="javascript:;">
                                            <span className="item-gray">Today</span>
                                        </a>
                                        :
                                        <a href="javascript:void(0);"
                                           onClick={this.handleToday}>
                                            Today
                                        </a>
                                }
                            </div>
                            :
                            null
                    }

                    {popupChildren}

                </Popup>
            </div>
        );
    }
}

MaterialDatePicker.propTypes = {

    popupChildren: PropTypes.any,

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

    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

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
     * The animate of the date picker.
     */
    isLabelAnimate: PropTypes.bool,

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

    position: PropTypes.oneOf(Util.enumerateValue(Position)),
    isFooter: PropTypes.bool,
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

MaterialDatePicker.defaultProps = {
    name: '',
    maxValue: '',
    minValue: '',
    popupClassName: '',
    placeholder: 'Date',
    dateFormat: 'YYYY-MM-DD',
    isLabelAnimate: true,
    autoClose: true,
    isFooter: true,
    previousYearIconCls: 'fas fa-angle-double-left',
    previousMonthIconCls: 'fas fa-angle-left',
    nextYearIconCls: 'fas fa-angle-double-right',
    nextMonthIconCls: 'fas fa-angle-right',
    position: Position.BOTTOM_LEFT,
    readOnly: false,
    disabled: false
};

export default MaterialDatePicker;
