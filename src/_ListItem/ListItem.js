/**
 * @file ListItem component
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

import Util from '../_vendors/Util';
import SelectMode from '../_statics/SelectMode';

export default class ListItem extends Component {

    static SelectMode = SelectMode;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            checked: props.checked
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

                index, className, style, theme, data, text, desc, iconCls, rightIconCls, tip, tipPosition,
                disabled, isLoading, disableTouchRipple, rippleDisplayCenter, renderer, itemRenderer, readOnly,

                selectTheme, selectMode, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                onMouseEnter, onMouseLeave

            } = this.props,
            {checked} = this.state,

            listItemClassName = (theme ? ` theme-${theme}` : '') + (checked ? ' activated' : '')
                + (className ? ' ' + className : ''),
            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <TipProvider className='block'
                         text={tip}
                         tipPosition={tipPosition}>

                <div className={'list-item' + listItemClassName}
                     style={style}
                     disabled={disabled || isLoading}
                     readOnly={readOnly}
                     onTouchTap={this.touchTapHandler}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>

                    {
                        selectMode === SelectMode.SINGLE_SELECT ?
                            <Radio className="list-item-checked"
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
                            <Checkbox className="list-item-checkbox"
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
                            <TouchRipple ref="touchRipple"
                                         className={disabled || isLoading ? 'hidden' : ''}
                                         displayCenter={rippleDisplayCenter}/>
                    }

                </div>
            </TipProvider>
        );

    }
};

ListItem.propTypes = {

    index: PropTypes.number,

    /**
     * The CSS class name of the list button.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the list button.
     */
    style: PropTypes.object,

    /**
     * The theme of the list item.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The theme of the list item select radio or checkbox.
     */
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),

    /**
     * The text value of the list button. Type can be string or number.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The list item's display text. Type can be string, number or bool.
     */
    text: PropTypes.any,

    /**
     * The desc value of the list button. Type can be string or number.
     */
    desc: PropTypes.string,

    /**
     * If true, the list button will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the button will be have loading effect.
     */
    isLoading: PropTypes.bool,

    /**
     * If true,the element's ripple effect will be disabled.
     */
    disableTouchRipple: PropTypes.bool,

    /**
     * Use this property to display an icon. It will display on the left.
     */
    iconCls: PropTypes.string,

    /**
     * Use this property to display an icon. It will display on the right.
     */
    rightIconCls: PropTypes.string,

    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(TipProvider.Position)),
    rippleDisplayCenter: PropTypes.bool,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    itemRenderer: PropTypes.func,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    checked: PropTypes.bool,
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),
    readOnly: PropTypes.bool,
    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    /**
     * Callback function fired when a list item touch-tapped.
     */
    onTouchTap: PropTypes.func,

    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func

};

ListItem.defaultProps = {

    index: 0,

    className: null,
    style: null,

    theme: Theme.DEFAULT,
    selectTheme: Theme.DEFAULT,

    data: null,
    value: null,
    text: null,
    desc: null,

    disabled: false,
    isLoading: false,

    disableTouchRipple: false,

    iconCls: null,
    rightIconCls: null,

    tip: null,
    tipPosition: TipProvider.Position.BOTTOM,

    rippleDisplayCenter: false,

    checked: false,

    selectMode: SelectMode.NORMAL,

    readOnly: false,

    radioUncheckedIconCls: 'fa fa-check',
    radioCheckedIconCls: 'fa fa-check',
    checkboxUncheckedIconCls: 'fa fa-square-o',
    checkboxCheckedIconCls: 'fa fa-check-square',
    checkboxIndeterminateIconCls: 'fa fa-minus-square'

};