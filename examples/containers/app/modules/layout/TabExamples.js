/**
 * @file TabExamples.js
 */

import React, {Component} from 'react';

// Components
import Tab from 'src/Tab';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Toaster from 'src/Toaster';
import IconButton from 'src/IconButton';
import RaisedButton from 'src/RaisedButton';
import PropTypeDescTable from 'components/PropTypeDescTable';


// Statics
import doc from 'assets/propTypes/Tab.json';

// Styles
import 'scss/containers/app/modules/layout/TabExamples.scss';

class TabExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            tabs: [{
                value: 'Tab 1',
                tabContentRenderer: <h1>Tab 1</h1>
            }, {
                value: 'Tab 2',
                tabContentRenderer: <h1>Tab 2</h1>
            }, {
                value: 'Tab 3',
                tabContentRenderer: <h1>onActive</h1>,
                onActive: this.activeHandler
            }, {
                value: 'Tab 4',
                disabled: true
            }],
            longTabs: this.generateTabs(20),
            toasts: [],
            extraContentWidth: 200
        };

    }

    activeHandler = tab => {

        const {toasts} = this.state;

        toasts.push({
            type: Toaster.Type.INFO,
            message: `${tab.value} Activated`
        });

        this.setState({
            toasts
        });

    };

    toastPopHandler = () => {
        this.setState({
            toasts: []
        });
    };

    handleAddTab = () => {

        const {tabs} = this.state,
            index = tabs.length + 1;

        tabs.push({
            value: `Tab ${index}`,
            tabContentRenderer: <h1>Tab {index}</h1>
        });

        this.setState({
            tabs
        });

    };

    handleRemoveTab = () => {
        const {tabs} = this.state;
        tabs.pop();
        this.setState({
            tabs
        });
    };

    generateTabs = length => {
        return Array.from({length}, (item, index) => ({
            id: index + 1,
            value: `Tab ${index + 1}`,
            tabContentRenderer: <h1>Tab {index + 1}</h1>
        }));
    };

    addTab = () => {

        const {longTabs} = this.state,
            index = longTabs.length + 1;

        longTabs.push({
            id: index,
            value: `Tab ${index}`,
            tabContentRenderer: <h1>Tab {index}</h1>
        });

        this.setState({
            longTabs
        });

    };

    handleScrollLeftButtonMouseDown = () => {
        console.log('scroll left button mouse down');
    };

    handleScrollRightButtonMouseDown = () => {
        console.log('scroll right button mouse down');
    };

    handleIndexChange = index => {
        console.log(`Index: ${index} activated`);
    };

    randomExtraContentWidth = () => {
        this.setState({
            extraContentWidth: Math.random() * 400 + 100
        });
    };

    render() {

        const {tabs, longTabs, toasts, extraContentWidth} = this.state;

        return (
            <div className="example tab-examples">

                <h2 className="example-title">Tabs</h2>

                <p>
                    <span>Tabs</span>
                    make it easy to explore and switch between different views or functional aspects
                    of an app or to browse categorized data sets.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Full Width Tabs"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A simple example of Tabs. The third tab demonstrates the onActive property of Tab.
                                </p>

                                <div className="toolbar">
                                    <IconButton iconCls="fas fa-plus"
                                                onClick={this.handleAddTab}/>
                                    <IconButton iconCls="fas fa-minus"
                                                onClick={this.handleRemoveTab}/>
                                </div>

                                <Tab tabs={tabs}
                                     activatedIndex={1}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Scroll Tabs"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Tabs use full container width by default.Set the isTabFullWidth property to false
                                    for partial width.
                                </p>

                                <div className="tab-examples-scroll-tabs-wrapper">
                                    <Tab tabs={longTabs}
                                         isTabFullWidth={false}
                                         isAnimated={false}
                                         draggable={true}
                                         idField="id"
                                         tabsChildren={
                                             <IconButton className="tab-button customized-tab-button"
                                                         iconCls="fas fa-plus"
                                                         onClick={this.addTab}/>
                                         }
                                         onScrollLeftButtonMouseDown={this.handleScrollLeftButtonMouseDown}
                                         onScrollRightButtonMouseDown={this.handleScrollRightButtonMouseDown}
                                         onIndexChange={this.handleIndexChange}/>
                                    <div style={{width: extraContentWidth}}>
                                        Extra Content
                                        <RaisedButton value="Random-width"
                                                      onClick={this.randomExtraContentWidth}/>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With icons"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Tabs without icons by default.Set the iconCls property for left icons.
                                </p>

                                <Tab tabs={[{
                                    value: 'Bicycle',
                                    iconCls: 'fas fa-bicycle',
                                    tabContentRenderer: <h1>Bicycle</h1>
                                }, {
                                    value: 'Taxi',
                                    iconCls: 'fas fa-taxi',
                                    tabContentRenderer: <h1>Taxi</h1>
                                }, {
                                    value: 'Plane',
                                    iconCls: 'fas fa-plane',
                                    tabContentRenderer: <h1>Plane</h1>
                                }, {
                                    value: 'Rocket',
                                    iconCls: 'fas fa-rocket',
                                    tabContentRenderer: <h1>Rocket</h1>
                                }]}
                                     isTabFullWidth={false}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Draggable"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Tabs without icons by default.Set the iconCls property for left icons.
                                </p>

                                <Tab tabs={[{
                                    value: 'Bicycle',
                                    iconCls: 'fas fa-bicycle',
                                    tabContentRenderer: <h1>Bicycle</h1>
                                }, {
                                    value: 'Taxi',
                                    iconCls: 'fas fa-taxi',
                                    tabContentRenderer: <h1>Taxi</h1>
                                }, {
                                    value: 'Plane',
                                    iconCls: 'fas fa-plane',
                                    tabContentRenderer: <h1>Plane</h1>
                                }, {
                                    value: 'Rocket',
                                    iconCls: 'fas fa-rocket',
                                    tabContentRenderer: <h1>Rocket</h1>
                                }]}
                                     isTabFullWidth={false}
                                     isAnimated={false}
                                     draggable={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Toaster toasts={toasts}
                         onToastPop={this.toastPopHandler}/>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
}

export default TabExamples;
