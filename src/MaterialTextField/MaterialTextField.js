/**
 * @file MaterialTextField component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TextField from '../TextField';
import MaterialFieldSeparator from '../_MaterialFieldSeparator';
import MaterialProvider from '../MaterialProvider';
import Theme from '../Theme';

import Util from '../_vendors/Util';

class MaterialTextField extends Component {

    static Type = TextField.Type;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value
        };

        this.triggerChangeHandler = ::this.triggerChangeHandler;

    }

    triggerChangeHandler(value) {
        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });
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
                className, style, theme, label, isLabelAnimate, required,
                ...restProps
            } = this.props,
            {value} = this.state,

            fieldClassName = classNames('material-text-field', {
                [className]: className
            });

        return (
            <MaterialProvider className={fieldClassName}
                              style={style}
                              theme={theme}
                              label={label}
                              isLabelAnimate={isLabelAnimate}
                              hasValue={!!value}
                              required={required}>

                <TextField {...restProps}
                           theme={theme}
                           value={value}
                           required={required}
                           onChange={this.triggerChangeHandler}/>

            </MaterialProvider>
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

MaterialTextField.defaultProps = {

    className: '',
    style: null,
    theme: Theme.DEFAULT,

    type: 'text',
    name: '',
    label: '',
    isLabelAnimate: true,
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
    patternInvalidMsg: '',
    preventInvalidInput: false,

    autoComplete: 'off',
    autoCorrect: 'off',
    autoCapitalize: 'off',
    spellCheck: 'false',

    fieldMsgVisible: true

};

export default MaterialTextField;