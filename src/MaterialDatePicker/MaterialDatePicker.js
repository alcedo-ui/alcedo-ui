/**
 * @file DatePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';

import MaterialTextField from '../MaterialTextField';
import TextField from '../TextField';
import DayPicker from '../_DayPicker';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';

import Dom from '../_vendors/Dom';
import Event from '../_vendors/Event';

export default class MaterialDatePicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            popupVisible: false,
            year: moment(props.value).format('YYYY'),
            month: moment(props.value).format('MM'),
            day: moment(props.value).format('DD'),
            datePickerLevel: 0,
            marginLeft: 0
        };

        this.textFieldChangeHandle = ::this.textFieldChangeHandle;
        this.mousedownHandle = ::this.mousedownHandle;
        this.resizeHandle = ::this.resizeHandle;
        this.datePickerChangeHandle = ::this.datePickerChangeHandle;
        this.yearPickerChangeHandle = ::this.yearPickerChangeHandle;
        this.monthPickerChangeHandle = ::this.monthPickerChangeHandle;
        this.dayPickerChangeHandle = ::this.dayPickerChangeHandle;
        this.todayHandle = ::this.todayHandle;

    }

    datePickerChangeHandle(select) {
        let {datePickerLevel} = this.state;
        datePickerLevel = datePickerLevel + 1;
        this.setState({
            datePickerLevel: datePickerLevel
        });
    }

    textFieldChangeHandle(text) {
        const {minValue, maxValue} = this.props;
        if (text && text.length) {
            const flag = moment(text, this.props.dateFormat, true).isValid();
            if (flag) {
                if (minValue && moment(text).isBefore(minValue) || maxValue && moment(text).isAfter(maxValue)) {

                } else {
                    const year = moment(text).format('YYYY'),
                        month = moment(text).format('MM'),
                        day = moment(text).format('DD');
                    this.setState({
                        value: new Date(text),
                        year: year,
                        month: month,
                        day: day
                    });
                }
            }
        } else {
            this.setState({
                value: new Date(text)
            });
        }
    }

    dayPickerChangeHandle(date) {
        const {autoClose} = this.props;
        let state = _.cloneDeep(this.state);
        state.value = new Date(date.time);
        state.year = date.year;
        state.month = date.month;
        state.day = date.day;
        if (autoClose) {
            state.popupVisible = false;
        }
        this.setState(state);
    }

    monthPickerChangeHandle(date) {
        this.setState({
            datePickerLevel: 0,
            year: date.year,
            month: date.month
        });
    }

    yearPickerChangeHandle(year) {
        this.setState({
            datePickerLevel: 1,
            year: year
        });
    }

    todayHandle() {
        const year = moment().format('YYYY'),
            month = moment().format('MM'),
            day = moment().format('DD');
        let timer = new Date();
        this.setState({
            value: timer,
            year: year,
            month: month,
            day: day
        });
    }

    mousedownHandle(e) {
        const flag = this.triggerPopupEventHandle(e.target, require('react-dom').findDOMNode(this.refs.trigger), this.refs.popup, this.state.popupVisible);
        if (flag) {
            !this.props.disabled && this.setState({
                popupVisible: flag
            });
        } else {
            !this.props.disabled && this.setState({
                popupVisible: flag,
                datePickerLevel: 0
            });
        }
    }


   triggerPopupEventHandle(el, triggerEl, popupEl, currentVisible) {

        let flag = true;

        while (el) {
            if (el == popupEl) {
                return currentVisible;
            } else if (el == triggerEl) {
                return true;
            }
            el = el.parentNode;
        }

        if (flag) {
            return false;
        }

    }

    resizeHandle() {
        const {left} = Dom.getOffset(this.refs.datePicker);
        const width = 300;
        const windowWidth = document.body.clientWidth;
        let marginLeft;
        if ((left + width) >= windowWidth) {
            marginLeft = (left + width) - windowWidth;
        } else {
            marginLeft = 0;
        }
        this.setState({
            marginLeft: marginLeft
        });
    }

    componentWillReceiveProps(nextProps) {
        // debugger
        if (nextProps.value !== this.props.value || nextProps.dateFormat !== this.props.dateFormat) {
            this.setState({
                value: new Date(nextProps.value),
                dateFormat: nextProps.dateFormat,
                year: moment(nextProps.value).format('YYYY'),
                month: moment(nextProps.value).format('MM'),
                day: moment(nextProps.value).format('DD')
            });
        }
    }

    componentDidMount() {
        // debugger
        const {value} = this.props;
        let state = _.cloneDeep(this.state);
        const {left} = Dom.getOffset(this.refs.datePicker);
        const width = 300;
        const windowWidth = document.body.clientWidth;
        let marginLeft;
        if ((left + width) >= windowWidth) {
            marginLeft = (left + width) - windowWidth;
        } else {
            marginLeft = 0;
        }
        if (value) {
            const year = moment(value).format('YYYY'),
                month = moment(value).format('MM'),
                day = moment(value).format('DD');
            state.value = new Date(value);
            state.year = year;
            state.month = month;
            state.day = day;
            if (marginLeft) {
                state.marginLeft = marginLeft;
            }
            this.setState(state);
        }

        Event.addEvent(window, 'mousedown', this.mousedownHandle);
        Event.addEvent(window, 'resize', this.resizeHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(window, 'mousedown', this.mousedownHandle);
        Event.removeEvent(window, 'resize', this.resizeHandle);
    }

    render() {

        const {className, style, name, label, placeholder, dateFormat, maxValue, minValue, isFooter} = this.props,
            {value, popupVisible, datePickerLevel, year, month, day, marginLeft} = this.state,

            popStyle = {
                left: '-' + marginLeft + 'px'
            };
        let textValue = value ? moment(value).format(dateFormat) : '';
        return (
            <div className={`material-date-picker ${className}`}
                 ref="datePicker"
                 style={style}>

                <MaterialTextField ref="trigger"
                                   className={`date-picker-field`}
                                   name={name}
                                   label={label}
                                   isLabelAnimate={false}
                                   placeholder={placeholder}
                                   value={textValue}
                                   iconCls="fa fa-calendar"
                                   readOnly={popupVisible ? false : true}
                                   clearButtonVisible={popupVisible}
                                   onChange={this.textFieldChangeHandle}/>

                <div ref="popup"
                     className={`date-picker-popup ${popupVisible ? '' : 'hidden'}`}
                     style={popStyle}>
                    {
                        datePickerLevel == 0 ?
                            <DayPicker
                                value={textValue}
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
                            datePickerLevel == 1 ?
                                <MonthPicker
                                    value={textValue}
                                    year={year}
                                    month={month}
                                    day={day}
                                    maxValue={maxValue}
                                    minValue={minValue}
                                    onChange={this.monthPickerChangeHandle}
                                    previousClick={this.datePickerChangeHandle}/>
                                :
                                <YearPicker
                                    value={textValue}
                                    year={year}
                                    month={month}
                                    day={day}
                                    maxValue={maxValue}
                                    minValue={minValue}
                                    onChange={this.yearPickerChangeHandle}/>
                        )
                    }
                    {
                        isFooter ?
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
                </div>

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
     * The label of the DatePicker.
     */
    label: PropTypes.any,

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
    isFooter:true
};