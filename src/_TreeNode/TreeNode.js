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
import TouchRipple from '../TouchRipple';
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

        this.checkboxChangeHandler = ::this.checkboxChangeHandler;
        this.radioChangeHandler = ::this.radioChangeHandler;
        this.touchTapHandler = ::this.touchTapHandler;

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

                index, className, style, theme, data, text, desc, iconCls, rightIconCls, tip, tipPosition,
                disabled, isLoading, disableTouchRipple, rippleDisplayCenter, renderer, itemRenderer, readOnly,

                collapsedIconCls, expandedIconCls,
                selectTheme, selectMode, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                onMouseEnter, onMouseLeave, onTouchTap, onSelect, onDeselect

            } = this.props,
            {checked} = this.state,

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
                         disabled={disabled || isLoading}
                         readOnly={readOnly}
                         onTouchTap={this.touchTapHandler}
                         onMouseEnter={onMouseEnter}
                         onMouseLeave={onMouseLeave}>

                        {
                            children && children.length > 0 ?
                                <IconButton className="tree-node-collapse-icon"
                                            iconCls={collapsedIconCls}/>
                                :
                                null
                        }

                        {
                            selectMode === SelectMode.SINGLE_SELECT ?
                                <Radio className="tree-node-checked"
                                       theme={selectTheme}
                                       checked={checked}
                                       disabled={disabled || isLoading}
                                       uncheckedIconCls={radioUncheckedIconCls}
                                       checkedIconCls={radioCheckedIconCls}/>
                                :
                                null
                        }

                        {
                            selectMode === SelectMode.MULTI_SELECT ?
                                <Checkbox className="tree-node-checkbox"
                                          theme={selectTheme}
                                          checked={checked}
                                          disabled={disabled || isLoading}
                                          uncheckedIconCls={checkboxUncheckedIconCls}
                                          checkedIconCls={checkboxCheckedIconCls}
                                          indeterminateIconCls={checkboxIndeterminateIconCls}/>
                                :
                                null
                        }

                        {
                            isLoading && loadingIconPosition === 'left' ?
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
                            itemRenderer && typeof itemRenderer === 'function' ?
                                itemRenderer(data, index)
                                :
                                (
                                    renderer && typeof renderer === 'function' ?
                                        renderer(data, index)
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
                            isLoading && loadingIconPosition === 'right' ?
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

                        {
                            disableTouchRipple || readOnly ?
                                null
                                :
                                <TouchRipple ref="touchRipple"
                                             className={disabled || isLoading ? 'hidden' : ''}
                                             displayCenter={rippleDisplayCenter}/>
                        }

                    </div>
                </TipProvider>

                {
                    children && children.map((item, index) => {
                        return (
                            <TreeNode key={index}
                                      {...item}
                                      theme={item.theme || theme}
                                      selectTheme={item.selectTheme || selectTheme}
                                      disabled={disabled || item.disabled}
                                      isLoading={isLoading || item.isLoading}
                                      selectMode={selectMode}
                                      renderer={renderer}
                                      collapsedIconCls={item.collapsedIconCls || collapsedIconCls}
                                      expandedIconCls={item.expandedIconCls || expandedIconCls}
                                      radioUncheckedIconCls={item.radioUncheckedIconCls || radioUncheckedIconCls}
                                      radioCheckedIconCls={item.radioCheckedIconCls || radioCheckedIconCls}
                                      checkboxUncheckedIconCls={item.checkboxUncheckedIconCls || checkboxUncheckedIconCls}
                                      checkboxCheckedIconCls={item.checkboxCheckedIconCls || checkboxCheckedIconCls}
                                      checkboxIndeterminateIconCls={item.checkboxIndeterminateIconCls || checkboxIndeterminateIconCls}
                                      onTouchTap={onTouchTap}
                                      onSelect={onSelect}
                                      onDeselect={onDeselect}/>
                        );
                    })
                }

            </div>
        );

    }
};

TreeNode.propTypes = {

    index: PropTypes.number,

    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    themeGlobal: PropTypes.oneOf(Util.enumerateValue(Theme)),

    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectThemeGlobal: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),
    selectModeGlobal: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.any,
    desc: PropTypes.string,

    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    disableTouchRipple: PropTypes.bool,
    rippleDisplayCenter: PropTypes.bool,

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

    className: null,
    style: null,
    theme: Theme.DEFAULT,
    themeGlobal: Theme.DEFAULT,

    selectTheme: Theme.DEFAULT,
    selectThemeGlobal: Theme.DEFAULT,
    selectMode: SelectMode.NORMAL,
    selectModeGlobal: SelectMode.NORMAL,

    data: null,
    value: null,
    text: null,
    desc: null,

    disabled: false,
    isLoading: false,
    disableTouchRipple: false,
    rippleDisplayCenter: false,

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