/**
 * @file TextField component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import IconButton from '../IconButton';
import FieldMsg from '../FieldMsg';
import Theme from '../Theme';

import FieldType from '../_statics/FieldType';

import PureRender from '../_vendors/PureRender';
import Util from '../_vendors/Util';
import Valid from '../_vendors/Valid';

@PureRender
class TextField extends Component {

    static Type = FieldType;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            isFocused: props.autoFocus ? true : false,
            passwordVisible: false,
            infoVisible: false,
            errorVisible: false,
            invalidMsgs: ''
        };

        this.focus = ::this.focus;
        this.blur = ::this.blur;
        this.changeHandler = ::this.changeHandler;
        this.keyDownHandler = ::this.keyDownHandler;
        this.clearValue = ::this.clearValue;
        this.togglePasswordVisible = ::this.togglePasswordVisible;
        this.mouseOverHandler = ::this.mouseOverHandler;
        this.mouseOutHandler = ::this.mouseOutHandler;
        this.focusHandler = ::this.focusHandler;
        this.blurHandler = ::this.blurHandler;
        this.rightIconTouchTapHandler = ::this.rightIconTouchTapHandler;

    }

    focus() {
        this.refs.input.focus();
    }

    blur() {
        this.refs.input.blur();
    }

    changeHandler(e) {

        const {onValid, onInvalid} = this.props,

            value = e.target.value,
            invalidMsgs = Valid.fieldValid(value, this.props);

        this.setState({
            value,
            invalidMsgs
        }, () => {
            this.props.onChange && this.props.onChange(value, e);
            invalidMsgs && invalidMsgs.length > 0 ? onInvalid && onInvalid() : onValid && onValid();
        });

    }

    keyDownHandler(e) {

        const {onKeyDown} = this.props,
            {value} = this.state;
        onKeyDown && onKeyDown(e, value);

        if (e.keyCode === 13) {
            const {onPressEnter} = this.props;
            onPressEnter && onPressEnter(e, value);
        }

    }

    clearValue() {

        const {disabled, clearButtonVisible, onClear, onChange, onValid, onInvalid} = this.props;

        const invalidMsgs = Valid.fieldValid('', this.props);

        !disabled && clearButtonVisible && this.setState({
            value: '',
            invalidMsgs
        }, () => {

            this.focus();

            onClear && onClear();
            onChange && onChange('');

            invalidMsgs && invalidMsgs.length > 0 ? onInvalid && onInvalid() : onValid && onValid();

        });

    }

    togglePasswordVisible() {

        const {disabled, passwordButtonVisible, onPasswordVisible, onPasswordInvisible} = this.props;
        const passwordVisible = !this.state.passwordVisible;

        !disabled && passwordButtonVisible && this.setState({
            passwordVisible
        }, () => {

            this.focus();

            passwordVisible
                ? (onPasswordVisible && onPasswordVisible())
                : (onPasswordInvisible && onPasswordInvisible());

        });

    }

    mouseOverHandler(e) {
        this.setState({
            infoVisible: true,
            errorVisible: true
        }, () => {
            const {onMouseOver} = this.props,
                {value} = this.state;
            onMouseOver && onMouseOver(e, value);
        });
    }

    mouseOutHandler(e) {
        this.setState({
            infoVisible: false,
            errorVisible: false
        }, () => {
            const {onMouseOut} = this.props,
                {value} = this.state;
            onMouseOut && onMouseOut(e, value);
        });
    }

    focusHandler(e) {
        this.setState({
            isFocused: true
        }, () => {

            const {isFocusedSelectAll, onFocus} = this.props,
                {value} = this.state;

            onFocus && onFocus(e, value);

            isFocusedSelectAll && this.refs.input.setSelectionRange(0, value ? value.length : 0);

        });
    }

    blurHandler(e) {

        if (this.clearButtonEl && e.relatedTarget && e.relatedTarget == this.clearButtonEl) {
            return;
        }

        this.setState({
            isFocused: false
        }, () => {
            const {onBlur} = this.props,
                {value} = this.state;
            onBlur && onBlur(e, value);
        });

    }

    rightIconTouchTapHandler(e) {
        const {onRightIconTouchTap} = this.props,
            {value} = this.state;
        onRightIconTouchTap && onRightIconTouchTap(e, value);
    }

    componentDidMount() {

        this.inputEl = this.refs.input;
        this.clearButtonEl = findDOMNode(this.refs.clearButton);

        if (this.props.autoFocus === true) {
            this.inputEl.focus();
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

                children, className, triggerClassName, placeholderClassName, style, theme, type, iconCls, disabled,
                infoMsg, placeholder, clearButtonVisible, rightIconCls, passwordButtonVisible, fieldMsgVisible,
                onIconTouchTap, onRightIconTouchTap,

                // not passing down these props
                autoFocus, pattern, patternInvalidMsg, isFocusedSelectAll,
                onPressEnter, onValid, onInvalid, onClear, onPasswordVisible, onPasswordInvisible,

                ...restProps

            } = this.props,

            {value, isFocused, passwordVisible, infoVisible, errorVisible, invalidMsgs} = this.state,

            isPassword = type === FieldType.PASSWORD,
            empty = !value || value.length <= 0,

            fieldClassName = classNames('text-field',
                empty ? 'empty' : 'not-empty',
                invalidMsgs && invalidMsgs.length > 0 ? ' theme-error' : (theme ? ` theme-${theme}` : ''), {
                    password: isPassword,
                    'has-icon': iconCls,
                    'has-right-icon': rightIconCls,
                    focused: isFocused,
                    'has-clear-button': clearButtonVisible,
                    [className]: className
                }),
            leftIconClassName = classNames('text-field-left-icon', {
                deactivated: !onIconTouchTap
            }),
            fieldPlaceholderClassName = classNames('text-field-placeholder', {
                [placeholderClassName]: placeholderClassName
            }),
            fieldInputClassName = classNames('text-field-input', {
                [triggerClassName]: triggerClassName
            }),
            clearButtonClassName = classNames('clear-icon', {
                hidden: disabled || !value || value.length < 1
            }),
            rightIconClassName = classNames('text-field-right-icon', {
                deactivated: !onRightIconTouchTap
            });

        let inputType = type;
        if (inputType === FieldType.PASSWORD) {
            inputType = passwordVisible ? FieldType.TEXT : FieldType.PASSWORD;
        } else if (Valid.isNumberType(type)) {
            inputType = 'text';
        }

        return (
            <div className={fieldClassName}
                 style={style}
                 disabled={disabled}>

                {
                    iconCls ?
                        <IconButton className={leftIconClassName}
                                    iconCls={iconCls}
                                    disableTouchRipple={!onIconTouchTap}
                                    onTouchTap={onIconTouchTap}/>
                        :
                        null
                }

                {
                    placeholder && empty ?
                        <input className={fieldPlaceholderClassName}
                               value={placeholder}
                               disabled={true}/>
                        :
                        null
                }

                <input {...restProps}
                       ref="input"
                       className={fieldInputClassName}
                       type={inputType}
                       value={value}
                       disabled={disabled}
                       onChange={this.changeHandler}
                       onKeyDown={this.keyDownHandler}
                       onMouseOver={this.mouseOverHandler}
                       onMouseOut={this.mouseOutHandler}
                       onFocus={this.focusHandler}
                       onBlur={this.blurHandler}/>

                {
                    clearButtonVisible ?
                        <IconButton ref="clearButton"
                                    className={clearButtonClassName}
                                    iconCls="fas fa-times-circle"
                                    onTouchTap={this.clearValue}/>
                        :
                        null
                }

                {
                    isPassword && passwordButtonVisible ?
                        <IconButton className="password-visible-icon"
                                    iconCls={passwordVisible ? 'fas fa-eye' : 'far fa-eye-slash'}
                                    onTouchTap={this.togglePasswordVisible}/>
                        :
                        null
                }

                {
                    rightIconCls ?
                        <IconButton className={rightIconClassName}
                                    rightIconCls={rightIconCls}
                                    disableTouchRipple={!onRightIconTouchTap}
                                    onTouchTap={this.rightIconTouchTapHandler}/>
                        :
                        null
                }

                <FieldMsg type="info"
                          msg={infoMsg}
                          visible={!!(fieldMsgVisible && infoVisible && infoMsg)}
                          triggerEl={this.inputEl}
                          position={FieldMsg.Position.TOP_LEFT}/>

                <FieldMsg type="error"
                          msg={invalidMsgs && invalidMsgs.join(', ')}
                          visible={!!(fieldMsgVisible && errorVisible && invalidMsgs && invalidMsgs.length > 0)}
                          triggerEl={this.inputEl}/>

                {children}

            </div>
        );

    }
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

    TextField.propTypes = {

        /**
         * The CSS class name of the root element.
         */
        className: PropTypes.string,

        /**
         * The CSS class name of the input element.
         */
        triggerClassName: PropTypes.string,

        /**
         * The CSS class name of the placeholder element.
         */
        placeholderClassName: PropTypes.string,

        /**
         * Override the styles of the root element.
         */
        style: PropTypes.object,

        /**
         * The TextField theme.
         */
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        /**
         * Specifies the type of input to display such as "password" or "text".
         */
        type: PropTypes.oneOf(Util.enumerateValue(FieldType)),

        /**
         * The name of the text field.
         */
        name: PropTypes.string,

        /**
         * The placeholder of the text field.
         */
        placeholder: PropTypes.string,

        /**
         * The value of the TextField.Type can be string or number.
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

        isFocusedSelectAll: PropTypes.bool,

        /**
         * If true,clearButton will display when the textField is not empty.
         */
        clearButtonVisible: PropTypes.bool,

        /**
         * Use this property to display an icon.
         */
        rightIconCls: PropTypes.string,

        /**
         * If true, passwordButton will display.
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

        fieldMsgVisible: PropTypes.bool,

        /**
         * Callback function fired when the textField is changed.
         */
        onChange: PropTypes.func,

        /**
         * Callback function fired when key down.
         */
        onKeyDown: PropTypes.func,

        /**
         * Callback function fired when press enter.
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
        onPasswordInvisible: PropTypes.func,

        onIconTouchTap: PropTypes.func,
        onRightIconTouchTap: PropTypes.func,

        onMouseOver: PropTypes.func,
        onMouseOut: PropTypes.func

    };

}

TextField.defaultProps = {

    theme: Theme.DEFAULT,

    type: 'text',
    value: '',
    disabled: false,
    readOnly: false,
    autoFocus: false,
    isFocusedSelectAll: false,

    clearButtonVisible: true,
    passwordButtonVisible: true,

    // valid
    required: false,

    autoComplete: 'off',
    autoCorrect: 'off',
    autoCapitalize: 'off',
    spellCheck: 'false',

    fieldMsgVisible: false

};

export default TextField;