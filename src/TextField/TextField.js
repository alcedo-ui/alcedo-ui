import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import FieldMsg from '../FieldMsg';

import Util from '../_vendors/Util';
import Valid from '../_vendors/Valid';

import './TextField.css';

export default class TextField extends Component {

    static Type = {
        EMAIL: 'email',
        NUMBER: 'number',
        PASSWORD: 'password',
        TEXT: 'text',
        URL: 'url'
    };

    constructor(props) {

        super(props);

        this.state = {
            value: props.value,
            isFocused: props.autoFocus ? true : false,
            passwordVisible: false,
            infoVisible: false,
            errorVisible: false,
            invalidMsgs: ''
        };

        this.valid = this::this.valid;
        this.changeHandle = this::this.changeHandle;
        this.keydownHandle = this::this.keydownHandle;
        this.clearValue = this::this.clearValue;
        this.togglePasswordVisible = this::this.togglePasswordVisible;
        this.mouseoverHandle = this::this.mouseoverHandle;
        this.mouseoutHandle = this::this.mouseoutHandle;
        this.focusHandle = this::this.focusHandle;
        this.blurHandle = this::this.blurHandle;

    }

    valid(value) {

        const {type, required, maxLength, max, min, pattern, patternInvalidMsg} = this.props;
        let invalidMsgs = [];

        if (type === TextField.Type.EMAIL && !Valid.isEmail(value)) {
            invalidMsgs.push('Invalid E-mail address');
        }

        if (type === TextField.Type.URL && !Valid.isUrl(value)) {
            invalidMsgs.push('Invalid url');
        }

        if (required === true && value === '') {
            invalidMsgs.push('Required');
        }

        if (maxLength !== undefined && !isNaN(maxLength) && maxLength > 0 && value.length > maxLength) {
            invalidMsgs.push(`Max length is ${maxLength}`);
        }

        if (type === TextField.Type.NUMBER && max !== undefined && +value > max) {
            invalidMsgs.push(`Maximum value is ${max}`);
        }

        if (type === TextField.Type.NUMBER && min !== undefined && +value < min) {
            invalidMsgs.push(`Minimum value is ${min}`);
        }

        if (pattern !== undefined && !pattern.test(value)) {
            invalidMsgs.push(patternInvalidMsg);
        }

        return invalidMsgs;

    }

    changeHandle(e) {

        const {onValid, onInvalid} = this.props;

        const value = e.target.value;
        const invalidMsgs = this.valid(value);

        this.setState({
            value,
            invalidMsgs
        }, () => {

            this.props.onChange && this.props.onChange(value, e);

            invalidMsgs.length > 0 ? onInvalid && onInvalid() : onValid && onValid();

        });

    }

    keydownHandle(e) {

        const {type, onPressEnter} = this.props,
            {value} = this.state;

        if (e.keyCode === 13) {
            onPressEnter && onPressEnter(value);
        }

        if (type === 'number' && isNaN(e.key) && e.key !== '-' && e.keyCode !== 8) {
            e.preventDefault();
        }

    }

    clearValue() {

        const {disabled, clearButtonVisible, onClear, onChange, onValid, onInvalid} = this.props;

        const invalidMsgs = this.valid('');

        !disabled && clearButtonVisible && this.setState({
            value: '',
            invalidMsgs
        }, () => {

            this.refs.input.focus();

            onClear && onClear();
            onChange && onChange('');

            invalidMsgs.length > 0 ? onInvalid && onInvalid() : onValid && onValid();

        });

    }

    togglePasswordVisible() {

        const {disabled, passwordButtonVisible, onPasswordVisible, onPasswordInvisible} = this.props;
        const passwordVisible = !this.state.passwordVisible;

        !disabled && passwordButtonVisible && this.setState({
            passwordVisible
        }, () => {

            this.refs.input.focus();

            passwordVisible
                ? (onPasswordVisible && onPasswordVisible())
                : (onPasswordInvisible && onPasswordInvisible());

        });

    }

    mouseoverHandle() {
        this.setState({
            infoVisible: true,
            errorVisible: true
        });
    }

    mouseoutHandle() {
        this.setState({
            infoVisible: false,
            errorVisible: false
        });
    }

    focusHandle(e) {
        this.setState({
            isFocused: true
        }, () => {
            this.props.onFocus && this.props.onFocus(this.state.value, e);
        });
    }

    blurHandle(e) {
        this.setState({
            isFocused: false
        }, () => {
            this.props.onBlur && this.props.onBlur(this.state.value, e);
        });
    }

    componentDidMount() {
        if (this.props.autoFocus === true) {
            this.refs.input.focus();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {
            children, className, style, type, name, placeholder, iconCls, disabled, infoMsg,
            required, maxLength, max, min, readOnly, clearButtonVisible, rightIconCls, passwordButtonVisible,
            autoComplete, autoCorrect, autoCapitalize, spellCheck
        } = this.props;
        const {value, isFocused, passwordVisible, infoVisible, errorVisible, invalidMsgs} = this.state;

        const isPassword = type === TextField.Type.PASSWORD;

        let inputType = type;
        if (inputType === TextField.Type.PASSWORD) {
            inputType = passwordVisible ? TextField.Type.TEXT : TextField.Type.PASSWORD;
        } else if (inputType === TextField.Type.NUMBER) {
            inputType = TextField.Type.TEXT;
        }

        return (

            <div className={`text-field ${!value || value.length <= 0 ? 'empty' : ''} ${isPassword ? 'password' : ''}
                    ${iconCls ? 'has-icon' : ''} ${invalidMsgs.length > 0 ? 'error' : ''} ${disabled ? 'disabled' : ''}
                    ${isFocused ? 'focused' : ''} ${className}`}
                 style={style}>

                {
                    iconCls ?
                        <IconButton className="text-field-icon"
                                    iconCls={iconCls}
                                    readOnly={true}/>
                        :
                        null
                }

                <input ref="input"
                       className="text-field-input"
                       type={inputType}
                       name={name}
                       placeholder={placeholder}
                       value={value}
                       disabled={disabled}
                       required={required}
                       maxLength={maxLength}
                       readOnly={readOnly}
                       max={max}
                       min={min}
                       autoComplete={autoComplete}
                       autoCorrect={autoCorrect}
                       autoCapitalize={autoCapitalize}
                       spellCheck={spellCheck}
                       onChange={this.changeHandle}
                       onKeyDown={this.keydownHandle}
                       onMouseOver={this.mouseoverHandle}
                       onMouseOut={this.mouseoutHandle}
                       onFocus={this.focusHandle}
                       onBlur={this.blurHandle}/>

                <IconButton className={`clear-icon ${clearButtonVisible && value && value.length > 0 ? '' : 'hidden'}`}
                            iconCls="fa fa-times-circle"
                            onTouchTap={this.clearValue}/>

                {
                    rightIconCls ?
                        <IconButton className={`right-icon ${!value ? '' : 'hidden'}`}
                                    rightIconCls={rightIconCls}
                                    disableTouchRipple={true}/>
                        :
                        null
                }

                <IconButton className={`password-visible-icon ${isPassword && passwordButtonVisible ? '' : 'hidden'}`}
                            iconCls={passwordVisible ? 'fa fa-eye' : 'fa fa-eye-slash'}
                            onTouchTap={this.togglePasswordVisible}/>

                {
                    infoVisible && infoMsg ?
                        <FieldMsg type="info"
                                  msg={infoMsg}/>
                        :
                        null
                }

                {
                    errorVisible && invalidMsgs.length > 0 ?
                        <FieldMsg type="error"
                                  msg={invalidMsgs.join(', ')}/>
                        :
                        null
                }

                {children}

            </div>
        );

    }
};

TextField.propTypes = {

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

TextField.defaultProps = {

    className: '',
    style: null,

    type: 'text',
    name: '',
    placeholder: '',
    value: '',
    iconCls: '',
    disabled: false,
    readOnly: false,
    autoFocus: false,
    infoMsg: '',

    clearButtonVisible: true,
    searchButtonVisible: false,
    passwordButtonVisible: true,

    // valid
    required: false,
    patternInvalidMsg: '',

    autoComplete: 'off',
    autoCorrect: 'off',
    autoCapitalize: 'off',
    spellCheck: 'false'

};