/**
 * @file ButtonRadioGroup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import List from '../List';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';

class ButtonRadioGroup extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, ...restProps} = this.props,

            fieldClassName = classNames('button-radio-group', {
                [className]: className
            });

        return (
            <List {...restProps}
                  className={fieldClassName}/>
        );

    }
}

ButtonRadioGroup.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The theme of the ButtonRadioGroup item.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The theme of the ButtonRadioGroup item select radio or checkbox.
     */
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * Children passed into the ButtonRadio.
     */
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

        /**
         * The CSS class name of the ButtonRadioGroup button.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the ButtonRadioGroup button.
         */
        style: PropTypes.object,

        /**
         * The theme of the ButtonRadioGroup button.
         */
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        /**
         * The text value of the ButtonRadioGroup button.Type can be string or number.
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The ButtonRadioGroup item's display text. Type can be string, number or bool.
         */
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The desc value of the ButtonRadioGroup button. Type can be string or number.
         */
        desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The title value of the ButtonRadioGroup button.
         */
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true, the ButtonRadioGroup item will be disabled.
         */
        disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

        /**
         * If true, the button will be have loading effect.
         */
        isLoading: PropTypes.bool,

        /**
         * If true, the element's ripple effect will be disabled.
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
         * The message of tip.
         */
        tip: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The position of tip.
         */
        tipPosition: PropTypes.oneOf(Util.enumerateValue(Tip.Position)),

        /**
         * If true, the item will have center displayed ripple effect.
         */
        rippleDisplayCenter: PropTypes.bool,

        /**
         * You can create a complicated renderer callback instead of value and desc prop.
         */
        itemRenderer: PropTypes.func,

        /**
         * Callback function fired when a ButtonRadioGroup item touch-tapped.
         */
        onClick: PropTypes.func

    }), PropTypes.string, PropTypes.number])),

    value: PropTypes.any,

    /**
     * The id field name in data. (default: "id")
     */
    idField: PropTypes.string,

    /**
     * The value field name in data. (default: "value")
     */
    valueField: PropTypes.string,

    /**
     * The display field name in data. (default: "text")
     */
    displayField: PropTypes.string,

    /**
     * The description field name in data. (default: "desc")
     */
    descriptionField: PropTypes.string,

    /**
     * If true, the ButtonRadioGroup will be disabled.
     */
    disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

    /**
     * ButtonRadio disabled callback.
     */
    itemDisabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

    /**
     * If true,the element's ripple effect will be disabled.
     */
    disableTouchRipple: PropTypes.bool,

    /**
     * If true, the ButtonRadioGroup will be at loading status.
     */
    isLoading: PropTypes.bool,

    /**
     * Whether select when item clicked.
     */
    autoSelect: PropTypes.bool,

    indeterminateCallback: PropTypes.func,

    shouldPreventContainerScroll: PropTypes.bool,

    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * Callback function fired when the ButtonRadio touch tap.
     */
    onItemClick: PropTypes.func,

    /**
     * Callback function fired when the ButtonRadio select.
     */
    onItemSelect: PropTypes.func,

    /**
     * Callback function fired when the ButtonRadio deselect.
     */
    onItemDeselect: PropTypes.func,

    /**
     * Callback function fired when the ButtonRadioGroup changed.
     */
    onChange: PropTypes.func

};

ButtonRadioGroup.defaultProps = {

    theme: Theme.DEFAULT,
    activatedTheme: Theme.PRIMARY,
    selectTheme: Theme.DEFAULT,

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    itemDisabled: false,
    disableTouchRipple: false,
    autoSelect: true,
    shouldPreventContainerScroll: true,

    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square'

};

export default ButtonRadioGroup;
