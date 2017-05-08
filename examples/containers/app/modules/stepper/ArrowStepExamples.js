import React, {Component} from 'react';

import ArrowStep from 'dist/ArrowStep';
import RaisedButton from 'dist/RaisedButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import ArrowStepDoc from 'assets/propTypes/ArrowStep.json';

import 'sass/containers/app/modules/stepper/ArrowStepExamples.scss';

export default class ArrowStepExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            activatedStep: 0,
            finishedStep: 0
        };

        this.updateStep = this::this.updateStep;
        this.prev = this::this.prev;
        this.next = this::this.next;

    }

    updateStep(step) {
        this.setState({
            ...step
        });
    }

    prev() {
        this.setState({
            activatedStep: this.state.activatedStep - 1
        });
    }

    next() {

        const activatedStep = this.state.activatedStep + 1,
            finishedStep = this.state.finishedStep > activatedStep ? this.state.finishedStep : activatedStep;

        this.setState({
            activatedStep,
            finishedStep
        });

    }

    render() {

        const {activatedStep, finishedStep} = this.state,
            steps = [{
                title: 'Step 1'
            }, {
                title: 'Step 2'
            }, {
                title: 'Step 3'
            }, {
                title: 'Step 4'
            }];

        return (
            <div className="example arrow-step-examples">

                <h2 className="example-title">ArrowStep</h2>

                <p>
                    A <span>stepper</span> is an interface for users to show numbered steps or for navigation. It just provides
                    views, not handling logic (when the step is active, or when the step is completed, or how to move to
                    the next step).
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="ArrowStep Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple ArrowStep example.</p>

                            <ArrowStep steps={steps}
                                       activatedStep={activatedStep}
                                       finishedStep={finishedStep}
                                       onChange={this.updateStep}/>

                            <div className="step-ctrls">

                                <RaisedButton value="Prev"
                                              iconCls="fa fa-angle-left"
                                              disabled={activatedStep <= 0}
                                              onTouchTap={this.prev}/>

                                <RaisedButton value={activatedStep < steps.length - 1 ? 'Next' : 'Finish'}
                                              rightIconCls={activatedStep < steps.length - 1 ? 'fa fa-angle-right' : ''}
                                              disabled={activatedStep >= steps.length}
                                              onTouchTap={this.next}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={ArrowStepDoc}/>

            </div>
        );
    }
};