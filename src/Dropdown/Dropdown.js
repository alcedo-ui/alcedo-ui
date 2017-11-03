/**
 * @file Dropdown component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import RaisedButton from '../RaisedButton';
import Popup from '../Popup';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';

export default class Dropdown extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            popupVisible: false,
            isAbove: false
        };

        this.isAbove = ::this.isAbove;
        this.togglePopup = ::this.togglePopup;
        this.closePopup = ::this.closePopup;
        this.popupRenderHandler = ::this.popupRenderHandler;

    }

    isAbove() {

        const dropdownSelect = this.refs.dropdownSelect;

        if (!this.popupHeight || !dropdownSelect) {
            return false;
        }

        const {top} = Dom.getOffset(dropdownSelect),
            scrollTop = Dom.getScrollTop();

        if (top + this.triggerHeight + this.popupHeight - scrollTop > window.innerHeight) {
            return true;
        }

        return false;

    }

    togglePopup(e) {

        const popupVisible = !this.state.popupVisible;

        this.setState({
            popupVisible
        }, () => {
            const {onTriggerTouchTap, onFocus, onBlur} = this.props;
            onTriggerTouchTap && onTriggerTouchTap(popupVisible);
            popupVisible ? (onFocus && onFocus(e)) : (onBlur && onBlur(e));
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

        this.popupEl = findDOMNode(popupEl);
        this.popupHeight = this.popupEl.offsetHeight;

        const isAbove = this.isAbove();

        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

    }

    componentDidMount() {
        this.triggerEl = findDOMNode(this.refs.trigger);
        this.triggerHeight = this.triggerEl.clientHeight;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {

                // style
                className, popupClassName, style, popupStyle, theme, popupTheme,

                // trigger
                triggerValue, placeholder, rightIconCls, disabled, disableTouchRipple,

                // events
                onTriggerMouseOver, onTriggerMouseOut

            } = this.props,
            {popupVisible, isAbove} = this.state,

            triggerClassName = (popupVisible ? ' activated' : '') + (isAbove ? ' above' : ' blow'),

            popupClassName = (isAbove ? ' above' : ' blow')
                + (popupClassName ? ' ' + popupClassName : ''),
            popupStyle = Object.assign({
                width: this.triggerEl && getComputedStyle(this.triggerEl).width
            }, popupStyle);

        return (
            <div ref="dropdownSelect"
                 className={'dropdown-select' + (className ? ' ' + className : '')}
                 style={style}>

                <RaisedButton ref="trigger"
                              className={'dropdown-select-trigger' + triggerClassName}
                              theme={theme}
                              value={triggerValue}
                              rightIconCls={`${rightIconCls} dropdown-select-trigger-icon`}
                              disabled={disabled}
                              disableTouchRipple={disableTouchRipple}
                              onMouseOver={onTriggerMouseOver}
                              onMouseOut={onTriggerMouseOut}
                              onTouchTap={this.togglePopup}/>

                <Popup ref="popup"
                       className={'dropdown-select-popup' + popupClassName}
                       style={popupStyle}
                       theme={popupTheme}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       hasTriangle={false}
                       position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                       shouldPreventContainerScroll={false}
                       onRender={this.popupRenderHandler}
                       onRequestClose={this.closePopup}>

                    {children}

                </Popup>

            </div>
        );

    }
};

Dropdown.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The class name of the popup element.
     */
    popupClassName: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

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

    /**
     * The value of the dropDown trigger.
     */
    triggerValue: PropTypes.any,

    /**
     * The placeholder of the dropDown trigger.
     */
    placeholder: PropTypes.string,

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
     * Callback function fired when the popup is closed.
     */
    onClosePopup: PropTypes.func,

    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onTriggerMouseOver: PropTypes.func,
    onTriggerMouseOut: PropTypes.func

};

Dropdown.defaultProps = {

    className: '',
    popupClassName: '',
    style: null,
    popupStyle: null,
    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    triggerValue: null,
    placeholder: 'Please select ...',
    rightIconCls: 'fa fa-angle-down',
    disabled: false,
    disableTouchRipple: false,
    autoClose: true,

    shouldPreventContainerScroll: true

};