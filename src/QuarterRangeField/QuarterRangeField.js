/**
 * @file: /alcedo-ui/src/QuarterRangeFiled/QuarterRangeFiled.js
 * @author: zhongweichao(zhongwei.chao@derbysoft.net)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import QuarterPicker from '../_QuarterPicker';
import YearPicker from '../_YearPicker';

// Statics
import Theme from '../Theme';

// Vendors
import moment from 'moment';
import DateUtil from '../_vendors/DateUtil';
import ComponentUtil from '../_vendors/ComponentUtil';

class QuarterRangeField extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        const initValue = moment();
        this.validValue = true;

        this.state = {
            value: props.value, // Moment object
            left: {
                text: '',
                datePickerLevel: 'quarter',
                year: initValue.format('YYYY'),
                quarter: initValue.format('Q')
            },
            right: {
                text: '',
                datePickerLevel: 'quarter',
                year: initValue.format('Q') === '4' ?
                    +(initValue.format('YYYY')) + 1
                    :
                    initValue.format('YYYY'),
                quarter: initValue.format('Q') === '4' ?
                    1
                    :
                    +(initValue.format('Q')) + 1
            },
            startTime: '',
            endTime: '',
            historyStartTime: '',
            historyEndTime: '',
            hoverTime: ''
        };

    }

    datePickerLevelChangeHandle = (select, selectLevel) => {
        this.setState({
            [select]: {
                ...this.state[select],
                datePickerLevel: selectLevel
            }
        });
    };

    quarterPickerHoverHandle = (select, date) => {
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

    quarterAndYearChangeHandle = (select, date) => {
        this.setState({
            [select]: {
                ...this.state[select],
                year: date.year
            }
        });
    };


    quarterPickerChangeHandle = (select, date) => {
        if (this.state.endTime) {
            this.setState({
                startTime: date.time,
                endTime: '',
                hoverTime: '',
                [select]: {
                    ...this.state[select],
                    text: date.time,
                    year: date.year,
                    quarter: date.quarter
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
                    startTime,
                    endTime
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
                    quarter: date.quarter
                }
            });
        }
    };

    yearPickerChangeHandle = (select, year) => {
        this.setState({
            [select]: {
                ...this.state[select],
                datePickerLevel: 'quarter',
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
                        quarter: value[0].split('-')[1],
                        month: moment(value[0]).format('Q')
                    }, right = {
                        ...this.state.right,
                        text: rightValue,
                        year: rightValue ? moment(value[1]).format('YYYY') : moment(value[0]).format('YYYY'),
                        month: rightValue ? moment(value[1]).format('Q') : moment(value[0]).format('Q'),
                        quarter: rightValue ? value[1].split('-')[1] : value[0].split('-')[1]
                    };
                    this.setState({
                        left: DateUtil.setMonthRange(left, right).start,
                        right: DateUtil.setMonthRange(left, right).end,
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
                    month: moment().format('Q')
                }, right = {
                    ...this.state.right,
                    text: '',
                    year: moment().format('YYYY'),
                    month: moment().format('Q')
                };
                this.setState({
                    left: DateUtil.setMonthRange(left, right).start,
                    right: DateUtil.setMonthRange(left, right).end,
                    startTime: '',
                    endTime: '',
                    historyStartTime: '',
                    historyEndTime: ''
                });
            }
        } else {
            const left = {
                ...this.state.left,
                text: '',
                year: moment().format('YYYY'),
                month: moment().format('Q')
            }, right = {
                ...this.state.right,
                text: '',
                year: moment().format('YYYY'),
                month: moment().format('Q')
            };
            this.setState({
                left: DateUtil.setMonthRange(left, right).start,
                right: DateUtil.setMonthRange(left, right).end,
                startTime: '',
                endTime: '',
                historyStartTime: '',
                historyEndTime: ''
            });
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

    // eslint-disable-next-line complexity
    render() {

        const {
            className, dateFormat, maxValue, minValue, ...restProps
        } = this.props;
        const {left, right, startTime, endTime, hoverTime} = this.state;
        const {
            datePickerLevelChangeHandle, quarterPickerHoverHandle, quarterAndYearChangeHandle,
            quarterPickerChangeHandle, yearPickerChangeHandle
        } = this;

        let maxYear = +(right.year) - 1, maxQuarter = 4,
            leftMaxValue = '';
            // leftMaxValue = right.text && maxValue ?
            //     moment.min(moment(maxValue), moment([maxYear, maxMonth])).format('YYYY-MM')
            //     :
            //     moment([maxYear, 11]).format('YYYY-MM');

        if (right.text && maxValue) {
            let maxValueYear = maxValue.split('-')[0],
                maxValueQuarter = maxValue.split('-')[1],
                maxValueFormater = moment(maxValueYear).quarter(maxValueQuarter);

            leftMaxValue = moment.min(maxValueFormater, moment([maxYear])).quarter(maxQuarter).format('YYYY-Q');
        } else {
            leftMaxValue = moment([maxYear]).quarter(maxQuarter).format('YYYY-Q');
        }
        let minYear = +(left.year) + 1,
            minQuarter = 0,
            rightMinValue = '';
            // rightMinValue = left.text && minValue ?
            //     moment.max(moment(minValue), moment([minYear, minMonth])).format('YYYY-MM')
            //     :
            //     moment([minYear, minMonth]).format('YYYY-MM');

        if (left.text && minValue) {
            let minValueYear = minValue.split('-')[0],
                minValueQuarter = minValue.split('-')[1],
                minValueFormater = moment(minValueYear).quarter(minValueQuarter);

            rightMinValue = moment.max(minValueFormater, moment([minYear])).quarter(minQuarter).format('YYYY-Q');
        } else {
            rightMinValue = moment([minYear]).quarter(minQuarter).format('YYYY-Q');
        }

         let leftProps = {
                ...left,
                value: left.text,
                maxValue: maxValue && minValue ?
                    moment(leftMaxValue).isAfter(moment(maxValue)) ?
                        maxValue
                        :
                        leftMaxValue
                    :
                    !maxValue && minValue ?
                        moment(leftMaxValue).isAfter(moment(minValue)) ?
                            leftMaxValue
                            :
                            minValue
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
                            moment(rightMinValue).isAfter(moment(maxValue)) ?
                                maxValue
                                :
                                rightMinValue
                            :
                            rightMinValue,
                maxValue: maxValue,
                startTime,
                endTime,
                hoverTime,
                dateFormat
            };
        return (

            <div className={`quarter-range-picker-content ${className}`}>
                {
                    left.datePickerLevel === 'quarter' ?
                        <QuarterPicker {...restProps}
                                     {...leftProps}
                                     isRange={true}
                                     campareSelfLeft={true}
                                     campareSelfRight={false}
                                     onChange={date => quarterPickerChangeHandle('left', date)}
                                     previousClick={pickerLevel => datePickerLevelChangeHandle('left',
                                         pickerLevel)}
                                     quarterAndYearChange={date => quarterAndYearChangeHandle('left', date)}
                                     hoverHandle={date => quarterPickerHoverHandle('left', date)}/>
                        :
                        <YearPicker {...restProps}
                                    {...leftProps}
                                    onChange={date => yearPickerChangeHandle('left', date)}/>
                }

                {
                    right.datePickerLevel === 'quarter' ?
                        <QuarterPicker {...restProps}
                                     {...rightProps}
                                     isRange={true}
                                     campareSelfLeft={false}
                                     campareSelfRight={true}
                                     onChange={date => quarterPickerChangeHandle('right', date)}
                                     previousClick={pickerLevel => datePickerLevelChangeHandle('right',
                                         pickerLevel)}
                                     quarterAndYearChange={date => quarterAndYearChangeHandle('right', date)}
                                     hoverHandle={date => quarterPickerHoverHandle('right', date)}/>
                        :
                        <YearPicker {...restProps}
                                    {...rightProps}
                                    onChange={date => yearPickerChangeHandle('right', date)}/>


                }

            </div>
        );
    }
}

QuarterRangeField.propTypes = {

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

QuarterRangeField.defaultProps = {
    dateFormat: 'YYYY-Q',
    previousYearIconCls: 'fas fa-angle-double-left',
    previousMonthIconCls: 'fas fa-angle-left',
    nextYearIconCls: 'fas fa-angle-double-right',
    nextMonthIconCls: 'fas fa-angle-right'
};

export default QuarterRangeField;
