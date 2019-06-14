/**
 * @file TextArea component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import IconButton from '../IconButton';
import FieldMsg from '../FieldMsg';

import Theme from '../Theme';
import FieldType from '../_statics/FieldType';

import Util from '../_vendors/Util';
import Valid from '../_vendors/Valid';
import ComponentUtil from '../_vendors/ComponentUtil';

class TextArea extends Component {

    static Type = FieldType;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.input = createRef();
        this.inputEl = null;
        this.clearButton = createRef();
        this.clearButtonEl = null;

        this.state = {
            value: props.value,
            isFocused: props.autoFocus ? true : false,
            passwordVisible: false,
            infoVisible: false,
            errorVisible: false,
            invalidMsgs: ''
        };

    }

    /**
     * public
     */
    focus = () => {
        this.inputEl && this.inputEl.focus();
    };

    /**
     * public
     */
    blur = () => {
        this.inputEl && this.inputEl.blur();
    };

    /**
     * public
     */
    resetHeight = () => {
        if (this.props.autoHeight && this.inputEl) {
            this.inputEl.style.height = '1px';
            this.inputEl.style.height = Math.max(this.inputEl.scrollHeight, this.inputElInitHeight) + 'px';
        }
    };

    handleChange = e => {

        const {onValid, onInvalid} = this.props,
            value = e.target.value,
            invalidMsgs = Valid.fieldValid(value, this.props);

        this.resetHeight();

        this.setState({
            invalidMsgs,
            value
        }, () => {
            this.props.onChange && this.props.onChange(value, e);
            invalidMsgs.length > 0 ? onInvalid && onInvalid() : onValid && onValid();
        });

    };

    handleKeyDown = e => {
        if (e.keyCode === 13) {
            const {onPressEnter} = this.props,
                {value} = this.state;
            onPressEnter && onPressEnter(e, value);
        }
    };

    clearValue = () => {

        const {disabled, clearButtonVisible, onClear, onChange, onValid, onInvalid} = this.props,
            invalidMsgs = Valid.fieldValid('', this.props);

        !disabled && clearButtonVisible && this.setState({
            invalidMsgs,
            value: ''
        }, () => {

            this.focus();

            onClear && onClear();
            onChange && onChange('');

            invalidMsgs.length > 0 ? onInvalid && onInvalid() : onValid && onValid();

        });

    };

    togglePasswordVisible = () => {

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

    };

    handleMouseOver = e => {
        this.setState({
            infoVisible: true,
            errorVisible: true
        }, () => {
            const {onMouseOver} = this.props,
                {value} = this.state;
            onMouseOver && onMouseOver(e, value);
        });
    };

    handleMouseOut = e => {
        this.setState({
            infoVisible: false,
            errorVisible: false
        }, () => {
            const {onMouseOut} = this.props,
                {value} = this.state;
            onMouseOut && onMouseOut(e, value);
        });
    };

    handleFocus = e => {
        this.setState({
            isFocused: true
        }, () => {
            const {isFocusedSelectAll, onFocus} = this.props,
                {value} = this.state;
            onFocus && onFocus(e, value);
            isFocusedSelectAll && this.inputEl && this.inputEl.setSelectionRange(0, value ? value.length : 0);
        });
    };

    handleBlur = e => {

        if (e.relatedTarget == this.clearButtonEl) {
            return;
        }

        this.setState({
            isFocused: false
        }, () => {
            const {onBlur} = this.props,
                {value} = this.state;
            onBlur && onBlur(e, value);
        });

    };

    handleRightIconClick = e => {
        const {onRightIconClick} = this.props,
            {value} = this.state;
        onRightIconClick && onRightIconClick(e, value);
    };

    componentDidMount() {

        this.inputEl = this.input && this.input.current;
        this.inputElInitHeight = parseInt(this.inputEl.offsetHeight);
        this.clearButtonEl = this.clearButton && this.clearButton.current && findDOMNode(this.clearButton.current);

        this.resetHeight();

        if (this.props.autoFocus === true && this.inputEl) {
            this.focus();
        }

    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    /* eslint-disable complexity */
    render() {

        const {

                children, className, triggerClassName, placeholderClassName, style, theme,
                type, iconCls, disabled, infoMsg, autoHeight, wordCountVisible, placeholder,
                clearButtonVisible, rightIconCls, passwordButtonVisible, fieldMsgVisible, maxLength, isStrictMaxLength,
                onIconClick, onRightIconClick,

                // not passing down these props
                value: v, autoFocus, pattern, patternInvalidMsg, isFocusedSelectAll,
                onPressEnter, onValid, onInvalid, onClear, onPasswordVisible, onPasswordInvisible,

                ...restProps

            } = this.props,
            {value, isFocused, passwordVisible, infoVisible, errorVisible, invalidMsgs} = this.state,
            isPassword = type === FieldType.PASSWORD;

        let inputType = type;
        if (inputType === FieldType.PASSWORD) {
            inputType = passwordVisible ? FieldType.TEXT : FieldType.PASSWORD;
        } else if (Valid.isNumberType(type)) {
            inputType = 'text';
        }

        return (
            <div className={classNames('text-area',
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
                })}
                 style={style}
                 disabled={disabled}>

                {
                    iconCls ?
                        <IconButton className={classNames('text-area-left-icon', {
                            deactivated: !onIconClick
                        })}
                                    iconCls={iconCls}
                                    disableTouchRipple={!onIconClick}
                                    onClick={onIconClick}/>
                        :
                        null
                }

                {
                    placeholder && !value && !isFocused ?
                        <textarea className={classNames('text-area-placeholder', {
                            [placeholderClassName]: placeholderClassName
                        })}
                                  value={placeholder}
                                  disabled={true}/>
                        :
                        null
                }

                <textarea {...restProps}
                          ref={this.input}
                          className={classNames('text-area-input', {
                              [triggerClassName]: triggerClassName
                          })}
                          type={inputType}
                          value={value}
                          maxLength={isStrictMaxLength ? maxLength : null}
                          onChange={this.handleChange}
                          onKeyDown={this.handleKeyDown}
                          onMouseOver={this.handleMouseOver}
                          onMouseOut={this.handleMouseOut}
                          onFocus={this.handleFocus}
                          onBlur={this.handleBlur}
                          disabled={disabled}/>

                <IconButton className={classNames('password-visible-icon', {
                    hidden: !isPassword || !passwordButtonVisible
                })}
                            iconCls={passwordVisible ? 'fas fa-eye' : 'far fa-eye-slash'}
                            onClick={this.togglePasswordVisible}/>

                <IconButton ref={this.clearButton}
                            className={classNames('clear-icon', {
                                hidden: !clearButtonVisible || !value || value.length < 1
                            })}
                            iconCls="fas fa-times-circle"
                            onClick={this.clearValue}/>

                {
                    rightIconCls ?
                        <IconButton className={classNames('text-area-right-icon', {
                            deactivated: !onRightIconClick
                        })}
                                    rightIconCls={rightIconCls}
                                    disableTouchRipple={!onRightIconClick}
                                    onClick={this.handleRightIconClick}/>
                        :
                        null
                }

                <div className={classNames('text-area-word-count', {
                    error: value.length > maxLength
                })}>
                    <div className="text-area-word-count-separator"></div>
                    {
                        wordCountVisible ?
                            `${value ? value.length : 0}${maxLength ? ` / ${maxLength}` : ''}`
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

    children: PropTypes.any,

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
    isStrictMaxLength: PropTypes.bool,
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

    onIconClick: PropTypes.func,
    onRightIconClick: PropTypes.func,

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
    isStrictMaxLength: false,
    isFocusedSelectAll: false,

    clearButtonVisible: false,
    passwordButtonVisible: false,

    // valid
    required: false,
    patternInvalidMsg: '',

    fieldMsgVisible: false

};

export default TextArea;
