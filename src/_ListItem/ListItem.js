import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import CircularLoading from '../CircularLoading';
import Tip from '../Tip';
import TouchRipple from '../TouchRipple';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './ListItem.css';

export default class ListItem extends Component {

    constructor(props) {

        super(props);

        this.state = {
            tipVisible: false,
            triggerEl: null,
            checked: props.checked
        };

        this.checkboxChangeHandle = this::this.checkboxChangeHandle;
        this.clickHandle = this::this.clickHandle;
        this.startRipple = this::this.startRipple;
        this.endRipple = this::this.endRipple;
        this.hideTip = this::this.hideTip;
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

    clickHandle(e) {

        const {disabled, isLoading} = this.props;

        if (disabled || isLoading) {
            return;
        }

        const {mode, onTouchTap} = this.props,
            callback = () => {
                onTouchTap && onTouchTap(e);
            };

        if (mode === ListItem.Mode.NORMAL) {
            callback();
            return;
        }

        this.checkboxChangeHandle(!this.state.checked, callback);

    }

    startRipple(e) {
        this.refs.touchRipple.addRipple(e);
    }

    endRipple() {
        this.refs.touchRipple.removeRipple();
    }

    mouseEnterHandle(e) {

        const {onMouseEnter} = this.props;

        this.setState({
            tipVisible: true,
            triggerEl: e.currentTarget
        }, () => {
            onMouseEnter && onMouseEnter();
        });

    }

    mouseLeaveHandle() {
        const {onMouseLeave} = this.props;
        onMouseLeave && onMouseLeave();
    }

    hideTip() {
        this.setState({
            tipVisible: false
        });
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
                disabled, isLoading, disableTouchRipple, rippleDisplayCenter, mode, renderer
            } = this.props,
            {tipVisible, triggerEl, checked} = this.state,
            listItemClassName = (theme ? ` theme-${theme}` : '') + (className ? ' ' + className : ''),
            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <div className={'list-item' + listItemClassName}
                 style={style}
                 disabled={disabled || isLoading}
                 onClick={this.clickHandle}
                 onMouseEnter={this.mouseEnterHandle}
                 onMouseLeave={this.mouseLeaveHandle}>

                {
                    mode === ListItem.Mode.CHECKBOX ?
                        <Checkbox className="list-item-checkbox"
                                  value={checked}
                                  onChange={this.checkboxChangeHandle}/>
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
                    tip ?
                        <Tip text={tip}
                             visible={tipVisible}
                             triggerEl={triggerEl}
                             position={tipPosition}
                             onRequestClose={this.hideTip}/>
                        :
                        null
                }

                {
                    disableTouchRipple ?
                        null
                        :
                        <TouchRipple ref="touchRipple"
                                     className={disabled || isLoading ? 'hidden' : ''}
                                     displayCenter={rippleDisplayCenter}/>
                }

            </div>
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
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Tip.Position)),

    /**
     *
     */
    rippleDisplayCenter: PropTypes.bool,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * Callback function fired when a list item touch-tapped.
     */
    onTouchTap: PropTypes.func,

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
    tipPosition: Tip.Position.BOTTOM,

    rippleDisplayCenter: false,

    checked: false,

    mode: ListItem.Mode.NORMAL

};