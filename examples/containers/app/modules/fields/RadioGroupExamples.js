import React, {Component} from 'react';

import Radio from 'src/Radio';
import RadioGroup from 'src/RadioGroup';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Theme from 'src/Theme';

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

    changeHandler(radioValue) {
        this.setState({
            radioValue
        }, () => {
            console.log(radioValue);
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

                                <RadioGroup theme={Theme.HIGHLIGHT}
                                            name="radio-group-1"
                                            data={this.data}
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
                                            value={radioValue}
                                            disabled={true}
                                            onChange={this.changeHandler}/>

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

                                <RadioGroup data={this.data}
                                            value={radioValue}
                                            uncheckedIconCls="fa fa-times-circle-o"
                                            checkedIconCls="fa fa-times-circle"
                                            onChange={this.changeHandler}/>

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