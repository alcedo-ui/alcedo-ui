/**
 * @file DraggableGridGroup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragSource, DropTarget} from 'react-dnd';

import DraggableGridItem from '../_DraggableGridItem';
import Theme from '../Theme';

import DragDrop from '../_vendors/DragDrop';

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

    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {
                connectDragPreview, connectDragSource, connectDropTarget, isDragging,
                children, className, style, theme, text, iconCls, rightIconCls, anchorIconCls, isDraggableAnyWhere,
                disabled, isLoading, onMouseEnter, onMouseLeave
            } = this.props,

            listGroupClassName = (theme ? ` theme-${theme}` : '') + (isDragging ? ' dragging' : '')
                + (isDraggableAnyWhere ? ' draggable' : '') + (className ? ' ' + className : ''),

            anchorEl = <i className={'draggable-grid-group-anchor' + (anchorIconCls ? ' ' + anchorIconCls : '')}
                          aria-hidden="true"></i>,

            el = connectDropTarget(
                <div className={'draggable-grid-group' + listGroupClassName}
                     style={style}
                     disabled={disabled || isLoading}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>

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

    connectDragPreview: PropTypes.func,
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