/**
 * @file Tab component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import FlatButton from '../FlatButton';
import IconButton from '../IconButton';

import Position from '../_statics/Position';

import Event from '../_vendors/Event';

class Tabs extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.tabs = createRef();
        this.tabsEl = null;

        this.tabsScrollTimeout = null;

        this.state = {
            isTabsOverflow: false
        };

    }

    isTabsOverflow = () => {

        if (!this.tabsEl) {
            return false;
        }

        return this.tabsEl.scrollWidth > this.tabsEl.offsetWidth;

    };

    handleTabsScroll = (direction, keepScrolling) => {

        if (!this.tabsEl) {
            return;
        }

        const {scrollStep, scrollInterval, keepScrollingWait} = this.props;

        this.tabsEl.scrollLeft += (direction === Position.LEFT ? -1 : 1) * scrollStep;

        this.clearTabsScrollTimeout();
        this.tabsScrollTimeout = setTimeout(() => {
            this.handleTabsScroll(direction, true);
        }, keepScrolling === true ? scrollInterval : keepScrollingWait);

    };

    tabsScrollLeft = () => {
        this.handleTabsScroll(Position.LEFT);
    };

    tabsScrollRight = () => {
        this.handleTabsScroll(Position.RIGHT);
    };

    clearTabsScrollTimeout = () => {
        this.tabsScrollTimeout && clearTimeout(this.tabsScrollTimeout);
    };

    handleTabsOverflowChange = () => {
        const {isTabsOverflow, onTabsOverflowChange} = this.props;
        if (onTabsOverflowChange && isTabsOverflow !== this.isTabsOverflow()) {
            onTabsOverflowChange(!isTabsOverflow);
        }
    };

    componentDidMount() {

        this.tabsEl = this.tabs && this.tabs.current;

        Event.addEvent(document, 'mouseup', this.clearTabsScrollTimeout);

        this.handleTabsOverflowChange();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.handleTabsOverflowChange();
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mouseup', this.clearTabsScrollTimeout);
    }

    render() {

        const {
                children, className, style, isTabFullWidth, data, activatedIndex, isTabsOverflow,
                scrollLeftIconCls, scrollRightIconCls,
                onTabMouseDown, onTabMouseUp, onTabClick, onTabButtonDragStart, onTabButtonDragEnd
            } = this.props,

            tabWidthPerCent = 100 / data.length;

        return (
            <DragDropContext onDragStart={onTabButtonDragStart}
                             onDragEnd={onTabButtonDragEnd}>

                <div className={classNames('tabs', {
                    'auto-width': !isTabFullWidth,
                    [className]: className
                })}
                     style={style}>

                    <Droppable droppableId="droppable">
                        {
                            dropProvided => (
                                <div ref={dropProvided.innerRef}
                                     {...dropProvided.droppableProps}>
                                    <div ref={this.tabs}
                                         className="tabs-scroller">

                                        {
                                            data && data.map((item, index) => {

                                                const {

                                                    // not passing down these props
                                                    renderer, onActive,

                                                    ...restProps

                                                } = item;

                                                return (
                                                    <FlatButton {...restProps}
                                                                key={index}
                                                                className={classNames('tab-button', {
                                                                    activated: activatedIndex === index
                                                                })}
                                                                style={{
                                                                    width: isTabFullWidth ? `${tabWidthPerCent}%` : 'auto'
                                                                }}
                                                                onMouseDown={e => onTabMouseDown && onTabMouseDown(item, index, e)}
                                                                onMouseUp={e => onTabMouseUp && onTabMouseUp(item, index, e)}
                                                                onClick={e => onTabClick(item, index, e)}/>
                                                );

                                            })
                                        }

                                        {children}

                                        {dropProvided.placeholder}

                                    </div>
                                </div>
                            )
                        }
                    </Droppable>

                    {
                        isTabFullWidth ?
                            <div className="ink-bar"
                                 style={{
                                     width: `${tabWidthPerCent}%`,
                                     transform: `translate(${activatedIndex * 100}%, 0)`
                                 }}></div>
                            :
                            null
                    }

                    {
                        isTabsOverflow ?
                            <Fragment>
                                <IconButton className="tab-button tab-scroll-left-button"
                                            iconCls={scrollLeftIconCls}
                                            onMouseDown={this.tabsScrollLeft}/>
                                <IconButton className="tab-button tab-scroll-right-button"
                                            iconCls={scrollRightIconCls}
                                            onMouseDown={this.tabsScrollRight}/>
                            </Fragment>
                            :
                            null
                    }

                </div>

            </DragDropContext>
        );

    }
}

Tabs.propTypes = {

    children: PropTypes.any,

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Children passed into the TabsItem.
     */
    data: PropTypes.arrayOf(PropTypes.shape({

        /**
         * The text value of the tab.Type can be string or number.
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true, the tab will be disabled.
         */
        disabled: PropTypes.bool,

        /**
         * If true,the tab will be have loading effect.
         */
        isLoading: PropTypes.bool,

        /**
         * If true,the element's ripple effect will be disabled.
         */
        disableTouchRipple: PropTypes.bool,

        /**
         * Use this property to display an icon.It will display on the left.
         */
        iconCls: PropTypes.string,

        /**
         * The position of the icon.
         */
        iconPosition: PropTypes.string,

        /**
         * The render content in tab.
         */
        renderer: PropTypes.any,

        /**
         * Callback function fired when click onActive tab.
         */
        onActive: PropTypes.func

    })).isRequired,

    /**
     * Activated tab index.
     */
    activatedIndex: PropTypes.number,

    /**
     * If true,the data is FullWidth.
     */
    isTabFullWidth: PropTypes.bool,

    isTabsOverflow: PropTypes.bool,

    scrollLeftIconCls: PropTypes.string,
    scrollRightIconCls: PropTypes.string,
    scrollStep: PropTypes.number,
    scrollInterval: PropTypes.number,
    keepScrollingWait: PropTypes.number,

    onTabClick: PropTypes.func,
    onTabMouseDown: PropTypes.func,
    onTabMouseUp: PropTypes.func,
    onTabsOverflowChange: PropTypes.func,
    onTabButtonDragStart: PropTypes.func,
    onTabButtonDragEnd: PropTypes.func

};

Tabs.defaultProps = {

    data: [],

    activatedIndex: 0,
    isTabFullWidth: true,

    scrollLeftIconCls: 'fas fa-chevron-left',
    scrollRightIconCls: 'fas fa-chevron-right',
    scrollStep: 100,
    scrollInterval: 100,
    keepScrollingWait: 500

};

export default Tabs;
