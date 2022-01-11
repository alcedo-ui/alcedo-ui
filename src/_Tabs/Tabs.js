/**
 * @file Tabs component
 */

import React, {Component, Fragment, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import IconButton from '../IconButton';
import TabButton from '../_TabButton';

// Statics
import Position from '../_statics/Position';
import Direction from '../_statics/Direction';

// Vendors
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import Event from '../_vendors/Event';
import ScrollBar from '../_vendors/ScrollBar';
import Valid from '../_vendors/Valid';

class Tabs extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.tabs = createRef();
        this.tabsEl = null;
        this.scrollLeftButton = createRef();
        this.scrollRightButton = createRef();

        this.tabsScrollTimeout = null;

        this.state = {
            scrollLeft: 0,
            inkBarWidth: 0,
            inkBarOffsetLeft: 0
        };

    }

    componentDidMount() {

        this.tabsEl = this.tabs?.current;

        Event.addEvent(window, 'resize', this.handleResize);
        Event.addEvent(document, 'mouseup', this.clearTabsScrollTimeout);

        this.handleInkBarSizeChange();
        this.handleTabsOverflowChange();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.handleInkBarSizeChange();
        this.handleTabsOverflowChange();
    }

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.handleResize);
        Event.removeEvent(document, 'mouseup', this.clearTabsScrollTimeout);
    }

    isTabsOverflow = () => {

        if (!this.tabsEl) {
            return false;
        }

        const scrollEl = this.tabsEl.querySelector('.tab-buttons-wrapper');

        if (!scrollEl) {
            return false;
        }

        return Math.floor(this.tabsEl.offsetWidth) < Math.floor(scrollEl.offsetWidth);

    };

    isScrollLeftButtonDisabled = scrollLeft => {
        return scrollLeft <= 0;
    };

    isScrollRightButtonDisabled = scrollLeft => {

        if (!this.tabsEl) {
            return false;
        }

        return scrollLeft >= this.tabsEl.scrollWidth - this.tabsEl.offsetWidth;

    };

    getScrollerStyle = () => {

        const horizontalScrollBarSize = ScrollBar.getSize(Direction.HORIZONTAL);

        if (!horizontalScrollBarSize || horizontalScrollBarSize <= 0) {
            return null;
        }

        return {
            height: `calc(100% + ${horizontalScrollBarSize}px)`,
            marginBottom: -horizontalScrollBarSize
        };

    };

    clearTabsScrollTimeout = () => {
        this.tabsScrollTimeout && clearTimeout(this.tabsScrollTimeout);
    };

    handleOnTabsScroll = e => {
        this.setState({
            scrollLeft: e.target.scrollLeft
        });
    };

    handleTabsScroll = (direction, keepScrolling) => {

        if (!this.tabsEl) {
            return;
        }

        const {scrollStep, scrollInterval, keepScrollingWait} = this.props;

        this.tabsEl.scrollLeft += (direction === Position.LEFT ? -1 : 1) * scrollStep;

        this.setState({
            scrollLeft: this.tabsEl.scrollLeft
        });

        this.clearTabsScrollTimeout();
        this.tabsScrollTimeout = setTimeout(() => this.handleTabsScroll(direction, true),
            keepScrolling === true ?
                scrollInterval
                :
                keepScrollingWait
        );

    };

    tabsScrollLeft = e => {
        this.handleTabsScroll(Position.LEFT);
        this.props.onScrollLeftButtonMouseDown?.(e);
    };

    tabsScrollRight = e => {
        this.handleTabsScroll(Position.RIGHT);
        this.props.onScrollRightButtonMouseDown?.(e);
    };

    handleInkBarSizeChange = () => {

        if (!this.tabsEl) {
            return;
        }

        const tabs = this.tabsEl.querySelectorAll('.tab-buttons .tab-button');

        if (!tabs || tabs.length < 1) {
            return;
        }

        const activatedIndex = Valid.range(this.props.activatedIndex, 0, tabs.length - 1);
        const activatedtab = tabs[activatedIndex];

        if (!activatedtab) {
            return;
        }

        if (activatedtab.offsetWidth !== this.state.inkBarWidth) {
            this.setState({
                inkBarWidth: activatedtab.offsetWidth
            });
        }

        if (activatedtab.offsetLeft !== this.state.inkBarOffsetLeft) {
            this.setState({
                inkBarOffsetLeft: activatedtab.offsetLeft
            });
        }

    };

    handleTabsOverflowChange = () => {

        const {isTabsOverflow} = this.props;
        const current = this.isTabsOverflow();

        if (current !== isTabsOverflow) {

            if (current && this.tabsEl) {
                this.setState({
                    scrollLeft: this.tabsEl.scrollLeft
                });
            }

            this.props.onTabsOverflowChange?.(!isTabsOverflow);

        }

    };

    handleResize = debounce(() => {
        this.handleInkBarSizeChange();
        this.handleTabsOverflowChange();
    }, 150);

    render() {

        const {
            children, className, style, isTabFullWidth, isInkBarHidden,
            data, activatedIndex, isTabsOverflow, draggable, idField,
            scrollLeftIconCls, scrollRightIconCls,
            onTabMouseDown, onTabMouseUp, onTabClick, onTabButtonDragStart, onTabButtonDragEnd
        } = this.props;
        const {scrollLeft, inkBarWidth, inkBarOffsetLeft} = this.state;

        const scrollerStyle = this.getScrollerStyle();

        return (
            <DragDropContext onDragStart={onTabButtonDragStart}
                             onDragEnd={onTabButtonDragEnd}>

                <div className={classNames('tabs', {
                    'auto-width': !isTabFullWidth,
                    [className]: className
                })}
                     style={style}>

                    <div ref={this.tabs}
                         className="tabs-scroller"
                         style={scrollerStyle}
                         onScroll={this.handleOnTabsScroll}>

                        <Droppable droppableId="droppable"
                                   direction="horizontal">
                            {
                                dropProvided => (
                                    <div className="tab-buttons-wrapper"
                                         ref={dropProvided.innerRef}
                                         {...dropProvided.droppableProps}>
                                        <div className="tab-buttons">

                                            {
                                                data?.map((item, index) => {

                                                    const {

                                                        style, value, renderer, tabButtonRenderer,

                                                        // not passing down these props
                                                        // eslint-disable-next-line no-unused-vars
                                                        tabContentRenderer, onActive,

                                                        ...restProps

                                                    } = item;
                                                    const activated = activatedIndex === index;

                                                    const tabButton = (
                                                        <TabButton {...restProps}
                                                                   key={idField && item[idField] || index}
                                                                   style={{
                                                                       ...style,
                                                                       width: isTabFullWidth ?
                                                                           `${100 / data.length}%`
                                                                           :
                                                                           'auto'
                                                                   }}
                                                                   data={item}
                                                                   value={value}
                                                                   index={index}
                                                                   isTabFullWidth={isTabFullWidth}
                                                                   activated={activated}
                                                                   draggable={draggable}
                                                                   renderer={
                                                                       renderer && typeof renderer === 'function' ?
                                                                           renderer.bind(null, value, activated)
                                                                           :
                                                                           renderer
                                                                   }
                                                                   onMouseDown={onTabMouseDown}
                                                                   onMouseUp={onTabMouseUp}
                                                                   onClick={onTabClick}/>
                                                    );

                                                    if (tabButtonRenderer) {
                                                        if (typeof tabButtonRenderer === 'function') {
                                                            return tabButtonRenderer(
                                                                value, activated, tabButton
                                                            );
                                                        }
                                                        return tabButtonRenderer;
                                                    }

                                                    return tabButton;

                                                }) || null
                                            }

                                            {dropProvided.placeholder}

                                        </div>
                                    </div>
                                )
                            }
                        </Droppable>

                        {
                            !isInkBarHidden ?
                                <div className="ink-bar"
                                     style={{
                                         bottom: scrollerStyle ? 0 : 20,
                                         width: inkBarWidth,
                                         transform: `translateX(${inkBarOffsetLeft}px)`
                                     }}/>
                                :
                                null
                        }

                        {children}

                    </div>

                    {
                        isTabsOverflow ?
                            <Fragment>
                                <IconButton ref={this.scrollLeftButton}
                                            className="tab-button tab-scroll-left-button"
                                            iconCls={scrollLeftIconCls}
                                            disabled={this.isScrollLeftButtonDisabled(scrollLeft)}
                                            onMouseDown={this.tabsScrollLeft}/>
                                <IconButton ref={this.scrollRightButton}
                                            className="tab-button tab-scroll-right-button"
                                            iconCls={scrollRightIconCls}
                                            disabled={this.isScrollRightButtonDisabled(scrollLeft)}
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
         * The render of tab button content.
         */
        renderer: PropTypes.any,

        /**
         * The render of tab button.
         */
        tabButtonRenderer: PropTypes.any,

        /**
         * The render content in tab.
         */
        tabContentRenderer: PropTypes.any,

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

    isInkBarHidden: PropTypes.bool,
    isTabsOverflow: PropTypes.bool,
    draggable: PropTypes.bool,

    idField: PropTypes.string,

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
    onTabButtonDragEnd: PropTypes.func,
    onScrollLeftButtonMouseDown: PropTypes.func,
    onScrollRightButtonMouseDown: PropTypes.func

};

Tabs.defaultProps = {

    data: [],

    activatedIndex: 0,
    isTabFullWidth: true,
    isInkBarHidden: false,
    draggable: false,

    scrollLeftIconCls: 'fas fa-chevron-left',
    scrollRightIconCls: 'fas fa-chevron-right',
    scrollStep: 100,
    scrollInterval: 100,
    keepScrollingWait: 250

};

export default Tabs;
