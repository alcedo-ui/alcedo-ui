/**
 * @file MaterialDropdown component
 * @author wendy(wendy.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MaterialProvider from '../MaterialProvider';
import Dropdown from '../Dropdown';
import Theme from '../Theme';

import Position from '../_statics/Position';

import Util from '../_vendors/Util';

class MaterialDropdown extends Component {

    static Theme = Theme;
    static Position = Position;
    static TipPosition = Position;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    /**
     * public
     */
    startRipple = (e, props) => {
        this.refs.dropdown && this.refs.dropdown.startRipple(e, props);
    };

    /**
     * public
     */
    endRipple = () => {
        this.refs.dropdown && this.refs.dropdown.endRipple();
    };

    /**
     * public
     */
    triggerRipple = (e, props) => {
        this.refs.dropdown && this.refs.dropdown.triggerRipple(e, props);
    };

    /**
     * public
     */
    resetPopupPosition = () => {
        this.refs.dropdown && this.refs.dropdown.resetPosition();
    };

    /**
     * public
     */
    openPopup = () => {
        this.refs.dropdown && this.refs.dropdown.openPopup();
    };

    /**
     * public
     */
    closePopup = () => {
        this.refs.dropdown && this.refs.dropdown.closePopup();
    };

    render() {

        const {
                className, style, theme, label, isLabelAnimate, disabled, required,
                ...restProps
            } = this.props,

            wrapperClassName = classNames('material-dropdown', {
                [className]: className
            });

        return (
            <MaterialProvider className={wrapperClassName}
                              style={style}
                              theme={theme}
                              label={label}
                              isLabelAnimate={isLabelAnimate}
                              disabled={disabled}
                              required={required}>
                <Dropdown {...restProps}
                          ref="dropdown"
                          className="material-dropdown-content"
                          disabled={disabled}/>
            </MaterialProvider>
        );

    }
}

MaterialDropdown.propTypes = {

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

    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * The label of the dropdown.
     */
    label: PropTypes.any,

    /**
     * The animate of the dropdown.
     */
    isLabelAnimate: PropTypes.bool,

    /**
     * The value of the dropDown trigger.
     */
    triggerValue: PropTypes.any,

    /**
     * The placeholder of the dropDown trigger.
     */
    placeholder: PropTypes.string,

    title: PropTypes.string,
    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Position)),

    rightIconCls: PropTypes.string,

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
     * If true,the dropdown box automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    required: PropTypes.bool,

    shouldPreventContainerScroll: PropTypes.bool,
    resetPopPositionWait: PropTypes.number,

    /**
     * Callback function fired when the popup is closed.
     */
    onClosePopup: PropTypes.func,

    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    onTriggerClick: PropTypes.func

};

MaterialDropdown.defaultProps = {

    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    label: '',
    isLabelAnimate: true,
    placeholder: 'Please select ...',
    rightIconCls: 'fas fa-angle-down',
    disabled: false,
    isLoading: false,
    disableTouchRipple: false,
    autoClose: true,
    required: false,
    tipPosition: Position.BOTTOM,

    shouldPreventContainerScroll: true,
    resetPopPositionWait: 250

};

export default MaterialDropdown;
