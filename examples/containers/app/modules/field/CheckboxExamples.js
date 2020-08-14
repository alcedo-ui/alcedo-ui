/**
 * @file CheckboxExamples.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';

// Components
import Checkbox from 'src/Checkbox';
import CheckboxGroup from 'src/CheckboxGroup';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

// Docs
import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Checkbox.json';

class CheckboxExamples extends Component {

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

    }

    handleCheck = item => {
        if (item) {
            console.log('checked', item);
        } else {
            console.log('checked');
        }
    };

    handleUncheck = item => {
        if (item) {
            console.log('unchecked', item);
        } else {
            console.log('unchecked');
        }
    };

    handleChange = value => {
        this.setState({
            checkboxGroupValue: value ? [...this.data] : []
        });
    };

    handleGroupChange = checkboxGroupValue => {
        this.setState({
            checkboxGroupValue
        });
    };

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

                                <Checkbox label="Licence"
                                          onCheck={this.handleCheck}
                                          onUncheck={this.handleUncheck}/>

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

                                <Checkbox theme={Checkbox.Theme.HIGHLIGHT}
                                          label="All"
                                          checked={checkboxGroupValue.length === this.data.length}
                                          indeterminate={checkboxGroupValue.length > 0
                                          && checkboxGroupValue.length < this.data.length}
                                          onChange={this.handleChange}/>

                                <CheckboxGroup theme={CheckboxGroup.Theme.HIGHLIGHT}
                                               data={this.data}
                                               value={checkboxGroupValue}
                                               onChange={this.handleGroupChange}
                                               onCheck={this.handleCheck}
                                               onUncheck={this.handleUncheck}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Self Defined Icon"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Checkbox theme={Checkbox.Theme.HIGHLIGHT}
                                          label="Self Defined Icon"
                                          uncheckedIconCls="far fa-window-close"
                                          checkedIconCls="fas fa-window-close"/>

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

export default CheckboxExamples;
