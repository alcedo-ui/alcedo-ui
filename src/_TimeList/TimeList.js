/**
 * @file TimeList component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import TimeItems from '../_TimeItems';

// Vendors
import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';
import DC from '../_vendors/DateCalculation';
import ComponentUtil from '../_vendors/ComponentUtil';

class TimeList extends Component {

    static getDerivedStateFromProps(props, state) {

        const minValue = ComponentUtil.getDerivedState(props, state, 'minValue'),
            maxValue = ComponentUtil.getDerivedState(props, state, 'maxValue'),
            isRequired = ComponentUtil.getDerivedState(props, state, 'isRequired');

        let minHour, minMinute, minSecond, maxHour, maxMinute, maxSecond;
        if (minValue) {
            minHour = minValue.split(':')[0];
            minMinute = minValue.split(':')[1];
            minSecond = minValue.split(':')[2];
        }
        if (maxValue) {
            maxHour = maxValue.split(':')[0];
            maxMinute = maxValue.split(':')[1];
            maxSecond = maxValue.split(':')[2];
        }

        return {
            prevProps: props,
            hoursData: DC.rangeData(24, minHour, maxHour, isRequired),
            minutesData: minHour == state.hour ?
                DC.rangeData(60, minMinute, 60, isRequired)
                :
                maxHour == state.hour ?
                    DC.rangeData(60, 0, maxMinute, isRequired)
                    :
                    maxHour == minHour && minHour == state.hour ?
                        DC.rangeData(60, minMinute, maxMinute, isRequired)
                        :
                        DC.rangeData(60, undefined, undefined, isRequired),
            secondsData: minHour == state.hour && minMinute == state.minute ?
                DC.rangeData(60, minSecond, 60, isRequired)
                :
                maxHour == state.hour && maxMinute == state.minute ?
                    DC.rangeData(60, 0, maxSecond, isRequired)
                    :
                    maxHour == minHour && minHour == state.hour && minMinute == maxMinute && minMinute == state.minute ?
                        DC.rangeData(60, minSecond, maxSecond, isRequired)
                        :
                        DC.rangeData(60, undefined, undefined, isRequired),
            hour: props.hour,
            minute: props.minute,
            second: props.second,
            minValue: props.minValue,
            maxValue: props.maxValue,
            isRequired
        };

    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            hour: props.hour,
            minute: props.minute,
            second: props.second,
            hoursData: [],
            minutesData: [],
            secondsData: []
        };

    }

    rangeData = (range, minValue, maxValue) => {
        const {isRequired} = this.props;
        let arr = [];
        for (let i = 0; i < range; i++) {
            if (i < 10) {
                i = '0' + i;
            }
            let obj;
            if (isRequired) {
                ((+i > +maxValue) || (+i < +minValue)) ?
                    obj = {text: i, value: false}
                    :
                    obj = {text: i, value: true};
            } else {
                obj = {text: i, value: true};
            }
            arr.push(obj);
        }
        return arr;
    };

    /* eslint-disable complexity */
    handleHourChange = value => {
        let state = cloneDeep(this.state);
        const {minValue, maxValue} = this.props;
        let minHour, minMinute, minSecond, maxHour, maxMinute, maxSecond;
        if (minValue) {
            minHour = minValue.split(':')[0];
            minMinute = minValue.split(':')[1];
            minSecond = minValue.split(':')[2];
        }
        if (maxValue) {
            maxHour = maxValue.split(':')[0];
            maxMinute = maxValue.split(':')[1];
            maxSecond = maxValue.split(':')[2];
        }
        state.hour = value;

        if (minHour == state.hour) {
            state.minutesData = this.rangeData(60, minMinute, 60);
        } else if (maxHour == state.hour) {
            state.minutesData = this.rangeData(60, 0, maxMinute);
        } else if (maxHour == minHour && minHour == state.hour) {
            state.minutesData = this.rangeData(60, minMinute, maxMinute);
        } else {
            state.minutesData = this.rangeData(60);
        }

        if (minHour == state.hour && minMinute == state.minute) {
            state.secondsData = this.rangeData(60, minSecond, 60);
        } else if (maxHour == state.hour && maxMinute == state.minute) {
            state.secondsData = this.rangeData(60, 0, maxSecond);
        } else if (maxHour == minHour && minHour == state.hour && minMinute == maxMinute && minMinute == state.minute) {
            state.secondsData = this.rangeData(60, minSecond, maxSecond);
        } else {
            state.secondsData = this.rangeData(60);
        }
        if (minValue && moment('2000-01-01 ' + value + ':' + state.minute + ':' + state.second).isBefore('2000-01-01 ' + minValue) || maxValue && moment('2000-01-01 ' + value + ':' + state.minute + ':' + state.second).isAfter('2000-01-01 ' + maxValue)) {
            if (minValue && moment('2000-01-01 ' + value + ':' + state.minute + ':' + state.second).isBefore('2000-01-01 ' + minValue)) {
                state.hour = moment('2000-01-01 ' + minValue).format('HH');
                state.minute = moment('2000-01-01 ' + minValue).format('mm');
                state.second = moment('2000-01-01 ' + minValue).format('ss');
            } else {
                state.hour = moment('2000-01-01 ' + maxValue).format('HH');
                state.minute = moment('2000-01-01 ' + maxValue).format('mm');
                state.second = moment('2000-01-01 ' + maxValue).format('ss');
            }
            this.setState(state, () => {
                this.props.onChange && this.props.onChange({
                    hour: state.hour,
                    minute: state.minute,
                    second: state.second
                });
            });
        } else {
            this.setState(state, () => {
                this.props.onChange && this.props.onChange({hour: value, minute: state.minute, second: state.second});
            });
        }
    };

    handleMinuteChange = value => {
        let state = cloneDeep(this.state);
        const {minValue, maxValue} = this.props;
        let minHour, minMinute, minSecond, maxHour, maxMinute, maxSecond;
        if (minValue) {
            minHour = minValue.split(':')[0];
            minMinute = minValue.split(':')[1];
            minSecond = minValue.split(':')[2];
        }
        if (maxValue) {
            maxHour = maxValue.split(':')[0];
            maxMinute = maxValue.split(':')[1];
            maxSecond = maxValue.split(':')[2];
        }
        state.minute = value;
        if (minHour == state.hour && minMinute == state.minute) {
            state.secondsData = this.rangeData(60, minSecond, 60);
        } else if (maxHour == state.hour && maxMinute == state.minute) {
            state.secondsData = this.rangeData(60, 0, maxSecond);
        } else if (maxHour == minHour && minHour == state.hour && minMinute == maxMinute && minMinute == state.minute) {
            state.secondsData = this.rangeData(60, minSecond, maxSecond);
        } else {
            state.secondsData = this.rangeData(60);
        }

        if (minValue && moment('2000-01-01 ' + state.hour + ':' + state.minute + ':' + value).isBefore('2000-01-01 ' + minValue) || maxValue && moment('2000-01-01 ' + state.hour + ':' + state.minute + ':' + value).isAfter('2000-01-01 ' + maxValue)) {
            if (minValue && moment('2000-01-01 ' + value + ':' + state.minute + ':' + state.second).isBefore('2000-01-01 ' + minValue)) {
                state.hour = moment('2000-01-01 ' + minValue).format('HH');
                state.minute = moment('2000-01-01 ' + minValue).format('mm');
                state.second = moment('2000-01-01 ' + minValue).format('ss');
            } else {
                state.hour = moment('2000-01-01 ' + maxValue).format('HH');
                state.minute = moment('2000-01-01 ' + maxValue).format('mm');
                state.second = moment('2000-01-01 ' + maxValue).format('ss');
            }
            this.setState(state, () => {
                this.props.onChange && this.props.onChange({
                    hour: state.hour,
                    minute: state.minute,
                    second: state.second
                });
            });
        } else {
            this.setState(state, () => {
                this.props.onChange && this.props.onChange({hour: state.hour, minute: value, second: state.second});
            });
        }

    };

    handleSecondChange = value => {
        let state = cloneDeep(this.state);
        const {minValue, maxValue} = this.props;
        if (minValue && moment('2000-01-01 ' + state.hour + ':' + state.minute + ':' + value).isBefore('2000-01-01 ' + minValue) || maxValue && moment('2000-01-01 ' + state.hour + ':' + state.minute + ':' + value).isAfter('2000-01-01 ' + maxValue)) {
            if (minValue && moment('2000-01-01 ' + value + ':' + state.minute + ':' + state.second).isBefore('2000-01-01 ' + minValue)) {
                state.hour = moment('2000-01-01 ' + minValue).format('HH');
                state.minute = moment('2000-01-01 ' + minValue).format('mm');
                state.second = moment('2000-01-01 ' + minValue).format('ss');
            } else {
                state.hour = moment('2000-01-01 ' + maxValue).format('HH');
                state.minute = moment('2000-01-01 ' + maxValue).format('mm');
                state.second = moment('2000-01-01 ' + maxValue).format('ss');
            }
            this.setState(state, () => {
                this.props.onChange && this.props.onChange({
                    hour: state.hour,
                    minute: state.minute,
                    second: state.second
                });
            });
        } else {
            this.setState({
                second: value
            }, () => {
                this.props.onChange && this.props.onChange({hour: state.hour, minute: state.minute, second: value});
            });
        }

    };

    render() {

        const {className, popupVisible, dateFormat} = this.props,
            {hour, minute, second, hoursData, minutesData, secondsData} = this.state,

            itemsStyle = {
                width: 100 / (dateFormat.split(':').length) + '%'
            };

        return (
            <div className={classNames('calendar', {
                [className]: className
            })}>

                <TimeItems className="hours"
                           style={itemsStyle}
                           data={hoursData}
                           value={hour}
                           popupVisible={popupVisible}
                           onChange={this.handleHourChange}/>

                {
                    dateFormat.split(':').length > 1 ?
                        <TimeItems className="minutes"
                                   style={itemsStyle}
                                   data={minutesData}
                                   value={minute}
                                   popupVisible={popupVisible}
                                   onChange={this.handleMinuteChange}/>
                        :
                        null
                }

                {
                    dateFormat.split(':').length > 2 ?
                        <TimeItems className="seconds"
                                   style={itemsStyle}
                                   data={secondsData}
                                   value={second}
                                   popupVisible={popupVisible}
                                   onChange={this.handleSecondChange}/>
                        :
                        null
                }

            </div>
        );
    }
}

TimeList.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    popupVisible: PropTypes.bool,
    hour: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minute: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    second: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isRequired: PropTypes.bool,
    maxValue: PropTypes.string,
    minValue: PropTypes.string,
    dateFormat: PropTypes.string,

    onChange: PropTypes.func

};

export default TimeList;
