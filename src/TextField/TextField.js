import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

import Event from '../_vendors/Event';

import IconButton from '../IconButton';
import FieldMsg from '../FieldMsg';

import './TextField.css';

export default class TextField extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: props.value,
            isFocused: props.autoFocus ? true : false,
            passwordVisible: false,
            infoVisible: false,
            errorVisible: false,
            invalidMsg: ''
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
        this.inputKeydownHandle = this::this.inputKeydownHandle;
    }

    valid(value) {

        let invalidMsg = '';

        if (this.props.required && value === '') {
            invalidMsg = 'required';
        }

        return invalidMsg;

    }

    changeHandle(e) {

        const value = e.target.value;
        const invalidMsg = this.valid(value);

        this.setState({
            value,
            invalidMsg
        }, () => {

            this.props.onChange && this.props.onChange(value);

            if (invalidMsg) {
                this.props.onInvalid && this.props.onInvalid();
            } else {
                this.props.onValid && this.props.onValid();
            }

        });

    }

    keydownHandle(e) {
        if (e.keyCode === 13) {
            this.props.onPressEnter && this.props.onPressEnter();
        }
    }

    clearValue() {

        const {disabled, clearButtonVisible, onClear, onChange} = this.props;

        !disabled && clearButtonVisible && this.setState({
            value: ''
        }, () => {

            this.refs.input.focus();

            onClear && onClear();
            onChange && onChange('');

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

    focusHandle() {
        this.setState({
            isFocused: true
        }, () => {
            this.props.onFocus && this.props.onFocus(this.state.value);
        });
    }

    blurHandle() {
        this.setState({
            isFocused: false
        }, () => {
            this.props.onBlur && this.props.onBlur(this.state.value);
        });
    }

    inputKeydownHandle(e) {
        if (this.props.type === 'number' && isNaN(e.key)) {
            e.preventDefault();
        }
    }

    componentDidMount() {

        if (this.props.autoFocus === true) {
            this.refs.input.focus();
        }

        Event.addEvent(this.refs.input, 'keydown', this.inputKeydownHandle);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    componentWillUnmount() {
        Event.removeEvent(this.refs.input, 'keydown', this.inputKeydownHandle);
    }

    render() {

        const {
            className, style, type, name, placeholder, iconCls, disabled, infoMsg,
            required, maxLength, max, min, step, readOnly, clearButtonVisible, passwordButtonVisible
        } = this.props;
        const {value, isFocused, passwordVisible, infoVisible, errorVisible} = this.state;

        const isPassword = type === 'password';

        let inputType = type;
        if (inputType === 'password') {
            inputType = passwordVisible ? 'text' : 'password';
        } else if (inputType === 'number') {
            inputType = 'text';
        }

        const invalidMsg = this.props.invalidMsg || this.state.invalidMsg;

        return (

            <div className={`text-field ${!value || value.length <= 0 ? 'empty' : ''} ${isPassword ? 'password' : ''}
                    ${iconCls ? 'has-icon' : ''} ${invalidMsg ? 'error' : ''} ${disabled ? 'disabled' : ''}
                    ${isFocused ? 'focused' : ''} ${className}`}
                 style={style}>

                {
                    iconCls ?
                        <i className={'text-field-icon ' + iconCls}
                           aria-hidden="true"></i>
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
                       step={step}
                       onChange={this.changeHandle}
                       onKeyDown={this.keydownHandle}
                       onMouseOver={this.mouseoverHandle}
                       onMouseOut={this.mouseoutHandle}
                       onFocus={this.focusHandle}
                       onBlur={this.blurHandle}/>

                <IconButton className={`clear-icon ${clearButtonVisible && value && value.length > 0 ? '' : 'hidden'}`}
                            iconCls="fa fa-times-circle"
                            onTouchTap={this.clearValue}/>

                <IconButton className={`password-visible-icon ${isPassword && passwordButtonVisible ? '' : 'hidden'}`}
                            iconCls={passwordVisible ? 'fa fa-eye' : 'fa fa-eye-slash'}
                            onTouchTap={this.togglePasswordVisible}/>

                <ReactCSSTransitionGroup component="div"
                                         transitionName="fade"
                                         transitionEnterTimeout={250}
                                         transitionLeaveTimeout={250}>
                    {
                        infoVisible && infoMsg ?
                            <FieldMsg type="info"
                                      msg={infoMsg}/>
                            :
                            null
                    }
                </ReactCSSTransitionGroup>

                <ReactCSSTransitionGroup component="div"
                                         transitionName="fade"
                                         transitionEnterTimeout={250}
                                         transitionLeaveTimeout={250}>
                    {
                        errorVisible && invalidMsg ?
                            <FieldMsg type="error"
                                      msg={invalidMsg}/>
                            :
                            null
                    }
                </ReactCSSTransitionGroup>

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
    type: PropTypes.string,

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
     *
     */
    step: PropTypes.number,

    /**
     *
     */
    pattern: PropTypes.object,

    /**
     * The invalid message of textField.
     */
    invalidMsg: PropTypes.string,

    // callback
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
    passwordButtonVisible: true,

    // valid
    required: false,
    invalidMsg: ''

};