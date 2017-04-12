import React, {Component, PropTypes} from 'react';

import TimeItems from '../_TimeItems/_TimeItems';

export default class _TimePicker extends Component {

    constructor(props) {

        super(props);

        this.state = {
            hour: this.props.hour,
            minute: this.props.minute,
            second: this.props.second
        };

        this.hourChangeHandle = this::this.hourChangeHandle;
        this.minuteChangeHandle = this::this.minuteChangeHandle;
        this.secondChangeHandle = this::this.secondChangeHandle;

    }

    rangeData(range) {
        let arr = [];
        for (let i = 0; i < range; i++) {
            if (i < 10) {
                i = '0' + i
            }
            arr.push({text: i, value: true})
        }
        return arr;
    }


    hourChangeHandle(value) {
        const {minute, second}=this.state
        this.setState({
            hour: value
        }, ()=> {
            this.props.onChange && this.props.onChange({hour: value, minute: minute, second: second})
        })
    }

    minuteChangeHandle(value) {
        let {hour, second}=this.state;
        this.setState({
            minute: value,
        }, ()=> {
            this.props.onChange && this.props.onChange({hour: hour, minute: value, second: second})
        })

    }

    secondChangeHandle(value) {
        let {hour, minute}=this.state;
        this.setState({
            second: value
        }, ()=> {
            this.props.onChange && this.props.onChange({hour: hour, minute: minute, second: value})
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.hour !== this.props.hour || nextProps.minute !== this.props.minute || nextProps.second !== this.props.second) {
            this.setState({
                hour: nextProps.hour,
                minute: nextProps.minute,
                second: nextProps.second
            });
        }
    }

    render() {
        const {className, popupVisible} = this.props;
        const {hour, minute, second} = this.state;
        const hoursData = this.rangeData(24),
            minutesData = this.rangeData(60),
            secondsData = this.rangeData(60);
        return (
            <div className={`calendar ${className}`}>
                <TimeItems className="hours"
                           data={hoursData}
                           value={hour}
                           popupVisible={popupVisible}
                           onChange={this.hourChangeHandle}
                />
                <TimeItems className="minutes"
                           data={minutesData}
                           value={minute}
                           popupVisible={popupVisible}
                           onChange={this.minuteChangeHandle}
                />
                <TimeItems className="seconds"
                           data={secondsData}
                           value={second}
                           popupVisible={popupVisible}
                           onChange={this.secondChangeHandle}
                />
            </div>
        );
    }
};

_TimePicker.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string,

    // timestamp
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
    placeholder: PropTypes.string,
    dateFormat: PropTypes.string

};
