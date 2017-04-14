import React, {Component} from 'react';

import ArrowStep from 'dist/ArrowStep';
import RaisedButton from 'dist/RaisedButton';

import 'sass/containers/app/modules/stepper/ArrowStepExamples.scss';

export default class ArrowStepExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            activatedStep: 0,
            finishedStep: 0
        };

        this.prev = this::this.prev;
        this.next = this::this.next;

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

                <div className="examples">
                    <div className="examples-title">ArrowStep</div>
                    <div className="examples-wrapper">

                        <ArrowStep steps={steps}
                                   activatedStep={activatedStep}
                                   finishedStep={finishedStep}/>

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

            </div>
        );
    }
};