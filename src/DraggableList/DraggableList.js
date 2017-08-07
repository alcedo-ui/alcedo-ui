import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withScrolling, {createVerticalStrength} from 'react-dnd-scrollzone';
import _ from 'lodash';

import DraggableListGroup from '../_DraggableListGroup';
import DraggableListItem from '../_DraggableListItem';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './DraggableList.css';

const ScrollingComponent = withScrolling('div');

export default class DraggableList extends Component {

    static Mode = DraggableListItem.Mode;

    constructor(props) {

        super(props);

        this.state = {
            items: props.items,
            value: this.initValue(props)
        };

        this.initValue = this::this.initValue;
        this.isItemChecked = this::this.isItemChecked;
        this.listGroupedItemsRenderer = this::this.listGroupedItemsRenderer;
        this.listItemsRenderer = this::this.listItemsRenderer;
        this.listGroupMoveHandler = this::this.listGroupMoveHandler;
        this.listItemMoveHandler = this::this.listItemMoveHandler;
        this.listItemTouchTapHandler = this::this.listItemTouchTapHandler;
        this.listItemSelectHandle = this::this.listItemSelectHandle;
        this.listItemDeselectHandle = this::this.listItemDeselectHandle;

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
            case DraggableList.Mode.CHECKBOX:
                return [];
            case DraggableList.Mode.RADIO:
                return null;
            default:
                return value;
        }

    }

    isItemChecked(item) {

        const {mode, valueField, displayField} = this.props,
            {value} = this.state;

        if (!item || !value) {
            return false;
        }

        if (mode === DraggableList.Mode.CHECKBOX) {
            return _.isArray(value) && value.filter(valueItem => {
                    return Util.isValueEqual(valueItem, item, valueField, displayField);
                }).length > 0;
        } else if (mode === DraggableList.Mode.RADIO) {
            return Util.isValueEqual(value, item, valueField, displayField);
        }

    }

    listGroupedItemsRenderer(items = this.props.items) {
        return _.isArray(items) ?
            items.map((group, groupIndex) => {

                if (group && group.name) {
                    return (
                        <DraggableListGroup key={group.id || group.name}
                                            index={groupIndex}
                                            text={group.name}
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

        const {valueField, displayField, descriptionField, disabled, isLoading, mode, renderer} = this.props;

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
                            <DraggableListItem key={item.id || value}
                                               {...item}
                                               index={index}
                                               data={item}
                                               value={value}
                                               checked={this.isItemChecked(item)}
                                               text={Util.getTextByDisplayField(item, displayField, valueField)}
                                               desc={item[descriptionField] || null}
                                               disabled={disabled || item.disabled}
                                               isLoading={isLoading || item.isLoading}
                                               groupIndex={groupIndex}
                                               mode={mode}
                                               renderer={renderer}
                                               onMove={this.listItemMoveHandler}
                                               onTouchTap={() => {
                                                   this.listItemTouchTapHandler(item, index);
                                                   item.onTouchTap && item.onTouchTap();
                                               }}
                                               onSelect={() => {
                                                   this.listItemSelectHandle(item, index);
                                               }}
                                               onDeselect={() => {
                                                   this.listItemDeselectHandle(item, index);
                                               }}/>
                        )
                        :
                        (
                            <DraggableListItem key={item.id || value}
                                               index={index}
                                               data={item}
                                               checked={this.isItemChecked(item)}
                                               value={value}
                                               text={item}
                                               disabled={disabled}
                                               isLoading={isLoading}
                                               groupIndex={groupIndex}
                                               mode={mode}
                                               renderer={renderer}
                                               onMove={this.listItemMoveHandler}
                                               onTouchTap={() => {
                                                   this.listItemTouchTapHandler(item, index);
                                               }}
                                               onSelect={() => {
                                                   this.listItemSelectHandle(item, index);
                                               }}
                                               onDeselect={() => {
                                                   this.listItemDeselectHandle(item, index);
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

        console.log(dragIndex, hoverIndex);

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

    listItemSelectHandle(item, index) {

        const {mode} = this.props;

        if (mode === DraggableList.Mode.NORMAL) {
            return;
        }

        let {value} = this.state;

        if (mode === DraggableList.Mode.CHECKBOX) {

            if (!value || !_.isArray(value)) {
                value = [];
            }

            value.push(item);

        } else if (mode === DraggableList.Mode.RADIO) {
            value = item;
        }

        this.setState({
            value
        }, () => {
            const {onValueChange} = this.props;
            onValueChange && onValueChange(value, index);
        });

    }

    listItemDeselectHandle(item, index) {

        const {mode} = this.props;

        if (mode !== DraggableList.Mode.CHECKBOX) {
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
            state.value = this.initValue(nextProps);
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
                                verticalStrength={createVerticalStrength(scrollBuffer)}>

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
     * Children passed into the _DraggableListItem.
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

    /**
     *
     */
    scrollSpeed: PropTypes.number,

    /**
     *
     */
    scrollBuffer: PropTypes.number,

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
    onValueChange: PropTypes.func

};

DraggableList.defaultProps = {

    className: '',
    style: null,

    items: [],

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    isGrouped: false,

    scrollSpeed: 20,
    scrollBuffer: 40

};