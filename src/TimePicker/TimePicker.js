/**
 * @file TimePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import TextField from '../TextField';
import TimeList from '../_TimeList';
import Popup from '../Popup';

import Position from '../_statics/Position';

import Util from '../_vendors/Util';

class TimePicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.validValue = true;

        this.state = {
            textFieldValue: props.value,
            popupVisible: false,
            hour: moment().format('HH'),
            minute: moment().format('mm'),
            second: moment().format('ss'),
            triggerEl: null
        };

        this.textFieldChangeHandle = ::this.textFieldChangeHandle;
        this.togglePopup = ::this.togglePopup;
        this.closePopup = ::this.closePopup;
        this.timePickerChangeHandle = ::this.timePickerChangeHandle;
    }

    rangeData(range) {
        let arr = [];
        for (let i = 0; i < range; i++) {
            if (i < 10) {
                i = '0' + i;
            }
            arr.push({text: i, value: true});
        }
        return arr;
    }

    textFieldChangeHandle(text) {
        if (text && text.length) {
            let validDate = '1970-01-01 ' + text;
            let validFormat = 'YYYY-MM-DD ' + this.props.dateFormat;
            const flag = moment(validDate, validFormat, true).isValid();
            if (flag) {
                const hour = moment(validDate).format('HH'),
                    minute = moment(validDate).format('mm'),
                    second = moment(validDate).format('ss');
                this.setState({
                    textFieldValue: text,
                    hour: hour,
                    minute: minute,
                    second: second
                });
            }
        } else {
            this.setState({
                textFieldValue: text
            });
        }
    }

    timePickerChangeHandle(obj) {
        let timer = obj.hour + ':' + obj.minute + ':' + obj.second;
        let validDate = '1970-01-01 ' + timer;
        timer = moment(validDate).format(this.props.dateFormat);
        this.setState({
            hour: obj.hour,
            minute: obj.minute,
            second: obj.second,
            textFieldValue: timer
        });
    }

    togglePopup(e) {
        if (this.validValue) {
            this.setState({
                popupVisible: !this.state.popupVisible,
                triggerEl: e.target
            });
        }
    }

    closePopup() {
        const {textFieldValue} = this.state;
        !this.props.disabled && this.setState({
            popupVisible: false
        }, () => {
            this.props.onChange && this.props.onChange(textFieldValue);
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
        const {value} = this.props;
        let dateFormatValue = '2000-02-01 ' + value;
        if (value) {
            if (moment(dateFormatValue, 'YYYY-MM-DD HH:mm:ss').isValid()) {
                this.setState({
                    textFieldValue: value,
                    hour: moment(dateFormatValue).format('HH'),
                    minute: moment(dateFormatValue).format('mm'),
                    second: moment(dateFormatValue).format('ss')
                });
            } else {
                this.validValue = false;
                console.error('Invalid date');
            }
        }
    }

    render() {

        const {className, style, name, placeholder, maxValue, minValue, dateFormat, position} = this.props,
            {popupVisible, textFieldValue, hour, minute, second, triggerEl} = this.state,

            pickerClassName = classNames('time-picker', {
                [className]: className
            }),

            popupTextField = moment(moment().format('YYYY-MM-DD') + ' ' + hour + ':' + minute + ':' + second)
            .format(dateFormat);

        return (
            <div className={pickerClassName}
                 style={style}>

                <div className="wrapper">

                    <TextField ref="trigger"
                               className="time-picker-field"
                               name={name}
                               placeholder={placeholder}
                               value={textFieldValue}
                               clearButtonVisible={false}
                               isFocusedSelectAll={false}
                               readOnly={true}
                               onTouchTap={e => {
                                   this.togglePopup(e);
                               }}/>

                    <Popup className="time-picker-popup"
                           visible={popupVisible}
                           triggerEl={triggerEl}
                           position={position}
                           hasTriangle={false}
                           onRequestClose={() => {
                               this.closePopup();
                           }}>
                        <TextField className="popup-text-field"
                                   placeholder={placeholder}
                                   value={textFieldValue ? popupTextField : textFieldValue}
                                   clearButtonVisible={false}
                                   onChange={this.textFieldChangeHandle}/>
                        <TimeList hour={hour}
                                  minute={minute}
                                  second={second}
                                  maxValue={maxValue}
                                  minValue={minValue}
                                  isRequired={true}
                                  dateFormat={dateFormat}
                                  popupVisible={popupVisible}
                                  onChange={this.timePickerChangeHandle}/>
                    </Popup>
                </div>
            </div>
        );
    }
}

TimePicker.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
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

    /**
     * The ending of a range of valid dates. The range includes the endDate.
     */
    maxValue: PropTypes.string,

    /**
     * The beginning of a range of valid dates. The range includes the startDate.
     */
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
    name: '',
    value: moment().format('HH:mm:ss'),
    placeholder: 'Time',
    dateFormat: 'HH:mm:ss',
    position: Position.BOTTOM_LEFT
};

export default TimePicker;