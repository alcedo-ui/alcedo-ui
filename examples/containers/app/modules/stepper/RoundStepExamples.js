/**
 * @file RoundStep examples
 */

import React, {Component} from 'react';

import RoundStep from 'src/RoundStep';
import RaisedButton from 'src/RaisedButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/RoundStep.json';

import 'scss/containers/app/modules/stepper/RoundStepExamples.scss';

class RoundStepExamples extends Component {

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

    render() {

        const {activatedStep, finishedStep} = this.state,
            steps = [{
                title: 'Step 1',
                iconCls: 'fas fa-map-marker-alt'
            }, {
                title: 'Step 2'
            }, {
                title: 'Step 3'
            }, {
                title: 'Step 4'
            }];

        return (
            <div className="example round-step-examples">

                <h2 className="example-title">RoundStep</h2>

                <p>
                    A <span>RoundStep</span> is an interface for users to show linear steps or for navigation.It
                    just provides views, not handling logic (when the step is active, or when the step is completed, or
                    how to move to the next step).
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="RoundStep Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <RoundStep steps={steps}
                                       activatedStep={activatedStep}
                                       finishedStep={finishedStep}
                                       onChange={this.updateStep}/>

                            <div className="step-ctrls">

                                <RaisedButton value="Prev"
                                              iconCls="fas fa-angle-left"
                                              disabled={activatedStep <= 0}
                                              onClick={this.prev}/>

                                <RaisedButton value={activatedStep < steps.length - 1 ? 'Next' : 'Finish'}
                                              rightIconCls={activatedStep < steps.length - 1 ? 'fas fa-angle-right' :
                                                  ''}
                                              disabled={activatedStep >= steps.length}
                                              onClick={this.next}/>

                                <RaisedButton value="Reset"
                                              iconCls="fas fa-undo"
                                              onClick={this.reset}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Title Position"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <RoundStep steps={steps}
                                       activatedStep={activatedStep}
                                       finishedStep={finishedStep}
                                       titlePosition={RoundStep.TitlePosition.TOP}
                                       onChange={this.updateStep}/>

                            <div className="step-ctrls">

                                <RaisedButton value="Prev"
                                              iconCls="fas fa-angle-left"
                                              disabled={activatedStep <= 0}
                                              onClick={this.prev}/>

                                <RaisedButton value={activatedStep < steps.length - 1 ? 'Next' : 'Finish'}
                                              rightIconCls={activatedStep < steps.length - 1 ? 'fas fa-angle-right' :
                                                  ''}
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
}

export default RoundStepExamples;
