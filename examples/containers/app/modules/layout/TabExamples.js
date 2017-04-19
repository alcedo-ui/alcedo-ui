import React, {Component} from 'react';

import Tab from 'dist/Tab';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

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

                <div className="example-properties">
                    <h3>Properties</h3>
                    <table className="example-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="properties-name">className</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td></td>
                                <td>The css class name of the root element.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">style</td>
                                <td className="properties-type">PropTypes.object</td>
                                <td></td>
                                <td>The styles of the root element.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">isTabFullWidth</td>
                                <td className="properties-type">PropTypes.bool</td>
                                <td>true</td>
                                <td>Whether the tabs is FullWidth.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">tabs</td>
                                <td className="properties-type">PropTypes.array</td>
                                <td></td>
                                <td>Children passed into the TabsItem.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        );
    }
};