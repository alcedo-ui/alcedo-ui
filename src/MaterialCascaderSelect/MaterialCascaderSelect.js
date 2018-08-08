/**
 * @file MaterialCascaderSelect component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MaterialProvider from '../MaterialProvider';
import CascaderSelect from '../CascaderSelect';
import Tip from '../Tip';
import Theme from '../Theme';

import SelectMode from '../_statics/SelectMode';
import HorizontalDirection from '../_statics/HorizontalDirection';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class MaterialCascaderSelect extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;
    static Position = Position;
    static ExpandDirection = HorizontalDirection;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value
        };

    }

    /**
     * public
     */
    startRipple = (e, props) => {
        this.refs.cascaderSelect && this.refs.cascaderSelect.startRipple(e, props);
    };

    /**
     * public
     */
    endRipple = () => {
        this.refs.cascaderSelect && this.refs.cascaderSelect.endRipple();
    };

    /**
     * public
     */
    triggerRipple = (e, props) => {
        this.refs.cascaderSelect && this.refs.cascaderSelect.triggerRipple(e, props);
    };

    /**
     * public
     */
    resetPopupPosition = () => {
        this.refs.cascaderSelect && this.refs.cascaderSelect.resetPosition();
    };

    /**
     * public
     */
    openPopup = () => {
        this.refs.cascaderSelect && this.refs.cascaderSelect.openPopup();
    };

    /**
     * public
     */
    closePopup = () => {
        this.refs.cascaderSelect && this.refs.cascaderSelect.closePopup();
    };

    triggerChangeHandler = value => {
        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });
    };

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {
                className, style, theme, label, isLabelAnimate, disabled, required,
                ...restProps
            } = this.props,
            {value} = this.state,

            wrapperClassName = classNames('material-cascader-select', {
                [className]: className
            });

        return (
            <MaterialProvider className={wrapperClassName}
                              style={style}
                              theme={theme}
                              label={label}
                              isLabelAnimate={isLabelAnimate}
                              hasValue={value && value.length > 0}
                              disabled={disabled}
                              required={required}>
                <CascaderSelect {...restProps}
                                ref="cascaderSelect"
                                value={value}
                                disabled={disabled}
                                onChange={this.triggerChangeHandler}/>
            </MaterialProvider>
        );

    }
}

MaterialCascaderSelect.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the trigger element.
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
    popupTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    listWidth: PropTypes.number,

    /**
     * The theme of the tree node select radio or checkbox.
     */
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The mode of tree node.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * The direction of expansion.
     */
    expandDirection: PropTypes.oneOf(Util.enumerateValue(HorizontalDirection)),

    /**
     * The name of the dropDownSelect.
     */
    name: PropTypes.string,

    /**
     * The label of the text field.
     */
    label: PropTypes.any,

    /**
     * The animate of the text field.
     */
    isLabelAnimate: PropTypes.bool,

    /**
     * The value of the dropDownSelect.
     */
    value: PropTypes.any,

    /**
     * The placeholder of the dropDownSelect.
     */
    placeholder: PropTypes.string,

    title: PropTypes.string,
    triggerValue: PropTypes.string,
    rightIconCls: PropTypes.string,

    /**
     * The options data.
     */
    data: PropTypes.arrayOf(PropTypes.shape({

        /**
         * The CSS class name of the tree node.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the tree node.
         */
        style: PropTypes.object,

        /**
         * The theme of the tree button.
         */
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        /**
         * The text value of the tree button.Type can be string or number.
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The tree node's display text. Type can be string, number or bool.
         */
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The desc value of the tree node. Type can be string or number.
         */
        desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true,the tree node will be disabled.
         */
        disabled: PropTypes.bool,

        /**
         * If true,the button will be have loading effect.
         */
        isLoading: PropTypes.bool,

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
        tip: PropTypes.string,

        /**
         * The position of tip.
         */
        tipPosition: PropTypes.oneOf(Util.enumerateValue(Tip.Position)),

        children: PropTypes.array,

        /**
         * You can create a complicated renderer callback instead of value and desc prop.
         */
        itemRenderer: PropTypes.func,

        /**
         * Callback function fired when a tree node touch-tapped.
         */
        onClick: PropTypes.func

    })),

    /**
     * The invalid message of dropDownSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the dropDownSelect will be disabled.
     */
    disabled: PropTypes.bool,

    required: PropTypes.bool,

    /**
     * If true, the tree will be at loading status.
     */
    isLoading: PropTypes.bool,

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
     * The message of the dropDownSelect.
     */
    infoMsg: PropTypes.string,

    /**
     * Use this function to format the options's text.
     */
    textFormat: PropTypes.func,

    /**
     * If true,the drop-down box automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    shouldPreventContainerScroll: PropTypes.bool,
    isSelectRecursive: PropTypes.bool,
    allowCollapse: PropTypes.bool,
    collapsedIconCls: PropTypes.string,
    expandedIconCls: PropTypes.string,
    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    popupChildren: PropTypes.any,

    renderer: PropTypes.func,

    triggerRenderer: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onNodeClick: PropTypes.func,

    /**
     * Callback function fired when the tree node selected.
     */
    onNodeSelect: PropTypes.func,

    /**
     * Callback function fired when the tree node deselected.
     */
    onNodeDeselect: PropTypes.func,

    /**
     * Callback function fired when the popup is closed.
     */
    onClosePopup: PropTypes.func,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func,

    onWheel: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func

};

MaterialCascaderSelect.defaultProps = {

    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,
    listWidth: 200,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,
    expandDirection: HorizontalDirection.RIGHT,

    placeholder: 'Please select ...',
    rightIconCls: 'fas fa-angle-down',
    disabled: false,
    isLoading: false,
    selectMode: SelectMode.SINGLE_SELECT,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    autoClose: false,

    shouldPreventContainerScroll: true,
    isSelectRecursive: true,
    allowCollapse: true,

    required: false

};

export default MaterialCascaderSelect;