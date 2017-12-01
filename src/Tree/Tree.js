/**
 * @file Tree component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import TreeNode from '../_TreeNode';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import SelectMode from '../_statics/SelectMode';

export default class Tree extends Component {

    static SelectMode = SelectMode;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: this.initValue(props)
        };

        this.initValue = ::this.initValue;
        this.isItemChecked = ::this.isItemChecked;
        this.listItemTouchTapHandler = ::this.listItemTouchTapHandler;
        this.listItemSelectHandler = ::this.listItemSelectHandler;
        this.listItemDeselectHandler = ::this.listItemDeselectHandler;
        this.wheelHandler = ::this.wheelHandler;

    }

    initValue(props) {

        if (!props) {
            return;
        }

        const {value, selectMode} = props;

        if (!selectMode) {
            return;
        }

        if (value) {
            return value;
        }

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                return [];
            case SelectMode.SINGLE_SELECT:
                return null;
            default:
                return value;
        }

    }

    isItemChecked(item) {

        const {selectMode, valueField, displayField} = this.props,
            {value} = this.state;

        if (!value) {
            return false;
        }

        if (selectMode === SelectMode.MULTI_SELECT) {
            return _.isArray(value) && value.filter(valueItem => {
                return Util.isValueEqual(valueItem, item, valueField, displayField);
            }).length > 0;
        } else if (selectMode === SelectMode.SINGLE_SELECT) {
            return Util.isValueEqual(value, item, valueField, displayField);
        }

    }

    listItemTouchTapHandler(value, index) {

        const {selectMode} = this.props;

        if (selectMode !== SelectMode.NORMAL) {
            return;
        }

        this.setState({
            value
        }, () => {
            const {onItemTouchTap, onChange} = this.props;
            onItemTouchTap && onItemTouchTap(value, index);
            onChange && onChange(value, index);
        });

    }

    listItemSelectHandler(item, index) {

        const {selectMode} = this.props;

        if (selectMode === SelectMode.NORMAL) {
            return;
        }

        let {value} = this.state;

        if (selectMode === SelectMode.MULTI_SELECT) {

            if (!value || !_.isArray(value)) {
                value = [];
            }

            value.push(item);

        } else if (selectMode === SelectMode.SINGLE_SELECT) {
            value = item;
        }

        this.setState({
            value
        }, () => {
            const {onItemSelect, onChange} = this.props;
            onItemSelect && onItemSelect(item, index);
            onChange && onChange(value, index);
        });

    }

    listItemDeselectHandler(item, index) {

        const {selectMode} = this.props;

        if (selectMode !== SelectMode.MULTI_SELECT) {
            return;
        }

        const {valueField, displayField} = this.props;
        let {value} = this.state;

        if (!value || !_.isArray(value)) {
            value = [];
        } else {
            value = value.filter(valueItem => {
                return Util.getValueByValueField(valueItem, valueField, displayField)
                    != Util.getValueByValueField(item, valueField, displayField);
            });
        }

        this.setState({
            value
        }, () => {
            const {onItemDeselect, onChange} = this.props;
            onItemDeselect && onItemDeselect(item, index);
            onChange && onChange(value, index);
        });

    }

    wheelHandler(e) {
        const {shouldPreventContainerScroll, onWheel} = this.props;
        shouldPreventContainerScroll && Event.preventContainerScroll(e);
        onWheel && onWheel(e);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: this.initValue(nextProps)
            });
        }
    }

    render() {

        const {

                children, className, style, theme, data,

                selectTheme, selectMode, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                idField, valueField, displayField, descriptionField, disabled, isLoading, renderer

            } = this.props,
            listClassName = (className ? ' ' + className : '');

        return (
            <div className={'tree' + listClassName}
                 disabled={disabled}
                 style={style}
                 onWheel={this.wheelHandler}>

                <TreeNode {...data}
                          theme={data.theme || theme}
                          selectTheme={item.selectTheme || selectTheme}
                          disabled={disabled || item.disabled}
                          isLoading={isLoading || item.isLoading}
                          selectMode={selectMode}
                          renderer={renderer}
                          radioUncheckedIconCls={item.radioUncheckedIconCls || radioUncheckedIconCls}
                          radioCheckedIconCls={item.radioCheckedIconCls || radioCheckedIconCls}
                          checkboxUncheckedIconCls={item.checkboxUncheckedIconCls || checkboxUncheckedIconCls}
                          checkboxCheckedIconCls={item.checkboxCheckedIconCls || checkboxCheckedIconCls}
                          checkboxIndeterminateIconCls={item.checkboxIndeterminateIconCls || checkboxIndeterminateIconCls}
                          onTouchTap={(e) => {
                              this.listItemTouchTapHandler(item, index);
                              item.onTouchTap && item.onTouchTap(e);
                          }}
                          onSelect={() => {
                              this.listItemSelectHandler(item, index);
                          }}
                          onDeselect={() => {
                              this.listItemDeselectHandler(item, index);
                          }}/>

                {children}

            </div>
        );
    }
};

Tree.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The theme of the tree item.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The theme of the tree item select radio or checkbox.
     */
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * Children passed into the ListItem.
     */
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

        /**
         * The CSS class name of the tree item.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the tree item.
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
         * The tree item's display text. Type can be string, number or bool.
         */
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The desc value of the tree item. Type can be string or number.
         */
        desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true,the tree item will be disabled.
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
         * The message of tip.
         */
        tip: PropTypes.string,

        /**
         * The position of tip.
         */
        tipPosition: PropTypes.oneOf(Util.enumerateValue(Tip.Position)),

        /**
         * If true,the item will have center displayed ripple effect.
         */
        rippleDisplayCenter: PropTypes.bool,

        /**
         * You can create a complicated renderer callback instead of value and desc prop.
         */
        itemRenderer: PropTypes.func,

        /**
         * Callback function fired when a tree item touch-tapped.
         */
        onTouchTap: PropTypes.func

    }), PropTypes.string, PropTypes.number, PropTypes.symbol])).isRequired,

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
     * If true, the tree will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true, the tree will be at loading status.
     */
    isLoading: PropTypes.bool,

    /**
     * The mode of listItem.Can be normal,checkbox.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

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
     * Callback function fired when the tree-item touch tap.
     */
    onItemTouchTap: PropTypes.func,

    /**
     * Callback function fired when the tree-item select.
     */
    onItemSelect: PropTypes.func,

    /**
     * Callback function fired when the tree-item deselect.
     */
    onItemDeselect: PropTypes.func,

    /**
     * Callback function fired when the tree changed.
     */
    onChange: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

Tree.defaultProps = {

    className: null,
    style: null,
    theme: Theme.DEFAULT,
    selectTheme: Theme.DEFAULT,

    data: [],

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    selectMode: SelectMode.NORMAL,
    shouldPreventContainerScroll: true,

    radioUncheckedIconCls: 'fa fa-check',
    radioCheckedIconCls: 'fa fa-check',
    checkboxUncheckedIconCls: 'fa fa-square-o',
    checkboxCheckedIconCls: 'fa fa-check-square',
    checkboxIndeterminateIconCls: 'fa fa-minus-square'

};