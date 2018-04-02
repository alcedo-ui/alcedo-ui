/**
 * @file Dropdown component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import RaisedButton from '../RaisedButton';
import Popup from '../Popup';
import Theme from '../Theme';

import PureRender from '../_vendors/PureRender';
import Util from '../_vendors/Util';
import DropdownCalculation from '../_vendors/DropdownCalculation';

@PureRender
class Dropdown extends Component {

    static Theme = Theme;
    static Position = {
        LEFT: 'LEFT',
        RIGHT: 'RIGHT'
    };

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            popupVisible: false,
            isAbove: false
        };

        this.togglePopup = ::this.togglePopup;
        this.closePopup = ::this.closePopup;
        this.popupRenderHandler = ::this.popupRenderHandler;

    }

    togglePopup(e) {

        const popupVisible = !this.state.popupVisible;

        this.setState({
            popupVisible
        }, () => {

            const {onTriggerTouchTap, onFocus, onBlur, onOpenPopup} = this.props;
            onTriggerTouchTap && onTriggerTouchTap(popupVisible);

            if (popupVisible) {
                onFocus && onFocus(e);
                onOpenPopup && onOpenPopup(e);
            } else {
                onBlur && onBlur(e);
            }

        });

    }

    closePopup(e) {
        this.setState({
            popupVisible: false
        }, () => {
            const {onClosePopup, onBlur} = this.props;
            onClosePopup && onClosePopup(e);
            onBlur && onBlur(e);
        });
    }

    popupRenderHandler(popupEl) {

        const isAbove = DropdownCalculation.isAbove(this.dropdownEl, this.triggerEl, findDOMNode(popupEl));

        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

    }

    componentDidMount() {
        this.dropdownEl = this.refs.dropdown;
        this.triggerEl = findDOMNode(this.refs.trigger);
    }

    render() {

        const {

                children,

                className, triggerClassName, popupClassName, style, triggerStyle, popupStyle, theme, popupTheme,
                position, iconCls, triggerValue, rightIconCls, disabled, disableTouchRipple,

                // events
                onMouseOver, onMouseOut

            } = this.props,
            {popupVisible, isAbove} = this.state,

            dropdownClassName = classNames('dropdown', {
                activated: popupVisible,
                [className]: className
            }),
            buttonClassName = classNames('dropdown-trigger', isAbove ? 'above' : 'blow', {
                activated: popupVisible,
                [triggerClassName]: triggerClassName
            }),
            dropdownPopupClassName = classNames('dropdown-popup', isAbove ? 'above' : 'blow', {
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
                              theme={theme}
                              value={triggerValue}
                              iconCls={iconCls}
                              rightIconCls={`${rightIconCls} dropdown-trigger-icon`}
                              disabled={disabled}
                              disableTouchRipple={disableTouchRipple}
                              onMouseOver={onMouseOver}
                              onMouseOut={onMouseOut}
                              onTouchTap={this.togglePopup}/>

                <Popup ref="popup"
                       className={dropdownPopupClassName}
                       style={dropdownPopupStyle}
                       theme={popupTheme}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       hasTriangle={false}
                       position={isAbove ? Popup.Position[`TOP_${position}`] : Popup.Position[`BOTTOM_${position}`]}
                       shouldPreventContainerScroll={false}
                       onRender={this.popupRenderHandler}
                       onRequestClose={this.closePopup}>

                    {children}

                </Popup>

            </div>
        );

    }
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

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
         * The popup theme.
         */
        popupTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        position: PropTypes.oneOf(Util.enumerateValue(Dropdown.Position)),

        /**
         * The value of the dropDown trigger.
         */
        triggerValue: PropTypes.any,

        iconCls: PropTypes.string,
        rightIconCls: PropTypes.string,

        /**
         * If true, the dropDown will be disabled.
         */
        disabled: PropTypes.bool,

        disableTouchRipple: PropTypes.bool,

        /**
         * If true,the dropdown box automatically closed after selection.
         */
        autoClose: PropTypes.bool,

        shouldPreventContainerScroll: PropTypes.bool,

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
        onTriggerTouchTap: PropTypes.func

    };

}

Dropdown.defaultProps = {

    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    position: Dropdown.Position.LEFT,
    rightIconCls: 'fas fa-angle-down',
    disabled: false,
    disableTouchRipple: false,
    autoClose: true,

    shouldPreventContainerScroll: true

};

export default Dropdown;