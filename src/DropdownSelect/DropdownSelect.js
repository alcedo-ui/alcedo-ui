import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Util from '../_vendors/Util';

import RaisedButton from '../RaisedButton';
import Popup from '../Popup';
import List from '../List';
import Theme from '../Theme';

import './DropdownSelect.css';

export default class DropdownSelect extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: props.value,
            popupVisible: false
        };

        this.isAbove = this::this.isAbove;
        this.getValue = this::this.getValue;
        this.itemTouchTapHandle = this::this.itemTouchTapHandle;
        this.togglePopup = this::this.togglePopup;
        this.closePopup = this::this.closePopup;
        this.formatData = this::this.formatData;

    }

    isAbove(optionsHeight) {

        if (optionsHeight && this.refs.DropdownSelect) {
            const {top} = Util.getOffset(this.refs.DropdownSelect),
                scrollTop = SCROLL_EL ? SCROLL_EL.scrollTop : document.body.scrollTop;
            if (top + this.triggerHeight + optionsHeight - scrollTop > window.innerHeight) {
                return true;
            }
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

    itemTouchTapHandle(item, callback) {

        return (function (item, callback) {

            const {autoClose, onChange} = this.props,
                state = {
                    filter: this.getValue(item),
                    value: item
                };

            if (autoClose === true) {
                state.popupVisible = false;
            }

            this.setState(state, () => {
                onChange && onChange(item);
                callback && typeof callback === 'function' && callback();
            });

        }).bind(this, item, callback);

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

    formatData(data = this.props.data) {

        return (
            data.map(listItem => {

                if (typeof listItem === 'object') {

                    let item = _.cloneDeep(listItem);
                    item.raw = listItem;
                    item.onTouchTap = this.itemTouchTapHandle(listItem, listItem.onTouchTap);

                    return item;

                }

                return {
                    raw: listItem,
                    value: listItem,
                    onTouchTap: this.itemTouchTapHandle(listItem)
                };

            })
        );

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    componentDidMount() {
        this.triggerEl = require('react-dom').findDOMNode(this.refs.trigger);
        this.triggerHeight = this.triggerEl.clientHeight;
    }

    render() {

        const {
                className, style, name, placeholder, disabled, data, popupClassName, optionsMaxHeight
            } = this.props,
            {popupVisible, value} = this.state,
            popupStyle = {
                width: this.triggerEl && getComputedStyle(this.triggerEl).width,
                height: optionsMaxHeight
            };

        let above = false;

        return (
            <div ref="DropdownSelect"
                 className={'dropdown-select' + (className ? ' ' + className : '')}
                 style={style}>

                {
                    name && value ?
                        <input type="hidden"
                               name={name}
                               value={value}/>
                        :
                        null
                }

                <RaisedButton ref="trigger"
                              className={`dropdown-select-trigger ${value ? '' : 'empty'}`}
                              value={(typeof value === 'object' ? value.text : value) || placeholder}
                              rightIconCls={`fa fa-angle-${above ? 'down' : 'up'} dropdown-select-trigger-right-icon`}
                              disabled={disabled}
                              onTouchTap={this.togglePopup}/>

                <Popup className={`dropdown-select-popup ${popupClassName}`}
                       style={popupStyle}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       hasTriangle={false}
                       onRequestClose={this.closePopup}>

                    <List className="dropdown-select-list"
                          items={this.formatData(data)}/>

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
     * The invalid message of dropDownSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the dropDownSelect will be disabled.
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
     * The maxHeight of the drop-down box.
     */
    optionsMaxHeight: PropTypes.number,

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
    value: '',
    placeholder: 'Please select ...',
    data: [],
    invalidMsg: '',
    disabled: false,
    valueField: 'value',
    displayField: 'text',
    infoMsg: '',
    autoClose: true,
    optionsMaxHeight: 250

};