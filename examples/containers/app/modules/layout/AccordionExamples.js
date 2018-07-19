import React, {Component} from 'react';

import Paper from 'src/Paper';
import Accordion from 'src/Accordion';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Accordion.json';

import 'sass/containers/app/modules/layout/AccordionExamples.scss';

class AccordionExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example accordion-examples">

                <h2 className="example-title">Accordion</h2>

                <p>
                    <span>Accordion</span> is a folding list effect component.You can click title's row to show or hide
                    the drop-down list.
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
                                               collapseIcon="fas fa-arrow-circle-down">
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

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};

export default AccordionExamples;