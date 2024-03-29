/**
 * @file Tree component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import TreeNode from '../_TreeNode';

// Statics
import Theme from '../Theme';
import SelectMode from '../_statics/SelectMode';
import VirtualRoot from '../_statics/VirtualRoot';

// Vendors
import isArray from 'lodash/isArray';
import classNames from 'classnames';
import Util from '../_vendors/Util';
import Calculation from '../_vendors/Calculation';
import ComponentUtil from '../_vendors/ComponentUtil';
import TC from '../_vendors/TreeCalculation';

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

    handleTreeNodeSelect = (node, path, e) => {

        if (!node) {
            return;
        }

        const {selectMode, isSelectRecursive} = this.props,
            {value} = this.state,
            state = {};

        if (selectMode === SelectMode.MULTI_SELECT) {

            let result = value && isArray(value) ? value.slice() : [];

            if (isSelectRecursive) {
                TC.addRecursiveValue(node, result, this.props);
                result = TC.updateValue(result, this.props);
            } else {
                result.push(node);
            }

            state.value = result;

        } else if (selectMode === SelectMode.SINGLE_SELECT) {
            state.value = node;
        }

        this.setState(state, () => {
            const {onNodeSelect, onChange} = this.props;
            onNodeSelect && onNodeSelect(node, path, e);
            onChange && onChange(state.value, e);
        });

    };

    handleTreeNodeDeselect = (node, path, e) => {

        const {selectMode} = this.props;
        if (!node || selectMode !== SelectMode.MULTI_SELECT) {
            return;
        }

        const {isSelectRecursive} = this.props,
            {value: stateValue} = this.state;
        let value = stateValue ? stateValue.slice() : stateValue;

        if (!value || !isArray(value)) {
            value = [];
        } else {
            if (isSelectRecursive) {
                TC.removeRecursiveValue(node, value, this.props);
                value = TC.updateValue(value, this.props);
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

    handleNodeToggleStart = () => {

        const {beforeNodeToggle} = this.props;

        if (beforeNodeToggle && beforeNodeToggle() === false) {
            return;
        }

        this.setState({
            isNodeToggling: true
        });

    };

    handleNodeToggleEnd = () => {
        this.setState({
            isNodeToggling: false
        });
    };

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: Calculation.getInitValue({
                value: ComponentUtil.getDerivedState(props, state, 'value'),
                selectMode: props.selectMode
            })
        };
    }

    render() {

        const {
                children, className, style, theme, data, allowCollapse, collapsed, indentWidth,
                collapsedIconCls, expandedIconCls, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,
                valueField, displayField, descriptionField, disabled, nodeDisabled, isLoading,
                readOnly, selectMode, isSelectRecursive, renderer, onNodeClick, isNodeCollapsed
            } = this.props,
            {value, isNodeToggling} = this.state,
            treeData = isArray(data) ? {[VirtualRoot]: true, children: data} : data;

        return (
            <div className={classNames('tree', {
                [className]: className
            })}
                 disabled={disabled}
                 style={style}>

                <TreeNode data={treeData}
                          treeData={treeData}
                          value={value}
                          theme={theme}
                          valueField={valueField}
                          displayField={displayField}
                          descriptionField={descriptionField}
                          disabled={disabled}
                          nodeDisabled={nodeDisabled}
                          isLoading={isLoading}
                          readOnly={readOnly}
                          selectMode={selectMode}
                          renderer={renderer}
                          allowCollapse={allowCollapse}
                          collapsed={collapsed}
                          indentWidth={indentWidth}
                          collapsedIconCls={collapsedIconCls}
                          expandedIconCls={expandedIconCls}
                          radioUncheckedIconCls={radioUncheckedIconCls}
                          radioCheckedIconCls={radioCheckedIconCls}
                          checkboxUncheckedIconCls={checkboxUncheckedIconCls}
                          checkboxCheckedIconCls={checkboxCheckedIconCls}
                          checkboxIndeterminateIconCls={checkboxIndeterminateIconCls}
                          isNodeToggling={isNodeToggling}
                          isSelectRecursive={isSelectRecursive}
                          onClick={(...args) => onNodeClick && onNodeClick(...args)}
                          onNodeToggleStart={this.handleNodeToggleStart}
                          onNodeToggleEnd={this.handleNodeToggleEnd}
                          onSelect={this.handleTreeNodeSelect}
                          onDeselect={this.handleTreeNodeDeselect}
                          isNodeCollapsed={isNodeCollapsed}/>

                {children}

            </div>
        );
    }
}

Tree.propTypes = {

    children: PropTypes.any,

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
        title: PropTypes.string,

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
     * Tree node disabled callback.
     */
    nodeDisabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

    /**
     * If true, the tree will be at loading status.
     */
    isLoading: PropTypes.bool,

    readOnly: PropTypes.bool,

    isSelectRecursive: PropTypes.bool,
    allowCollapse: PropTypes.bool,
    collapsed: PropTypes.bool,
    indentWidth: PropTypes.number,
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

    isNodeCollapsed: PropTypes.func,
    beforeNodeToggle: PropTypes.func

};

Tree.defaultProps = {

    theme: Theme.DEFAULT,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    isLoading: false,
    readOnly: false,
    isSelectRecursive: false,
    allowCollapse: true,
    collapsed: false,
    indentWidth: 20

};

export default Tree;
