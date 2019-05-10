/**
 * @file ButtonRadioSelect component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Dropdown from '../Dropdown';
import ButtonRadioGroup from '../ButtonRadioGroup';

import Theme from '../Theme';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class ButtonRadioSelect extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.dropdown = createRef();

        this.state = {
            value: props.value
        };

    }

    /**
     * public
     */
    startRipple = (e, props) => {
        this.dropdown && this.dropdown.current && this.dropdown.current.startRipple(e, props);
    };

    /**
     * public
     */
    endRipple = () => {
        this.dropdown && this.dropdown.current && this.dropdown.current.endRipple();
    };

    /**
     * public
     */
    triggerRipple = (e, props) => {
        this.dropdown && this.dropdown.current && this.dropdown.current.triggerRipple(e, props);
    };

    /**
     * public
     */
    openPopup = () => {
        this.dropdown && this.dropdown.current && this.dropdown.current.openPopup();
    };

    /**
     * public
     */
    closePopup = () => {
        this.dropdown && this.dropdown.current && this.dropdown.current.closePopup();
    };

    handleChange = value => {

        const {autoClose} = this.props;
        if (autoClose) {
            this.closePopup();
        }

        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    };

    getTriggerValue = () => {

        const {placeholder, triggerRenderer, renderer, valueField, displayField} = this.props,
            {value} = this.state;

        if (triggerRenderer) {
            return typeof triggerRenderer === 'function' ? triggerRenderer(value) : triggerRenderer;
        }

        if (!value) {
            return placeholder;
        }

        return renderer ?
            renderer(value)
            :
            Util.getTextByDisplayField(value, displayField, valueField);

    };

    filterData = () => {

        const {data, valueField, displayField} = this.props,
            {value} = this.state;

        if (!value) {
            return data;
        }

        return data.filter(item => item
            && Util.getValueByValueField(item, valueField, displayField)
            !== Util.getValueByValueField(value, valueField, displayField));

    };

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {

                className, style, triggerClassName, triggerStyle, popupClassName, popupStyle,
                theme, popupTheme, activatedTheme, idField, valueField, displayField, descriptionField,
                data, renderer, onItemClick,

                ...restProps

            } = this.props,
            {value} = this.state;

        return (
            <Dropdown {...restProps}
                      ref={this.dropdown}
                      className={classNames('button-radio-select', {
                          [className]: className
                      })}
                      style={style}
                      triggerClassName={classNames('button-radio-select-trigger', {
                          [triggerClassName]: triggerClassName
                      })}
                      triggerStyle={triggerStyle}
                      popupClassName={classNames('button-radio-select-popup', {
                          [popupClassName]: popupClassName
                      })}
                      popupStyle={popupStyle}
                      theme={theme}
                      activatedTheme={activatedTheme}
                      popupTheme={popupTheme}
                      position={Dropdown.Position.RIGHT}
                      autoPopupWidth={false}
                      triggerValue={this.getTriggerValue()}>
                <ButtonRadioGroup theme={theme}
                                  activatedTheme={theme}
                                  data={this.filterData()}
                                  value={value}
                                  idField={idField}
                                  valueField={valueField}
                                  displayField={displayField}
                                  descriptionField={descriptionField}
                                  renderer={renderer}
                                  onItemClick={onItemClick}
                                  onChange={this.handleChange}/>
            </Dropdown>
        );

    }
}

ButtonRadioSelect.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The ButtonCheckbox theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The CSS class name of the trigger element.
     */
    triggerClassName: PropTypes.string,

    /**
     * Override the styles of the trigger element.
     */
    triggerStyle: PropTypes.object,

    /**
     * The CSS class name of the popup element.
     */
    popupClassName: PropTypes.string,

    /**
     * Override the styles of the popup element.
     */
    popupStyle: PropTypes.object,

    /**
     * The ButtonCheckbox theme.
     */
    popupTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The ButtonCheckbox activated theme.
     */
    activatedTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The hidden input name for form submit.
     */
    name: PropTypes.string,

    /**
     * Data for ButtonRadioGroup.
     */
    data: PropTypes.arrayOf(PropTypes.shape({
        className: PropTypes.string,
        style: PropTypes.object,
        label: PropTypes.any,
        value: PropTypes.any,
        disabled: PropTypes.bool
    })).isRequired,

    /**
     * Set one of the button activation.
     */
    value: PropTypes.any,

    placeholder: PropTypes.string,

    title: PropTypes.string,
    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Position)),

    triggerRenderer: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),

    rightIconCls: PropTypes.string,

    disabled: PropTypes.bool,

    /**
     * The id field name in data. (default: "id")
     */
    idField: PropTypes.string,

    /**
     * The value field name in data. (default: "value")
     */
    valueField: PropTypes.string,

    /**
     * The display field name in data. (default: "text")
     */
    displayField: PropTypes.string,

    /**
     * The description field name in data. (default: "desc")
     */
    descriptionField: PropTypes.string,

    /**
     * If true,the drop-down box automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * Callback function fired when the popup is open.
     */
    onOpenPopup: PropTypes.func,

    /**
     * Callback function fired when the popup is close.
     */
    onClosePopup: PropTypes.func,

    onItemClick: PropTypes.func,

    onChange: PropTypes.func

};

ButtonRadioSelect.defaultProps = {

    theme: Theme.DEFAULT,
    activatedTheme: Theme.PRIMARY,

    data: [],
    placeholder: 'Please select ...',
    disabled: false,
    tipPosition: Position.BOTTOM,

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    autoClose: true

};

export default ButtonRadioSelect;
