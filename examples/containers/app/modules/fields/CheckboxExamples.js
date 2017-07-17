import React, {Component} from 'react';

import Checkbox from 'dist/Checkbox';
import CheckboxGroup from 'dist/CheckboxGroup';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import CheckboxDoc from 'assets/propTypes/Checkbox.json';

import 'sass/containers/app/modules/fields/CheckboxExamples.scss';

export default class CheckboxExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example checkbox-examples">

                <h2 className="example-title">Checkbox</h2>

                <p>
                    A <span>Checkbox</span> is a control that can be selected multiple times at the same time.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Checkbox</code> simple example.</p>

                                <Checkbox label="Licence"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With disabled"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>disabled</code> property to true to disable the checkbox.</p>

                                <Checkbox label="Licence"
                                          disabled={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="CheckboxGroup"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>CheckboxGroup simple example.</p>

                                <CheckboxGroup data={[{
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

                    <WidgetHeader className="example-header"
                                  title="Checkbox Group Disabled Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>disabled</code> property to true to disable the CheckboxGroup.</p>

                                <CheckboxGroup data={[{
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

                <PropTypeDescTable data={CheckboxDoc}/>

            </div>
        );
    }
};