/**
 * @file MaterialTimePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import MaterialDatePickerTextField from '../_MaterialDatePickerTextField';
import TimeList from '../_TimeList';
import Popup from '../Popup';
import Theme from '../Theme';

import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import {findDOMNode} from 'react-dom';
import DropdownCalculation from '../_vendors/DropdownCalculation';

class MaterialTimePicker extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.validValue = true;

        this.state = {
            textFieldValue: props.value,
            popupVisible: false,
            hour: moment().format('HH'),
            minute: moment().format('mm'),
            second: moment().format('ss'),
            isAbove: false
        };

    }

    rangeData = range => {
        let arr = [];
        for (let i = 0; i < range; i++) {
            if (i < 10) {
                i = '0' + i;
            }
            arr.push({text: i, value: true});
        }
        return arr;
    };

    textFieldChangeHandle = text => {
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
    };

    timePickerChangeHandle = obj => {
        let timer = obj.hour + ':' + obj.minute + ':' + obj.second;
        let validDate = '1970-01-01 ' + timer;
        timer = moment(validDate).format(this.props.dateFormat);
        this.setState({
            hour: obj.hour,
            minute: obj.minute,
            second: obj.second,
            textFieldValue: timer
        });
    };

    togglePopup = e => {
        if (this.validValue) {
            this.setState({
                popupVisible: !this.state.popupVisible
            });
        }
    };

    closePopup = () => {
        const {textFieldValue} = this.state;
        !this.props.disabled && this.setState({
            popupVisible: false
        }, () => {
            this.props.onChange && this.props.onChange(textFieldValue);
        });
    };

    popupRenderHandler = popupEl => {

        if (this.props.position) {
            return;
        }

        const isAbove = DropdownCalculation.isAbove(this.dropdownEl, this.triggerEl, findDOMNode(popupEl));
        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

    };

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

        this.triggerEl = findDOMNode(this.refs.trigger);
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

    render() {

        const {className, style, name, placeholder, maxValue, minValue, dateFormat, label, isLabelAnimate, position, theme} = this.props,
            {popupVisible, textFieldValue, hour, minute, second, isAbove} = this.state,

            pickerClassName = classNames('material-time-picker', {
                [className]: className
            });

        return (
            <div className={pickerClassName}
                 style={style}>

                <MaterialDatePickerTextField ref="trigger"
                                             className="time-picker-field"
                                             name={name}
                                             label={label}
                                             theme={theme}
                                             isLabelAnimate={isLabelAnimate}
                                             placeholder={placeholder}
                                             value={textFieldValue}
                                             readOnly={!popupVisible}
                                             clearButtonVisible={false}
                                             isFocusedSelectAll={false}
                                             popupVisible={popupVisible}
                                             onChange={this.textFieldChangeHandle}
                                             onClick={e => {
                                                 this.togglePopup(e);
                                             }}/>

                <Popup className="material-time-picker-popup"
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       position={position ? position : (isAbove ? Position.TOP_LEFT : Position.BOTTOM_LEFT)}
                       hasTriangle={false}
                       onRender={this.popupRenderHandler}
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
}

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
     * MaterialTimePicker input name.
     */
    name: PropTypes.string,

    /**
     * The label of the MaterialTimePicker.
     */
    label: PropTypes.any,

    /**
     * The animate of the MaterialTimePicker.
     */
    isLabelAnimate: PropTypes.bool,

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
     * MaterialTimePicker textField element placeholder.
     */
    placeholder: PropTypes.string,

    /**
     * Time format.
     */
    dateFormat: PropTypes.string

};

MaterialTimePicker.defaultProps = {
    name: '',
    value: moment().format('HH:mm:ss'),
    placeholder: 'Time',
    dateFormat: 'HH:mm:ss',
    position: Position.BOTTOM_LEFT
};

export default MaterialTimePicker;