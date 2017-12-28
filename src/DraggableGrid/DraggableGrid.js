/**
 * @file DraggableGrid component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import DraggableGridItem from '../_DraggableGridItem';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import Calculation from '../_vendors/Calculation';
import SelectMode from '../_statics/SelectMode';

export default class DraggableGrid extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: Calculation.getInitValue(props)
        };

        this.listItemSelectHandler = ::this.listItemSelectHandler;
        this.listItemDeselectHandler = ::this.listItemDeselectHandler;

    }

    listItemSelectHandler(item, index) {

        const {selectMode} = this.props;

        let {value} = this.state;

        if (selectMode === SelectMode.MULTI_SELECT) {

            if (!value || !_.isArray(value)) {
                value = [];
            }

            value.push(item);

        } else if (selectMode === SelectMode.SINGLE_SELECT) {
            value = item;
        }

        this.setState({
            value
        }, () => {
            const {onItemSelect, onChange} = this.props;
            onItemSelect && onItemSelect(item, index);
            onChange && onChange(value, index);
        });

    }

    listItemDeselectHandler(item, index) {

        const {selectMode} = this.props;

        if (selectMode !== SelectMode.MULTI_SELECT) {
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
            const {onItemDeselect, onChange} = this.props;
            onItemDeselect && onItemDeselect(item, index);
            onChange && onChange(value, index);
        });

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: Calculation.getInitValue(nextProps)
            });
        }
    }

    render() {

        const {

                children, className, style, theme, data, itemHeight, col,

                selectTheme, selectMode, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                idField, valueField, displayField, descriptionField, disabled, isLoading, renderer, onItemTouchTap

            } = this.props,
            {value} = this.state,

            listClassName = (className ? ' ' + className : '');

        return (
            <div className={'draggable-grid' + listClassName}
                 disabled={disabled}
                 style={style}
                 onWheel={e => {
                     Event.wheelHandler(e, this.props);
                 }}>

                {
                    _.isArray(data) && data.length > 0 ?
                        (
                            data.map((item, index) => {

                                return typeof item === 'object' ?
                                    (
                                        <DraggableGridItem key={item[idField] || index}
                                                           {...item}
                                                           index={index}
                                                           style={{height: itemHeight}}
                                                           theme={item.theme || theme}
                                                           col={col}
                                                           selectTheme={item.selectTheme || selectTheme}
                                                           radioUncheckedIconCls={item.radioUncheckedIconCls || radioUncheckedIconCls}
                                                           radioCheckedIconCls={item.radioCheckedIconCls || radioCheckedIconCls}
                                                           checkboxUncheckedIconCls={item.checkboxUncheckedIconCls || checkboxUncheckedIconCls}
                                                           checkboxCheckedIconCls={item.checkboxCheckedIconCls || checkboxCheckedIconCls}
                                                           checkboxIndeterminateIconCls={item.checkboxIndeterminateIconCls || checkboxIndeterminateIconCls}
                                                           data={item}
                                                           checked={Calculation.isItemChecked(item, value, this.props)}
                                                           value={Util.getValueByValueField(item, valueField, displayField)}
                                                           text={Util.getTextByDisplayField(item, displayField, valueField)}
                                                           desc={item[descriptionField] || null}
                                                           disabled={disabled || item.disabled}
                                                           isLoading={isLoading || item.isLoading}
                                                           selectMode={selectMode}
                                                           renderer={renderer}
                                                           onTouchTap={e => {
                                                               onItemTouchTap && onItemTouchTap(item, index, e);
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
                                        <DraggableGridItem key={index}
                                                           index={index}
                                                           style={{height: itemHeight}}
                                                           theme={item.theme || theme}
                                                           col={col}
                                                           selectTheme={item.selectTheme || selectTheme}
                                                           radioUncheckedIconCls={item.radioUncheckedIconCls || radioUncheckedIconCls}
                                                           radioCheckedIconCls={item.radioCheckedIconCls || radioCheckedIconCls}
                                                           checkboxUncheckedIconCls={item.checkboxUncheckedIconCls || checkboxUncheckedIconCls}
                                                           checkboxCheckedIconCls={item.checkboxCheckedIconCls || checkboxCheckedIconCls}
                                                           checkboxIndeterminateIconCls={item.checkboxIndeterminateIconCls || checkboxIndeterminateIconCls}
                                                           data={item}
                                                           checked={Calculation.isItemChecked(item, value, this.props)}
                                                           value={item}
                                                           text={item}
                                                           disabled={disabled}
                                                           isLoading={isLoading}
                                                           selectMode={selectMode}
                                                           renderer={renderer}
                                                           onTouchTap={e => {
                                                               onItemTouchTap && onItemTouchTap(item, index, e);
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
                        null
                }

                {children}

            </div>
        );
    }
};

DraggableGrid.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The theme of the grid item.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The theme of the grid item select radio or checkbox.
     */
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The mode of listItem.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * Children passed into the GridItem.
     */
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

        /**
         * The CSS class name of the grid button.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the grid button.
         */
        style: PropTypes.object,

        /**
         * The theme of the grid button.
         */
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        /**
         * The text value of the grid button.Type can be string or number.
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The grid item's display text. Type can be string, number or bool.
         */
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The desc value of the grid button. Type can be string or number.
         */
        desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true,the grid item will be disabled.
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
         * Callback function fired when a grid item touch-tapped.
         */
        onTouchTap: PropTypes.func

    }), PropTypes.string, PropTypes.number, PropTypes.symbol])),

    value: PropTypes.any,

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
     * If true, the grid will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true, the grid will be at loading status.
     */
    isLoading: PropTypes.bool,

    shouldPreventContainerScroll: PropTypes.bool,

    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    col: PropTypes.number,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * Callback function fired when the grid-item touch tap.
     */
    onItemTouchTap: PropTypes.func,

    /**
     * Callback function fired when the grid-item select.
     */
    onItemSelect: PropTypes.func,

    /**
     * Callback function fired when the grid-item deselect.
     */
    onItemDeselect: PropTypes.func,

    /**
     * Callback function fired when the grid changed.
     */
    onChange: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

DraggableGrid.defaultProps = {

    className: null,
    style: null,
    theme: Theme.DEFAULT,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,

    data: null,

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    shouldPreventContainerScroll: true,

    radioUncheckedIconCls: null,
    radioCheckedIconCls: null,
    checkboxUncheckedIconCls: 'fa fa-square-o',
    checkboxCheckedIconCls: 'fa fa-check-square',
    checkboxIndeterminateIconCls: 'fa fa-minus-square',

    col: 3

};