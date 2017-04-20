import React, {Component} from 'react';

import Paper from 'dist/Paper';
import List from 'dist/List';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import 'sass/containers/app/modules/layout/ListExamples.scss';

export default class ListExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example list-example">

                <h2 className="example-title">List</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="List Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Paper>
                                    <List items={[{
                                        iconCls: 'fa fa-facebook',
                                        value: 'Facebook'
                                    }, {
                                        iconCls: 'fa fa-twitter',
                                        value: 'Twitter'
                                    }, {
                                        iconCls: 'fa fa-google-plus',
                                        value: 'Google+'
                                    }]}/>
                                </Paper>

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
                                <td className="properties-type">PropTypes.array</td>
                                <td></td>
                                <td>The styles of the root element.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">items</td>
                                <td className="properties-type">PropTypes.array</td>
                                <td></td>
                                <td>Children passed into the ListItem.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
};