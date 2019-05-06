/**
 * @file DraggableTree component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragDropContext} from 'react-beautiful-dnd';
import classNames from 'classnames';
import isArray from 'lodash/isArray';

import DraggableTreeNode from '../_DraggableTreeNode';
import Tip from '../Tip';
import Theme from '../Theme';

import SelectMode from '../_statics/SelectMode';
import VirtualRoot from '../_statics/VirtualRoot';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import Calculation from '../_vendors/Calculation';
import TreeCalculation from '../_vendors/TreeCalculation';
import ComponentUtil from '../_vendors/ComponentUtil';

class DraggableTree extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            data: props.data,
            value: Calculation.getInitValue(props),
            isNodeToggling: false
        };

    }

    addRecursiveValue = (node, value) => {

        if (!node || !value) {
            return;
        }

        if (!Calculation.isItemChecked(node, value, this.props)) {
            value.push(node);
        }

        if (!node.children || node.children.length < 1) {
            return;
        }

        for (let item of node.children) {
            this.addRecursiveValue(item, value);
        }

    };

    removeRecursiveValue = (node, value) => {

        if (!node || !value) {
            return;
        }

        const index = Calculation.getMultiSelectItemIndex(node, value, this.props);
        if (index > -1) {
            value.splice(index, 1);
        }

        if (!node.children || node.children.length < 1) {
            return;
        }

        for (let item of node.children) {
            this.removeRecursiveValue(item, value);
        }

    };

    /**
     * traverse tree data to update value when multi recursive select
     * @param value
     * @returns {Array}
     */
    updateValue = value => {

        const {data, valueField, displayField} = this.props;
        let result = [];

        Util.postOrderTraverse(isArray(data) ? {[VirtualRoot]: true, children: data} : data, node => {
            if (!(VirtualRoot in node)) {
                if (!node.children || node.children.length < 1) {
                    if (value.findIndex(item =>
                        Util.getValueByValueField(item, valueField, displayField)
                        === Util.getValueByValueField(node, valueField, displayField)) > -1) {
                        result.push(node);
                    }
                } else {
                    if (node.children.every(child => result.findIndex(item =>
                        Util.getValueByValueField(item, valueField, displayField)
                        === Util.getValueByValueField(child, valueField, displayField)) > -1)) {
                        result.push(node);
                    }
                }
            }
        });

        return result;

    };

    treeNodeSelectHandler = (node, path, e) => {

        if (!node) {
            return;
        }

        const {selectMode, isSelectRecursive} = this.props;
        let {value} = this.state;

        if (selectMode === SelectMode.MULTI_SELECT) {

            if (!value || !isArray(value)) {
                value = [];
            }

            if (isSelectRecursive) {
                this.addRecursiveValue(node, value);
                value = this.updateValue(value);
            } else {
                value.push(node);
            }

        } else if (selectMode === SelectMode.SINGLE_SELECT) {
            value = node;
        }

        this.setState({
            value
        }, () => {
            const {onNodeSelect, onChange} = this.props;
            onNodeSelect && onNodeSelect(node, path, e);
            onChange && onChange(value, e);
        });

    };

    treeNodeDeselectHandler = (nodeData, path, e) => {

        const {selectMode} = this.props;

        if (selectMode !== SelectMode.MULTI_SELECT) {
            return;
        }

        const {isSelectRecursive} = this.props;
        let {value} = this.state;

        if (!value || !isArray(value)) {
            value = [];
        } else {
            if (isSelectRecursive) {
                this.removeRecursiveValue(node, value);
                value = this.updateValue(value);
            } else {
                const index = Calculation.getMultiSelectItemIndex(node, value, this.props);
                if (index > -1) {
                    value.splice(index, 1);
                }
            }
        }

        this.setState({
            value
        }, () => {
            const {onNodeDeselect, onChange} = this.props;
            onNodeDeselect && onNodeDeselect(node, path, e);
            onChange && onChange(value, e);
        });

    };

    nodeToggleStartHandler = () => {

        const {beforeNodeToggle} = this.props;

        if (beforeNodeToggle && beforeNodeToggle() === false) {
            return;
        }

        this.setState({
            isNodeToggling: true
        });

    };

    nodeToggleEndHandler = () => {
        this.setState({
            isNodeToggling: false
        });
    };

    onNodeDragStart = initial => {
        const {onNodeDragStart} = this.props;
        onNodeDragStart && onNodeDragStart(initial);
    };

    /**
     * @param result [Object]
     *  {
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
    onNodeDragEnd = result => {

        if (!result || !('draggableId' in result)
            || !result.source || !('index' in result.source)
            || !result.destination || !('index' in result.destination)) {
            return;
        }

        const {data} = this.state,
            sourceIndex = result.source.index,
            destinationIndex = result.destination.index;

        TreeCalculation.findNodeById(isArray(data) ? {
            [VirtualRoot]: true,
            children: data
        } : data, result.draggableId, (node, index, parent) => {

            if (!parent.children || !(sourceIndex in parent.children) || !(destinationIndex in parent.children)) {
                return;
            }

            Util.reorder(parent.children, sourceIndex, destinationIndex);

            this.setState({
                data
            }, () => {
                const {onNodeDragEnd, onSequenceChange} = this.props;
                onNodeDragEnd && onNodeDragEnd(result);
                onSequenceChange && onSequenceChange(data);
            });

        });

    };

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            data: ComponentUtil.getDerivedState(props, state, 'data'),
            value: Calculation.getInitValue({
                value: ComponentUtil.getDerivedState(props, state, 'value'),
                selectMode: props.selectMode
            })
        };
    }

    render() {

        const {
                children, className, style, theme, allowCollapse, collapsed,
                collapsedIconCls, expandedIconCls, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,
                idField, valueField, displayField, descriptionField, disabled, isLoading, readOnly, selectMode,
                renderer, onNodeClick
            } = this.props,
            {data, value, isNodeToggling} = this.state,

            treeClassName = classNames('draggable-tree', {
                [className]: className
            });

        return (
            <DragDropContext onDragStart={this.onNodeDragStart}
                             onDragEnd={this.onNodeDragEnd}>

                <div className={treeClassName}
                     disabled={disabled}
                     style={style}
                     onWheel={e => Event.wheelHandler(e, this.props)}>

                    <DraggableTreeNode data={isArray(data) ? {[VirtualRoot]: true, children: data} : data}
                                       value={value}
                                       theme={theme}
                                       idField={idField}
                                       valueField={valueField}
                                       displayField={displayField}
                                       descriptionField={descriptionField}
                                       disabled={disabled}
                                       isLoading={isLoading}
                                       readOnly={readOnly}
                                       selectMode={selectMode}
                                       renderer={renderer}
                                       allowCollapse={allowCollapse}
                                       collapsed={collapsed}
                                       collapsedIconCls={collapsedIconCls}
                                       expandedIconCls={expandedIconCls}
                                       radioUncheckedIconCls={radioUncheckedIconCls}
                                       radioCheckedIconCls={radioCheckedIconCls}
                                       checkboxUncheckedIconCls={checkboxUncheckedIconCls}
                                       checkboxCheckedIconCls={checkboxCheckedIconCls}
                                       checkboxIndeterminateIconCls={checkboxIndeterminateIconCls}
                                       isNodeToggling={isNodeToggling}
                                       onClick={(...args) => onNodeClick && onNodeClick(...args)}
                                       onNodeToggleStart={this.nodeToggleStartHandler}
                                       onNodeToggleEnd={this.nodeToggleEndHandler}
                                       onSelect={this.treeNodeSelectHandler}
                                       onDeselect={this.treeNodeDeselectHandler}/>

                    {children}

                </div>

            </DragDropContext>
        );
    }
}

DraggableTree.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The theme of the tree node.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The theme of the tree node select radio or checkbox.
     */
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The mode of tree node.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * Children passed into the tree node.
     */
    data: PropTypes.oneOfType([PropTypes.shape({

        /**
         * The CSS class name of the tree node.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the tree node.
         */
        style: PropTypes.object,

        /**
         * The theme of the tree button.
         */
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        /**
         * The text value of the tree button.Type can be string or number.
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The tree node's display text. Type can be string, number or bool.
         */
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The desc value of the tree node. Type can be string or number.
         */
        desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true,the tree node will be disabled.
         */
        disabled: PropTypes.bool,

        /**
         * If true,the button will be have loading effect.
         */
        isLoading: PropTypes.bool,

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

        children: PropTypes.array,

        /**
         * You can create a complicated renderer callback instead of value and desc prop.
         */
        itemRenderer: PropTypes.func,

        /**
         * Callback function fired when a tree node touch-tapped.
         */
        onClick: PropTypes.func

    }), PropTypes.array]),

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
     * If true, the tree will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true, the tree will be at loading status.
     */
    isLoading: PropTypes.bool,

    readOnly: PropTypes.bool,

    isSelectRecursive: PropTypes.bool,
    allowCollapse: PropTypes.bool,
    collapsed: PropTypes.bool,
    collapsedIconCls: PropTypes.string,
    expandedIconCls: PropTypes.string,
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
     * Callback function fired when the tree node touch tap.
     */
    onNodeClick: PropTypes.func,

    /**
     * Callback function fired when the tree node selected.
     */
    onNodeSelect: PropTypes.func,

    /**
     * Callback function fired when the tree node deselected.
     */
    onNodeDeselect: PropTypes.func,

    /**
     * Callback function fired when the tree changed.
     */
    onChange: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func,

    beforeNodeToggle: PropTypes.func,

    onNodeDragStart: PropTypes.func,
    onNodeDragEnd: PropTypes.func,

    onSequenceChange: PropTypes.func

};

DraggableTree.defaultProps = {

    theme: Theme.DEFAULT,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    isLoading: false,
    readOnly: false,
    isSelectRecursive: false,
    allowCollapse: true,
    collapsed: false

};

export default DraggableTree;
