/**
 * @file DraggableList component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import isArray from 'lodash/isArray';
import classNames from 'classnames';

import DraggableListItem from '../_DraggableListItem';
import Tip from '../Tip';
import Theme from '../Theme';

import LIST_SEPARATOR from '../_statics/ListSeparator';
import SelectMode from '../_statics/SelectMode';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import Calculation from '../_vendors/Calculation';

class DraggableList extends Component {

    static SelectMode = SelectMode;
    static LIST_SEPARATOR = LIST_SEPARATOR;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            data: props.data,
            value: Calculation.getInitValue(props)
        };

        this.listItemSelectHandler = ::this.listItemSelectHandler;
        this.listItemDeselectHandler = ::this.listItemDeselectHandler;
        this.onItemDragEnd = ::this.onItemDragEnd;
        this.renderListItem = ::this.renderListItem;

    }

    listItemSelectHandler(item, index) {

        const {selectMode} = this.props;

        let {value} = this.state;

        if (selectMode === SelectMode.MULTI_SELECT) {

            if (!value || !isArray(value)) {
                value = [];
            }

            value.push(item);

        } else if (selectMode === SelectMode.SINGLE_SELECT) {
            value = item;
        }

        this.setState({
            value
        }, () => {
            const {onItemSelect, onChange} = this.props;
            onItemSelect && onItemSelect(item, index);
            onChange && onChange(value, index);
        });

    }

    listItemDeselectHandler(item, index) {

        const {selectMode} = this.props;

        if (selectMode !== SelectMode.MULTI_SELECT) {
            return;
        }

        const {valueField, displayField} = this.props;
        let {value} = this.state;

        if (!value || !isArray(value)) {
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
            const {onItemDeselect, onChange} = this.props;
            onItemDeselect && onItemDeselect(item, index);
            onChange && onChange(value, index);
        });

    }

    onItemDragEnd(result) {

        /**
         *  result: {
         *      draggableId,
         *      type,
         *      source: {
         *          droppableId,
         *          index
         *      },
         *      destination: {
         *          droppableId,
         *          index
         *      }
         *  }
         */

        if (!result || !('draggableId' in result)
            || !result.source || !('index' in result.source)
            || !result.destination || !('index' in result.destination)) {
            return;
        }

        const {data} = this.state;

        Util.reorder(data, result.source.index, result.destination.index);

        this.setState({
            data
        }, () => {
            const {onItemDragEnd, onSequenceChange} = this.props;
            onItemDragEnd && onItemDragEnd(result);
            onSequenceChange && onSequenceChange(data);
        });

    }

    componentWillReceiveProps(nextProps) {

        let state;

        if (nextProps.data !== this.state.data) {
            state = state ? state : {};
            state.data = nextProps.data;
        }
        if (nextProps.value !== this.state.value) {
            state = state ? state : {};
            state.value = Calculation.getInitValue(nextProps);
        }

        if (state) {
            this.setState(state);
        }

    }

    renderListItem(item, index) {

        if (!item) {
            return;
        }

        const {

                theme, itemHeight, idField, valueField, displayField, descriptionField, disabled, isLoading, renderer,

                selectTheme, selectMode, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                onItemClick

            } = this.props,
            {value} = this.state,
            self = this,

            props = {
                index,
                style: {height: itemHeight},
                theme: item.theme || theme,
                selectTheme: item.selectTheme || selectTheme,
                radioUncheckedIconCls: item.radioUncheckedIconCls || radioUncheckedIconCls,
                radioCheckedIconCls: item.radioCheckedIconCls || radioCheckedIconCls,
                checkboxUncheckedIconCls: item.checkboxUncheckedIconCls || checkboxUncheckedIconCls,
                checkboxCheckedIconCls: item.checkboxCheckedIconCls || checkboxCheckedIconCls,
                checkboxIndeterminateIconCls: item.checkboxIndeterminateIconCls || checkboxIndeterminateIconCls,
                checked: Calculation.isItemChecked(item, value, self.props),
                selectMode,
                renderer,
                onSelect() {
                    self.listItemSelectHandler(item, index);
                },
                onDeselect() {
                    self.listItemDeselectHandler(item, index);
                }
            };

        return typeof item === 'object' ?
            <DraggableListItem {...item}
                               {...props}
                               key={item[idField] || index}
                               data={item}
                               value={Util.getValueByValueField(item, valueField, displayField)}
                               text={Util.getTextByDisplayField(item, displayField, valueField)}
                               desc={item[descriptionField] || null}
                               disabled={disabled || item.disabled}
                               isLoading={isLoading || item.isLoading}
                               onClick={e => {
                                   onItemClick && onItemClick(item, index, e);
                                   item.onClick && item.onClick(e);
                               }}/>
            :
            <DraggableListItem {...props}
                               key={index}
                               data={item}
                               value={item}
                               text={item}
                               disabled={disabled}
                               isLoading={isLoading}
                               onClick={e => {
                                   onItemClick && onItemClick(item, index, e);
                               }}/>;

    }

    render() {

        const {children, className, style, disabled, onNodeDragStart} = this.props,
            {data} = this.state,

            listClassName = classNames('draggable-list', {
                [className]: className
            });

        return (
            <DragDropContext onDragStart={onNodeDragStart}
                             onDragEnd={this.onItemDragEnd}>

                <div className={listClassName}
                     disabled={disabled}
                     style={style}
                     onWheel={e => Event.wheelHandler(e, this.props)}>

                    <Droppable droppableId="droppable">
                        {
                            dropProvided => (
                                <div ref={dropProvided.innerRef}
                                     className="draggable-list-items">

                                    {
                                        data && data.map((item, index) => item === LIST_SEPARATOR ?
                                            <div key={index}
                                                 className="draggable-list-separator"></div>
                                            :
                                            this.renderListItem(item, index))
                                    }

                                    {dropProvided.placeholder}

                                </div>
                            )
                        }
                    </Droppable>

                    {children}

                </div>

            </DragDropContext>
        );
    }
}

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
     * The mode of listItem.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * Children passed into the ListItem.
     */
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

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
        onClick: PropTypes.func

    }), PropTypes.string, PropTypes.number, PropTypes.symbol])),

    value: PropTypes.any,

    /**
     * The id field name in data. (default: "id")
     */
    idField: PropTypes.string,

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
     * Callback function fired when the list-item touch tap.
     */
    onItemClick: PropTypes.func,

    /**
     * Callback function fired when the list-item select.
     */
    onItemSelect: PropTypes.func,

    /**
     * Callback function fired when the list-item deselect.
     */
    onItemDeselect: PropTypes.func,

    /**
     * Callback function fired when the list changed.
     */
    onChange: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func,

    onNodeDragStart: PropTypes.func,
    onItemDragEnd: PropTypes.func,

    onSequenceChange: PropTypes.func

};

DraggableList.defaultProps = {

    theme: Theme.DEFAULT,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    shouldPreventContainerScroll: true,

    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square'

};

export default DraggableList;