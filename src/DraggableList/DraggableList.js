import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import _ from 'lodash';

import DraggableListGroup from '../DraggableListGroup';
import DraggableListItem from '../DraggableListItem';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './DraggableList.css';

@DragDropContext(HTML5Backend)
export default class DraggableList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            items: props.items
        };

        this.listGroupedItemsRenderer = this::this.listGroupedItemsRenderer;
        this.listItemsRenderer = this::this.listItemsRenderer;
        this.listGroupMoveHandler = this::this.listGroupMoveHandler;
        this.listItemMoveHandler = this::this.listItemMoveHandler;
        this.listItemTouchTapHandler = this::this.listItemTouchTapHandler;

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

        const {valueField, displayField, descriptionField, disabled, isLoading} = this.props;

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
                                               value={value}
                                               text={Util.getTextByDisplayField(item, displayField, valueField)}
                                               desc={item[descriptionField] || null}
                                               disabled={disabled || item.disabled}
                                               isLoading={isLoading || item.isLoading}
                                               groupIndex={groupIndex}
                                               onMove={this.listItemMoveHandler}
                                               onTouchTap={() => {
                                                   this.listItemTouchTapHandler(item, index);
                                                   item.onTouchTap && item.onTouchTap();
                                               }}/>
                        )
                        :
                        (
                            <DraggableListItem key={item.id || value}
                                               index={index}
                                               value={value}
                                               text={item}
                                               disabled={disabled}
                                               isLoading={isLoading}
                                               groupIndex={groupIndex}
                                               onMove={this.listItemMoveHandler}
                                               onTouchTap={() => {
                                                   this.listItemTouchTapHandler(item, index);
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
            const {onChange} = this.props;
            onChange && onChange(items);
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
            const {onChange} = this.props;
            onChange && onChange(items);
        });

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.items !== this.state.items) {
            this.setState({
                items: nextProps.items
            });
        }
    }

    render() {

        const {children, className, style, disabled, isGrouped} = this.props,
            listClassName = (isGrouped ? ' grouped' : '') + (className ? ' ' + className : '');

        let renderEl;
        if (isGrouped) {
            renderEl = this.listGroupedItemsRenderer();
        } else {
            renderEl = this.listItemsRenderer();
        }

        return (
            <div className={'draggable-list' + listClassName}
                 disabled={disabled}
                 style={style}>

                {renderEl}

                {children}

            </div>
        );
    }
};

DraggableList.Mode = DraggableListItem.Mode;

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
     * Children passed into the DraggableListItem.
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
            renderer: PropTypes.func,

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
     * Callback function fired when the list-item select.
     */
    onItemTouchTap: PropTypes.func,

    /**
     * Callback function fired when the list changed.
     **/
    onChange: PropTypes.func

};

DraggableList.defaultProps = {

    className: '',
    style: null,

    items: [],

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    isGrouped: false

};