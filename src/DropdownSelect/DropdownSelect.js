/**
 * @file DropdownSelect component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Dropdown from '../Dropdown';
import TextField from '../TextField';
import List from '../List';
import DynamicRenderList from '../DynamicRenderList';
import Checkbox from '../Checkbox';
import Theme from '../Theme';

import SelectMode from '../_statics/SelectMode';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

class DropdownSelect extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;
    static Position = Dropdown.Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            filter: '',
            popupVisible: false
        };

    }

    closePopup = () => {
        this.refs.dropdown && this.refs.dropdown.closePopup();
    };

    filterChangeHandler = filter => {
        this.setState({
            filter
        });
    };

    filterData = (filter = this.state.filter, data = this.props.data) => {

        if (!filter) {
            return data;
        }

        const {displayField, isGrouped} = this.props,
            filterFunc = originData => originData.filter(item => typeof item === 'object' && !!item[displayField] ?
                item[displayField].toString().toUpperCase().includes(filter.toUpperCase())
                :
                item.toString().toUpperCase().includes(filter.toUpperCase()));

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

    selectAllClickHandler = () => {

        const {data} = this.props,
            {value} = this.state;

        if (!data) {
            return;
        }

        const isSelectAll = !value || (value && value.length < data.length),
            newValue = isSelectAll ? data : [];

        this.setState({
            value: newValue
        }, () => {
            this.changeHandler(newValue);
        });

    };

    itemClickHandler = (...args) => {

        const {autoClose, onItemClick} = this.props;

        if (autoClose) {
            this.closePopup();
        }

        onItemClick && onItemClick(...args);

    };

    changeHandler = value => {

        const {autoClose} = this.props;
        if (autoClose) {
            this.closePopup();
        }

        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

        setTimeout(() => {
            this.refs.hiddenFilter && this.refs.hiddenFilter.focus();
        }, 1000);
    };

    popupOpenHandler = e => {

        this.refs.hiddenFilter && this.refs.hiddenFilter.focus();

        this.setState({
            popupVisible: true
        }, () => {
            const {onOpenPopup} = this.props;
            onOpenPopup && onOpenPopup(e);
        });
    };

    popupCloseHandler = e => {

        this.refs.hiddenFilter && this.refs.hiddenFilter.blur();

        this.setState({
            popupVisible: false
        }, () => {
            const {onClosePopup} = this.props;
            onClosePopup && onClosePopup(e);
        });
    };

    hiddenFilterChangeHandle = e => {

        const {data, displayField, clearHiddenInputFilterInterval} = this.props;

        if (!data) {
            return;
        }

        let target = e.target,
            timer = setTimeout(() => {
                clearTimeout(timer);
                target.value = '';
            }, clearHiddenInputFilterInterval);

        let index = data.findIndex(item =>
            typeof item === 'object' ?
                item[displayField].toUpperCase().startsWith(target.value.toUpperCase())
                :
                item.toUpperCase().startsWith(target.value.toUpperCase())
        );

        this.scrollTo(this.refs.dropdownSelectListScroller, (index) * 40, 200);

    };

    scrollTo = (element, to, duration) => {

        if (!element) {
            return;
        }

        // jump to target if duration zero
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }

        const difference = to - element.scrollTop,
            perTick = difference / duration * 10;

        setTimeout(() => {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) return;
            this.scrollTo(element, to, duration - 10);
        }, 10);

    };

    getTriggerValue = () => {

        const {placeholder, triggerRenderer, renderer, valueField, displayField, selectMode} = this.props,
            {value} = this.state,
            isMultiSelect = selectMode === SelectMode.MULTI_SELECT;

        if (triggerRenderer) {
            return typeof triggerRenderer === 'function' ? triggerRenderer(value) : triggerRenderer;
        }

        if (!value) {
            return placeholder;
        }

        return isMultiSelect ?
            (
                value.length > 0 ?
                    value.length + ' selected'
                    :
                    placeholder
            )
            :
            (
                renderer ?
                    renderer(value)
                    :
                    Util.getTextByDisplayField(value, displayField, valueField)
            );

    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {

                className, triggerClassName, popupClassName, style, name, popupTheme, data, triggerRenderer,
                useDynamicRenderList, listHeight, itemHeight, scrollBuffer, renderer, selectMode,
                useFilter, useSelectAll, selectAllText, valueField, displayField, descriptionField, popupChildren,
                isHiddenInputFilter, noMatchedMsg,

                ...restProps

            } = this.props,
            {value, filter, popupVisible} = this.state,

            isMultiSelect = selectMode === SelectMode.MULTI_SELECT,

            selectClassName = classNames('dropdown-select', {
                activated: popupVisible,
                [className]: className
            }),
            dropdownTriggerClassName = classNames({
                empty: !triggerRenderer && !value,
                [triggerClassName]: triggerClassName
            }),

            listData = this.filterData();

        return (
            <div ref="dropdownSelect"
                 className={selectClassName}
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
                    isHiddenInputFilter ?
                        <input className="hiddenFilter"
                               type="text"
                               ref="hiddenFilter"
                               onChange={this.hiddenFilterChangeHandle}/>
                        :
                        null
                }


                <Dropdown {...restProps}
                          ref="dropdown"
                          triggerClassName={dropdownTriggerClassName}
                          popupClassName={'dropdown-select-popup' + (popupClassName ? ' ' + popupClassName : '')}
                          popupTheme={popupTheme}
                          triggerValue={this.getTriggerValue()}
                          onOpenPopup={this.popupOpenHandler}
                          onClosePopup={this.popupCloseHandler}>

                    <div className="dropdown-select-popup-fixed">

                        {
                            useFilter ?
                                <TextField className="dropdown-select-filter"
                                           value={filter}
                                           rightIconCls="fas fa-search"
                                           onChange={this.filterChangeHandler}/>
                                :
                                null
                        }

                        {
                            isMultiSelect && useSelectAll ?
                                <div className="list-item dropdown-select-all-wrapper"
                                     onClick={this.selectAllClickHandler}>
                                    <Checkbox className="list-item-select"
                                              checked={data && value && value.length === data.length}
                                              indeterminate={data && value && value.length > 0 && value.length < data.length}/>
                                    {selectAllText}
                                </div>
                                :
                                null
                        }

                    </div>

                    <div className="dropdown-select-list-scroller"
                         ref="dropdownSelectListScroller"
                         onWheel={e => Event.wheelHandler(e, this.props)}>

                        {
                            useFilter ?
                                <div className="dropdown-select-filter-placeholder"></div>
                                :
                                null
                        }

                        {
                            isMultiSelect && useSelectAll ?
                                <div className="dropdown-select-all-placeholder"></div>
                                :
                                null
                        }

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
                                useDynamicRenderList ?
                                    <DynamicRenderList className="dropdown-select-list"
                                                       theme={popupTheme}
                                                       selectMode={selectMode}
                                                       data={listData}
                                                       value={value}
                                                       valueField={valueField}
                                                       displayField={displayField}
                                                       descriptionField={descriptionField}
                                                       listHeight={listHeight}
                                                       itemHeight={itemHeight}
                                                       scrollBuffer={scrollBuffer}
                                                       renderer={renderer}
                                                       onItemClick={this.itemClickHandler}
                                                       onChange={this.changeHandler}/>
                                    :
                                    <List className="dropdown-select-list"
                                          theme={popupTheme}
                                          selectMode={selectMode}
                                          data={listData}
                                          value={value}
                                          valueField={valueField}
                                          displayField={displayField}
                                          descriptionField={descriptionField}
                                          renderer={renderer}
                                          onItemClick={this.itemClickHandler}
                                          onChange={this.changeHandler}/>
                        }

                    </div>

                    {popupChildren}

                </Dropdown>

            </div>
        );

    }
}

DropdownSelect.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the trigger element.
     */
    triggerClassName: PropTypes.string,

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
     * The theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The theme.
     */
    popupTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    position: PropTypes.oneOf(Util.enumerateValue(Dropdown.Position)),

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

    title: PropTypes.string,

    triggerRenderer: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),

    rightIconCls: PropTypes.string,

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

            title: PropTypes.string,

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
     * The invalid message of dropDownSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the dropDownSelect will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * The select mode of listItem.Can be normal,checkbox.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

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

    useSelectAll: PropTypes.bool,
    selectAllText: PropTypes.string,

    /**
     * The message of no matching option.
     */
    noMatchedMsg: PropTypes.string,

    shouldPreventContainerScroll: PropTypes.bool,

    popupChildren: PropTypes.any,

    useDynamicRenderList: PropTypes.bool,
    listHeight: PropTypes.number,
    itemHeight: PropTypes.number,
    scrollBuffer: PropTypes.number,

    renderer: PropTypes.func,

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onItemClick: PropTypes.func,

    /**
     * Callback function fired when the popup is open.
     */
    onOpenPopup: PropTypes.func,

    /**
     * Callback function fired when the popup is close.
     */
    onClosePopup: PropTypes.func,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func,

    onWheel: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    isHiddenInputFilter: PropTypes.bool,
    clearHiddenInputFilterInterval: PropTypes.number

};

DropdownSelect.defaultProps = {

    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    position: Dropdown.Position.LEFT,
    placeholder: 'Please select ...',
    rightIconCls: 'fas fa-angle-down',
    data: [],
    disabled: false,
    selectMode: SelectMode.SINGLE_SELECT,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    autoClose: true,
    useFilter: false,
    useSelectAll: false,
    selectAllText: 'Select All',
    shouldPreventContainerScroll: true,
    useDynamicRenderList: false,
    isHiddenInputFilter: false,
    clearHiddenInputFilterInterval: 1000

};

export default DropdownSelect;