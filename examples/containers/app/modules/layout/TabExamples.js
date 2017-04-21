import React, {Component} from 'react';

import Tab from 'dist/Tab';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import TabDoc from 'docs/Tab.json';

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
            <div className="example tab-example">

                <h2 className="example-title">Tabs</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Tabs Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

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

                    <WidgetHeader className="example-header" title="Full Width Tabs Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

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

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TabDoc}/>

            </div>
        );
    }
};