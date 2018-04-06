/**
 * @file TextArea component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import IconButton from '../IconButton';
import FieldMsg from '../FieldMsg';
import Theme from '../Theme';

import FieldType from '../_statics/FieldType';

import Util from '../_vendors/Util';
import Valid from '../_vendors/Valid';

class TextArea extends Component {

    static Type = FieldType;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            isFocused: props.autoFocus ? true : false,
            passwordVisible: false,
            infoVisible: false,
            errorVisible: false,
            invalidMsgs: ''
        };

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

    changeHandler(e) {

        const {onValid, onInvalid} = this.props,

            value = e.target.value,
            invalidMsgs = Valid.fieldValid(value, this.props);

        if (this.props.autoHeight) {
            this.inputEl.style.height = this.inputElInitHeight + 'px';
            this.inputEl.style.height = Math.max(this.inputEl.scrollHeight, this.inputElInitHeight) + 'px';
        }

        this.setState({
            invalidMsgs
        }, () => {
            this.props.onChange && this.props.onChange(value, e);
            invalidMsgs.length > 0 ? onInvalid && onInvalid() : onValid && onValid();
        });

    }

    keyDownHandler(e) {
        if (e.keyCode === 13) {
            const {value, onPressEnter} = this.props;
            onPressEnter && onPressEnter(e, value);
        }
    }

    clearValue() {

        const {disabled, clearButtonVisible, onClear, onChange, onValid, onInvalid} = this.props;

        const invalidMsgs = Valid.fieldValid('', this.props);

        !disabled && clearButtonVisible && this.setState({
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

    mouseOverHandler(e) {
        this.setState({
            infoVisible: true,
            errorVisible: true
        }, () => {
            const {value, onMouseOver} = this.props;
            onMouseOver && onMouseOver(e, value);
        });
    }

    mouseOutHandler(e) {
        this.setState({
            infoVisible: false,
            errorVisible: false
        }, () => {
            const {value, onMouseOut} = this.props;
            onMouseOut && onMouseOut(e, value);
        });
    }

    focusHandler(e) {
        this.setState({
            isFocused: true
        }, () => {
            const {value, isFocusedSelectAll, onFocus} = this.props;
            onFocus && onFocus(e, value);
            isFocusedSelectAll && this.refs.input.setSelectionRange(0, value ? value.length : 0);
        });
    }

    blurHandler(e) {

        if (e.relatedTarget == this.clearButtonEl) {
            return;
        }

        this.setState({
            isFocused: false
        }, () => {
            const {value, onBlur} = this.props;
            onBlur && onBlur(e, value);
        });

    }

    rightIconTouchTapHandler(e) {
        const {value, onRightIconTouchTap} = this.props;
        onRightIconTouchTap && onRightIconTouchTap(e, value);
    }

    componentDidMount() {

        if (this.props.autoFocus === true) {
            this.refs.input.focus();
        }

        this.inputEl = this.refs.input;
        this.inputElInitHeight = parseInt(this.inputEl.offsetHeight);

        this.clearButtonEl = findDOMNode(this.refs.clearButton);

    }

    render() {

        const {

                children, className, triggerClassName, placeholderClassName, style, theme,
                value, type, iconCls, disabled, infoMsg, autoHeight, wordCountVisible, placeholder,
                clearButtonVisible, rightIconCls, passwordButtonVisible, fieldMsgVisible, maxLength,
                onIconTouchTap, onRightIconTouchTap,

                // not passing down these props
                autoFocus, pattern, patternInvalidMsg, isFocusedSelectAll,
                onPressEnter, onValid, onInvalid, onClear, onPasswordVisible, onPasswordInvisible,

                ...restProps

            } = this.props,

            {isFocused, passwordVisible, infoVisible, errorVisible, invalidMsgs} = this.state,

            isPassword = type === FieldType.PASSWORD,
            empty = !value || value.length <= 0,

            fieldClassName = classNames('text-area',
                !value || value.length <= 0 ? 'empty' : 'not-empty',
                invalidMsgs.length > 0 ? 'theme-error' : (theme ? `theme-${theme}` : ''), {
                    password: isPassword,
                    'has-icon': iconCls,
                    'auto-height': autoHeight,
                    focused: isFocused,
                    'has-right-icon': rightIconCls,
                    'has-word-count': wordCountVisible,
                    'has-clear-button': clearButtonVisible,
                    [className]: className
                }),
            leftIconClassName = classNames('text-area-left-icon', {
                deactivated: !onIconTouchTap
            }),
            fieldPlaceholderClassName = classNames('text-area-placeholder', {
                [placeholderClassName]: placeholderClassName
            }),
            fieldInputClassName = classNames('text-area-input', {
                [triggerClassName]: triggerClassName
            }),
            passwordVisibleIconClassName = classNames('password-visible-icon', {
                hidden: !isPassword || !passwordButtonVisible
            }),
            clearButtonClassName = classNames('clear-icon', {
                hidden: !clearButtonVisible || !value || value.length < 1
            }),
            rightIconClassName = classNames('text-area-right-icon', {
                deactivated: !onRightIconTouchTap
            }),
            wordCountClassName = classNames('text-area-word-count', {
                error: value.length > maxLength
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
                        <textarea className={fieldPlaceholderClassName}
                                  value={placeholder}
                                  disabled={true}/>
                        :
                        null
                }

                <textarea {...restProps}
                          ref="input"
                          className={fieldInputClassName}
                          type={inputType}
                          value={value}
                          onChange={this.changeHandler}
                          onKeyDown={this.keyDownHandler}
                          onMouseOver={this.mouseOverHandler}
                          onMouseOut={this.mouseOutHandler}
                          onFocus={this.focusHandler}
                          onBlur={this.blurHandler}
                          disabled={disabled}/>

                <IconButton className={passwordVisibleIconClassName}
                            iconCls={passwordVisible ? 'fas fa-eye' : 'far fa-eye-slash'}
                            onTouchTap={this.togglePasswordVisible}/>

                <IconButton ref="clearButton"
                            className={clearButtonClassName}
                            iconCls="fas fa-times-circle"
                            onTouchTap={this.clearValue}/>

                {
                    rightIconCls ?
                        <IconButton className={rightIconClassName}
                                    rightIconCls={rightIconCls}
                                    disableTouchRipple={!onRightIconTouchTap}
                                    onTouchTap={this.rightIconTouchTapHandler}/>
                        :
                        null
                }

                <div className={wordCountClassName}>
                    <div className="text-area-word-count-separator"></div>
                    {
                        wordCountVisible ?
                            `${value ? value.length : 0}${maxLength ? ` / ${maxLength}` : '' }`
                            :
                            null
                    }
                </div>

                {
                    fieldMsgVisible && infoVisible && infoMsg ?
                        <FieldMsg type="info"
                                  msg={infoMsg}/>
                        :
                        null
                }

                {
                    fieldMsgVisible && errorVisible && invalidMsgs.length > 0 ?
                        <FieldMsg type="error"
                                  msg={invalidMsgs.join(', ')}/>
                        :
                        null
                }

                {children}

            </div>
        );

    }
}

TextArea.propTypes = {

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
     * The TextArea theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * Specifies the type of input to display such as "password" or "text".
     */
    type: PropTypes.oneOf(Util.enumerateValue(FieldType)),

    /**
     * The name of the text area.
     */
    name: PropTypes.string,

    /**
     * The placeholder of the text area.
     */
    placeholder: PropTypes.string,

    /**
     * The value of the TextArea.Type can be string or number.
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
     * If true, passwordButton will display.
     */
    passwordButtonVisible: PropTypes.bool,

    autoHeight: PropTypes.bool,

    wordCountVisible: PropTypes.bool,

    isFocusedSelectAll: PropTypes.bool,

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
    onPasswordInvisible: PropTypes.func,

    onIconTouchTap: PropTypes.func,
    onRightIconTouchTap: PropTypes.func,

    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func

};

TextArea.defaultProps = {

    theme: Theme.DEFAULT,

    type: 'text',
    name: '',
    placeholder: '',
    value: '',
    iconCls: '',
    rightIconCls: '',
    disabled: false,
    readOnly: false,
    autoFocus: false,
    infoMsg: '',
    autoHeight: false,
    wordCountVisible: false,
    isFocusedSelectAll: false,

    clearButtonVisible: false,
    passwordButtonVisible: false,

    // valid
    required: false,
    patternInvalidMsg: '',

    fieldMsgVisible: false

};

export default TextArea;