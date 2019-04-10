/**
 * @file Dropdown component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import RaisedButton from '../RaisedButton';
import Popup from '../Popup';
import Theme from '../Theme';

import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import DropdownCalculation from '../_vendors/DropdownCalculation';

class Dropdown extends Component {

    static Theme = Theme;
    static Position = Position;
    static TipPosition = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            popupVisible: false,
            isAbove: false
        };

    }

    /**
     * public
     */
    startRipple = (e, props) => {
        this.refs.trigger && this.refs.trigger.startRipple(e, props);
    };

    /**
     * public
     */
    endRipple = () => {
        this.refs.trigger && this.refs.trigger.endRipple();
    };

    /**
     * public
     */
    triggerRipple = (e, props) => {
        this.refs.trigger && this.refs.trigger.triggerRipple(e, props);
    };

    /**
     * public
     */
    resetPopupPosition = () => {
        this.refs.popup && this.refs.popup.resetPosition();
    };

    /**
     * public
     */
    openPopup = e => {
        this.setState({
            popupVisible: true
        }, () => {
            const {onOpenPopup, onFocus} = this.props;
            onOpenPopup && onOpenPopup(e);
            onFocus && onFocus(e);
        });
    };

    /**
     * public
     */
    closePopup = e => {
        this.setState({
            popupVisible: false
        }, () => {
            const {onClosePopup, onBlur} = this.props;
            onClosePopup && onClosePopup(e);
            onBlur && onBlur(e);
        });
    };

    togglePopup = e => {

        const {onTriggerClick} = this.props,
            {popupVisible} = this.state;

        onTriggerClick && onTriggerClick(popupVisible, e);

        if (popupVisible) {
            this.closePopup(e);
        } else {
            this.openPopup(e);
        }

    };

    popupRenderHandler = popupEl => {

        if (this.props.position) {
            return;
        }

        const isAbove = DropdownCalculation.isAbove(this.dropdownEl, this.triggerEl, findDOMNode(popupEl));
        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

    };

    componentDidMount() {
        this.dropdownEl = this.refs.dropdown;
        this.triggerEl = findDOMNode(this.refs.trigger);
    }

    render() {

        const {

                children,

                className, triggerClassName, popupClassName, style, triggerStyle, popupStyle,
                theme, activatedTheme, popupTheme, position, iconCls, triggerValue, title, tip, tipPosition,
                rightIconCls, disabled, isLoading, disableTouchRipple, autoPopupWidth,
                resetPopPositionWait, parentEl, triggerEl,

                // events
                onMouseOver, onMouseOut

            } = this.props,
            {popupVisible, isAbove} = this.state,

            isAboveFinally = position === Position.TOP || position === Position.TOP_LEFT
                || position === Position.TOP_RIGHT || (!position && isAbove),

            dropdownClassName = classNames('dropdown', {
                activated: popupVisible,
                [className]: className
            }),
            buttonClassName = classNames('dropdown-trigger', isAboveFinally ? 'above' : 'blow', {
                activated: popupVisible,
                [triggerClassName]: triggerClassName
            }),
            dropdownPopupClassName = classNames('dropdown-popup', isAboveFinally ? 'above' : 'blow', {
                [popupClassName]: popupClassName
            }),
            dropdownPopupStyle = Object.assign({
                width: this.triggerEl && this.triggerEl.offsetWidth
            }, popupStyle);

        return (
            <div ref="dropdown"
                 className={dropdownClassName}
                 style={style}>

                <RaisedButton ref="trigger"
                              className={buttonClassName}
                              style={triggerStyle}
                              theme={popupVisible ? activatedTheme : theme}
                              value={triggerValue}
                              title={title}
                              tip={tip}
                              tipPosition={tipPosition}
                              triggerEl={triggerEl}
                              parentEl={parentEl}
                              iconCls={iconCls}
                              rightIconCls={`${rightIconCls} dropdown-trigger-icon`}
                              disabled={disabled}
                              isLoading={isLoading}
                              disableTouchRipple={disableTouchRipple}
                              onMouseOver={onMouseOver}
                              onMouseOut={onMouseOut}
                              onClick={this.togglePopup}/>

                <Popup ref="popup"
                       className={dropdownPopupClassName}
                       style={autoPopupWidth ? dropdownPopupStyle : popupStyle}
                       theme={popupTheme}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       parentEl={parentEl}
                       hasTriangle={false}
                       position={position ? position : (isAboveFinally ? Position.TOP_LEFT : Position.BOTTOM_LEFT)}
                       resetPositionWait={resetPopPositionWait}
                       onRender={this.popupRenderHandler}
                       onRequestClose={this.closePopup}>

                    {children}

                </Popup>

            </div>
        );

    }
}

Dropdown.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The class name of the trigger element.
     */
    triggerClassName: PropTypes.string,

    /**
     * The class name of the popup element.
     */
    popupClassName: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Override the styles of the trigger element.
     */
    triggerStyle: PropTypes.object,

    /**
     * Override the styles of the popup element.
     */
    popupStyle: PropTypes.object,

    /**
     * The theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The theme.
     */
    activatedTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The popup theme.
     */
    popupTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    parentEl: PropTypes.object,

    /**
     * The value of the dropDown trigger.
     */
    triggerValue: PropTypes.any,

    iconCls: PropTypes.string,
    rightIconCls: PropTypes.string,

    title: PropTypes.string,
    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true, the dropDown will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true, the dropDown will be loading.
     */
    isLoading: PropTypes.bool,

    disableTouchRipple: PropTypes.bool,

    /**
     * Whether following the trigger width or not.
     */
    autoPopupWidth: PropTypes.bool,

    /**
     * If true,the dropdown box automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    resetPopPositionWait: PropTypes.number,

    /**
     * Callback function fired when the popup is open.
     */
    onOpenPopup: PropTypes.func,

    /**
     * Callback function fired when the popup is close.
     */
    onClosePopup: PropTypes.func,

    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    onTriggerClick: PropTypes.func

};

Dropdown.defaultProps = {

    parentEl: document.body,

    theme: Theme.DEFAULT,
    activatedTheme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    rightIconCls: 'fas fa-angle-down',
    disabled: false,
    isLoading: false,
    disableTouchRipple: false,
    autoPopupWidth: true,
    autoClose: true,
    tipPosition: Position.BOTTOM,

    resetPopPositionWait: 250

};

export default Dropdown;
