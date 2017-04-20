import React, {Component} from 'react';

import Paper from 'dist/Paper';
import Accordion from 'dist/Accordion';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import 'sass/containers/app/modules/layout/AccordionExamples.scss';

export default class AccordionExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example accordion-example">

                <h2 className="example-title">Accordion</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Accordion Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Paper>
                                    <Accordion title="Title">
                                        <div className="accordion-example-content">
                                            Content
                                        </div>
                                    </Accordion>
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
                                <td className="properties-type">PropTypes.object</td>
                                <td></td>
                                <td>The styles of the root element.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">title</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td>title</td>
                                <td>The Accordion's title.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">collapseIcon</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td>fa fa-angle-up</td>
                                <td>Collapse icon.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">expandIcon</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td>fa fa-angle-down</td>
                                <td>Expand icon.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">onCollpase</td>
                                <td className="properties-type">PropTypes.func</td>
                                <td></td>
                                <td>The function that trigger when collpase the accordion.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">onExpand</td>
                                <td className="properties-type">PropTypes.func</td>
                                <td></td>
                                <td>The function that trigger when expand the accordion.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">onChange</td>
                                <td className="properties-type">PropTypes.func</td>
                                <td></td>
                                <td>The function that trigger when change the status of accordion.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
};