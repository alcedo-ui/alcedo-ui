/**
 * @file DraggableGridItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragSource, DropTarget} from 'react-dnd';

import Checkbox from '../Checkbox';
import CircularLoading from '../CircularLoading';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import DragDrop from '../_vendors/DragDrop';

import './DraggableGridItem.css';

const DRAG_GRID_ITEM_SYMBOL = Symbol('DRAG_GRID_ITEM');

@DropTarget(DRAG_GRID_ITEM_SYMBOL, DragDrop.getHorizontalTarget(), connect => ({
    connectDropTarget: connect.dropTarget()
}))
@DragSource(DRAG_GRID_ITEM_SYMBOL, DragDrop.getSource(), (connect, monitor) => ({
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
export default class DraggableGridItem extends Component {

    static Mode = {
        NORMAL: 'normal',
        CHECKBOX: 'checkbox',
        RADIO: 'radio'
    };

    constructor(props, ...rest) {

        super(props, ...rest);

        this.state = {
            checked: props.checked,
            tipVisible: false,
            tipTriggerEl: null
        };

        this.showTip = ::this.showTip;
        this.hideTip = ::this.hideTip;
        this.checkboxChangeHandler = ::this.checkboxChangeHandler;
        this.radioChangeHandler = ::this.radioChangeHandler;
        this.touchTapHandler = ::this.touchTapHandler;
        this.mouseEnterHandler = ::this.mouseEnterHandler;
        this.mouseOverHandler = ::this.mouseOverHandler;

    }

    showTip(e) {
        if (!this.state.tipVisible) {
            this.setState({
                tipVisible: true,
                tipTriggerEl: e.target
            });
        }
    }

    hideTip() {
        this.setState({
            tipVisible: false
        });
    }

    checkboxChangeHandler(checked, callback) {
        this.setState({
            checked
        }, () => {

            const {onSelect, onDeselect} = this.props;

            if (checked) {
                onSelect && onSelect();
            } else {
                onDeselect && onDeselect();
            }

            callback && typeof callback === 'function' && callback();

        });
    }

    radioChangeHandler(callback) {

        const {checked} = this.state;

        if (!checked) {
            this.setState({
                checked: true
            }, () => {
                const {onSelect} = this.props;
                onSelect && onSelect();
                callback && typeof callback === 'function' && callback();
            });
        } else {
            callback && typeof callback === 'function' && callback();
        }

    }

    touchTapHandler(e) {

        e.preventDefault();

        const {disabled, isLoading, isGroupTitle} = this.props;

        if (disabled || isLoading || isGroupTitle) {
            return;
        }

        const {mode} = this.props,
            callback = () => {
                const {onTouchTap} = this.props;
                onTouchTap && onTouchTap(e);
            };

        switch (mode) {
            case DraggableGridItem.Mode.CHECKBOX:
                this.checkboxChangeHandler(!this.state.checked, callback);
                return;
            case DraggableGridItem.Mode.RADIO:
                this.radioChangeHandler(callback);
                return;
            case DraggableGridItem.Mode.NORMAL:
                callback();
                return;
        }

    }

    mouseEnterHandler(e) {

        this.showTip(e);

        const {onMouseEnter} = this.props;
        onMouseEnter && onMouseEnter(e);

    }

    mouseOverHandler(e) {

        this.showTip(e);

        const {onMouseOver} = this.props;
        onMouseOver && onMouseOver(e);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.state.checked) {
            this.setState({
                checked: nextProps.checked
            });
        }
    }

    render() {

        const {
                connectDragPreview, connectDragSource, connectDropTarget, isDragging,
                index, className, style, itemColWidth, theme, data, text, desc, iconCls, rightIconCls,
                mode, disabled, isLoading, itemRenderer, renderer, isGroupTitle, anchorIconCls, isDraggableAnyWhere,
                tip, tipPosition, onMouseLeave
            } = this.props,
            {checked, tipVisible, tipTriggerEl} = this.state,

            listItemClassName = (theme ? ` theme-${theme}` : '') + (checked ? ' activated' : '')
                + (isDragging ? ' dragging' : '') + (isDraggableAnyWhere ? ' draggable' : '')
                + (className ? ' ' + className : ''),

            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left',

            anchorEl = <i className={'draggable-grid-item-anchor' + (anchorIconCls ? ' ' + anchorIconCls : '')}
                          aria-hidden="true"></i>,

            el = (
                <div className={'draggable-grid-item-wrapper'}
                     style={itemColWidth ? {width: `${itemColWidth}%`} : null}>

                    <div className={'draggable-grid-item' + listItemClassName}
                         style={style}
                         disabled={disabled || isLoading}
                         readOnly={isGroupTitle}
                         onTouchTap={this.touchTapHandler}
                         onMouseEnter={this.mouseEnterHandler}
                         onMouseOver={this.mouseOverHandler}
                         onMouseLeave={onMouseLeave}>

                        {
                            mode === DraggableGridItem.Mode.CHECKBOX ?
                                <Checkbox className="draggable-grid-item-checkbox"
                                          value={checked}
                                          disabled={disabled || isLoading}/>
                                :
                                null
                        }

                        {
                            mode === DraggableGridItem.Mode.RADIO ?
                                <i className={'fa fa-check draggable-grid-item-checked' + (checked ? ' activated' : '')}
                                   aria-hidden="true"></i>
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
                                                <div className="grid-item-content">
                                                    <div className="grid-item-content-value">
                                                        {text}
                                                    </div>
                                                    <div className="grid-item-content-desc">
                                                        {desc}
                                                    </div>
                                                </div>
                                                :
                                                text
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
                            isGroupTitle ?
                                null
                                :
                                (
                                    isDraggableAnyWhere ?
                                        anchorEl
                                        :
                                        connectDragSource(anchorEl)
                                )
                        }

                    </div>

                    {
                        tip ?
                            <Tip text={tip}
                                 visible={tipVisible}
                                 triggerEl={tipTriggerEl}
                                 position={tipPosition}
                                 onRequestClose={this.hideTip}/>
                            :
                            null
                    }

                </div>
            );

        return isGroupTitle ?
            el
            :
            (
                isDraggableAnyWhere ?
                    connectDragSource(connectDropTarget(el))
                    :
                    connectDragPreview(connectDropTarget(el))
            );

    }
};

DraggableGridItem.propTypes = {

    connectDragPreview: PropTypes.func,
    connectDragSource: PropTypes.func,
    connectDropTarget: PropTypes.func,
    isDragging: PropTypes.bool,

    index: PropTypes.number,

    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.any,
    desc: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    iconCls: PropTypes.string,
    rightIconCls: PropTypes.string,
    itemRenderer: PropTypes.func,
    renderer: PropTypes.func,
    checked: PropTypes.bool,
    mode: PropTypes.oneOf(Util.enumerateValue(DraggableGridItem.Mode)),
    groupIndex: PropTypes.number,
    isGroupTitle: PropTypes.bool,
    anchorIconCls: PropTypes.string,
    isDraggableAnyWhere: PropTypes.bool,

    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Tip.Position)),

    onTouchTap: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseOver: PropTypes.func

};

DraggableGridItem.defaultProps = {

    index: 0,

    className: '',
    style: null,

    theme: Theme.DEFAULT,

    data: '',
    value: '',
    text: '',
    desc: '',

    disabled: false,
    isLoading: false,

    iconCls: '',
    rightIconCls: '',

    checked: false,

    mode: DraggableGridItem.Mode.NORMAL,

    isGroupTitle: false,

    anchorIconCls: 'fa fa-bars',
    isDraggableAnyWhere: false,

    tip: ''

};