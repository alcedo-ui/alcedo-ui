/**
 * @file DraggableGrid component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import isArray from 'lodash/isArray';
import classNames from 'classnames';

import DraggableGridItem from '../_DraggableGridItem';
import Tip from '../Tip';
import Theme from '../Theme';

import SelectMode from '../_statics/SelectMode';

import Util from '../_vendors/Util';
import Calculation from '../_vendors/Calculation';

class DraggableGrid extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            data: props.data,
            value: Calculation.getInitValue(props)
        };

    }

    listItemMoveHandler = (dragIndex, hoverIndex, props) => {

        const {data} = this.state,
            dragItem = data.splice(dragIndex, 1);

        data.splice(hoverIndex, 0, ...dragItem);

        this.setState({
            data
        }, () => {
            const {onSequenceChange} = this.props;
            onSequenceChange && onSequenceChange(data);
        });

    };

    listItemSelectHandler = (item, index) => {

        const {selectMode} = this.props;

        let {value} = this.state;

        if (selectMode === SelectMode.MULTI_SELECT) {

            if (!value || !isArray(value)) {
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

    };

    listItemDeselectHandler = (item, index) => {

        const {selectMode} = this.props;

        if (selectMode !== SelectMode.MULTI_SELECT) {
            return;
        }

        const {valueField, displayField} = this.props;
        let {value} = this.state;

        if (!value || !isArray(value)) {
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

    };

    componentWillReceiveProps(nextProps) {

        let state;

        if (nextProps.data !== this.state.data) {
            state = state ? state : {};
            state.data = nextProps.data;
        }
        if (nextProps.value !== this.state.value) {
            state = state ? state : {};
            state.value = Calculation.getInitValue(nextProps);
        }

        if (state) {
            this.setState(state);
        }

    }

    render() {

        const {

                children, className, style, theme, itemHeight, col,

                selectTheme, selectMode, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                valueField, displayField, descriptionField, disabled, isLoading, renderer, onItemClick

            } = this.props,
            {data, value} = this.state;

        return (
            <div className={classNames('draggable-grid', {
                [className]: className
            })}
                 disabled={disabled}
                 style={style}>

                {
                    data && data.map((item, index) => {

                        return typeof item === 'object' ?
                            <DraggableGridItem key={index}
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
                                               onMove={this.listItemMoveHandler}
                                               onClick={e => {
                                                   onItemClick && onItemClick(item, index, e);
                                                   item.onClick && item.onClick(e);
                                               }}
                                               onSelect={() => this.listItemSelectHandler(item, index)}
                                               onDeselect={() => this.listItemDeselectHandler(item, index)}/>
                            :
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
                                               onMove={this.listItemMoveHandler}
                                               onClick={e => onItemClick && onItemClick(item, index, e)}
                                               onSelect={() => this.listItemSelectHandler(item, index)}
                                               onDeselect={() => this.listItemDeselectHandler(item, index)}/>;

                    })
                }

                {children}

            </div>
        );
    }
}

DraggableGrid.propTypes = {

    children: PropTypes.any,

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
        onClick: PropTypes.func

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

    /**
     * The speed of scroll bar.
     */
    scrollSpeed: PropTypes.number,

    /**
     * The number of overflows.
     */
    scrollBuffer: PropTypes.number,

    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    col: PropTypes.number,
    itemHeight: PropTypes.number,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * Callback function fired when the grid-item touch tap.
     */
    onItemClick: PropTypes.func,

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
     * Callback function fired when select item sequence changed.
     */
    onSequenceChange: PropTypes.func

};

DraggableGrid.defaultProps = {

    theme: Theme.DEFAULT,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,

    scrollSpeed: 20,
    scrollBuffer: 40,

    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square',

    col: 3

};

export default DraggableGrid;
