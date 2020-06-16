/**
 * @file MaterialTextArea component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import TextArea from '../TextArea';
import MaterialProvider from '../MaterialProvider';

// Statics
import Theme from '../Theme';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class MaterialTextArea extends Component {

    static Type = TextArea.Type;
    static Theme = Theme;

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.provider = createRef();
        this.providerInstance = null;
        this.textArea = createRef();
        this.textAreaInstance = null;

        this.state = {
            value: props.value
        };

    }

    componentDidMount() {
        this.providerInstance = this.provider?.current;
        this.textAreaInstance = this.textArea?.current;
    }

    /**
     * public
     */
    focus = () => {
        this.providerInstance?.focus?.();
        this.textAreaInstance?.focus?.();
    };

    /**
     * public
     */
    blur = () => {
        this.providerInstance?.blur?.();
        this.textAreaInstance?.blur?.();
    };

    handleTriggerChange = value => {
        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });
    };

    render() {

        const {
                className, style, theme, label, isLabelAnimate, wordCountVisible, disabled, required,
                ...restProps
            } = this.props,
            {value} = this.state;

        return (
            <MaterialProvider ref={this.provider}
                              className={classNames('material-text-area', {
                                  'has-word-count': wordCountVisible,
                                  [className]: className
                              })}
                              style={style}
                              theme={theme}
                              label={label}
                              isLabelAnimate={isLabelAnimate}
                              hasValue={!!value}
                              disabled={disabled}
                              required={required}>
                <TextArea {...restProps}
                          ref={this.textArea}
                          theme={theme}
                          value={value}
                          disabled={disabled}
                          required={required}
                          wordCountVisible={wordCountVisible}
                          onChange={this.handleTriggerChange}/>
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

    onIconClick: PropTypes.func,
    onRightIconClick: PropTypes.func,

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
