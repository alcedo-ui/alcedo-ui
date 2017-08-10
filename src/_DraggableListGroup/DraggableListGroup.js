import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragSource, DropTarget} from 'react-dnd';

import TipContainer from '../TipContainer';
import DraggableListItem from '../_DraggableListItem';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import DragDrop from '../_vendors/DragDrop';

import './DraggableListGroup.css';

const DRAG_LIST_GROUP_SYMBOL = Symbol('DRAG_LIST_GROUP');

@DropTarget(DRAG_LIST_GROUP_SYMBOL, DragDrop.getVerticalTarget(), connect => ({
    connectDropTarget: connect.dropTarget()
}))
@DragSource(DRAG_LIST_GROUP_SYMBOL, DragDrop.getSource(), (connect, monitor) => ({
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
export default class DraggableListGroup extends Component {

    constructor(props) {

        super(props);

        this.clickHandler = this::this.clickHandler;
        this.mouseEnterHandler = this::this.mouseEnterHandler;
        this.mouseLeaveHandler = this::this.mouseLeaveHandler;

    }

    clickHandler() {
        const {disabled, onTouchTap} = this.props;
        !disabled && onTouchTap && onTouchTap();
    }

    mouseEnterHandler(e) {
        const {onMouseEnter} = this.props;
        onMouseEnter && onMouseEnter(e);
    }

    mouseLeaveHandler(e) {
        const {onMouseLeave} = this.props;
        onMouseLeave && onMouseLeave(e);
    }

    render() {

        const {
                connectDragPreview, connectDragSource, connectDropTarget, isDragging,
                children, className, style, theme, text, iconCls, rightIconCls, anchorIconCls, isDraggableAnyWhere,
                disabled, isLoading
            } = this.props,

            listGroupClassName = (theme ? ` theme-${theme}` : '') + (isDragging ? ' dragging' : '')
                + (isDraggableAnyWhere ? ' draggable' : '') + (className ? ' ' + className : ''),

            anchorEl = <i className={'draggable-list-group-anchor' + (anchorIconCls ? ' ' + anchorIconCls : '')}
                          aria-hidden="true"></i>,

            el = connectDropTarget(
                <div className={'draggable-list-group' + listGroupClassName}
                     style={style}
                     disabled={disabled || isLoading}
                     onClick={this.clickHandler}
                     onMouseEnter={this.mouseEnterHandler}
                     onMouseLeave={this.mouseLeaveHandler}>

                    <DraggableListItem className="draggable-list-group-name"
                                       text={text}
                                       iconCls={iconCls}
                                       rightIconCls={rightIconCls}
                                       disabled={disabled}
                                       isLoading={isLoading}
                                       isGroupTitle={true}
                                       anchorIconCls={anchorIconCls}
                                       isDraggableAnyWhere={isDraggableAnyWhere}/>

                    <div className="draggable-list-group-item-wrapper">
                        {children}
                    </div>

                    {
                        isDraggableAnyWhere ?
                            anchorEl
                            :
                            connectDragSource(anchorEl)
                    }

                </div>
            );

        return isDraggableAnyWhere ?
            connectDragSource(el)
            :
            connectDragPreview(el);

    }
};

DraggableListGroup.propTypes = {

    connectDragPreview: PropTypes.func,
    connectDragSource: PropTypes.func,
    connectDropTarget: PropTypes.func,
    isDragging: PropTypes.bool,

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
     * The text value of the list button. Type can be string or number.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The list item's display text. Type can be string, number or bool.
     */
    text: PropTypes.any,

    /**
     * If true, the list button will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the button will be have loading effect.
     */
    isLoading: PropTypes.bool,

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
    anchorIconCls: PropTypes.string,

    /**
     *
     */
    isDraggableAnyWhere: PropTypes.bool,

    /**
     * Callback function fired when a list item touch-tapped.
     */
    onTouchTap: PropTypes.func,

    /**
     *
     */
    onMouseEnter: PropTypes.func,

    /**
     *
     */
    onMouseLeave: PropTypes.func

};

DraggableListGroup.defaultProps = {

    className: '',
    style: null,

    theme: Theme.DEFAULT,

    value: '',
    text: '',

    disabled: false,
    isLoading: false,

    iconCls: '',
    rightIconCls: '',

    anchorIconCls: 'fa fa-bars',
    isDraggableAnyWhere: false

};