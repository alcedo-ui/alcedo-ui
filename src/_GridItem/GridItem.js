/**
 * @file GridItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Checkbox from '../Checkbox';
import Radio from '../Radio';
import CircularLoading from '../CircularLoading';
import TipProvider from '../TipProvider';
import TouchRipple from '../TouchRipple';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Position from '../_statics/Position';
import SelectMode from '../_statics/SelectMode';

class GridItem extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.checkboxChangeHandler = ::this.checkboxChangeHandler;
        this.radioChangeHandler = ::this.radioChangeHandler;
        this.touchTapHandler = ::this.touchTapHandler;

    }

    checkboxChangeHandler(checked) {

        const {onSelect, onDeselect} = this.props;

        if (checked) {
            onSelect && onSelect();
        } else {
            onDeselect && onDeselect();
        }

    }

    radioChangeHandler() {
        if (!this.props.checked) {
            const {onSelect} = this.props;
            onSelect && onSelect();
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

        switch (this.props.selectMode) {
            case SelectMode.MULTI_SELECT:
                this.checkboxChangeHandler(!this.props.checked);
                return;
            case SelectMode.SINGLE_SELECT:
                this.radioChangeHandler();
                return;
        }

    }

    render() {

        const {

                index, className, style, theme, data, text, desc, iconCls, rightIconCls, tip, tipPosition,
                disabled, isLoading, disableTouchRipple, rippleDisplayCenter, renderer, itemRenderer, readOnly,
                col,

                checked, selectTheme, selectMode, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                onMouseEnter, onMouseLeave

            } = this.props,

            listItemClassName = classNames('grid-item', {
                [`theme-${theme}`]: theme,
                activated: checked,
                [className]: className
            }),

            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <div className="grid-item-wrapper"
                 style={col ? {width: `${100 / col}%`} : null}>

                <TipProvider className='block'
                             text={tip}
                             position={tipPosition}>
                    <div className={listItemClassName}
                         style={style}
                         disabled={disabled || isLoading}
                         readOnly={readOnly}
                         onTouchTap={this.touchTapHandler}
                         onMouseEnter={onMouseEnter}
                         onMouseLeave={onMouseLeave}>

                        {
                            selectMode === SelectMode.SINGLE_SELECT && (radioUncheckedIconCls || radioCheckedIconCls) ?
                                <Radio className="grid-item-select"
                                       theme={selectTheme}
                                       checked={checked}
                                       disabled={disabled || isLoading}
                                       uncheckedIconCls={radioUncheckedIconCls}
                                       checkedIconCls={radioCheckedIconCls}
                                       disableTouchRipple={true}/>
                                :
                                null
                        }

                        {
                            selectMode === SelectMode.MULTI_SELECT ?
                                <Checkbox className="grid-item-select"
                                          theme={selectTheme}
                                          checked={checked}
                                          disabled={disabled || isLoading}
                                          uncheckedIconCls={checkboxUncheckedIconCls}
                                          checkedIconCls={checkboxCheckedIconCls}
                                          indeterminateIconCls={checkboxIndeterminateIconCls}
                                          disableTouchRipple={true}/>
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
                                                <div className="grid-item-content">
                                                    <div className="grid-item-content-value">
                                                        {text}
                                                    </div>
                                                    <div className="grid-item-content-desc">
                                                        {desc}
                                                    </div>
                                                </div>
                                                :
                                                <div className="grid-item-content">
                                                    {text}
                                                </div>
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

            </div>
        );

    }
}

GridItem.propTypes = {

    index: PropTypes.number,

    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

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

    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    col: PropTypes.number,

    itemRenderer: PropTypes.func,
    renderer: PropTypes.func,

    onTouchTap: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func

};

GridItem.defaultProps = {

    index: 0,

    theme: Theme.DEFAULT,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,

    disabled: false,
    isLoading: false,
    disableTouchRipple: false,
    rippleDisplayCenter: false,
    checked: false,
    readOnly: false,

    tipPosition: Position.BOTTOM,

    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square',

    col: 3

};

export default GridItem;