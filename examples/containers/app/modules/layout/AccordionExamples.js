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

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={AccordionDoc}/>

            </div>
        );
    }
};