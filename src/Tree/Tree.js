/**
 * @file Tree component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TreeNode from '../_TreeNode';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import SelectMode from '../_statics/SelectMode';

export default class Tree extends Component {

    static SelectMode = SelectMode;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: this.initValue(props)
        };

        this.treeNodeTouchTapHandler = ::this.treeNodeTouchTapHandler;
        this.treeNodeSelectHandler = ::this.treeNodeSelectHandler;
        this.treeNodeDeselectHandler = ::this.treeNodeDeselectHandler;
        this.wheelHandler = ::this.wheelHandler;

    }

    initValue(props) {

        if (!props) {
            return;
        }

        const {value, selectMode} = props;

        if (!selectMode) {
            return;
        }

        if (value) {
            return value;
        }

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                return [];
            case SelectMode.SINGLE_SELECT:
                return null;
            default:
                return value;
        }

    }

    treeNodeTouchTapHandler(nodeData, nodeIndex, e) {

        const {selectMode} = this.props;

        if (selectMode !== SelectMode.NORMAL) {
            return;
        }

        this.setState({
            value: nodeData
        }, () => {
            const {onNodeTouchTap, onChange} = this.props;
            onNodeTouchTap && onNodeTouchTap(nodeData, nodeIndex, e);
            onChange && onChange(nodeData, nodeIndex, e);
        });

    }

    treeNodeSelectHandler(nodeData, nodeIndex, e) {

    }

    treeNodeDeselectHandler() {

    }

    wheelHandler(e) {
        const {shouldPreventContainerScroll, onWheel} = this.props;
        shouldPreventContainerScroll && Event.preventContainerScroll(e);
        onWheel && onWheel(e);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: this.initValue(nextProps)
            });
        }
    }

    render() {

        const {
                children, className, style, theme, data, collapsedIconCls, expandedIconCls,
                idField, valueField, displayField, descriptionField, disabled, isLoading, readOnly, selectMode,
                renderer
            } = this.props,
            listClassName = (className ? ' ' + className : '');

        return (
            <div className={'tree' + listClassName}
                 disabled={disabled}
                 style={style}
                 onWheel={this.wheelHandler}>

                <TreeNode data={data}
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
                          collapsedIconCls={collapsedIconCls}
                          expandedIconCls={expandedIconCls}
                          onTouchTap={this.treeNodeTouchTapHandler}
                          onSelect={this.treeNodeSelectHandler}
                          onDeselect={this.treeNodeDeselectHandler}/>

                {children}

            </div>
        );
    }
};

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
        onTouchTap: PropTypes.func

    }).isRequired,

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

    collapsedIconCls: PropTypes.string,
    expandedIconCls: PropTypes.string,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * Callback function fired when the tree node touch tap.
     */
    onNodeTouchTap: PropTypes.func,

    /**
     * Callback function fired when the tree changed.
     */
    onChange: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

Tree.defaultProps = {

    className: null,
    style: null,
    theme: Theme.DEFAULT,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.NORMAL,

    data: [],

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    isLoading: false,
    readOnly: false,
    shouldPreventContainerScroll: true,

    collapsedIconCls: 'fa fa-caret-right',
    expandedIconCls: 'fa fa-caret-down'

};