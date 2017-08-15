import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragSource, DropTarget} from 'react-dnd';

import Checkbox from '../Checkbox';
import CircularLoading from '../CircularLoading';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import DragDrop from '../_vendors/DragDrop';

import './DraggableListItem.css';

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

    static Mode = {
        NORMAL: 'normal',
        CHECKBOX: 'checkbox',
        RADIO: 'radio'
    };

    constructor(props) {

        super(props);

        this.state = {
            checked: props.checked
        };

        this.checkboxChangeHandler = this::this.checkboxChangeHandler;
        this.radioChangeHandler = this::this.radioChangeHandler;
        this.touchTapHandler = this::this.touchTapHandler;
        this.startRipple = this::this.startRipple;
        this.endRipple = this::this.endRipple;

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
            case DraggableListItem.Mode.CHECKBOX:
                this.checkboxChangeHandler(!this.state.checked, callback);
                return;
            case DraggableListItem.Mode.RADIO:
                this.radioChangeHandler(callback);
                return;
            case DraggableListItem.Mode.NORMAL:
                callback();
                return;
        }

    }

    startRipple(e) {
        this.refs.touchRipple.addRipple(e);
    }

    endRipple() {
        this.refs.touchRipple.removeRipple();
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
                mode, disabled, isLoading, itemRenderer, renderer, isGroupTitle, anchorIconCls, isDraggableAnyWhere,
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
                        mode === DraggableListItem.Mode.CHECKBOX ?
                            <Checkbox className="draggable-list-item-checkbox"
                                      value={checked}/>
                            :
                            null
                    }

                    {
                        mode === DraggableListItem.Mode.RADIO ?
                            <i className={'fa fa-check draggable-list-item-checked' + (checked ? ' activated' : '')}
                               aria-hidden="true"></i>
                            :
                            null
                    }

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
     *
     */
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),

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
    itemRenderer: PropTypes.func,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     *
     */
    checked: PropTypes.bool,

    /**
     *
     */
    mode: PropTypes.oneOf(Util.enumerateValue(DraggableListItem.Mode)),

    /**
     *
     */
    groupIndex: PropTypes.number,

    /**
     *
     */
    isGroupTitle: PropTypes.bool,

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

    mode: DraggableListItem.Mode.NORMAL,

    isGroupTitle: false,

    anchorIconCls: 'fa fa-bars',
    isDraggableAnyWhere: false

};