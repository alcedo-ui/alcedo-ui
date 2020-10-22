/**
 * @file MaterialMonthPicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';

import MaterialDatePickerTextField from '../_MaterialDatePickerTextField';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';
import Popup from '../Popup';

import Theme from '../Theme';
import Position from '../_statics/Position';

import DropdownCalculation from '../_vendors/DropdownCalculation';
import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class MaterialMonthPicker extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.validValue = true;
        this.trigger = createRef();
        this.triggerEl = null;

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

    handleDatePickerChange = selectLevel => {
        this.setState({
            datePickerLevel: selectLevel
        });
    };

    handleTextFieldChange = text => {

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
                    }, () => {
                        this.props.onChange && this.props.onChange(text && moment(text).format(dateFormat));
                    });
                }
            }

        } else {
            this.setState({
                value: ''
            });
        }

    };

    handleMonthPickerChange = date => {
        const {dateFormat, autoClose, onChange} = this.props;
        let state = cloneDeep(this.state);
        state.popupVisible = !autoClose;
        state.value = moment(`${date.year}-${date.month}`, dateFormat);
        state.year = date.year;
        state.month = date.month;
        this.setState(state, () => {
            onChange(moment(state.value).format(dateFormat));
        });

    };

    handleYearPickerChange = year => {
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

        this.triggerEl = this.trigger && this.trigger.current && findDOMNode(this.trigger.current);

        // debugger
        const {value, dateFormat} = this.props;
        let state = cloneDeep(this.state);
        if (value) {
            if (!(moment(value, dateFormat).isValid())) {
                console.error('Invalid date');
                this.validValue = false;
            }
        }

        state.value = value ? moment(value, dateFormat) : '';
        state.year = value ? moment(value).format('YYYY') : moment().format('YYYY');
        state.month = value ? moment(value).format('MM') : moment().format('MM');
        this.setState(state);
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

    render() {

        const {
                className, name, placeholder, dateFormat, maxValue, minValue, label, isLabelAnimate, position,
                theme, popupClassName, rightIconCls, previousYearIconCls, previousMonthIconCls,
                nextYearIconCls, nextMonthIconCls, readOnly, disabled, parentEl
            } = this.props,
            {value, popupVisible, datePickerLevel, year, month, isAbove} = this.state,
            textValue = value && moment(value).format(dateFormat);

        return (
            <div className={classNames('material-month-picker', {
                [className]: className
            })}>

                <MaterialDatePickerTextField ref={this.trigger}
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
                                             onChange={this.handleTextFieldChange}
                                             onClick={e => {
                                                 this.togglePopup(e);
                                             }}/>

                <Popup className={`material-month-picker-popup ${popupClassName}`}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       parentEl={parentEl}
                       position={position ? position : (isAbove ? Position.TOP_LEFT : Position.BOTTOM_LEFT)}
                       hasTriangle={false}
                       onRender={this.handlePopupRender}
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
                                         onChange={this.handleMonthPickerChange}
                                         previousClick={this.handleDatePickerChange}/>
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
                                        onChange={this.handleYearPickerChange}/>
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
