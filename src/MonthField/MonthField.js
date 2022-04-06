/**
 * @file MonthPicker component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import Month from '../_MonthPicker';
import Year from '../_YearPicker';

// Vendors
import ComponentUtil from '../_vendors/ComponentUtil';
import isArray from 'lodash/isArray';
import Util from '../_vendors/Util';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';
import SelectMode from '../_statics/SelectMode';

class MonthField extends Component {

    static Theme = Theme;
    static Position = Position;
    static SelectMode = SelectMode;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.validValue = true;

        this.state = {
            value: props.value,
            year: moment(props.value).format('YYYY'),
            month: moment(props.value).format('MM'),
            datePickerLevel: 'month'
        };

    }

    handleDatePickerChange = selectLevel => {
        this.setState({
            datePickerLevel: selectLevel
        });
    };

    handleMonthPickerChange = date => {
        const {dateFormat, selectMode, onChange} = this.props, {value} = this.state,
            month = moment(`${date.year}-${date.month}`).format(dateFormat);
        let state = {};

        if (selectMode === SelectMode.MULTI_SELECT) {

            let result = value ? value.slice() : value;
            if (!result || !isArray(result)) {
                result = [];
            }
            const index = value.findIndex(item => moment(item).format(dateFormat) === month);
            if (index > -1) {
                result.splice(index, 1);
            } else {
                result.push(month);
            }

            state.value = result;

        } else if (selectMode === SelectMode.SINGLE_SELECT) {
            state.value = month;
        }

        this.setState({
            value: state.value,
            year: date.year,
            month: date.month
        }, () => {
            onChange(state.value);
        });
    };

    handleYearPickerChange = year => {
        this.setState({
            datePickerLevel: 'month',
            year: year
        });
    };

    componentDidMount() {

        // debugger
        const {value, dateFormat, selectMode} = this.props;

        if (value) {
            if (!((moment(value, dateFormat).isValid()) || (value.some(item => moment(item, dateFormat).isValid())))) {
                console.error('Invalid date');
                this.validValue = false;
            }
        }

        this.setState({
            value: selectMode === SelectMode.SINGLE_SELECT ?
                value ?
                    moment(value).format(dateFormat)
                    :
                    ''
                :
                value ?
                    value.map(item => moment(item).format(dateFormat))
                    :
                    [],
            year: value?.[0] ? moment(value[0]).format('YYYY') : moment().format('YYYY'),
            month: value?.[0] ? moment(value[0]).format('MM') : moment().format('MM')
        });
    }

    static getDerivedStateFromProps(props, state) {

        const value = ComponentUtil.getDerivedState(props, state, 'value'),
            dateFormat = ComponentUtil.getDerivedState(props, state, 'dateFormat'),
            selectMode = ComponentUtil.getDerivedState(props, state, 'selectMode');

        return {
            prevProps: props,
            selectMode,
            value: selectMode === SelectMode.SINGLE_SELECT ?
                value ?
                    moment(value).format(dateFormat)
                    :
                    ''
                :
                value ?
                    value.map(item => moment(item).format(dateFormat))
                    :
                    [],
            dateFormat
        };
    }


    render() {

        const {
                className, maxValue, minValue, previousYearIconCls, previousMonthIconCls, nextYearIconCls,
                nextMonthIconCls, selectMode
            } = this.props,
            {value, datePickerLevel, year, month} = this.state;

        return (
            <div className={classNames('month-field', {
                [className]: className
            })}>
                {
                    datePickerLevel === 'month' ?
                        <Month value={value}
                               year={year}
                               month={month}
                               maxValue={maxValue}
                               minValue={minValue}
                               selectMode={selectMode}
                               previousYearIconCls={previousYearIconCls}
                               previousMonthIconCls={previousMonthIconCls}
                               nextYearIconCls={nextYearIconCls}
                               nextMonthIconCls={nextMonthIconCls}
                               onChange={this.handleMonthPickerChange}
                               previousClick={this.handleDatePickerChange}/>
                        :
                        <Year value={value}
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
            </div>
        );
    }
}

MonthField.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

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
     * Date format.
     */
    dateFormat: PropTypes.string,

    /**
     * The mode of monthField.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    rightIconCls: PropTypes.string,
    previousYearIconCls: PropTypes.string,
    previousMonthIconCls: PropTypes.string,
    nextYearIconCls: PropTypes.string,
    nextMonthIconCls: PropTypes.string,

    /**
     * Callback function that is fired when the date value changes.
     */
    onChange: PropTypes.func

};

MonthField.defaultProps = {
    name: '',
    maxValue: '',
    minValue: '',
    dateFormat: 'YYYY-MM',
    selectMode: SelectMode.SINGLE_SELECT,
    previousYearIconCls: 'fas fa-angle-double-left',
    previousMonthIconCls: 'fas fa-angle-left',
    nextYearIconCls: 'fas fa-angle-double-right',
    nextMonthIconCls: 'fas fa-angle-right'

};

export default MonthField;
