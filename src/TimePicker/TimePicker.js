import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import moment from 'moment';


import TextField from '../TextField/TextField';
import TimeList from '../_TimeList/_TimeList';


import './TimePicker.css';

export default class TimePicker extends Component {

    constructor(props) {

        super(props);
        const value = this.props.value;
        this.state = {
            textFieldValue: value,
            popupVisible: false,
            hour: moment().format('HH'),
            minute: moment().format('mm'),
            second: moment().format('ss')
        };

        this.textFieldChangeHandle = this::this.textFieldChangeHandle;
        this.mousedownHandle = this::this.mousedownHandle;
        this.wrapperHeight = this::this.wrapperHeight;
        this.timePickerChangeHandle = this::this.timePickerChangeHandle;

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

    timePickerChangeHandle(obj) {
        let timer = obj.hour + ':' + obj.minute + ':' + obj.second
        this.setState({
            hour: obj.hour,
            minute: obj.minute,
            second: obj.second,
            textFieldValue: timer
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
        const {value}=this.props;
        let dateFormatValue ='2000-02-01 '+value
        this.setState({
            textFieldValue: value,
            hour: moment(dateFormatValue).format('HH'),
            minute: moment(dateFormatValue).format('mm'),
            second: moment(dateFormatValue).format('ss')
        })
        Event.addEvent(window, 'mousedown', this.mousedownHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(window, 'mousedown', this.mousedownHandle);
    }

    render() {
        const {className, style, name, placeholder, maxValue, minValue} = this.props;
        const {popupVisible, textFieldValue, hour, minute, second} = this.state;
        const wrapperHeight = this.wrapperHeight();
        const wrapperStyle = {
            height: wrapperHeight + 'px'
        };
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
                        <TimeList hour={hour}
                                  minute={minute}
                                  second={second}
                                  maxValue={maxValue}
                                  minValue={minValue}
                                  isRequired={true}
                                  popupVisible={popupVisible}
                                  onChange={this.timePickerChangeHandle}/>
                    </div>
                </div>
            </div>
        );
    }
};

TimePicker.propTypes = {

    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Time picker input name.
     */
    name: PropTypes.string,

    /**
     * This is the initial date value of the component.
     */
    value: PropTypes.string,
    maxValue: PropTypes.string,
    minValue: PropTypes.string,

    /**
     * TimePicker textField element placeholder.
     */
    placeholder: PropTypes.string,

    /**
     * Time format.
     */
    dateFormat: PropTypes.string
};

TimePicker.defaultProps = {
    className: '',
    style: null,
    name: '',
    value: moment().format('HH:mm:ss'),
    placeholder: 'Time',
    dateFormat: 'HH:mm:ss'

};