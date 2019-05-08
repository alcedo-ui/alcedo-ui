/**
 * @file EditableSelect component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import DynamicRenderList from '../DynamicRenderList';
import GroupList from '../GroupList';

import Theme from '../Theme';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import DropdownCalculation from '../_vendors/DropdownCalculation';
import ComponentUtil from '../_vendors/ComponentUtil';

class EditableSelect extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapper = createRef();
        this.wrapperEl = null;
        this.trigger = createRef();
        this.triggerEl = null;

        this.state = {
            value: props.value,
            listValue: props.value,
            filter: '',
            popupVisible: false,
            isAbove: false
        };

    }

    handleChangeValue = value => {
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
    };

    showPopup = () => {
        this.setState({
            popupVisible: true
        }, () => {
            this.props.onTriggerClick && this.props.onTriggerClick(this.state.popupVisible);
            this.props.onFocus && this.props.onFocus();
        });
    };

    closePopup = () => {
        this.setState({
            popupVisible: false
        }, () => {
            this.props.onTriggerClick && this.props.onTriggerClick(this.state.popupVisible);
            this.props.onPopupClosed && this.props.onPopupClosed();
        });
    };

    triggerHandler = (el, triggerEl, popupEl, currentVisible, isBlurClose) => {

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

    };

    filterData = (filter = this.state.filter, data = this.props.data) => {

        if (!filter) {
            return data;
        }

        const {displayField, isGrouped} = this.props,
            filterFunc = originData => {
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

    };

    handlePopupRender = popupEl => {
        const isAbove = DropdownCalculation.isAbove(this.wrapperEl, this.triggerEl, findDOMNode(popupEl));
        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }
    };

    handleChange = value => {

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

    };

    componentDidMount() {
        this.wrapperEl = this.wrapper && this.wrapper.current;
        this.triggerEl = this.trigger && this.trigger.current && findDOMNode(this.trigger.current);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {
                className, popupClassName, style, popupStyle, name, placeholder,
                disabled, valueField, descriptionField, position, rightIconCls, resetPopPositionWait,
                triggerTheme, isGrouped, onItemClick, renderer, noMatchedMsg, useDynamicRenderList,
                onMouseOver, onMouseOut, parentEl
            } = this.props,
            {value, listValue, popupVisible, isAbove} = this.state,

            isAboveFinally = position === Position.TOP || position === Position.TOP_LEFT
                || position === Position.TOP_RIGHT || (!position && isAbove),
            listData = this.filterData();

        return (
            <div ref={this.wrapper}
                 className={classNames('editable-select', {
                     [className]: className
                 })}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={value}/>
                        :
                        null
                }

                <TextField ref={this.trigger}
                           className={classNames('editable-select-trigger', isAboveFinally ? 'above' : 'blow', {
                               activated: popupVisible,
                               empty: !value
                           })}
                           value={value}
                           rightIconCls={`${rightIconCls} editable-select-trigger-icon`}
                           placeholder={placeholder}
                           disabled={disabled}
                           theme={triggerTheme}
                           onMouseOver={onMouseOver}
                           onMouseOut={onMouseOut}
                           onChange={this.handleChangeValue}
                           onFocus={this.showPopup}/>

                <Popup className={classNames('editable-select-popup', isAboveFinally ? 'above' : 'blow', {
                    [popupClassName]: popupClassName
                })}
                       style={Object.assign({
                           width: this.triggerEl && getComputedStyle(this.triggerEl).width
                       }, popupStyle)}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       triggerHandler={this.triggerHandler}
                       parentEl={parentEl}
                       hasTriangle={false}
                       position={position ? position : (isAbove ? Position.TOP_LEFT : Position.BOTTOM_LEFT)}
                       resetPositionWait={resetPopPositionWait}
                       onRender={this.handlePopupRender}
                       onRequestClose={this.closePopup}>

                    {
                        listData.length < 1 ?
                            <div className="no-matched">
                                {
                                    noMatchedMsg ?
                                        noMatchedMsg
                                        :
                                        <span>
                                            <i className="fas fa-exclamation-triangle no-matched-icon"></i>
                                            No matched value.
                                        </span>
                                }
                            </div>
                            :
                            isGrouped ?
                                <GroupList className="editable-select-list"
                                           data={listData}
                                           value={listValue}
                                           valueField={valueField}
                                           displayField={valueField}
                                           descriptionField={descriptionField}
                                           renderer={renderer}
                                           onItemClick={this.onItemClick}
                                           onChange={this.changeHandler}/>
                                :
                                useDynamicRenderList ?
                                    <DynamicRenderList className="editable-select-list"
                                                       data={listData}
                                                       value={listValue}
                                                       valueField={valueField}
                                                       displayField={valueField}
                                                       descriptionField={descriptionField}
                                                       renderer={renderer}
                                                       onItemClick={onItemClick}
                                                       onChange={this.handleChange}/>
                                    :
                                    <List className="editable-select-list"
                                          data={listData}
                                          valueField={valueField}
                                          value={listValue}
                                          displayField={valueField}
                                          descriptionField={descriptionField}
                                          renderer={renderer}
                                          onItemClick={onItemClick}
                                          onChange={this.handleChange}/>
                    }

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

    rightIconCls: PropTypes.string,

    /**
     * Override the styles of the popup element.
     */
    popupStyle: PropTypes.object,

    position: PropTypes.oneOf(Util.enumerateValue(Position)),

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
     * The theme of editableSelect.Can be primary,highlight,success,warning,error.
     */
    triggerTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * If true,the drop-down box will be have group selection.
     */
    isGrouped: PropTypes.bool,

    resetPopPositionWait: PropTypes.number,
    noMatchedMsg: PropTypes.string,
    useDynamicRenderList: PropTypes.bool,
    parentEl: PropTypes.object,

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onItemClick: PropTypes.func,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func,

    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    onTriggerClick: PropTypes.func,
    onFocus: PropTypes.func,
    onPopupClosed: PropTypes.func

};

EditableSelect.defaultProps = {

    name: '',
    value: '',
    placeholder: 'Please select ...',
    rightIconCls: 'fas fa-angle-down',
    data: [],
    invalidMsg: '',
    disabled: false,

    displayField: 'text',
    descriptionField: 'desc',

    infoMsg: '',
    autoClose: true,
    useFilter: false,
    useDynamicRenderList: false,
    triggerTheme: Theme.DEFAULT,
    isGrouped: false,
    resetPopPositionWait: 250

};

export default EditableSelect;
