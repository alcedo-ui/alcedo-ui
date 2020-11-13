/**
 * @file MaterialDateRangePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';

import TextField from '../TextField';
import DatePickerTextField from '../_MaterialDatePickerTextField';
import DayPicker from '../_DayPicker';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';
import Popup from '../Popup';

import Theme from '../Theme';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import DateUtil from '../_vendors/DateUtil';
import DropdownCalculation from '../_vendors/DropdownCalculation';
import ComponentUtil from '../_vendors/ComponentUtil';

class MaterialDateRangePicker extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        const initValue = moment();
        this.validValue = true;
        this.trigger = createRef();
        this.triggerEl = null;

        let startTime = '',
            endTime = '';

        this.state = {
            value: props.value, // Moment object
            popupVisible: false,
            isAbove: false,
            left: {
                text: startTime,
                datePickerLevel: 'day',
                year: initValue.format('YYYY'),
                month: initValue.format('MM'),
                day: initValue.format('DD')
            },
            right: {
                text: endTime,
                datePickerLevel: 'day',
                year: initValue.format('MM') == 12 ? +(initValue.format('YYYY')) + 1 : initValue.format('YYYY'),
                month: initValue.format('MM') == 12 ? 1 : +(initValue.format('MM')) + 1,
                day: initValue.format('DD')
            },
            startTime: '',
            endTime: '',
            historyStartTime: '',
            historyEndTime: '',
            hoverTime: ''
        };

    }

    handleDatePickerChange = (select, selectLevel) => {
        let state = cloneDeep(this.state);
        state[select].datePickerLevel = selectLevel;
        this.setState(state);
    };

    handleTextFieldChange = (select, text) => {
        if (text && text.length) {
            const flag = moment(text, this.props.dateFormat, true).isValid();
            if (flag) {
                const initValue = moment(text).format('YYYY-MM-DD');
                const selectYear = initValue.split('-')[0],
                    selectMonth = initValue.split('-')[1],
                    selectDay = initValue.split('-')[2];
                let state = cloneDeep(this.state);
                if (select == 'left') {
                    if (moment(text).isBefore(state.right.text)) {
                        state.startTime = text;
                        state.left.text = text;
                        state.left.year = selectYear;
                        state.left.month = selectMonth;
                        state.left.day = selectDay;
                        if (selectYear == state.right.year && selectMonth == state.right.month) {
                            if (selectMonth == 12) {
                                state.right.month = 1;
                                state.right.year = +selectYear + 1;
                            } else {
                                state.right.month = +selectMonth + 1;
                            }
                        }
                    }
                    this.setState(state);
                } else {
                    if (moment(state.startTime).isBefore(text)) {
                        state.endTime = text;
                        state.right.text = text;
                        if (selectYear == state.left.year && selectMonth == state.left.month) {
                            state.right.month = +selectMonth + 1;
                        } else {
                            state.right.year = selectYear;
                            state.right.month = selectMonth;
                            state.right.day = selectDay;
                        }
                    }
                    this.setState(state);
                }
            }
        }
    };

    handleDayPickerChange = (select, date) => {
        let state = cloneDeep(this.state);
        if (state.endTime) {
            state[select].text = date.time;
            state[select].year = date.year;
            state[select].month = date.month;
            state[select].day = date.day;
            state.startTime = date.time;
            state.endTime = '';
            state.hoverTime = '';
            this.setState(state);
        } else if (state.startTime) {
            let startTime = state.startTime;
            let endTime;
            if (moment(startTime).isBefore(date.time)) {
                endTime = date.time;
            } else {
                endTime = startTime;
                startTime = date.time;
            }
            state.right.text = endTime;
            state.left.text = startTime;
            state.endTime = endTime;
            state.startTime = startTime;
            state.historyStartTime = startTime;
            state.historyEndTime = endTime;
            state.hoverTime = '';
            this.setState(state);
        } else {
            state[select].text = date.time;
            state[select].year = date.year;
            state[select].month = date.month;
            state[select].day = date.day;
            state.startTime = date.time;
            state.endTime = '';
            state.hoverTime = '';
            this.setState(state);
        }

    };

    handleDayPickerHover = (select, date) => {
        let state = cloneDeep(this.state);
        let startTime = state.startTime;
        let endTime = state.endTime;
        if (startTime && endTime == '') {
            state.hoverTime = date.time;
            if (moment(startTime).isBefore(date.time)) {
                state.left.text = startTime;
                state.right.text = date.time;
            } else {
                state.right.text = startTime;
                state.left.text = date.time;
            }
            this.setState(state);
        }
    };

    handleMonthAndYearChange = (select, date) => {
        let state = cloneDeep(this.state);
        state[select].year = date.year;
        state[select].month = date.month;
        this.setState(state);
    };


    handleMonthPickerChange = (select, date) => {
        let state = cloneDeep(this.state);
        state[select].datePickerLevel = 'day';
        state[select].year = date.year;
        state[select].month = date.month;
        this.setState(state);
    };

    handleYearPickerChange = (select, year) => {
        let state = cloneDeep(this.state);
        state[select].datePickerLevel = 'month';
        state[select].year = year;
        this.setState(state);
    };

    togglePopup = e => {
        if (this.validValue) {
            this.setState({
                popupVisible: !this.state.popupVisible
            });
        }
    };

    closePopup = () => {
        const {dateFormat} = this.props;
        let state = cloneDeep(this.state);
        state.popupVisible = false;
        state.left.datePickerLevel = 'day';
        state.right.datePickerLevel = 'day';
        if (!state.endTime) {
            state.startTime = state.historyStartTime;
            state.endTime = state.historyEndTime;
            state.left.text = state.historyStartTime;
            state.right.text = state.historyEndTime;
            state.hoverTime = '';
            if (state.historyStartTime && state.historyEndTime) {
                state.left.year = moment(state.historyStartTime).format('YYYY');
                state.left.month = moment(state.historyStartTime).format('MM');
                state.left.day = moment(state.historyStartTime).format('DD');
                if (moment(state.historyStartTime).format('YYYY') == moment(state.historyEndTime).format('YYYY') && moment(state.historyStartTime).format('MM') == moment(state.historyEndTime).format('MM')) {
                    if (moment(state.historyEndTime).format('MM') == 12) {
                        state.right.year = +moment(state.historyEndTime).format('YYYY') + 1;
                        state.right.month = 1;
                    } else {
                        state.right.year = moment(state.historyEndTime).format('YYYY');
                        state.right.month = +moment(state.historyEndTime).format('MM') + 1;
                    }
                } else {
                    state.right.year = moment(state.historyEndTime).format('YYYY');
                    state.right.month = moment(state.historyEndTime).format('MM');
                }
                state.right.day = moment(state.historyEndTime).format('DD');
            }
        }
        state.value = [moment(state.left.text, dateFormat), moment(state.right.text, dateFormat)];
        !this.props.disabled && this.setState(state, () => {
            this.props.onChange && this.props.onChange([
                moment(state.value[0]).format(this.props.dateFormat),
                moment(state.value[1]).format(this.props.dateFormat)
            ]);
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

    setValue = (value, format) => {
        let state = cloneDeep(this.state);
        if (value && value.length > 1) {
            let leftValue = value[0],
                rightValue = value[1];
            if (!!leftValue) {
                if (moment(leftValue, format).isValid() || (!!rightValue && moment(leftValue, format).isValid())) {
                    state.left.text = leftValue;
                    state.left.year = moment(value[0]).format('YYYY');
                    state.left.month = moment(value[0]).format('MM');
                    state.left.day = moment(value[0]).format('DD');
                    state.right.text = rightValue;
                    state.right.year = rightValue ? moment(value[1]).format('YYYY') : moment(value[0]).format('YYYY');
                    state.right.month = rightValue ? moment(value[1]).format('MM') : moment(value[0]).format('MM');
                    state.right.day = rightValue ? moment(value[1]).format('DD') : moment(value[0]).format('DD');
                    state.left = DateUtil.setDateRange(state.left, state.right).start;
                    state.right = DateUtil.setDateRange(state.left, state.right).end;
                    state.startTime = leftValue;
                    state.endTime = rightValue;
                    state.historyStartTime = leftValue;
                    state.historyEndTime = rightValue;
                    this.setState(state);
                } else {
                    this.validValue = false;
                    console.error('Invalid date');
                }
            } else {
                state.left.text = '';
                state.right.text = '';
                state.left.year = moment().format('YYYY');
                state.left.month = moment().format('MM');
                state.left.day = moment().format('DD');
                state.right.year = moment().format('YYYY');
                state.right.month = moment().format('MM');
                state.right.day = moment().format('DD');
                state.startTime = '';
                state.endTime = '';
                state.historyStartTime = '';
                state.historyEndTime = '';
                state.left = DateUtil.setDateRange(state.left, state.right).start;
                state.right = DateUtil.setDateRange(state.left, state.right).end;
                this.setState(state);
            }
        }
    };

    componentDidMount() {

        this.triggerEl = this.trigger && this.trigger.current && findDOMNode(this.trigger.current);

        const {value, dateFormat} = this.props;
        this.setValue(value, dateFormat);

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
                className, style, name, placeholder, dateFormat, maxValue, minValue, label, isLabelAnimate, position,
                theme, popupClassName, rightIconCls, readOnly, disabled, parentEl, ...restProps
            } = this.props,
            {popupVisible, left, right, startTime, endTime, hoverTime, isAbove} = this.state,
            {
                handleMonthAndYearChange, handleDayPickerChange, handleDatePickerChange, handleDayPickerHover,
                handleMonthPickerChange, handleYearPickerChange
            } = this;

        let textFieldValue = left.text && right.text ? left.text + '~ ' + right.text : '', maxYear = right.year,
            maxMonth = right.month;
        maxYear = maxMonth == 1 ? +maxYear - 1 : maxYear;
        maxMonth = maxMonth == 1 ? 11 : +maxMonth - 2;

        let maxDay = DateUtil.MonthDays(maxYear)[maxMonth],
            leftMaxValue = maxValue && moment([maxYear, maxMonth, maxDay]).isAfter(maxValue) ?
                maxValue
                :
                moment([maxYear, maxMonth, maxDay]).format('YYYY-MM-DD'),
            minYear = left.year, minMonth = left.month;
        minYear = minMonth == 12 ? +minYear + 1 : minYear;
        minMonth = minMonth == 12 ? 1 : +minMonth + 1;

        let rightMinValue = minValue && moment([minYear, minMonth - 1, 1]).isBefore(minValue) ?
            minValue
            :
            moment([minYear, minMonth - 1, 1]).format('YYYY-MM-DD'),
            leftProps = {
                ...left,
                value: left.text,
                maxValue: leftMaxValue,
                minValue: minValue,
                startTime,
                endTime,
                hoverTime,
                dateFormat
            }, rightProps = {
                ...right,
                value: right.text,
                minValue: rightMinValue,
                maxValue: maxValue,
                startTime,
                endTime,
                hoverTime,
                dateFormat
            };

        return (
            <div className={classNames('material-date-range-picker', {
                [className]: className
            })}
                 style={style}>

                <DatePickerTextField ref={this.trigger}
                                     className="material-date-range-picker-field"
                                     theme={theme}
                                     name={name}
                                     placeholder={placeholder}
                                     label={label}
                                     isLabelAnimate={isLabelAnimate}
                                     value={textFieldValue}
                                     readOnly={true}
                                     disabled={disabled}
                                     clearButtonVisible={false}
                                     isFocusedSelectAll={false}
                                     popupVisible={popupVisible}
                                     rightIconCls={rightIconCls}
                                     onClick={e => {
                                         this.togglePopup(e);
                                     }}/>

                <Popup className={`material-date-range-picker-popup ${popupClassName}`}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       parentEl={parentEl}
                       position={position ? position : (isAbove ? Position.TOP_LEFT : Position.BOTTOM_LEFT)}
                       hasTriangle={false}
                       onRender={this.handlePopupRender}
                       onRequestClose={this.closePopup}>

                    <div className="calendar-date-input-wrap">
                        <div className="DateRangePickerHeaderInput">
                            <TextField className='fl calendar-input'
                                       placeholder={placeholder}
                                       value={left.text}
                                       clearButtonVisible={false}
                                       readOnly={readOnly}
                                       onChange={(text) => {
                                           this.handleTextFieldChange('left', text);
                                       }}/>
                            <TextField className='fl calendar-input'
                                       placeholder={placeholder}
                                       value={right.text}
                                       clearButtonVisible={false}
                                       readOnly={readOnly}
                                       onChange={(text) => {
                                           this.handleTextFieldChange('right', text);
                                       }}/>
                        </div>
                    </div>

                    {
                        left.datePickerLevel == 'day' ?
                            <DayPicker  {...restProps}
                                        {...leftProps}
                                        isFooter={false}
                                        isRange={true}
                                        monthAndYearChange={date => handleMonthAndYearChange('left', date)}
                                        onChange={date => handleDayPickerChange('left', date)}
                                        previousClick={pickerLevel => handleDatePickerChange('left', pickerLevel)}
                                        hoverHandle={date => handleDayPickerHover('left', date)}/>
                            : (
                                left.datePickerLevel == 'month' ?
                                    <MonthPicker {...restProps}
                                                 {...leftProps}
                                                 onChange={date => handleMonthPickerChange('left', date)}
                                                 previousClick={pickerLevel => handleDatePickerChange('left', pickerLevel)}/>
                                    :
                                    <YearPicker {...restProps}
                                                {...leftProps}
                                                onChange={date => handleYearPickerChange('left', date)}/>
                            )

                    }

                    {
                        right.datePickerLevel == 'day' ?
                            <DayPicker {...restProps}
                                       {...rightProps}
                                       isFooter={false}
                                       isRange={true}
                                       monthAndYearChange={date => handleMonthAndYearChange('right', date)}
                                       onChange={date => handleDayPickerChange('right', date)}
                                       previousClick={pickerLevel => handleDatePickerChange('right', pickerLevel)}
                                       hoverHandle={date => handleDayPickerHover('left', date)}/>
                            : (
                                right.datePickerLevel == 'month' ?
                                    <MonthPicker {...restProps}
                                                 {...rightProps}
                                                 onChange={date => handleMonthPickerChange('right', date)}
                                                 previousClick={pickerLevel => handleDatePickerChange('right', pickerLevel)}/>
                                    :
                                    <YearPicker {...restProps}
                                                {...rightProps}
                                                onChange={date => handleYearPickerChange('right', date)}/>
                            )

                    }

                </Popup>
            </div>
        );
    }
}

MaterialDateRangePicker.propTypes = {

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
     * DateRangePicker input name.
     */
    name: PropTypes.string,

    /**
     * This is the initial date value of the component.
     */
    value: PropTypes.array,

    /**
     * The ending of a range of valid dates. The range includes the endDate.
     */
    maxValue: PropTypes.string,

    /**
     * The beginning of a range of valid dates. The range includes the startDate.
     */
    minValue: PropTypes.string,

    /**
     * DateRangePicker textField element placeholder.
     */
    placeholder: PropTypes.string,

    /**
     * The label of the DateRangePicker.
     */
    label: PropTypes.any,

    /**
     * The animate of the DateRangePicker.
     */
    isLabelAnimate: PropTypes.bool,

    /**
     * Date format.
     */
    dateFormat: PropTypes.string,

    /**
     * If true,the date selection box will displayed.
     */
    popupVisible: PropTypes.bool,

    /**
     * If true,dateRangePicker textField is readOnly.
     */
    readOnly: PropTypes.bool,

    /**
     * If true,dateRangePicker textField is disabled.
     */
    disabled: PropTypes.bool,

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

MaterialDateRangePicker.defaultProps = {
    name: '',
    placeholder: 'Date',
    popupClassName: '',
    dateFormat: 'YYYY-MM-DD',
    previousYearIconCls: 'fas fa-angle-double-left',
    previousMonthIconCls: 'fas fa-angle-left',
    nextYearIconCls: 'fas fa-angle-double-right',
    nextMonthIconCls: 'fas fa-angle-right',
    position: Position.BOTTOM_LEFT,
    readOnly: false,
    disabled: false
};

export default MaterialDateRangePicker;
