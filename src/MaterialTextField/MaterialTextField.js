import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TextField from '../TextField';
import Util from '../_vendors/Util';

import './MaterialTextField.css';

export default class MaterialTextField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            isFocus: false
        };

        this.onFocusHandle = this::this.onFocusHandle;
        this.onBlurHandle = this::this.onBlurHandle;
        this.onChangeHandle = this::this.onChangeHandle;

    }


    onFocusHandle(e) {
        this.setState({
            isFocus: true
        }, () => {
            this.props.onFocus && this.props.onFocus(this.state.value, e);
        })
    }

    onBlurHandle(e) {
        this.setState({
            isFocus: false
        }, () => {
            this.props.onBlur && this.props.onBlur(this.state.value, e);
        })
    }

    onChangeHandle(value) {
        this.setState({
            value
        }, ()=> {
            this.props.onChange && this.props.onChange(value);
        })
    }

    render() {

        const {className, label, style} = this.props;
        const {isFocus, value} = this.state;

        return (
            <div className={`material-text-field ${className ? className : ''}  ${isFocus ? 'focused' : ''}`}
                 style={style}>
                <div className={`material-text-field-label ${value ? 'hasValue' : ''}`}>{label}</div>
                <TextField {...this.props}
                           value={value}
                           onFocus={this.onFocusHandle}
                           onBlur={this.onBlurHandle}
                           onChange={this.onChangeHandle}/>
            </div>
        );

    }
};

MaterialTextField.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Specifies the type of input to display such as "password" or "text".
     */
    type: PropTypes.oneOf(Util.enumerateValue(TextField.Type)),

    /**
     * The name of the text field.
     */
    name: PropTypes.string,

    /**
     * The placeholder of the text field.
     */
    placeholder: PropTypes.string,

    /**
     * The value of the text field.Type can be string or number.
     */
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Use this property to display an icon.
     */
    iconCls: PropTypes.string,

    /**
     * Disables the textField if set to true.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the textField will can't editable.
     */
    readOnly: PropTypes.bool,

    /**
     * If true,the textField will autoFocus.
     */
    autoFocus: PropTypes.bool,

    /**
     * The message of the textField.
     */
    infoMsg: PropTypes.string,

    /**
     * If true,clearButton will display when the textField is not empty.
     */
    clearButtonVisible: PropTypes.bool,

    /**
     * Use this property to display an icon.
     */
    rightIconCls: PropTypes.string,

    /**
     * If true,passwordButton will display.
     */
    passwordButtonVisible: PropTypes.bool,


    // valid
    /**
     * If true,the textField must be required.
     */
    required: PropTypes.bool,

    /**
     * The maximum length of textField to enter.
     */
    maxLength: PropTypes.number,

    /**
     * Maximum number of textField that can be entered.
     */
    max: PropTypes.number,

    /**
     * Minimum number of textField that can be entered.
     */
    min: PropTypes.number,

    /**
     * The matching rule of textField.
     */
    pattern: PropTypes.object,

    /**
     * The invalid message of textField.
     */
    patternInvalidMsg: PropTypes.string,

    /**
     *
     */
    autoComplete: PropTypes.string,

    /**
     *
     */
    autoCorrect: PropTypes.string,

    /**
     *
     */
    autoCapitalize: PropTypes.string,

    /**
     *
     */
    spellCheck: PropTypes.string,

    /**
     * Callback function fired when the textField is changed.
     */
    onChange: PropTypes.func,

    /**
     * Callback function fired when the press enter.
     */
    onPressEnter: PropTypes.func,

    /**
     * Callback function fired when textField valid.
     */
    onValid: PropTypes.func,

    /**
     * Callback function fired when textField invalid.
     */
    onInvalid: PropTypes.func,

    /**
     * Callback function fired when textField focus.
     */
    onFocus: PropTypes.func,

    /**
     * Callback function fired when textField blur.
     */
    onBlur: PropTypes.func,

    /**
     * Callback function fired when textField clear.
     */
    onClear: PropTypes.func,

    /**
     * Callback function fired when password visible.
     */
    onPasswordVisible: PropTypes.func,

    /**
     * Callback function fired when password invisible.
     */
    onPasswordInvisible: PropTypes.func


};

MaterialTextField.defaultProps = {};

