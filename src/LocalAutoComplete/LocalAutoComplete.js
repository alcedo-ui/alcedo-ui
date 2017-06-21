import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import Theme from '../Theme';

import './LocalAutoComplete.css';

export default class LocalAutoComplete extends Component {

    constructor(props) {

        super(props);

        this.triggerEl = null;

        this.state = {
            value: null,
            filter: '',
            popupVisible: false,
            filteredData: this.formatData(this.filterData('', props.data))
        };

        this.getValue = this::this.getValue;
        this.itemTouchTapHandle = this::this.itemTouchTapHandle;
        this.filterData = this::this.filterData;
        this.formatData = this::this.formatData;
        this.focusHandle = this::this.focusHandle;
        this.changeHandle = this::this.changeHandle;
        this.closePopup = this::this.closePopup;

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

    filterData(filter = this.state.filter, data = this.props.data) {

        const {filterCallback} = this.props;

        if (filterCallback) {
            return filterCallback(filter, data);
        }

        return data.filter(item => {
            return typeof item === 'object' && item.value ?
                item.value.includes(filter)
                :
                item.includes(filter);
        });

    }

    formatData(data = this.props.data) {

        return data.map(listItem => {

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

        });

    }

    focusHandle() {
        !this.props.disabled && this.setState({
            popupVisible: true
        });
    }

    changeHandle(filter) {
        this.setState({
            filter,
            filteredData: this.formatData(this.filterData(filter))
        });
    }

    closePopup() {
        this.setState({
            popupVisible: false
        });
    }

    componentDidMount() {
        this.triggerEl = require('react-dom').findDOMNode(this.refs.trigger);
    }

    render() {

        const {className, style, name, disabled} = this.props;
        const {value, filter, popupVisible, filteredData} = this.state;

        return (
            <div className={`auto-complete ${className}`}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={this.getValue(value)}/>
                        :
                        null
                }

                <TextField ref="trigger"
                           className="auto-complete-trigger"
                           value={filter}
                           disabled={disabled}
                           onFocus={this.focusHandle}
                           onChange={this.changeHandle}/>

                <Popup className="auto-complete-popup"
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       hasTriangle={false}
                       triggerMode={Popup.TriggerMode.OPEN}
                       onRequestClose={this.closePopup}>

                    <List className="auto-complete-list"
                          items={filteredData}/>

                </Popup>

            </div>
        );
    }

};

LocalAutoComplete.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The name of the auto complete.
     */
    name: PropTypes.string,

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
     * select callback.
     */
    onChange: PropTypes.func

};

LocalAutoComplete.defaultProps = {

    className: '',
    style: {},

    name: '',
    data: [],
    disabled: false,
    valueField: 'value',
    displayField: 'text',
    autoClose: false

};