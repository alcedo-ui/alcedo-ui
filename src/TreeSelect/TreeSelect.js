/**
 * @file TreeSelect component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../Dropdown';
import TextField from '../TextField';
import Tree from '../Tree';
import Checkbox from '../Checkbox';
import Theme from '../Theme';
import Tip from '../Tip';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import TreeCalculation from '../_vendors/TreeCalculation';
import SelectMode from '../_statics/SelectMode';

export default class TreeSelect extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            filter: '',
            popupVisible: false,
            path: props.selectMode === SelectMode.SINGLE_SELECT ?
                TreeCalculation.calPath(props.value, props) : undefined
        };

        this.closePopup = ::this.closePopup;
        this.filterChangeHandler = ::this.filterChangeHandler;
        this.filterData = ::this.filterData;
        this.getTriggerValue = ::this.getTriggerValue;
        this.selectAllTouchTapHandler = ::this.selectAllTouchTapHandler;
        this.nodeSelectHandler = ::this.nodeSelectHandler;
        this.changeHandler = ::this.changeHandler;
        this.popupClosedHandler = ::this.popupClosedHandler;

    }

    closePopup() {
        this.refs.dropdown.closePopup();
    }

    filterChangeHandler(filter) {
        this.setState({
            filter
        });
    }

    filterData(filter = this.state.filter, data = this.props.data) {

        if (!filter) {
            return data;
        }

        const {displayField, isGrouped} = this.props,
            filterFunc = (originData) => {
                return originData.filter(item => typeof item === 'object' && !!item[displayField] ?
                    item[displayField].toString().toUpperCase().includes(filter.toUpperCase())
                    :
                    item.toString().toUpperCase().includes(filter.toUpperCase()));
            };

        if (isGrouped) {

            let result = Object.assign(data);

            for (let i = 0, len = result.length; i < len; i++) {
                let group = result[i];
                group.children = filterFunc(group.children);
                if (group.children.length < 1) {
                    result.splice(i, 1);
                    i--;
                }
            }

        }

        return filterFunc(data);

    }

    getTriggerValue(props = this.props) {

        const {data, selectMode, placeholder, triggerRenderer, renderer, displayField, valueField} = props,
            {value, path} = this.state,

            isMultiSelect = selectMode === SelectMode.MULTI_SELECT;

        if (!value) {
            return placeholder;
        }

        if (triggerRenderer) {
            return triggerRenderer(value, path);
        }

        if (isMultiSelect) {
            return value.length > 0 ?
                value.length + ' selected'
                :
                placeholder;
        }

        let node = data,
            result = [];

        function pushDisplay(key, node, path) {

            if (key >= 0) {
                result.push(
                    <i key={2 * key}
                       className="fa fa-angle-right tree-select-trigger-value-separator"/>
                );
            }

            result.push(renderer ?
                <div key={2 * key + 1}
                     className="tree-select-trigger-value-node">
                    {renderer(node, path)}
                </div>
                :
                Util.getTextByDisplayField(node, displayField, valueField));

        }

        pushDisplay(-1, node);

        if (path) {
            for (let i = 0, len = path.length; i < len; i++) {

                if (!node.children || !(path[i] in node.children)) {
                    break;
                }

                node = node.children[path[i]];
                pushDisplay(i, node, path.slice(0, i + 1));

            }
        }

        return result;

    }

    selectAllTouchTapHandler() {

        const {data} = this.props,
            {value} = this.state;

        if (!data) {
            return;
        }

        const isSelectAll = !value || (value && value.length < data.length),
            newValue = isSelectAll ? data : [];

        this.setState({
            value: newValue
        }, () => {
            this.changeHandler(newValue);
        });

    }

    nodeSelectHandler(value, path) {

        if (this.props.selectMode !== SelectMode.SINGLE_SELECT) {
            return;
        }

        this.setState({
            path
        });

    }

    changeHandler(value) {

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

    }

    popupClosedHandler(e) {
        this.setState({
            popupVisible: false
        }, () => {
            const {onClosePopup} = this.props;
            onClosePopup && onClosePopup(e);
        });
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

                className, popupClassName, style, name, placeholder, popupTheme, data, renderer, triggerRenderer,
                selectMode, useFilter, useSelectAll, valueField, displayField, descriptionField, noMatchedMsg,
                onItemTouchTap, popupChildren,

                // not passing down these props
                disableTouchRipple, onTriggerMouseOver, onTriggerMouseOut,

                ...restProps

            } = this.props,
            {value, path, filter, popupVisible} = this.state,

            isMultiSelect = selectMode === SelectMode.MULTI_SELECT,

            emptyEl = [{
                itemRenderer() {
                    return (
                        <div className="no-matched-list-item">

                            {
                                noMatchedMsg ?
                                    noMatchedMsg
                                    :
                                    <span>
                                        <i className="fa fa-exclamation-triangle no-matched-list-item-icon"></i>
                                        No matched value.
                                    </span>
                            }

                        </div>
                    );
                }
            }],

            triggerClassName = (popupVisible ? ' activated' : '') + (value ? '' : ' empty'),
            triggerValue = this.getTriggerValue(),

            listData = this.filterData();

        return (
            <div ref="dropdownSelect"
                 className={'tree-select' + (className ? ' ' + className : '')}
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
                          ref="dropdown"
                          triggerClassName={triggerClassName}
                          popupClassName={'tree-select-popup' + (popupClassName ? ' ' + popupClassName : '')}
                          popupTheme={popupTheme}
                          triggerValue={triggerValue}
                          onClosePopup={this.popupClosedHandler}>

                    <div className="tree-select-popup-fixed">

                        {
                            useFilter ?
                                <TextField className="tree-select-filter"
                                           value={filter}
                                           rightIconCls="fa fa-search"
                                           onChange={this.filterChangeHandler}/>
                                :
                                null
                        }

                        {
                            isMultiSelect && useSelectAll ?
                                <div className="list-item tree-select-all-wrapper"
                                     onTouchTap={this.selectAllTouchTapHandler}>
                                    <Checkbox className="list-item-checkbox"
                                              checked={data && value && value.length === data.length}
                                              indeterminate={data && value && value.length > 0 && value.length < data.length}/>
                                    Select All
                                </div>
                                :
                                null
                        }

                    </div>

                    <div className="tree-select-list-scroller"
                         onWheel={e => {
                             Event.wheelHandler(e, this.props);
                         }}>

                        {
                            useFilter ?
                                <div className="tree-select-filter-placeholder"></div>
                                :
                                null
                        }

                        {
                            isMultiSelect && useSelectAll ?
                                <div className="tree-select-all-placeholder"></div>
                                :
                                null
                        }

                        <Tree className="tree-select-list"
                              theme={popupTheme}
                              selectMode={selectMode}
                              data={listData.length < 1 ? emptyEl : listData}
                              value={value}
                              valueField={valueField}
                              displayField={displayField}
                              descriptionField={descriptionField}
                              renderer={renderer}
                              onItemTouchTap={onItemTouchTap}
                              onNodeSelect={this.nodeSelectHandler}
                              onChange={this.changeHandler}/>

                    </div>

                    {popupChildren}

                </Dropdown>

            </div>
        );

    }
};

TreeSelect.propTypes = {

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
     * The theme.
     */
    popupTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

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

    rightIconCls: PropTypes.string,

    /**
     * The options data.
     */
    data: PropTypes.shape({

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

    }),

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

    /**
     * If true,the drop-down box will have search input.
     */
    useFilter: PropTypes.bool,

    useSelectAll: PropTypes.bool,

    /**
     * The message of no matching option.
     */
    noMatchedMsg: PropTypes.string,

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

TreeSelect.defaultProps = {

    className: null,
    popupClassName: null,
    style: null,
    popupStyle: null,
    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    name: null,
    value: null,
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
    useFilter: false,
    useSelectAll: false,
    noMatchedMsg: null,

    shouldPreventContainerScroll: true,

    popupChildren: null

};