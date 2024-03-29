/**
 * @file DynamicRenderList component
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import List from '../List';
import Tip from '../Tip';

// Statics
import Theme from '../Theme';
import SelectMode from '../_statics/SelectMode';
import LIST_SEPARATOR from '../_statics/ListSeparator';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';
import Calculation from '../_vendors/Calculation';
import ComponentUtil from '../_vendors/ComponentUtil';

class DynamicRenderList extends Component {

    static SelectMode = SelectMode;
    static LIST_SEPARATOR = LIST_SEPARATOR;
    static Theme = Theme;

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: Calculation.getInitValue({
                value: ComponentUtil.getDerivedState(props, state, 'value'),
                selectMode: props.selectMode
            })
        };
    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.lastDisplayIndex = null;
        this.displayIndex = null;
        this.wrapper = createRef();
        this.wrapperEl = null;
        this.list = createRef();
        this.listInstance = null;

        this.state = {
            value: Calculation.getInitValue(props),
            scrollTop: 0
        };

    }

    componentDidMount() {
        this.wrapperEl = this.wrapper?.current;
        this.listInstance = this.list?.current;
    }

    componentDidUpdate() {

        const {onRenderItemChange} = this.props;

        if (onRenderItemChange
            && ((!this.displayIndex && this.lastDisplayIndex) || (this.displayIndex && !this.lastDisplayIndex)
                || (this.displayIndex && this.lastDisplayIndex
                    && (this.displayIndex.start !== this.lastDisplayIndex.start
                        || this.displayIndex.stop !== this.lastDisplayIndex.stop
                        || this.displayIndex.startWithBuffer !== this.lastDisplayIndex.startWithBuffer
                        || this.displayIndex.stopWithBuffer !== this.lastDisplayIndex.stopWithBuffer)))) {
            this.lastDisplayIndex = this.displayIndex;
            onRenderItemChange(this.displayIndex);
        }

    }

    /**
     * public
     */
    adjustScroll = () => {
        this.listInstance?.adjustScroll?.();
    };

    /**
     * calculate final display index in list
     * @returns
     *  {
     *      start,
     *      stop,
     *      startWithBuffer,
     *      stopWithBuffer
     *  }
     */
    getIndex = () => {

        const {data, listHeight, itemHeight, scrollBuffer} = this.props,
            {scrollTop} = this.state;

        return this.displayIndex =
            Calculation.displayIndexByScrollTop(data, listHeight, itemHeight, scrollTop, scrollBuffer);

    };

    handleScroll = e => {
        this.setState({
            scrollTop: this.wrapperEl ? this.wrapperEl.scrollTop : 0
        }, () => this.props.onScroll?.(e));
    };

    handleChange = value => {
        this.setState({
            value
        }, () => this.props.onChange?.(value));
    };

    render() {

        const {

                className, style, data, listHeight, itemHeight,

                // not passing down these props
                scrollBuffer, onRenderItemChange,

                ...restProps

            } = this.props,
            {value} = this.state,

            index = this.getIndex(),
            filteredData = data && index ? data.slice(index.startWithBuffer, index.stopWithBuffer + 1) : data;

        return (
            <div ref={this.wrapper}
                 className={classNames('dynamic-render-list', {
                     [className]: className
                 })}
                 style={{...style, height: listHeight}}
                 onScroll={this.handleScroll}>
                <div className="dynamic-render-list-scroller"
                     style={{
                         height: data.length * itemHeight
                     }}>
                    <List {...restProps}
                          ref={this.list}
                          style={{transform: `translateY(${index.startWithBuffer * itemHeight}px)`}}
                          data={filteredData}
                          value={value}
                          onChange={this.handleChange}/>
                </div>
            </div>
        );

    }
}

DynamicRenderList.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The theme of the list item.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The theme of the list item select radio or checkbox.
     */
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * Children passed into the ListItem.
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
         * The list item's display text. Type can be string, number or bool.
         */
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The desc value of the list button. Type can be string or number.
         */
        desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true,the list item will be disabled.
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
         * The message of tip.
         */
        tip: PropTypes.string,

        /**
         * The position of tip.
         */
        tipPosition: PropTypes.oneOf(Util.enumerateValue(Tip.Position)),

        /**
         * If true,the item will have center displayed ripple effect.
         */
        rippleDisplayCenter: PropTypes.bool,

        /**
         * You can create a complicated renderer callback instead of value and desc prop.
         */
        itemRenderer: PropTypes.func,

        /**
         * Callback function fired when a list item touch-tapped.
         */
        onClick: PropTypes.func

    }), PropTypes.string, PropTypes.number, PropTypes.symbol])).isRequired,

    /**
     * The id field name in data. (default: "id")
     */
    idField: PropTypes.string,

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
     * If true, the list will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * List item disabled callback.
     */
    itemDisabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

    /**
     * If true, the list will be at loading status.
     */
    isLoading: PropTypes.bool,

    /**
     * The mode of listItem.Can be normal,checkbox.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * Callback function fired when the list-item touch tap.
     */
    onItemClick: PropTypes.func,

    /**
     * Callback function fired when the list-item select.
     */
    onItemSelect: PropTypes.func,

    /**
     * Callback function fired when the list-item deselect.
     */
    onItemDeselect: PropTypes.func,

    /**
     * Callback function fired when the list changed.
     */
    onChange: PropTypes.func,

    onRenderItemChange: PropTypes.func,
    onScroll: PropTypes.func,

    listHeight: PropTypes.number,
    itemHeight: PropTypes.number,
    scrollBuffer: PropTypes.number

};

DynamicRenderList.defaultProps = {

    theme: Theme.DEFAULT,
    selectTheme: Theme.DEFAULT,

    data: [],

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    itemDisabled: false,
    selectMode: SelectMode.SINGLE_SELECT,

    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square',

    listHeight: 200,
    itemHeight: 40,
    scrollBuffer: 8

};

export default DynamicRenderList;
