/**
 * @file EditableSelect component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';
import SelectMode from '../_statics/SelectMode';

export default class EditableSelect extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            listValue: props.value,
            filter: '',
            popupVisible: false,
            isAbove: false
        };

        this.isAbove = ::this.isAbove;
        this.filterChangeHandle = ::this.filterChangeHandle;
        this.showPopup = ::this.showPopup;
        this.closePopup = ::this.closePopup;
        this.filterData = ::this.filterData;
        this.popupRenderHandle = ::this.popupRenderHandle;
        this.changeHandle = ::this.changeHandle;
        this.onChangeValue = ::this.onChangeValue;

    }

    isAbove() {

        const dropdownSelect = this.refs.dropdownSelect;

        if (!this.popupHeight || !dropdownSelect) {
            return false;
        }

        const {top} = Dom.getOffset(dropdownSelect),
            scrollTop = Dom.getScrollTop();

        if (top + this.triggerHeight + this.popupHeight - scrollTop > window.innerHeight) {
            return true;
        }

        return false;

    }

    filterChangeHandle(filter) {
        this.setState({
            filter
        });
    }

    onChangeValue(value) {
        this.setState({
            value,
            listValue: ''
        }, () => {
            const {onChange} = this.props;
            onChange && onChange({
                [this.props.valueField]: value,
                [this.props.displayField]: value
            });
        });
    }

    showPopup() {
        this.setState({
            popupVisible: true
        }, () => {
            this.props.onTriggerTouchTap && this.props.onTriggerTouchTap(this.state.popupVisible);
        });
    }

    closePopup() {
        this.setState({
            popupVisible: false
        }, () => {
            this.props.onTriggerTouchTap && this.props.onTriggerTouchTap(this.state.popupVisible);
        });
    }

    triggerHandle(el, triggerEl, popupEl, currentVisible, isAutoClose) {

        if (!triggerEl) {
            return true;
        }

        while (el) {
            if (el == popupEl) {
                return currentVisible;
            } else if (el == triggerEl) {
                return true;
            }
            el = el.parentNode;
        }

        return isAutoClose ? false : currentVisible;

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

    popupRenderHandle(popupEl) {

        this.popupEl = findDOMNode(popupEl);
        this.popupHeight = this.popupEl.offsetHeight;

        const isAbove = this.isAbove();

        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

    }

    changeHandle(value) {

        const {autoClose} = this.props,
            state = {
                value,
                listValue: value
            };

        if (autoClose) {
            state.popupVisible = false;
        }

        this.setState(state, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    }

    componentDidMount() {
        this.triggerEl = findDOMNode(this.refs.trigger);
        this.triggerHeight = this.triggerEl.clientHeight;
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
                className, popupClassName, style, popupStyle, name, placeholder,
                disabled, useFilter, valueField, displayField, descriptionField, noMatchedMsg,
                triggerTheme, isGrouped, onItemTouchTap
            } = this.props,
            {value, listValue, filter, popupVisible, isAbove} = this.state,

            emptyEl = [{
                renderer() {
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

            triggerClassName = (popupVisible ? ' activated' : '') + (isAbove ? ' above' : ' blow')
                + (value ? '' : ' empty'),
            triggerValue = Util.getTextByDisplayField(value, displayField, valueField)
            ,

            editableSelectPopupClassName = (isAbove ? ' above' : ' blow')
                + (popupClassName ? ' ' + popupClassName : ''),
            editablePopupStyle = Object.assign({
                width: this.triggerEl && getComputedStyle(this.triggerEl).width
            }, popupStyle),

            listData = this.filterData();

        return (
            <div ref="editabledSelect"
                 className={'editable-select' + (className ? ' ' + className : '')}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={Util.getValueByValueField(value, valueField, displayField)}/>
                        :
                        null
                }

                <TextField ref="trigger"
                           className={'editable-select-trigger' + triggerClassName}
                           value={triggerValue}
                           rightIconCls={`fa fa-angle-${isAbove ? 'up' : 'down'} editable-select-trigger-icon`}
                           disabled={disabled}
                           theme={triggerTheme}
                           onChange={this.onChangeValue}
                           onFocus={this.showPopup}/>


                <Popup ref="popup"
                       className={'editable-select-popup' + editableSelectPopupClassName}
                       style={editablePopupStyle}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       triggerHandler={this.triggerHandle}
                       hasTriangle={false}
                       position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                       onRender={this.popupRenderHandle}
                       onRequestClose={this.closePopup}>

                    {
                        useFilter ?
                            <TextField className="editable-select-filter"
                                       value={filter}
                                       rightIconCls="fa fa-search"
                                       onChange={this.filterChangeHandle}/>
                            :
                            null
                    }

                    <List className="editable-select-list"
                          isGrouped={isGrouped}
                          data={listData.length < 1 ? emptyEl : listData}
                          valueField={valueField}
                          value={listValue}
                          selectMode={SelectMode.SINGLE_SELECT}
                          displayField={displayField}
                          descriptionField={descriptionField}
                          onItemTouchTap={onItemTouchTap}
                          onChange={this.changeHandle}/>

                </Popup>

            </div>
        );

    }
};

EditableSelect.propTypes = {

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
     * The name of the editableSelect.
     */
    name: PropTypes.string,

    /**
     * The value of the editableSelect.
     */
    value: PropTypes.any,

    /**
     * The placeholder of the editableSelect.
     */
    placeholder: PropTypes.string,

    /**
     * The options data.
     */
    data: PropTypes.oneOfType([

        // not grouped
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

            /**
             * The CSS class name of the list button.
             */
            className: PropTypes.string,

            /**
             * Override the styles of the list button.
             */
            style: PropTypes.object,

            /**
             * The theme of the list button.
             */
            theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

            /**
             * The text value of the list button.Type can be string or number.
             */
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

            /**
             * The desc value of the list button. Type can be string or number.
             */
            desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

            /**
             * If true, the list button will be disabled.
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
             * You can create a complicated renderer callback instead of value and desc prop.
             */
            renderer: PropTypes.func,

            /**
             * Callback function fired when a list item touch-tapped.
             */
            onTouchTap: PropTypes.func

        }), PropTypes.string, PropTypes.number])),

        // grouped
        PropTypes.array

    ]).isRequired,

    /**
     * The invalid message of editableSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the editableSelect will be disabled.
     */
    disabled: PropTypes.bool,

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
     * The message of the editableSelect.
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

    /**
     * The message of no matching option.
     */
    noMatchedMsg: PropTypes.string,

    /**
     * The theme of editableSelect.Can be primary,highlight,success,warning,error.
     */
    triggerTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * If true,the drop-down box will be have group selection.
     */
    isGrouped: PropTypes.bool,

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onItemTouchTap: PropTypes.func,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func

};

EditableSelect.defaultProps = {

    className: '',
    popupClassName: '',
    style: null,
    popupStyle: null,

    name: '',
    value: null,
    placeholder: 'Please select ...',
    data: [],
    invalidMsg: '',
    disabled: false,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    infoMsg: '',
    autoClose: true,
    useFilter: false,
    noMatchedMsg: '',
    triggerTheme: Theme.DEFAULT,
    isGrouped: false

};