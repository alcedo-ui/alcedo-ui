import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ListItem from '../ListItem';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './List.css';

export default class List extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: this.initValue(props)
        };

        this.initValue = this::this.initValue;
        this.isItemChecked = this::this.isItemChecked;
        this.listGroupedItemsRenderer = this::this.listGroupedItemsRenderer;
        this.listItemsRenderer = this::this.listItemsRenderer;
        this.listItemTouchTapHandle = this::this.listItemTouchTapHandle;
        this.listItemSelectHandle = this::this.listItemSelectHandle;
        this.listItemDeselectHandle = this::this.listItemDeselectHandle;

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

                if (!group) {
                    return;
                }

                let result = [];

                if (group.name) {
                    result.push(
                        <ListItem key={`group${groupIndex}`}
                                  text={group.name}
                                  isGroupName={true}/>
                    );
                }

                if (group.children && group.children.length > 0) {
                    result = result.concat(this.listItemsRenderer(group.children));
                }

                return result;

            })
            :
            null;
    }

    listItemsRenderer(items = this.props.items) {

        const {valueField, displayField, descriptionField, disabled, isLoading, mode} = this.props;

        return _.isArray(items) && items.length > 0 ?
            (
                items.map((item, index) => {

                    if (!item) {
                        return null;
                    }

                    return typeof item === 'object' ?
                        (
                            <ListItem key={index}
                                      {...item}
                                      checked={this.isItemChecked(item)}
                                      value={Util.getValueByValueField(item, valueField, displayField)}
                                      text={Util.getTextByDisplayField(item, displayField, valueField)}
                                      desc={item[descriptionField] || null}
                                      disabled={disabled || item.disabled}
                                      isLoading={isLoading || item.isLoading}
                                      mode={mode}
                                      onTouchTap={() => {
                                          this.listItemTouchTapHandle(item, index);
                                          item.onTouchTap && item.onTouchTap();
                                      }}
                                      onSelect={() => {
                                          this.listItemSelectHandle(item, index);
                                      }}
                                      onDeselect={() => {
                                          this.listItemDeselectHandle(item, index);
                                      }}/>
                        )
                        :
                        (
                            <ListItem key={index}
                                      checked={this.isItemChecked(item)}
                                      value={item}
                                      text={item}
                                      disabled={disabled}
                                      isLoading={isLoading}
                                      mode={mode}
                                      onTouchTap={() => {
                                          this.listItemTouchTapHandle(item, index);
                                      }}
                                      onSelect={() => {
                                          this.listItemSelectHandle(item, index);
                                      }}
                                      onDeselect={() => {
                                          this.listItemDeselectHandle(item, index);
                                      }}/>
                        );

                })
            )
            :
            null;

    }

    listItemTouchTapHandle(value, index) {

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

    listItemSelectHandle(item, index) {

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

    listItemDeselectHandle(item, index) {

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
                 style={style}>

                {renderEl}

                {children}

            </div>
        );
    }
};

List.Mode = ListItem.Mode;

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
             * If true,the item will be in the selected state.
             */
            checked: PropTypes.bool,

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

    /**
     * Callback function fired when the list-item select.
     */
    onItemTouchTap: PropTypes.func,

    /**
     * Callback function fired when the list changed.
     **/
    onChange: PropTypes.func

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
    isGrouped: false

};