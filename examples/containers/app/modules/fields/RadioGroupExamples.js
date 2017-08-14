import React, {Component} from 'react';

import RadioGroup from 'dist/RadioGroup';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import RadioGroupDoc from 'assets/propTypes/RadioGroup.json';

import 'sass/containers/app/modules/fields/RadioExamples.scss';

export default class RadioGroupExamples extends Component {

    constructor(props) {

        super(props);

        this.data = [{
            label: 'label1',
            value: 1
        }, {
            label: 'label2',
            value: 2
        }, {
            label: 'label3',
            value: 3
        }, {
            label: 'label4',
            value: 4
        }, {
            label: 'label5',
            value: 5
        }];

    }

    render() {
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

                                <RadioGroup data={this.data}/>

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