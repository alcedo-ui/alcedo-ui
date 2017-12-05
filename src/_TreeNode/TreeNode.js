/**
 * @file TreeNode component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import Radio from '../Radio';
import CircularLoading from '../CircularLoading';
import TipProvider from '../TipProvider';
import Theme from '../Theme';
import IconButton from '../IconButton';

import Util from '../_vendors/Util';
import Position from '../_statics/Position';
import SelectMode from '../_statics/SelectMode';

export default class TreeNode extends Component {

    static SelectMode = SelectMode;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            checked: props.checked,
            collapsed: false
        };

        this.toggleTreeNode = ::this.toggleTreeNode;
        this.checkboxChangeHandler = ::this.checkboxChangeHandler;
        this.radioChangeHandler = ::this.radioChangeHandler;
        this.touchTapHandler = ::this.touchTapHandler;

    }

    toggleTreeNode() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    checkboxChangeHandler(checked) {
        this.setState({
            checked
        }, () => {

            const {onSelect, onDeselect} = this.props;

            if (checked) {
                onSelect && onSelect();
            } else {
                onDeselect && onDeselect();
            }

        });
    }

    radioChangeHandler() {

        const {checked} = this.state;

        if (!checked) {
            this.setState({
                checked: true
            }, () => {
                const {onSelect} = this.props;
                onSelect && onSelect();
            });
        }

    }

    touchTapHandler(e) {

        e.preventDefault();

        const {disabled, isLoading, readOnly} = this.props;

        if (disabled || isLoading || readOnly) {
            return;
        }

        const {onTouchTap} = this.props;
        onTouchTap && onTouchTap(e);

        const {selectMode} = this.props;

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                this.checkboxChangeHandler(!this.state.checked);
                return;
            case SelectMode.SINGLE_SELECT:
                this.radioChangeHandler();
                return;
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.state.checked) {
            this.setState({
                checked: nextProps.checked
            });
        }
    }

    render() {

        const {

                children,

                index, depth, className, style, theme, themeGlobal, data, text, desc, iconCls, rightIconCls,
                tip, tipPosition, disabled, disabledGlobal, isLoading, isLoadingGlobal, renderer, rendererGlobal,
                readOnly, selectTheme, selectThemeGlobal, selectMode,

                collapsedIconCls, expandedIconCls, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,
                collapsedIconClsGlobal, expandedIconClsGlobal, radioUncheckedIconClsGlobal, radioCheckedIconClsGlobal,
                checkboxUncheckedIconClsGlobal, checkboxCheckedIconClsGlobal, checkboxIndeterminateIconClsGlobal,

                onMouseEnter, onMouseLeave, onTouchTap, onSelect, onDeselect

            } = this.props,
            {checked, collapsed} = this.state,

            isNodeDisabled = disabled || disabledGlobal || isLoading || isLoadingGlobal,

            listItemClassName = (theme ? ` theme-${theme}` : '') + (checked ? ' activated' : '')
                + (className ? ' ' + className : ''),
            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <div className="tree-node-wrapper">

                <TipProvider className='block'
                             text={tip}
                             tipPosition={tipPosition}>

                    <div className={'tree-node' + listItemClassName}
                         style={style}
                         disabled={isNodeDisabled}
                         readOnly={readOnly}
                         onTouchTap={this.touchTapHandler}
                         onMouseEnter={onMouseEnter}
                         onMouseLeave={onMouseLeave}>

                        {
                            children && children.length > 0 ?
                                <IconButton className="tree-node-collapse-icon"
                                            iconCls={collapsed ?
                                                collapsedIconCls || collapsedIconClsGlobal
                                                :
                                                expandedIconCls || expandedIconClsGlobal}
                                            onTouchTap={this.toggleTreeNode}/>
                                :
                                null
                        }

                        {
                            selectMode === SelectMode.SINGLE_SELECT ?
                                <Radio className="tree-node-checked"
                                       theme={selectTheme || selectThemeGlobal}
                                       checked={checked}
                                       disabled={isNodeDisabled}
                                       uncheckedIconCls={radioUncheckedIconCls || radioUncheckedIconClsGlobal}
                                       checkedIconCls={radioCheckedIconCls || radioCheckedIconClsGlobal}/>
                                :
                                null
                        }

                        {
                            selectMode === SelectMode.MULTI_SELECT ?
                                <Checkbox className="tree-node-checkbox"
                                          theme={selectTheme || selectThemeGlobal}
                                          checked={checked}
                                          disabled={isNodeDisabled}
                                          uncheckedIconCls={checkboxUncheckedIconCls || checkboxUncheckedIconClsGlobal}
                                          checkedIconCls={checkboxCheckedIconCls || checkboxCheckedIconClsGlobal}
                                          indeterminateIconCls={checkboxIndeterminateIconCls || checkboxIndeterminateIconClsGlobal}/>
                                :
                                null
                        }

                        {
                            (isLoading || isLoadingGlobal) && loadingIconPosition === 'left' ?
                                <div className="button-icon button-icon-left">
                                    <CircularLoading className="button-loading-icon"
                                                     size="small"/>
                                </div>
                                :
                                (
                                    iconCls ?
                                        <i className={`button-icon button-icon-left ${iconCls}`}
                                           aria-hidden="true"></i>
                                        :
                                        null
                                )
                        }

                        {
                            renderer && typeof renderer === 'function' ?
                                renderer(data, index)
                                :
                                (
                                    rendererGlobal && typeof rendererGlobal === 'function' ?
                                        rendererGlobal(data, index)
                                        :
                                        (
                                            desc ?
                                                <div className="tree-node-content">
                                                    <span className="tree-node-content-value">
                                                        {text}
                                                    </span>
                                                    <span className="tree-node-content-desc">
                                                        {desc}
                                                    </span>
                                                </div>
                                                :
                                                text
                                        )
                                )
                        }

                        {
                            (isLoading || isLoadingGlobal) && loadingIconPosition === 'right' ?
                                <CircularLoading className="button-icon button-icon-right button-loading-icon"
                                                 size="small"/>
                                :
                                (
                                    rightIconCls ?
                                        <i className={`button-icon button-icon-right ${rightIconCls}`}
                                           aria-hidden="true"></i>
                                        :
                                        null
                                )
                        }

                    </div>
                </TipProvider>

                <div className={'tree-node-children' + (collapsed ? ' collapsed' : '')}>
                    {
                        children && children.map((item, index) => {
                            return (
                                <TreeNode key={index}
                                          {...item}
                                          index={index}
                                          depth={depth + 1}
                                          themeGlobal={themeGlobal}
                                          selectThemeGlobal={selectThemeGlobal}
                                          disabledGlobal={disabledGlobal}
                                          isLoadingGlobal={isLoadingGlobal}
                                          rendererGlobal={rendererGlobal}
                                          collapsedIconClsGlobal={collapsedIconClsGlobal}
                                          expandedIconClsGlobal={expandedIconClsGlobal}
                                          radioUncheckedIconClsGlobal={radioUncheckedIconClsGlobal}
                                          radioCheckedIconClsGlobal={radioCheckedIconClsGlobal}
                                          checkboxUncheckedIconClsGlobal={checkboxUncheckedIconClsGlobal}
                                          checkboxCheckedIconClsGlobal={checkboxCheckedIconClsGlobal}
                                          checkboxIndeterminateIconClsGlobal={checkboxIndeterminateIconClsGlobal}
                                          onTouchTap={onTouchTap}
                                          onSelect={onSelect}
                                          onDeselect={onDeselect}/>
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

    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    themeGlobal: PropTypes.oneOf(Util.enumerateValue(Theme)),

    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectThemeGlobal: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.any,
    desc: PropTypes.string,

    disabled: PropTypes.bool,
    disabledGlobal: PropTypes.bool,
    isLoading: PropTypes.bool,
    isLoadingGlobal: PropTypes.bool,

    checked: PropTypes.bool,
    readOnly: PropTypes.bool,

    iconCls: PropTypes.string,
    rightIconCls: PropTypes.string,

    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Position)),

    renderer: PropTypes.func,
    rendererGlobal: PropTypes.func,

    collapsedIconCls: PropTypes.string,
    expandedIconCls: PropTypes.string,
    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,
    collapsedIconClsGlobal: PropTypes.string,
    expandedIconClsGlobal: PropTypes.string,
    radioUncheckedIconClsGlobal: PropTypes.string,
    radioCheckedIconClsGlobal: PropTypes.string,
    checkboxUncheckedIconClsGlobal: PropTypes.string,
    checkboxCheckedIconClsGlobal: PropTypes.string,
    checkboxIndeterminateIconClsGlobal: PropTypes.string,

    onTouchTap: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func

};

TreeNode.defaultProps = {

    index: 0,
    depth: 0,

    className: null,
    style: null,
    theme: Theme.DEFAULT,
    themeGlobal: Theme.DEFAULT,

    selectTheme: Theme.DEFAULT,
    selectThemeGlobal: Theme.DEFAULT,
    selectMode: SelectMode.NORMAL,

    data: null,
    value: null,
    text: null,
    desc: null,

    disabled: false,
    isLoading: false,

    checked: false,
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
    checkboxIndeterminateIconCls: 'fa fa-minus-square',
    collapsedIconClsGlobal: 'fa fa-caret-right',
    expandedIconClsGlobal: 'fa fa-caret-down',
    radioUncheckedIconClsGlobal: 'fa fa-check',
    radioCheckedIconClsGlobal: 'fa fa-check',
    checkboxUncheckedIconClsGlobal: 'fa fa-square-o',
    checkboxCheckedIconClsGlobal: 'fa fa-check-square',
    checkboxIndeterminateIconClsGlobal: 'fa fa-minus-square'

};