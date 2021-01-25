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

    /* eslint-disable complexity */
    handleHourChange = value => {
        const {minValue, maxValue, isRequired} = this.props;
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

        let flag = minValue && moment('2000-01-01 ' + value + ':' + this.state.minute + ':' + this.state.second).isBefore('2000-01-01 ' + minValue)
            || maxValue && moment('2000-01-01 ' + value + ':' + this.state.minute + ':' + this.state.second).isAfter('2000-01-01 ' + maxValue),
            hour = flag ?
                minValue && moment('2000-01-01 ' + value + ':' + this.state.minute + ':' + this.state.second).isBefore('2000-01-01 ' + minValue) ?
                    moment('2000-01-01 ' + minValue).format('HH') : moment('2000-01-01 ' + maxValue).format('HH') : value,
            minute = flag ?
                minValue && moment('2000-01-01 ' + value + ':' + this.state.minute + ':' + this.state.second).isBefore('2000-01-01 ' + minValue) ?
                    moment('2000-01-01 ' + minValue).format('mm') : moment('2000-01-01 ' + maxValue).format('mm') : this.state.minute,
            second = flag ? minValue && moment('2000-01-01 ' + value + ':' + this.state.minute + ':' + this.state.second).isBefore('2000-01-01 ' + minValue) ?
                moment('2000-01-01 ' + minValue).format('ss') : moment('2000-01-01 ' + maxValue).format('ss') : this.state.second;

        this.setState({
            hour,
            minute,
            second,
            minutesData: minHour == value ?
                DC.rangeData(60, minMinute, 60, isRequired)
                :
                maxHour == value ?
                    DC.rangeData(60, 0, maxMinute, isRequired)
                    :
                    maxHour == minHour && minHour == value ?
                        DC.rangeData(60, minMinute, maxMinute, isRequired)
                        :
                        DC.rangeData(60, undefined, undefined, isRequired),
            secondsData: minHour == value && minMinute == this.state.minute ?
                DC.rangeData(60, minSecond, 60, isRequired)
                :
                maxHour == value && maxMinute == this.state.minute ?
                    DC.rangeData(60, 0, maxSecond, isRequired)
                    :
                    maxHour == minHour && minHour == value && minMinute == maxMinute && minMinute == this.state.minute ?
                        DC.rangeData(60, minSecond, maxSecond, isRequired)
                        :
                        DC.rangeData(60, undefined, undefined, isRequired)
        }, () => {
            this.props.onChange && this.props.onChange({
                hour,
                minute,
                second
            });
        });

        // state.hour = value;
        //
        // if (minHour == state.hour) {
        //     state.minutesData = this.rangeData(60, minMinute, 60);
        // } else if (maxHour == state.hour) {
        //     state.minutesData = this.rangeData(60, 0, maxMinute);
        // } else if (maxHour == minHour && minHour == state.hour) {
        //     state.minutesData = this.rangeData(60, minMinute, maxMinute);
        // } else {
        //     state.minutesData = this.rangeData(60);
        // }
        //
        // if (minHour == state.hour && minMinute == state.minute) {
        //     state.secondsData = this.rangeData(60, minSecond, 60);
        // } else if (maxHour == state.hour && maxMinute == state.minute) {
        //     state.secondsData = this.rangeData(60, 0, maxSecond);
        // } else if (maxHour == minHour && minHour == state.hour && minMinute == maxMinute && minMinute == state.minute) {
        //     state.secondsData = this.rangeData(60, minSecond, maxSecond);
        // } else {
        //     state.secondsData = this.rangeData(60);
        // }

        //
        // if (minValue && moment('2000-01-01 ' + value + ':' + state.minute + ':' + state.second).isBefore('2000-01-01 ' + minValue)
        //     || maxValue && moment('2000-01-01 ' + value + ':' + state.minute + ':' + state.second).isAfter('2000-01-01 ' + maxValue)) {
        // if (minValue && moment('2000-01-01 ' + value + ':' + state.minute + ':' + state.second).isBefore('2000-01-01 ' + minValue)) {
        //     state.hour = moment('2000-01-01 ' + minValue).format('HH');
        //     state.minute = moment('2000-01-01 ' + minValue).format('mm');
        //     state.second = moment('2000-01-01 ' + minValue).format('ss');
        // } else {
        //     state.hour = moment('2000-01-01 ' + maxValue).format('HH');
        //     state.minute = moment('2000-01-01 ' + maxValue).format('mm');
        //     state.second = moment('2000-01-01 ' + maxValue).format('ss');
        // }
        // this.setState(state, () => {
        //     this.props.onChange && this.props.onChange({
        //         hour: minValue && moment('2000-01-01 ' + value + ':' + state.minute + ':' + state.second).isBefore('2000-01-01 ' + minValue) ?
        //             moment('2000-01-01 ' + minValue).format('HH') : moment('2000-01-01 ' + maxValue).format('HH'),
        //         minute: minValue && moment('2000-01-01 ' + value + ':' + state.minute + ':' + state.second).isBefore('2000-01-01 ' + minValue) ?
        //             moment('2000-01-01 ' + minValue).format('mm') : moment('2000-01-01 ' + maxValue).format('mm'),
        //         second: minValue && moment('2000-01-01 ' + value + ':' + state.minute + ':' + state.second).isBefore('2000-01-01 ' + minValue) ?
        //             moment('2000-01-01 ' + minValue).format('ss') : moment('2000-01-01 ' + maxValue).format('ss')
        //     });
        // });
        // } else {
        //     this.setState(state, () => {
        //         this.props.onChange && this.props.onChange({
        //             hour: flag ?
        //                 minValue && moment('2000-01-01 ' + value + ':' + this.state.minute + ':' + this.state.second).isBefore('2000-01-01 ' + minValue) ?
        //                     moment('2000-01-01 ' + minValue).format('HH') : moment('2000-01-01 ' + maxValue).format('HH') : value,
        //             minute: flag ?
        //                 minValue && moment('2000-01-01 ' + value + ':' + this.state.minute + ':' + this.state.second).isBefore('2000-01-01 ' + minValue) ?
        //                     moment('2000-01-01 ' + minValue).format('mm') : moment('2000-01-01 ' + maxValue).format('mm') : state.minute,
        //             second: flag ? minValue && moment('2000-01-01 ' + value + ':' + this.state.minute + ':' + this.state.second).isBefore('2000-01-01 ' + minValue) ?
        //                 moment('2000-01-01 ' + minValue).format('ss') : moment('2000-01-01 ' + maxValue).format('ss') : state.second
        //         });
        //     });
        // }

    };

    handleMinuteChange = value => {
        const {minValue, maxValue, isRequired} = this.props;
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

        let flag = minValue && moment('2000-01-01 ' + this.state.hour + ':' + value + ':' + this.state.second).isBefore('2000-01-01 ' + minValue)
            || maxValue && moment('2000-01-01 ' + this.state.hour + ':' + value + ':' + this.state.second).isAfter('2000-01-01 ' + maxValue),
            hour = flag ?
                minValue && moment('2000-01-01 ' + this.state.hour + ':' + value + ':' + this.state.second).isBefore('2000-01-01 ' + minValue) ?
                    moment('2000-01-01 ' + minValue).format('HH') : moment('2000-01-01 ' + maxValue).format('HH') : this.state.hour,
            minute = flag ?
                minValue && moment('2000-01-01 ' + this.state.hour + ':' + value + ':' + this.state.second).isBefore('2000-01-01 ' + value) ?
                    moment('2000-01-01 ' + minValue).format('mm') : moment('2000-01-01 ' + maxValue).format('mm') : value,
            second = flag ? minValue && moment('2000-01-01 ' + this.state.hour + ':' + value + ':' + this.state.second).isBefore('2000-01-01 ' + minValue) ?
                moment('2000-01-01 ' + minValue).format('ss') : moment('2000-01-01 ' + maxValue).format('ss') : this.state.second;

        this.setState({
            hour,
            minute,
            second,
            secondsData: minHour == this.state.hour && minMinute == value ?
                DC.rangeData(60, minSecond, 60, isRequired)
                :
                maxHour == this.state.hour && maxMinute == value ?
                    DC.rangeData(60, 0, maxSecond, isRequired)
                    :
                    maxHour == minHour && minHour == this.state.hour && minMinute == maxMinute && minMinute == value ?
                        DC.rangeData(60, minSecond, maxSecond, isRequired)
                        :
                        DC.rangeData(60, undefined, undefined, isRequired)
        }, () => {
            this.props.onChange && this.props.onChange({
                hour,
                minute,
                second
            });
        });

        // state.minute = value;
        // if (minHour == state.hour && minMinute == state.minute) {
        //     state.secondsData = DC.rangeData(60, minSecond, 60, isRequired);
        // } else if (maxHour == state.hour && maxMinute == state.minute) {
        //     state.secondsData = DC.rangeData(60, 0, maxSecond, isRequired);
        // } else if (maxHour == minHour && minHour == state.hour && minMinute == maxMinute && minMinute == state.minute) {
        //     state.secondsData = DC.rangeData(60, minSecond, maxSecond, isRequired);
        // } else {
        //     state.secondsData = DC.rangeData(60, undefined, undefined, isRequired);
        // }
        //
        // if (minValue && moment('2000-01-01 ' + state.hour + ':' + state.minute + ':' + value).isBefore('2000-01-01 ' + minValue) || maxValue && moment('2000-01-01 ' + state.hour + ':' + state.minute + ':' + value).isAfter('2000-01-01 ' + maxValue)) {
        //     if (minValue && moment('2000-01-01 ' + value + ':' + state.minute + ':' + state.second).isBefore('2000-01-01 ' + minValue)) {
        //         state.hour = moment('2000-01-01 ' + minValue).format('HH');
        //         state.minute = moment('2000-01-01 ' + minValue).format('mm');
        //         state.second = moment('2000-01-01 ' + minValue).format('ss');
        //     } else {
        //         state.hour = moment('2000-01-01 ' + maxValue).format('HH');
        //         state.minute = moment('2000-01-01 ' + maxValue).format('mm');
        //         state.second = moment('2000-01-01 ' + maxValue).format('ss');
        //     }
        //     this.setState(state, () => {
        //         this.props.onChange && this.props.onChange({
        //             hour: state.hour,
        //             minute: state.minute,
        //             second: state.second
        //         });
        //     });
        // } else {
        //     this.setState(state, () => {
        //         this.props.onChange && this.props.onChange({hour: state.hour, minute: value, second: state.second});
        //     });
        // }

    };

    handleSecondChange = value => {
        const {minValue, maxValue} = this.props,
            flag = minValue && moment('2000-01-01 ' + this.state.hour + ':' + this.state.minute + ':' + value).isBefore('2000-01-01 ' + minValue)
                || maxValue && moment('2000-01-01 ' + this.state.hour + ':' + this.state.minute + ':' + value).isAfter('2000-01-01 ' + maxValue),
            hour = flag ?
                minValue && moment('2000-01-01 ' + this.state.hour + ':' + this.state.minute + ':' + value).isBefore('2000-01-01 ' + minValue) ?
                    moment('2000-01-01 ' + minValue).format('HH') : moment('2000-01-01 ' + maxValue).format('HH') : this.state.hour,
            minute = flag ?
                minValue && moment('2000-01-01 ' + this.state.hour + ':' + this.state.minute + ':' + value).isBefore('2000-01-01 ' + value) ?
                    moment('2000-01-01 ' + minValue).format('mm') : moment('2000-01-01 ' + maxValue).format('mm') : this.state.minute,
            second = flag ? minValue && moment('2000-01-01 ' + this.state.hour + ':' + this.state.minute + ':' + value).isBefore('2000-01-01 ' + minValue) ?
                moment('2000-01-01 ' + minValue).format('ss') : moment('2000-01-01 ' + maxValue).format('ss') : value;


        this.setState({
            hour,
            minute,
            second
        }, () => {
            this.props.onChange && this.props.onChange({
                hour,
                minute,
                second
            });
        });

        // if (minValue && moment('2000-01-01 ' + state.hour + ':' + state.minute + ':' + value).isBefore('2000-01-01 ' + minValue) || maxValue && moment('2000-01-01 ' + state.hour + ':' + state.minute + ':' + value).isAfter('2000-01-01 ' + maxValue)) {
        //     if (minValue && moment('2000-01-01 ' + value + ':' + state.minute + ':' + state.second).isBefore('2000-01-01 ' + minValue)) {
        //         state.hour = moment('2000-01-01 ' + minValue).format('HH');
        //         state.minute = moment('2000-01-01 ' + minValue).format('mm');
        //         state.second = moment('2000-01-01 ' + minValue).format('ss');
        //     } else {
        //         state.hour = moment('2000-01-01 ' + maxValue).format('HH');
        //         state.minute = moment('2000-01-01 ' + maxValue).format('mm');
        //         state.second = moment('2000-01-01 ' + maxValue).format('ss');
        //     }
        //     this.setState(state, () => {
        //         this.props.onChange && this.props.onChange({
        //             hour: state.hour,
        //             minute: state.minute,
        //             second: state.second
        //         });
        //     });
        // } else {
        //     this.setState({
        //         second: value
        //     }, () => {
        //         this.props.onChange && this.props.onChange({hour: state.hour, minute: state.minute, second: value});
        //     });
        // }

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
