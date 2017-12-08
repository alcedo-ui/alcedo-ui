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

export default class Tree extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.treeNodeTouchTapHandler = ::this.treeNodeTouchTapHandler;
        this.wheelHandler = ::this.wheelHandler;

    }

    treeNodeTouchTapHandler(value) {
        this.setState({
            value
        }, () => {
            const {onItemTouchTap} = this.props;
            onItemTouchTap && onItemTouchTap(value);
        });
    }

    wheelHandler(e) {
        const {shouldPreventContainerScroll, onWheel} = this.props;
        shouldPreventContainerScroll && Event.preventContainerScroll(e);
        onWheel && onWheel(e);
    }

    render() {

        const {
                children, className, style, theme, data, collapsedIconCls, expandedIconCls,
                idField, valueField, displayField, descriptionField, disabled, isLoading, renderer
            } = this.props,
            listClassName = (className ? ' ' + className : '');

        return (
            <div className={'tree' + listClassName}
                 disabled={disabled}
                 style={style}
                 onWheel={this.wheelHandler}>

                <TreeNode {...data}
                          themeGlobal={theme}
                          disabledGlobal={disabled}
                          isLoadingGlobal={isLoading}
                          rendererGlobal={renderer}
                          collapsedIconClsGlobal={collapsedIconCls}
                          expandedIconClsGlobal={expandedIconCls}
                          onTouchTap={e => {
                              this.treeNodeTouchTapHandler(data);
                              data.onTouchTap && data.onTouchTap(e);
                          }}/>

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
     * The theme of the tree item.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * Children passed into the ListItem.
     */
    data: PropTypes.shape({

        /**
         * The CSS class name of the tree item.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the tree item.
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
         * The tree item's display text. Type can be string, number or bool.
         */
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The desc value of the tree item. Type can be string or number.
         */
        desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true,the tree item will be disabled.
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
        renderer: PropTypes.func,

        /**
         * Callback function fired when a tree item touch-tapped.
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

    shouldPreventContainerScroll: PropTypes.bool,

    collapsedIconCls: PropTypes.string,
    expandedIconCls: PropTypes.string,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * Callback function fired when the tree-item touch tap.
     */
    onItemTouchTap: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

Tree.defaultProps = {

    className: null,
    style: null,
    theme: Theme.DEFAULT,

    data: [],

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    shouldPreventContainerScroll: true,

    collapsedIconCls: 'fa fa-caret-right',
    expandedIconCls: 'fa fa-caret-down'

};