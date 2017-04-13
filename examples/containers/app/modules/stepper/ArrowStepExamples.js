import React, {Component} from 'react';

import ArrowStep from 'dist/ArrowStep';
import RaisedButton from 'dist/RaisedButton';

import 'sass/containers/app/modules/stepper/ArrowStepExamples.scss';

export default class ArrowStepExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            step: 0
        };

        this.prev = this::this.prev;
        this.next = this::this.next;

    }

    prev() {
        this.setState({
            step: this.state.step - 1
        });
    }

    next() {
        this.setState({
            step: this.state.step + 1
        });
    }

    render() {

        const {step} = this.state,
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
                                   activatedStep={step}/>

                        <div className="step-ctrls">
                            <RaisedButton value="Prev"
                                          iconCls="fa fa-angle-left"
                                          disabled={step <= 0}
                                          onTouchTap={this.prev}/>
                            <RaisedButton value={step < steps.length - 1 ? 'Next' : 'Finish'}
                                          rightIconCls={step < steps.length - 1 ? 'fa fa-angle-right' : ''}
                                          disabled={step >= steps.length}
                                          onTouchTap={this.next}/>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
};