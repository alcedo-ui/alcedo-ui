/**
 * @file TreeNode component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CircularLoading from '../CircularLoading';
import TipProvider from '../TipProvider';
import Theme from '../Theme';
import IconButton from '../IconButton';
import Radio from '../Radio';
import Checkbox from '../Checkbox';

import Util from '../_vendors/Util';
import Calculation from '../_vendors/Calculation';
import Position from '../_statics/Position';
import SelectMode from '../_statics/SelectMode';

export default class TreeNode extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            collapsed: false
        };

        this.toggleTreeNode = ::this.toggleTreeNode;
        this.touchTapHandler = ::this.touchTapHandler;

    }

    toggleTreeNode() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    checkboxChangeHandler() {

    }

    radioChangeHandler() {
        const {data, onSelect} = this.props;
        onSelect && onSelect(data);
    }

    touchTapHandler(e) {

        e.preventDefault();

        const {index, data, disabled, isLoading, readOnly} = this.props;

        if (disabled || isLoading || readOnly || data.disabled || data.isLoading || data.readOnly) {
            return;
        }

        const {onTouchTap} = this.props;
        onTouchTap && onTouchTap(data, index, e);

        const {selectMode} = this.props;

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                this.checkboxChangeHandler();
                return;
            case SelectMode.SINGLE_SELECT:
                this.radioChangeHandler();
                return;
        }

    }

    render() {

        const {

                index, depth, theme, selectTheme, selectMode, data, disabled, isLoading, readOnly,

                collapsedIconCls, expandedIconCls, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                renderer, onMouseEnter, onMouseLeave

            } = this.props,
            {checked, collapsed} = this.state,

            isNodeLoading = data.isLoading || isLoading,
            isNodeDisabled = data.disabled || disabled || isNodeLoading,

            nodeClassName = (theme ? ` theme-${theme}` : '') + (data.className ? ' ' + data.className : ''),
            nodeStyle = {
                ...data.style,
                paddingLeft: (depth + 1) * 20
            },

            loadingIconPosition = (data.rightIconCls && !data.iconCls) ? 'right' : 'left';

        return (
            <div className="tree-node-wrapper">

                <TipProvider className='block'
                             text={data.tip}
                             tipPosition={data.tipPosition}>

                    <div className={'tree-node' + nodeClassName}
                         style={nodeStyle}
                         disabled={isNodeDisabled}
                         readOnly={readOnly}
                         onTouchTap={this.touchTapHandler}
                         onMouseEnter={onMouseEnter}
                         onMouseLeave={onMouseLeave}>

                        <div className="tree-node-inner">

                            {
                                data.children && data.children.length > 0 ?
                                    <IconButton className="tree-node-collapse-icon"
                                                iconCls={collapsed ?
                                                    data.collapsedIconCls || collapsedIconCls
                                                    :
                                                    data.expandedIconCls || expandedIconCls}
                                                onTouchTap={this.toggleTreeNode}/>
                                    :
                                    null
                            }

                            {
                                selectMode === SelectMode.SINGLE_SELECT ?
                                    <Radio className="tree-node-checked"
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
                                    <Checkbox className="tree-node-checkbox"
                                              theme={selectTheme}
                                              checked={checked}
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
                                                data.desc ?
                                                    <div className="tree-node-content">
                                                    <span className="tree-node-content-value">
                                                        {data.text}
                                                    </span>
                                                        <span className="tree-node-content-desc">
                                                        {data.desc}
                                                    </span>
                                                    </div>
                                                    :
                                                    data.text
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

                <div className={'tree-node-children' + (collapsed ? ' collapsed' : '')}>
                    {
                        data.children && data.children.map((item, index) => {
                            return (
                                <TreeNode {...this.props}
                                          key={index}
                                          data={item}
                                          index={index}
                                          depth={depth + 1}/>
                            );
                        })
                    }
                </div>

            </div>
        );

    }
};

TreeNode.propTypes = {

    index: PropTypes.number,
    depth: PropTypes.number,

    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    data: PropTypes.object,
    value: PropTypes.any,

    idField: PropTypes.string,
    valueField: PropTypes.string,
    displayField: PropTypes.string,
    descriptionField: PropTypes.string,

    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    readOnly: PropTypes.bool,

    renderer: PropTypes.func,

    collapsedIconCls: PropTypes.string,
    expandedIconCls: PropTypes.string,
    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    onTouchTap: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func

};

TreeNode.defaultProps = {

    index: 0,
    depth: 0,

    theme: Theme.DEFAULT,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.NORMAL,

    data: null,
    value: null,

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    disabled: false,
    isLoading: false,
    readOnly: false,

    iconCls: null,
    rightIconCls: null,

    tip: null,
    tipPosition: Position.BOTTOM,

    collapsedIconCls: 'fa fa-caret-right',
    expandedIconCls: 'fa fa-caret-down',
    radioUncheckedIconCls: 'fa fa-check',
    radioCheckedIconCls: 'fa fa-check',
    checkboxUncheckedIconCls: 'fa fa-square-o',
    checkboxCheckedIconCls: 'fa fa-check-square',
    checkboxIndeterminateIconCls: 'fa fa-minus-square'

};