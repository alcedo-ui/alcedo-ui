/**
 * @file TreeSelect component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import isArray from 'lodash/isArray';
import classNames from 'classnames';

import Dropdown from '../Dropdown';
import Tree from '../Tree';
import TextField from '../TextField';
import Checkbox from '../Checkbox';

import Theme from '../Theme';
import SelectMode from '../_statics/SelectMode';
import VirtualRoot from '../_statics/VirtualRoot';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import TreeCalculation from '../_vendors/TreeCalculation';
import ComponentUtil from '../_vendors/ComponentUtil';
import Dom from '../_vendors/Dom';

class TreeSelect extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;
    static Position = Position;
    static TipPosition = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.dropdown = createRef();
        this.dropdownInstance = null;
        this.filter = createRef();
        this.selectAll = createRef();
        this.scroller = createRef();

        this.state = {
            filter: '',
            value: props.value,
            popupVisible: false,
            scrollerHeight: 'auto',
            path: props.selectMode === SelectMode.SINGLE_SELECT ?
                TreeCalculation.calPath(props.value, props.data, props) : undefined
        };

    }

    /**
     * public
     */
    startRipple = (e, props) => {
        this.dropdownInstance && this.dropdownInstance.startRipple(e, props);
    };

    /**
     * public
     */
    endRipple = () => {
        this.dropdownInstance && this.dropdownInstance.endRipple();
    };

    /**
     * public
     */
    triggerRipple = (e, props) => {
        this.dropdownInstance && this.dropdownInstance.triggerRipple(e, props);
    };

    /**
     * public
     */
    resetPopupPosition = () => {
        this.dropdownInstance && this.dropdownInstance.resetPosition();
    };

    /**
     * public
     */
    openPopup = () => {
        this.dropdownInstance && this.dropdownInstance.openPopup();
    };

    /**
     * public
     */
    closePopup = () => {
        this.dropdownInstance && this.dropdownInstance.closePopup();
    };

    getTriggerValue = (props = this.props) => {

        const {data, selectMode, placeholder, triggerRenderer, renderer, displayField, valueField} = props,
            {value, path} = this.state,
            isMultiSelect = selectMode === SelectMode.MULTI_SELECT;

        if (triggerRenderer) {
            return typeof triggerRenderer === 'function' ? triggerRenderer(value, path) : triggerRenderer;
        }

        if (!value) {
            return placeholder;
        }

        if (isMultiSelect) {
            return value.length > 0 ?
                value.length + ' selected'
                :
                placeholder;
        }

        let result = [];

        function addNode(node, i) {
            result.push(
                renderer ?
                    <div key={2 * i + 1}
                         className="tree-select-trigger-value-node">
                        {renderer(node, path && path.slice(0, i + 1))}
                    </div>
                    :
                    Util.getTextByDisplayField(node, displayField, valueField)
            );
        }

        addNode(data, -1);

        if (path) {
            for (let i = 0, len = path.length; i < len; i++) {

                result.push(
                    <i key={2 * i}
                       className="fas fa-angle-right tree-select-trigger-value-separator"/>
                );

                addNode(path[i].node, i);

            }
        }

        return result;

    };

    updateScrollHeight = () => {

        if (!this.scroller || !this.scroller.current) {
            return;
        }

        const popEl = Dom.findParentByClassName(this.scroller.current, 'tree-select-popup');

        if (!popEl) {
            return;
        }

        let scrollerHeight = popEl.offsetHeight;

        if (this.filter && this.filter.current && this.filter.current.offsetHeight) {
            scrollerHeight -= this.filter.current.offsetHeight;
        }

        if (this.selectAll && this.selectAll.current && this.selectAll.current.offsetHeight) {
            scrollerHeight -= this.selectAll.current.offsetHeight;
        }

        this.setState({
            scrollerHeight
        });

    };

    handleNodeSelect = (value, path) => {

        if (this.props.selectMode !== SelectMode.SINGLE_SELECT) {
            return;
        }

        this.setState({
            path
        });

    };

    handleChange = value => {

        const {autoClose} = this.props;
        if (autoClose) {
            this.closePopup();
        }

        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    };

    handlePopupOpen = e => {

        const {useFilter, onOpenPopup} = this.props;

        if (useFilter) {
            this.filter && this.filter.current && this.filter.current.focus();
        }

        this.updateScrollHeight();
        onOpenPopup && onOpenPopup(e);

    };

    handlePopupClosed = e => {
        this.setState({
            popupVisible: false
        }, () => {
            const {onClosePopup} = this.props;
            onClosePopup && onClosePopup(e);
        });
    };

    handleFilterChange = filter => {
        this.setState({
            filter
        }, () => {
            this.dropdownInstance && this.dropdownInstance.resetPopupPosition();
        });
    };

    handleSelectAllClick = () => {

        const {data} = this.props,
            {value} = this.state;

        if (value && value.length > 0 && value.length === this.total) {
            this.handleChange([]);
            return;
        }

        let result = [];
        TreeCalculation.addRecursiveValue(isArray(data) ? {children: data} : data, result, this.props);
        this.handleChange(TreeCalculation.updateValue(result, this.props));

    };

    isEmpty = (filter = this.state.filter, data = this.props.data) => {

        if (!filter) {
            return !data;
        }

        const {displayField} = this.props;
        let result = true;

        Util.preOrderTraverse(isArray(data) ? {[VirtualRoot]: true, children: data} : data, node => {
            if (node && !!node[displayField]
                && node[displayField].toString().toUpperCase().includes(filter.toUpperCase())) {
                return result = false;
            }
        });

        return result;

    };

    componentDidMount() {
        this.dropdownInstance = this.dropdown && this.dropdown.current;
    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {

                className, triggerClassName, popupClassName, style, name, data, popupTheme, renderer,
                selectMode, valueField, displayField, descriptionField, triggerRenderer,
                useFilter, filterIconCls, filterPlaceholder, useSelectAll, selectAllText, isSelectRecursive,
                allowCollapse, collapsed, indentWidth,
                onNodeClick, popupChildren, noMatchedMsg, isNodeCollapsed,
                collapsedIconCls, expandedIconCls, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                // not passing down these props
                value: v, onChange,

                ...restProps

            } = this.props,
            {value, filter, popupVisible, scrollerHeight} = this.state,

            isMultiSelect = selectMode === SelectMode.MULTI_SELECT;

        this.total = TreeCalculation.getTotalCount(data);

        return (
            <div className={classNames('tree-select', {
                [className]: className
            })}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={Util.getValueByValueField(value, valueField, displayField)}/>
                        :
                        null
                }

                <Dropdown {...restProps}
                          ref={this.dropdown}
                          triggerClassName={classNames({
                              activated: popupVisible,
                              empty: !triggerRenderer && (!value || value.length < 1),
                              [triggerClassName]: triggerClassName
                          })}
                          popupClassName={classNames('tree-select-popup', {
                              [popupClassName]: popupClassName
                          })}
                          popupTheme={popupTheme}
                          triggerValue={this.getTriggerValue()}
                          onOpenPopup={this.handlePopupOpen}
                          onClosePopup={this.handlePopupClosed}>

                    {
                        useFilter ?
                            <div ref={this.filter}>
                                <TextField className="tree-select-filter"
                                           value={filter}
                                           placeholder={filterPlaceholder}
                                           rightIconCls={filterIconCls}
                                           onChange={this.handleFilterChange}/>
                            </div>
                            :
                            null
                    }

                    {
                        isMultiSelect && useSelectAll ?
                            <div ref={this.selectAll}
                                 className="tree-node tree-select-all-wrapper"
                                 style={{padding: `0 ${indentWidth}px`}}
                                 onClick={this.handleSelectAllClick}>
                                <div className="tree-node-inner">
                                    <Checkbox className="tree-node-select"
                                              checked={value && value.length === this.total}
                                              indeterminate={value && value.length > 0 && value.length < this.total}
                                              uncheckedIconCls={checkboxUncheckedIconCls}
                                              checkedIconCls={checkboxCheckedIconCls}
                                              indeterminateIconCls={checkboxIndeterminateIconCls}/>
                                    {selectAllText}
                                </div>
                            </div>
                            :
                            null
                    }

                    <div ref={this.scroller}
                         className="tree-select-list-scroller"
                         style={{height: scrollerHeight}}>
                        {
                            this.isEmpty() ?
                                <div className="no-matched">
                                    {
                                        noMatchedMsg ?
                                            noMatchedMsg
                                            :
                                            <span>
                                                <i className="fas fa-exclamation-triangle no-matched-icon"></i>
                                                No matched value.
                                            </span>
                                    }
                                </div>
                                :
                                <Tree className="tree-select-list"
                                      theme={popupTheme}
                                      selectMode={selectMode}
                                      data={data}
                                      filter={filter}
                                      value={value}
                                      valueField={valueField}
                                      displayField={displayField}
                                      descriptionField={descriptionField}
                                      isSelectRecursive={isSelectRecursive}
                                      allowCollapse={allowCollapse}
                                      collapsed={collapsed}
                                      indentWidth={indentWidth}
                                      collapsedIconCls={collapsedIconCls}
                                      expandedIconCls={expandedIconCls}
                                      radioUncheckedIconCls={radioUncheckedIconCls}
                                      radioCheckedIconCls={radioCheckedIconCls}
                                      checkboxUncheckedIconCls={checkboxUncheckedIconCls}
                                      checkboxCheckedIconCls={checkboxCheckedIconCls}
                                      checkboxIndeterminateIconCls={checkboxIndeterminateIconCls}
                                      renderer={renderer}
                                      isNodeCollapsed={isNodeCollapsed}
                                      onNodeClick={onNodeClick}
                                      onNodeSelect={this.handleNodeSelect}
                                      onChange={this.handleChange}/>
                        }
                    </div>

                    {popupChildren}

                </Dropdown>

            </div>
        );

    }
}

TreeSelect.propTypes = {

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

    /**
     * The name of the dropDownSelect.
     */
    name: PropTypes.string,

    /**
     * The value of the dropDownSelect.
     */
    value: PropTypes.any,

    /**
     * The placeholder of the dropDownSelect.
     */
    placeholder: PropTypes.string,

    title: PropTypes.string,
    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Position)),
    triggerValue: PropTypes.string,
    rightIconCls: PropTypes.string,

    /**
     * The options data.
     */
    data: PropTypes.oneOfType([PropTypes.shape({

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
        title: PropTypes.string,

        children: PropTypes.array,

        /**
         * You can create a complicated renderer callback instead of value and desc prop.
         */
        itemRenderer: PropTypes.func,

        /**
         * Callback function fired when a tree node touch-tapped.
         */
        onClick: PropTypes.func

    }), PropTypes.array]),

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

    useFilter: PropTypes.bool,
    filterIconCls: PropTypes.string,
    filterPlaceholder: PropTypes.string,
    useSelectAll: PropTypes.bool,
    selectAllText: PropTypes.string,
    noMatchedMsg: PropTypes.string,
    isSelectRecursive: PropTypes.bool,
    allowCollapse: PropTypes.bool,
    collapsed: PropTypes.bool,
    autoPopupWidth: PropTypes.bool,
    collapsedIconCls: PropTypes.string,
    expandedIconCls: PropTypes.string,
    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    popupChildren: PropTypes.any,

    resetPopPositionWait: PropTypes.number,
    indentWidth: PropTypes.number,

    renderer: PropTypes.func,

    triggerRenderer: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onNodeClick: PropTypes.func,

    /**
     * Callback function fired when the popup is closed.
     */
    onClosePopup: PropTypes.func,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func,

    isNodeCollapsed: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    onOpenPopup: PropTypes.func

};

TreeSelect.defaultProps = {

    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    placeholder: 'Please select ...',
    rightIconCls: 'fas fa-angle-down',
    disabled: false,
    selectMode: SelectMode.SINGLE_SELECT,
    tipPosition: Position.BOTTOM,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    autoClose: true,
    useFilter: false,
    filterIconCls: 'fas fa-search',
    filterPlaceholder: 'Search ...',
    useSelectAll: false,
    selectAllText: 'Select All',

    isSelectRecursive: false,
    allowCollapse: true,
    collapsed: false,
    autoPopupWidth: true,
    resetPopPositionWait: 250,
    indentWidth: 20

};

export default TreeSelect;
