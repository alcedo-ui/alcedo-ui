/**
 * @file CascaderListItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

// Components
import List from '../List';

// Statics
import Theme from '../Theme';
import SelectMode from '../_statics/SelectMode';
import HorizontalDirection from '../_statics/HorizontalDirection';

// Vendors
import classNames from 'classnames';
import Calc from '../_vendors/Calculation';
import CascaderCalculation from '../_vendors/CascaderCalculation';
import Util from '../_vendors/Util';

class CascaderListItem extends Component {

    static SelectMode = SelectMode;
    static ExpandDirection = HorizontalDirection;
    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    findDataIndex = () => {

        const {activatedPath, data, valueField, displayField} = this.props;

        for (let dataItem of data) {

            const index = activatedPath.findIndex(item => item
                && Util.getValueByValueField(item.node, valueField, displayField)
                === Util.getValueByValueField(dataItem, valueField, displayField));

            if (index > -1) {
                return index;
            }

        }

        return -1;

    };

    getActivatedIndex = () => {

        const {activatedPath, data} = this.props;

        if (!activatedPath || activatedPath.length < 1 || !data) {
            return -1;
        }

        const index = this.findDataIndex();
        return index < 0 ? -1 : activatedPath[index].index;

    };

    isExpanded = (node, index) => {
        return index === this.getActivatedIndex() && node.children && node.children.length > 0;
    };

    getCurrentPathNode = (index = this.getActivatedIndex()) => {

        const {data} = this.props;

        return index > -1 ?
            {index: index, node: data[index]}
            :
            null;

    };

    getPath = (index = this.getActivatedIndex()) => {

        const {path} = this.props,
            currentPathNode = this.getCurrentPathNode(index);

        return path.length > 0 ?
            [...path, currentPathNode]
            :
            [currentPathNode];

    };

    getValue = () => {

        const {selectMode, value, activatedPath, depth} = this.props;

        if (selectMode === SelectMode.MULTI_SELECT) {
            return value || [];
        }

        return activatedPath && activatedPath[depth] && activatedPath[depth].node || null;

    };

    isListItemIndeterminate = node => {

        if (!this.props.isSelectRecursive || this.props.selectMode === SelectMode.SINGLE_SELECT) {
            return false;
        }

        return Calc.isItemIndeterminate(node, this.props.value, this.props);

    };

    handleListItemClick = (node, index, e) => {

        const {data, disabled, isLoading, readOnly} = this.props;

        if (disabled || isLoading || readOnly || data.disabled || data.isLoading || data.readOnly) {
            return;
        }

        const {onNodeClick} = this.props;
        onNodeClick && onNodeClick(node, index, this.getPath(index), e);

    };

    handleListItemSelect = (node, index) => {
        const {onNodeSelect} = this.props;
        onNodeSelect && onNodeSelect(node, this.getPath(index));
    };

    handleListItemDeselect = (node, index) => {
        const {onNodeDeselect} = this.props;
        onNodeDeselect && onNodeDeselect(node, this.getPath(index));
    };

    listItemRenderer = (node, index) => {

        if (!node) {
            return null;
        }

        const {
                depth, activatedPath, path: parentPath,
                expandDirection, valueField, displayField, descriptionField, expandedIconCls,
                renderer, expandIconVisible
            } = this.props,

            path = [...parentPath, {
                index,
                node
            }],
            hasChildren = CascaderCalculation.hasChildren(node),
            hasExpandIcon = expandIconVisible && typeof expandIconVisible === 'function' ?
                expandIconVisible(node, index, depth, path, activatedPath)
                :
                expandDirection === HorizontalDirection.RIGHT && hasChildren;

        let text, desc;
        if (!renderer) {
            text = Util.getTextByDisplayField(node, displayField, valueField);
            desc = node[descriptionField] || null;
        }

        return (
            <Fragment>

                {
                    expandDirection === HorizontalDirection.LEFT && hasChildren ?
                        <i className={classNames('cascader-list-item-expand-icon',
                            expandedIconCls || 'fas fa-chevron-left')}
                           aria-hidden="true"/>
                        :
                        null
                }

                {
                    renderer ?
                        renderer(node, index, depth, path, activatedPath)
                        :
                        (
                            desc ?
                                <div className="list-item-content">
                                    <div className="list-item-content-value">
                                        {text}
                                    </div>
                                    <div className="list-item-content-desc">
                                        {desc}
                                    </div>
                                </div>
                                :
                                text
                        )
                }

                {
                    hasExpandIcon ?
                        <i className={classNames('cascader-list-item-expand-icon',
                            expandedIconCls || 'fas fa-chevron-right')}
                           aria-hidden="true"/>
                        :
                        null
                }

            </Fragment>
        );

    };

    render() {

        const {

                depth, theme, listWidth, selectTheme, selectMode, expandDirection, data, disabled,
                isLoading, readOnly, idField, valueField, displayField, descriptionField, itemDisabled,

                radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls

            } = this.props,

            activatedIndex = this.getActivatedIndex(),
            hasChild = activatedIndex > -1 && data[activatedIndex] && data[activatedIndex].children
                && data[activatedIndex].children.length > 0;

        return (
            <div className={classNames('cascader-list-item', {
                expanded: hasChild
            })}>

                <List className={classNames('cascader-popup-list', {
                    first: depth === 0,
                    'expand-left': expandDirection === HorizontalDirection.LEFT
                })}
                      style={{
                          width: listWidth
                      }}
                      theme={theme}
                      selectTheme={selectTheme}
                      selectMode={selectMode}
                      data={data}
                      value={this.getValue()}
                      disabled={disabled}
                      isLoading={isLoading}
                      readOnly={readOnly}
                      idField={idField}
                      valueField={valueField}
                      displayField={displayField}
                      descriptionField={descriptionField}
                      radioUncheckedIconCls={radioUncheckedIconCls}
                      radioCheckedIconCls={radioCheckedIconCls}
                      checkboxUncheckedIconCls={checkboxUncheckedIconCls}
                      checkboxCheckedIconCls={checkboxCheckedIconCls}
                      checkboxIndeterminateIconCls={checkboxIndeterminateIconCls}
                      autoSelect={selectMode !== SelectMode.MULTI_SELECT}
                      itemDisabled={itemDisabled}
                      indeterminateCallback={this.isListItemIndeterminate}
                      renderer={this.listItemRenderer}
                      onItemClick={this.handleListItemClick}
                      onItemSelect={this.handleListItemSelect}
                      onItemDeselect={this.handleListItemDeselect}/>

                {
                    activatedIndex > -1 && data[activatedIndex] && data[activatedIndex].children
                    && data[activatedIndex].children.length > 0 ?
                        <CascaderListItem {...this.props}
                                          data={data[activatedIndex].children}
                                          depth={depth + 1}
                                          path={this.getPath(activatedIndex)}/>
                        :
                        null
                }

            </div>
        );

    }
}

CascaderListItem.propTypes = {

    index: PropTypes.number,
    depth: PropTypes.number,
    activatedPath: PropTypes.array,
    path: PropTypes.array,

    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    listWidth: PropTypes.number,

    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),
    expandDirection: PropTypes.oneOf(Util.enumerateValue(HorizontalDirection)),

    data: PropTypes.array,
    value: PropTypes.any,

    idField: PropTypes.string,
    valueField: PropTypes.string,
    displayField: PropTypes.string,
    descriptionField: PropTypes.string,

    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    readOnly: PropTypes.bool,
    isNodeToggling: PropTypes.bool,
    isSelectRecursive: PropTypes.bool,

    itemDisabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    renderer: PropTypes.func,
    expandIconVisible: PropTypes.func,

    expandedIconCls: PropTypes.string,
    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    onNodeClick: PropTypes.func,
    onNodeSelect: PropTypes.func,
    onNodeDeselect: PropTypes.func

};

CascaderListItem.defaultProps = {

    index: 0,
    depth: 0,
    activatedPath: [],
    path: [],

    theme: Theme.DEFAULT,
    listWidth: 200,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,
    expandDirection: HorizontalDirection.LEFT,

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    disabled: false,
    isLoading: false,
    readOnly: false,
    isNodeToggling: false,
    isSelectRecursive: true,

    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square'

};

export default CascaderListItem;
