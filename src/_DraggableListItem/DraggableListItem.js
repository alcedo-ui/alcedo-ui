/**
 * @file DraggableListItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import {Draggable} from 'react-beautiful-dnd';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import CircularLoading from '../CircularLoading';
import TipProvider from '../TipProvider';

// Statics
import Theme from '../Theme';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';
import Position from '../_statics/Position';
import SelectMode from '../_statics/SelectMode';

class DraggableListItem extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    handleCheckboxChange = checked => {
        if (checked) {
            this.props.onSelect?.();
        } else {
            this.props.onDeselect?.();
        }
    };

    handleRadioChange = () => {
        if (!this.props.checked) {
            this.props.onSelect?.();
        }
    };

    handleClick = e => {

        e.preventDefault();

        const {disabled, isLoading, readOnly} = this.props;

        if (disabled || isLoading || readOnly) {
            return;
        }

        this.props.onClick?.(e);

        switch (this.props.selectMode) {
            case SelectMode.MULTI_SELECT:
                this.handleCheckboxChange(!this.props.checked);
                return;
            case SelectMode.SINGLE_SELECT:
                this.handleRadioChange();
                return;
        }

    };

    render() {

        const {

                index, className, style, theme, data, text, desc, title, iconCls, rightIconCls, tip, tipPosition,
                disabled, isLoading, renderer, itemRenderer, readOnly, isDragDisabled, anchorIconCls,

                checked, selectTheme, selectMode, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                onMouseEnter, onMouseLeave

            } = this.props,

            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <Draggable key={index}
                       draggableId={'' + index}
                       index={index}
                       isDragDisabled={isDragDisabled}>
                {
                    (dragProvided, dragSnapshot) => (
                        <div>
                            <div ref={dragProvided.innerRef}
                                 style={dragProvided.draggableStyle}
                                 {...dragProvided.draggableProps}
                                 {...dragProvided.dragHandleProps}>

                                <TipProvider className="block"
                                             tipContent={tip}
                                             position={tipPosition}>

                                    <div className={classNames('draggable-list-item', {
                                        [`theme-${theme}`]: theme,
                                        activated: checked,
                                        dragging: dragSnapshot.isDragging,
                                        [className]: className
                                    })}
                                         style={style}
                                         disabled={disabled || isLoading}
                                         readOnly={readOnly}
                                         title={title}
                                         onClick={this.handleClick}
                                         onMouseEnter={onMouseEnter}
                                         onMouseLeave={onMouseLeave}>

                                        {
                                            selectMode === SelectMode.SINGLE_SELECT &&
                                            (radioUncheckedIconCls || radioCheckedIconCls) ?
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
                                                           aria-hidden="true"/>
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
                                                )
                                        }

                                        {
                                            isLoading && loadingIconPosition === 'right' ?
                                                <CircularLoading
                                                    className="button-icon button-icon-right button-loading-icon"
                                                    size="small"/>
                                                :
                                                (
                                                    rightIconCls ?
                                                        <i className={`button-icon button-icon-right ${rightIconCls}`}
                                                           aria-hidden="true"/>
                                                        :
                                                        null
                                                )
                                        }

                                        <i className={`${anchorIconCls} draggable-list-item-anchor`}
                                           aria-hidden="true"/>

                                    </div>
                                </TipProvider>
                            </div>

                            {dragProvided.placeholder}

                        </div>
                    )
                }
            </Draggable>
        );

    }
}

DraggableListItem.propTypes = {

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
    title: PropTypes.string,

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

    isDragDisabled: PropTypes.bool,
    anchorIconCls: PropTypes.string,

    itemRenderer: PropTypes.func,
    renderer: PropTypes.func,

    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func

};

DraggableListItem.defaultProps = {

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

    isDragDisabled: false,
    anchorIconCls: 'fas fa-bars'

};

export default DraggableListItem;
