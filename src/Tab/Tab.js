/**
 * @file Tab component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import Tabs from '../_Tabs';

// Vendors
import classNames from 'classnames';
import ComponentUtil from '../_vendors/ComponentUtil';
import Util from '../_vendors/Util';
import Valid from '../_vendors/Valid';

class Tab extends Component {

    static getDerivedStateFromProps(props, state) {

        const tabs = ComponentUtil.getDerivedState(props, state, 'tabs');

        return {
            prevProps: props,
            tabs,
            activatedIndex: Valid.range(ComponentUtil.getDerivedState(props, state, 'activatedIndex'),
                0, tabs.length - 1)
        };

    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            tabs: props.tabs,
            activatedIndex: props.activatedIndex,
            isTabsOverflow: false
        };

    }

    getRenderer = item => {

        if (!item || !item.tabContentRenderer) {
            return null;
        }

        return typeof item.tabContentRenderer === 'function' ?
            item.tabContentRenderer(item)
            :
            item.tabContentRenderer;

    };

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

    handleTabsOverflowChange = isTabsOverflow => {
        this.setState({
            isTabsOverflow
        });
    };

    handleTabButtonDragEnd = result => {

        if (!result || !('draggableId' in result)
            || !result.source || !('index' in result.source)
            || !result.destination || !('index' in result.destination)) {
            return;
        }

        const {tabs} = this.state;
        Util.reorder(tabs, result.source.index, result.destination.index);

        const {activatedIndex} = this.state,
            state = {
                tabs
            };

        if (activatedIndex === result.source.index) {
            state.activatedIndex = result.destination.index;
        } else if (activatedIndex === result.destination.index) {
            state.activatedIndex = result.source.index;
        } else if (activatedIndex > result.source.index && activatedIndex < result.destination.index) {
            state.activatedIndex = activatedIndex - 1;
        } else if (activatedIndex < result.source.index && activatedIndex > result.destination.index) {
            state.activatedIndex = activatedIndex + 1;
        }

        this.setState(state, () => {
            const {onTabButtonDragEnd, onTabsSequenceChange} = this.props;
            onTabButtonDragEnd && onTabButtonDragEnd(result);
            onTabsSequenceChange && onTabsSequenceChange(tabs);
        });

    };

    render() {

        const {children, tabsChildren, className, style, isAnimated, ...restProps} = this.props,
            {tabs, activatedIndex, isTabsOverflow} = this.state,

            tabWidthPerCent = 100 / tabs.length;

        return (
            <div className={classNames('tab', {
                animated: isAnimated,
                'tabs-overflow': isTabsOverflow,
                [className]: className
            })}
                 style={style}>

                <Tabs {...restProps}
                      data={tabs}
                      activatedIndex={activatedIndex}
                      isTabsOverflow={isTabsOverflow}
                      onTabClick={this.handleTabClick}
                      onTabsOverflowChange={this.handleTabsOverflowChange}
                      onTabButtonDragEnd={this.handleTabButtonDragEnd}>
                    {tabsChildren}
                </Tabs>

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
     * If true,the tabs is FullWidth.
     */
    isTabFullWidth: PropTypes.bool,

    isInkBarHidden: PropTypes.bool,
    isAnimated: PropTypes.bool,
    draggable: PropTypes.bool,

    idField: PropTypes.string,

    scrollLeftIconCls: PropTypes.string,
    scrollRightIconCls: PropTypes.string,
    scrollStep: PropTypes.number,
    scrollInterval: PropTypes.number,
    keepScrollingWait: PropTypes.number,

    beforeIndexChange: PropTypes.func,
    onIndexChange: PropTypes.func,
    onTabClick: PropTypes.func,
    onTabMouseDown: PropTypes.func,
    onTabMouseUp: PropTypes.func,
    onTabButtonDragStart: PropTypes.func,
    onTabButtonDragEnd: PropTypes.func,
    onTabsSequenceChange: PropTypes.func,
    onScrollLeftButtonMouseDown: PropTypes.func,
    onScrollRightButtonMouseDown: PropTypes.func

};

Tab.defaultProps = {

    tabs: [],

    activatedIndex: 0,
    isTabFullWidth: true,
    isInkBarHidden: false,
    isAnimated: true,
    draggable: false,

    scrollLeftIconCls: 'fas fa-chevron-left',
    scrollRightIconCls: 'fas fa-chevron-right',
    scrollStep: 100,
    scrollInterval: 100,
    keepScrollingWait: 250

};

export default Tab;
