import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ListItem from '../_ListItem';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './List.css';

export default class List extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: props.value
        };

        this.isItemChecked = this::this.isItemChecked;
        this.listItemTouchTapHandle = this::this.listItemTouchTapHandle;
        this.listItemSelectHandle = this::this.listItemSelectHandle;
        this.listItemDeselectHandle = this::this.listItemDeselectHandle;

    }

    isItemChecked(item) {

        const {mode} = this.props,
            {value} = this.state;

        if (!item || !value) {
            return false;
        }

        if (mode === List.Mode.CHECKBOX) {
            return _.isArray(value) && value.filter(valueItem => valueItem == item).length > 0;
        } else if (mode === List.Mode.RADIO) {
            return value == item;
        }

    }

    listItemTouchTapHandle(value) {

        const {mode} = this.props;

        if (mode === List.Mode.NORMAL) {
            return;
        }

        this.setState({
            value
        });

    }

    listItemSelectHandle(item) {

        const {mode, onChange} = this.props;
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
            onChange && onChange(value);
        });

    }

    listItemDeselectHandle(item) {

        const {mode, onChange} = this.props;
        let {value} = this.state;

        if (mode === List.Mode.CHECKBOX) {

            if (!value || !_.isArray(value)) {
                value = [];
            } else {
                value = value.filter(valueItem => valueItem != item);
            }

        }

        this.setState({
            value
        }, () => {
            onChange && onChange(value);
        });

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {children, className, style, items, valueField, displayField, disabled, isLoading, mode} = this.props,
            listClassName = (className ? ' ' + className : '');

        return (
            <div className={'list' + (listClassName)}
                 disabled={disabled}
                 style={style}>

                {
                    items.length > 0
                        ? (
                        items.map((item, index) => {
                            return (
                                <ListItem key={index}
                                          {...item}
                                          checked={this.isItemChecked(item)}
                                          value={item[valueField]}
                                          text={item[displayField]}
                                          disabled={disabled || item.disabled}
                                          isLoading={isLoading || item.isLoading}
                                          mode={mode}
                                          onTouchTap={() => {
                                              this.listItemTouchTapHandle(item);
                                              item.onTouchTap && item.onTouchTap();
                                          }}
                                          onSelect={() => {
                                              this.listItemSelectHandle(item);
                                          }}
                                          onDeselect={() => {
                                              this.listItemDeselectHandle(item);
                                          }}/>
                            );
                        })
                    )
                        : null
                }

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
    items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

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
         *
         */
        checked: PropTypes.bool,

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
         *
         */
        tip: PropTypes.string,

        /**
         *
         */
        tipPosition: PropTypes.oneOf(Util.enumerateValue(Tip.Position)),

        /**
         *
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
     * If true, the list will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true, the list will be loading.
     */
    isLoading: PropTypes.bool,

    /**
     *
     */
    mode: PropTypes.oneOf(Util.enumerateValue(ListItem.Mode)),

    /**
     *
     */
    onChange: PropTypes.func

};

List.defaultProps = {

    className: '',
    style: null,

    items: [],

    valueField: 'value',
    displayField: 'text',
    disabled: false,
    mode: ListItem.Mode.NORMAL

};