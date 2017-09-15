/**
 * @file DropdownSelect component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import RaisedButton from '../RaisedButton';
import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';

export default class DropdownSelect extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            filter: '',
            popupVisible: false,
            isAbove: false
        };

        this.isAbove = ::this.isAbove;
        this.filterChangeHandle = ::this.filterChangeHandle;
        this.togglePopup = ::this.togglePopup;
        this.closePopup = ::this.closePopup;
        this.filterData = ::this.filterData;
        this.popupRenderHandle = ::this.popupRenderHandle;
        this.changeHandler = ::this.changeHandler;

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

    togglePopup() {
        this.setState({
            popupVisible: !this.state.popupVisible
        }, () => {
            this.props.onTriggerTouchTap && this.props.onTriggerTouchTap(this.state.popupVisible);
        });
    }

    closePopup() {
        this.setState({
            popupVisible: false
        }, () => {
            this.props.onClosePopup && this.props.onClosePopup();
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

    changeHandler(value) {

        const {autoClose} = this.props,
            state = {
                value
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
                disabled, multi, useFilter, valueField, displayField, descriptionField, noMatchedMsg,
                triggerTheme, isGrouped, itemTouchTapHandle, disableTouchRipple
            } = this.props,
            {value, filter, popupVisible, isAbove} = this.state,

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
            triggerValue = value ?
                (
                    multi ?
                        (
                            value.length > 0 ?
                                value.length + ' selected'
                                :
                                placeholder
                        )
                        :
                        Util.getTextByDisplayField(value, displayField, valueField)
                )
                :
                placeholder,

            dropdownSelectPopupClassName = (isAbove ? ' above' : ' blow')
                + (popupClassName ? ' ' + popupClassName : ''),
            dropdownPopupStyle = Object.assign({
                width: this.triggerEl && getComputedStyle(this.triggerEl).width
            }, popupStyle),

            listData = this.filterData();

        return (
            <div ref="dropdownSelect"
                 className={'dropdown-select' + (className ? ' ' + className : '')}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={Util.getValueByValueField(value, valueField, displayField)}/>
                        :
                        null
                }

                <RaisedButton ref="trigger"
                              className={'dropdown-select-trigger' + triggerClassName}
                              value={triggerValue}
                              rightIconCls={`fa fa-angle-${isAbove ? 'up' : 'down'} dropdown-select-trigger-icon`}
                              disabled={disabled}
                              theme={triggerTheme}
                              disableTouchRipple={disableTouchRipple}
                              onTouchTap={this.togglePopup}/>

                <Popup ref="popup"
                       className={'dropdown-select-popup' + dropdownSelectPopupClassName}
                       style={dropdownPopupStyle}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       hasTriangle={false}
                       position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                       onRender={this.popupRenderHandle}
                       onRequestClose={this.closePopup}>

                    {
                        useFilter ?
                            <TextField className="dropdown-select-filter"
                                       value={filter}
                                       rightIconCls="fa fa-search"
                                       onChange={this.filterChangeHandle}/>
                            :
                            null
                    }

                    <List className="dropdown-select-list"
                          mode={multi ? List.Mode.CHECKBOX : List.Mode.NORMAL}
                          isGrouped={isGrouped}
                          items={listData.length < 1 ? emptyEl : listData}
                          value={value}
                          valueField={valueField}
                          displayField={displayField}
                          descriptionField={descriptionField}
                          onItemTouchTap={itemTouchTapHandle}
                          onChange={this.changeHandler}/>

                </Popup>

            </div>
        );

    }
};

DropdownSelect.propTypes = {

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
     * The invalid message of dropDownSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the dropDownSelect will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the dropDownSelect will be multiply select.
     */
    multi: PropTypes.bool,

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

    /**
     * The message of no matching option.
     */
    noMatchedMsg: PropTypes.string,

    /**
     * The theme of DropdownSelect.Can be primary,highlight,success,warning,error.
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
     * Callback function fired when the popup is closed.
     */
    onClosePopup: PropTypes.func,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func

};

DropdownSelect.defaultProps = {

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
    multi: false,

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