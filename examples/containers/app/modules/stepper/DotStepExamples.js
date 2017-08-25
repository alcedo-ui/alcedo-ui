/**
 * Created by DT314 on 2017/8/23.
 */
import React, {Component} from 'react';

import DotStep from 'dist/DotStep';
import RaisedButton from 'dist/RaisedButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import DotStepDoc from 'assets/propTypes/DotStep.json';

import 'sass/containers/app/modules/stepper/DotStepExamples.scss';

export default class DotStepExamples extends Component {
    constructor(props) {

        super(props);

        this.state = {
            activatedStep: 0,
            finishedStep: 0
        };

        this.updateStep = this::this.updateStep;
        this.prev = this::this.prev;
        this.next = this::this.next;
        this.reset = this::this.reset;
        this.setFinished = this::this.setFinished;

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

    setFinished(text) {
        return text;
    }

    render() {

        const {activatedStep, finishedStep} = this.state,
            steps = [{
                value: 'Step1',
                rightIconCls: 'fa fa-circle-o'
            }, {
                value: 'Step2',
                rightIconCls: 'fa fa-circle-o'
            }, {
                value: 'Step3',
                rightIconCls: 'fa fa-circle-o'
            }, {
                value: 'Step4',
                rightIconCls: 'fa fa-circle-o'
            }, {
                value: 'Step5',
                rightIconCls: 'fa fa-circle-o'
            }, {
                value: 'Step6',
                rightIconCls: 'fa fa-circle-o'
            }];

        steps.map((item, index) => {
            if (finishedStep >= index) {
                item.rightIconCls = 'fa fa-check-circle';
            }
            return item;
        });

        return (
            <div className="example dot-step-examples">

                <h2 className="example-title">ListStep</h2>

                <p>
                    A <span>stepper</span> is an interface for users to show numbered steps or for navigation. It just
                    provides
                    views, not handling logic (when the step is active, or when the step is completed, or how to move to
                    the next step).
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="DotStep Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple DotStep example.</p>

                            <DotStep steps={steps}
                                     displayField={'value'}
                                     activatedStep={activatedStep}
                                     finishedStep={finishedStep}
                                     finishedText={this.setFinished('finished')}
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

                                <RaisedButton value="Reset"
                                              iconCls="fa fa-undo"
                                              onTouchTap={this.reset}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DotStepDoc}/>

            </div>
        );
    }
};