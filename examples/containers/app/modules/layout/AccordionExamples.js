import React, {Component} from 'react';

import Paper from 'dist/Paper';
import Accordion from 'dist/Accordion';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import AccordionDoc from 'assets/propTypes/Accordion.json';

import 'sass/containers/app/modules/layout/AccordionExamples.scss';

export default class AccordionExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example accordion-examples">

                <h2 className="example-title">Accordion</h2>

                <p>
                    <span>Accordion</span> will rotate to show the progress of a task or that there is a wait
                    for a task to complete.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Accordion Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Accordion simple example.
                                </p>

                                <Paper>
                                    <Accordion title="Title">
                                        <div className="accordion-example-content">
                                            content
                                        </div>
                                    </Accordion>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Accordion Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Set collapseIcon and expandIcon properties to show different icons.
                                </p>

                                <Paper>
                                    <Accordion title="Title"
                                               collapseIcon="fa fa-arrow-circle-up"
                                               expandIcon="fa fa-arrow-circle-down">
                                        <div className="accordion-example-content">
                                            content
                                        </div>
                                    </Accordion>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={AccordionDoc}/>

            </div>
        );
    }
};