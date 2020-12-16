/**
 * @file TextField component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef, createElement} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

// Components
import IconButton from '../IconButton';
import FieldMsg from '../FieldMsg';
import TipProvider from '../TipProvider';

// Statics
import Theme from '../Theme';
import FieldType from '../_statics/FieldType';
import Position from '../_statics/Position';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';
import Valid from '../_vendors/Valid';
import ComponentUtil from '../_vendors/ComponentUtil';

class TextField extends Component {

    static Type = FieldType;
    static Theme = Theme;
    static TipPosition = Position;

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.input = createRef();
        this.inputEl = null;
        this.clearButton = createRef();

        this.state = {
            value: props.value,
            isFocused: !!props.autoFocus,
            passwordVisible: false,
            infoVisible: false,
            errorVisible: false,
            invalidMsgs: ''
        };

    }

    componentDidMount() {

        this.inputEl = this.input && this.input.current;

        if (this.props.autoFocus === true) {
            this.focus();
        }

    }

    /**
     * public
     */
    focus = () => {
        this.inputEl?.focus?.();
    };

    /**
     * public
     */
    blur = () => {
        this.inputEl?.blur?.();
    };

    handleChange = e => {

        e?.persist?.();

        const value = e.target.value,
            invalidMsgs = Valid.fieldValid(value, this.props);

        this.setState({
            value,
            invalidMsgs
        }, () => {
            this.props.onChange?.(value);
            invalidMsgs?.length > 0 ? this.props.onInvalid?.() : this.props.onValid?.();
        });

    };

    handleKeyDown = e => {

        const {value} = this.state;
        this.props.onKeyDown?.(e, value);

        if (e.keyCode === 13) {
            this.props.onPressEnter?.(e, value);
        }

    };

    clearValue = () => {

        const {disabled, clearButtonVisible, onClear, onChange, onValid, onInvalid} = this.props,
            invalidMsgs = Valid.fieldValid('', this.props);

        !disabled && clearButtonVisible && this.setState({
            value: '',
            invalidMsgs
        }, () => {

            this.inputEl.value = '';

            this.focus();

            onClear && onClear();
            onChange && onChange('');

            invalidMsgs && invalidMsgs.length > 0 ? onInvalid && onInvalid() : onValid && onValid();

        });

    };

    togglePasswordVisible = () => {

        const {disabled, passwordButtonVisible, onPasswordVisible, onPasswordInvisible} = this.props,
            passwordVisible = !this.state.passwordVisible;

        !disabled && passwordButtonVisible && this.setState({
            passwordVisible
        }, () => {

            this.focus();

            passwordVisible ?
                (onPasswordVisible && onPasswordVisible())
                :
                (onPasswordInvisible && onPasswordInvisible());

        });

    };

    handleMouseOver = e => {
        this.setState({
            infoVisible: true,
            errorVisible: true
        }, () => this.props.onMouseOver?.(e, this.state.value));
    };

    handleMouseOut = e => {
        this.setState({
            infoVisible: false,
            errorVisible: false
        }, () => this.props.onMouseOut?.(e, this.state.value));
    };

    handleFocus = e => {
        this.setState({
            isFocused: true
        }, () => {

            const {isFocusedSelectAll} = this.props,
                {value} = this.state;

            this.props.onFocus?.(e, value);
            isFocusedSelectAll && this.inputEl?.setSelectionRange?.(0, value == null ? 0 : value.length);

        });
    };

    handleBlur = e => {

        const clearButtonEl = findDOMNode(this.clearButton?.current);
        if (clearButtonEl && e?.relatedTarget == clearButtonEl) {
            return;
        }

        this.setState({
            isFocused: false
        }, () => this.props?.onBlur?.(e, this.state.value));

    };

    handleRightIconClick = e => {
        this.props.onRightIconClick?.(e, this.state.value);
    };

    /* eslint-disable complexity */
    render() {

        const {

                children, className, triggerClassName, placeholderClassName, style, theme, type, iconCls, disabled,
                infoMsg, placeholder, clearButtonVisible, clearButtonIconCls, rightIconCls, passwordButtonVisible,
                fieldMsgVisible, maxLength, isStrictMaxLength, parentEl, tip, tipPosition,
                onIconClick, onRightIconClick,

                // not passing down these props
                value: v, autoFocus, pattern, patternInvalidMsg, isFocusedSelectAll,
                onPressEnter, onValid, onInvalid, onClear, onPasswordVisible, onPasswordInvisible,

                ...restProps

            } = this.props,
            {value, isFocused, passwordVisible, infoVisible, errorVisible, invalidMsgs} = this.state,

            isPassword = type === FieldType.PASSWORD,
            empty = value == null || value.length <= 0;

        let inputType = type;
        if (inputType === FieldType.PASSWORD) {
            inputType = passwordVisible ? FieldType.TEXT : FieldType.PASSWORD;
        } else if (Valid.isNumberType(type)) {
            inputType = 'text';
        }

        const inputProps = {
            ...restProps,
            ref: this.input,
            className: classNames('text-field-input', {
                [triggerClassName]: triggerClassName
            }),
            type: inputType,
            disabled: disabled,
            maxLength: isStrictMaxLength ? maxLength : null,
            onChange: this.handleChange,
            onKeyDown: this.handleKeyDown,
            onMouseOver: this.handleMouseOver,
            onMouseOut: this.handleMouseOut,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
        };
        if (type !== FieldType.PASSWORD) {
            inputProps.value = value == null ? '' : value;
        }

        return (
            <TipProvider tipContent={tip}
                         parentEl={parentEl}
                         position={tipPosition}>
                <div className={classNames('text-field',
                    empty ? 'empty' : 'not-empty',
                    invalidMsgs && invalidMsgs.length > 0 ? ' theme-error' : (theme ? ` theme-${theme}` : ''), {
                        password: isPassword,
                        'has-icon': iconCls,
                        'has-right-icon': rightIconCls,
                        focused: isFocused,
                        'has-clear-button': clearButtonVisible,
                        [className]: className
                    })}
                     style={style}
                     disabled={disabled}>

                    {
                        iconCls ?
                            <IconButton className={classNames('text-field-left-icon', {
                                deactivated: !onIconClick
                            })}
                                        iconCls={iconCls}
                                        disableTouchRipple={!onIconClick}
                                        onClick={onIconClick}/>
                            :
                            null
                    }

                    {
                        (placeholder !== '' && placeholder !== null) && !isFocused && (value == null || value == '') ?
                            <input className={classNames('text-field-placeholder', {
                                [placeholderClassName]: placeholderClassName
                            })}
                                   value={placeholder}
                                   disabled={true}/>
                            :
                            null
                    }

                    {createElement('input', inputProps)}

                    {
                        clearButtonVisible ?
                            <IconButton ref={this.clearButton}
                                        className={classNames('clear-icon', {
                                            hidden: disabled || value == null || value.length < 1
                                        })}
                                        iconCls={clearButtonIconCls}
                                        onClick={this.clearValue}/>
                            :
                            null
                    }

                    {
                        isPassword && passwordButtonVisible ?
                            <IconButton className="password-visible-icon"
                                        iconCls={passwordVisible ? 'fas fa-eye' : 'far fa-eye-slash'}
                                        onClick={this.togglePasswordVisible}/>
                            :
                            null
                    }

                    {
                        rightIconCls ?
                            <IconButton className={classNames('text-field-right-icon', {
                                deactivated: !onRightIconClick
                            })}
                                        rightIconCls={rightIconCls}
                                        disableTouchRipple={!onRightIconClick}
                                        onClick={this.handleRightIconClick}/>
                            :
                            null
                    }

                    <FieldMsg type="info"
                              msg={infoMsg}
                              visible={!!(fieldMsgVisible && infoVisible && infoMsg)}
                              triggerEl={this.inputEl}
                              parentEl={parentEl}
                              position={FieldMsg.Position.TOP_LEFT}/>

                    <FieldMsg type="error"
                              msg={invalidMsgs && invalidMsgs.join(', ')}
                              visible={!!(fieldMsgVisible && errorVisible && invalidMsgs && invalidMsgs.length > 0)}
                              triggerEl={this.inputEl}
                              parentEl={parentEl}/>

                    {children}

                </div>
            </TipProvider>
        );

    }
}

TextField.propTypes = {

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
    clearButtonIconCls: PropTypes.string,

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

    isStrictMaxLength: PropTypes.bool,
    fieldMsgVisible: PropTypes.bool,
    parentEl: PropTypes.object,

    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Position)),

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

    onIconClick: PropTypes.func,
    onRightIconClick: PropTypes.func,

    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func

};

TextField.defaultProps = {

    theme: Theme.DEFAULT,

    type: 'text',
    disabled: false,
    readOnly: false,
    autoFocus: false,
    isFocusedSelectAll: false,

    clearButtonVisible: true,
    clearButtonIconCls: 'fas fa-times-circle',

    passwordButtonVisible: true,

    // valid
    required: false,

    tipPosition: Position.BOTTOM,

    autoComplete: 'off',
    autoCorrect: 'off',
    autoCapitalize: 'off',
    spellCheck: 'false',
    isStrictMaxLength: true,
    fieldMsgVisible: false

};

export default TextField;
