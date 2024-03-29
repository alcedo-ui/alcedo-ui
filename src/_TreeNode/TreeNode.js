/**
 * @file TreeNode component
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

// Components
import CircularLoading from '../CircularLoading';
import IconButton from '../IconButton';
import Radio from '../Radio';
import Checkbox from '../Checkbox';

// Statics
import Theme from '../Theme';
import SelectMode from '../_statics/SelectMode';
import VirtualRoot from '../_statics/VirtualRoot';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';
import TC from '../_vendors/TreeCalculation';

class TreeNode extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            collapsed: this.isCollapsed(props)
        };

    }

    isNodeDisabled = (isNodeLoading = this.props.data?.isLoading || this.props.isLoading) => {

        const {data, value, treeData, disabled, nodeDisabled} = this.props;

        return data.disabled || disabled || isNodeLoading
            || (
                nodeDisabled !== undefined && nodeDisabled !== null
                && (typeof nodeDisabled === 'function' ? nodeDisabled(data, value, treeData) : nodeDisabled)
            );

    };

    isCollapsed = (props = this.props) => {

        const {data, isNodeCollapsed, collapsed, index, depth, path} = props;

        if (data && data[VirtualRoot]) {
            return false;
        }

        if (isNodeCollapsed) {
            if (typeof isNodeCollapsed === 'function') {
                return isNodeCollapsed(data, index, depth, path);
            } else {
                return !!isNodeCollapsed;
            }
        }

        return collapsed;

    };

    toggleTreeNode = e => {

        e && e.stopPropagation();

        const {onNodeToggleStart} = this.props;
        onNodeToggleStart && onNodeToggleStart();

        this.setState({
            collapsed: !this.state.collapsed
        }, () => {
            const {onNodeToggleEnd} = this.props;
            onNodeToggleEnd && onNodeToggleEnd();
        });

    };

    handleCheckboxChange = e => {

        const {data, path, value, onSelect, onDeselect} = this.props;

        if (!TC.isNodeChecked(data, value, this.props)) {
            onSelect && onSelect(data, path, e);
        } else {
            onDeselect && onDeselect(data, path, e);
        }

    };

    handleRadioChange = e => {
        const {data, path, onSelect} = this.props;
        onSelect && onSelect(data, path, e);
    };

    handleClick = e => {

        const {data, path, readOnly} = this.props;

        if (readOnly || data.readOnly || this.isNodeDisabled()) {
            return;
        }

        const {selectMode, onClick} = this.props;
        onClick && onClick(data, path, e);

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                this.handleCheckboxChange(e);
                return;
            case SelectMode.SINGLE_SELECT:
                this.handleRadioChange(e);
                return;
        }

    };

    renderChildren = () => {

        const {depth, path, data} = this.props,
            {collapsed} = this.state,
            isVirtual = VirtualRoot in data;

        return !collapsed && data.children && data.children.length > 0 ?
            <Fragment>
                {
                    data.children.map((item, index) =>
                        <TreeNode {...this.props}
                                  key={index}
                                  data={item}
                                  index={index}
                                  depth={depth + (isVirtual ? 0 : 1)}
                                  path={
                                      path ?
                                          [...path, {index, node: item}]
                                          :
                                          [{index, node: item}]
                                  }/>
                    )
                }
            </Fragment>
            :
            null;

    };

    /* eslint-disable complexity */
    render() {

        const {data} = this.props;

        if (VirtualRoot in data) {
            return this.renderChildren();
        }

        const {

                index, depth, theme, selectTheme, selectMode, value,
                isLoading, allowCollapse, isSelectRecursive, indentWidth,
                valueField, displayField, descriptionField,

                collapsedIconCls, expandedIconCls, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                renderer, onMouseEnter, onMouseLeave

            } = this.props,
            {collapsed} = this.state,

            checked = TC.isNodeChecked(data, value, this.props),
            indeterminate = TC.isNodeCheckedIndeterminate(data, value, this.props),

            isNodeLoading = data.isLoading || isLoading,
            isNodeDisabled = this.isNodeDisabled(isNodeLoading),

            loadingIconPosition = (data.rightIconCls && !data.iconCls) ? 'right' : 'left';

        return (
            <Fragment>

                <div className={classNames('tree-node', {
                    [`theme-${theme}`]: theme,
                    [data.className]: data.className
                })}
                     style={{
                         ...data.style,
                         paddingLeft: (depth + 1) * indentWidth
                     }}
                     title={data.title}
                     disabled={isNodeDisabled}
                     onClick={this.handleClick}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>

                    <div className="tree-node-inner">

                        {
                            allowCollapse && data.children && data.children.length > 0 ?
                                <IconButton className="tree-node-collapse-icon"
                                            iconCls={collapsed ?
                                                data.collapsedIconCls || collapsedIconCls
                                                :
                                                data.expandedIconCls || expandedIconCls}
                                            onClick={this.toggleTreeNode}/>
                                :
                                null
                        }

                        {
                            selectMode === SelectMode.SINGLE_SELECT && (radioUncheckedIconCls || radioCheckedIconCls) ?
                                <Radio className="tree-node-select"
                                       theme={selectTheme}
                                       checked={checked}
                                       disabled={isNodeDisabled}
                                       uncheckedIconCls={data.radioUncheckedIconCls || radioUncheckedIconCls}
                                       checkedIconCls={data.radioCheckedIconCls || radioCheckedIconCls}
                                       disableTouchRipple={true}/>
                                :
                                null
                        }

                        {
                            selectMode === SelectMode.MULTI_SELECT ?
                                <Checkbox className="tree-node-select"
                                          theme={selectTheme}
                                          checked={checked}
                                          indeterminate={isSelectRecursive ? indeterminate : false}
                                          disabled={isNodeDisabled}
                                          uncheckedIconCls={data.checkboxUncheckedIconCls || checkboxUncheckedIconCls}
                                          checkedIconCls={data.checkboxCheckedIconCls || checkboxCheckedIconCls}
                                          indeterminateIconCls={
                                              data.checkboxIndeterminateIconCls || checkboxIndeterminateIconCls
                                          }
                                          disableTouchRipple={true}/>
                                :
                                null
                        }

                        {
                            isNodeLoading && loadingIconPosition === 'left' ?
                                <div className="button-icon button-icon-left">
                                    <CircularLoading className="button-loading-icon"
                                                     size="small"/>
                                </div>
                                :
                                data.iconCls ?
                                    <i className={`button-icon button-icon-left ${data.iconCls}`}
                                       aria-hidden="true"/>
                                    :
                                    null
                        }

                        {
                            data.itemRenderer && typeof data.itemRenderer === 'function' ?
                                data.itemRenderer(data, index)
                                :
                                renderer && typeof renderer === 'function' ?
                                    renderer(data, index, depth)
                                    :
                                    data[descriptionField] ?
                                        <div className="tree-node-content">
                                            <span className="tree-node-content-value">
                                                {Util.getTextByDisplayField(data, displayField, valueField)}
                                            </span>
                                            <span className="tree-node-content-desc">
                                                {data[descriptionField]}
                                            </span>
                                        </div>
                                        :
                                        Util.getTextByDisplayField(data, displayField, valueField)
                        }

                        {
                            isNodeLoading && loadingIconPosition === 'right' ?
                                <CircularLoading className="button-icon button-icon-right button-loading-icon"
                                                 size="small"/>
                                :
                                data.rightIconCls ?
                                    <i className={`button-icon button-icon-right ${data.rightIconCls}`}
                                       aria-hidden="true"/>
                                    :
                                    null
                        }
                    </div>

                </div>

                {this.renderChildren()}

            </Fragment>
        );

    }
}

TreeNode.propTypes = {

    index: PropTypes.number,
    depth: PropTypes.number,
    path: PropTypes.array,

    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    data: PropTypes.object,
    treeData: PropTypes.object,
    value: PropTypes.any,

    valueField: PropTypes.string,
    displayField: PropTypes.string,
    descriptionField: PropTypes.string,

    disabled: PropTypes.bool,
    nodeDisabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    isLoading: PropTypes.bool,
    readOnly: PropTypes.bool,
    allowCollapse: PropTypes.bool,
    collapsed: PropTypes.bool,
    isNodeToggling: PropTypes.bool,
    isSelectRecursive: PropTypes.bool,
    indentWidth: PropTypes.number,

    renderer: PropTypes.func,

    collapsedIconCls: PropTypes.string,
    expandedIconCls: PropTypes.string,
    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onNodeToggleStart: PropTypes.func,
    onNodeToggleEnd: PropTypes.func

};

TreeNode.defaultProps = {

    index: 0,
    depth: 0,

    theme: Theme.DEFAULT,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    disabled: false,
    isLoading: false,
    readOnly: false,
    allowCollapse: true,
    collapsed: false,
    isNodeToggling: false,
    isSelectRecursive: false,
    indentWidth: 20,

    collapsedIconCls: 'fas fa-caret-right',
    expandedIconCls: 'fas fa-caret-down',
    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square'

};

export default TreeNode;
