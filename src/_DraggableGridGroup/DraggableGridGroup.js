import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragSource, DropTarget} from 'react-dnd';

import DraggableGridItem from '../_DraggableGridItem';
import Theme from '../Theme';

import DragDrop from '../_vendors/DragDrop';

import './DraggableGridGroup.css';

const DRAG_GRID_GROUP_SYMBOL = Symbol('DRAG_GRID_GROUP');

@DropTarget(DRAG_GRID_GROUP_SYMBOL, DragDrop.getVerticalTarget(), connect => ({
    connectDropTarget: connect.dropTarget()
}))
@DragSource(DRAG_GRID_GROUP_SYMBOL, DragDrop.getSource(), (connect, monitor) => ({
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
export default class DraggableGridGroup extends Component {

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
                + (className ? ' ' + className : ''),

            anchorEl = <i className={'draggable-grid-group-anchor' + (anchorIconCls ? ' ' + anchorIconCls : '')}
                          aria-hidden="true"></i>,

            el = connectDropTarget(
                <div className={'draggable-grid-group' + listGroupClassName}
                     style={style}
                     disabled={disabled || isLoading}
                     onClick={this.clickHandler}
                     onMouseEnter={this.mouseEnterHandler}
                     onMouseLeave={this.mouseLeaveHandler}>

                    <DraggableGridItem className="draggable-grid-group-name"
                                       text={text}
                                       iconCls={iconCls}
                                       rightIconCls={rightIconCls}
                                       disabled={disabled}
                                       isLoading={isLoading}
                                       isGroupTitle={true}
                                       anchorIconCls={anchorIconCls}
                                       isDraggableAnyWhere={isDraggableAnyWhere}/>

                    <div className="draggable-grid-group-item-wrapper">
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

DraggableGridGroup.propTypes = {

    connectDragSource: PropTypes.func,
    connectDropTarget: PropTypes.func,
    isDragging: PropTypes.bool,

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
    theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

    /**
     * The text value of the grid button. Type can be string or number.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The grid item's display text. Type can be string, number or bool.
     */
    text: PropTypes.any,

    /**
     * If true, the grid button will be disabled.
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
     * Callback function fired when a grid item touch-tapped.
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

DraggableGridGroup.defaultProps = {

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