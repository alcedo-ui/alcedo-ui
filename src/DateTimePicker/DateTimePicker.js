/**
 * @file DateTimePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';

import TextField from '../_DatePickerTextField';
import DayPicker from '../_DayPicker';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';
import TimeList from '../_TimeList';
import RaisedButton from '../RaisedButton';
import Popup from '../Popup';
import Theme from '../Theme';
import FlatButton from '../FlatButton';

import Position from '../_statics/Position';
import DropdownCalculation from '../_vendors/DropdownCalculation';
import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class DateTimePicker extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.validValue = true;
        this.trigger = createRef();
        this.triggerEl = null;

        const defaultValue = props.value ? props.value : moment().format('YYYY-MM-DD HH:mm:ss');
        this.state = {
            value: props.value,
            popupVisible: false,
            isAbove: false,
            year: moment(defaultValue).format('YYYY'),
            month: moment(defaultValue).format('MM'),
            day: moment(defaultValue).format('DD'),
            hour: moment(defaultValue).format('HH'),
            minute: moment(defaultValue).format('mm'),
            second: moment(defaultValue).format('ss'),
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
            const flag = moment(text, dateFormat, true).isValid();
            if (flag) {
                if (minValue && moment(text).isBefore(minValue) || maxValue && moment(text).isAfter(maxValue)) {

                } else {
                    this.setState({
                        value: moment(text, dateFormat),
                        year: moment(text).format('YYYY'),
                        month: moment(text).format('MM'),
                        day: moment(text).format('DD'),
                        hour: moment(text).format('HH'),
                        minute: moment(text).format('mm'),
                        second: moment(text).format('ss')
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
        const {dateFormat} = this.props;
        this.setState({
            value: moment(date.time, dateFormat),
            year: date.year,
            month: date.month,
            day: date.day
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

    handleTimePickerChange = obj => {

        const {year, month, day} = this.state;
        let timer = moment([year, +month - 1, day, obj.hour, obj.minute, obj.second]).format(this.props.dateFormat);
        timer = moment(timer, this.props.dateFormat);
        this.setState({
            hour: obj.hour,
            minute: obj.minute,
            second: obj.second,
            value: timer
        });
    };

    handleChooseDateAndTime = value => {
        this.setState({
            datePickerLevel: value
        });
    };

    handleSelectDateTime = () => {

        !this.props.disabled && this.setState({
            popupVisible: false,
            datePickerLevel: 'day'
        }, () => {
            this.props.onChange && this.props.onChange(this.state.value && moment(this.state.value).format(this.props.dateFormat));
        });
    };

    handleNow = () => {
        this.setState({
            value: moment(moment(), this.props.dateFormat),
            year: moment().format('YYYY'),
            month: moment().format('MM'),
            day: moment().format('DD'),
            hour: moment().format('HH'),
            minute: moment().format('mm'),
            second: moment().format('ss')
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

    componentDidMount() {

        const {value, dateFormat} = this.props;

        if (value) {
            if (moment(value, dateFormat).isValid()) {
                this.setState({
                    value: moment(value, dateFormat),
                    year: moment(value).format('YYYY'),
                    month: moment(value).format('MM'),
                    day: moment(value).format('DD')
                });
            } else {
                console.error('Invalid date');
                this.validValue = false;
            }
        }

        this.triggerEl = this.trigger && this.trigger.current && findDOMNode(this.trigger.current);

    }

    static getDerivedStateFromProps(props, state) {

        const value = ComponentUtil.getDerivedState(props, state, 'value'),
            dateFormat = ComponentUtil.getDerivedState(props, state, 'dateFormat');

        return {
            prevProps: props,
            value: value ? moment(value, dateFormat) : '',
            dateFormat
        };

    }

    /* eslint-disable complexity */
    render() {

        const {
                className, style, name, placeholder, dateFormat, maxValue, minValue, isFooter, disabled, position,
                popupClassName, rightIconCls, previousYearIconCls, previousMonthIconCls, nextYearIconCls,
                nextMonthIconCls, readOnly, parentEl
            } = this.props,
            {value, popupVisible, datePickerLevel, year, month, day, hour, minute, second, isAbove} = this.state,
            textValue = value && moment(value).format(dateFormat);

        return (
            <div className={classNames('date-time-picker', {
                [className]: className
            })}
                 style={style}>

                <TextField ref={this.trigger}
                           className="date-picker-field"
                           name={name}
                           placeholder={placeholder}
                           value={textValue}
                           readOnly={readOnly ? readOnly : !popupVisible}
                           disabled={disabled}
                           clearButtonVisible={false}
                           isFocusedSelectAll={popupVisible}
                           popupVisible={popupVisible}
                           rightIconCls={rightIconCls}
                           onClick={e => this.togglePopup(e)}
                           onChange={this.handleTextFieldChange}/>

                <Popup className={`date-time-picker-popup ${popupClassName}`}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       parentEl={parentEl}
                       position={position ? position : (isAbove ? Position.TOP_LEFT : Position.BOTTOM_LEFT)}
                       hasTriangle={false}
                       onRender={this.handlePopupRender}
                       onRequestClose={this.closePopup}>

                    {
                        datePickerLevel == 'day' ?
                            <DayPicker
                                value={value}
                                dateFormat={dateFormat}
                                year={year}
                                month={month}
                                day={day}
                                hour={hour}
                                minute={minute}
                                second={second}
                                previousYearIconCls={previousYearIconCls}
                                previousMonthIconCls={previousMonthIconCls}
                                nextYearIconCls={nextYearIconCls}
                                nextMonthIconCls={nextMonthIconCls}
                                maxValue={maxValue ? moment(maxValue).format('YYYY-MM-DD') : null}
                                minValue={minValue ? moment(minValue).format('YYYY-MM-DD') : null}
                                isFooter={true}
                                onChange={this.handleDayPickerChange}
                                previousClick={this.handleDatePickerChange}/>
                            :
                            datePickerLevel == 'month' ?
                                <MonthPicker
                                    value={value}
                                    year={year}
                                    month={month}
                                    day={day}
                                    previousYearIconCls={previousYearIconCls}
                                    previousMonthIconCls={previousMonthIconCls}
                                    nextYearIconCls={nextYearIconCls}
                                    nextMonthIconCls={nextMonthIconCls}
                                    maxValue={maxValue ? moment(maxValue).format('YYYY-MM-DD') : null}
                                    minValue={minValue ? moment(minValue).format('YYYY-MM-DD') : null}
                                    onChange={this.handleMonthPickerChange}
                                    previousClick={this.handleDatePickerChange}/>
                                :
                                datePickerLevel == 'year' ?
                                    <YearPicker value={value}
                                                year={year}
                                                month={month}
                                                day={day}
                                                previousYearIconCls={previousYearIconCls}
                                                previousMonthIconCls={previousMonthIconCls}
                                                nextYearIconCls={nextYearIconCls}
                                                nextMonthIconCls={nextMonthIconCls}
                                                maxValue={maxValue ? moment(maxValue).format('YYYY-MM-DD') : null}
                                                minValue={minValue ? moment(minValue).format('YYYY-MM-DD') : null}
                                                onChange={this.handleYearPickerChange}/>
                                    :
                                    null
                    }

                    {
                        <TimeList className={`time-picker-body ${datePickerLevel == 'time' ? '' : 'hidden'}`}
                                  dateFormat={dateFormat.split(' ')[1]}
                                  popupVisible={datePickerLevel == 'time' ? true : false}
                                  hour={hour}
                                  minute={minute}
                                  second={second}
                                  isRequired={(minValue && textValue.split(' ')[0] == minValue.split(' ')[0])
                                  || (maxValue && textValue.split(' ')[0] == maxValue.split(' ')[0]) ? true : false}
                                  maxValue={maxValue && textValue.split(' ')[0] == maxValue.split(' ')[0] ?
                                      moment(maxValue).format('HH:mm:ss') : null}
                                  minValue={minValue && textValue.split(' ')[0] == minValue.split(' ')[0] ?
                                      moment(minValue).format('HH:mm:ss') : null}
                                  onChange={this.handleTimePickerChange}/>
                    }

                    {
                        isFooter ?
                            <div className="calendar-footer">
                                <div className="action fl">
                                    {
                                        (minValue && moment(this.props.value).isBefore(minValue))
                                        || (maxValue && moment(maxValue).isBefore(this.props.value)) ?
                                            <span className="fl date-text">
                                                <span className="item-gray">Now</span>
                                            </span>
                                            :
                                            <FlatButton className='today-button fl'
                                                        value={'Now'}
                                                        onClick={this.handleNow}/>
                                    }
                                    {
                                        datePickerLevel == 'time' ?
                                            <span className="fr date-text"
                                                  onClick={() =>
                                                      this.handleChooseDateAndTime('day')
                                                  }>
                                                Select date
                                            </span>
                                            :
                                            <span className="fr date-text"
                                                  onClick={() =>
                                                      this.handleChooseDateAndTime('time')
                                                  }>
                                                Select time
                                            </span>
                                    }
                                </div>
                                <div className="select-button fr"
                                     onClick={this.handleSelectDateTime}>
                                    <RaisedButton className={year && month && day && hour && minute && second ?
                                        'active' : ''}
                                                  value="Ok"
                                                  theme={Theme.HIGHLIGHT}/>
                                </div>
                            </div>
                            :
                            null
                    }

                </Popup>
            </div>
        );
    }
}

DateTimePicker.propTypes = {

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
    value: PropTypes.string,

    /**
     * The ending of a range of valid dates. The range includes the endDate.
     */
    maxValue: PropTypes.string,

    /**
     * The beginning of a range of valid dates. The range includes the startDate.
     */
    minValue: PropTypes.string,

    /**
     * DateTimePicker textField element placeholder.
     */
    placeholder: PropTypes.string,

    /**
     * Date Time format.
     */
    dateFormat: PropTypes.string,

    /**
     * If true,dateTimePicker textField is readOnly.
     */
    readOnly: PropTypes.bool,
    /**
     * If true,dateTimePicker textField is disabled.
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

DateTimePicker.defaultProps = {
    name: '',
    value: moment().format('YYYY-MM-DD HH:mm:ss'),
    maxValue: '',
    minValue: '',
    popupClassName: '',
    placeholder: 'Date',
    dateFormat: 'YYYY-MM-DD HH:mm:ss',
    previousYearIconCls: 'fas fa-angle-double-left',
    previousMonthIconCls: 'fas fa-angle-left',
    nextYearIconCls: 'fas fa-angle-double-right',
    nextMonthIconCls: 'fas fa-angle-right',
    isFooter: true,
    readOnly: false,
    disabled: false
};

export default DateTimePicker;
