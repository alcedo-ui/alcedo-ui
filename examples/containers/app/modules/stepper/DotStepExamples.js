import React, {Component} from 'react';

import DotStep from 'src/DotStep';
import RaisedButton from 'src/RaisedButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/DotStep.json';

import 'sass/containers/app/modules/stepper/DotStepExamples.scss';

class DotStepExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            activatedStep: 0,
            finishedStep: 0
        };

    }

    updateStep = step => {
        this.setState({
            ...step
        });
    };

    prev = () => {
        this.setState({
            activatedStep: this.state.activatedStep - 1
        });
    };

    next = () => {

        const activatedStep = this.state.activatedStep + 1,
            finishedStep = this.state.finishedStep > activatedStep ? this.state.finishedStep : activatedStep;

        this.setState({
            activatedStep,
            finishedStep
        });

    };

    reset = () => {
        this.setState({
            activatedStep: 0,
            finishedStep: 0
        });
    };

    setFinished = text => {
        return text;
    };

    render() {

        const {activatedStep, finishedStep} = this.state,
            steps = [{
                value: 'Step1',
                rightIconCls: 'far fa-circle'
            }, {
                value: 'Step2',
                rightIconCls: 'far fa-circle'
            }, {
                value: 'Step3',
                rightIconCls: 'far fa-circle'
            }, {
                value: 'Step4',
                rightIconCls: 'far fa-circle'
            }, {
                value: 'Step5',
                rightIconCls: 'far fa-circle'
            }, {
                value: 'Step6',
                rightIconCls: 'far fa-circle'
            }];

        steps.map((item, index) => {
            if (finishedStep >= index) {
                item.rightIconCls = 'fas fa-check-circle';
            }
            return item;
        });

        return (
            <div className="example dot-step-examples">

                <h2 className="example-title">DotStep</h2>

                <p>
                    A <span>DotStep</span> is an interface for users to show dot steps or for navigation. It just
                    provides views, not handling logic (when the step is active, or when the step is completed, or
                    how to move to the next step).
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="DotStep Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple <code>DotStep</code> example.</p>

                            <DotStep steps={steps}
                                     displayField={'value'}
                                     activatedStep={activatedStep}
                                     finishedStep={finishedStep}
                                     finishedText={this.setFinished('finished')}
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

export default DotStepExamples;