/**
 * @file TreeSelect component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cloneDeep from 'lodash/cloneDeep';

import Dropdown from '../Dropdown';
import Tree from '../Tree';
import Theme from '../Theme';
import Tip from '../Tip';
import TextField from '../TextField';

import SelectMode from '../_statics/SelectMode';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import TreeCalculation from '../_vendors/TreeCalculation';
import ComponentUtil from '../_vendors/ComponentUtil';

class TreeSelect extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;
    static Position = Dropdown.Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            filter: '',
            value: props.value,
            popupVisible: false,
            path: props.selectMode === SelectMode.SINGLE_SELECT ?
                TreeCalculation.calPath(props.value, props.data, props) : undefined
        };

    }

    closePopup = () => {
        this.refs.dropdown && this.refs.dropdown.closePopup();
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

    nodeSelectHandler = (value, path) => {

        if (this.props.selectMode !== SelectMode.SINGLE_SELECT) {
            return;
        }

        this.setState({
            path
        });

    };

    changeHandler = value => {

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

    popupClosedHandler = e => {
        this.setState({
            popupVisible: false
        }, () => {
            const {onClosePopup} = this.props;
            onClosePopup && onClosePopup(e);
        });
    };

    filterChangeHandler = filter => {
        this.setState({
            filter
        }, () => {
            const el = this.refs.dropdown;
            el && el.resetPopupPosition();
        });
    };

    isEmpty = (filter = this.state.filter, data = this.props.data) => {

        if (!filter) {
            return !!data;
        }

        const {displayField} = this.props;
        let result = true;

        Util.preOrderTraverse(data, node => {
            if (node && !!node[displayField]
                && node[displayField].toString().toUpperCase().includes(filter.toUpperCase())) {
                result = false;
                return false;
            }
        });

        return result;

    };

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
                useFilter, filterIconCls, isSelectRecursive, allowCollapse, onNodeClick, popupChildren, noMatchedMsg,
                collapsedIconCls, expandedIconCls, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                ...restProps

            } = this.props,
            {value, filter, popupVisible} = this.state,

            isEmpty = this.isEmpty(),

            wrapperClassName = classNames('tree-select', {
                [className]: className
            }),

            selectTriggerClassName = classNames({
                activated: popupVisible,
                empty: !triggerRenderer && !value,
                [triggerClassName]: triggerClassName
            }),
            selectPopupClassName = classNames('tree-select-popup', {
                [popupClassName]: popupClassName
            });

        return (
            <div ref="dropdownSelect"
                 className={wrapperClassName}
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
                          triggerClassName={selectTriggerClassName}
                          popupClassName={selectPopupClassName}
                          popupTheme={popupTheme}
                          triggerValue={this.getTriggerValue()}
                          onClosePopup={this.popupClosedHandler}>

                    <div className="tree-select-popup-fixed">
                        {
                            useFilter ?
                                <TextField className="tree-select-filter"
                                           value={filter}
                                           rightIconCls={filterIconCls}
                                           onChange={this.filterChangeHandler}/>
                                :
                                null
                        }
                    </div>

                    <div className="tree-select-list-scroller"
                         onWheel={e => Event.wheelHandler(e, this.props)}>

                        {
                            useFilter ?
                                <div className="tree-select-filter-placeholder"></div>
                                :
                                null
                        }

                        {
                            isEmpty ?
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
                                      collapsedIconCls={collapsedIconCls}
                                      expandedIconCls={expandedIconCls}
                                      radioUncheckedIconCls={radioUncheckedIconCls}
                                      radioCheckedIconCls={radioCheckedIconCls}
                                      checkboxUncheckedIconCls={checkboxUncheckedIconCls}
                                      checkboxCheckedIconCls={checkboxCheckedIconCls}
                                      checkboxIndeterminateIconCls={checkboxIndeterminateIconCls}
                                      renderer={renderer}
                                      onNodeClick={onNodeClick}
                                      onNodeSelect={this.nodeSelectHandler}
                                      onChange={this.changeHandler}/>
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

    position: PropTypes.oneOf(Util.enumerateValue(Dropdown.Position)),

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
    triggerValue: PropTypes.string,
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

    useFilter: PropTypes.bool,
    filterIconCls: PropTypes.string,
    noMatchedMsg: PropTypes.string,
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

TreeSelect.defaultProps = {

    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    position: Dropdown.Position.LEFT,
    placeholder: 'Please select ...',
    rightIconCls: 'fas fa-angle-down',
    disabled: false,
    selectMode: SelectMode.SINGLE_SELECT,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    autoClose: true,
    useFilter: false,
    filterIconCls: 'fas fa-search',

    shouldPreventContainerScroll: true,
    isSelectRecursive: false,
    allowCollapse: true

};

export default TreeSelect;