/**
 * @file MaterialDatePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
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

class MaterialDatePicker extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.validValue = true;
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

    datePickerChangeHandle = selectLevel => {
        this.setState({
            datePickerLevel: selectLevel
        });
    };

    textFieldChangeHandle = text => {

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

    dayPickerChangeHandle = date => {
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

    popupRenderHandler = popupEl => {

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

        this.datePicker = this.refs.datePicker;
        this.triggerEl = findDOMNode(this.refs.trigger);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value || nextProps.dateFormat !== this.props.dateFormat) {
            this.validValueFormat(nextProps.value, nextProps.dateFormat);
        }
    }

    render() {

        const {
                className, name, placeholder, dateFormat, maxValue, minValue, label, isLabelAnimate, isFooter, position,
                theme, popupClassName, rightIconCls, previousYearIconCls, previousMonthIconCls, nextYearIconCls,
                nextMonthIconCls, readOnly, disabled
            } = this.props,
            {value, popupVisible, datePickerLevel, year, month, day, isAbove} = this.state,

            pickerClassName = classNames('material-date-picker', {
                activated: popupVisible,
                [className]: className
            }),

            textValue = value && moment(value).format(dateFormat);

        return (
            <div ref="datePicker"
                 className={pickerClassName}>

                <DatePickerTextField ref="trigger"
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
                                     onChange={this.textFieldChangeHandle}
                                     onClick={e => this.togglePopup(e)}/>

                <Popup className={`material-date-picker-popup ${popupClassName}`}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       position={position ? position : (isAbove ? Position.TOP_LEFT : Position.BOTTOM_LEFT)}
                       hasTriangle={false}
                       onRender={this.popupRenderHandler}
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
                                       onChange={this.dayPickerChangeHandle}
                                       previousClick={this.datePickerChangeHandle}/>
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
                                                 onChange={this.monthPickerChangeHandle}
                                                 previousClick={this.datePickerChangeHandle}/>
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
                                                onChange={this.yearPickerChangeHandle}/>
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
                                           onClick={this.todayHandle}>
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
}

MaterialDatePicker.propTypes = {

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