/**
 * @file TimePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import MaterialDatePickerTextField from '../MaterialDatePickerTextField';
import TimeList from '../_TimeList';
import Popup from '../Popup';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

export default class MaterialTimePicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

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
        this.wrapperHeight = ::this.wrapperHeight;
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

    wrapperHeight() {
        const {popupVisible} = this.state;
        if (this.refs.trigger) {
            return popupVisible ? (this.refs.trigger.offsetHeight + 300) : this.refs.trigger.offsetHeight;
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
        this.setState({
            popupVisible: !this.state.popupVisible,
            triggerEl: e.target
        });
    }

    closePopup() {
        this.setState({
            popupVisible: false
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
        this.setState({
            textFieldValue: value,
            hour: moment(dateFormatValue).format('HH'),
            minute: moment(dateFormatValue).format('mm'),
            second: moment(dateFormatValue).format('ss')
        });
        Event.addEvent(window, 'mousedown', this.mousedownHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(window, 'mousedown', this.mousedownHandle);
    }

    render() {

        const {className, style, name, placeholder, maxValue, minValue, dateFormat} = this.props,
            {popupVisible, textFieldValue, hour, minute, second, triggerEl} = this.state;

        return (
            <div className={`material-time-picker ${className}`}
                 style={style}>
                <MaterialDatePickerTextField ref="trigger"
                                             className="time-picker-field"
                                             name={name}
                                             placeholder={placeholder}
                                             value={textFieldValue}
                                             iconCls="fa fa-clock-o"
                                             readOnly={!popupVisible}
                                             clearButtonVisible={popupVisible}
                                             popupVisible={popupVisible}
                                             onChange={this.textFieldChangeHandle}
                                             onTouchTap={e => {
                                                 this.togglePopup(e);
                                             }}/>

                <Popup className={`material-time-picker-popup`}
                       visible={popupVisible}
                       triggerEl={triggerEl}
                       hasTriangle={false}
                       onRequestClose={() => {
                           this.closePopup();
                       }}>
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
        );
    }
};

MaterialTimePicker.propTypes = {

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
     * The label of the time picker.
     */
    label: PropTypes.any,

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

MaterialTimePicker.defaultProps = {
    className: '',
    style: null,
    name: '',
    value: moment().format('HH:mm:ss'),
    placeholder: 'Time',
    dateFormat: 'HH:mm:ss'
};