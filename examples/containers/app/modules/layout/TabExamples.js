import React, {Component} from 'react';

import Tab from 'dist/Tab';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import TabDoc from 'assets/propTypes/Tab.json';

import 'sass/containers/app/modules/layout/TabExamples.scss';

export default class TabExamples extends Component {

    constructor(props) {

        super(props);

        this.activeHandle = this::this.activeHandle;

    }

    activeHandle(tab) {
        alert(`${tab.value} activated.`);
    }

    render() {
        return (
            <div className="example tab-examples">

                <h2 className="example-title">Tabs</h2>

                <p>
                    <span>Tabs</span> make it easy to explore and switch between different views or functional aspects
                    of an app or to browse categorized data sets.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Full Width Tabs Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A simple example of Tabs. The third tab demonstrates the onActive property of Tab.
                                </p>

                                <Tab tabs={[{
                                    value: 'Tab 1',
                                    renderer: <div>
                                        <h1>Tab 1</h1>
                                    </div>
                                }, {
                                    value: 'Tab 2',
                                    renderer: <div>
                                        <h1>Tab 2</h1>
                                    </div>
                                }, {
                                    value: 'onActive',
                                    renderer: <div>
                                        <h1>onActive</h1>
                                    </div>,
                                    onActive: this.activeHandle
                                }, {
                                    value: 'Disabled',
                                    disabled: true
                                }]}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Tabs Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Tabs use full container width by default.Set the isTabFullWidth property to false
                                    for partial width.
                                </p>

                                <Tab tabs={[{
                                    value: 'Tab 1',
                                    renderer: <div>
                                        <h1>Tab 1</h1>
                                    </div>
                                }, {
                                    value: 'Tab 2',
                                    renderer: <div>
                                        <h1>Tab 2</h1>
                                    </div>
                                }, {
                                    value: 'onActive',
                                    renderer: <div>
                                        <h1>onActive</h1>
                                    </div>,
                                    onActive: this.activeHandle
                                }, {
                                    value: 'Disabled',
                                    disabled: true
                                }]}
                                     isTabFullWidth={false}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Tabs Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Tabs without icons by default.Set the iconCls property for left icons.
                                </p>

                                <Tab tabs={[{
                                    value: 'Bicycle',
                                    iconCls: 'fa fa-bicycle',
                                    renderer: <div>
                                        <h1>Bicycle</h1>
                                    </div>
                                }, {
                                    value: 'Taxi',
                                    iconCls: 'fa fa-taxi',
                                    renderer: <div>
                                        <h1>Taxi</h1>
                                    </div>
                                }, {
                                    value: 'Plane',
                                    iconCls: 'fa fa-plane',
                                    renderer: <div>
                                        <h1>Plane</h1>
                                    </div>
                                }, {
                                    value: 'Rocket',
                                    iconCls: 'fa fa-rocket',
                                    renderer: <div>
                                        <h1>Rocket</h1>
                                    </div>
                                }]}
                                     isTabFullWidth={false}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TabDoc}/>

            </div>
        );
    }
};