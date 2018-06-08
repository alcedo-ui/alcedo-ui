/**
 * @file TreeNode component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CircularLoading from '../CircularLoading';
import TipProvider from '../TipProvider';
import Theme from '../Theme';
import IconButton from '../IconButton';
import Radio from '../Radio';
import Checkbox from '../Checkbox';

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
            collapsed: false
        };

    }

    toggleTreeNode = e => {

        e.stopPropagation();

        const {onNodeToggleStart} = this.props;
        onNodeToggleStart && onNodeToggleStart();

        this.setState({
            collapsed: !this.state.collapsed
        }, () => {
            const {onNodeToggleEnd} = this.props;
            onNodeToggleEnd && onNodeToggleEnd();
        });

    };

    checkboxChangeHandler = e => {

        const {data, path, value, onSelect, onDeselect} = this.props;

        if (!Calculation.isItemChecked(data, value, this.props)) {
            onSelect && onSelect(data, path, e);
        } else {
            onDeselect && onDeselect(data, path, e);
        }

    };

    radioChangeHandler = e => {
        const {data, path, onSelect} = this.props;
        onSelect && onSelect(data, path, e);
    };

    clickHandler = e => {

        e.preventDefault();

        const {data, path, disabled, isLoading, readOnly} = this.props;

        if (disabled || isLoading || readOnly || data.disabled || data.isLoading || data.readOnly) {
            return;
        }

        const {onClick} = this.props;
        onClick && onClick(data, path, e);

        const {selectMode} = this.props;

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                this.checkboxChangeHandler(e);
                return;
            case SelectMode.SINGLE_SELECT:
                this.radioChangeHandler(e);
                return;
        }

    };

    render() {

        const {

                index, depth, path, theme, selectTheme, selectMode, data, value,
                disabled, isLoading, readOnly, allowCollapse, isSelectRecursive,
                valueField, displayField, descriptionField,

                collapsedIconCls, expandedIconCls, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                renderer, onMouseEnter, onMouseLeave

            } = this.props,
            {collapsed} = this.state,

            checked = Calculation.isItemChecked(data, value, this.props),
            indeterminate = Calculation.isItemIndeterminate(data, value, this.props),

            isNodeLoading = data.isLoading || isLoading,
            isNodeDisabled = data.disabled || disabled || isNodeLoading,

            nodeClassName = classNames('tree-node', {
                [`theme-${theme}`]: theme,
                [data.className]: data.className
            }),
            nodeStyle = {
                ...data.style,
                paddingLeft: (depth + 1) * 20
            },

            childrenClassName = classNames('tree-node-children', {
                collapsed
            }),

            loadingIconPosition = (data.rightIconCls && !data.iconCls) ? 'right' : 'left';

        return (
            <div className="tree-node-wrapper">

                <TipProvider className='block'
                             text={data.tip}
                             position={data.tipPosition}>

                    <div className={nodeClassName}
                         style={nodeStyle}
                         disabled={isNodeDisabled}
                         readOnly={readOnly}
                         onClick={this.clickHandler}
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
                                              indeterminateIconCls={data.checkboxIndeterminateIconCls || checkboxIndeterminateIconCls}
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
                                    (
                                        data.iconCls ?
                                            <i className={`button-icon button-icon-left ${data.iconCls}`}
                                               aria-hidden="true"></i>
                                            :
                                            null
                                    )
                            }

                            {
                                data.itemRenderer && typeof data.itemRenderer === 'function' ?
                                    data.itemRenderer(data, index)
                                    :
                                    (
                                        renderer && typeof renderer === 'function' ?
                                            renderer(data, index)
                                            :
                                            (
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
                                            )
                                    )
                            }

                            {
                                isNodeLoading && loadingIconPosition === 'right' ?
                                    <CircularLoading className="button-icon button-icon-right button-loading-icon"
                                                     size="small"/>
                                    :
                                    (
                                        data.rightIconCls ?
                                            <i className={`button-icon button-icon-right ${data.rightIconCls}`}
                                               aria-hidden="true"></i>
                                            :
                                            null
                                    )
                            }
                        </div>

                    </div>
                </TipProvider>

                {
                    data.children && data.children.length > 0 ?
                        <div className={childrenClassName}>
                            {
                                data.children.map((item, index) =>
                                    <CascaderListItem {...this.props}
                                                      key={index}
                                                      data={item}
                                                      index={index}
                                                      depth={depth + 1}
                                                      path={
                                                  path ?
                                                      [...path, {index, node: item}]
                                                      :
                                                      [{index, node: item}]
                                              }/>
                                )
                            }
                        </div>
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

    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    data: PropTypes.object,
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