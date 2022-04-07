import React, {Component} from 'react';

import MonthField from 'src/MonthField';
import Widget from 'src/Widget';
import Paper from 'src/Paper';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/DateField.json';

class MonthFieldExamples extends Component {

    constructor(props) {
        super(props);

        this.state = {
            monthValue: {
                1: '',
                2: '2015-08',
                3: '2015-09',
                4: ['2015-08', '2015-09']
            }
        };
    }

    onChangeHandler = (id, value) => {
        const {monthValue} = this.state;

        monthValue[id] = value;
        this.setState({
            monthValue
        });
        console.log(value);
    };

    render() {
        const {monthValue} = this.state;

        return (

            <div className="example date-range-picker-examples">

                <h2 className="example-title">Month Field</h2>

                <p>
                    <span>Month Field</span> is used to select a month range.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With value and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Month Field</code>simple example.</p>

                                <MonthField minValue="2021-11"
                                            value={monthValue[1]}
                                            onChange={value => this.onChangeHandler(1, value)}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With value and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Month Field</code> using the <code>value</code> property to set initial
                                    date and the <code>dateFormat</code> property to set date format.</p>

                                <MonthField dateFormat={'YYYY-MM'}
                                            value={monthValue[2]}
                                            onChange={value => this.onChangeHandler(2, value)}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With value and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">
                                <p>
                                    A <code>Month Field</code> with select mode.Can
                                    be <code>SINGLE_SELECT</code>, <code>MULTI_SELECT</code>.
                                </p>
                                <Paper style={{width: 302, marginTop: 20}}>
                                    <MonthField dateFormat={'YYYY-MM'}
                                                value={monthValue[3]}
                                                selectMode={MonthField.SelectMode.SINGLE_SELECT}
                                                onChange={value => this.onChangeHandler(3, value)}/>
                                </Paper>

                                <Paper style={{width: 302, marginTop: 20}}>
                                    <MonthField dateFormat={'YYYY-MM'}
                                                value={monthValue[4]}
                                                selectMode={MonthField.SelectMode.MULTI_SELECT}
                                                onChange={value => this.onChangeHandler(4, value)}/>
                                </Paper>
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

export default MonthFieldExamples;
