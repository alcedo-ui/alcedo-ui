import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './LocalAutoComplete.css';

export default class LocalAutoComplete extends Component {

    constructor(props) {

        super(props);

        this.triggerEl = null;

        this.state = {
            value: props.value,
            filter: '',
            popupVisible: false,
            isAbove: false
        };

        this.isAbove = this::this.isAbove;
        this.filterData = this::this.filterData;
        this.focusHandle = this::this.focusHandle;
        this.blurHandle = this::this.blurHandle;
        this.filterChangeHandle = this::this.filterChangeHandle;
        this.closePopup = this::this.closePopup;
        this.popupRenderHandle = this::this.popupRenderHandle;
        this.changeHandle = this::this.changeHandle;

    }

    isAbove() {

        const autoComplete = this.refs.autoComplete;

        if (!this.popupHeight || !autoComplete) {
            return false;
        }

        const {top} = Util.getOffset(autoComplete),
            scrollTop = (SCROLL_EL && SCROLL_EL.scrollTop) || document.body.scrollTop;

        if (top + this.triggerHeight + this.popupHeight - scrollTop > window.innerHeight) {
            return true;
        }

        return false;

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

    focusHandle() {

        const {disabled, onFocus} = this.props,
            {filter} = this.state;

        !disabled && filter && this.setState({
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
                popupVisible: !!filter
            };

        if (!filter) {
            state.value = undefined;
        }

        this.setState(state, () => {

            if (state.value !== value) {

                const {onFilterChange, onChange} = this.props;

                onFilterChange && onFilterChange(filter);
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

        const {autoClose, valueField, displayField} = this.props,
            state = {
                value,
                filter: Util.getTextByDisplayField(value, displayField, valueField)
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
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {
                className, popupClassName, style, popupStyle, name, placeholder, isGrouped,
                disabled, iconCls, rightIconCls, valueField, displayField, noMatchedMsg, onFilterPressEnter
            } = this.props,
            {isAbove, value, filter, popupVisible} = this.state,

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

            triggerClassName = (popupVisible ? ' activated' : '') + (isAbove ? ' above' : ' blow'),
            autoCompletePopupClassName = (isAbove ? ' above' : ' blow') + (popupClassName ? ' ' + popupClassName : ''),
            autoCompletePopupStyle = Object.assign({
                width: this.triggerEl && getComputedStyle(this.triggerEl).width
            }, popupStyle),

            listData = this.filterData(),
            isEmpty = listData.length < 1;

        return (
            <div ref="autoComplete"
                 className={`local-auto-complete ${className}`}
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
                           className={'local-auto-complete-trigger' + triggerClassName}
                           value={filter}
                           placeholder={placeholder}
                           disabled={disabled}
                           iconCls={iconCls}
                           rightIconCls={rightIconCls || 'fa fa-search'}
                           onFocus={this.focusHandle}
                           onBlur={this.blurHandle}
                           onChange={this.filterChangeHandle}
                           onPressEnter={onFilterPressEnter}/>

                <Popup className={'local-auto-complete-popup' + autoCompletePopupClassName}
                       style={autoCompletePopupStyle}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       hasTriangle={false}
                       triggerMode={Popup.TriggerMode.OPEN}
                       position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                       onRender={this.popupRenderHandle}
                       onRequestClose={this.closePopup}>

                    <List className="local-auto-complete-list"
                          value={value}
                          mode={isEmpty ? List.Mode.NORMAL : List.Mode.RADIO}
                          isGrouped={isEmpty ? false : isGrouped}
                          items={isEmpty ? emptyEl : listData}
                          valueField={valueField}
                          displayField={displayField}
                          onChange={this.changeHandle}/>

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
     *
     */
    onFilterChange: PropTypes.func,

    /**
     *
     */
    onFilterPressEnter: PropTypes.func,

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

LocalAutoComplete.defaultProps = {

    className: '',
    popupClassName: '',
    style: null,
    popupStyle: null,

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