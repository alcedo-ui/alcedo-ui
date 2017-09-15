/**
 * @file DraggableGrid component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import withScrolling, {createVerticalStrength, createHorizontalStrength} from 'react-dnd-scrollzone';
import _ from 'lodash';

import DraggableGridGroup from '../_DraggableGridGroup';
import DraggableGridItem from '../_DraggableGridItem';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Valid from '../_vendors/Valid';
import Event from '../_vendors/Event';

const ScrollingComponent = withScrolling('div');

export default class DraggableGrid extends Component {

    static Mode = DraggableGridItem.Mode;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            items: props.items,
            value: this.initValue(props)
        };

        this.initValue = ::this.initValue;
        this.calItemColStyle = ::this.calItemColStyle;
        this.isItemChecked = ::this.isItemChecked;
        this.listGroupedItemsRenderer = ::this.listGroupedItemsRenderer;
        this.listItemsRenderer = ::this.listItemsRenderer;
        this.listGroupMoveHandler = ::this.listGroupMoveHandler;
        this.listItemMoveHandler = ::this.listItemMoveHandler;
        this.listItemTouchTapHandler = ::this.listItemTouchTapHandler;
        this.listItemSelectHandler = ::this.listItemSelectHandler;
        this.listItemDeselectHandler = ::this.listItemDeselectHandler;
        this.resizeHandler = ::this.resizeHandler;
        this.debounceResizeHandler = _.debounce(::this.debounceResizeHandler, 150);
        this.wheelHandler = ::this.wheelHandler;

    }

    initValue(props) {

        if (!props) {
            return;
        }

        const {value, mode} = props;

        if (!mode) {
            return;
        }

        if (value) {
            return value;
        }

        switch (mode) {
            case DraggableGrid.Mode.CHECKBOX:
                return [];
            case DraggableGrid.Mode.RADIO:
                return null;
            default:
                return value;
        }

    }

    calItemColStyle(props = this.props, items = props.items) {

        const {col, isItemsFullWidth} = props,
            colLen = col.length,
            itemsLen = items.length,
            validValue = (value) => {
                return isItemsFullWidth ?
                    Valid.range(value, 1, itemsLen)
                    :
                    Valid.range(value, 1);
            };

        if (!this.gridEl || !col) {
            return col && colLen > 0 ? 100 / validValue(col[0]) : null;
        }

        const gridWidth = this.gridEl.getBoundingClientRect().width;

        for (let i = 1; i < colLen - 1; i += 2) {
            if (gridWidth < col[i] && !isNaN(col[i - 1])) {
                return 100 / validValue(col[i - 1]);
            }
        }

        return !isNaN(col[colLen - 1]) ? 100 / validValue(col[colLen - 1]) : null;

    }

    isItemChecked(item) {

        const {mode, valueField, displayField} = this.props,
            {value} = this.state;

        if (!item || !value) {
            return false;
        }

        if (mode === DraggableGrid.Mode.CHECKBOX) {
            return _.isArray(value) && value.filter(valueItem => {
                return Util.isValueEqual(valueItem, item, valueField, displayField);
            }).length > 0;
        } else if (mode === DraggableGrid.Mode.RADIO) {
            return Util.isValueEqual(value, item, valueField, displayField);
        }

    }

    listGroupedItemsRenderer(items = this.props.items) {

        const {anchorIconCls, isDraggableAnyWhere} = this.props;

        return _.isArray(items) ?
            items.map((group, groupIndex) => {

                if (group && group.name) {
                    return (
                        <DraggableGridGroup key={group.id || group.name}
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
                        </DraggableGridGroup>
                    );
                }

                return;

            })
            :
            null;

    }

    listItemsRenderer(items = this.state.items, groupIndex) {

        const {
                valueField, displayField, descriptionField, disabled, isLoading,
                mode, anchorIconCls, isDraggableAnyWhere,
                renderer
            } = this.props,
            itemColWidth = this.calItemColStyle(this.props, items);

        return _.isArray(items) && items.length > 0 ?
            (
                items.map((item, index) => {

                    if (!item) {
                        return null;
                    }

                    const value = typeof item === 'object' ?
                        Util.getValueByValueField(item, valueField, displayField)
                        :
                        item;

                    return typeof item === 'object' ?
                        (
                            <DraggableGridItem key={item.id || value}
                                               {...item}
                                               index={index}
                                               itemColWidth={itemColWidth}
                                               data={item}
                                               value={value}
                                               checked={this.isItemChecked(item)}
                                               text={Util.getTextByDisplayField(item, displayField, valueField)}
                                               desc={item[descriptionField] || null}
                                               disabled={disabled || item.disabled}
                                               isLoading={isLoading || item.isLoading}
                                               groupIndex={groupIndex}
                                               anchorIconCls={anchorIconCls}
                                               isDraggableAnyWhere={isDraggableAnyWhere}
                                               mode={mode}
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
                            <DraggableGridItem key={item.id || value}
                                               index={index}
                                               itemColWidth={itemColWidth}
                                               data={item}
                                               checked={this.isItemChecked(item)}
                                               value={value}
                                               text={item}
                                               disabled={disabled}
                                               isLoading={isLoading}
                                               groupIndex={groupIndex}
                                               anchorIconCls={anchorIconCls}
                                               isDraggableAnyWhere={isDraggableAnyWhere}
                                               mode={mode}
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

        const {mode} = this.props;

        if (mode === DraggableGrid.Mode.NORMAL) {
            return;
        }

        let {value} = this.state;

        if (mode === DraggableGrid.Mode.CHECKBOX) {

            if (!value || !_.isArray(value)) {
                value = [];
            }

            value.push(item);

        } else if (mode === DraggableGrid.Mode.RADIO) {
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

        const {mode} = this.props;

        if (mode !== DraggableGrid.Mode.CHECKBOX) {
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

    resizeHandler() {
        this.debounceResizeHandler();
    }

    //If you want to make a component rerender without changing its state or props, you should call forceUpdate.
    debounceResizeHandler() {
        this.forceUpdate();
    }

    wheelHandler(e) {
        const {shouldPreventContainerScroll, onWheel} = this.props;
        shouldPreventContainerScroll && Event.preventContainerScroll(e);
        onWheel && onWheel(e);
    }

    componentDidMount() {

        this.gridEl = findDOMNode(this);

        Event.addEvent(window, 'resize', this.resizeHandler);

    }

    componentWillReceiveProps(nextProps) {

        let state;

        if (nextProps.items !== this.state.items) {
            state = state ? state : {};
            state.items = nextProps.items;
        }
        if (nextProps.value !== this.state.value) {
            state = state ? state : {};
            state.value = this.initValue(nextProps);
        }

        if (state) {
            this.setState(state);
        }

    }

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.resizeHandler);
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
            <ScrollingComponent className={'draggable-grid' + listClassName}
                                disabled={disabled}
                                style={style}
                                strengthMultiplier={scrollSpeed}
                                verticalStrength={createVerticalStrength(scrollBuffer)}
                                horizontalStrength={createHorizontalStrength(scrollBuffer)}
                                onWheel={this.wheelHandler}>

                {renderEl}

                {children}

            </ScrollingComponent>
        );
    }
};

DraggableGrid.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Children passed into the _DraggableListItem.
     */
    items: PropTypes.oneOfType([

        // not grouped
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

            /**
             * The CSS class name of the grid button.
             */
            className: PropTypes.string,

            /**
             * Override the styles of the grid button.
             */
            style: PropTypes.object,

            /**
             * The theme of the grid button.
             */
            theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

            /**
             * The text value of the grid button.Type can be string or number.
             */
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

            /**
             * The grid item's display text. Type can be string, number or bool.
             */
            text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

            /**
             * The desc value of the grid button. Type can be string or number.
             */
            desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

            /**
             * If true,the grid item will be disabled.
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
             * Tip text.
             */
            tip: PropTypes.string,

            /**
             * The position of Tip.Can be top,left,right,bottom,top-left,top-right,bottom-left,bottom-right.
             */
            tipPosition: PropTypes.oneOf(Util.enumerateValue(Tip.Position)),

            /**
             * Callback function fired when a grid item touch-tapped.
             */
            onTouchTap: PropTypes.func

        }), PropTypes.string, PropTypes.number])),

        // grouped
        PropTypes.array

    ]).isRequired,

    /**
     *
     */
    col: PropTypes.array,

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
     * If true, the grid will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true, the grid will be at loading status.
     */
    isLoading: PropTypes.bool,

    /**
     * If true,the listData will be grouped.
     */
    isGrouped: PropTypes.bool,

    /**
     * The speed of scroll bar.
     */
    anchorIconCls: PropTypes.string,

    isDraggableAnyWhere: PropTypes.bool,
    isItemsFullWidth: PropTypes.bool,
    scrollSpeed: PropTypes.number,
    scrollBuffer: PropTypes.number,
    shouldPreventContainerScroll: PropTypes.bool,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * Callback function fired when the grid-item touch-tapped.
     */
    onItemTouchTap: PropTypes.func,

    /**
     * Callback function fired when item sequence changed.
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

DraggableGrid.defaultProps = {

    className: '',
    style: null,

    items: [],

    col: [1, 480, 2, 720, 3, 960, 4, 1360, 6],

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    isGrouped: false,

    anchorIconCls: 'fa fa-bars',
    isDraggableAnyWhere: false,

    isItemsFullWidth: false,

    scrollSpeed: 20,
    scrollBuffer: 40,
    shouldPreventContainerScroll: true

};