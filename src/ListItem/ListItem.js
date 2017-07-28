import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import CircularLoading from '../CircularLoading';
import TipContainer from '../TipContainer';
import TouchRipple from '../TouchRipple';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './ListItem.css';

export default class ListItem extends Component {

    constructor(props) {

        super(props);

        this.state = {
            checked: props.checked
        };

        this.checkboxChangeHandle = this::this.checkboxChangeHandle;
        this.clickHandle = this::this.clickHandle;
        this.startRipple = this::this.startRipple;
        this.endRipple = this::this.endRipple;
        this.mouseEnterHandle = this::this.mouseEnterHandle;
        this.mouseLeaveHandle = this::this.mouseLeaveHandle;

    }

    checkboxChangeHandle(checked, callback) {
        this.setState({
            checked
        }, () => {

            const {onSelect, onDeselect} = this.props;

            if (checked) {
                onSelect && onSelect();
            } else {
                onDeselect && onDeselect();
            }

            callback && typeof callback === 'function' && callback();

        });
    }

    radioChangeHandle(callback) {

        const {checked} = this.state;

        if (!checked) {
            this.setState({
                checked: true
            }, () => {
                const {onSelect} = this.props;
                onSelect && onSelect();
                callback && typeof callback === 'function' && callback();
            });
        } else {
            callback && typeof callback === 'function' && callback();
        }

    }

    clickHandle(e) {

        const {disabled, isLoading, readOnly} = this.props;

        if (disabled || isLoading || readOnly) {
            return;
        }

        const {mode} = this.props,
            callback = () => {
                const {onTouchTap} = this.props;
                onTouchTap && onTouchTap(e);
            };

        switch (mode) {
            case ListItem.Mode.CHECKBOX:
                this.checkboxChangeHandle(!this.state.checked, callback);
                return;
            case ListItem.Mode.RADIO:
                this.radioChangeHandle(callback);
                return;
            case ListItem.Mode.NORMAL:
                callback();
                return;
        }

    }

    startRipple(e) {
        this.refs.touchRipple.addRipple(e);
    }

    endRipple() {
        this.refs.touchRipple.removeRipple();
    }

    mouseEnterHandle(e) {
        const {onMouseEnter} = this.props;
        onMouseEnter && onMouseEnter(e);
    }

    mouseLeaveHandle(e) {
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
                className, style, theme, text, desc, iconCls, rightIconCls, tip, tipPosition,
                disabled, isLoading, disableTouchRipple, rippleDisplayCenter, mode, renderer, readOnly
            } = this.props,
            {checked} = this.state,
            listItemClassName = (theme ? ` theme-${theme}` : '') + (checked ? ' activated' : '')
                + (className ? ' ' + className : ''),
            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <TipContainer className='block'
                          text={tip}
                          tipPosition={tipPosition}>

                <div className={'list-item' + listItemClassName}
                     style={style}
                     disabled={disabled || isLoading}
                     readOnly={readOnly}
                     onClick={this.clickHandle}
                     onMouseEnter={this.mouseEnterHandle}
                     onMouseLeave={this.mouseLeaveHandle}>

                    {
                        mode === ListItem.Mode.CHECKBOX ?
                            <Checkbox className="list-item-checkbox"
                                      value={checked}/>
                            :
                            null
                    }

                    {
                        mode === ListItem.Mode.RADIO ?
                            <i className={'fa fa-check list-item-checked' + (checked ? ' activated' : '')}
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
                        renderer && typeof renderer === 'function' ?
                            renderer(this.props)
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
            </TipContainer>
        );

    }
};

ListItem.Mode = {
    NORMAL: 'normal',
    CHECKBOX: 'checkbox',
    RADIO: 'radio'
};

ListItem.propTypes = {

    /**
     * The CSS class name of the list button.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the list button.
     */
    style: PropTypes.object,

    /**
     * The theme of the list button.
     */
    theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

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
    renderer: PropTypes.func,

    /**
     *
     */
    checked: PropTypes.bool,

    /**
     *
     */
    mode: PropTypes.oneOf(Util.enumerateValue(ListItem.Mode)),

    /**
     *
     */
    readOnly: PropTypes.bool,

    /**
     * Callback function fired when a list item touch-tapped.
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

ListItem.defaultProps = {

    className: '',
    style: null,

    theme: Theme.DEFAULT,

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

    mode: ListItem.Mode.NORMAL,

    readOnly: false

};