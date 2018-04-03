/**
 * @file MaterialDatePickerTextField component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TextField from '../TextField';
import MaterialFieldSeparator from '../_MaterialFieldSeparator';
import Theme from '../Theme';

import PureRender from '../_vendors/PureRender';
import Util from '../_vendors/Util';

@PureRender
class MaterialDatePickerTextField extends Component {

    static Type = TextField.Type;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: '',
            isFocus: false,
            isHover: false
        };

        this.triggerFocusHandler = ::this.triggerFocusHandler;
        this.triggerBlurHandler = ::this.triggerBlurHandler;
        this.triggerChangeHandler = ::this.triggerChangeHandler;
        this.triggerMouseOverHandler = ::this.triggerMouseOverHandler;
        this.triggerMouseOutHandler = ::this.triggerMouseOutHandler;

    }

    triggerFocusHandler(...args) {
        this.setState({
            isFocus: true
        }, () => {
            const {onFocus} = this.props;
            onFocus && onFocus(...args);
        });
    }

    triggerBlurHandler(...args) {
        const {popupVisible} = this.props;
        this.setState({
            isFocus: popupVisible
        }, () => {
            const {onBlur} = this.props;
            onBlur && onBlur(...args);
        });
    }

    triggerChangeHandler(value) {
        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });
    }

    triggerMouseOverHandler(...args) {
        this.setState({
            isHover: true
        }, () => {
            const {onMouseOver} = this.props;
            onMouseOver && onMouseOver(...args);
        });
    }

    triggerMouseOutHandler(...args) {
        this.setState({
            isHover: false
        }, () => {
            const {onMouseOut} = this.props;
            onMouseOut && onMouseOut(...args);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value || nextProps.popupVisible !== this.props.popupVisible) {
            this.setState({
                value: nextProps.value,
                isFocus: nextProps.popupVisible
            });
        }
    }

    componentDidMount() {
        this.setState({
            value: this.props.value
        });
    }

    render() {

        const {
                className, style, theme, label, isLabelAnimate, popupVisible,
                ...restProps
            } = this.props,
            {isFocus, isHover, value} = this.state,

            fieldClassName = classNames('material-date-picker-text-field', {
                animated: isLabelAnimate,
                'has-label': label,
                focused: isFocus,
                'has-value': value,
                [className]: className
            });

        return (
            <div className={fieldClassName}
                 style={style}>

                {
                    label ?
                        <div className="material-date-picker-text-field-label">
                            {label}
                        </div>
                        :
                        null
                }

                <TextField {...restProps}
                           theme={theme}
                           value={value}
                           onFocus={this.triggerFocusHandler}
                           onBlur={this.triggerBlurHandler}
                           onMouseOver={this.triggerMouseOverHandler}
                           onMouseOut={this.triggerMouseOutHandler}
                           onChange={this.triggerChangeHandler}/>

                <MaterialFieldSeparator theme={theme}
                                        isHover={isHover}
                                        isFocus={isFocus}/>

            </div>
        );

    }
}

MaterialDatePickerTextField.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

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
    type: PropTypes.oneOf(Util.enumerateValue(TextField.Type)),

    /**
     * The name of the text field.
     */
    name: PropTypes.string,

    /**
     * The label of the text field.
     */
    label: PropTypes.any,

    /**
     * The animate of the text field.
     */
    isLabelAnimate: PropTypes.bool,

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


    /**
     * If true,the textField will always Focus.
     */
    popupVisible: PropTypes.bool,

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
    onPasswordInvisible: PropTypes.func,

    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func

};

MaterialDatePickerTextField.defaultProps = {

    theme: Theme.DEFAULT,

    type: 'text',
    name: '',
    label: '',
    isLabelAnimate: true,
    placeholder: '',
    value: '',
    disabled: false,
    readOnly: false,
    autoFocus: false,
    popupVisible: false,

    clearButtonVisible: true,
    passwordButtonVisible: true,

    // valid
    required: false,
    patternInvalidMsg: '',

    autoComplete: 'off',
    autoCorrect: 'off',
    autoCapitalize: 'off',
    spellCheck: 'false',

    fieldMsgVisible: false

};

export default MaterialDatePickerTextField;