/**
 * @file DraggableListItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragSource, DropTarget} from 'react-dnd';

import Checkbox from '../Checkbox';
import CircularLoading from '../CircularLoading';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import DragDrop from '../_vendors/DragDrop';
import SelectMode from '../_statics/SelectMode';

const DRAG_LIST_ITEM_SYMBOL = Symbol('DRAG_LIST_ITEM');

@DropTarget(DRAG_LIST_ITEM_SYMBOL, DragDrop.getVerticalTarget(), connect => ({
    connectDropTarget: connect.dropTarget()
}))
@DragSource(DRAG_LIST_ITEM_SYMBOL, DragDrop.getSource(), (connect, monitor) => ({
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
export default class DraggableListItem extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            checked: props.checked
        };

        this.checkboxChangeHandler = ::this.checkboxChangeHandler;
        this.radioChangeHandler = ::this.radioChangeHandler;
        this.touchTapHandler = ::this.touchTapHandler;

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

        const {selectMode} = this.props,
            callback = () => {
                const {onTouchTap} = this.props;
                onTouchTap && onTouchTap(e);
            };

        switch (selectMode) {
            case DraggableListItem.SelectMode.MULTI_SELECT:
                this.checkboxChangeHandler(!this.state.checked, callback);
                return;
            case DraggableListItem.SelectMode.SINGLE_SELECT:
                this.radioChangeHandler(callback);
                return;
            case DraggableListItem.SelectMode.NORMAL:
                callback();
                return;
        }

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

                index, className, style, theme, data, text, desc, iconCls, rightIconCls,
                disabled, isLoading, itemRenderer, renderer, isGroupTitle, anchorIconCls, isDraggableAnyWhere,

                selectTheme, selectMode, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                onMouseEnter, onMouseLeave

            } = this.props,
            {checked} = this.state,

            listItemClassName = (theme ? ` theme-${theme}` : '') + (checked ? ' activated' : '')
                + (isDragging ? ' dragging' : '') + (isDraggableAnyWhere ? ' draggable' : '')
                + (className ? ' ' + className : ''),

            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left',

            anchorEl = <i className={'draggable-list-item-anchor' + (anchorIconCls ? ' ' + anchorIconCls : '')}
                          aria-hidden="true"></i>,

            el = (
                <div className={'draggable-list-item' + listItemClassName}
                     style={style}
                     readOnly={isDraggableAnyWhere}
                     disabled={disabled || isLoading}
                     onTouchTap={this.touchTapHandler}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>

                    {
                        selectMode === SelectMode.SINGLE_SELECT ?
                            <Radio className="draggable-list-item-select"
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
                            <Checkbox className="draggable-list-item-select"
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
                                            <div className="list-item-content">
                                                <div className="list-item-content-value">
                                                    {text}
                                                </div>
                                                <div className="list-item-content-desc">
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

DraggableListItem.propTypes = {

    connectDragPreview: PropTypes.func,
    connectDragSource: PropTypes.func,
    connectDropTarget: PropTypes.func,
    isDragging: PropTypes.bool,

    index: PropTypes.number,

    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    text: PropTypes.any,
    desc: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    iconCls: PropTypes.string,
    rightIconCls: PropTypes.string,
    checked: PropTypes.bool,
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),
    groupIndex: PropTypes.number,
    isGroupTitle: PropTypes.bool,
    anchorIconCls: PropTypes.string,
    isDraggableAnyWhere: PropTypes.bool,

    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    itemRenderer: PropTypes.func,
    renderer: PropTypes.func,

    onTouchTap: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func

};

DraggableListItem.defaultProps = {

    index: 0,

    className: null,
    style: null,

    theme: Theme.DEFAULT,

    data: null,
    value: null,
    text: null,
    desc: null,

    disabled: false,
    isLoading: false,

    iconCls: null,
    rightIconCls: null,

    checked: false,

    selectMode: SelectMode.NORMAL,

    isGroupTitle: false,

    anchorIconCls: 'fa fa-bars',
    isDraggableAnyWhere: false,

    radioUncheckedIconCls: 'fa fa-check',
    radioCheckedIconCls: 'fa fa-check',
    checkboxUncheckedIconCls: 'fa fa-square-o',
    checkboxCheckedIconCls: 'fa fa-check-square',
    checkboxIndeterminateIconCls: 'fa fa-minus-square'

};