/**
 * @file DynamicRenderList component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import List from '../List';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import Calculation from '../_vendors/Calculation';

export default class DynamicRenderList extends Component {

    static Mode = List.Mode;
    static SEPARATOR = List.SEPARATOR;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: this.initValue(props),
            scrollTop: 0
        };

        this.initValue = ::this.initValue;
        this.getIndex = ::this.getIndex;
        this.scrollHandler = ::this.scrollHandler;
        this.wheelHandler = ::this.wheelHandler;

    }

    initValue(props) {

        if (!props) {
            return;
        }

        const {value, selectMode} = props;

        if (!selectMode) {
            return;
        }

        if (value) {
            return value;
        }

        switch (selectMode) {
            case DynamicRenderList.Mode.MULTI_SELECT:
                return [];
            case DynamicRenderList.Mode.SINGLE_SELECT:
                return null;
            default:
                return value;
        }

    }

    getIndex() {
        const {data, listHeight, itemHeight, scrollBuffer} = this.props,
            {scrollTop} = this.state;
        return Calculation.displayIndexByScrollTop(data, listHeight, itemHeight, scrollTop, scrollBuffer);
    }

    scrollHandler(e) {
        this.setState({
            scrollTop: this.listEl.scrollTop
        }, () => {
            const {onScroll} = this.props;
            onScroll && onScroll(e);
        });
    }

    wheelHandler(e) {
        const {shouldPreventContainerScroll, onWheel} = this.props;
        shouldPreventContainerScroll && Event.preventContainerScroll(e);
        onWheel && onWheel(e);
    }

    componentDidMount() {
        this.listEl = this.refs.list;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: this.initValue(nextProps)
            });
        }
    }

    render() {

        const {

                className, style, data, listHeight, itemHeight,

                // not passing down these props
                scrollBuffer,

                ...restProps

            } = this.props,
            {value, scrollTop} = this.state,

            scrollerStyle = {
                height: data.length * itemHeight
            },

            index = this.getIndex(),

            filteredData = data && index ? data.slice(index.startWithBuffer, index.stopWithBuffer + 1) : data;

        return (
            <div ref="list"
                 className={'dynamic-render-list' + (className ? ' ' + className : '')}
                 style={{...style, height: listHeight}}
                 onScroll={this.scrollHandler}
                 onWheel={this.wheelHandler}>

                <div className="dynamic-render-list-scroller"
                     style={scrollerStyle}>

                    <List {...restProps}
                          style={{transform: `translate3d(0, ${index.startWithBuffer * itemHeight}px, 0)`}}
                          data={filteredData}
                          value={value}/>

                </div>

            </div>
        );

    }
};

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
     * The theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

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
        onTouchTap: PropTypes.func

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
     * If true, the list will be at loading status.
     */
    isLoading: PropTypes.bool,

    /**
     * The select mode of listItem.Can be normal,checkbox.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(DynamicRenderList.Mode)),

    listHeight: PropTypes.number,
    itemHeight: PropTypes.number,
    scrollBuffer: PropTypes.number,

    shouldPreventContainerScroll: PropTypes.bool,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * Callback function fired when the list-item select.
     */
    onItemTouchTap: PropTypes.func,

    /**
     * Callback function fired when the list changed.
     */
    onChange: PropTypes.func,

    /**
     * Callback function fired when wrapper scrolled.
     */
    onScroll: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

DynamicRenderList.defaultProps = {

    className: null,
    style: null,
    theme: Theme.DEFAULT,

    data: [],

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    selectMode: DynamicRenderList.Mode.NORMAL,
    listHeight: 200,
    itemHeight: 40,
    scrollBuffer: 4,
    shouldPreventContainerScroll: true

};