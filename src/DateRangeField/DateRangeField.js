/**
 * @file DateRangePicker component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import DayPicker from '../_DayPicker';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';

// Statics
import Theme from '../Theme';

// Vendors
import moment from 'moment';
import DateUtil from '../_vendors/DateUtil';
import ComponentUtil from '../_vendors/ComponentUtil';

class DateRangePickerContent extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        const initValue = moment();
        this.validValue = true;

        this.state = {
            value: props.value, // Moment object
            left: {
                text: '',
                datePickerLevel: 'day',
                year: initValue.format('YYYY'),
                month: initValue.format('MM'),
                day: initValue.format('DD')
            },
            right: {
                text: '',
                datePickerLevel: 'day',
                year: initValue.format('MM') === '12' ?
                    +(initValue.format('YYYY')) + 1
                    :
                    initValue.format('YYYY'),
                month: initValue.format('MM') === '12' ?
                    1
                    :
                    +(initValue.format('MM')) + 1,
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
        this.setState({
            [select]: {
                ...this.state[select],
                datePickerLevel: selectLevel
            }
        });
    };

    dayPickerChangeHandle = (select, date) => {
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

    dayPickerHoverHandle = (select, date) => {
        let startTime = this.state.startTime, endTime = this.state.endTime;
        if (startTime && endTime === '') {
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

    monthAndYearChangeHandle = (select, date) => {

        this.setState({
            [select]: {
                ...this.state[select],
                year: date.year,
                month: date.month
            }
        });
    };


    monthPickerChangeHandle = (select, date) => {
        this.setState({
            [select]: {
                ...this.state[select],
                datePickerLevel: 'day',
                year: date.year,
                month: date.month
            }
        });
    };

    yearPickerChangeHandle = (select, year) => {
        this.setState({
            [select]: {
                ...this.state[select],
                datePickerLevel: 'month',
                year: year
            }
        });
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
            className, dateFormat, maxValue, minValue, ...restProps
        } = this.props;
        const {left, right, startTime, endTime, hoverTime} = this.state;
        const {
            monthAndYearChangeHandle, dayPickerChangeHandle, datePickerChangeHandle, dayPickerHoverHandle,
            monthPickerChangeHandle, yearPickerChangeHandle
        } = this;

        let maxYear = right.year, maxMonth = right.month;
        maxYear = parseInt(maxMonth, 10) === 1 ? +maxYear - 1 : maxYear;
        maxMonth = parseInt(maxMonth, 10) === 1 ? 11 : +maxMonth - 2;

        let maxDay = DateUtil.MonthDays(maxYear)[maxMonth],
            leftMaxValue = maxValue && moment([maxYear, maxMonth, maxDay]).isAfter(maxValue) ?
                maxValue
                :
                moment([maxYear, maxMonth, maxDay]).format('YYYY-MM-DD'),
            minYear = left.year,
            minMonth = left.month;
        minYear = parseInt(minMonth, 10) === 12 ? +minYear + 1 : minYear;
        minMonth = parseInt(minMonth, 10) === 12 ? 1 : +minMonth + 1;

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

            <div className={`date-range-picker-content ${className}`}>
                {
                    left.datePickerLevel === 'day' ?
                        <DayPicker {...restProps}
                                   {...leftProps}
                                   isFooter={false}
                                   isRange={true}
                                   monthAndYearChange={date => monthAndYearChangeHandle('left', date)}
                                   onChange={date => dayPickerChangeHandle('left', date)}
                                   previousClick={pickerLevel => datePickerChangeHandle('left', pickerLevel)}
                                   hoverHandle={date => dayPickerHoverHandle('left', date)}/>
                        :
                        (
                            left.datePickerLevel === 'month' ?
                                <MonthPicker {...restProps}
                                             {...leftProps}
                                             onChange={date => monthPickerChangeHandle('left', date)}
                                             previousClick={pickerLevel => datePickerChangeHandle('left',
                                                 pickerLevel)}/>
                                :
                                <YearPicker {...restProps}
                                            {...leftProps}
                                            onChange={date => yearPickerChangeHandle('left', date)}/>
                        )

                }

                {
                    right.datePickerLevel === 'day' ?
                        <DayPicker {...restProps}
                                   {...rightProps}
                                   isFooter={false}
                                   isRange={true}
                                   monthAndYearChange={date => monthAndYearChangeHandle('right', date)}
                                   onChange={date => dayPickerChangeHandle('right', date)}
                                   previousClick={pickerLevel => datePickerChangeHandle('right', pickerLevel)}
                                   hoverHandle={date => dayPickerHoverHandle('left', date)}/>
                        :
                        (
                            right.datePickerLevel === 'month' ?
                                <MonthPicker {...restProps}
                                             {...rightProps}
                                             onChange={date => monthPickerChangeHandle('right', date)}
                                             previousClick={pickerLevel => datePickerChangeHandle('right',
                                                 pickerLevel)}/>
                                :
                                <YearPicker {...restProps}
                                            {...rightProps}
                                            onChange={date => yearPickerChangeHandle('right', date)}/>
                        )

                }

            </div>
        );
    }
}

DateRangePickerContent.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the popup element.
     */

    style: PropTypes.object,


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
     * Date format.
     */
    dateFormat: PropTypes.string,

    /**
     * Callback function that is fired when the date value changes.
     */
    onChange: PropTypes.func

};

DateRangePickerContent.defaultProps = {
    dateFormat: 'YYYY-MM-DD',
    previousYearIconCls: 'fas fa-angle-double-left',
    previousMonthIconCls: 'fas fa-angle-left',
    nextYearIconCls: 'fas fa-angle-double-right',
    nextMonthIconCls: 'fas fa-angle-right',
    otherSelectedDate: []
};

export default DateRangePickerContent;
