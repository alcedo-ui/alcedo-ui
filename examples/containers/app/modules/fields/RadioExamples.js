import React, {Component} from 'react';

import Radio from 'dist/Radio';
import RadioGroup from 'dist/RadioGroup';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import DropdownSelectDoc from 'assets/propTypes/Radio.json';

import 'sass/containers/app/modules/fields/RadioExamples.scss';

export default class RadioExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example radio-examples">

                <h2 className="example-title">Radio</h2>

                <p>
                    <span>Radio</span> button is one of a set of mutually exclusive option buttons. When a button is
                    selected, the previously selected button becomes unselected.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Radio Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Radio simple default example.</p>

                                <Radio label="Licence"/>

                            </div>

                        </div>
                    </div>

                </Widget>


                <Widget>

                    <WidgetHeader className="example-header" title="Radio Disabled Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the disabled property to true to disable the radio button.</p>

                                <Radio label="Licence"
                                       disabled={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Radio Group Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Radio Group simple example.</p>

                                <RadioGroup data={[{
                                    label: 1,
                                    value: 1
                                }, {
                                    label: 2,
                                    value: 2
                                }, {
                                    label: 3,
                                    value: 3
                                }, {
                                    label: 4,
                                    value: 4
                                }, {
                                    label: 5,
                                    value: 5
                                }]}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Radio Group Disabled Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the disabled property to true to disable the radio group button.</p>

                                <RadioGroup data={[{
                                    label: 1,
                                    value: 1
                                }, {
                                    label: 2,
                                    value: 2
                                }, {
                                    label: 3,
                                    value: 3
                                }, {
                                    label: 4,
                                    value: 4
                                }, {
                                    label: 5,
                                    value: 5
                                }]}
                                            disabled={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DropdownSelectDoc}/>

            </div>
        );
    }
};