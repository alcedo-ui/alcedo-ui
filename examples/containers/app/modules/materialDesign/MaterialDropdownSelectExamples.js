import React, {Component} from 'react';


import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import PropTypeDescTable from '../PropTypeDescTable';
import MaterialDropdownSelect from 'src/MaterialDropdownSelect';
import MaterialDropdownSelectDoc from 'assets/propTypes/MaterialDropdownSelect.json';

import 'sass/containers/app/modules/materialDesign/MaterialDropdownSelectExamples.scss';

export default class MaterialDropdownSelectExamples extends Component {

    constructor(props) {
        super(props);

        this.data = ['test0', 'test1', {
            text: 'test2',
            value: 2,
            desc: 'Here is test2.',
            onTouchTap() {
                console.log('test2 selected!');
            }
        }, 'test3', 'test4', 'test5', {
            text: 'test6',
            value: 6,
            desc: 'Here is test6.',
            onTouchTap() {
                console.log('test6 selected!');
            }
        }, 'test7', 'test8', 'test9'];

    }

    onChangeHandle(value) {
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <div className="example tree-select-examples">

                <h2 className="examples-title">MaterialDropdownSelect</h2>

                <p>
                    <span>MaterialDropdownSelect</span> use to store operating elements. Click on the contact and a
                    drop-down menu will appear. You can select from the list and execute the appropriate command.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>MaterialDropdownSelect</code> simple example.</p>
                                <div className="field-group">
                                    <MaterialDropdownSelect label="label"
                                                            placeholder="placeholder"
                                                            data={this.data}
                                                            isLabelAnimate={true}/>
                                </div>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>MaterialDropdownSelect</code> simple example.</p>
                                <div className="field-group">
                                    <MaterialDropdownSelect label="label"
                                                            placeholder="placeholder"
                                                            data={this.data}
                                                            isLabelAnimate={false}/>
                                </div>
                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={MaterialDropdownSelectDoc}/>

            </div>

        );
    }
};