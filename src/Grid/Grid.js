/**
 * @file Grid component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import GridGroup from '../_GridGroup';
import GridItem from '../_GridItem';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Valid from '../_vendors/Valid';
import Event from '../_vendors/Event';
import SelectMode from '../_statics/SelectMode';

export default class Grid extends Component {

    static SelectMode = SelectMode;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: this.initValue(props)
        };

        this.initValue = ::this.initValue;
        this.calItemColStyle = ::this.calItemColStyle;
        this.isItemChecked = ::this.isItemChecked;
        this.listGroupedItemsRenderer = ::this.listGroupedItemsRenderer;
        this.listItemsRenderer = ::this.listItemsRenderer;
        this.listItemTouchTapHandler = ::this.listItemTouchTapHandler;
        this.listItemSelectHandler = ::this.listItemSelectHandler;
        this.listItemDeselectHandler = ::this.listItemDeselectHandler;
        this.resizeHandler = ::this.resizeHandler;
        this.debounceResizeHandler = _.debounce(::this.debounceResizeHandler, 150);
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
            case Grid.SelectMode.MULTI_SELECT:
                return [];
            case Grid.SelectMode.SINGLE_SELECT:
                return null;
            default:
                return value;
        }

    }

    calItemColStyle(props = this.props, items = props.items) {

        const {col, isItemsFullWidth} = props,
            colLen = col.length,
            itemsLen = items.length,
            validValue = (value) => {
                return isItemsFullWidth ?
                    Valid.range(value, 1, itemsLen)
                    :
                    Valid.range(value, 1);
            };

        if (!this.gridEl || !col) {
            return col && colLen > 0 ? 100 / validValue(col[0]) : null;
        }

        const gridWidth = this.gridEl.getBoundingClientRect().width;

        for (let i = 1; i < colLen - 1; i += 2) {
            if (gridWidth < col[i] && !isNaN(col[i - 1])) {
                return 100 / validValue(col[i - 1]);
            }
        }

        return !isNaN(col[colLen - 1]) ? 100 / validValue(col[colLen - 1]) : null;

    }

    isItemChecked(item) {

        const {selectMode, valueField, displayField} = this.props,
            {value} = this.state;

        if (!item || !value) {
            return false;
        }

        if (selectMode === Grid.SelectMode.MULTI_SELECT) {
            return _.isArray(value) && value.filter(valueItem => {
                    return Util.isValueEqual(valueItem, item, valueField, displayField);
                }).length > 0;
        } else if (selectMode === Grid.SelectMode.SINGLE_SELECT) {
            return Util.isValueEqual(value, item, valueField, displayField);
        }

    }

    listGroupedItemsRenderer(items = this.props.items) {
        return _.isArray(items) ?
            items.map((group, groupIndex) => {

                if (group && group.name) {
                    return (
                        <GridGroup key={`group${groupIndex}`}
                                   text={group.name}>
                            {
                                group.children && group.children.length > 0 ?
                                    this.listItemsRenderer(group.children)
                                    :
                                    null
                            }
                        </GridGroup>
                    );
                }

                return;

            })
            :
            null;
    }

    listItemsRenderer(items = this.props.items) {

        const {valueField, displayField, descriptionField, disabled, isLoading, selectMode, renderer} = this.props,
            itemColWidth = this.calItemColStyle(this.props, items);

        return _.isArray(items) && items.length > 0 ?
            (
                items.map((item, index) => {

                    if (!item) {
                        return null;
                    }

                    return typeof item === 'object' ?
                        (
                            <GridItem key={index}
                                      {...item}
                                      index={index}
                                      itemColWidth={itemColWidth}
                                      data={item}
                                      checked={this.isItemChecked(item)}
                                      value={Util.getValueByValueField(item, valueField, displayField)}
                                      text={Util.getTextByDisplayField(item, displayField, valueField)}
                                      desc={item[descriptionField] || null}
                                      disabled={disabled || item.disabled}
                                      isLoading={isLoading || item.isLoading}
                                      selectMode={selectMode}
                                      renderer={renderer}
                                      onTouchTap={(e) => {
                                          this.listItemTouchTapHandler(item, index);
                                          item.onTouchTap && item.onTouchTap(e);
                                      }}
                                      onSelect={() => {
                                          this.listItemSelectHandler(item, index);
                                      }}
                                      onDeselect={() => {
                                          this.listItemDeselectHandler(item, index);
                                      }}/>
                        )
                        :
                        (
                            <GridItem key={index}
                                      index={index}
                                      itemColWidth={itemColWidth}
                                      data={item}
                                      checked={this.isItemChecked(item)}
                                      value={item}
                                      text={item}
                                      disabled={disabled}
                                      isLoading={isLoading}
                                      selectMode={selectMode}
                                      renderer={renderer}
                                      onTouchTap={() => {
                                          this.listItemTouchTapHandler(item, index);
                                      }}
                                      onSelect={() => {
                                          this.listItemSelectHandler(item, index);
                                      }}
                                      onDeselect={() => {
                                          this.listItemDeselectHandler(item, index);
                                      }}/>
                        );

                })
            )
            :
            null;

    }

    listItemTouchTapHandler(value, index) {

        const {selectMode} = this.props;

        if (selectMode !== Grid.SelectMode.NORMAL) {
            return;
        }

        this.setState({
            value
        }, () => {
            const {onItemTouchTap, onChange} = this.props;
            onItemTouchTap && onItemTouchTap(value, index);
            onChange && onChange(value, index);
        });

    }

    listItemSelectHandler(item, index) {

        const {selectMode} = this.props;

        if (selectMode === Grid.SelectMode.NORMAL) {
            return;
        }

        let {value} = this.state;

        if (selectMode === Grid.SelectMode.MULTI_SELECT) {

            if (!value || !_.isArray(value)) {
                value = [];
            }

            value.push(item);

        } else if (selectMode === Grid.SelectMode.SINGLE_SELECT) {
            value = item;
        }

        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value, index);
        });

    }

    listItemDeselectHandler(item, index) {

        const {selectMode} = this.props;

        if (selectMode !== Grid.SelectMode.MULTI_SELECT) {
            return;
        }

        const {valueField, displayField} = this.props;
        let {value} = this.state;

        if (!value || !_.isArray(value)) {
            value = [];
        } else {
            value = value.filter(valueItem => {
                return Util.getValueByValueField(valueItem, valueField, displayField)
                    != Util.getValueByValueField(item, valueField, displayField);
            });
        }

        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value, index);
        });

    }

    resizeHandler() {
        this.debounceResizeHandler();
    }

    debounceResizeHandler() {
        this.forceUpdate();
    }

    wheelHandler(e) {
        const {shouldPreventContainerScroll, onWheel} = this.props;
        shouldPreventContainerScroll && Event.preventContainerScroll(e);
        onWheel && onWheel(e);
    }

    componentDidMount() {

        this.gridEl = this.refs.grid;

        Event.addEvent(window, 'resize', this.resizeHandler);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: this.initValue(nextProps)
            });
        }
    }

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.resizeHandler);
    }

    render() {

        const {children, className, style, disabled, isGrouped} = this.props,
            listClassName = (isGrouped ? ' grouped' : '') + (className ? ' ' + className : '');

        let renderEl;
        if (isGrouped) {
            renderEl = this.listGroupedItemsRenderer();
        } else {
            renderEl = this.listItemsRenderer();
        }

        return (
            <div ref="grid"
                 className={'grid' + listClassName}
                 disabled={disabled}
                 style={style}
                 onWheel={this.wheelHandler}>

                {renderEl}

                {children}

            </div>
        );
    }
};

Grid.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Children passed into the GridItem.
     */
    items: PropTypes.oneOfType([

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

        }), PropTypes.string, PropTypes.number])),

        // grouped
        PropTypes.array

    ]).isRequired,

    /**
     *
     */
    col: PropTypes.array,

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
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * If true,the listData will be grouped.
     */
    isGrouped: PropTypes.bool,

    isItemsFullWidth: PropTypes.bool,
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
    onChange: PropTypes.func

};

Grid.defaultProps = {

    className: '',
    style: null,

    items: [],

    col: [1, 480, 2, 720, 3, 960, 4, 1360, 6],
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    selectMode: SelectMode.NORMAL,
    isGrouped: false,

    isItemsFullWidth: false,
    shouldPreventContainerScroll: true

};