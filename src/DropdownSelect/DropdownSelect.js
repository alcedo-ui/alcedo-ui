import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import RaisedButton from '../RaisedButton';
import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './DropdownSelect.css';

export default class DropdownSelect extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: props.value,
            filter: '',
            popupVisible: false,
            isAbove: false
        };

        this.isAbove = this::this.isAbove;
        this.getValue = this::this.getValue;
        this.getText = this::this.getText;
        this.filterChangeHandle = this::this.filterChangeHandle;
        this.togglePopup = this::this.togglePopup;
        this.closePopup = this::this.closePopup;
        this.filterData = this::this.filterData;
        this.popupRenderHandle = this::this.popupRenderHandle;
        this.itemTouchTapHandle = this::this.itemTouchTapHandle;
        this.changeHandle = this::this.changeHandle;

    }

    isAbove() {

        const dropdownSelect = this.refs.dropdownSelect;

        if (!this.popupHeight || !dropdownSelect) {
            return false;
        }

        const {top} = Util.getOffset(dropdownSelect),
            scrollTop = SCROLL_EL ? SCROLL_EL.scrollTop : document.body.scrollTop;

        if (top + this.triggerHeight + this.popupHeight - scrollTop > window.innerHeight) {
            return true;
        }

        return false;

    }

    getValue(data) {

        if (!data) {
            return;
        }

        const {valueField} = this.props;

        switch (typeof data) {
            case 'object': {
                return data[valueField];
            }
            default:
                return data;
        }

    }

    getText(data) {

        if (!data) {
            return;
        }

        const {displayField} = this.props;

        switch (typeof data) {
            case 'object': {
                return data[displayField];
            }
            default:
                return data;
        }

    }

    filterChangeHandle(filter) {
        this.setState({
            filter
        });
    }

    togglePopup() {
        this.setState({
            popupVisible: !this.state.popupVisible
        });
    }

    closePopup() {
        this.setState({
            popupVisible: false
        });
    }

    filterData(filter = this.state.filter, data = this.props.data) {

        const {displayField} = this.props;

        return data.filter(item => typeof item === 'object' && !!item[displayField] ?
            item[displayField].toString().toUpperCase().includes(filter.toUpperCase())
            :
            item.toString().toUpperCase().includes(filter.toUpperCase()));

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

    itemTouchTapHandle(value) {

        const {autoClose, onItemTouchTap} = this.props;

        onItemTouchTap && onItemTouchTap(value);

        autoClose && this.setState({
            popupVisible: false
        });

    }

    changeHandle(value) {
        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    componentDidMount() {
        this.triggerEl = findDOMNode(this.refs.trigger);
        this.triggerHeight = this.triggerEl.clientHeight;
    }

    render() {

        const {
                className, popupClassName, style, name, placeholder,
                disabled, multi, data, useFilter, valueField, displayField, noMatchedMsg,
                triggerTheme
            } = this.props,
            {value, filter, popupVisible, isAbove} = this.state,

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
                        this.getText(value)
                )
                :
                placeholder,

            dropdownSelectPopupClassName = (isAbove ? ' above' : ' blow')
                + (popupClassName ? ' ' + popupClassName : ''),
            popupStyle = {
                width: this.triggerEl && getComputedStyle(this.triggerEl).width
            },

            listData = this.filterData(filter, data);

        return (
            <div ref="dropdownSelect"
                 className={'dropdown-select' + (className ? ' ' + className : '')}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={value}/>
                        :
                        null
                }

                <RaisedButton ref="trigger"
                              className={'dropdown-select-trigger' + triggerClassName}
                              value={triggerValue}
                              rightIconCls={`fa fa-angle-${isAbove ? 'up' : 'down'} dropdown-select-trigger-icon`}
                              disabled={disabled}
                              theme={triggerTheme}
                              onTouchTap={this.togglePopup}/>

                <Popup ref="popup"
                       className={'dropdown-select-popup' + dropdownSelectPopupClassName}
                       style={popupStyle}
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
                          value={value}
                          mode={multi ? List.Mode.CHECKBOX : List.Mode.RADIO}
                          items={listData.length > 0 ?
                              listData
                              :
                              [{
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
                              }]
                          }
                          valueField={valueField}
                          displayField={displayField}
                          onItemTouchTap={this.itemTouchTapHandle}
                          onChange={this.changeHandle}/>

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
     * The CSS class name of the popup element.
     */
    popupClassName: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

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
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

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

    }), PropTypes.string, PropTypes.number])).isRequired,

    /**
     * The invalid message of dropDownSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the dropDownSelect will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     *
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
     *
     */
    useFilter: PropTypes.bool,

    /**
     *
     */
    noMatchedMsg: PropTypes.string,

    /**
     *
     */
    triggerTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     *
     */
    onTtemTouchTap: PropTypes.func,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func

};

DropdownSelect.defaultProps = {

    className: '',
    popupClassName: '',
    style: null,

    name: '',
    value: null,
    placeholder: 'Please select ...',
    data: [],
    invalidMsg: '',
    disabled: false,
    multi: false,
    valueField: 'value',
    displayField: 'text',
    infoMsg: '',
    autoClose: true,
    useFilter: false,
    noMatchedMsg: '',
    triggerTheme: Theme.DEFAULT

};