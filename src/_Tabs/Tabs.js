/**
 * @file Tabs component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import IconButton from '../IconButton';
import TabsButton from '../_TabButton';

// Statics
import Position from '../_statics/Position';
import Direction from '../_statics/Direction';

// Vendors
import classNames from 'classnames';
import Event from '../_vendors/Event';
import ScrollBar from '../_vendors/ScrollBar';

class Tabs extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.tabs = createRef();
        this.tabsEl = null;
        this.scrollLeftButton = createRef();
        this.scrollRightButton = createRef();

        this.tabsScrollTimeout = null;

        this.state = {
            scrollLeft: 0
        };

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
            marginBottom: -horizontalScrollBarSize,
            paddingBottom: 0
        };

    };

    getInkBarStyle = () => {

        if (!this.tabsEl) {
            return null;
        }

        const tabs = this.tabsEl.querySelectorAll('.tab-buttons .tab-button');

        if (!tabs || tabs.length < 1) {
            return null;
        }

        const {activatedIndex} = this.props,
            activatedtab = tabs[activatedIndex];

        return activatedtab ? {
                width: activatedtab.offsetWidth,
                left: activatedtab.offsetLeft
            }
            :
            null;
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
        this.tabsScrollTimeout = setTimeout(() => {
            this.handleTabsScroll(direction, true);
        }, keepScrolling === true ? scrollInterval : keepScrollingWait);

    };

    tabsScrollLeft = e => {

        this.handleTabsScroll(Position.LEFT);

        const {onScrollLeftButtonMouseDown} = this.props;
        onScrollLeftButtonMouseDown && onScrollLeftButtonMouseDown(e);

    };

    tabsScrollRight = e => {

        this.handleTabsScroll(Position.RIGHT);

        const {onScrollRightButtonMouseDown} = this.props;
        onScrollRightButtonMouseDown && onScrollRightButtonMouseDown(e);

    };

    clearTabsScrollTimeout = () => {
        this.tabsScrollTimeout && clearTimeout(this.tabsScrollTimeout);
    };

    handleTabsOverflowChange = () => {

        const {isTabsOverflow, onTabsOverflowChange} = this.props,
            current = this.isTabsOverflow();

        if (current !== isTabsOverflow) {

            if (current && this.tabsEl) {
                this.setState({
                    scrollLeft: this.tabsEl.scrollLeft
                });
            }

            onTabsOverflowChange && onTabsOverflowChange(!isTabsOverflow);

        }

    };

    componentDidMount() {

        this.tabsEl = this.tabs && this.tabs.current;

        Event.addEvent(window, 'resize', this.handleTabsOverflowChange);
        Event.addEvent(document, 'mouseup', this.clearTabsScrollTimeout);

        this.handleTabsOverflowChange();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.handleTabsOverflowChange();
    }

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.handleTabsOverflowChange);
        Event.removeEvent(document, 'mouseup', this.clearTabsScrollTimeout);
    }

    render() {

        const {
                children, className, style, isTabFullWidth, isInkBarHidden,
                data, activatedIndex, isTabsOverflow, draggable, idProp,
                scrollLeftIconCls, scrollRightIconCls,
                onTabMouseDown, onTabMouseUp, onTabClick, onTabButtonDragStart, onTabButtonDragEnd
            } = this.props,
            {scrollLeft} = this.state,

            scrollerStyle = this.getScrollerStyle(),
            inkBarStyle = this.getInkBarStyle();

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
                                                data && data.map((item, index) => {

                                                    const {

                                                        // not passing down these props
                                                        tabContentRenderer, onActive,

                                                        ...restProps

                                                    } = item;

                                                    return (
                                                        <TabsButton {...restProps}
                                                                    key={idProp && item[idProp] || index}
                                                                    style={{width: isTabFullWidth ? `${100 / data.length}%` : 'auto'}}
                                                                    data={item}
                                                                    index={index}
                                                                    isTabFullWidth={isTabFullWidth}
                                                                    activated={activatedIndex === index}
                                                                    draggable={draggable}
                                                                    onMouseDown={onTabMouseDown}
                                                                    onMouseUp={onTabMouseUp}
                                                                    onClick={onTabClick}/>
                                                    );

                                                })
                                            }

                                            {dropProvided.placeholder}

                                        </div>
                                    </div>
                                )
                            }
                        </Droppable>

                        {
                            !isInkBarHidden && inkBarStyle ?
                                <div className="ink-bar"
                                     style={{
                                         bottom: scrollerStyle ? 0 : 20,
                                         width: inkBarStyle.width,
                                         transform: `translate(${inkBarStyle.left}px, 0)`
                                     }}></div>
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
         * The render of tab button.
         */
        renderer: PropTypes.any,

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

    idProp: PropTypes.string,

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
