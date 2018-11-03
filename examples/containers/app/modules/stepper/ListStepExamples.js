import React, {Component} from 'react';

import ListStep from 'src/ListStep';
import RaisedButton from 'src/RaisedButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/ListStep.json';

import 'assets/scss/containers/app/modules/stepper/ListStepExamples.scss';

class ListStepExamples extends Component {

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
                value: 'Basic',
                rightIconCls: 'far fa-circle'
            }, {
                value: 'Accounts',
                rightIconCls: 'far fa-circle'
            }, {
                value: 'Hotels',
                rightIconCls: 'far fa-circle'
            }, {
                value: 'Sample Files',
                rightIconCls: 'far fa-circle'
            }, {
                value: 'SFTP',
                rightIconCls: 'far fa-circle'
            }, {
                value: 'Confirm',
                rightIconCls: 'far fa-circle'
            }];

        steps.map((item, index) => {
            if (finishedStep >= index) {
                item.rightIconCls = 'fas fa-check-circle';
            }
            return item;
        });

        return (
            <div className="example list-step-examples">

                <h2 className="example-title">ListStep</h2>

                <p>
                    A <span>ListStep</span> is an interface for users to show list numbered steps or for navigation. It
                    just provides views, not handling logic (when the step is active, or when the step is completed, or
                    how to move to the next step).
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="ListStep Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple <code>ListStep</code> example.</p>

                            <ListStep steps={steps}
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

export default ListStepExamples;
