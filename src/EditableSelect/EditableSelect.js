/**
 * @file EditableSelect component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import DropdownCalculation from '../_vendors/DropdownCalculation';

class EditableSelect extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            listValue: props.value,
            filter: '',
            popupVisible: false,
            isAbove: false
        };

        this.showPopup = ::this.showPopup;
        this.closePopup = ::this.closePopup;
        this.filterData = ::this.filterData;
        this.popupRenderHandle = ::this.popupRenderHandle;
        this.changeHandle = ::this.changeHandle;
        this.onChangeValue = ::this.onChangeValue;

    }

    onChangeValue(value) {
        const {useFilter} = this.props;
        if (useFilter) {
            this.setState({
                value,
                filter: value,
                listValue: ''
            }, () => {
                const {onChange} = this.props;
                onChange && onChange(value);
            });
        } else {
            this.setState({
                value,
                listValue: ''
            }, () => {
                const {onChange} = this.props;
                onChange && onChange(value);
            });
        }

    }

    showPopup() {
        this.setState({
            popupVisible: true
        }, () => {
            this.props.onTriggerTouchTap && this.props.onTriggerTouchTap(this.state.popupVisible);
            this.props.onFocus && this.props.onFocus();
        });
    }

    closePopup() {
        this.setState({
            popupVisible: false
        }, () => {
            this.props.onTriggerTouchTap && this.props.onTriggerTouchTap(this.state.popupVisible);
            this.props.onPopupClosed && this.props.onPopupClosed();
        });
    }

    triggerHandler(el, triggerEl, popupEl, currentVisible, isBlurClose) {

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

        return isBlurClose ? false : currentVisible;

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

        const isAbove = DropdownCalculation.isAbove(this.editabledSelectEl, this.triggerEl, findDOMNode(popupEl));

        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

    }

    changeHandle(value) {
        const {valueField, renderer} = this.props;
        let itemValue = renderer ? renderer(value) : (typeof value == 'object' ? value[valueField] : value);
        const {autoClose} = this.props,
            state = {
                value: itemValue,
                listValue: value
            };

        if (autoClose) {
            state.popupVisible = false;
        }

        this.setState(state, () => {
            const {onChange} = this.props;
            onChange && onChange(itemValue);
        });

    }

    componentDidMount() {
        this.editabledSelectEl = this.refs.editabledSelect;
        this.triggerEl = findDOMNode(this.refs.trigger);
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
                disabled, useFilter, valueField, descriptionField, noMatchedMsg,
                triggerTheme, isGrouped, onItemTouchTap, renderer,
                onMouseOver, onMouseOut
            } = this.props,
            {value, listValue, filter, popupVisible, isAbove} = this.state,

            triggerClassName = classNames('editable-select-trigger', isAbove ? 'above' : 'blow', {
                activated: popupVisible,
                empty: !value
            }),

            editableSelectPopupClassName = classNames('editable-select-popup', isAbove ? 'above' : 'blow', {
                [popupClassName]: popupClassName
            }),

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
                               value={value}/>
                        :
                        null
                }

                <TextField ref="trigger"
                           className={triggerClassName}
                           value={value}
                           rightIconCls={`fas fa-angle-${isAbove ? 'up' : 'down'} editable-select-trigger-icon`}
                           placeholder={placeholder}
                           disabled={disabled}
                           theme={triggerTheme}
                           onMouseOver={onMouseOver}
                           onMouseOut={onMouseOut}
                           onChange={this.onChangeValue}
                           onFocus={this.showPopup}/>

                <Popup ref="popup"
                       className={editableSelectPopupClassName}
                       style={editablePopupStyle}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       triggerHandler={this.triggerHandler}
                       hasTriangle={false}
                       position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                       onRender={this.popupRenderHandle}
                       onRequestClose={this.closePopup}>

                    <List className="editable-select-list"
                          isGrouped={isGrouped}
                          data={listData.length < 1 ? [] : listData}
                          valueField={valueField}
                          value={listValue}
                          displayField={valueField}
                          descriptionField={descriptionField}
                          renderer={renderer}
                          onItemTouchTap={onItemTouchTap}
                          onChange={this.changeHandle}/>

                </Popup>

            </div>
        );

    }
}

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
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

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
            onClick: PropTypes.func

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
    onChange: PropTypes.func,

    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func

};

EditableSelect.defaultProps = {

    name: '',
    value: '',
    placeholder: 'Please select ...',
    data: [],
    invalidMsg: '',
    disabled: false,

    displayField: 'text',
    descriptionField: 'desc',

    infoMsg: '',
    autoClose: true,
    useFilter: false,
    noMatchedMsg: '',
    triggerTheme: Theme.DEFAULT,
    isGrouped: false

};

export default EditableSelect;