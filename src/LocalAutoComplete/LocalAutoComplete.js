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
            filter: '',
            popupVisible: false,
            filteredData: this.formatData(this.filterData('', props.data))
        };

        this.itemTouchTapHandle = this::this.itemTouchTapHandle;
        this.filterData = this::this.filterData;
        this.formatData = this::this.formatData;
        this.focusHandle = this::this.focusHandle;
        this.changeHandle = this::this.changeHandle;
        this.closePopup = this::this.closePopup;

    }

    itemTouchTapHandle(item, callback) {

        return (function (item, callback) {

            const {autoClose, onChange} = this.props;

            function cb() {
                onChange && onChange(item);
                callback && typeof callback === 'function' && callback();
            }

            if (autoClose === true) {

                this.setState({
                    popupVisible: false
                }, () => {
                    cb();
                });

            } else {
                cb();
            }

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
        this.setState({
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

        const {className, style} = this.props;
        const {filter, popupVisible, filteredData} = this.state;

        return (
            <div className={`auto-complete ${className}`}
                 style={style}>

                <TextField ref="trigger"
                           className="auto-complete-trigger"
                           value={filter}
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
     * Callback function fired when value changed.
     */
    filterCallback: PropTypes.func,

    /**
     * If true, the popup list automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    /**
     * select callback.
     */
    onChange: PropTypes.func

};

LocalAutoComplete.defaultProps = {

    className: '',
    style: {},

    value: '',
    data: []

};