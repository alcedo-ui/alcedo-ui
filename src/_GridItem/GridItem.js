import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import CircularLoading from '../CircularLoading';
import TipContainer from '../TipContainer';
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

    constructor(props) {

        super(props);

        this.state = {
            checked: props.checked
        };

        this.checkboxChangeHandler = this::this.checkboxChangeHandler;
        this.radioChangeHandler = this::this.radioChangeHandler;
        this.clickHandler = this::this.clickHandler;
        this.startRipple = this::this.startRipple;
        this.endRipple = this::this.endRipple;
        this.mouseEnterHandler = this::this.mouseEnterHandler;
        this.mouseLeaveHandler = this::this.mouseLeaveHandler;

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

    clickHandler(e) {

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

    startRipple(e) {
        this.refs.touchRipple.addRipple(e);
    }

    endRipple() {
        this.refs.touchRipple.removeRipple();
    }

    mouseEnterHandler(e) {
        const {onMouseEnter} = this.props;
        onMouseEnter && onMouseEnter(e);
    }

    mouseLeaveHandler(e) {
        const {onMouseLeave} = this.props;
        onMouseLeave && onMouseLeave(e);
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
                disabled, isLoading, disableTouchRipple, rippleDisplayCenter, mode, renderer, itemRenderer, readOnly
            } = this.props,
            {checked} = this.state,

            listItemClassName = (theme ? ` theme-${theme}` : '') + (checked ? ' activated' : '')
                + (className ? ' ' + className : ''),
            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <TipContainer className='block'
                          text={tip}
                          tipPosition={tipPosition}>

                <div className={'grid-item-wrapper'}
                     style={itemColWidth ? {width: `${itemColWidth}%`} : null}>

                    <div className={'grid-item' + listItemClassName}
                         style={style}
                         disabled={disabled || isLoading}
                         readOnly={readOnly}
                         onClick={this.clickHandler}
                         onMouseEnter={this.mouseEnterHandler}
                         onMouseLeave={this.mouseLeaveHandler}>

                        {
                            mode === GridItem.Mode.CHECKBOX ?
                                <Checkbox className="grid-item-checkbox"
                                          value={checked}/>
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
                                <CircularLoading className="button-icon button-icon-left button-loading-icon"
                                                 size="small"/>
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
            </TipContainer>
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
    tipPosition: PropTypes.oneOf(Util.enumerateValue(TipContainer.Position)),

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
    tipPosition: TipContainer.Position.BOTTOM,

    rippleDisplayCenter: false,

    checked: false,

    mode: GridItem.Mode.NORMAL,

    readOnly: false

};