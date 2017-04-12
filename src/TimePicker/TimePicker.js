import React, {Component, PropTypes} from 'react';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import moment from 'moment';


import TextField from '../TextField/TextField';
import TimeItems from '../_TimeItems/_TimeItems';

import './TimePicker.css';

export default class TimePicker extends Component {

    constructor(props) {

        super(props);

        const initValue = Util.value2Moment(props.value, props.dateFormat);
        this.state = {
            value: initValue, // Moment object
            textFieldValue: initValue.format(props.dateFormat),
            popupVisible: false,
            hour: initValue.format('HH'),
            minute: initValue.format('mm'),
            second: initValue.format('ss')
        };

        this.textFieldChangeHandle = this::this.textFieldChangeHandle;
        this.mousedownHandle = this::this.mousedownHandle;
        this.wrapperHeight = this::this.wrapperHeight;
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

    wrapperHeight() {
        const {popupVisible}=this.state;
        if (this.refs.trigger) {
            return popupVisible ? (this.refs.trigger.offsetHeight + 300) : this.refs.trigger.offsetHeight
        }
    }

    textFieldChangeHandle(text) {
        if (text && text.length) {
            let validDate = '1970-01-01 ' + text;
            let validFormat = 'YYYY-MM-DD ' + this.props.dateFormat;
            const flag = moment(validDate, validFormat, true).isValid();
            if (flag) {
                const hour = moment(validDate).format('HH'),
                    minute = moment(validDate).format('mm'),
                    second = moment(validDate).format('ss')
                this.setState({
                    textFieldValue: text,
                    hour: hour,
                    minute: minute,
                    second: second
                })
            }
        } else {
            this.setState({
                textFieldValue: text
            })
        }
    }


    hourChangeHandle(value) {
        let {minute, second}=this.state;
        let TextField = value + ':' + minute + ':' + second;
        this.setState({
            hour: value,
            textFieldValue: TextField
        })
    }

    minuteChangeHandle(value) {
        let {hour, second}=this.state;
        let TextField = hour + ':' + value + ':' + second;
        this.setState({
            minute: value,
            textFieldValue: TextField
        })

    }

    secondChangeHandle(value) {
        let {hour, minute}=this.state;
        let TextField = hour + ':' + minute + ':' + value;
        this.setState({
            second: value,
            textFieldValue: TextField
        })
    }

    mousedownHandle(e) {
        !this.props.disabled && this.setState({
            popupVisible: Event.triggerPopupEventHandle(
                e.target,
                require('react-dom').findDOMNode(this.refs.trigger),
                this.refs.popup,
                this.state.popupVisible
            )
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
        Event.addEvent(window, 'mousedown', this.mousedownHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(window, 'mousedown', this.mousedownHandle);
    }

    render() {

        const {className, style, name, placeholder, dateFormat} = this.props;
        const {value, popupVisible, textFieldValue, hour, minute, second} = this.state;
        const hoursData = this.rangeData(24),
            minutesData = this.rangeData(60),
            secondsData = this.rangeData(60);
        const wrapperHeight = this.wrapperHeight();
        const wrapperStyle = {
            height: wrapperHeight + 'px'
        }
        const popupTextField = hour + ':' + minute + ':' + second;
        return (
            <div className={`time-picker ${className}`}
                 style={style}>
                <div className="wrapper"
                     style={wrapperStyle}>
                    <TextField ref="trigger"
                               className="time-picker-field"
                               name={name}
                               placeholder={placeholder}
                               value={textFieldValue}
                               iconCls="fa fa-clock-o"
                               readOnly={true}/>

                    <div ref="popup"
                         className={`time-picker-popup ${popupVisible ? '' : 'hidden'}`}>
                        <TextField className="popup-text-field"
                                   placeholder={placeholder}
                                   value={textFieldValue ? popupTextField : textFieldValue}
                                   onChange={this.textFieldChangeHandle}/>
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
                </div>
            </div>
        );
    }
};

TimePicker.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string,

    // timestamp
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
    placeholder: PropTypes.string,
    dateFormat: PropTypes.string

};

TimePicker.defaultProps = {

    className: '',
    style: null,

    name: '',
    value: new Date().getTime(),
    placeholder: 'Time',
    dateFormat: 'HH:mm:ss'

};