import React, {Component} from 'react';

import RadioGroup from 'dist/RadioGroup';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import RadioGroupDoc from 'assets/propTypes/RadioGroup.json';

export default class RadioGroupExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            radioValue: 'label1'
        };

        this.data = [{
            label: 'label1',
            value: 'label1'
        }, {
            label: 'label2',
            value: 'label2'
        }, {
            label: 'label3',
            value: 'label3'
        }, {
            label: 'label4',
            value: 'label4'
        }, {
            label: 'label5',
            value: 'label5'
        }];

        this.changeHandler = this::this.changeHandler;

    }

    changeHandler(value) {
        this.setState = ({
            radioValue: value
        });
    }


    render() {
        const {radioValue} = this.state;
        return (
            <div className="example radio-examples">

                <h2 className="example-title">RadioGroup</h2>

                <p>
                    <span>RadioGroup</span> is one of a set of mutually exclusive option groupButtons. When a button is
                    selected, the previously selected button becomes unselected.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>RadioGroup</code> simple example.</p>

                                <RadioGroup data={this.data}
                                            value={radioValue}
                                            onChange={this.changeHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With disabled"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>disabled</code> property to true to disable the radio group button.</p>

                                <RadioGroup data={this.data}
                                            value={'label2'}
                                            disabled={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={RadioGroupDoc}/>

            </div>
        );
    }
};