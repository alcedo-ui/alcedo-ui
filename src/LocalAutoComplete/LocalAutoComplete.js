/**
 * @file LocalAutoComplete component
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
import Valid from '../_vendors/Valid';
import DropdownCalculation from '../_vendors/DropdownCalculation';
import Event from '../_vendors/Event';
import Dom from '../_vendors/Dom';
import ComponentUtil from '../_vendors/ComponentUtil';
import Calculation from '../_vendors/Calculation';

class LocalAutoComplete extends Component {

    static Theme = Theme;
    static Position = Position;

    static getDerivedStateFromProps(props, state) {
        const filter = ComponentUtil.getDerivedState(props, state, 'filter');
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value'),
            filter,
            listData: props.onRequestFilterData ?
                props.onRequestFilterData(filter, props)
                :
                Calculation.filterLocalAutoCompleteData(filter, props)
        };
    }

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
            filter: props.filter,
            filterFocused: false,
            popupVisible: false,
            isAbove: false,
            listData: props.onRequestFilterData ?
                props.onRequestFilterData(props.filter, props)
                :
                Calculation.filterLocalAutoCompleteData(props.filter, props)
        };

    }

    componentDidMount() {

        this.wrapperEl = this.wrapper?.current;
        this.triggerEl = findDOMNode(this.trigger?.current);

        Event.addEvent(document, 'mousedown', this.handleMouseDown);

    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.handleMouseDown);
    }

    handleNoMatch = () => {
        const {listData, filter} = this.state;
        if (!listData || listData.length < 1) {
            this.props.onNoMatch?.(filter);
        }
    };

    handleFilterFocus = (...args) => {

        if (this.props.disabled) {
            return;
        }

        const {minFilterLength} = this.props,
            {filter, listData} = this.state,
            state = {
                filterFocused: true
            };

        this.props.onFocus?.(...args);

        if (filter != null && filter.length >= minFilterLength) {
            state.popupVisible = true;
            state.tempSelectIndex = listData.length > 0 ? 0 : null;
        }

        this.setState(state);

    };

    handleFilterBlur = (...args) => {

        this.setState({
            filterFocused: false
        }, () => {
            this.props.onBlur?.(...args);
            this.handleNoMatch();
        });

    };

    handleFilterKeyDown = e => {

        const {useDynamicRenderList} = this.props,
            {tempSelectIndex, listData} = this.state;
        let index = tempSelectIndex;

        if (e.keyCode === 38) { // up
            index--;
        } else if (e.keyCode === 40) { // down
            index++;
        }

        const newTempSelectIndex = Valid.range(index, 0, listData.length - 1);

        this.setState({
            tempSelectIndex: newTempSelectIndex
        }, () => {
            this.props.onFilterKeyDown?.(e);
            (
                useDynamicRenderList ?
                    this.dynamicRenderList?.current
                    :
                    this.list?.current
            )?.adjustScroll();
        });

    };

    handleFilterPressEnter = (e, filter) => {

        const {autoClose} = this.props,
            state = {};

        if (autoClose) {
            state.popupVisible = false;
        }

        this.setState(state, () => {
            this.props.onFilterPressEnter?.(filter);
            this.handleNoMatch();
            this.update();
        });

    };

    handleFilterChange = filter => {

        const {data, minFilterLength, onRequestFilterData} = this.props,
            state = {
                filter,
                popupVisible: filter != null && filter.length >= minFilterLength
            };

        if (!filter) {
            state.listData = data;
            state.tempSelectIndex = null;
        } else {
            state.listData = onRequestFilterData ?
                onRequestFilterData(filter, this.props)
                :
                Calculation.filterLocalAutoCompleteData(filter, this.props);
            state.tempSelectIndex = state.listData.length > 0 ? 0 : null;
        }

        this.setState(state, () => {
            this.props.onFilterChange?.(filter);
            this.pop?.current?.resetPosition?.();
        });

    };

    closePopup = () => {
        this.setState({
            popupVisible: false
        }, () => this.props.onPopupClosed?.());
    };

    popupRenderHandler = popupEl => {

        const isAbove = DropdownCalculation.isAbove(this.wrapperEl, this.triggerEl, findDOMNode(popupEl));

        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

    };

    handleItemClick = value => {

        const {autoClose, onRequestFilterData} = this.props,
            state = {
                tempSelectIndex: null,
                value
            },
            isChanged = this.state.value != value;

        state.filter = this.getFilterRender(value);
        if (state.filter !== this.state.filter) {
            state.listData = onRequestFilterData ?
                onRequestFilterData(state.filter, this.props)
                :
                Calculation.filterLocalAutoCompleteData(state.filter, this.props);
        }

        if (autoClose) {
            state.popupVisible = false;
        }

        this.setState(state, () => {
            this.props.onItemClick?.(value);
            isChanged && this.props.onChange?.(value);
        });

    };

    getFilterRender = value => {

        const {valueField, displayField, filterRenderer, renderer} = this.props;

        if (filterRenderer) {
            if (typeof filterRenderer === 'function') {
                return filterRenderer(value);
            } else {
                return filterRenderer;
            }
        }

        return renderer ?
            renderer(value)
            :
            Util.getTextByDisplayField(value, displayField, valueField);

    };

    update = () => {

        const {valueField, displayField, minFilterLength} = this.props,
            {filter, tempSelectIndex, listData} = this.state,

            index = filter?.length >= minFilterLength ?
                !isNaN(tempSelectIndex) ? tempSelectIndex : 0
                :
                -1,
            state = {
                tempSelectIndex: null
            };

        let value,
            filterChanged = false,
            valueChanged = false;

        if (listData?.length > 0) {

            value = index >= 0 ? listData[index] : null;

            state.filter = this.getFilterRender(value);
            filterChanged = state.filter !== filter;

            if (filterChanged) {
                state.listData = Calculation.filterLocalAutoCompleteData(state.filter, this.props);
            }

            if (Util.getValueByValueField(this.state.value, valueField, displayField)
                !== Util.getValueByValueField(value, valueField, displayField)) {
                valueChanged = true;
                state.value = listData[index];
            }

        }

        this.setState(state, () => {
            if (filterChanged) {
                this.props.onFilterChange?.(state.filter);
            }
            if (valueChanged) {
                this.props.onChange?.(state.value);
            }
        });

    };

    handleMouseDown = e => {
        if (this.state.filterFocused && !Dom.isParent(e.target, this.wrapperEl)
            && this.pop?.current && !Dom.isParent(e.target, findDOMNode(this.pop.current))) {
            this.update();
        }
    };

    render() {

        const {

                className, triggerClassName, popupClassName, style, popupStyle, popupTheme, name, position,
                valueField, displayField, descriptionField, noMatchedPopupVisible, noMatchedMsg, popupChildren,
                filterRenderer, renderer, useDynamicRenderList, listHeight, itemHeight, scrollBuffer,
                resetPopPositionWait, onFilterClear, parentEl,

                // not passing down these props
                data, filter: propsFilter, filterInitValue, minFilterLength, autoClose, filterCallback,
                onFilterPressEnter, onFilterChange, onNoMatch,

                ...restProps

            } = this.props,
            {isAbove, tempSelectIndex, value, filter, popupVisible, listData} = this.state,

            isEmpty = listData?.length < 1,
            isAboveFinally = position === Position.TOP || position === Position.TOP_LEFT
                || position === Position.TOP_RIGHT || (!position && isAbove);

        return (
            <div ref={this.wrapper}
                 className={classNames('local-auto-complete', {
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

                <TextField {...restProps}
                           ref={this.trigger}
                           className={classNames('local-auto-complete-trigger',
                               isEmpty && !noMatchedPopupVisible ? '' : (popupVisible ? ' activated' : ''),
                               isAboveFinally ? ' above' : ' blow', {
                                   [triggerClassName]: triggerClassName
                               })}
                           value={filter}
                           onFocus={this.handleFilterFocus}
                           onClick={this.handleFilterFocus}
                           onBlur={this.handleFilterBlur}
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
                               className={classNames('local-auto-complete-popup', isAboveFinally ? ' above' : ' blow', {
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
                               onRender={this.popupRenderHandler}
                               onRequestClose={this.closePopup}>

                            {
                                isEmpty ?
                                    <List className="local-auto-complete-list"
                                          theme={popupTheme}
                                          data={[{
                                              itemRenderer: () =>
                                                  <div className="no-matched-list-item">
                                                      {
                                                          noMatchedMsg ?
                                                              noMatchedMsg
                                                              :
                                                              <span>
                                                                  <i className="fas fa-exclamation-triangle no-matched-list-item-icon"/>
                                                                  No matched value.
                                                              </span>
                                                      }
                                                  </div>,
                                              disableTouchRipple: true
                                          }]}/>
                                    :
                                    useDynamicRenderList ?
                                        <DynamicRenderList ref={this.dynamicRenderList}
                                                           className="local-auto-complete-list"
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
                                              className="local-auto-complete-list"
                                              theme={popupTheme}
                                              data={listData}
                                              value={listData[tempSelectIndex]}
                                              valueField={valueField}
                                              displayField={displayField}
                                              descriptionField={descriptionField}
                                              renderer={renderer}
                                              onItemClick={this.handleItemClick}/>
                            }

                            {popupChildren}

                        </Popup>
                }

            </div>
        );
    }

}

LocalAutoComplete.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the trigger element.
     */
    triggerClassName: PropTypes.string,

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
     * The title of the auto complete.
     */
    title: PropTypes.string,

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
     * The value of LocalAutoComplete.
     */
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

    popupChildren: PropTypes.any,

    filter: PropTypes.string,

    useDynamicRenderList: PropTypes.bool,
    resetPopPositionWait: PropTypes.number,
    listHeight: PropTypes.number,
    itemHeight: PropTypes.number,
    scrollBuffer: PropTypes.number,
    parentEl: PropTypes.object,
    filterInitValue: PropTypes.string,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    filterRenderer: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),

    onRequestFilterData: PropTypes.func,

    /**
     * The function that trigger when filter key down.
     */
    onFilterKeyDown: PropTypes.func,

    /**
     * The function that trigger when press enter.
     */
    onFilterPressEnter: PropTypes.func,

    /**
     * The function that trigger when filter changes.
     */
    onFilterChange: PropTypes.func,

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
    onMouseOut: PropTypes.func,
    onNoMatch: PropTypes.func,
    onPopupClosed: PropTypes.func

};

LocalAutoComplete.defaultProps = {

    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    data: [],
    disabled: false,
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    autoClose: true,
    minFilterLength: 1,
    rightIconCls: 'fas fa-search',
    noMatchedPopupVisible: true,
    filter: '',
    useDynamicRenderList: false,
    resetPopPositionWait: 250

};

export default LocalAutoComplete;
