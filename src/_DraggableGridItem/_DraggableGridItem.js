/**
 * @file DraggableGridItem component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd';
import classNames from 'classnames';

import Checkbox from '../Checkbox';
import Radio from '../Radio';
import CircularLoading from '../CircularLoading';
import TipProvider from '../TipProvider';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Position from '../_statics/Position';
import SelectMode from '../_statics/SelectMode';

class DraggableGridItem extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    handleCheckboxChange = checked => {

        const {onSelect, onDeselect} = this.props;

        if (checked) {
            onSelect && onSelect();
        } else {
            onDeselect && onDeselect();
        }

    };

    handleRadioChange = () => {

        const {checked} = this.props;

        if (!checked) {
            const {onSelect} = this.props;
            onSelect && onSelect();
        }

    };

    handleClick = e => {

        e.preventDefault();

        const {disabled, isLoading, readOnly} = this.props;

        if (disabled || isLoading || readOnly) {
            return;
        }

        const {onClick} = this.props;
        onClick && onClick(e);

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

                index, className, style, theme, data, text, desc, iconCls, rightIconCls, tip, tipPosition,
                checked, disabled, isLoading, renderer, itemRenderer, readOnly, col, anchorIconCls,

                selectTheme, selectMode, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                onMouseEnter, onMouseLeave

            } = this.props,

            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <Draggable key={index}
                       draggableId={index}>
                {
                    dragProvided => (
                        <div className="draggable-grid-item-drag-provided-wrapper"
                             style={col ? {width: `${100 / col}%`} : null}>

                            <div ref={dragProvided.innerRef}
                                 style={dragProvided.draggableStyle}
                                 {...dragProvided.draggableProps}
                                 {...dragProvided.dragHandleProps}>

                                <div className="draggable-grid-item-wrapper">

                                    <TipProvider tipContent={tip}
                                                 position={tipPosition}>
                                        <div className={classNames('draggable-grid-item', {
                                            [`theme-${theme}`]: theme,
                                            activated: checked,
                                            [className]: className
                                        })}
                                             style={style}
                                             disabled={disabled || isLoading}
                                             readOnly={readOnly}
                                             onClick={this.handleClick}
                                             onMouseEnter={onMouseEnter}
                                             onMouseLeave={onMouseLeave}>

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
                                                                        <div
                                                                            className="draggable-grid-item-content-value">
                                                                            {text}
                                                                        </div>
                                                                        <div
                                                                            className="draggable-grid-item-content-desc">
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
                                                               aria-hidden="true"></i>
                                                            :
                                                            null
                                                    )
                                            }

                                            <i className={`${anchorIconCls} draggable-grid-item-anchor`}
                                               aria-hidden="true"></i>

                                        </div>
                                    </TipProvider>

                                </div>

                            </div>

                            {dragProvided.placeholder}

                        </div>
                    )
                }
            </Draggable>
        );

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

    anchorIconCls: PropTypes.string,

    col: PropTypes.number,

    itemRenderer: PropTypes.func,
    renderer: PropTypes.func,

    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func

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

    iconCls: null,
    rightIconCls: null,

    tipPosition: Position.BOTTOM,

    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square',

    anchorIconCls: 'fas fa-bars',

    col: 3

};

export default DraggableGridItem;
