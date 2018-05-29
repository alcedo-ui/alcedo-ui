/**
 * @file AutoCompleteFilter component
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

import Util from '../_vendors/Util';
import DropdownCalculation from '../_vendors/DropdownCalculation';

class AutoCompleteFilter extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.triggerEl = null;

        this.state = {
            value: props.value,
            filter: props.filterInitValue,
            popupVisible: false,
            isAbove: false
        };

    }

    filterData = (filter = this.state.filter, data = this.props.data) => {

        if (!filter) {
            return data;
        }

        const {valueField, displayField, renderer, filterCallback} = this.props;

        if (filterCallback) {
            return filterCallback(filter, data);
        }

        return data.filter(item => {

            if (!item) {
                return false;
            }

            if (renderer) {
                return renderer(item).toString().toUpperCase().includes(filter.toUpperCase());
            }

            if (typeof item === 'object') {

                const itemDisplay = Util.getTextByDisplayField(item, displayField, valueField);

                if (itemDisplay) {
                    return itemDisplay.toString().toUpperCase().includes(filter.toUpperCase());
                }

            }

            return item.toString().toUpperCase().includes(filter.toUpperCase());

        });

    };

    filterFocusHandler = (...args) => {

        const {disabled, onFocus} = this.props,
            {filter} = this.state;

        onFocus && onFocus(...args);

        !disabled && filter && this.setState({
            popupVisible: true
        });

    };

    filterBlurHandler = (...args) => {
        const {disabled, onBlur} = this.props;
        !disabled && onBlur && onBlur(...args);
    };

    filterPressEnterHandler = (e, filter) => {

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

    filterChangeHandler = filter => {

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

    };

    closePopup = () => {
        this.setState({
            popupVisible: false
        }, () => {
            const {onPopupClosed} = this.props;
            onPopupClosed && onPopupClosed();
        });
    };

    popupRenderHandler = popupEl => {

        const isAbove = DropdownCalculation.isAbove(this.localAutoCompleteEl, this.triggerEl, findDOMNode(popupEl));

        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

    };

    changeHandler = value => {

        const {autoClose, valueField, displayField, renderer} = this.props,
            state = {
                value,
                filter: renderer ? renderer(value) : Util.getTextByDisplayField(value, displayField, valueField)
            };

        if (autoClose) {
            state.popupVisible = false;
        }

        this.setState(state, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    };

    componentDidMount() {
        this.localAutoCompleteEl = this.refs.localAutoComplete;
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
                className, popupClassName, style, popupStyle, theme, popupTheme, name, placeholder,
                disabled, iconCls, rightIconCls, valueField, displayField, descriptionField,
                noMatchedPopupVisible, noMatchedMsg, popupChildren, renderer,
                useDynamicRenderList, listHeight, itemHeight, scrollBuffer,
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

            wrapperClassName = classNames('auto-complete-filter', {
                [className]: className
            }),
            triggerClassName = classNames('auto-complete-filter-trigger',
                isEmpty && !noMatchedPopupVisible ? '' : (popupVisible ? ' activated' : ''),
                isAbove ? ' above' : ' blow'),
            autoCompletePopupClassName = classNames('auto-complete-filter-popup',
                isAbove ? ' above' : ' blow', {
                    [popupClassName]: popupClassName
                }),
            autoCompletePopupStyle = Object.assign({
                width: this.triggerEl && getComputedStyle(this.triggerEl).width
            }, popupStyle);

        return (
            <div ref="localAutoComplete"
                 className={wrapperClassName}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={Util.getValueByValueField(value, valueField, displayField)}/>
                        :
                        null
                }

                <TextField ref="trigger"
                           className={triggerClassName}
                           theme={theme}
                           value={filter}
                           placeholder={placeholder}
                           disabled={disabled}
                           iconCls={iconCls}
                           rightIconCls={rightIconCls}
                           onFocus={this.filterFocusHandler}
                           onBlur={this.filterBlurHandler}
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
                                    <List className="auto-complete-filter-list"
                                          theme={popupTheme}
                                          data={emptyEl}/>
                                    :
                                    (
                                        useDynamicRenderList ?
                                            <DynamicRenderList className="auto-complete-filter-list"
                                                               theme={popupTheme}
                                                               value={value}
                                                               data={listData}
                                                               valueField={valueField}
                                                               displayField={displayField}
                                                               descriptionField={descriptionField}
                                                               renderer={renderer}
                                                               listHeight={listHeight}
                                                               itemHeight={itemHeight}
                                                               scrollBuffer={scrollBuffer}
                                                               onItemTouchTap={onItemTouchTap}
                                                               onChange={this.changeHandler}/>
                                            :
                                            <List className="auto-complete-filter-list"
                                                  theme={popupTheme}
                                                  value={value}
                                                  data={listData}
                                                  valueField={valueField}
                                                  displayField={displayField}
                                                  descriptionField={descriptionField}
                                                  renderer={renderer}
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

AutoCompleteFilter.propTypes = {

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
     * The name of the auto complete.
     */
    name: PropTypes.string,

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

    filterInitValue: PropTypes.string,

    useDynamicRenderList: PropTypes.bool,
    listHeight: PropTypes.number,
    itemHeight: PropTypes.number,
    scrollBuffer: PropTypes.number,

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
     * Callback function fired when AutoCompleteFilter get focus.
     */
    onFocus: PropTypes.func,

    /**
     * Callback function fired when AutoCompleteFilter lose focus.
     */
    onBlur: PropTypes.func,

    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    onPopupClosed: PropTypes.func

};

AutoCompleteFilter.defaultProps = {

    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    data: [],
    disabled: false,
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    autoClose: false,
    iconCls: null,
    rightIconCls: 'fas fa-search',
    noMatchedPopupVisible: true,
    filterInitValue: '',
    useDynamicRenderList: false

};

export default AutoCompleteFilter;