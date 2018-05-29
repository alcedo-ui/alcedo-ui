import React, {Component} from 'react';

import Radio from 'src/Radio';
import RadioGroup from 'src/RadioGroup';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/RadioGroup.json';

class RadioGroupExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            radioChecked: false,
            radioGroupValue: 'label1'
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

    }

    checkHandler = item => {
        if (item) {
            console.log('checked', item);
        } else {
            console.log('checked');
        }
    };

    radioChangeHandler = radioChecked => {
        this.setState({
            radioChecked
        });
    };

    radioGroupChangeHandler = radioGroupValue => {
        this.setState({
            radioGroupValue
        });
    };

    render() {

        const {radioChecked, radioGroupValue} = this.state;

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

                                <p><code>Radio</code> simple example.</p>

                                <Radio theme={Radio.Theme.HIGHLIGHT}
                                       label="radio"
                                       name="radio"
                                       value="radio"
                                       checked={radioChecked}
                                       onChange={this.radioChangeHandler}
                                       onCheck={this.checkHandler}/>

                                <p><code>RadioGroup</code> simple example.</p>

                                <RadioGroup theme={RadioGroup.Theme.HIGHLIGHT}
                                            name="radio-group-1"
                                            data={this.data}
                                            value={radioGroupValue}
                                            onChange={this.radioGroupChangeHandler}
                                            onCheck={this.checkHandler}/>

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
                                            value={radioGroupValue}
                                            disabled={true}
                                            onChange={this.radioGroupChangeHandler}/>

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
                                            value={radioGroupValue}
                                            uncheckedIconCls="far fa-times-circle"
                                            checkedIconCls="fas fa-times-circle"
                                            onChange={this.radioGroupChangeHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};

export default RadioGroupExamples;