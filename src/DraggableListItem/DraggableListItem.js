import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragSource, DropTarget} from 'react-dnd';

import CircularLoading from '../CircularLoading';
import Theme from '../Theme';

import DragDrop from '../_vendors/DragDrop';

import './DraggableListItem.css';

const DRAG_LIST_ITEM_SYMBOL = Symbol('DRAG_LIST_ITEM');

@DropTarget(DRAG_LIST_ITEM_SYMBOL, DragDrop.getListTarget(), connect => ({
    connectDropTarget: connect.dropTarget()
}))
@DragSource(DRAG_LIST_ITEM_SYMBOL, DragDrop.getSource(), (connect, monitor) => ({
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
                connectDragSource, connectDropTarget, isDragging,
                className, style, theme, text, desc, iconCls, rightIconCls,
                disabled, isLoading, renderer, readOnly, draggable
            } = this.props,

            listItemClassName = (theme ? ` theme-${theme}` : '') + (isDragging ? ' dragging' : '')
                + (className ? ' ' + className : ''),

            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left',

            el = <div className={'draggable-list-item' + listItemClassName}
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

                <i className="fa fa-bars draggable-flag"
                   aria-hidden="true"></i>

            </div>;

        return draggable ?
            connectDragSource(connectDropTarget(el))
            :
            el;

    }
};

DraggableListItem.Mode = {
    NORMAL: 'normal',
    CHECKBOX: 'checkbox',
    RADIO: 'radio'
};

DraggableListItem.propTypes = {

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
     * Use this property to display an icon. It will display on the left.
     */
    iconCls: PropTypes.string,

    /**
     * Use this property to display an icon. It will display on the right.
     */
    rightIconCls: PropTypes.string,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     *
     */
    groupIndex: PropTypes.number,

    /**
     *
     */
    readOnly: PropTypes.bool,

    /**
     *
     */
    draggable: PropTypes.bool,

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

    iconCls: '',
    rightIconCls: '',

    readOnly: false,
    draggable: true

};