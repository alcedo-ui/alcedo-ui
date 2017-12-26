/**
 * @file MaterialTreeSelect component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TreeSelect from '../TreeSelect';
import Tip from '../Tip';
import MaterialFieldSeparator from '../_MaterialFieldSeparator';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import SelectMode from '../_statics/SelectMode';

export default class MaterialTreeSelect extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            isFocus: false,
            isHover: false
        };

        this.triggerFocusHandler = ::this.triggerFocusHandler;
        this.triggerBlurHandler = ::this.triggerBlurHandler;
        this.triggerChangeHandler = ::this.triggerChangeHandler;
        this.triggerMouseOverHandler = ::this.triggerMouseOverHandler;
        this.triggerMouseOutHandler = ::this.triggerMouseOutHandler;
        this.closePopup = ::this.closePopup;

    }

    triggerFocusHandler(...args) {
        this.setState({
            isFocus: true
        }, () => {
            const {onFocus} = this.props;
            onFocus && onFocus(...args);
        });
    }

    triggerBlurHandler(...args) {
        this.setState({
            isFocus: false
        }, () => {
            const {onBlur} = this.props;
            onBlur && onBlur(...args);
        });
    }

    triggerChangeHandler(value) {
        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });
    }

    triggerMouseOverHandler(...args) {
        this.setState({
            isHover: true
        }, () => {
            const {onMouseOver} = this.props;
            onMouseOver && onMouseOver(...args);
        });
    }

    triggerMouseOutHandler(...args) {
        this.setState({
            isHover: false
        }, () => {
            const {onMouseOut} = this.props;
            onMouseOut && onMouseOut(...args);
        });
    }

    closePopup() {
        this.refs.treeSelect && this.refs.treeSelect.closePopup();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    componentDidMount() {
        this.setState({
            value: this.props.value
        });
    }

    render() {

        const {
                className, style, theme, label, isLabelAnimate,
                ...restProps
            } = this.props,
            {isFocus, isHover, value} = this.state,

            wrapperClassName = (isLabelAnimate ? ' animated' : '') + (label ? ' has-label' : '')
                + (isFocus ? ' focused' : '') + (value ? ' has-value' : '') + (className ? ' ' + className : '');

        return (
            <div className={'material-tree-select' + wrapperClassName}
                 style={style}>

                {
                    label ?
                        <div className="material-tree-select-label">
                            {label}
                        </div>
                        :
                        null
                }

                <TreeSelect {...restProps}
                            ref="treeSelect"
                            value={value}
                            onFocus={this.triggerFocusHandler}
                            onBlur={this.triggerBlurHandler}
                            onTriggerMouseOver={this.triggerMouseOverHandler}
                            onTriggerMouseOut={this.triggerMouseOutHandler}
                            onChange={this.triggerChangeHandler}/>

                <MaterialFieldSeparator theme={theme}
                                        isHover={isHover}
                                        isFocus={isFocus}/>

            </div>
        );

    }
};

MaterialTreeSelect.propTypes = {

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
     * The name of the MaterialTreeSelect.
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
     * The value of the MaterialTreeSelect.
     */
    value: PropTypes.any,

    /**
     * The placeholder of the MaterialTreeSelect.
     */
    placeholder: PropTypes.string,

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
        onTouchTap: PropTypes.func

    })),

    /**
     * The invalid message of dropDownSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the dropDownSelect will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * The select mode of listItem.Can be normal,checkbox.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

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
     * The message of the MaterialTreeSelect.
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

    popupChildren: PropTypes.any,

    renderer: PropTypes.func,

    triggerRenderer: PropTypes.func,

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onItemTouchTap: PropTypes.func,

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
    onTriggerMouseOver: PropTypes.func,
    onTriggerMouseOut: PropTypes.func


};

MaterialTreeSelect.defaultProps = {

    className: null,
    popupClassName: null,
    style: null,
    popupStyle: null,
    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    name: null,
    value: null,
    label: null,
    isLabelAnimate: true,
    placeholder: 'Please select ...',
    rightIconCls: 'fa fa-angle-down',
    data: [],
    invalidMsg: null,
    disabled: false,
    selectMode: SelectMode.SINGLE_SELECT,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    infoMsg: null,
    autoClose: true,

    shouldPreventContainerScroll: true,

    popupChildren: null

};