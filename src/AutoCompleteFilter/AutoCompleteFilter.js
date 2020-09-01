/**
 * @file AutoCompleteFilter component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import DynamicRenderList from '../DynamicRenderList';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// Vendors
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';
import Util from '../_vendors/Util';
import DropdownCalculation from '../_vendors/DropdownCalculation';
import Valid from '../_vendors/Valid';
import ComponentUtil from '../_vendors/ComponentUtil';

class AutoCompleteFilter extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapper = createRef();
        this.wrapperEl = null;
        this.trigger = createRef();
        this.triggerEl = null;
        this.pop = createRef();
        this.dynamicRenderList = createRef();
        this.list = createRef();

        this.state = {
            tempSelectIndex: null,
            value: props.value,
            filter: props.filterInitValue,
            popupVisible: false,
            isAbove: false,
            listData: props.data
        };

    }

    filterData = (filter = this.state.filter, data = this.props.data) => {

        const {minFilterLength} = this.props;

        if (!filter || filter.length < minFilterLength) {
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

    handleFilterFocus = (...args) => {

        if (this.props.disabled) {
            return;
        }

        const {onFocus} = this.props,
            {filter} = this.state,
            state = {
                filterFocused: true,
                tempSelectIndex: null
            };

        onFocus && onFocus(...args);

        if (filter) {
            state.popupVisible = true;
        }

        this.setState(state);

    };

    handleFilterBlur = (...args) => {
        const {disabled, onBlur} = this.props;
        !disabled && onBlur && onBlur(...args);
    };

    handleFilterKeyDown = e => {

        const {useDynamicRenderList} = this.props,
            {tempSelectIndex, listData} = this.state,
            listEl = useDynamicRenderList ?
                this.dynamicRenderList && this.dynamicRenderList.current
                :
                this.list && this.list.current;
        let state = null;

        if (e.keyCode === 38 || e.keyCode === 40) {

            state = {};

            let index = !isNaN(tempSelectIndex) && tempSelectIndex > -1 ? tempSelectIndex : -1;

            if (e.keyCode === 38) { // up
                index--;
            } else if (e.keyCode === 40) { // down
                index++;
            }

            state.tempSelectIndex = Valid.range(index, 0, listData.length - 1);

        }

        this.setState(state, () => {

            const {onFilterKeyDown} = this.props;
            onFilterKeyDown && onFilterKeyDown(e);

            listEl && listEl.adjustScroll();

        });

    };

    handleFilterPressEnter = (e, filter) => {

        const {autoClose} = this.props,
            state = {};

        if (autoClose) {
            state.popupVisible = false;
        }

        this.setState(state, () => {

            const {onFilterPressEnter} = this.props;
            onFilterPressEnter && onFilterPressEnter(filter);

            this.update();

        });

    };

    handleFilterChange = filter => {

        const {data, minFilterLength} = this.props,
            state = {
                filter,
                popupVisible: !!filter && filter.length >= minFilterLength,
                tempSelectIndex: null
            };

        if (!filter) {
            state.listData = data;
            state.value = null;
        } else {
            state.listData = this.filterData(filter);
        }

        this.setState(state, () => {

            const {onFilterChange} = this.props;
            onFilterChange && onFilterChange(filter);

            this.pop && this.pop.current && this.pop.current.resetPosition();

        });

    };

    closePop = () => {
        this.setState({
            popupVisible: false
        }, () => {
            const {onPopupClosed} = this.props;
            onPopupClosed && onPopupClosed();
        });
    };

    handlePopupRender = pop => {
        const isAbove = DropdownCalculation.isAbove(this.wrapperEl, this.triggerEl, findDOMNode(pop));
        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }
    };

    handleItemClick = value => {

        const {autoClose, valueField, displayField, renderer} = this.props,
            filter = renderer ? renderer(value) : Util.getTextByDisplayField(value, displayField, valueField),
            state = {
                tempSelectIndex: null,
                value,
                filter,
                listData: this.filterData(filter)
            },
            isChanged = this.state.value != value;

        if (autoClose) {
            state.popupVisible = false;
        }

        this.setState(state, () => {
            const {onItemClick, onChange} = this.props;
            onItemClick && onItemClick(value);
            isChanged && onChange && onChange(value);
        });

    };

    update = () => {

        const {displayField, valueField, renderer} = this.props,
            {filter, tempSelectIndex, listData} = this.state;
        let state = null;

        if (filter && listData && listData.length > 0) {

            state = {};

            const index = !isNaN(tempSelectIndex) && tempSelectIndex > -1 ? tempSelectIndex : -1;

            state.value = index > -1 ? listData[index] : null;

            if (index > -1) {
                state.filter = renderer ?
                    renderer(state.value)
                    :
                    Util.getTextByDisplayField(state.value, displayField, valueField);
            }

            state.listData = this.filterData(state.filter);

        }

        state && this.setState(state, () => {
            const {onFilterChange, onChange} = this.props;
            onFilterChange && onFilterChange(state.filter);
            onChange && onChange(state.value);
        });

    };

    componentDidMount() {
        this.wrapperEl = this.wrapper && this.wrapper.current;
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
                className, popupClassName, style, popupStyle, theme, popupTheme, name, placeholder,
                disabled, iconCls, rightIconCls, valueField, displayField, descriptionField, position,
                noMatchedPopupVisible, noMatchedMsg, popupChildren, renderer, resetPopPositionWait,
                useDynamicRenderList, listHeight, itemHeight, scrollBuffer,
                onFilterClear, onMouseOver, onMouseOut, parentEl
            } = this.props,
            {isAbove, tempSelectIndex, value, filter, popupVisible, listData} = this.state,

            isAboveFinally = position === Position.TOP || position === Position.TOP_LEFT
                || position === Position.TOP_RIGHT || (!position && isAbove),
            isEmpty = !listData || listData.length < 1;

        return (
            <div ref={this.wrapper}
                 className={classNames('auto-complete-filter', {
                     [className]: className
                 })}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={Util.getValueByValueField(value, valueField, displayField)}/>
                        :
                        null
                }

                <TextField ref={this.trigger}
                           className={classNames('auto-complete-filter-trigger',
                               isEmpty && !noMatchedPopupVisible ? '' : (popupVisible ? ' activated' : ''),
                               isAboveFinally ? ' above' : ' blow')}
                           theme={theme}
                           value={filter}
                           placeholder={placeholder}
                           disabled={disabled}
                           iconCls={iconCls}
                           rightIconCls={rightIconCls}
                           onFocus={this.handleFilterFocus}
                           onBlur={this.handleFilterBlur}
                           onMouseOver={onMouseOver}
                           onMouseOut={onMouseOut}
                           onChange={this.handleFilterChange}
                           onKeyDown={this.handleFilterKeyDown}
                           onPressEnter={this.handleFilterPressEnter}
                           onClear={onFilterClear}
                           onRightIconClick={this.handleFilterPressEnter}/>

                {
                    isEmpty && !noMatchedPopupVisible ?
                        null
                        :
                        <Popup ref={this.pop}
                               className={classNames('auto-complete-filter-popup',
                                   isAboveFinally ? ' above' : ' blow', {
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
                               resetPositionWait={resetPopPositionWait}
                               onRender={this.handlePopupRender}
                               onRequestClose={this.closePop}>

                            {
                                isEmpty ?
                                    <List className="auto-complete-filter-list"
                                          theme={popupTheme}
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
                                            <DynamicRenderList ref={this.dynamicRenderList}
                                                               className="auto-complete-filter-list"
                                                               theme={popupTheme}
                                                               data={listData}
                                                               value={listData[tempSelectIndex]}
                                                               valueField={valueField}
                                                               displayField={displayField}
                                                               descriptionField={descriptionField}
                                                               renderer={renderer}
                                                               listHeight={listHeight}
                                                               itemHeight={itemHeight}
                                                               scrollBuffer={scrollBuffer}
                                                               onItemClick={this.handleItemClick}/>
                                            :
                                            <List ref={this.list}
                                                  className="auto-complete-filter-list"
                                                  theme={popupTheme}
                                                  data={listData}
                                                  value={listData[tempSelectIndex]}
                                                  valueField={valueField}
                                                  displayField={displayField}
                                                  descriptionField={descriptionField}
                                                  renderer={renderer}
                                                  onItemClick={this.handleItemClick}/>
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

    position: PropTypes.oneOf(Util.enumerateValue(Position)),

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

    parentEl: PropTypes.object,
    popupChildren: PropTypes.any,
    filterInitValue: PropTypes.string,
    useDynamicRenderList: PropTypes.bool,
    resetPopPositionWait: PropTypes.number,
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
    onItemClick: PropTypes.func,

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
    onPopupClosed: PropTypes.func,
    onFilterKeyDown: PropTypes.func

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
    minFilterLength: 1,
    iconCls: null,
    rightIconCls: 'fas fa-search',
    noMatchedPopupVisible: true,
    filterInitValue: '',
    useDynamicRenderList: false,
    resetPopPositionWait: 250

};

export default AutoCompleteFilter;
