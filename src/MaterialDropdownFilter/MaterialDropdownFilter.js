/**
 * @file MaterialDropdownFilter component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DropdownFilter from '../DropdownFilter';
import MaterialProvider from '../MaterialProvider';
import Theme from '../Theme';

import SelectMode from '../_statics/SelectMode';

import PureRender from '../_vendors/PureRender';
import Util from '../_vendors/Util';

@PureRender
class MaterialDropdownFilter extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            filter: ''
        };

        this.triggerFilterChangeHandler = ::this.triggerFilterChangeHandler;
        this.triggerChangeHandler = ::this.triggerChangeHandler;
        this.closePopup = ::this.closePopup;

    }

    triggerFilterChangeHandler(filter) {
        this.setState({
            filter
        }, () => {
            const {onFilterChange} = this.props;
            onFilterChange && onFilterChange(filter);
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

    closePopup() {
        this.refs.dropdownFilter && this.refs.dropdownFilter.closePopup();
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
                className, style, theme, label, isLabelAnimate, popupClassName, required,
                ...restProps
            } = this.props,
            {value, filter} = this.state,

            wrapperClassName = classNames('material-dropdown-filter', {
                [className]: className
            }),

            filterClassName = classNames('material-dropdown-filter-popup', {
                [popupClassName]: popupClassName
            });

        return (
            <MaterialProvider className={wrapperClassName}
                              style={style}
                              theme={theme}
                              label={label}
                              isLabelAnimate={isLabelAnimate}
                              hasValue={!!filter}
                              required={required}>

                <DropdownFilter {...restProps}
                                ref="dropdownFilter"
                                popupClassName={filterClassName}
                                theme={theme}
                                value={value}
                                onFilterChange={this.triggerFilterChangeHandler}
                                onChange={this.triggerChangeHandler}/>

            </MaterialProvider>
        );

    }
}

MaterialDropdownFilter.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the popup element.
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

    /**
     * The name of the auto complete.
     */
    name: PropTypes.string,

    /**
     * The placeholder of the field.
     */
    placeholder: PropTypes.string,

    label: PropTypes.any,

    /**
     * Children passed into the List.
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
            itemRenderer: PropTypes.func,

            /**
             * Callback function fired when a list item touch-tapped.
             */
            onTouchTap: PropTypes.func

        }), PropTypes.string, PropTypes.number])),

        // grouped
        PropTypes.array

    ]).isRequired,

    /**
     * If true, the auto complete will be disabled.
     */
    disabled: PropTypes.bool,

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
     * If true, the popup list automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    /**
     * The type of dropDown list,can be normal,checkbox,radio.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * Callback function fired when filter changed.
     */
    filterCallback: PropTypes.func,

    /**
     * Use this property to display an icon.
     */
    iconCls: PropTypes.string,

    /**
     * Use this property to display an icon.
     */
    rightIconCls: PropTypes.string,

    /**
     * The visiblity of no matched popup.
     */
    noMatchedPopupVisible: PropTypes.bool,

    /**
     * The message of no matched value.
     */
    noMatchedMsg: PropTypes.string,

    /**
     * If true,the list data will be grouped.
     */
    isGrouped: PropTypes.bool,

    isLabelAnimate: PropTypes.bool,

    popupChildren: PropTypes.any,

    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * The function that trigger when filter changes.
     */
    onFilterChange: PropTypes.func,

    /**
     * The function that trigger when press enter.
     */
    onFilterPressEnter: PropTypes.func,

    /**
     * The function that trigger when filter cleared.
     */
    onFilterClear: PropTypes.func,

    /**
     * The function that trigger when value changed.
     */
    onChange: PropTypes.func,

    /**
     * The function that trigger when touch-tap the list items.
     */
    onItemTouchTap: PropTypes.func,

    /**
     * Callback function fired when DropdownFilter get focus.
     */
    onFocus: PropTypes.func,

    /**
     * Callback function fired when DropdownFilter lose focus.
     */
    onBlur: PropTypes.func,

    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func

};

MaterialDropdownFilter.defaultProps = {

    theme: Theme.DEFAULT,

    name: '',
    placeholder: '',
    label: '',
    isLabelAnimate: true,
    data: [],
    disabled: false,
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    autoClose: false,
    iconCls: '',
    rightIconCls: 'fas fa-search',
    noMatchedPopupVisible: true,
    noMatchedMsg: '',
    isGrouped: false,
    selectMode: SelectMode.SINGLE_SELECT,

    radioUncheckedIconCls: 'fas fa-check',
    radioCheckedIconCls: 'fas fa-check',
    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square'

};

export default MaterialDropdownFilter;