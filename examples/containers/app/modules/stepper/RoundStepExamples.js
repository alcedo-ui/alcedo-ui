import React, {Component} from 'react';

import RoundStep from 'dist/RoundStep';
import RaisedButton from 'dist/RaisedButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import 'sass/containers/app/modules/stepper/RoundStepExamples.scss';

export default class RoundStepExamples extends Component {

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
            <div className="example round-step-examples">

                <h2 className="example-title">RoundStep</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="RoundStep Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <RoundStep steps={steps}
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

                <div className="example-properties">
                    <h3>Properties</h3>
                    <table className="example-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="properties-name">className</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td></td>
                                <td>The css class name of the root element.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">style</td>
                                <td className="properties-type">PropTypes.object</td>
                                <td></td>
                                <td>The styles of the root element.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">steps</td>
                                <td className="properties-type">PropTypes.array</td>
                                <td></td>
                                <td>The total steps.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">activatedStep</td>
                                <td className="properties-type">PropTypes.number</td>
                                <td>0</td>
                                <td>Sets the step as active.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">finishedStep</td>
                                <td className="properties-type">PropTypes.number</td>
                                <td>0</td>
                                <td>Sets the step as completed.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">onChange</td>
                                <td className="properties-type">PropTypes.func</td>
                                <td></td>
                                <td>The function that trigger when step changes.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        );
    }
};