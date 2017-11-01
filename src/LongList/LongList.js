/**
 * @file LongList component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import List from '../List';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import Valid from '../_vendors/Valid';
import Calculation from '../_vendors/Calculation';

export default class LongList extends Component {

    static Mode = List.Mode;
    static SEPARATOR = List.SEPARATOR;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: this.initValue(props),
            index: this.getIndex()
        };

        this.initValue = ::this.initValue;
        this.getIndex = ::this.getIndex;
        this.wheelHandler = ::this.wheelHandler;

    }

    initValue(props) {

        if (!props) {
            return;
        }

        const {value, mode} = props;

        if (!mode) {
            return;
        }

        if (value) {
            return value;
        }

        switch (mode) {
            case List.Mode.CHECKBOX:
                return [];
            case List.Mode.RADIO:
                return null;
            default:
                return value;
        }

    }

    getIndex(scrollTop = 0) {
        const {data, listHeight, itemHeight, scrollBuffer} = this.props;
        return Calculation.longListDisplayIndex(data, listHeight, itemHeight, scrollTop, scrollBuffer);
    }

    wheelHandler(e) {

        const {shouldPreventContainerScroll, onWheel} = this.props;

        shouldPreventContainerScroll && Event.preventContainerScroll(e);

        this.setState({
            index: this.getIndex(this.listEl.scrollTop)
        }, () => {
            onWheel && onWheel(e);
        });

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

                ...restProps

            } = this.props,
            {value, index} = this.state,

            scrollerStyle = {
                height: data.length * itemHeight
            },

            filteredData = data && index ? data.slice(index.startWithCache, index.stopWithCache + 1) : data;

        return (
            <div ref="list"
                 className={'long-list' + (className ? ' ' + className : '')}
                 style={{...style, height: listHeight}}
                 onWheel={this.wheelHandler}>

                <div className="long-list-scroller"
                     style={scrollerStyle}>

                    <List {...restProps}
                          style={{transform: `translate3d(0, ${index.startWithCache * itemHeight}px, 0)`}}
                          data={filteredData}
                          value={value}/>

                </div>

            </div>
        );

    }
};

LongList.propTypes = {

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

    }), PropTypes.string, PropTypes.number])).isRequired,

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
     * The mode of listItem.Can be normal,checkbox.
     */
    mode: PropTypes.oneOf(Util.enumerateValue(List.Mode)),

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
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

LongList.defaultProps = {

    className: null,
    style: null,
    theme: Theme.DEFAULT,

    data: [],

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    mode: List.Mode.NORMAL,
    listHeight: 200,
    itemHeight: 40,
    scrollBuffer: 3,
    shouldPreventContainerScroll: true

};