import React, {Component} from 'react';

import Paper from 'dist/Paper';
import Accordion from 'dist/Accordion';

import 'sass/containers/app/modules/layout/AccordionExamples.scss';

export default class AccordionExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example accordion-examples">

                <div className="examples">
                    <div className="examples-title">Accordion</div>
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
        );
    }
};