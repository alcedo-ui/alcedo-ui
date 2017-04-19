import React, {Component} from 'react';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import IconButton from 'dist/IconButton';

import 'sass/containers/app/modules/layout/WidgetExamples.scss';

export default class WidgetExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example widget-examples">

                <h2 className="example-title">Widget</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Widget Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Widget>

                                    <WidgetHeader title="Title">
                                        <IconButton iconCls="fa fa-thumbs-up"/>
                                        <IconButton iconCls="fa fa-trash"/>
                                    </WidgetHeader>

                                    <div className="widget-content">
                                        content
                                    </div>

                                </Widget>

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
                                <td className="properties-name">depth</td>
                                <td className="properties-type">PropTypes.number</td>
                                <td>1</td>
                                <td>This number represents the zDepth of the root element shadow.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
};