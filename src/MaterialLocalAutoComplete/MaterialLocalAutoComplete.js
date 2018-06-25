/**
 * @file MaterialLocalAutoComplete component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LocalAutoComplete from '../LocalAutoComplete';
import MaterialProvider from '../MaterialProvider';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class MaterialLocalAutoComplete extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            filter: props.filterInitValue
        };

    }

    triggerFilterChangeHandler = filter => {
        this.setState({
            filter
        }, () => {
            const {onFilterChange} = this.props;
            onFilterChange && onFilterChange(filter);
        });
    };

    triggerChangeHandler = value => {
        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });
    };

    closePopup = () => {
        this.refs.localAutoComplete && this.refs.localAutoComplete.closePopup();
    };

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {
                className, style, theme, label, isLabelAnimate, popupClassName, disabled, required,
                ...restProps
            } = this.props,
            {value, filter} = this.state,

            wrapperClassName = classNames('material-local-auto-complete', {
                [className]: className
            }),

            autoCompleteClassName = classNames('material-local-auto-complete-popup', {
                [popupClassName]: popupClassName
            });

        return (
            <MaterialProvider className={wrapperClassName}
                              style={style}
                              theme={theme}
                              label={label}
                              isLabelAnimate={isLabelAnimate}
                              hasValue={!!filter}
                              disabled={disabled}
                              required={required}>
                <LocalAutoComplete {...restProps}
                                   ref="localAutoComplete"
                                   popupClassName={autoCompleteClassName}
                                   theme={theme}
                                   value={value}
                                   disabled={disabled}
                                   onFilterChange={this.triggerFilterChangeHandler}
                                   onChange={this.triggerChangeHandler}/>
            </MaterialProvider>
        );

    }
};

MaterialLocalAutoComplete.propTypes = {

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
            onClick: PropTypes.func

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

    minFilterLength: PropTypes.number,

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

    required: PropTypes.bool,

    isLabelAnimate: PropTypes.bool,

    filterInitValue: PropTypes.string,

    popupChildren: PropTypes.any,

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
    onItemClick: PropTypes.func,

    /**
     * Callback function fired when LocalAutoComplete get focus.
     */
    onFocus: PropTypes.func,

    /**
     * Callback function fired when LocalAutoComplete lose focus.
     */
    onBlur: PropTypes.func,

    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func

};

MaterialLocalAutoComplete.defaultProps = {

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
    minFilterLength: 1,
    iconCls: '',
    rightIconCls: 'fas fa-search',
    noMatchedPopupVisible: true,
    noMatchedMsg: '',
    isGrouped: false,
    required: false,
    filterInitValue: ''

};

export default MaterialLocalAutoComplete;