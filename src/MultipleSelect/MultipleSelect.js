/**
 * @file MultipleSelect component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import IconButton from '../IconButton';
import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import GroupList from '../GroupList';
import DynamicRenderList from '../DynamicRenderList';
import Theme from '../Theme';

import SelectMode from '../_statics/SelectMode';

import PureRender from '../_vendors/PureRender';
import Util from '../_vendors/Util';
import DropdownCalculation from '../_vendors/DropdownCalculation';

@PureRender
class MultipleSelect extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.triggerEl = null;

        this.state = {
            selectedCollapsed: true,
            value: props.value,
            filter: '',
            popupVisible: false,
            isAbove: false
        };

        this.filterData = ::this.filterData;
        this.removeSelected = ::this.removeSelected;
        this.toggleSelectedCollapse = ::this.toggleSelectedCollapse;
        this.focusHandler = ::this.focusHandler;
        this.blurHandler = ::this.blurHandler;
        this.filterChangeHandler = ::this.filterChangeHandler;
        this.closePopup = ::this.closePopup;
        this.popupRenderHandler = ::this.popupRenderHandler;
        this.changeHandler = ::this.changeHandler;
        this.triggerHandler = ::this.triggerHandler;

    }

    filterData(filter = this.state.filter, data = this.props.data) {

        if (!filter) {
            return data;
        }

        const {displayField, filterCallback, isGrouped} = this.props;

        if (filterCallback) {
            return filterCallback(filter, data);
        }

        const filterFunc = (originData) => {
            return originData.filter(item => typeof item === 'object' && !!item[displayField] ?
                item[displayField].toString().toUpperCase().includes(filter.toUpperCase())
                :
                item.toString().toUpperCase().includes(filter.toUpperCase()));
        };

        if (isGrouped) {
            return data.map(group => {

                const children = filterFunc(group.children);

                if (children.length < 1) {
                    return;
                } else {
                    return {
                        ...group,
                        children
                    };
                }

            }).filter(item => !!item);
        }

        return filterFunc(data);

    }

    removeSelected(index, e) {

        e.preventDefault();

        setTimeout(() => {

            const {value} = this.state;

            if (!value || value.length < 1) {
                return;
            }

            value.splice(index, 1);

            this.setState({
                value
            }, () => {
                const {onChange} = this.props;
                onChange && onChange(value);
            });

        }, 0);

    }

    toggleSelectedCollapse() {
        this.setState({
            selectedCollapsed: !this.state.selectedCollapsed,
            popupVisible: false
        });
    }

    focusHandler() {

        const {disabled, onFocus} = this.props;

        !disabled && this.setState({
            popupVisible: true
        }, () => {
            onFocus && onFocus();
        });

    }

    blurHandler() {

        const {disabled, onBlur} = this.props;

        !disabled && onBlur && onBlur();

    }

    filterChangeHandler(filter) {
        this.setState({
            filter
        });
    }

    closePopup() {
        this.setState({
            popupVisible: false
        });
    }

    popupRenderHandler(popupEl) {

        const isAbove = DropdownCalculation.isAbove(this.multipleSelectEl, this.triggerEl, findDOMNode(popupEl));

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

            const {onChange} = this.props,
                self = this;
            onChange && onChange(value);

            setTimeout(() => {
                self.popupRef.resetPosition();
            }, 0);

        });

    }

    triggerHandler(el, triggerEl, popupEl, currentVisible) {

        if (!triggerEl) {
            return true;
        }

        while (el) {
            if (el == this.refs.multipleSelect || el == popupEl || el == triggerEl) {
                return currentVisible;
            }
            el = el.parentNode;
        }

        return false;

    }

    componentDidMount() {
        this.multipleSelectEl = this.refs.multipleSelect;
        this.triggerEl = findDOMNode(this.refs.trigger);
        this.popupRef = this.refs.popup;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {
                className, popupClassName, style, popupStyle, theme, name, placeholder, isGrouped,
                useDynamicRenderList, listHeight, itemHeight, scrollBuffer,
                disabled, iconCls, rightIconCls, valueField, displayField, descriptionField, noMatchedMsg
            } = this.props,
            {selectedCollapsed, isAbove, value, filter, popupVisible} = this.state,

            emptyEl = [{
                itemRenderer() {
                    return (
                        <div className="no-matched-list-item">

                            {
                                noMatchedMsg ?
                                    noMatchedMsg
                                    :
                                    <span>
                                        <i className="fas fa-exclamation-triangle no-matched-list-item-icon"></i>
                                        No matched value.
                                    </span>
                            }

                        </div>
                    );
                }
            }],

            valueLen = (value ? value.length : 0),

            multipleSelectClassName = classNames('multiple-select', isAbove ? 'above' : 'blow', {
                [`theme-${theme}`]: theme,
                'not-empty': valueLen > 0,
                activated: popupVisible,
                [className]: className
            }),

            selectedClassName = classNames('multiple-select-selected-wrapper', isAbove ? 'above' : 'blow', {
                collapsed: selectedCollapsed
            }),

            selectPopupClassName = classNames('multiple-select-popup', isAbove ? 'above' : 'blow', {
                [popupClassName]: popupClassName
            }),
            selectPopupStyle = Object.assign({
                width: this.triggerEl && getComputedStyle(this.triggerEl).width
            }, popupStyle),

            listData = this.filterData(),
            isEmpty = listData.length < 1;

        return (
            <div ref="multipleSelect"
                 className={multipleSelectClassName}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={Util.getValueByValueField(value, valueField, displayField)}/>
                        :
                        null
                }

                {
                    value && valueLen > 0 ?
                        (
                            <div className={selectedClassName}>

                                <div className="multiple-select-selected-count">
                                    {`${valueLen} selected`}
                                </div>

                                {
                                    value.map((item, index) => {

                                        const text = Util.getTextByDisplayField(item, displayField, valueField);

                                        return (
                                            <div key={index}
                                                 className="multiple-select-selected"
                                                 title={text}>
                                                {text}
                                                <div className="multiple-select-selected-remove-button"
                                                     onTouchTap={(e) => {
                                                         e.preventDefault();
                                                         this.removeSelected(index, e);
                                                     }}>
                                                    ×
                                                </div>
                                            </div>
                                        );
                                    })
                                }

                                <IconButton className="multiple-select-selected-collapse-button"
                                            iconCls="fas fa-angle-double-up"
                                            onTouchTap={this.toggleSelectedCollapse}/>

                            </div>
                        )
                        :
                        null
                }

                <TextField ref="trigger"
                           className="multiple-select-trigger"
                           theme={theme}
                           value={filter}
                           placeholder={placeholder}
                           disabled={disabled}
                           iconCls={iconCls}
                           rightIconCls={rightIconCls || 'fas fa-search'}
                           onFocus={this.focusHandler}
                           onBlur={this.blurHandler}
                           onChange={this.filterChangeHandler}/>

                <Popup ref="popup"
                       className={selectPopupClassName}
                       style={selectPopupStyle}
                       theme={theme}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       hasTriangle={false}
                       position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                       onRender={this.popupRenderHandler}
                       onRequestClose={this.closePopup}>

                    {
                        isGrouped ?
                            <GroupList className="multiple-select-list"
                                       theme={theme}
                                       value={value}
                                       selectMode={isEmpty ? SelectMode.DEFAULT : SelectMode.MULTI_SELECT}
                                       data={isEmpty ? emptyEl : listData}
                                       valueField={valueField}
                                       displayField={displayField}
                                       descriptionField={descriptionField}
                                       onChange={this.changeHandler}/>
                            :
                            useDynamicRenderList ?
                                <DynamicRenderList className="multiple-select-list"
                                                   theme={theme}
                                                   value={value}
                                                   selectMode={isEmpty ? SelectMode.DEFAULT : SelectMode.MULTI_SELECT}
                                                   data={isEmpty ? emptyEl : listData}
                                                   valueField={valueField}
                                                   displayField={displayField}
                                                   descriptionField={descriptionField}
                                                   listHeight={listHeight}
                                                   itemHeight={itemHeight}
                                                   scrollBuffer={scrollBuffer}
                                                   onChange={this.changeHandler}/>
                                :
                                <List className="multiple-select-list"
                                      theme={theme}
                                      value={value}
                                      selectMode={isEmpty ? SelectMode.DEFAULT : SelectMode.MULTI_SELECT}
                                      data={isEmpty ? emptyEl : listData}
                                      valueField={valueField}
                                      displayField={displayField}
                                      descriptionField={descriptionField}
                                      onChange={this.changeHandler}/>
                    }

                </Popup>

            </div>
        );
    }

}

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
     * Override the styles of the popup element.
     */
    popupStyle: PropTypes.object,

    /**
     * The theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

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
     * The description field name in data. (default: "desc")
     */
    descriptionField: PropTypes.string,

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
     * The message of no value matched.
     */
    noMatchedMsg: PropTypes.string,

    /**
     * If true,the multipleSelect will be grouped.
     */
    isGrouped: PropTypes.bool,

    useDynamicRenderList: PropTypes.bool,
    listHeight: PropTypes.number,
    itemHeight: PropTypes.number,
    scrollBuffer: PropTypes.number,

    /**
     * Callback function fired when MultipleSelect changed.
     */
    onChange: PropTypes.func,

    /**
     * Callback function fired when the text field focused.
     */
    onFocus: PropTypes.func,

    /**
     * Callback function fired when the text field Defocused.
     */
    onBlur: PropTypes.func

};

MultipleSelect.defaultProps = {

    theme: Theme.DEFAULT,

    name: '',
    placeholder: '',
    data: [],
    disabled: false,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    autoClose: false,
    iconCls: '',
    rightIconCls: '',
    noMatchedMsg: '',
    isGrouped: false,
    useDynamicRenderList: false

};

export default MultipleSelect;