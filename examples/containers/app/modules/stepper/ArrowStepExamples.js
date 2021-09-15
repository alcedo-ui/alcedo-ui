/**
 * @file ArrowStep Examples
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';

// Components
import ArrowStep from 'src/ArrowStep';
import RaisedButton from 'src/RaisedButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

// Docs
import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/ArrowStep.json';

// Styles
import 'scss/containers/app/modules/stepper/ArrowStepExamples.scss';

export default class ArrowStepExamples extends Component {

    constructor(props) {

        super(props);

        this.steps = [{
            title: 'Step 1'
        }, {
            title: 'Step 2'
        }, {
            title: 'Step 3'
        }, {
            title: 'Step 4'
        }];

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

        const {activatedStep, finishedStep} = this.state;

        return (
            <div className="example arrow-step-examples">

                <h2 className="example-title">ArrowStep</h2>

                <p>
                    A <span>ArrowStep</span> is an interface for users to show numbered steps or for navigation. It just
                    provides views, not handling logic (when the step is active, or when the step is completed, or how
                    to move to the next step).
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple <code>ArrowStep</code> example.</p>

                            <ArrowStep className=""
                                       steps={this.steps}
                                       activatedStep={activatedStep}
                                       finishedStep={finishedStep}
                                       onChange={this.updateStep}/>

                            <div className="step-ctrls">

                                <RaisedButton value="Prev"
                                              iconCls="fas fa-angle-left"
                                              disabled={activatedStep <= 0}
                                              onClick={this.prev}/>

                                <RaisedButton value={activatedStep < this.steps.length - 1 ? 'Next' : 'Finish'}
                                              rightIconCls={
                                                  activatedStep < this.steps.length - 1 ?
                                                      'fas fa-angle-right'
                                                      :
                                                      ''
                                              }
                                              disabled={activatedStep >= this.steps.length}
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
                                  title="Width start and end triangle"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <ArrowStep steps={this.steps}
                                       activatedStep={activatedStep}
                                       finishedStep={finishedStep}
                                       isFirstStepLeftTriangleVisible={true}
                                       isLastStepRightTriangleVisible={true}
                                       onChange={this.updateStep}/>

                            <div className="step-ctrls">

                                <RaisedButton value="Prev"
                                              iconCls="fas fa-angle-left"
                                              disabled={activatedStep <= 0}
                                              onClick={this.prev}/>

                                <RaisedButton value={activatedStep < this.steps.length - 1 ? 'Next' : 'Finish'}
                                              rightIconCls={
                                                  activatedStep < this.steps.length - 1 ?
                                                      'fas fa-angle-right'
                                                      :
                                                      ''
                                              }
                                              disabled={activatedStep >= this.steps.length}
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
