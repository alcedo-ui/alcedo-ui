/**
 * @file DropdownFilter component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import DynamicRenderList from '../DynamicRenderList';

import Theme from '../Theme';
import SelectMode from '../_statics/SelectMode';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import DropdownCalculation from '../_vendors/DropdownCalculation';
import ComponentUtil from '../_vendors/ComponentUtil';

class DropdownFilter extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.dropdownFilter = createRef();
        this.dropdownFilterEl = null;
        this.trigger = createRef();
        this.triggerEl = null;

        this.state = {
            value: props.value,
            filter: '',
            popupVisible: false,
            isAbove: false
        };

    }

    filterData = (filter = this.state.filter, data = this.props.data) => {

        if (!filter) {
            return data;
        }

        const {displayField, filterCallback} = this.props;

        if (filterCallback) {
            return filterCallback(filter, data);
        }

        const filterFunc = originData => originData.filter(item => typeof item === 'object' && !!item[displayField] ?
            item[displayField].toString().toUpperCase().includes(filter.toUpperCase())
            :
            item.toString().toUpperCase().includes(filter.toUpperCase()));

        return filterFunc(data);

    };

    handleTriggerFocus = (...args) => {

        const {disabled, onFocus} = this.props,
            {filter} = this.state;

        onFocus && onFocus(...args);

        !disabled && filter && this.setState({
            popupVisible: true
        });

    };

    handleTriggerBlur = (...args) => {
        const {disabled, onBlur} = this.props;
        !disabled && onBlur && onBlur(...args);
    };

    handleFilterChange = filter => {

        const state = {
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

    };

    handleFilterPressEnter = (e, filter) => {

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

    };

    closePopup = () => {
        this.setState({
            popupVisible: false
        }, () => {
            const {onPopupClosed} = this.props;
            onPopupClosed && onPopupClosed();
        });
    };

    handlePopupRender = popupEl => {

        const isAbove = DropdownCalculation.isAbove(this.dropdownFilterEl, this.triggerEl, findDOMNode(popupEl));

        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

    };

    handleChange = value => {

        const state = {value};

        if (this.props.autoClose) {
            state.popupVisible = false;
        }

        this.setState(state, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    };

    componentDidMount() {
        this.dropdownFilterEl = this.dropdownFilter && this.dropdownFilter.current;
        this.triggerEl = this.trigger && this.trigger.current && findDOMNode(this.trigger.current);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {

                className, popupClassName, style, popupStyle, theme, popupTheme, placeholder, selectMode,
                disabled, iconCls, rightIconCls, valueField, displayField, descriptionField, position,
                useDynamicRenderList, listHeight, itemHeight, scrollBuffer,
                noMatchedPopupVisible, noMatchedMsg, popupChildren, renderer, parentEl,

                radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                onItemClick, onFilterClear, onMouseOver, onMouseOut

            } = this.props,
            {isAbove, value, filter, popupVisible} = this.state,

            isAboveFinally = position === Position.TOP || position === Position.TOP_LEFT
                || position === Position.TOP_RIGHT || (!position && isAbove),

            listData = this.filterData(),
            isEmpty = listData.length < 1;

        return (
            <div ref={this.dropdownFilter}
                 className={classNames('dropdown-filter', {
                     [className]: className
                 })}
                 style={style}>

                <TextField ref={this.trigger}
                           className={classNames('dropdown-filter-trigger',
                               isEmpty && !noMatchedPopupVisible ? '' : (popupVisible ? 'activated' : ''),
                               isAboveFinally ? 'above' : 'blow')}
                           theme={theme}
                           value={filter}
                           placeholder={placeholder}
                           disabled={disabled}
                           iconCls={iconCls}
                           rightIconCls={rightIconCls}
                           onFocus={this.handleTriggerFocus}
                           onBlur={this.handleTriggerBlur}
                           onMouseOver={onMouseOver}
                           onMouseOut={onMouseOut}
                           onChange={this.handleFilterChange}
                           onPressEnter={this.handleFilterPressEnter}
                           onClear={onFilterClear}
                           onRightIconClick={this.handleFilterPressEnter}/>

                {
                    isEmpty && !noMatchedPopupVisible ?
                        null
                        :
                        <Popup className={classNames('dropdown-filter-popup', isAboveFinally ? ' above' : ' blow', {
                            [popupClassName]: popupClassName
                        })}
                               style={Object.assign({
                                   width: this.triggerEl && getComputedStyle(this.triggerEl).width
                               }, popupStyle)}
                               theme={popupTheme}
                               visible={popupVisible}
                               triggerEl={this.triggerEl}
                               parentEl={parentEl}
                               hasTriangle={false}
                               position={position ? position : (isAbove ? Position.TOP_LEFT : Position.BOTTOM_LEFT)}
                               onRender={this.handlePopupRender}
                               onRequestClose={this.closePopup}>

                            {
                                isEmpty ?
                                    <List className="dropdown-filter-list"
                                          theme={popupTheme}
                                          selectMode={SelectMode.SINGLE_SELECT}
                                          data={[{
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
                                          }]}/>
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
                                                               onItemClick={onItemClick}
                                                               onChange={this.handleChange}/>
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
                                                  onItemClick={onItemClick}
                                                  onChange={this.handleChange}/>
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

    position: PropTypes.oneOf(Util.enumerateValue(Position)),

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
            onClick: PropTypes.func

        }), PropTypes.string, PropTypes.number])),

        // grouped
        PropTypes.array

    ]).isRequired,

    value: PropTypes.any,

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
    parentEl: PropTypes.object,

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
    onItemClick: PropTypes.func,

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
