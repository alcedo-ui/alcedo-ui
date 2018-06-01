/**
 * @file Tree component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import isArray from 'lodash/isArray';
import classNames from 'classnames';

import TreeNode from '../_TreeNode';
import Tip from '../Tip';
import Theme from '../Theme';

import SelectMode from '../_statics/SelectMode';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import Calculation from '../_vendors/Calculation';
import ComponentUtil from '../_vendors/ComponentUtil';

class Tree extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
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
     * update value when multi recursive select
     * @param value
     * @returns {Array}
     */
    updateValue = value => {

        const {data} = this.props;
        let result = [];

        Util.postOrderTraverse(data, node => {

            if (value.includes(node)) {
                result.push(node);
            } else if (node.children && node.children.length > 0
                && node.children.every(child => value.includes(child))) {
                result.push(node);
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

    treeNodeDeselectHandler = (node, path, e) => {

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

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {
                children, className, style, theme, data, allowCollapse, collapsedIconCls, expandedIconCls,
                idField, valueField, displayField, descriptionField, disabled, isLoading, readOnly, selectMode,
                isSelectRecursive, renderer, onNodeClick
            } = this.props,
            {value, isNodeToggling} = this.state,

            treeClassName = classNames('tree', {
                [className]: className
            });

        return (
            <div className={treeClassName}
                 disabled={disabled}
                 style={style}
                 onWheel={e => {
                     Event.wheelHandler(e, this.props);
                 }}>

                <TreeNode data={data}
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
                          collapsedIconCls={collapsedIconCls}
                          expandedIconCls={expandedIconCls}
                          isNodeToggling={isNodeToggling}
                          isSelectRecursive={isSelectRecursive}
                          onClick={(...args) => onNodeClick && onNodeClick(...args)}
                          onNodeToggleStart={this.nodeToggleStartHandler}
                          onNodeToggleEnd={this.nodeToggleEndHandler}
                          onSelect={this.treeNodeSelectHandler}
                          onDeselect={this.treeNodeDeselectHandler}/>

                {children}

            </div>
        );
    }
}

Tree.propTypes = {

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
    data: PropTypes.shape({

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

    }),

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

    shouldPreventContainerScroll: PropTypes.bool,
    isSelectRecursive: PropTypes.bool,
    allowCollapse: PropTypes.bool,
    collapsedIconCls: PropTypes.string,
    expandedIconCls: PropTypes.string,

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

    beforeNodeToggle: PropTypes.func

};

Tree.defaultProps = {

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
    shouldPreventContainerScroll: true,
    isSelectRecursive: false,
    allowCollapse: true,
    collapsedIconCls: 'fas fa-caret-right',
    expandedIconCls: 'fas fa-caret-down'

};

export default Tree;