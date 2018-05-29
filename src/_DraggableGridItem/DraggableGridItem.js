/**
 * @file DraggableGridItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragSource, DropTarget} from 'react-dnd';
import classNames from 'classnames';

import Checkbox from '../Checkbox';
import Radio from '../Radio';
import CircularLoading from '../CircularLoading';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Position from '../_statics/Position';
import SelectMode from '../_statics/SelectMode';
import DragDrop from '../_vendors/DragDrop';

const DRAG_GRID_ITEM_SYMBOL = Symbol('DRAG_GRID_ITEM');

@DropTarget(DRAG_GRID_ITEM_SYMBOL, DragDrop.getHorizontalTarget(), connect => ({
    connectDropTarget: connect.dropTarget()
}))
@DragSource(DRAG_GRID_ITEM_SYMBOL, DragDrop.getSource(), (connect, monitor) => ({
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource()
}))
class DraggableGridItem extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            tipVisible: false
        };

    }

    showTip = () => {

        if (this.state.tipVisible) {
            return;
        }

        this.setState({
            tipVisible: true
        });

    };

    hideTip = () => {
        this.setState({
            tipVisible: false
        });
    };

    checkboxChangeHandler = checked => {

        const {onSelect, onDeselect} = this.props;

        if (checked) {
            onSelect && onSelect();
        } else {
            onDeselect && onDeselect();
        }

    };

    radioChangeHandler = () => {

        const {checked} = this.props;

        if (!checked) {
            const {onSelect} = this.props;
            onSelect && onSelect();
        }

    };

    touchTapHandler = e => {

        e.preventDefault();

        const {disabled, isLoading, readOnly} = this.props;

        if (disabled || isLoading || readOnly) {
            return;
        }

        const {onClick} = this.props;
        onClick && onClick(e);

        switch (this.props.selectMode) {
            case SelectMode.MULTI_SELECT:
                this.checkboxChangeHandler(!this.props.checked);
                return;
            case SelectMode.SINGLE_SELECT:
                this.radioChangeHandler();
                return;
        }

    };

    mouseOverHandler = e => {
        this.showTip(e);
        const {onMouseOver} = this.props;
        onMouseOver && onMouseOver(e);
    };

    render() {

        const {

                connectDragPreview, connectDragSource, connectDropTarget, isDraggableAnyWhere, anchorIconCls,

                index, className, theme, data, text, desc, iconCls, rightIconCls, tip, tipPosition,
                checked, disabled, isLoading, renderer, itemRenderer,
                col,

                selectTheme, selectMode, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                // not passing down these props
                itemColWidth, onMove, onSelect, onDeselect,

                ...restProps

            } = this.props,
            {tipVisible} = this.state,

            listItemClassName = classNames('draggable-grid-item', {
                [`theme-${theme}`]: theme,
                activated: checked,
                [className]: className
            }),

            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left',

            anchorEl = <i className={`${anchorIconCls} draggable-grid-item-anchor`}
                          aria-hidden="true"></i>,

            el = connectDropTarget(
                <div className="draggable-grid-item-wrapper"
                     style={col ? {width: `${100 / col}%`} : null}>

                    <div {...restProps}
                         ref={el => this.tipTriggerEl = el}
                         className={listItemClassName}
                         disabled={disabled || isLoading}
                         onClick={this.touchTapHandler}
                         onMouseOver={this.mouseOverHandler}
                         onMouseOut={this.hideTip}>

                        {
                            selectMode === SelectMode.SINGLE_SELECT && (radioUncheckedIconCls || radioCheckedIconCls) ?
                                <Radio className="draggable-grid-item-select"
                                       theme={selectTheme}
                                       checked={checked}
                                       disabled={disabled || isLoading}
                                       uncheckedIconCls={radioUncheckedIconCls}
                                       checkedIconCls={radioCheckedIconCls}
                                       disableTouchRipple={true}/>
                                :
                                null
                        }

                        {
                            selectMode === SelectMode.MULTI_SELECT ?
                                <Checkbox className="draggable-grid-item-select"
                                          theme={selectTheme}
                                          checked={checked}
                                          disabled={disabled || isLoading}
                                          uncheckedIconCls={checkboxUncheckedIconCls}
                                          checkedIconCls={checkboxCheckedIconCls}
                                          indeterminateIconCls={checkboxIndeterminateIconCls}
                                          disableTouchRipple={true}/>
                                :
                                null
                        }

                        {
                            isLoading && loadingIconPosition === 'left' ?
                                <div className="button-icon button-icon-left">
                                    <CircularLoading className="button-loading-icon"
                                                     size="small"/>
                                </div>
                                :
                                (
                                    iconCls ?
                                        <i className={`button-icon button-icon-left ${iconCls}`}
                                           aria-hidden="true"></i>
                                        :
                                        null
                                )
                        }

                        {
                            itemRenderer && typeof itemRenderer === 'function' ?
                                itemRenderer(data, index)
                                :
                                (
                                    renderer && typeof renderer === 'function' ?
                                        renderer(data, index)
                                        :
                                        (
                                            desc ?
                                                <div className="draggable-grid-item-content">
                                                    <div className="draggable-grid-item-content-value">
                                                        {text}
                                                    </div>
                                                    <div className="draggable-grid-item-content-desc">
                                                        {desc}
                                                    </div>
                                                </div>
                                                :
                                                <div className="draggable-grid-item-content">
                                                    {text}
                                                </div>
                                        )
                                )
                        }

                        {
                            isLoading && loadingIconPosition === 'right' ?
                                <CircularLoading className="button-icon button-icon-right button-loading-icon"
                                                 size="small"/>
                                :
                                (
                                    rightIconCls ?
                                        <i className={`button-icon button-icon-right ${rightIconCls}`}
                                           aria-hidden="true"></i>
                                        :
                                        null
                                )
                        }

                        {
                            tip ?
                                <Tip visible={tipVisible}
                                     triggerEl={this.tipTriggerEl}
                                     position={tipPosition}>
                                    {tip}
                                </Tip>
                                :
                                null
                        }

                        {
                            isDraggableAnyWhere ?
                                anchorEl
                                :
                                connectDragSource(anchorEl)
                        }

                    </div>

                </div>
            );

        return isDraggableAnyWhere ?
            connectDragSource(el)
            :
            connectDragPreview(el);

    }
}

DraggableGridItem.propTypes = {

    index: PropTypes.number,

    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.any,
    desc: PropTypes.string,

    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    checked: PropTypes.bool,
    readOnly: PropTypes.bool,

    iconCls: PropTypes.string,
    rightIconCls: PropTypes.string,

    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Position)),

    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    isDraggableAnyWhere: PropTypes.bool,
    anchorIconCls: PropTypes.string,
    col: PropTypes.number,

    itemRenderer: PropTypes.func,
    renderer: PropTypes.func,

    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,

    // dnd
    connectDragPreview: PropTypes.func,
    connectDragSource: PropTypes.func,
    connectDropTarget: PropTypes.func,
    onMove: PropTypes.func

};

DraggableGridItem.defaultProps = {

    index: 0,

    theme: Theme.DEFAULT,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,

    disabled: false,
    isLoading: false,
    checked: false,
    readOnly: false,

    tipPosition: Position.BOTTOM,

    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square',

    isDraggableAnyWhere: false,
    anchorIconCls: 'fas fa-bars',
    col: 3

};

export default DraggableGridItem;