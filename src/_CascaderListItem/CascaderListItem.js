/**
 * @file CascaderListItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CircularLoading from '../CircularLoading';
import TipProvider from '../TipProvider';
import Theme from '../Theme';
import IconButton from '../IconButton';
import Radio from '../Radio';
import Checkbox from '../Checkbox';
import List from '../List';

import Position from '../_statics/Position';
import SelectMode from '../_statics/SelectMode';

import Util from '../_vendors/Util';
import Calculation from '../_vendors/Calculation';

class CascaderListItem extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            activatedIndex: -1
        };

    }

    // toggleTreeNode = e => {
    //
    //     e.stopPropagation();
    //
    //     const {onNodeToggleStart} = this.props;
    //     onNodeToggleStart && onNodeToggleStart();
    //
    //     this.setState({
    //         collapsed: !this.state.collapsed
    //     }, () => {
    //         const {onNodeToggleEnd} = this.props;
    //         onNodeToggleEnd && onNodeToggleEnd();
    //     });
    //
    // };

    // checkboxChangeHandler = e => {
    //
    //     const {data, path, value, onSelect, onDeselect} = this.props;
    //
    //     if (!Calculation.isItemChecked(data, value, this.props)) {
    //         onSelect && onSelect(data, path, e);
    //     } else {
    //         onDeselect && onDeselect(data, path, e);
    //     }
    //
    // };
    //
    // radioChangeHandler = e => {
    //     const {data, path, onSelect} = this.props;
    //     onSelect && onSelect(data, path, e);
    // };
    //
    // listItemClickHanlder = e => {
    //
    //     e.preventDefault();
    //
    //     const {data, path, disabled, isLoading, readOnly} = this.props;
    //
    //     if (disabled || isLoading || readOnly || data.disabled || data.isLoading || data.readOnly) {
    //         return;
    //     }
    //
    //     const {onClick} = this.props;
    //     onClick && onClick(data, path, e);
    //
    //     const {selectMode} = this.props;
    //
    //     switch (selectMode) {
    //         case SelectMode.MULTI_SELECT:
    //             this.checkboxChangeHandler(e);
    //             return;
    //         case SelectMode.SINGLE_SELECT:
    //             this.radioChangeHandler(e);
    //             return;
    //     }
    //
    // };

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

        const {valueField, displayField, descriptionField, renderer} = this.props;

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
                        <i className="fas fa-chevron-right cascader-list-item-right-icon"
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

                index, depth, path, theme, listWidth, selectTheme, selectMode, data, value,
                disabled, isLoading, readOnly, allowCollapse, isSelectRecursive,
                valueField, displayField, descriptionField,

                collapsedIconCls, expandedIconCls, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                renderer, onSelect, onDeselect, onMouseEnter, onMouseLeave

            } = this.props,
            {activatedIndex} = this.state,

            listClassName = classNames('cascader-popup-list', {
                first: depth === 0
            }),
            listStyle = {
                width: listWidth
            };

        // checked = Calculation.isItemChecked(data, value, this.props),
        // indeterminate = Calculation.isItemIndeterminate(data, value, this.props),
        //
        // isNodeLoading = data.isLoading || isLoading,
        // isNodeDisabled = data.disabled || disabled || isNodeLoading,
        //
        // nodeClassName = classNames('tree-node', {
        //     [`theme-${theme}`]: theme,
        //     [data.className]: data.className
        // }),
        // nodeStyle = {
        //     ...data.style,
        //     paddingLeft: (depth + 1) * 20
        // },
        //
        // childrenClassName = classNames('tree-node-children', {
        //     collapsed
        // }),
        //
        // loadingIconPosition = (data.rightIconCls && !data.iconCls) ? 'right' : 'left';

        return (
            <div className="cascader-list-item">

                <List className={listClassName}
                      style={listStyle}
                      data={data}
                      renderer={this.listItemRenderer}
                      onItemClick={this.listItemClickHanlder}
                      onItemSelect={this.listItemSelectHanlder}
                      onItemDeselect={this.listItemDeselectHanlder}/>

                {
                    activatedIndex > -1 && data[activatedIndex].children && data[activatedIndex].children.length > 0 ?
                        <CascaderListItem {...this.props}
                                          data={data[activatedIndex].children}
                                          depth={depth + 1}
                                          path={this.getPath()}/>
                        :
                        null
                }

            </div>
        );

        // return (
        //     <div className="tree-node-wrapper">
        //
        //         <TipProvider className='block'
        //                      text={data.tip}
        //                      position={data.tipPosition}>
        //
        //             <div className={nodeClassName}
        //                  style={nodeStyle}
        //                  disabled={isNodeDisabled}
        //                  readOnly={readOnly}
        //                  onClick={this.clickHandler}
        //                  onMouseEnter={onMouseEnter}
        //                  onMouseLeave={onMouseLeave}>
        //
        //                 <div className="tree-node-inner">
        //
        //                     {
        //                         allowCollapse && data.children && data.children.length > 0 ?
        //                             <IconButton className="tree-node-collapse-icon"
        //                                         iconCls={collapsed ?
        //                                             data.collapsedIconCls || collapsedIconCls
        //                                             :
        //                                             data.expandedIconCls || expandedIconCls}
        //                                         onClick={this.toggleTreeNode}/>
        //                             :
        //                             null
        //                     }
        //
        //                     {
        //                         selectMode === SelectMode.SINGLE_SELECT && (radioUncheckedIconCls || radioCheckedIconCls) ?
        //                             <Radio className="tree-node-select"
        //                                    theme={selectTheme}
        //                                    checked={checked}
        //                                    disabled={isNodeDisabled}
        //                                    uncheckedIconCls={data.radioUncheckedIconCls || radioUncheckedIconCls}
        //                                    checkedIconCls={data.radioCheckedIconCls || radioCheckedIconCls}
        //                                    disableTouchRipple={true}/>
        //                             :
        //                             null
        //                     }
        //
        //                     {
        //                         selectMode === SelectMode.MULTI_SELECT ?
        //                             <Checkbox className="tree-node-select"
        //                                       theme={selectTheme}
        //                                       checked={checked}
        //                                       indeterminate={isSelectRecursive ? indeterminate : false}
        //                                       disabled={isNodeDisabled}
        //                                       uncheckedIconCls={data.checkboxUncheckedIconCls || checkboxUncheckedIconCls}
        //                                       checkedIconCls={data.checkboxCheckedIconCls || checkboxCheckedIconCls}
        //                                       indeterminateIconCls={data.checkboxIndeterminateIconCls || checkboxIndeterminateIconCls}
        //                                       disableTouchRipple={true}/>
        //                             :
        //                             null
        //                     }
        //
        //                     {
        //                         isNodeLoading && loadingIconPosition === 'left' ?
        //                             <div className="button-icon button-icon-left">
        //                                 <CircularLoading className="button-loading-icon"
        //                                                  size="small"/>
        //                             </div>
        //                             :
        //                             (
        //                                 data.iconCls ?
        //                                     <i className={`button-icon button-icon-left ${data.iconCls}`}
        //                                        aria-hidden="true"></i>
        //                                     :
        //                                     null
        //                             )
        //                     }
        //
        //                     {
        //                         data.itemRenderer && typeof data.itemRenderer === 'function' ?
        //                             data.itemRenderer(data, index)
        //                             :
        //                             (
        //                                 renderer && typeof renderer === 'function' ?
        //                                     renderer(data, index)
        //                                     :
        //                                     (
        //                                         data[descriptionField] ?
        //                                             <div className="tree-node-content">
        //                                             <span className="tree-node-content-value">
        //                                                 {Util.getTextByDisplayField(data, displayField, valueField)}
        //                                             </span>
        //                                                 <span className="tree-node-content-desc">
        //                                                 {data[descriptionField]}
        //                                             </span>
        //                                             </div>
        //                                             :
        //                                             Util.getTextByDisplayField(data, displayField, valueField)
        //                                     )
        //                             )
        //                     }
        //
        //                     {
        //                         isNodeLoading && loadingIconPosition === 'right' ?
        //                             <CircularLoading className="button-icon button-icon-right button-loading-icon"
        //                                              size="small"/>
        //                             :
        //                             (
        //                                 data.rightIconCls ?
        //                                     <i className={`button-icon button-icon-right ${data.rightIconCls}`}
        //                                        aria-hidden="true"></i>
        //                                     :
        //                                     null
        //                             )
        //                     }
        //                 </div>
        //
        //             </div>
        //         </TipProvider>
        //
        //         {
        //             data.children && data.children.length > 0 ?
        //                 <div className={childrenClassName}>
        //                     {
        //                         data.children.map((item, index) =>
        //                             <CascaderListItem {...this.props}
        //                                               key={index}
        //                                               data={item}
        //                                               index={index}
        //                                               depth={depth + 1}
        //                                               path={
        //                                                   path ?
        //                                                       [...path, {index, node: item}]
        //                                                       :
        //                                                       [{index, node: item}]
        //                                               }/>
        //                         )
        //                     }
        //                 </div>
        //                 :
        //                 null
        //         }
        //
        //     </div>
        // );

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
    allowCollapse: PropTypes.bool,
    isNodeToggling: PropTypes.bool,
    isSelectRecursive: PropTypes.bool,

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
    allowCollapse: true,
    isNodeToggling: false,
    isSelectRecursive: false,

    tipPosition: Position.BOTTOM,

    collapsedIconCls: 'fas fa-caret-right',
    expandedIconCls: 'fas fa-caret-down',
    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square'

};

export default CascaderListItem;