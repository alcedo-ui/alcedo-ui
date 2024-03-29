/**
 * @file MaterialDateRangePicker component
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import moment from 'moment';
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
        this.setState({
            [select]: {
                ...this.state[select],
                datePickerLevel: selectLevel
            }
        });
    };

    handleTextFieldChange = (select, text) => {
        if (text && text.length) {
            const flag = moment(text, this.props.dateFormat, true).isValid();
            if (flag) {
                const initValue = moment(text).format('YYYY-MM-DD');
                const selectYear = initValue.split('-')[0],
                    selectMonth = initValue.split('-')[1],
                    selectDay = initValue.split('-')[2];
                if (select == 'left') {
                    this.setState({
                        startTime: moment(text).isBefore(this.state.right.text) ? text : this.state.startTime,
                        left: {
                            ...this.state.left,
                            text: moment(text).isBefore(this.state.right.text) ? text : this.state.left.text,
                            year: moment(text).isBefore(this.state.right.text) ? selectYear :
                                this.state.left.selectYear,
                            month: moment(text).isBefore(this.state.right.text) ? selectMonth :
                                this.state.left.selectMonth,
                            day: moment(text).isBefore(this.state.right.text) ? selectDay : this.state.left.selectDay
                        },
                        right: {
                            ...this.state.right,
                            month: selectYear == this.state.right.year && selectMonth == this.state.right.month ?
                                selectMonth == 12 ? 1 : +selectMonth + 1 : this.state.right.month,
                            year: selectYear == this.state.right.year && selectMonth == this.state.right.month ?
                                +selectYear + 1 : this.state.right.year
                        }
                    });
                } else {
                    this.setState({
                        endTime: moment(this.state.startTime).isBefore(text) ? text : this.state.endTime,
                        right: {
                            ...this.state.right,
                            text: moment(this.state.startTime).isBefore(text) ? text : this.state.right.text,
                            year: moment(this.state.startTime).isBefore(text) ?
                                selectYear == this.state.left.year && selectMonth == this.state.left.month ?
                                    this.state.right.year : selectYear : this.state.right.year,
                            month: moment(this.state.startTime).isBefore(text) ?
                                selectYear == this.state.left.year && selectMonth == this.state.left.month ?
                                    +selectMonth + 1 : selectMonth : this.state.right.month,
                            day: moment(this.state.startTime).isBefore(text) ?
                                selectYear == this.state.left.year && selectMonth == this.state.left.month ?
                                    this.state.right.day : selectDay : this.state.right.day
                        }
                    });
                }
            }
        }
    };

    handleDayPickerChange = (select, date) => {
        if (this.state.endTime) {
            this.setState({
                startTime: date.time,
                endTime: '',
                hoverTime: '',
                [select]: {
                    ...this.state[select],
                    text: date.time,
                    year: date.year,
                    month: date.month,
                    day: date.day
                }
            });
        } else if (this.state.startTime) {
            let startTime = this.state.startTime, endTime;
            if (moment(startTime).isBefore(date.time)) {
                endTime = date.time;
            } else {
                endTime = startTime;
                startTime = date.time;
            }
            this.setState({
                startTime,
                endTime,
                historyStartTime: startTime,
                historyEndTime: endTime,
                hoverTime: '',
                value: [
                    moment(startTime).format(this.props.dateFormat),
                    moment(endTime).format(this.props.dateFormat)
                ],
                left: {
                    ...this.state.left,
                    text: startTime
                },
                right: {
                    ...this.state.right,
                    text: endTime
                }
            }, () => {
                this.props.onChange && this.props.onChange([
                    moment(startTime).format(this.props.dateFormat),
                    moment(endTime).format(this.props.dateFormat)
                ]);
            });
        } else {
            this.setState({
                startTime: date.time,
                endTime: '',
                hoverTime: '',
                [select]: {
                    ...this.state[select],
                    text: date.time,
                    year: date.year,
                    month: date.month,
                    day: date.day
                }
            });
        }

    };

    handleDayPickerHover = (select, date) => {
        let startTime = this.state.startTime, endTime = this.state.endTime;
        if (startTime && endTime == '') {
            this.setState({
                hoverTime: date.time,
                left: {
                    ...this.state.left,
                    text: moment(startTime).isBefore(date.time) ? startTime : date.time
                },
                right: {
                    ...this.state.right,
                    text: moment(startTime).isBefore(date.time) ? date.time : startTime
                }
            });
        }
    };

    handleMonthAndYearChange = (select, date) => {
        this.setState({
            [select]: {
                ...this.state[select],
                year: date.year,
                month: date.month
            }
        });
    };


    handleMonthPickerChange = (select, date) => {
        this.setState({
            [select]: {
                ...this.state[select],
                datePickerLevel: 'day',
                year: date.year,
                month: date.month
            }
        });
    };

    handleYearPickerChange = (select, year) => {
        this.setState({
            [select]: {
                ...this.state[select],
                datePickerLevel: 'month',
                year: year
            }
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
        const {dateFormat} = this.props,
            {left, right, startTime, endTime, historyStartTime, historyEndTime, hoverTime} = this.state,
            leftDate = {
                ...left,
                datePickerLevel: 'day',
                text: !endTime ? historyStartTime : left.text,
                year: !endTime ? historyStartTime && historyEndTime ?
                    moment(historyStartTime).format('YYYY') : left.year : left.year,
                month: !endTime ? historyStartTime && historyEndTime ?
                    moment(historyStartTime).format('MM') : left.month : left.month,
                day: !endTime ? historyStartTime && historyEndTime ?
                    moment(historyStartTime).format('DD') : left.day : left.day
            }, rightDate = {
                ...right,
                datePickerLevel: 'day',
                text: !endTime ? historyEndTime : right.text,
                year: !endTime ?
                    historyStartTime && historyEndTime ?
                        moment(historyStartTime).format('YYYY') == moment(historyEndTime).format('YYYY')
                        && moment(historyStartTime).format('MM') == moment(historyEndTime).format('MM') ?
                            moment(historyEndTime).format('MM') == 12 ?
                                +moment(historyEndTime).format('YYYY') + 1
                                :
                                moment(historyEndTime).format('YYYY')
                            :
                            moment(historyEndTime).format('YYYY')
                        :
                        right.year
                    :
                    right.year,
                month: !endTime ?
                    historyStartTime && historyEndTime ?
                        moment(historyStartTime).format('YYYY') == moment(historyEndTime).format('YYYY')
                        && moment(historyStartTime).format('MM') == moment(historyEndTime).format('MM') ?
                            moment(historyEndTime).format('MM') == 12 ?
                                1
                                :
                                +moment(historyEndTime).format('MM') + 1
                            :
                            moment(historyEndTime).format('MM')
                        :
                        right.month
                    :
                    right.month,
                day: !endTime ? historyStartTime && historyEndTime ?
                    moment(historyEndTime).format('DD') : right.day : right.day
            };

        !this.props.disabled && this.setState({
            popupVisible: false,
            startTime: !endTime ? historyStartTime : startTime,
            endTime: !endTime ? historyEndTime : endTime,
            hoverTime: !endTime ? '' : hoverTime,
            value: [moment(leftDate.text, dateFormat), moment(rightDate.text, dateFormat)],
            left: leftDate,
            right: rightDate
        }, () => {
            this.props.onChange && this.props.onChange([
                moment(leftDate.text, dateFormat),
                moment(rightDate.text, dateFormat)
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
        if (value && value.length > 1) {
            let leftValue = value[0],
                rightValue = value[1];
            if (!!leftValue) {
                if (moment(leftValue, format).isValid() || (!!rightValue && moment(leftValue, format).isValid())) {
                    const left = {
                        ...this.state.left,
                        text: leftValue,
                        year: moment(value[0]).format('YYYY'),
                        month: moment(value[0]).format('MM'),
                        day: moment(value[0]).format('DD')
                    }, right = {
                        ...this.state.right,
                        text: rightValue,
                        year: rightValue ? moment(value[1]).format('YYYY') : moment(value[0]).format('YYYY'),
                        month: rightValue ? moment(value[1]).format('MM') : moment(value[0]).format('MM'),
                        day: rightValue ? moment(value[1]).format('DD') : moment(value[0]).format('DD')
                    };
                    this.setState({
                        left: DateUtil.setDateRange(left, right).start,
                        right: DateUtil.setDateRange(left, right).end,
                        startTime: leftValue,
                        endTime: rightValue,
                        historyStartTime: leftValue,
                        historyEndTime: rightValue
                    });
                } else {
                    this.validValue = false;
                    console.error('Invalid date');
                }
            } else {
                const left = {
                    ...this.state.left,
                    text: '',
                    year: moment().format('YYYY'),
                    month: moment().format('MM'),
                    day: moment().format('DD')
                }, right = {
                    ...this.state.right,
                    text: '',
                    year: moment().format('YYYY'),
                    month: moment().format('MM'),
                    day: moment().format('DD')
                };
                this.setState({
                    left: DateUtil.setDateRange(left, right).start,
                    right: DateUtil.setDateRange(left, right).end,
                    startTime: '',
                    endTime: '',
                    historyStartTime: '',
                    historyEndTime: ''
                });
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
                maxValue: maxValue && minValue ?
                    moment(leftMaxValue).isAfter(moment(maxValue)) ?
                        maxValue
                        :
                        leftMaxValue
                    :
                    !maxValue && minValue ?
                        moment.max(moment(leftMaxValue), moment(minValue)).format('YYYY-MM-DD')
                        :
                        maxValue && !minValue ?
                            moment(leftMaxValue).isAfter(moment(maxValue)) ?
                                maxValue
                                :
                                leftMaxValue
                            :
                            leftMaxValue,
                minValue: minValue,
                startTime,
                endTime,
                hoverTime,
                dateFormat
            }, rightProps = {
                ...right,
                value: right.text,
                minValue: maxValue && minValue ?
                    moment(rightMinValue).isAfter(moment(minValue)) ?
                        rightMinValue
                        :
                        minValue
                    :
                    !maxValue && minValue ?
                        moment(rightMinValue).isAfter(moment(minValue)) ?
                            rightMinValue
                            :
                            minValue
                        :
                        maxValue && !minValue ?
                            moment.max(moment(rightMinValue), moment(maxValue)).format('YYYY-MM-DD')
                            :
                            rightMinValue,
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
                            <TextField className="fl calendar-input"
                                       placeholder={placeholder}
                                       value={left.text}
                                       clearButtonVisible={false}
                                       readOnly={readOnly}
                                       onChange={(text) => {
                                           this.handleTextFieldChange('left', text);
                                       }}/>
                            <TextField className="fl calendar-input"
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
                                                 previousClick={pickerLevel => handleDatePickerChange('left',
                                                     pickerLevel)}/>
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
                                                 previousClick={pickerLevel => handleDatePickerChange('right',
                                                     pickerLevel)}/>
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
