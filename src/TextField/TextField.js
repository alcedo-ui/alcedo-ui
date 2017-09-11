import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import IconButton from '../IconButton';
import FieldMsg from '../FieldMsg';

import Util from '../_vendors/Util';
import Valid from '../_vendors/Valid';

import './TextField.css';

export default class TextField extends Component {

    static Type = {
        TEXT: 'text',
        PASSWORD: 'password',
        NUMBER: 'number',
        INTEGER: 'integer',
        POSITIVE_INTEGER: 'positiveInteger',
        NONNEGATIVE_INTEGER: 'nonnegativeInteger',
        NEGATIVE_INTEGER: 'negativeInteger',
        NONPOSITIVE_INTEGER: 'nonpositiveInteger',
        EMAIL: 'email',
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
        this.changeHandler = this::this.changeHandler;
        this.keyDownHandler = this::this.keyDownHandler;
        this.clearValue = this::this.clearValue;
        this.togglePasswordVisible = this::this.togglePasswordVisible;
        this.mouseoverHandler = this::this.mouseoverHandler;
        this.mouseoutHandler = this::this.mouseoutHandler;
        this.focusHandler = this::this.focusHandler;
        this.blurHandler = this::this.blurHandler;

    }

    isNumberType(type) {

        const {
            NUMBER, INTEGER, POSITIVE_INTEGER, NONNEGATIVE_INTEGER, NEGATIVE_INTEGER, NONPOSITIVE_INTEGER
        } = TextField.Type;

        return type === NUMBER || type === INTEGER || type === POSITIVE_INTEGER
            || type === NONNEGATIVE_INTEGER || type === NEGATIVE_INTEGER || type === NONPOSITIVE_INTEGER;

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

        if (this.isNumberType(type)) {

            if (isNaN(value)) {
                invalidMsgs.push('Not a valid number');
            }

            if (type === TextField.Type.INTEGER && ~~value !== value) {
                invalidMsgs.push('Not a valid integer');
            }

            if (type === TextField.Type.POSITIVE_INTEGER && ~~value !== value && value <= 0) {
                invalidMsgs.push('Not a valid positive integer');
            }

            if (type === TextField.Type.NONNEGATIVE_INTEGER && ~~value !== value && value < 0) {
                invalidMsgs.push('Not a valid nonnegative integer');
            }

            if (type === TextField.Type.NEGATIVE_INTEGER && ~~value !== value && value >= 0) {
                invalidMsgs.push('Not a valid negative integer');
            }

            if (type === TextField.Type.NONPOSITIVE_INTEGER && ~~value !== value && value > 0) {
                invalidMsgs.push('Not a valid nonpositive integer');
            }

            if (max !== undefined && +value > max) {
                invalidMsgs.push(`Maximum value is ${max}`);
            }

            if (min !== undefined && +value < min) {
                invalidMsgs.push(`Minimum value is ${min}`);
            }

        }

        if (pattern !== undefined && !pattern.test(value)) {
            invalidMsgs.push(patternInvalidMsg);
        }

        return invalidMsgs;

    }

    changeHandler(e) {

        const {preventInvalidInput, onValid, onInvalid} = this.props,

            value = e.target.value,
            invalidMsgs = this.valid(value);

        if (preventInvalidInput && invalidMsgs.length > 0) {
            return;
        }

        this.setState({
            value,
            invalidMsgs
        }, () => {
            this.props.onChange && this.props.onChange(value, e);
            invalidMsgs.length > 0 ? onInvalid && onInvalid() : onValid && onValid();
        });

    }

    keyDownHandler(e) {

        const {onPressEnter} = this.props,
            {value} = this.state;

        if (e.keyCode === 13) {
            onPressEnter && onPressEnter(value);
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

    mouseoverHandler() {
        this.setState({
            infoVisible: true,
            errorVisible: true
        });
    }

    mouseoutHandler() {
        this.setState({
            infoVisible: false,
            errorVisible: false
        });
    }

    focusHandler(e) {
        this.setState({
            isFocused: true
        }, () => {
            this.props.onFocus && this.props.onFocus(this.state.value, e);
        });
    }

    blurHandler(e) {

        if (e.relatedTarget == this.clearButtonEl) {
            return;
        }

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

        this.clearButtonEl = findDOMNode(this.refs.clearButton);

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

                children, className, style, type, iconCls, disabled, infoMsg,
                clearButtonVisible, rightIconCls, passwordButtonVisible,

                // not passing down these props
                value: v, autoFocus, searchButtonVisible, pattern, patternInvalidMsg, preventInvalidInput,
                onPressEnter, onValid, onInvalid, onClear, onPasswordVisible, onPasswordInvisible,

                ...rest

            } = this.props,

            {value, isFocused, passwordVisible, infoVisible, errorVisible, invalidMsgs} = this.state,

            isPassword = type === TextField.Type.PASSWORD;

        let inputType = type;
        if (inputType === TextField.Type.PASSWORD) {
            inputType = passwordVisible ? TextField.Type.TEXT : TextField.Type.PASSWORD;
        } else if (this.isNumberType(type)) {
            inputType = 'text';
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

                <input {...rest}
                       ref="input"
                       className="text-field-input"
                       type={inputType}
                       value={value}
                       onChange={this.changeHandler}
                       onKeyDown={this.keyDownHandler}
                       onMouseOver={this.mouseoverHandler}
                       onMouseOut={this.mouseoutHandler}
                       onFocus={this.focusHandler}
                       onBlur={this.blurHandler}/>

                <IconButton ref="clearButton"
                            className={`clear-icon ${clearButtonVisible && value && value.length > 0 ? '' : 'hidden'}`}
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

    searchButtonVisible: PropTypes.bool,

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

    preventInvalidInput: PropTypes.bool,
    autoComplete: PropTypes.string,
    autoCorrect: PropTypes.string,
    autoCapitalize: PropTypes.string,
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
    preventInvalidInput: false,

    autoComplete: 'off',
    autoCorrect: 'off',
    autoCapitalize: 'off',
    spellCheck: 'false'

};