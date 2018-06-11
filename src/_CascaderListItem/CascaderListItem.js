/**
 * @file CascaderListItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Theme from '../Theme';
import List from '../List';

import Position from '../_statics/Position';
import SelectMode from '../_statics/SelectMode';

import Util from '../_vendors/Util';

class CascaderListItem extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            activatedIndex: -1
        };

    }

    isExpanded = (node, index) => {
        return index === this.state.activatedIndex && node.children && node.children.length > 0;
    };

    getCurrentPathNode = (index = this.state.activatedIndex) => {

        const {data} = this.props;

        return index > -1 ?
            {index: index, node: data[index]}
            :
            null;

    };

    getPath = (index = this.state.activatedIndex) => {

        const {path} = this.props,
            currentPathNode = this.getCurrentPathNode(index);

        return path ?
            [...path, currentPathNode]
            :
            [currentPathNode];

    };

    listItemRenderer = (node, index) => {

        const {valueField, displayField, descriptionField, expandedIconCls, renderer} = this.props;

        let text, desc;
        if (!renderer) {
            text = Util.getTextByDisplayField(node, displayField, valueField);
            desc = node[descriptionField] || null;
        }

        return (
            <Fragment>

                {
                    renderer ?
                        renderer(node, index)
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
                    this.isExpanded(node, index) ?
                        <i className={classNames('cascader-list-item-right-icon', {
                            [expandedIconCls]: expandedIconCls
                        })}
                           aria-hidden="true"></i>
                        :
                        null
                }

            </Fragment>
        );

    };

    listItemClickHanlder = (node, index) => {

        const {data, disabled, isLoading, readOnly} = this.props;

        if (disabled || isLoading || readOnly || data.disabled || data.isLoading || data.readOnly) {
            return;
        }

        this.setState({
            activatedIndex: index
        }, () => {
            const {onClick} = this.props;
            onClick && onClick(node, index);
        });

    };

    listItemSelectHanlder = (node, index) => {
        const {onSelect} = this.props;
        onSelect && onSelect(node, this.getPath(index));
    };

    listItemDeselectHanlder = (node, index) => {
        const {onDeselect} = this.props;
        onDeselect && onDeselect(node, this.getPath(index));
    };

    render() {

        const {

                depth, theme, listWidth, selectTheme, selectMode, data, value,
                disabled, isLoading, readOnly, valueField, displayField, descriptionField,

                radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls

            } = this.props,
            {activatedIndex} = this.state,

            listClassName = classNames('cascader-popup-list', {
                first: depth === 0
            }),
            listStyle = {
                width: listWidth
            };

        return (
            <div className="cascader-list-item">

                <List className={listClassName}
                      style={listStyle}
                      theme={theme}
                      selectTheme={selectTheme}
                      selectMode={selectMode}
                      data={data}
                      value={value}
                      disabled={disabled}
                      isLoading={isLoading}
                      readOnly={readOnly}
                      valueField={valueField}
                      displayField={displayField}
                      descriptionField={descriptionField}
                      radioUncheckedIconCls={radioUncheckedIconCls}
                      radioCheckedIconCls={radioCheckedIconCls}
                      checkboxUncheckedIconCls={checkboxUncheckedIconCls}
                      checkboxCheckedIconCls={checkboxCheckedIconCls}
                      checkboxIndeterminateIconCls={checkboxIndeterminateIconCls}
                      renderer={this.listItemRenderer}
                      onItemClick={this.listItemClickHanlder}
                      onItemSelect={this.listItemSelectHanlder}
                      onItemDeselect={this.listItemDeselectHanlder}/>

                {
                    activatedIndex > -1 && data[activatedIndex] && data[activatedIndex].children
                    && data[activatedIndex].children.length > 0 ?
                        <CascaderListItem {...this.props}
                                          data={data[activatedIndex].children}
                                          depth={depth + 1}
                                          path={this.getPath()}/>
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
    path: PropTypes.array,

    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    listWidth: PropTypes.number,

    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    data: PropTypes.array,
    value: PropTypes.any,

    valueField: PropTypes.string,
    displayField: PropTypes.string,
    descriptionField: PropTypes.string,

    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    readOnly: PropTypes.bool,
    isNodeToggling: PropTypes.bool,
    isSelectRecursive: PropTypes.bool,

    renderer: PropTypes.func,

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

CascaderListItem.defaultProps = {

    index: 0,
    depth: 0,

    theme: Theme.DEFAULT,
    listWidth: 200,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    disabled: false,
    isLoading: false,
    readOnly: false,
    isNodeToggling: false,
    isSelectRecursive: false,

    tipPosition: Position.BOTTOM,

    expandedIconCls: 'fas fa-chevron-right',
    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square'

};

export default CascaderListItem;