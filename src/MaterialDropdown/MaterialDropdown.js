/**
 * @file MaterialDropdown component
 * @author wendy(wendy.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import classNames from 'classnames';

import MaterialProvider from '../MaterialProvider';
import Dropdown from '../Dropdown';
import Theme from '../Theme';

import PureRender from '../_vendors/PureRender';
import Util from '../_vendors/Util';

@PureRender
class MaterialDropdown extends Component {

    static Theme = Theme;
    static Position = Dropdown.Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.closePopup = ::this.closePopup;

    }

    closePopup() {
        this.refs.dropdown && this.refs.dropdown.closePopup();
    }

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
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

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

        position: PropTypes.oneOf(Util.enumerateValue(Dropdown.Position)),

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

        required: PropTypes.bool,

        shouldPreventContainerScroll: PropTypes.bool,

        /**
         * Callback function fired when the popup is closed.
         */
        onClosePopup: PropTypes.func,

        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onMouseOver: PropTypes.func,
        onMouseOut: PropTypes.func,
        onTriggerTouchTap: PropTypes.func

    };

}

MaterialDropdown.defaultProps = {

    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    position: Dropdown.Position.LEFT,
    label: '',
    isLabelAnimate: true,
    triggerValue: null,
    placeholder: 'Please select ...',
    rightIconCls: 'fas fa-angle-down',
    disabled: false,
    disableTouchRipple: false,
    autoClose: true,
    required: false,

    shouldPreventContainerScroll: true

};

export default MaterialDropdown;