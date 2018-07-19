/**
 * @file MaterialDateRangePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
import {findDOMNode} from 'react-dom';
import DropdownCalculation from '../_vendors/DropdownCalculation';

class MaterialDateRangePicker extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        const initValue = moment();
        this.validValue = true;

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

    datePickerChangeHandle = (select, selectLevel) => {
        let state = cloneDeep(this.state);
        state[select].datePickerLevel = selectLevel;
        this.setState(state);
    };

    textFieldChangeHandle = (select, text) => {
        if (text && text.length) {
            const flag = moment(text, this.props.dateFormat, true).isValid();
            if (flag) {
                const initValue = moment(text).format('YYYY-MM-DD');
                const select_year = initValue.split('-')[0],
                    select_month = initValue.split('-')[1],
                    select_day = initValue.split('-')[2];
                let state = cloneDeep(this.state);
                if (select == 'left') {
                    if (moment(text).isBefore(state.right.text)) {
                        state.startTime = text;
                        state.left.text = text;
                        state.left.year = select_year;
                        state.left.month = select_month;
                        state.left.day = select_day;
                        if (select_year == state.right.year && select_month == state.right.month) {
                            if (select_month == 12) {
                                state.right.month = 1;
                                state.right.year = +select_year + 1;
                            } else {
                                state.right.month = +select_month + 1;
                            }
                        }
                    }
                    this.setState(state);
                } else {
                    if (moment(state.startTime).isBefore(text)) {
                        state.endTime = text;
                        state.right.text = text;
                        if (select_year == state.left.year && select_month == state.left.month) {
                            state.right.month = +select_month + 1;
                        } else {
                            state.right.year = select_year;
                            state.right.month = select_month;
                            state.right.day = select_day;
                        }
                    }
                    this.setState(state);
                }
            }
        }
    };

    dayPickerChangeHandle = (select, date) => {
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

    dayPickerHoverHandle = (select, date) => {
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

    monthAndYearChangeHandle = (select, date) => {
        let state = cloneDeep(this.state);
        state[select].year = date.year;
        state[select].month = date.month;
        this.setState(state);
    };


    monthPickerChangeHandle = (select, date) => {
        let state = cloneDeep(this.state);
        state[select].datePickerLevel = 'day';
        state[select].year = date.year;
        state[select].month = date.month;
        this.setState(state);
    };

    yearPickerChangeHandle = (select, year) => {
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

    componentDidMount() {
        const {value, dateFormat} = this.props;
        let state = cloneDeep(this.state);
        if (value && value.length) {
            let leftValue = value[0],
                rightValue = value[1];
            if (moment(leftValue, dateFormat).isValid() && moment(rightValue, dateFormat).isValid()) {
                let leftYear = moment(value[0]).format('YYYY'),
                    leftMonth = moment(value[0]).format('MM'),
                    leftDay = moment(value[0]).format('DD'),
                    rightYear = moment(value[1]).format('YYYY'),
                    rightMonth = moment(value[1]).format('MM'),
                    rightDay = moment(value[1]).format('DD');
                state.left.text = leftValue;
                state.left.year = leftYear;
                state.left.month = leftMonth;
                state.left.day = leftDay;
                state.right.text = rightValue;
                state.right.day = rightDay;
                if (leftYear == rightYear && leftMonth == rightMonth) {
                    if (leftMonth == 12) {
                        state.right.year = +rightYear + 1;
                        state.right.month = 1;
                    } else {
                        state.right.year = rightYear;
                        state.right.month = +rightMonth + 1;
                    }
                } else {
                    state.right.year = rightYear;
                    state.right.month = rightMonth;
                }
                state.startTime = leftValue;
                state.endTime = rightValue;
                state.historyStartTime = leftValue;
                state.historyEndTime = rightValue;
                this.setState(state);
            } else {
                this.validValue = false;
                console.error('Invalid date');
            }
        }

        this.datePicker = this.refs.datePicker;
        this.triggerEl = findDOMNode(this.refs.trigger);

    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(nextProps.value) !== JSON.stringify(this.props.value) || nextProps.dateFormat !== this.props.dateFormat) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {className, style, name, placeholder, dateFormat, maxValue, minValue, label, isLabelAnimate, position, theme} = this.props,
            {popupVisible, left, right, startTime, endTime, hoverTime, isAbove} = this.state,

            pickerClassName = classNames('material-date-range-picker', {
                [className]: className
            });

        let textFieldValue = left.text && right.text ? left.text + '~ ' + right.text : '';

        let maxYear = right.year;
        let maxMonth = right.month;
        maxYear = maxMonth == 1 ? +maxYear - 1 : maxYear;
        maxMonth = maxMonth == 1 ? 11 : +maxMonth - 2;

        let maxDay = Util.MonthDays(maxYear)[maxMonth];
        let leftMaxValue = moment([maxYear, maxMonth, maxDay]).format('YYYY-MM-DD');
        let minYear = left.year;
        let minMonth = left.month;
        minYear = minMonth == 12 ? +minYear + 1 : minYear;
        minMonth = minMonth == 12 ? 1 : +minMonth + 1;

        let rightMinValue = moment([minYear, minMonth - 1, 1]).format('YYYY-MM-DD');

        return (
            <div ref="datePicker"
                 className={pickerClassName}
                 style={style}>

                <DatePickerTextField ref="trigger"
                                     className="material-date-range-picker-field"
                                     theme={theme}
                                     name={name}
                                     placeholder={placeholder}
                                     label={label}
                                     isLabelAnimate={isLabelAnimate}
                                     value={textFieldValue}
                                     readOnly={true}
                                     clearButtonVisible={false}
                                     isFocusedSelectAll={false}
                                     popupVisible={popupVisible}
                                     onClick={e => {
                                         this.togglePopup(e);
                                     }}/>

                <Popup className={`material-date-range-picker-popup`}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       position={position ? position : (isAbove ? Position.TOP_LEFT : Position.BOTTOM_LEFT)}
                       hasTriangle={false}
                       onRender={this.popupRenderHandler}
                       onRequestClose={() => {
                           this.closePopup();
                       }}>

                    <div className="calendar-date-input-wrap">
                        <div className="DateRangePickerHeaderInput">
                            <TextField className='fl calendar-input'
                                       placeholder={placeholder}
                                       value={left.text}
                                       clearButtonVisible={false}
                                       onChange={(text) => {
                                           this.textFieldChangeHandle('left', text);
                                       }}/>
                            <TextField className='fl calendar-input'
                                       placeholder={placeholder}
                                       value={right.text}
                                       clearButtonVisible={false}
                                       onChange={(text) => {
                                           this.textFieldChangeHandle('right', text);
                                       }}/>
                        </div>
                    </div>

                    {
                        left.datePickerLevel == 'day' ?
                            <DayPicker value={left.text}
                                       dateFormat={dateFormat}
                                       year={left.year}
                                       month={left.month}
                                       day={left.day}
                                       isFooter={false}
                                       isRange={true}
                                       maxValue={leftMaxValue}
                                       minValue={minValue}
                                       startTime={startTime}
                                       endTime={endTime}
                                       hoverTime={hoverTime}
                                       monthAndYearChange={(obj) => {
                                           this.monthAndYearChangeHandle('left', obj);
                                       }}
                                       onChange={(obj) => {
                                           this.dayPickerChangeHandle('left', obj);
                                       }}
                                       previousClick={(level) => {
                                           this.datePickerChangeHandle('left', level);
                                       }}
                                       hoverHandle={(obj) => {
                                           this.dayPickerHoverHandle('left', obj);
                                       }}/>
                            : (
                                left.datePickerLevel == 'month' ?
                                    <MonthPicker value={left.text}
                                                 year={left.year}
                                                 month={left.month}
                                                 day={left.day}
                                                 maxValue={leftMaxValue}
                                                 minValue={minValue}
                                                 onChange={(obj) => {
                                                     this.monthPickerChangeHandle('left', obj);
                                                 }}
                                                 previousClick={(level) => {
                                                     this.datePickerChangeHandle('left', level);
                                                 }}/>
                                    :
                                    <YearPicker value={left.text}
                                                year={left.year}
                                                month={left.month}
                                                day={left.day}
                                                maxValue={leftMaxValue}
                                                minValue={minValue}
                                                onChange={(obj) => {
                                                    this.yearPickerChangeHandle('left', obj);
                                                }}/>
                            )

                    }

                    {
                        right.datePickerLevel == 'day' ?
                            <DayPicker value={right.text}
                                       dateFormat={dateFormat}
                                       year={right.year}
                                       month={right.month}
                                       day={right.day}
                                       isFooter={false}
                                       isRange={true}
                                       startTime={startTime}
                                       endTime={endTime}
                                       hoverTime={hoverTime}
                                       minValue={rightMinValue}
                                       maxValue={maxValue}
                                       monthAndYearChange={(obj) => {
                                           this.monthAndYearChangeHandle('right', obj);
                                       }}
                                       onChange={(obj) => {
                                           this.dayPickerChangeHandle('right', obj);
                                       }}
                                       previousClick={(level) => {
                                           this.datePickerChangeHandle('right', level);
                                       }}
                                       hoverHandle={(obj) => {
                                           this.dayPickerHoverHandle('left', obj);
                                       }}/>
                            : (
                                right.datePickerLevel == 'month' ?
                                    <MonthPicker value={right.text}
                                                 year={right.year}
                                                 month={right.month}
                                                 day={right.day}
                                                 minValue={rightMinValue}
                                                 maxValue={maxValue}
                                                 onChange={(obj) => {
                                                     this.monthPickerChangeHandle('right', obj);
                                                 }}
                                                 previousClick={(level) => {
                                                     this.datePickerChangeHandle('right', level);
                                                 }}/>
                                    :
                                    <YearPicker value={right.text}
                                                year={right.year}
                                                month={right.month}
                                                day={right.day}
                                                minValue={rightMinValue}
                                                maxValue={maxValue}
                                                onChange={(obj) => {
                                                    this.yearPickerChangeHandle('right', obj);
                                                }}/>
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
     * Override the styles of the root element.
     */
    style: PropTypes.object,

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
     * Callback function that is fired when the date value changes.
     */
    onChange: PropTypes.func

};

MaterialDateRangePicker.defaultProps = {
    name: '',
    placeholder: 'Date',
    dateFormat: 'YYYY-MM-DD',
    position: Position.BOTTOM_LEFT
};

export default MaterialDateRangePicker;