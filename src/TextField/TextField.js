import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

import IconButton from '../IconButton';
import FieldMsg from '../FieldMsg';

import './TextField.css';

export default class TextField extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: props.value,
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
        !this.props.disabled && this.setState({
            value: ''
        }, () => {
            this.props.onChange && this.props.onChange('');
        });
    }

    togglePasswordVisible() {
        !this.props.disabled && this.setState({
            passwordVisible: !this.state.passwordVisible
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
        this.props.onFocus && this.props.onFocus();
    }

    blurHandle(event) {
        this.props.onBlur && this.props.onBlur(event.target.value);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    componentDidMount() {
        if (this.props.autoFocus === true) {
            this.refs.input.focus();
        }
    }

    render() {

        const {
            className, style, type, name, placeholder, iconCls, disabled, infoMsg,
            required, maxLength, max, min, step, readOnly, clearButtonVisible, passwordButtonVisible
        } = this.props;
        const {value, passwordVisible, infoVisible, errorVisible} = this.state;

        const isPassword = type === 'password';

        let inputType = type;
        if (type === 'password') {
            inputType = passwordVisible ? 'text' : 'password';
        }

        const invalidMsg = this.props.invalidMsg || this.state.invalidMsg;

        return (

            <div className={`text-field ${!value || value.length <= 0 ? 'empty' : ''} ${isPassword ? 'password' : ''}
                    ${iconCls ? 'has-icon' : ''} ${invalidMsg ? 'error' : ''} ${disabled ? 'disabled' : ''}
                    ${className}`}
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

                <IconButton className={`clear-icon ${!clearButtonVisible && value && value.length > 0 ? '' : 'hidden'}`}
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

    className: PropTypes.string,
    style: PropTypes.object,

    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    iconCls: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    autoFocus: PropTypes.bool,
    infoMsg: PropTypes.string,

    clearButtonVisible: PropTypes.bool,
    passwordButtonVisible: PropTypes.bool,

    // valid
    required: PropTypes.bool,
    maxLength: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    pattern: PropTypes.object,
    invalidMsg: PropTypes.string,

    // callback
    onChange: PropTypes.func,
    onPressEnter: PropTypes.func,
    onValid: PropTypes.func,
    onInvalid: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func

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