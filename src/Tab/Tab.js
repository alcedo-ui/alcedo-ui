/**
 * @file Tab component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tabs from '../_Tabs';

import ComponentUtil from '../_vendors/ComponentUtil';
import Util from '../_vendors/Util';

class Tab extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            tabs: props.tabs,
            activatedIndex: props.activatedIndex,
            isTabsOverflow: false
        };

    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            tabs: ComponentUtil.getDerivedState(props, state, 'tabs'),
            activatedIndex: ComponentUtil.getDerivedState(props, state, 'activatedIndex')
        };
    }

    getRenderer = item => {

        if (!item || !item.renderer) {
            return null;
        }

        return typeof item.renderer === 'function' ?
            item.renderer(item)
            :
            item.renderer;

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

        const {children, tabsChildren, className, style, isAnimated} = this.props,
            {tabs, activatedIndex, isTabsOverflow} = this.state,

            tabWidthPerCent = 100 / tabs.length;

        return (
            <div className={classNames('tab', {
                animated: isAnimated,
                'tabs-overflow': isTabsOverflow,
                [className]: className
            })}
                 style={style}>

                <Tabs {...this.props}
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
    draggable: PropTypes.bool,

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
    onTabsSequenceChange: PropTypes.func

};

Tab.defaultProps = {

    tabs: [],

    activatedIndex: 0,
    isTabFullWidth: true,
    isAnimated: true,
    draggable: false,

    scrollLeftIconCls: 'fas fa-chevron-left',
    scrollRightIconCls: 'fas fa-chevron-right',
    scrollStep: 100,
    scrollInterval: 100,
    keepScrollingWait: 250

};

export default Tab;
