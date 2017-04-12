import React, {Component, PropTypes, Children, createElement, cloneElement, isValidElement} from 'react';

import TabTemplate from '../_TabTemplate';

import './Tabs.css';

export default class Tabs extends Component {

    constructor(props) {

        super(props);

        this.state = {
            activeIndex: 0
        };

        this.getTabs = this::this.getTabs;
        this.getTabCount = this::this.getTabCount;
        this.tabClickHandle = this::this.tabClickHandle;

    }

    getTabs(props = this.props) {

        const tabs = [];

        Children.forEach(props.children, tab => {
            if (isValidElement(tab)) {
                tabs.push(tab);
            }
        });

        return tabs;

    }

    getTabCount() {
        return this.getTabs().length;
    }

    tabClickHandle(activeIndex) {
        this.setState({
            activeIndex
        });
    }

    render() {

        const {className, style} = this.props;
        const {activeIndex} = this.state;

        let tabContent = [];
        const tabCount = this.getTabCount(),
            tabWidthPercent = 100 / tabCount;

        const tabs = this.getTabs().map((tab, index) => {

            tabContent.push(
                createElement(TabTemplate, {
                    key: index,
                    activated: activeIndex == index,
                    width: `${tabWidthPercent}%`
                }, tab.props.children || null)
            );

            return cloneElement(tab, {
                key: index,
                index: index,
                activated: activeIndex == index,
                width: `${tabWidthPercent}%`,
                onClick: this.tabClickHandle
            });

        });

        const inkBarStyle = {
            width: `${tabWidthPercent}%`,
            left: `${activeIndex * tabWidthPercent}%`
        };

        const tabScrollerStyle = {
            width: `${tabCount * 100}%`,
            left: `-${activeIndex * 100}%`
        };

        return (
            <div className={`tabs ${className}`}
                 style={style}>

                <div className="tab-eader">
                    <div className="tab-buttons">
                        {tabs}
                    </div>
                    <div className="ink-bar"
                         style={inkBarStyle}></div>
                </div>

                <div className="tab-content-wrap">
                    <div className="tab-scroller"
                         style={tabScrollerStyle}>
                        {tabContent}
                    </div>
                </div>

            </div>
        );
    }
};

Tabs.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

Tabs.defaultProps = {
    className: '',
    style: null
};