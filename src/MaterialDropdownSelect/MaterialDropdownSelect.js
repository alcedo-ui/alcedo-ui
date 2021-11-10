/**
 * @file MaterialDropdownSelect component
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DropdownSelect from '../DropdownSelect';
import MaterialProvider from '../MaterialProvider';

import Theme from '../Theme';
import SelectMode from '../_statics/SelectMode';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class MaterialDropdownSelect extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;
    static Position = Position;
    static TipPosition = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.dropdownSelect = createRef();
        this.dropdownSelectInstance = null;

        this.state = {
            value: props.value,
            isFocus: false
        };

    }

    /**
     * public
     */
    startRipple = (e, props) => {
        this.dropdownSelectInstance && this.dropdownSelectInstance.startRipple(e, props);
    };

    /**
     * public
     */
    endRipple = () => {
        this.dropdownSelectInstance && this.dropdownSelectInstance.endRipple();
    };

    /**
     * public
     */
    triggerRipple = (e, props) => {
        this.dropdownSelectInstance && this.dropdownSelectInstance.triggerRipple(e, props);
    };

    /**
     * public
     */
    resetPopupPosition = () => {
        this.dropdownSelectInstance && this.dropdownSelectInstance.resetPosition();
    };

    /**
     * public
     */
    openPopup = () => {
        this.dropdownSelectInstance && this.dropdownSelectInstance.openPopup();
    };

    /**
     * public
     */
    closePopup = () => {
        this.dropdownSelectInstance && this.dropdownSelectInstance.closePopup();
    };

    handleTriggerChange = value => {
        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });
    };

    componentDidMount() {
        this.dropdownSelectInstance = this.dropdownSelect && this.dropdownSelect.current;
    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {
                className, style, theme, label, isLabelAnimate, disabled, required, selectMode,
                ...restProps
            } = this.props,
            {value} = this.state;

        return (
            <MaterialProvider className={classNames('material-dropdown-select', {
                [className]: className
            })}
                              style={style}
                              theme={theme}
                              label={label}
                              isLabelAnimate={isLabelAnimate}
                              hasValue={selectMode === SelectMode.MULTI_SELECT ? value && value.length > 0 : !!value}
                              disabled={disabled}
                              required={required}>
                <DropdownSelect {...restProps}
                                ref={this.dropdownSelect}
                                value={value}
                                selectMode={selectMode}
                                disabled={disabled}
                                onChange={this.handleTriggerChange}/>
            </MaterialProvider>
        );

    }
}

MaterialDropdownSelect.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The class name of the popup element.
     */
    popupClassName: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Override the styles of the popup element.
     */
    popupStyle: PropTypes.object,

    /**
     * The theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * The name of the dropDownSelect.
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
     * The value of the dropDownSelect.
     */
    value: PropTypes.any,

    /**
     * The placeholder of the dropDownSelect.
     */
    placeholder: PropTypes.string,

    title: PropTypes.string,
    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Position)),

    rightIconCls: PropTypes.string,

    /**
     * The options data.
     */
    data: PropTypes.oneOfType([

        // not grouped
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

            /**
             * The CSS class name of the list button.
             */
            className: PropTypes.string,

            /**
             * Override the styles of the list button.
             */
            style: PropTypes.object,

            /**
             * The theme of the list button.
             */
            theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

            /**
             * The text value of the list button.Type can be string or number.
             */
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

            /**
             * The desc value of the list button. Type can be string or number.
             */
            desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

            /**
             * If true, the list button will be disabled.
             */
            disabled: PropTypes.bool,

            /**
             * If true,the button will be have loading effect.
             */
            isLoading: PropTypes.bool,

            /**
             * If true,the element's ripple effect will be disabled.
             */
            disableTouchRipple: PropTypes.bool,

            /**
             * Use this property to display an icon. It will display on the left.
             */
            iconCls: PropTypes.string,

            /**
             * Use this property to display an icon. It will display on the right.
             */
            rightIconCls: PropTypes.string,

            /**
             * You can create a complicated renderer callback instead of value and desc prop.
             */
            renderer: PropTypes.func,

            /**
             * Callback function fired when a list item touch-tapped.
             */
            onClick: PropTypes.func

        }), PropTypes.string, PropTypes.number])),

        // grouped
        PropTypes.array

    ]),

    /**
     * The invalid message of dropDownSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the dropDownSelect will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the dropDownSelect will be loading.
     */
    isLoading: PropTypes.bool,

    /**
     * The mode of listItem.Can be normal,checkbox.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

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
     * The message of the dropDownSelect.
     */
    infoMsg: PropTypes.string,

    /**
     * Use this function to format the options's text.
     */
    textFormat: PropTypes.func,

    /**
     * If true,the drop-down box automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    /**
     * If true,the drop-down box will have search input.
     */
    useFilter: PropTypes.bool,

    filterIconCls: PropTypes.string,
    filterPlaceholder: PropTypes.string,
    useSelectAll: PropTypes.bool,
    selectAllText: PropTypes.string,

    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    /**
     * The message of no matching option.
     */
    noMatchedMsg: PropTypes.string,

    /**
     * If true,the drop-down box will be have group selection.
     */
    isGrouped: PropTypes.bool,

    required: PropTypes.bool,
    shouldFollowScroll: PropTypes.bool,
    resetPopPositionWait: PropTypes.number,

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onItemClick: PropTypes.func,

    /**
     * Callback function fired when the popup is closed.
     */
    onClosePopup: PropTypes.func,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func,

    onWheel: PropTypes.func

};

MaterialDropdownSelect.defaultProps = {

    theme: Theme.DEFAULT,

    isLabelAnimate: true,
    placeholder: 'Please select ...',
    rightIconCls: 'fas fa-angle-down',
    data: [],
    disabled: false,
    isLoading: false,
    selectMode: SelectMode.SINGLE_SELECT,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    autoClose: true,
    useFilter: false,
    filterIconCls: 'fas fa-search',
    filterPlaceholder: 'Search ...',
    useSelectAll: false,
    selectAllText: 'Select All',
    isGrouped: false,
    required: false,
    tipPosition: Position.BOTTOM,

    resetPopPositionWait: 250

};

export default MaterialDropdownSelect;
