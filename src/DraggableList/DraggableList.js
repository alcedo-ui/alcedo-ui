/**
 * @file DraggableList component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withScrolling, {createVerticalStrength} from 'react-dnd-scrollzone';
import _ from 'lodash';

import DraggableListGroup from '../_DraggableListGroup';
import DraggableListItem from '../_DraggableListItem';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import Calculation from '../_vendors/Calculation';
import SelectMode from '../_statics/SelectMode';
import LIST_SEPARATOR from '../_statics/ListSeparator';

const ScrollingComponent = withScrolling('div');

export default class DraggableList extends Component {

    static SelectMode = SelectMode;
    static LIST_SEPARATOR = LIST_SEPARATOR;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            items: props.items,
            value: Calculation.getInitValue(props)
        };

        this.isItemChecked = ::this.isItemChecked;
        this.listGroupedItemsRenderer = ::this.listGroupedItemsRenderer;
        this.listItemsRenderer = ::this.listItemsRenderer;
        this.listGroupMoveHandler = ::this.listGroupMoveHandler;
        this.listItemMoveHandler = ::this.listItemMoveHandler;
        this.listItemTouchTapHandler = ::this.listItemTouchTapHandler;
        this.listItemSelectHandler = ::this.listItemSelectHandler;
        this.listItemDeselectHandler = ::this.listItemDeselectHandler;

    }

    isItemChecked(item) {

        const {selectMode, valueField, displayField} = this.props,
            {value} = this.state;

        if (!item || !value) {
            return false;
        }

        if (selectMode === SelectMode.MULTI_SELECT) {
            return _.isArray(value) && value.filter(valueItem => {
                return Util.isValueEqual(valueItem, item, valueField, displayField);
            }).length > 0;
        } else if (selectMode === SelectMode.SINGLE_SELECT) {
            return Util.isValueEqual(value, item, valueField, displayField);
        }

    }

    listGroupedItemsRenderer(items = this.props.items) {

        const {anchorIconCls, isDraggableAnyWhere} = this.props;

        return _.isArray(items) ?
            items.map((group, groupIndex) => {

                if (group === LIST_SEPARATOR) {
                    return <div key={`group${groupIndex}`}
                                className="draggable-list-separator"></div>;
                }

                if (group && group.name) {
                    return (
                        <DraggableListGroup key={group.id || group.name}
                                            index={groupIndex}
                                            text={group.name}
                                            anchorIconCls={anchorIconCls}
                                            isDraggableAnyWhere={isDraggableAnyWhere}
                                            onMove={this.listGroupMoveHandler}>
                            {
                                group.children && group.children.length > 0 ?
                                    this.listItemsRenderer(group.children, groupIndex)
                                    :
                                    null
                            }
                        </DraggableListGroup>
                    );
                }

                return;

            })
            :
            null;

    }

    listItemsRenderer(items = this.state.items, groupIndex) {

        const {

                valueField, displayField, descriptionField, disabled, isLoading, anchorIconCls, isDraggableAnyWhere,

                selectTheme, selectMode, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                renderer

            } = this.props,
            {value} = this.state;

        return _.isArray(items) && items.length > 0 ?
            (
                items.map((item, index) => {

                    if (!item) {
                        return null;
                    }

                    if (item === LIST_SEPARATOR) {
                        return <div key={index}
                                    className="draggable-list-separator"></div>;
                    }

                    const itemValue = typeof item === 'object' ?
                        Util.getValueByValueField(item, valueField, displayField)
                        :
                        item;

                    return typeof item === 'object' ?
                        (
                            <DraggableListItem key={item.id || itemValue}
                                               {...item}
                                               index={index}
                                               selectTheme={selectTheme}
                                               data={item}
                                               value={itemValue}
                                               checked={Calculation.isItemChecked(item, value, this.props)}
                                               text={Util.getTextByDisplayField(item, displayField, valueField)}
                                               desc={item[descriptionField] || null}
                                               disabled={disabled || item.disabled}
                                               isLoading={isLoading || item.isLoading}
                                               groupIndex={groupIndex}
                                               anchorIconCls={anchorIconCls}
                                               isDraggableAnyWhere={isDraggableAnyWhere}
                                               selectMode={selectMode}
                                               radioUncheckedIconCls={item.radioUncheckedIconCls || radioUncheckedIconCls}
                                               radioCheckedIconCls={item.radioCheckedIconCls || radioCheckedIconCls}
                                               checkboxUncheckedIconCls={item.checkboxUncheckedIconCls || checkboxUncheckedIconCls}
                                               checkboxCheckedIconCls={item.checkboxCheckedIconCls || checkboxCheckedIconCls}
                                               checkboxIndeterminateIconCls={item.checkboxIndeterminateIconCls || checkboxIndeterminateIconCls}
                                               renderer={renderer}
                                               onMove={this.listItemMoveHandler}
                                               onTouchTap={(e) => {
                                                   this.listItemTouchTapHandler(item, index);
                                                   item.onTouchTap && item.onTouchTap(e);
                                               }}
                                               onSelect={() => {
                                                   this.listItemSelectHandler(item, index);
                                               }}
                                               onDeselect={() => {
                                                   this.listItemDeselectHandler(item, index);
                                               }}/>
                        )
                        :
                        (
                            <DraggableListItem key={item.id || itemValue}
                                               index={index}
                                               data={item}
                                               selectTheme={selectTheme}
                                               checked={Calculation.isItemChecked(item, value, this.props)}
                                               value={itemValue}
                                               text={item}
                                               disabled={disabled}
                                               isLoading={isLoading}
                                               groupIndex={groupIndex}
                                               anchorIconCls={anchorIconCls}
                                               isDraggableAnyWhere={isDraggableAnyWhere}
                                               selectMode={selectMode}
                                               radioUncheckedIconCls={item.radioUncheckedIconCls || radioUncheckedIconCls}
                                               radioCheckedIconCls={item.radioCheckedIconCls || radioCheckedIconCls}
                                               checkboxUncheckedIconCls={item.checkboxUncheckedIconCls || checkboxUncheckedIconCls}
                                               checkboxCheckedIconCls={item.checkboxCheckedIconCls || checkboxCheckedIconCls}
                                               checkboxIndeterminateIconCls={item.checkboxIndeterminateIconCls || checkboxIndeterminateIconCls}
                                               renderer={renderer}
                                               onMove={this.listItemMoveHandler}
                                               onTouchTap={() => {
                                                   this.listItemTouchTapHandler(item, index);
                                               }}
                                               onSelect={() => {
                                                   this.listItemSelectHandler(item, index);
                                               }}
                                               onDeselect={() => {
                                                   this.listItemDeselectHandler(item, index);
                                               }}/>
                        );

                })
            )
            :
            null;

    }

    listItemTouchTapHandler(value, index) {
        const {onItemTouchTap} = this.props;
        onItemTouchTap && onItemTouchTap(value, index);
    }

    listGroupMoveHandler(dragIndex, hoverIndex) {

        const {items} = this.state,
            dragGroup = items.splice(dragIndex, 1);

        items.splice(hoverIndex, 0, ...dragGroup);

        this.setState({
            items
        }, () => {
            const {onSequenceChange} = this.props;
            onSequenceChange && onSequenceChange(items);
        });

    }

    listItemMoveHandler(dragIndex, hoverIndex, props) {

        const {isGrouped} = this.props;

        if (isGrouped && isNaN(props.groupIndex)) {
            return;
        }

        const {items} = this.state;

        if (isGrouped) {

            const list = items[props.groupIndex].children;

            if (!list || list.length < 1) {
                return;
            }

            const dragItem = list.splice(dragIndex, 1);
            list.splice(hoverIndex, 0, ...dragItem);

        } else {

            const dragItem = items.splice(dragIndex, 1);
            items.splice(hoverIndex, 0, ...dragItem);

        }

        this.setState({
            items
        }, () => {
            const {onSequenceChange} = this.props;
            onSequenceChange && onSequenceChange(items);
        });

    }

    listItemSelectHandler(item, index) {

        const {selectMode} = this.props;

        if (selectMode === SelectMode.NORMAL) {
            return;
        }

        let {value} = this.state;

        if (selectMode === SelectMode.MULTI_SELECT) {

            if (!value || !_.isArray(value)) {
                value = [];
            }

            value.push(item);

        } else if (selectMode === SelectMode.SINGLE_SELECT) {
            value = item;
        }

        this.setState({
            value
        }, () => {
            const {onValueChange} = this.props;
            onValueChange && onValueChange(value, index);
        });

    }

    listItemDeselectHandler(item, index) {

        const {selectMode} = this.props;

        if (selectMode !== SelectMode.MULTI_SELECT) {
            return;
        }

        const {valueField, displayField} = this.props;
        let {value} = this.state;

        if (!value || !_.isArray(value)) {
            value = [];
        } else {
            value = value.filter(valueItem => {
                return Util.getValueByValueField(valueItem, valueField, displayField)
                    != Util.getValueByValueField(item, valueField, displayField);
            });
        }

        this.setState({
            value
        }, () => {
            const {onValueChange} = this.props;
            onValueChange && onValueChange(value, index);
        });

    }

    componentWillReceiveProps(nextProps) {

        let state;

        if (nextProps.items !== this.state.items) {
            state = state ? state : {};
            state.items = nextProps.items;
        }
        if (nextProps.value !== this.state.value) {
            state = state ? state : {};
            state.value = Calculation.getInitValue(nextProps);
        }

        if (state) {
            this.setState(state);
        }

    }

    render() {

        const {children, className, style, disabled, isGrouped, scrollSpeed, scrollBuffer} = this.props,
            listClassName = (isGrouped ? ' grouped' : '') + (className ? ' ' + className : '');

        let renderEl;
        if (isGrouped) {
            renderEl = this.listGroupedItemsRenderer();
        } else {
            renderEl = this.listItemsRenderer();
        }

        return (
            <ScrollingComponent className={'draggable-list' + listClassName}
                                disabled={disabled}
                                style={style}
                                strengthMultiplier={scrollSpeed}
                                verticalStrength={createVerticalStrength(scrollBuffer)}
                                onWheel={e => {
                                    Event.wheelHandler(e, this.props);
                                }}>

                {renderEl}

                {children}

            </ScrollingComponent>
        );
    }
};

DraggableList.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The theme of the list item.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The theme of the list item select radio or checkbox.
     */
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The mode of list item.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * Children passed into the list item.
     */
    items: PropTypes.oneOfType([

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
            theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

            /**
             * The text value of the list button.Type can be string or number.
             */
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

            /**
             * The list item's display text. Type can be string, number or bool.
             */
            text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

            /**
             * The desc value of the list button. Type can be string or number.
             */
            desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

            /**
             * If true,the list item will be disabled.
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
             * The message of tip.
             */
            tip: PropTypes.string,

            /**
             * The position of tip.
             */
            tipPosition: PropTypes.oneOf(Util.enumerateValue(Tip.Position)),

            /**
             * If true,the item will have center displayed ripple effect.
             */
            rippleDisplayCenter: PropTypes.bool,

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
     * If true, the list will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true, the list will be at loading status.
     */
    isLoading: PropTypes.bool,

    /**
     * If true,the listData will be grouped.
     */
    isGrouped: PropTypes.bool,

    anchorIconCls: PropTypes.string,
    isDraggableAnyWhere: PropTypes.bool,

    /**
     * The speed of scroll bar.
     */
    scrollSpeed: PropTypes.number,

    /**
     * The number of overflows.
     */
    scrollBuffer: PropTypes.number,

    shouldPreventContainerScroll: PropTypes.bool,

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
     * Callback function fired when the list-item select.
     */
    onItemTouchTap: PropTypes.func,

    /**
     * Callback function fired when select item sequence changed.
     */
    onSequenceChange: PropTypes.func,

    /**
     * Callback function fired when select item changed.
     */
    onValueChange: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

DraggableList.defaultProps = {

    className: '',
    style: null,
    theme: Theme.DEFAULT,
    selectTheme: Theme.DEFAULT,

    selectMode: SelectMode.NORMAL,

    items: [],

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    isGrouped: false,

    anchorIconCls: 'fa fa-bars',
    isDraggableAnyWhere: false,

    scrollSpeed: 20,
    scrollBuffer: 40,
    shouldPreventContainerScroll: true,

    radioUncheckedIconCls: 'fa fa-check',
    radioCheckedIconCls: 'fa fa-check',
    checkboxUncheckedIconCls: 'fa fa-square-o',
    checkboxCheckedIconCls: 'fa fa-check-square',
    checkboxIndeterminateIconCls: 'fa fa-minus-square'

};