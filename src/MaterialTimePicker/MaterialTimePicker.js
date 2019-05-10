/**
 * @file MaterialTimePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import moment from 'moment';
import classNames from 'classnames';

import MaterialDatePickerTextField from '../_MaterialDatePickerTextField';
import TimeList from '../_TimeList';
import Popup from '../Popup';

import Theme from '../Theme';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import DropdownCalculation from '../_vendors/DropdownCalculation';

class MaterialTimePicker extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.validValue = true;
        this.trigger = createRef();
        this.triggerEl = null;

        this.state = {
            textFieldValue: props.value,
            popupVisible: false,
            hour: moment().format('HH'),
            minute: moment().format('mm'),
            second: moment().format('ss'),
            isAbove: false
        };

    }

    // rangeData = range => {
    //     let arr = [];
    //     for (let i = 0; i < range; i++) {
    //         if (i < 10) {
    //             i = '0' + i;
    //         }
    //         arr.push({text: i, value: true});
    //     }
    //     return arr;
    // };

    handleTextFieldChange = text => {
        if (text && text.length) {
            let validDate = '1970-01-01 ' + text;
            let validFormat = 'YYYY-MM-DD ' + this.props.dateFormat;
            const flag = moment(validDate, validFormat, true).isValid();
            if (flag) {
                const hour = moment(validDate).format('HH'),
                    minute = moment(validDate).format('mm'),
                    second = moment(validDate).format('ss');
                !this.props.disabled && this.setState({
                    textFieldValue: text,
                    hour: hour,
                    minute: minute,
                    second: second
                }, () => {
                    const {onChange} = this.props;
                    onChange && onChange(text);
                });
            }
        } else {
            this.setState({
                textFieldValue: text
            });
        }
    };

    handleTimePickerChange = obj => {
        let timer = obj.hour + ':' + obj.minute + ':' + obj.second;
        let validDate = '1970-01-01 ' + timer;
        timer = moment(validDate).format(this.props.dateFormat);
        !this.props.disabled && this.setState({
            hour: obj.hour,
            minute: obj.minute,
            second: obj.second,
            textFieldValue: timer
        }, () => {
            this.props.onChange && this.props.onChange(timer);
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
        this.setState({
            popupVisible: false
        });
    };

    handlePopupRender = popupEl => {

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

        this.triggerEl = this.trigger && this.trigger.current && findDOMNode(this.trigger.current);

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

        const {
                className, style, name, placeholder, maxValue, minValue, dateFormat, label, isLabelAnimate, position,
                theme, popupClassName, rightIconCls, readOnly, disabled, parentEl
            } = this.props,
            {popupVisible, textFieldValue, hour, minute, second, isAbove} = this.state;

        return (
            <div className={classNames('material-time-picker', {
                [className]: className
            })}
                 style={style}>

                <MaterialDatePickerTextField ref={this.trigger}
                                             className="time-picker-field"
                                             name={name}
                                             label={label}
                                             theme={theme}
                                             isLabelAnimate={isLabelAnimate}
                                             placeholder={placeholder}
                                             value={textFieldValue}
                                             readOnly={readOnly ? readOnly : !popupVisible}
                                             clearButtonVisible={false}
                                             isFocusedSelectAll={false}
                                             disabled={disabled}
                                             popupVisible={popupVisible}
                                             rightIconCls={rightIconCls}
                                             onChange={this.handleTextFieldChange}
                                             onClick={e => this.togglePopup(e)}/>

                <Popup className={`material-time-picker-popup ${popupClassName}`}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       parentEl={parentEl}
                       position={position ? position : (isAbove ? Position.TOP_LEFT : Position.BOTTOM_LEFT)}
                       hasTriangle={false}
                       onRender={this.handlePopupRender}
                       onRequestClose={this.closePopup}>
                    <TimeList hour={hour}
                              minute={minute}
                              second={second}
                              maxValue={maxValue}
                              minValue={minValue}
                              isRequired={true}
                              dateFormat={dateFormat}
                              popupVisible={popupVisible}
                              onChange={this.handleTimePickerChange}/>
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
     * The CSS class name of the popup element.
     */
    popupClassName: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

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
     * If true,materialTimePicker textField is readOnly.
     */
    readOnly: PropTypes.bool,
    /**
     * If true,materialTimePicker textField is disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Time format.
     */
    dateFormat: PropTypes.string,

    position: PropTypes.oneOf(Util.enumerateValue(Position)),
    rightIconCls: PropTypes.string,
    parentEl: PropTypes.object,

    onChange: PropTypes.func

};

MaterialTimePicker.defaultProps = {
    name: '',
    popupClassName: '',
    value: moment().format('HH:mm:ss'),
    placeholder: 'Time',
    dateFormat: 'HH:mm:ss',
    position: Position.BOTTOM_LEFT,
    readOnly: false,
    disabled: false
};

export default MaterialTimePicker;
