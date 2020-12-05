/**
 * @file ListItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import CircularLoading from '../CircularLoading';
import TipProvider from '../TipProvider';
import TouchRipple from '../TouchRipple';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';
import SelectMode from '../_statics/SelectMode';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';

class ListItem extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    handleMultiSelectChange = checked => {
        if (checked) {
            this.props.onSelect?.();
        } else {
            this.props.onDeselect?.();
        }
    };

    handleSingleSelectChange = () => {
        if (!this.props.checked) {
            this.props.onSelect?.();
        }
    };

    handleClick = e => {

        const {disabled, isLoading, readOnly, autoSelect} = this.props;

        if (disabled || isLoading || readOnly) {
            return;
        }

        this.props.onClick?.(e);

        if (!autoSelect) {
            return;
        }

        switch (this.props.selectMode) {
            case SelectMode.MULTI_SELECT:
                return this.handleMultiSelectChange(!this.props.checked);
            case SelectMode.SINGLE_SELECT:
                return this.handleSingleSelectChange();
            default:
                return;
        }

    };

    handleRadioCheck = () => {
        this.handleSingleSelectChange();
    };

    handleCheckboxCheck = () => {
        this.handleMultiSelectChange(true);
    };

    handleCheckboxUncheck = () => {
        this.handleMultiSelectChange(false);
    };

    /* eslint-disable complexity */
    render() {

        const {

                index, className, style, theme, activatedTheme, data, text, desc, title, iconCls, rightIconCls,
                tipClassName, tip, tipPosition, disabled, isLoading, disableTouchRipple, rippleDisplayCenter, readOnly,
                renderer, itemRenderer,

                checked, selectTheme, selectMode, indeterminateCallback, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                onMouseEnter, onMouseLeave,
                parentEl

            } = this.props,

            indeterminated = indeterminateCallback && indeterminateCallback(data) || false,
            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <TipProvider className={tipClassName}
                         tipContent={tip}
                         parentEl={parentEl}
                         position={tipPosition}>

                <div className={classNames('list-item', {
                    [`theme-${theme}`]: !checked && theme,
                    [`theme-${activatedTheme}`]: checked && activatedTheme,
                    activated: checked,
                    indeterminated,
                    [className]: className
                })}
                     style={style}
                     disabled={disabled || isLoading}
                     readOnly={readOnly}
                     title={title}
                     onClick={this.handleClick}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>

                    {
                        selectMode === SelectMode.SINGLE_SELECT && (radioUncheckedIconCls || radioCheckedIconCls) ?
                            <Radio className="list-item-select"
                                   theme={selectTheme}
                                   checked={checked}
                                   disabled={disabled || isLoading}
                                   uncheckedIconCls={radioUncheckedIconCls}
                                   checkedIconCls={radioCheckedIconCls}
                                   disableTouchRipple={true}
                                   onCheck={this.handleRadioCheck}/>
                            :
                            null
                    }

                    {
                        selectMode === SelectMode.MULTI_SELECT ?
                            <Checkbox className="list-item-select"
                                      theme={selectTheme}
                                      checked={checked}
                                      indeterminate={indeterminated}
                                      disabled={disabled || isLoading}
                                      uncheckedIconCls={checkboxUncheckedIconCls}
                                      checkedIconCls={checkboxCheckedIconCls}
                                      indeterminateIconCls={checkboxIndeterminateIconCls}
                                      disableTouchRipple={true}
                                      onCheck={this.handleCheckboxCheck}
                                      onUncheck={this.handleCheckboxUncheck}/>
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
                            <TouchRipple className={disabled || isLoading ? 'hidden' : ''}
                                         displayCenter={rippleDisplayCenter}/>
                    }

                </div>
            </TipProvider>
        );

    }
}

ListItem.propTypes = {

    index: PropTypes.number,

    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    activatedTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    disableTouchRipple: PropTypes.bool,
    rippleDisplayCenter: PropTypes.bool,
    checked: PropTypes.bool,
    readOnly: PropTypes.bool,
    parentEl: PropTypes.object,

    iconCls: PropTypes.string,
    rightIconCls: PropTypes.string,

    tipClassName: PropTypes.string,
    tip: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Position)),

    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    itemRenderer: PropTypes.func,
    renderer: PropTypes.func,
    indeterminateCallback: PropTypes.func,

    autoSelect: PropTypes.bool,

    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func

};

ListItem.defaultProps = {

    index: 0,

    theme: Theme.DEFAULT,
    activatedTheme: Theme.DEFAULT,

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

    autoSelect: true

};

export default ListItem;
