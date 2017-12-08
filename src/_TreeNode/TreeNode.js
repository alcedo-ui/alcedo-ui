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

import Util from '../_vendors/Util';
import Position from '../_statics/Position';

export default class TreeNode extends Component {

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
                readOnly,

                collapsedIconCls, expandedIconCls,
                collapsedIconClsGlobal, expandedIconClsGlobal,

                onMouseEnter, onMouseLeave, onTouchTap, onSelect, onDeselect

            } = this.props,
            {checked, collapsed} = this.state,

            isNodeDisabled = disabled || disabledGlobal || isLoading || isLoadingGlobal,

            nodeClassName = (theme ? ` theme-${theme}` : '') + (checked ? ' activated' : '')
                + (className ? ' ' + className : ''),
            nodeStyle = {
                ...style,
                paddingLeft: (depth + 1) * 20
            },

            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <div className="tree-node-wrapper">

                <TipProvider className='block'
                             text={tip}
                             tipPosition={tipPosition}>

                    <div className={'tree-node' + nodeClassName}
                         style={nodeStyle}
                         disabled={isNodeDisabled}
                         readOnly={readOnly}
                         onTouchTap={this.touchTapHandler}
                         onMouseEnter={onMouseEnter}
                         onMouseLeave={onMouseLeave}>

                        <div className="tree-node-inner">

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
                                          disabledGlobal={disabledGlobal}
                                          isLoadingGlobal={isLoadingGlobal}
                                          rendererGlobal={rendererGlobal}
                                          collapsedIconClsGlobal={collapsedIconClsGlobal}
                                          expandedIconClsGlobal={expandedIconClsGlobal}
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
    collapsedIconClsGlobal: PropTypes.string,
    expandedIconClsGlobal: PropTypes.string,

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
    collapsedIconClsGlobal: 'fa fa-caret-right',
    expandedIconClsGlobal: 'fa fa-caret-down'

};