/**
 * @file DropdownFilter component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import DynamicRenderList from '../DynamicRenderList';
import Theme from '../Theme';

import SelectMode from '../_statics/SelectMode';

import PureRender from '../_vendors/PureRender';
import Util from '../_vendors/Util';
import DropdownCalculation from '../_vendors/DropdownCalculation';

@PureRender
class DropdownFilter extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.triggerEl = null;

        this.state = {
            value: props.value,
            filter: '',
            popupVisible: false,
            isAbove: false
        };

        this.filterData = ::this.filterData;
        this.triggerFocusHandler = ::this.triggerFocusHandler;
        this.triggerBlurHandler = ::this.triggerBlurHandler;
        this.filterChangeHandler = ::this.filterChangeHandler;
        this.filterPressEnterHandler = ::this.filterPressEnterHandler;
        this.closePopup = ::this.closePopup;
        this.popupRenderHandler = ::this.popupRenderHandler;
        this.changeHandler = ::this.changeHandler;

    }

    filterData(filter = this.state.filter, data = this.props.data) {

        if (!filter) {
            return data;
        }

        const {displayField, filterCallback} = this.props;

        if (filterCallback) {
            return filterCallback(filter, data);
        }

        const filterFunc = (originData) => {
            return originData.filter(item => typeof item === 'object' && !!item[displayField] ?
                item[displayField].toString().toUpperCase().includes(filter.toUpperCase())
                :
                item.toString().toUpperCase().includes(filter.toUpperCase()));
        };

        return filterFunc(data);

    }

    triggerFocusHandler(...args) {

        const {disabled, onFocus} = this.props,
            {filter} = this.state;

        onFocus && onFocus(...args);

        !disabled && filter && this.setState({
            popupVisible: true
        });

    }

    triggerBlurHandler(...args) {
        const {disabled, onBlur} = this.props;
        !disabled && onBlur && onBlur(...args);
    }

    filterChangeHandler(filter) {

        const value = this.state.value,
            state = {
                filter,
                popupVisible: !!filter
            };

        if (!filter) {
            state.value = undefined;
        }

        this.setState(state, () => {
            const {onFilterChange} = this.props;
            onFilterChange && onFilterChange(filter);
        });

    }

    filterPressEnterHandler(e, filter) {

        const {autoClose} = this.props,
            callback = () => {
                const {onFilterPressEnter} = this.props;
                onFilterPressEnter && onFilterPressEnter(filter);
            };

        if (autoClose) {
            this.setState({
                popupVisible: false
            }, () => {
                callback();
            });
        } else {
            callback();
        }

    }

    closePopup() {
        this.setState({
            popupVisible: false
        }, () => {
            const {onPopupClosed} = this.props;
            onPopupClosed && onPopupClosed();
        });
    }

    popupRenderHandler(popupEl) {

        const isAbove = DropdownCalculation.isAbove(this.dropdownFilterEl, this.triggerEl, findDOMNode(popupEl));

        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

    }

    changeHandler(value) {

        const state = {value};

        if (this.props.autoClose) {
            state.popupVisible = false;
        }

        this.setState(state, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    }

    componentDidMount() {
        this.dropdownFilterEl = this.refs.dropdownFilter;
        this.triggerEl = findDOMNode(this.refs.trigger);
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

                className, popupClassName, style, popupStyle, theme, popupTheme, placeholder, selectMode,
                disabled, iconCls, rightIconCls, valueField, displayField, descriptionField,
                useDynamicRenderList, listHeight, itemHeight, scrollBuffer,
                noMatchedPopupVisible, noMatchedMsg, popupChildren, renderer,

                radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                onItemTouchTap, onFilterClear, onMouseOver, onMouseOut

            } = this.props,
            {isAbove, value, filter, popupVisible} = this.state,

            emptyEl = [{
                itemRenderer() {
                    return (
                        <div className="no-matched-list-item">

                            {
                                noMatchedMsg ?
                                    noMatchedMsg
                                    :
                                    <span>
                                        <i className="fas fa-exclamation-triangle no-matched-list-item-icon"></i>
                                        No matched value.
                                    </span>
                            }

                        </div>
                    );
                },
                disableTouchRipple: true
            }],

            listData = this.filterData(),
            isEmpty = listData.length < 1,

            wrapperClassName = classNames('dropdown-filter', {
                [className]: className
            }),
            triggerClassName = classNames('dropdown-filter-trigger',
                isEmpty && !noMatchedPopupVisible ? '' : (popupVisible ? 'activated' : ''),
                isAbove ? 'above' : 'blow'),
            autoCompletePopupClassName = classNames('dropdown-filter-popup', isAbove ? ' above' : ' blow', {
                [popupClassName]: popupClassName
            }),
            autoCompletePopupStyle = Object.assign({
                width: this.triggerEl && getComputedStyle(this.triggerEl).width
            }, popupStyle);

        return (
            <div ref="dropdownFilter"
                 className={wrapperClassName}
                 style={style}>

                <TextField ref="trigger"
                           className={triggerClassName}
                           theme={theme}
                           value={filter}
                           placeholder={placeholder}
                           disabled={disabled}
                           iconCls={iconCls}
                           rightIconCls={rightIconCls}
                           onFocus={this.triggerFocusHandler}
                           onBlur={this.triggerBlurHandler}
                           onMouseOver={onMouseOver}
                           onMouseOut={onMouseOut}
                           onChange={this.filterChangeHandler}
                           onPressEnter={this.filterPressEnterHandler}
                           onClear={onFilterClear}
                           onRightIconTouchTap={this.filterPressEnterHandler}/>

                {
                    isEmpty && !noMatchedPopupVisible ?
                        null
                        :
                        <Popup className={autoCompletePopupClassName}
                               style={autoCompletePopupStyle}
                               theme={popupTheme}
                               visible={popupVisible}
                               triggerEl={this.triggerEl}
                               hasTriangle={false}
                               position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                               onRender={this.popupRenderHandler}
                               onRequestClose={this.closePopup}>

                            {
                                isEmpty ?
                                    <List className="dropdown-filter-list"
                                          theme={popupTheme}
                                          selectMode={SelectMode.SINGLE_SELECT}
                                          data={emptyEl}/>
                                    :
                                    (
                                        useDynamicRenderList ?
                                            <DynamicRenderList className="dropdown-filter-list"
                                                               theme={popupTheme}
                                                               value={value}
                                                               selectMode={selectMode || SelectMode.SINGLE_SELECT}
                                                               data={listData}
                                                               valueField={valueField}
                                                               displayField={displayField}
                                                               descriptionField={descriptionField}
                                                               renderer={renderer}
                                                               listHeight={listHeight}
                                                               itemHeight={itemHeight}
                                                               scrollBuffer={scrollBuffer}
                                                               radioUncheckedIconCls={radioUncheckedIconCls}
                                                               radioCheckedIconCls={radioCheckedIconCls}
                                                               checkboxUncheckedIconCls={checkboxUncheckedIconCls}
                                                               checkboxCheckedIconCls={checkboxCheckedIconCls}
                                                               checkboxIndeterminateIconCls={checkboxIndeterminateIconCls}
                                                               onItemTouchTap={onItemTouchTap}
                                                               onChange={this.changeHandler}/>
                                            :
                                            <List className="dropdown-filter-list"
                                                  theme={popupTheme}
                                                  value={value}
                                                  selectMode={selectMode || SelectMode.SINGLE_SELECT}
                                                  data={listData}
                                                  valueField={valueField}
                                                  displayField={displayField}
                                                  descriptionField={descriptionField}
                                                  renderer={renderer}
                                                  radioUncheckedIconCls={radioUncheckedIconCls}
                                                  radioCheckedIconCls={radioCheckedIconCls}
                                                  checkboxUncheckedIconCls={checkboxUncheckedIconCls}
                                                  checkboxCheckedIconCls={checkboxCheckedIconCls}
                                                  checkboxIndeterminateIconCls={checkboxIndeterminateIconCls}
                                                  onItemTouchTap={onItemTouchTap}
                                                  onChange={this.changeHandler}/>
                                    )
                            }

                            {popupChildren}

                        </Popup>
                }

            </div>
        );
    }

}

DropdownFilter.propTypes = {

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
     * The theme.
     */
    popupTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The placeholder of the field.
     */
    placeholder: PropTypes.string,

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

    popupChildren: PropTypes.any,

    useDynamicRenderList: PropTypes.bool,
    listHeight: PropTypes.number,
    itemHeight: PropTypes.number,
    scrollBuffer: PropTypes.number,

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
    onMouseOut: PropTypes.func,
    onPopupClosed: PropTypes.func

};

DropdownFilter.defaultProps = {

    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    data: [],
    disabled: false,
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    autoClose: false,
    selectMode: SelectMode.SINGLE_SELECT,
    rightIconCls: 'fas fa-search',
    noMatchedPopupVisible: true,

    useDynamicRenderList: false,

    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square'

};

export default DropdownFilter;