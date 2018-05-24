import React, {Component} from 'react';

import PointStep from 'src/PointStep';
import RaisedButton from 'src/RaisedButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/PointStep.json';

import 'sass/containers/app/modules/stepper/PointStepExamples.scss';

export default class PointStepExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            activatedStep: 0,
            finishedStep: 0
        };

        this.updateStep = ::this.updateStep;
        this.prev = ::this.prev;
        this.next = ::this.next;
        this.reset = ::this.reset;

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

    reset() {
        this.setState({
            activatedStep: 0,
            finishedStep: 0
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
            <div className="example point-step-examples">

                <h2 className="example-title">PointStep</h2>

                <p>
                    A <span>PointStep</span> is an interface for users to show linear steps or for navigation.It
                    just provides views, not handling logic (when the step is active, or when the step is completed, or
                    how to move to the next step).
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="PointStep Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple <code>PointStep</code> example.</p>

                            <PointStep steps={steps}
                                       activatedStep={activatedStep}
                                       finishedStep={finishedStep}
                                       onChange={this.updateStep}/>

                            <div className="step-ctrls">

                                <RaisedButton value="Prev"
                                              iconCls="fas fa-angle-left"
                                              disabled={activatedStep <= 0}
                                              onClick={this.prev}/>

                                <RaisedButton value={activatedStep < steps.length - 1 ? 'Next' : 'Finish'}
                                              rightIconCls={activatedStep < steps.length - 1 ? 'fas fa-angle-right' : ''}
                                              disabled={activatedStep >= steps.length}
                                              onClick={this.next}/>

                                <RaisedButton value="Reset"
                                              iconCls="fas fa-undo"
                                              onClick={this.reset}/>

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