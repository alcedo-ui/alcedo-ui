/**
 * @file MaterialTextArea component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TextArea from '../TextArea';
import MaterialProvider from '../MaterialProvider';
import Theme from '../Theme';

import Util from '../_vendors/Util';

class MaterialTextArea extends Component {

    static Type = TextArea.Type;
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
                className, style, theme, label, isLabelAnimate, wordCountVisible, disabled, required,
                ...restProps
            } = this.props,
            {value} = this.state,

            wrapperClassName = classNames('material-text-area', {
                'has-word-count': wordCountVisible,
                [className]: className
            });

        return (
            <MaterialProvider className={wrapperClassName}
                              style={style}
                              theme={theme}
                              label={label}
                              isLabelAnimate={isLabelAnimate}
                              hasValue={!!value}
                              disabled={disabled}
                              required={required}>
                <TextArea {...restProps}
                          theme={theme}
                          value={value}
                          disabled={disabled}
                          required={required}
                          wordCountVisible={wordCountVisible}
                          onChange={this.triggerChangeHandler}/>
            </MaterialProvider>
        );

    }
}

MaterialTextArea.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

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
    type: PropTypes.oneOf(Util.enumerateValue(TextArea.Type)),

    /**
     * The name of the text area.
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
     * The placeholder of the text area.
     */
    placeholder: PropTypes.string,

    /**
     * The value of the text area. Type can be string or number.
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

MaterialTextArea.defaultProps = {

    theme: Theme.DEFAULT,

    type: 'text',
    name: '',
    label: '',
    isLabelAnimate: true,
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

    clearButtonVisible: false,
    passwordButtonVisible: false,

    // valid
    required: false,
    patternInvalidMsg: '',

    fieldMsgVisible: false

};

export default MaterialTextArea;