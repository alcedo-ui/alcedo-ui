import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import IconButton from '../IconButton';
import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import Theme from '../Theme';

import Util from 'vendors/Util';

import './MultipleSelect.css';

export default class MultipleSelect extends Component {

    constructor(props) {

        super(props);

        this.triggerEl = null;

        this.state = {
            selectedCollapsed: true,
            value: null,
            filter: '',
            popupVisible: false,
            filteredData: this.filterData('', props.data),
            isAbove: false
        };

        this.isAbove = this::this.isAbove;
        this.getValue = this::this.getValue;
        this.getText = this::this.getText;
        this.filterData = this::this.filterData;
        this.removeSelected = this::this.removeSelected;
        this.toggleSelectedCollapse = this::this.toggleSelectedCollapse;
        this.focusHandle = this::this.focusHandle;
        this.blurHandle = this::this.blurHandle;
        this.filterChangeHandle = this::this.filterChangeHandle;
        this.closePopup = this::this.closePopup;
        this.popupRenderHandle = this::this.popupRenderHandle;
        this.changeHandle = this::this.changeHandle;

    }

    isAbove() {

        const multipleSelect = this.refs.multipleSelect;

        if (!this.popupHeight || !multipleSelect) {
            return false;
        }

        const {top} = Util.getOffset(multipleSelect),
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

    filterData(filter = this.state.filter, data = this.props.data) {

        const {displayField, filterCallback} = this.props;

        if (filterCallback) {
            return filterCallback(filter, data);
        }

        return data.filter(item => typeof item === 'object' && displayField in item ?
            item[displayField].toString().toUpperCase().includes(filter.toUpperCase())
            :
            item.toString().toUpperCase().includes(filter.toUpperCase()));

    }

    removeSelected(index) {

        const {value} = this.state;

        if (!value || value.length < 1) {
            return;
        }

        value.splice(index, 1);

        this.setState({
            value
        });

    }

    toggleSelectedCollapse() {
        this.setState({
            selectedCollapsed: !this.state.selectedCollapsed
        });
    }

    focusHandle() {

        const {disabled, onFocus} = this.props;

        !disabled && this.setState({
            popupVisible: true
        }, () => {
            onFocus && onFocus();
        });

    }

    blurHandle() {

        const {disabled, onBlur} = this.props;

        !disabled && onBlur && onBlur();

    }

    filterChangeHandle(filter) {

        const value = this.state.value,
            state = {
                filter,
                popupVisible: !!filter,
                filteredData: this.filterData(filter)
            };

        if (!filter) {
            state.value = undefined;
        }

        this.setState(state, () => {
            if (state.value !== value) {
                const {onChange} = this.props;
                onChange && onChange(state.value);
            }
        });

    }

    closePopup() {
        this.setState({
            popupVisible: false
        });
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

    render() {

        const {
                className, popupClassName, style, name, placeholder,
                disabled, iconCls, rightIconCls, valueField, displayField, noMatchedMsg
            } = this.props,
            {selectedCollapsed, isAbove, value, filter, popupVisible, filteredData} = this.state,
            valueLen = (value ? value.length : 0),

            multipleSelectClassName = (valueLen > 0 ? ' not-empty' : '') + (popupVisible ? ' activated' : '')
                + (isAbove ? ' above' : ' blow') + (className ? ' ' + className : ''),
            selectedClassName = (selectedCollapsed ? ' collapsed' : ''),
            autoCompletePopupClassName = (isAbove ? ' above' : ' blow') + (popupClassName ? ' ' + popupClassName : '');

        return (
            <div ref="multipleSelect"
                 className={'multiple-select' + multipleSelectClassName}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={this.getValue(value)}/>
                        :
                        null
                }

                {
                    value && valueLen > 0 ?
                        (
                            <div className={'multiple-select-selected-wrapper' + selectedClassName}>

                                <div className="multiple-select-selected-count">
                                    {`${valueLen} selected`}
                                </div>

                                {
                                    value.map((item, index) => {
                                        return (
                                            <div key={index}
                                                 className="multiple-select-selected">
                                                {this.getText(item)}
                                                <div className="multiple-select-selected-remove-button"
                                                     onClick={() => {
                                                         this.removeSelected(index);
                                                     }}>
                                                    ×
                                                </div>
                                            </div>
                                        );
                                    })
                                }

                                <IconButton className="multiple-select-selected-collapse-button"
                                            iconCls="fa fa-angle-double-up"
                                            onTouchTap={this.toggleSelectedCollapse}/>

                            </div>
                        )
                        :
                        null
                }

                <TextField ref="trigger"
                           className="multiple-select-trigger"
                           value={filter}
                           placeholder={placeholder}
                           disabled={disabled}
                           iconCls={iconCls}
                           rightIconCls={rightIconCls || 'fa fa-search'}
                           onFocus={this.focusHandle}
                           onBlur={this.blurHandle}
                           onChange={this.filterChangeHandle}/>

                <Popup className={'multiple-select-popup' + autoCompletePopupClassName}
                       style={{width: this.triggerEl && getComputedStyle(this.triggerEl).width}}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       hasTriangle={false}
                       triggerMode={Popup.TriggerMode.OPEN}
                       position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                       onRender={this.popupRenderHandle}
                       onRequestClose={this.closePopup}>

                    <List className="multiple-select-list"
                          value={value}
                          mode={List.Mode.CHECKBOX}
                          items={filteredData.length > 0 ?
                              filteredData
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
                          onChange={this.changeHandle}/>

                </Popup>

            </div>
        );
    }

};

MultipleSelect.propTypes = {

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
     * The name of the auto complete.
     */
    name: PropTypes.string,

    /**
     * The placeholder of the field.
     */
    placeholder: PropTypes.string,

    /**
     * Children passed into the List.
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
        theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

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
     * If true, the auto complete will be disabled.
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
     * If true, the popup list automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    /**
     * Callback function fired when value changed.
     */
    filterCallback: PropTypes.func,

    /**
     * Use this property to display an icon.
     */
    iconCls: PropTypes.string,

    /**
     * Use this property to display an icon.
     */
    rightIconCls: PropTypes.string,

    /**
     *
     */
    noMatchedMsg: PropTypes.string,

    /**
     *
     */
    isGrouped: PropTypes.bool,

    /**
     * select callback.
     */
    onChange: PropTypes.func,

    /**
     * focus callback.
     */
    onFocus: PropTypes.func,

    /**
     * blur callback.
     */
    onBlur: PropTypes.func

};

MultipleSelect.defaultProps = {

    className: '',
    popupClassName: '',
    style: {},

    name: '',
    placeholder: '',
    data: [],
    disabled: false,
    valueField: 'value',
    displayField: 'text',
    autoClose: false,
    iconCls: '',
    rightIconCls: '',
    noMatchedMsg: '',
    isGrouped: false

};