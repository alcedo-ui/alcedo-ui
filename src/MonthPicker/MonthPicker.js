/**
 * @file DatePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';

import TextField from '../TextField';
import Month from '../_MonthPicker';
import Year from '../_YearPicker';
import Popup from '../Popup';

import Position from '../_statics/Position';

import PureRender from '../_vendors/PureRender';

@PureRender
class MonthPicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.validValue = true;

        this.state = {
            value: props.value,
            popupVisible: false,
            triggerEl: null,
            year: moment(props.value).format('YYYY'),
            month: moment(props.value).format('MM'),
            datePickerLevel: 'month'
        };

        this.textFieldChangeHandle = ::this.textFieldChangeHandle;
        this.togglePopup = ::this.togglePopup;
        this.closePopup = ::this.closePopup;
        this.datePickerChangeHandle = ::this.datePickerChangeHandle;
        this.yearPickerChangeHandle = ::this.yearPickerChangeHandle;
        this.monthPickerChangeHandle = ::this.monthPickerChangeHandle;

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
                        month = moment(text).format('MM');
                    this.setState({
                        value: moment(text, dateFormat),
                        year: year,
                        month: month
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

    monthPickerChangeHandle(date) {
        const {dateFormat, autoClose} = this.props;
        let state = cloneDeep(this.state);
        state.popupVisible = !autoClose;
        state.value = moment(`${date.year}-${date.month}`, dateFormat);
        state.year = date.year;
        state.month = date.month;
        if (state.popupVisible) {
            this.setState(state);
        } else {
            !this.props.disabled && this.setState(state, () => {
                this.props.onChange && this.props.onChange(state.value && moment(state.value).format(dateFormat));
            });
        }
    }

    yearPickerChangeHandle(year) {
        this.setState({
            datePickerLevel: 'month',
            year: year
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
                month: moment(nextProps.value).format('MM')
            });
        }
    }

    componentDidMount() {
        // debugger
        const {value, dateFormat} = this.props;
        let state = cloneDeep(this.state);
        if (value) {
            if (moment(value, dateFormat).isValid()) {
                const year = moment(value).format('YYYY'),
                    month = moment(value).format('MM');
                state.value = moment(value, dateFormat);
                state.year = year;
                state.month = month;
                this.setState(state);
            } else {
                console.error('Invalid date');
                this.validValue = false;
            }
        }
    }

    render() {

        const {className, name, placeholder, dateFormat, maxValue, minValue, position} = this.props,
            {value, popupVisible, datePickerLevel, year, month, triggerEl} = this.state,

            pickerClassName = classNames('month-picker', {
                [className]: className
            }),

            textValue = value && moment(value).format(dateFormat);

        return (
            <div ref="datePicker"
                 className={pickerClassName}>

                <TextField className="month-picker-field"
                           name={name}
                           placeholder={placeholder}
                           value={textValue}
                           readOnly={true}
                           clearButtonVisible={false}
                           isFocusedSelectAll={false}
                           onTouchTap={e => {
                               this.togglePopup(e);
                           }}/>

                <Popup className="month-picker-popup"
                       visible={popupVisible}
                       triggerEl={triggerEl}
                       position={position}
                       hasTriangle={false}
                       onRequestClose={() => {
                           this.closePopup();
                       }}>

                    <TextField className='calendar-input'
                               placeholder={placeholder}
                               clearButtonVisible={false}
                               value={textValue}
                               onChange={this.textFieldChangeHandle}/>
                    {
                        datePickerLevel == 'month' ?
                            <Month value={value}
                                   year={year}
                                   month={month}
                                   maxValue={maxValue}
                                   minValue={minValue}
                                   onChange={this.monthPickerChangeHandle}
                                   previousClick={this.datePickerChangeHandle}/>
                            :
                            <Year value={value}
                                  year={year}
                                  month={month}
                                  maxValue={maxValue}
                                  minValue={minValue}
                                  onChange={this.yearPickerChangeHandle}/>
                    }

                </Popup>
            </div>
        );
    }
}

MonthPicker.propTypes = {

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

MonthPicker.defaultProps = {
    name: '',
    maxValue: '',
    minValue: '',
    placeholder: 'Date',
    dateFormat: 'YYYY-MM',
    autoClose: true,
    isFooter: true,
    position: Position.BOTTOM_LEFT
};

export default MonthPicker;