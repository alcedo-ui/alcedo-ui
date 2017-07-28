import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragSource, DropTarget} from 'react-dnd';

import CircularLoading from '../CircularLoading';
import TipContainer from '../TipContainer';
import TouchRipple from '../TouchRipple';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './DraggableListItem.css';

const DRAG_TYPE_SYMBOL = Symbol('DRAG_TYPE');

const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index
        };
    }
};

const cardTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        props.moveCard(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    }
};

@DropTarget(DRAG_TYPE_SYMBOL, cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
}))
@DragSource(DRAG_TYPE_SYMBOL, cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
export default class DraggableListItem extends Component {

    constructor(props) {

        super(props);

        this.clickHandle = this::this.clickHandle;
        this.startRipple = this::this.startRipple;
        this.endRipple = this::this.endRipple;
        this.mouseEnterHandle = this::this.mouseEnterHandle;
        this.mouseLeaveHandle = this::this.mouseLeaveHandle;

    }

    clickHandle(e) {

        const {disabled, isLoading, readOnly} = this.props;

        if (disabled || isLoading || readOnly) {
            return;
        }

        const {onTouchTap} = this.props;
        onTouchTap && onTouchTap(e);

    }

    startRipple(e) {
        this.refs.touchRipple.addRipple(e);
    }

    endRipple() {
        this.refs.touchRipple.removeRipple();
    }

    mouseEnterHandle(e) {
        const {onMouseEnter} = this.props;
        onMouseEnter && onMouseEnter(e);
    }

    mouseLeaveHandle(e) {
        const {onMouseLeave} = this.props;
        onMouseLeave && onMouseLeave(e);
    }

    render() {

        const {
                connectDragSource, connectDropTarget,
                className, style, theme, text, desc, iconCls, rightIconCls, tip, tipPosition,
                disabled, isLoading, disableTouchRipple, rippleDisplayCenter, renderer, readOnly
            } = this.props,
            listItemClassName = (theme ? ` theme-${theme}` : '') + (className ? ' ' + className : ''),
            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return connectDragSource(connectDropTarget(
            <div className={'draggable-list-item' + listItemClassName}
                 style={style}
                 disabled={disabled || isLoading}
                 readOnly={readOnly}
                 onClick={this.clickHandle}
                 onMouseEnter={this.mouseEnterHandle}
                 onMouseLeave={this.mouseLeaveHandle}>

                {
                    isLoading && loadingIconPosition === 'left' ?
                        <CircularLoading className="button-icon button-icon-left button-loading-icon"
                                         size="small"/>
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
                    renderer && typeof renderer === 'function' ?
                        renderer(this.props)
                        :
                        (
                            desc ?
                                <div className="draggable-list-item-content">
                                    <div className="draggable-list-item-content-value">
                                        {text}
                                    </div>
                                    <div className="draggable-list-item-content-desc">
                                        {desc}
                                    </div>
                                </div>
                                :
                                text
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
                    disableTouchRipple || readOnly ?
                        null
                        :
                        <TouchRipple ref="touchRipple"
                                     className={disabled || isLoading ? 'hidden' : ''}
                                     displayCenter={rippleDisplayCenter}/>
                }

            </div>
        ));

    }
};

DraggableListItem.propTypes = {

    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,

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
     * The desc value of the list button. Type can be string or number.
     */
    desc: PropTypes.string,

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
    tipPosition: PropTypes.oneOf(Util.enumerateValue(TipContainer.Position)),

    /**
     *
     */
    rippleDisplayCenter: PropTypes.bool,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     *
     */
    readOnly: PropTypes.bool,

    /**
     * Callback function fired when a list item touch-tapped.
     */
    onTouchTap: PropTypes.func,

    /**
     *
     */
    onSelect: PropTypes.func,

    /**
     *
     */
    onDeselect: PropTypes.func,

    /**
     *
     */
    onMouseEnter: PropTypes.func,

    /**
     *
     */
    onMouseLeave: PropTypes.func

};

DraggableListItem.defaultProps = {

    className: '',
    style: null,

    theme: Theme.DEFAULT,

    value: '',
    text: '',
    desc: '',

    disabled: false,
    isLoading: false,

    disableTouchRipple: false,

    iconCls: '',
    rightIconCls: '',

    tip: '',
    tipPosition: TipContainer.Position.BOTTOM,

    rippleDisplayCenter: false,

    readOnly: false

};