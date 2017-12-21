import React, {Component} from 'react';

import Checkbox from 'src/Checkbox';
import CheckboxGroup from 'src/CheckboxGroup';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Theme from 'src/Theme';

import PropTypeDescTable from '../../../../components/PropTypeDescTable';
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

                                <Checkbox theme={Theme.HIGHLIGHT}
                                          label="All"
                                          checked={checkboxGroupValue.length === this.data.length}
                                          indeterminate={checkboxGroupValue.length > 0
                                          && checkboxGroupValue.length < this.data.length}
                                          onChange={this.checkboxChangeHandler}/>

                                <CheckboxGroup theme={Theme.HIGHLIGHT}
                                               data={this.data}
                                               value={checkboxGroupValue}
                                               onChange={this.checkboxGroupChangeHandler}/>

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

                                <Checkbox theme={Theme.HIGHLIGHT}
                                          label="Self Defined Icon"
                                          uncheckedIconCls="fa fa-window-close-o"
                                          checkedIconCls="fa fa-window-close"/>

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