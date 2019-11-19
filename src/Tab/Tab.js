/**
 * @file Tab component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FlatButton from '../FlatButton';
import IconButton from '../IconButton';

import Position from '../_statics/Position';

import ComponentUtil from '../_vendors/ComponentUtil';
import Event from '../_vendors/Event';

class Tab extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.tabs = createRef();
        this.tabsEl = null;

        this.tabsScrollTimeout = null;

        this.state = {
            activatedIndex: props.activatedIndex,
            isTabsOverflow: false
        };

    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            activatedIndex: ComponentUtil.getDerivedState(props, state, 'activatedIndex')
        };
    }

    handleTabClick = (item, activatedIndex, e) => {

        const {onTabClick} = this.props;
        onTabClick && onTabClick(item, activatedIndex, e);

        if (activatedIndex === this.state.activatedIndex) {
            return;
        }

        const {beforeIndexChange} = this.props;
        if (beforeIndexChange && beforeIndexChange(activatedIndex, item, e) === false) {
            return;
        }

        this.setState({
            activatedIndex
        }, () => {

            item.onActive && item.onActive(item, activatedIndex, e);

            const {onIndexChange} = this.props;
            onIndexChange && onIndexChange(activatedIndex, item, e);

        });

    };

    getRenderer = item => {

        if (!item || !item.renderer) {
            return null;
        }

        return typeof item.renderer === 'function' ?
            item.renderer(item)
            :
            item.renderer;

    };

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

    componentDidMount() {

        this.tabsEl = this.tabs && this.tabs.current;

        this.setState({
            isTabsOverflow: this.isTabsOverflow()
        });

        Event.addEvent(document, 'mouseup', this.clearTabsScrollTimeout);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const isTabsOverflow = this.isTabsOverflow();
        if (isTabsOverflow !== this.state.isTabsOverflow) {
            this.setState({
                isTabsOverflow
            });
        }
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mouseup', this.clearTabsScrollTimeout);
    }

    render() {

        const {
                children, tabsChildren, className, style, isTabFullWidth, tabs, isAnimated,
                scrollLeftIconCls, scrollRightIconCls,
                onTabMouseDown, onTabMouseUp
            } = this.props,
            {activatedIndex, isTabsOverflow} = this.state,

            tabWidthPerCent = 100 / tabs.length;

        return (
            <div className={classNames('tab', {
                animated: isAnimated,
                'tabs-overflow': isTabsOverflow,
                [className]: className
            })}
                 style={style}>

                <div className={classNames('tabs', {
                    'auto-width': !isTabFullWidth
                })}>

                    <div ref={this.tabs}
                         className="tabs-scroller">

                        {
                            tabs && tabs.map((item, index) => {

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
                                                onClick={e => this.handleTabClick(item, index, e)}/>
                                );

                            })
                        }

                        {tabsChildren}

                    </div>

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

                <div className="tab-content-wrapper">
                    {
                        isAnimated ?
                            <div className="tab-content-scroller"
                                 style={{
                                     width: `${tabs.length * 100}%`,
                                     transform: `translate(${-activatedIndex * tabWidthPerCent}%, 0)`
                                 }}>
                                {
                                    tabs && tabs.map((item, index) =>
                                        <div key={index}
                                             className="tab-content"
                                             style={{
                                                 width: `${tabWidthPerCent}%`
                                             }}>
                                            {this.getRenderer(item)}
                                        </div>
                                    )
                                }
                            </div>
                            :
                            <div className="tab-content">
                                {tabs && this.getRenderer(tabs[activatedIndex])}
                            </div>
                    }
                </div>

                {children}

            </div>
        );

    }
}

Tab.propTypes = {

    children: PropTypes.any,
    tabsChildren: PropTypes.any,

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
    tabs: PropTypes.arrayOf(PropTypes.shape({

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
     * If true,the tabs is FullWidth.
     */
    isTabFullWidth: PropTypes.bool,

    isAnimated: PropTypes.bool,

    scrollLeftIconCls: PropTypes.string,
    scrollRightIconCls: PropTypes.string,
    scrollStep: PropTypes.number,
    scrollInterval: PropTypes.number,
    keepScrollingWait: PropTypes.number,

    beforeIndexChange: PropTypes.func,
    onIndexChange: PropTypes.func,
    onTabClick: PropTypes.func,
    onTabMouseDown: PropTypes.func,
    onTabMouseUp: PropTypes.func

};

Tab.defaultProps = {

    tabs: [],

    activatedIndex: 0,
    isTabFullWidth: true,
    isAnimated: true,

    scrollLeftIconCls: 'fas fa-chevron-left',
    scrollRightIconCls: 'fas fa-chevron-right',
    scrollStep: 100,
    scrollInterval: 100,
    keepScrollingWait: 500

};

export default Tab;
