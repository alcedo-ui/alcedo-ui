/**
 * @file List component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ListGroup from '../_ListGroup';
import ListItem from '../_ListItem';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

export default class List extends Component {

    static Mode = ListItem.Mode;
    static SEPARATOR = Symbol('SEPARATOR');

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: this.initValue(props)
        };

        this.initValue = ::this.initValue;
        this.isItemChecked = ::this.isItemChecked;
        this.listGroupedItemsRenderer = ::this.listGroupedItemsRenderer;
        this.listItemsRenderer = ::this.listItemsRenderer;
        this.listItemTouchTapHandler = ::this.listItemTouchTapHandler;
        this.listItemSelectHandler = ::this.listItemSelectHandler;
        this.listItemDeselectHandler = ::this.listItemDeselectHandler;
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

    isItemChecked(item) {

        const {mode, valueField, displayField} = this.props,
            {value} = this.state;

        if (!item || !value) {
            return false;
        }

        if (mode === List.Mode.CHECKBOX) {
            return _.isArray(value) && value.filter(valueItem => {
                return Util.isValueEqual(valueItem, item, valueField, displayField);
            }).length > 0;
        } else if (mode === List.Mode.RADIO) {
            return Util.isValueEqual(value, item, valueField, displayField);
        }

    }

    listGroupedItemsRenderer(items = this.props.items) {
        return _.isArray(items) ?
            items.map((group, groupIndex) => {

                if (group === List.SEPARATOR) {
                    return <div key={`group${groupIndex}`}
                                className="list-separator"></div>;
                }

                if (group && group.name) {
                    return (
                        <ListGroup key={`group${groupIndex}`}
                                   text={group.name}>
                            {
                                group.children && group.children.length > 0 ?
                                    this.listItemsRenderer(group.children)
                                    :
                                    null
                            }
                        </ListGroup>
                    );
                }

                return;

            })
            :
            null;
    }

    listItemsRenderer(items = this.props.items) {

        const {valueField, displayField, descriptionField, disabled, isLoading, mode, renderer} = this.props;

        return _.isArray(items) && items.length > 0 ?
            (
                items.map((item, index) => {

                    if (!item) {
                        return null;
                    }

                    if (item === List.SEPARATOR) {
                        return <div key={index}
                                    className="list-separator"></div>;
                    }

                    return typeof item === 'object' ?
                        (
                            <ListItem key={index}
                                      {...item}
                                      index={index}
                                      data={item}
                                      checked={this.isItemChecked(item)}
                                      value={Util.getValueByValueField(item, valueField, displayField)}
                                      text={Util.getTextByDisplayField(item, displayField, valueField)}
                                      desc={item[descriptionField] || null}
                                      disabled={disabled || item.disabled}
                                      isLoading={isLoading || item.isLoading}
                                      mode={mode}
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
                            <ListItem key={index}
                                      index={index}
                                      data={item}
                                      checked={this.isItemChecked(item)}
                                      value={item}
                                      text={item}
                                      disabled={disabled}
                                      isLoading={isLoading}
                                      mode={mode}
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

        const {mode} = this.props;

        if (mode !== List.Mode.NORMAL) {
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

        const {mode} = this.props;

        if (mode === List.Mode.NORMAL) {
            return;
        }

        let {value} = this.state;

        if (mode === List.Mode.CHECKBOX) {

            if (!value || !_.isArray(value)) {
                value = [];
            }

            value.push(item);

        } else if (mode === List.Mode.RADIO) {
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

        const {mode} = this.props;

        if (mode !== List.Mode.CHECKBOX) {
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

    wheelHandler(e) {
        const {shouldPreventContainerScroll, onWheel} = this.props;
        shouldPreventContainerScroll && Event.preventContainerScroll(e);
        onWheel && onWheel(e);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: this.initValue(nextProps)
            });
        }
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
            <div className={'list' + listClassName}
                 disabled={disabled}
                 style={style}
                 onWheel={this.wheelHandler}>

                {renderEl}

                {children}

            </div>
        );
    }
};

List.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Children passed into the ListItem.
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
    mode: PropTypes.oneOf(Util.enumerateValue(ListItem.Mode)),

    /**
     * If true,the listData will be grouped.
     */
    isGrouped: PropTypes.bool,

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

List.defaultProps = {

    className: '',
    style: null,

    items: [],

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    mode: ListItem.Mode.NORMAL,
    isGrouped: false,
    shouldPreventContainerScroll: true

};