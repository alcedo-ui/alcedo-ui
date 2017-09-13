/**
 * @file GridItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import CircularLoading from '../CircularLoading';
import TipProvider from '../TipProvider';
import TouchRipple from '../TouchRipple';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './GridItem.css';

export default class GridItem extends Component {

    static Mode = {
        NORMAL: 'normal',
        CHECKBOX: 'checkbox',
        RADIO: 'radio'
    };

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

        const {mode} = this.props;

        switch (mode) {
            case GridItem.Mode.CHECKBOX:
                this.checkboxChangeHandler(!this.state.checked);
                return;
            case GridItem.Mode.RADIO:
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
                index, className, style, itemColWidth, theme, data, text, desc, iconCls, rightIconCls, tip, tipPosition,
                disabled, isLoading, disableTouchRipple, rippleDisplayCenter, mode, renderer, itemRenderer, readOnly,
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

                <div className={'grid-item-wrapper'}
                     style={itemColWidth ? {width: `${itemColWidth}%`} : null}>

                    <div className={'grid-item' + listItemClassName}
                         style={style}
                         disabled={disabled || isLoading}
                         readOnly={readOnly}
                         onTouchTap={this.touchTapHandler}
                         onMouseEnter={onMouseEnter}
                         onMouseLeave={onMouseLeave}>

                        {
                            mode === GridItem.Mode.CHECKBOX ?
                                <Checkbox className="grid-item-checkbox"
                                          value={checked}
                                          disabled={disabled || isLoading}/>
                                :
                                null
                        }

                        {
                            mode === GridItem.Mode.RADIO ?
                                <i className={'fa fa-check grid-item-checked' + (checked ? ' activated' : '')}
                                   aria-hidden="true"></i>
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
                </div>
            </TipProvider>
        );

    }
};

GridItem.propTypes = {

    index: PropTypes.number,

    /**
     * The CSS class name of the grid button.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the grid button.
     */
    style: PropTypes.object,

    /**
     * The theme of the grid button.
     */
    theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

    /**
     *
     */
    itemColWidth: PropTypes.number,

    /**
     *
     */
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),

    /**
     * The text value of the grid button. Type can be string or number.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The grid item's display text. Type can be string, number or bool.
     */
    text: PropTypes.any,

    /**
     * The desc value of the grid button. Type can be string or number.
     */
    desc: PropTypes.string,

    /**
     * If true, the grid button will be disabled.
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

    /**
     *
     */
    tip: PropTypes.string,

    /**
     *
     */
    tipPosition: PropTypes.oneOf(Util.enumerateValue(TipProvider.Position)),

    /**
     *
     */
    rippleDisplayCenter: PropTypes.bool,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    itemRenderer: PropTypes.func,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     *
     */
    checked: PropTypes.bool,

    /**
     *
     */
    mode: PropTypes.oneOf(Util.enumerateValue(GridItem.Mode)),

    /**
     *
     */
    readOnly: PropTypes.bool,

    /**
     * Callback function fired when a grid item touch-tapped.
     */
    onTouchTap: PropTypes.func,

    /**
     *
     */
    onSelect: PropTypes.func,

    /**
     *
     */
    onDeselect: PropTypes.func,

    /**
     *
     */
    onMouseEnter: PropTypes.func,

    /**
     *
     */
    onMouseLeave: PropTypes.func

};

GridItem.defaultProps = {

    index: 0,

    className: '',
    style: null,

    theme: Theme.DEFAULT,

    itemColWidth: 100,

    data: '',
    value: '',
    text: '',
    desc: '',

    disabled: false,
    isLoading: false,

    disableTouchRipple: false,

    iconCls: '',
    rightIconCls: '',

    tip: '',
    tipPosition: TipProvider.Position.BOTTOM,

    rippleDisplayCenter: false,

    checked: false,

    mode: GridItem.Mode.NORMAL,

    readOnly: false

};