/**
 * Created by Administrator on 2017/3/13.
 */
import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import _ from 'lodash';

import TextField from '../TextField';
import DayPicker from '../_DayPicker';

import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';
import './DatePicker.css';

export default class DatePicker extends Component {

    constructor(props) {

        super(props);
        const initValue = Util.value2Moment(props.value, props.dateFormat);
        this.state = {
            value: initValue, // Moment object
            textFieldValue: initValue.format(props.dateFormat),
            popupVisible: false,
            year: initValue.format('YYYY'),
            month: initValue.format('MM'),
            day: initValue.format('DD'),
            datePickerLevel: 0,
            marginLeft: 0,
            isFooter: true
        };

        this.textFieldChangeHandle = this::this.textFieldChangeHandle;
        this.mousedownHandle = this::this.mousedownHandle;
        this.resizeHandle = this::this.resizeHandle;
        this.datePickerChangeHandle = this::this.datePickerChangeHandle;
        this.yearPickerChangeHandle = this::this.yearPickerChangeHandle;
        this.monthPickerChangeHandle = this::this.monthPickerChangeHandle;
        this.dayPickerChangeHandle = this::this.dayPickerChangeHandle;
        this.todayHandle = this::this.todayHandle;
    }

    datePickerChangeHandle(select) {
        let {datePickerLevel}=this.state;
        datePickerLevel = datePickerLevel + 1;
        this.setState({
            datePickerLevel: datePickerLevel
        })
    }

    textFieldChangeHandle(text) {
        if (text && text.length) {
            const flag = moment(text, this.props.dateFormat, true).isValid();
            if (flag) {
                const select_year = moment(text).format('YYYY'),
                    select_month = moment(text).format('MM'),
                    select_day = moment(text).format('DD')
                this.setState({
                    textFieldValue: text,
                    year: select_year,
                    month: select_month,
                    day: select_day
                })
            }
        } else {
            this.setState({
                textFieldValue: text
            })
        }
    }

    dayPickerChangeHandle(date) {
        this.setState({
            textFieldValue: date.time,
            year: date.year,
            month: date.month,
            day: date.day,
            popupVisible: false
        })
    }

    monthPickerChangeHandle(date) {
        this.setState({
            datePickerLevel: 0,
            year: date.year,
            month: date.month
        })
    }

    yearPickerChangeHandle(year) {
        this.setState({
            datePickerLevel: 1,
            year: year
        })
    }

    todayHandle() {
        const year = moment().format('YYYY'),
            month = moment().format('MM'),
            day = moment().format('DD');
        let timer = moment().format(this.props.dateFormat);
        this.setState({
            textFieldValue: timer,
            year: year,
            month: month,
            day: day
        })
    }

    mousedownHandle(e) {
        const flag = Event.triggerPopupEventHandle(e.target, require('react-dom').findDOMNode(this.refs.trigger), this.refs.popup, this.state.popupVisible);
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

    resizeHandle() {
        const {left} = Util.getOffset(this.refs.datePicker);
        const width = 300;
        const windowWidth = document.body.clientWidth;
        let marginLeft;
        if ((left + width) >= windowWidth) {
            marginLeft = (left + width) - windowWidth;
        } else {
            marginLeft = 0
        }
        this.setState({
            marginLeft: marginLeft
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value || nextProps.dateFormat !== this.props.dateFormat) {
            const value = Util.value2Moment(nextProps.value, nextProps.dateFormat);
            this.setState({
                value,
                textFieldValue: value.format(nextProps.dateFormat)
            });
        }
    }

    componentDidMount() {
        // debugger
        const {value, dateFormat}=this.props;
        let state = _.cloneDeep(this.state);
        const {left} = Util.getOffset(this.refs.datePicker);
        const width = 300;
        const windowWidth = document.body.clientWidth;
        let marginLeft;
        if ((left + width) >= windowWidth) {
            marginLeft = (left + width) - windowWidth;
        } else {
            marginLeft = 0
        }
        if (value) {
            const select_year = moment(value).format('YYYY'),
                select_month = moment(value).format('MM'),
                select_day = moment(value).format('DD');

            state.value = value;
            state.textFieldValue = moment(value).format(dateFormat);
            state.year = select_year;
            state.month = select_month;
            state.day = select_day;
            if (marginLeft) {
                state.marginLeft = marginLeft;
            }
            this.setState(state)
        }

        Event.addEvent(window, 'mousedown', this.mousedownHandle);
        Event.addEvent(window, 'resize', this.resizeHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(window, 'mousedown', this.mousedownHandle);
        Event.removeEvent(window, 'resize', this.resizeHandle);
    }

    render() {
        const {className, style, name, placeholder, dateFormat, maxValue, minValue} = this.props;
        const {textFieldValue, popupVisible, datePickerLevel, year, month, day, marginLeft, isFooter} = this.state;
        const popStyle = {
            left: '-' + marginLeft + 'px'
        }

        return (
            <div className={`date-picker ${className}`}
                 ref="datePicker"
                 style={style}>

                <TextField ref="trigger"
                           className="date-picker-field"
                           name={name}
                           placeholder={placeholder}
                           value={textFieldValue}
                           iconCls="fa fa-calendar"
                           readOnly={true}
                           isClearIcon={false}
                />

                <div ref="popup"
                     className={`date-picker-popup ${popupVisible ? '' : 'hidden'}`}
                     style={popStyle}>
                    <div className="calendar-date-input-wrap">
                        <TextField className='calendar-input'
                                   placeholder={'Select Date'}
                                   isClearIcon={true}
                                   value={textFieldValue}
                                   onChange={this.textFieldChangeHandle}/>
                    </div>
                    {
                        datePickerLevel == 0 ?
                            <DayPicker
                                dateFormat={dateFormat}
                                year={year}
                                month={month}
                                day={day}
                                maxValue={maxValue}
                                minValue={minValue}
                                isFooter={isFooter}
                                onChange={this.dayPickerChangeHandle}
                                previousClick={this.datePickerChangeHandle}
                            />
                            : (
                            datePickerLevel == 1 ?
                                <MonthPicker
                                    year={year}
                                    month={month}
                                    day={day}
                                    maxValue={maxValue}
                                    minValue={minValue}
                                    onChange={this.monthPickerChangeHandle}
                                    previousClick={this.datePickerChangeHandle}
                                />
                                :
                                <YearPicker
                                    year={year}
                                    month={month}
                                    day={day}
                                    maxValue={maxValue}
                                    minValue={minValue}
                                    onChange={this.yearPickerChangeHandle}
                                />
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

DatePicker.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string,

    // timestamp
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
    placeholder: PropTypes.string,
    dateFormat: PropTypes.string,
    popupVisible: PropTypes.bool

};

DatePicker.defaultProps = {

    className: '',
    style: null,

    name: '',
    value: new Date().getTime(),
    placeholder: 'Date',
    dateFormat: 'YYYY-MM-DD'

};