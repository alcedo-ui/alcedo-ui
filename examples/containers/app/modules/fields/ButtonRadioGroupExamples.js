import React, {Component} from 'react';

import ButtonRadioGroup from 'src/ButtonRadioGroup';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import ButtonRadioGroupDoc from 'assets/propTypes/ButtonRadioGroup.json';

import 'sass/containers/app/modules/fields/ButtonCheckboxExamples.scss';

export default class ButtonRadioGroupExamples extends Component {

    constructor(props) {

        super(props);

        this.data = [{
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
            value: 4,
            disabled: true
        }, {
            label: 5,
            value: 5
        }];

        this.datas = [{
            label: 'one',
            value: 1
        }, {
            label: 2,
            value: 2
        }, {
            label: 'three',
            value: 3
        }, {
            label: 4,
            value: 4
        }, {
            label: 5,
            value: 5
        }];

        this.changeHandle = this::this.changeHandle;

    }

    changeHandle(value) {
        console.log(value);
    }

    render() {
        return (
            <div className="example button-radio-group-examples">


                <h2 className="example-title">ButtonRadioGroup</h2>

                <p>
                    <span>ButtonRadioGroup</span> is a radio group use button style.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Button Radio Group</code> simple example.</p>

                                <ButtonRadioGroup data={this.data}
                                                  onChange={this.changeHandle}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With value"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>value</code> property to activate one button.</p>

                                <ButtonRadioGroup data={this.data}
                                                  value={1}
                                                  onChange={this.changeHandle}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With disabled"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>disabled</code> property to true for disabling the ButtonRadioGroup.
                                </p>

                                <ButtonRadioGroup data={this.datas}
                                                  disabled={true}
                                                  onChange={this.changeHandle}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={ButtonRadioGroupDoc}/>

            </div>
        );
    }
};