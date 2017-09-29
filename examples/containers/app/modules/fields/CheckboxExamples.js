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

        this.state = {
            checkboxGroupValue: []
        };

        this.data = [{
            id: 1,
            label: 'checkbox1',
            value: 1
        }, {
            id: 2,
            label: 'checkbox2',
            value: 2
        }, {
            id: 3,
            label: 'checkbox3',
            value: 3
        }, {
            id: 4,
            label: 'checkbox4',
            value: 4
        }, {
            id: 5,
            label: 'checkbox5',
            value: 5
        }];

        this.checkboxChangeHandler = ::this.checkboxChangeHandler;
        this.checkboxGroupChangeHandler = ::this.checkboxGroupChangeHandler;

    }

    checkboxChangeHandler(value) {
        this.setState({
            checkboxGroupValue: value ? [...this.data] : []
        });
    }

    checkboxGroupChangeHandler(checkboxGroupValue) {
        this.setState({
            checkboxGroupValue
        });
    }

    render() {

        const {checkboxGroupValue} = this.state;

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

                                <Checkbox label="All"
                                          value={checkboxGroupValue.length > 0}
                                          indeterminate={checkboxGroupValue.length != this.data.length}
                                          onChange={this.checkboxChangeHandler}/>

                                <CheckboxGroup data={this.data}
                                               value={checkboxGroupValue}
                                               onChange={this.checkboxGroupChangeHandler}/>

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