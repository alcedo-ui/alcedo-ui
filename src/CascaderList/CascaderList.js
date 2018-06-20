/**
 * @file CascaderList component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import isArray from 'lodash/isArray';
import classNames from 'classnames';

import CascaderListItem from '../_CascaderListItem';
import Tip from '../Tip';
import Theme from '../Theme';

import SelectMode from '../_statics/SelectMode';
import HorizontalDirection from '../_statics/HorizontalDirection';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import Calculation from '../_vendors/Calculation';
import CascaderCalculation from '../_vendors/CascaderCalculation';
import ComponentUtil from '../_vendors/ComponentUtil';

class CascaderList extends Component {

    static SelectMode = SelectMode;
    static ExpandDirection = HorizontalDirection;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: Calculation.getInitValue(props),
            activatedPath: []
        };

    }

    addRecursiveValue = (node, value) => {

        if (!node || !value) {
            return;
        }

        if (!Calculation.isItemChecked(node, value, this.props)) {
            value.push(node);
        }

        if (!node.children || node.children.length < 1) {
            return;
        }

        for (let item of node.children) {
            this.addRecursiveValue(item, value);
        }

    };

    removeRecursiveValue = (node, value) => {

        if (!node || !value) {
            return;
        }

        const index = Calculation.getMultiSelectItemIndex(node, value, this.props);
        if (index > -1) {
            value.splice(index, 1);
        }

        if (!node.children || node.children.length < 1) {
            return;
        }

        for (let item of node.children) {
            this.removeRecursiveValue(item, value);
        }

    };

    /**
     * traverse tree data to update value when multi recursive select
     * @param value
     * @returns {Array}
     */
    updateValue = value => {

        const {data, valueField, displayField} = this.props;
        let result = [];

        Util.postOrderTraverse({children: data}, node => {
            if (!node.children || node.children.length < 1) {
                if (value.findIndex(item =>
                    Util.getValueByValueField(item, valueField, displayField)
                    === Util.getValueByValueField(node, valueField, displayField)) > -1) {
                    result.push(node);
                }
            } else {
                if (node.children.every(child => result.findIndex(item =>
                    Util.getValueByValueField(item, valueField, displayField)
                    === Util.getValueByValueField(child, valueField, displayField)) > -1)) {
                    result.push(node);
                }
            }
        });

        return result;

    };

    nodeClickHandler = (node, index, path, e) => {

        const {onNodeClick} = this.props;
        onNodeClick && onNodeClick(node, index, path, e);

        this.setState({
            activatedPath: path
        });

    };

    nodeSelectHandler = (node, path) => {

        if (!node) {
            return;
        }

        const {selectMode, isSelectRecursive} = this.props,
            {value} = this.state,
            state = {};

        if (selectMode === SelectMode.MULTI_SELECT) {

            let result = value ? value.slice() : value;
            if (!result || !isArray(result)) {
                result = [];
            }

            if (isSelectRecursive) {
                this.addRecursiveValue(node, result);
                result = this.updateValue(result);
            } else {
                result.push(node);
            }

            state.value = result;

        } else if (selectMode === SelectMode.SINGLE_SELECT) {
            state.value = node;
        }

        this.setState(state, () => {
            const {onNodeSelect, onChange} = this.props;
            onNodeSelect && onNodeSelect(node, path);
            onChange && onChange(state.value);
        });

    };

    nodeDeselectHandler = (node, path) => {

        const {selectMode} = this.props;

        if (selectMode !== SelectMode.MULTI_SELECT) {
            return;
        }

        const {isSelectRecursive} = this.props,
            {value: stateValue} = this.state;
        let value = stateValue ? stateValue.slice() : stateValue;

        if (!value || !isArray(value)) {
            value = [];
        } else {
            if (isSelectRecursive) {
                this.removeRecursiveValue(node, value);
                value = this.updateValue(value);
            } else {
                const index = Calculation.getMultiSelectItemIndex(node, value, this.props);
                if (index > -1) {
                    value.splice(index, 1);
                }
            }
        }

        this.setState({
            value
        }, () => {
            const {onNodeDeselect, onChange} = this.props;
            onNodeDeselect && onNodeDeselect(node, path);
            onChange && onChange(value);
        });

    };

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: Calculation.getInitValue({
                value: ComponentUtil.getDerivedState(props, state, 'value'),
                selectMode: props.selectMode
            })
        };
    }

    render() {

        const {
                children, className, style, theme, selectTheme, listWidth, expandDirection, data,
                expandedIconCls, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,
                idField, valueField, displayField, descriptionField, disabled, isLoading, readOnly, selectMode,
                isSelectRecursive, renderer
            } = this.props,
            {value, activatedPath} = this.state,

            wrapperClassName = classNames('cascader-list', {
                [className]: className
            }),
            wrapperStyle = {
                ...style,
                width: CascaderCalculation.getMaxDepth(activatedPath) * listWidth
            };

        return (
            <div className={wrapperClassName}
                 style={wrapperStyle}
                 disabled={disabled}
                 onWheel={e => Event.wheelHandler(e, this.props)}>

                <CascaderListItem expandDirection={expandDirection}
                                  activatedPath={activatedPath}
                                  data={data}
                                  value={value}
                                  theme={theme}
                                  selectTheme={selectTheme}
                                  idField={idField}
                                  valueField={valueField}
                                  displayField={displayField}
                                  descriptionField={descriptionField}
                                  disabled={disabled}
                                  isLoading={isLoading}
                                  readOnly={readOnly}
                                  selectMode={selectMode}
                                  renderer={renderer}
                                  expandedIconCls={expandedIconCls}
                                  radioUncheckedIconCls={radioUncheckedIconCls}
                                  radioCheckedIconCls={radioCheckedIconCls}
                                  checkboxUncheckedIconCls={checkboxUncheckedIconCls}
                                  checkboxCheckedIconCls={checkboxCheckedIconCls}
                                  checkboxIndeterminateIconCls={checkboxIndeterminateIconCls}
                                  isSelectRecursive={isSelectRecursive}
                                  onNodeClick={this.nodeClickHandler}
                                  onNodeSelect={this.nodeSelectHandler}
                                  onNodeDeselect={this.nodeDeselectHandler}/>

                {children}

            </div>
        );
    }
}

CascaderList.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The theme of the tree node.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

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
     * Children passed into the tree node.
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
     * The value of the dropDownSelect.
     */
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
     * If true, the tree will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true, the tree will be at loading status.
     */
    isLoading: PropTypes.bool,

    readOnly: PropTypes.bool,

    shouldPreventContainerScroll: PropTypes.bool,
    isSelectRecursive: PropTypes.bool,
    expandedIconCls: PropTypes.string,
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
     * Callback function fired when the tree node touch tap.
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
     * Callback function fired when the tree changed.
     */
    onChange: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

CascaderList.defaultProps = {

    theme: Theme.DEFAULT,
    listWidth: 200,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,
    expandDirection: HorizontalDirection.RIGHT,

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    isLoading: false,
    readOnly: false,
    shouldPreventContainerScroll: true,
    isSelectRecursive: true

};

export default CascaderList;