/**
 * @file MaterialMonthPicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';

import MaterialDatePickerTextField from '../_MaterialDatePickerTextField';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';
import Popup from '../Popup';
import Theme from '../Theme';

import Position from '../_statics/Position';
import {findDOMNode} from 'react-dom';
import DropdownCalculation from '../_vendors/DropdownCalculation';

class MaterialMonthPicker extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.validValue = true;

        this.state = {
            value: props.value,
            popupVisible: false,
            isAbove: false,
            year: moment(props.value).format('YYYY'),
            month: moment(props.value).format('MM'),
            datePickerLevel: 'month',
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

            if (moment(text, this.props.dateFormat, true).isValid()) {
                if ((minValue && moment(text).isBefore(minValue)) || (maxValue && moment(text).isAfter(maxValue))) {
                    //
                } else {
                    const year = moment(text).format('YYYY'),
                        month = moment(text).format('MM');
                    this.setState({
                        value: moment(text, dateFormat),
                        year: year,
                        month: month
                    });
                }
            }

        } else {
            this.setState({
                value: ''
            });
        }

    };

    monthPickerChangeHandle = date => {
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
    };

    yearPickerChangeHandle = year => {
        this.setState({
            datePickerLevel: 'month',
            year: year
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
        const {value} = this.state;
        !this.props.disabled && this.setState({
            popupVisible: false
        }, () => {
            this.props.onChange && this.props.onChange(value && moment(value).format(this.props.dateFormat));
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

        this.datePicker = this.refs.datePicker;
        this.triggerEl = findDOMNode(this.refs.trigger);
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

    render() {

        const {
                className, name, placeholder, dateFormat, maxValue, minValue, label, isLabelAnimate, position,
                theme, popupClassName, rightIconCls, previousYearIconCls, previousMonthIconCls,
                nextYearIconCls, nextMonthIconCls, readOnly, disabled
            } = this.props,
            {value, popupVisible, datePickerLevel, year, month, isAbove} = this.state,

            pickerClassName = classNames('material-month-picker', {
                [className]: className
            }),

            textValue = value && moment(value).format(dateFormat);

        return (
            <div ref="datePicker"
                 className={pickerClassName}>

                <MaterialDatePickerTextField ref="trigger"
                                             theme={theme}
                                             name={name}
                                             placeholder={placeholder}
                                             value={textValue}
                                             readOnly={readOnly ? readOnly : !popupVisible}
                                             clearButtonVisible={false}
                                             isFocusedSelectAll={false}
                                             disabled={disabled}
                                             popupVisible={popupVisible}
                                             label={label}
                                             isLabelAnimate={isLabelAnimate}
                                             rightIconCls={rightIconCls}
                                             onChange={this.textFieldChangeHandle}
                                             onClick={e => {
                                                 this.togglePopup(e);
                                             }}/>

                <Popup className={`material-month-picker-popup ${popupClassName}`}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       position={position ? position : (isAbove ? Position.TOP_LEFT : Position.BOTTOM_LEFT)}
                       hasTriangle={false}
                       onRender={this.popupRenderHandler}
                       onRequestClose={this.closePopup}>

                    {
                        datePickerLevel == 'month' ?
                            <MonthPicker value={value}
                                         year={year}
                                         month={month}
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
                                        maxValue={maxValue}
                                        minValue={minValue}
                                        previousYearIconCls={previousYearIconCls}
                                        previousMonthIconCls={previousMonthIconCls}
                                        nextYearIconCls={nextYearIconCls}
                                        nextMonthIconCls={nextMonthIconCls}
                                        onChange={this.yearPickerChangeHandle}/>
                    }

                </Popup>
            </div>
        );
    }
}

MaterialMonthPicker.propTypes = {

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
     * The label of the MaterialMonthPicker.
     */
    label: PropTypes.any,

    /**
     * The animate of the MaterialMonthPicker.
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
     * MaterialMonthPicker textField element placeholder.
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
     * If true,materialMonthPicker textField is readOnly.
     */
    readOnly: PropTypes.bool,
    /**
     * If true,materialMonthPicker textField is disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Callback function that is fired when the date value changes.
     */
    onChange: PropTypes.func

};

MaterialMonthPicker.defaultProps = {
    name: '',
    maxValue: '',
    minValue: '',
    popupClassName: '',
    placeholder: 'Date',
    dateFormat: 'YYYY-MM',
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

export default MaterialMonthPicker;