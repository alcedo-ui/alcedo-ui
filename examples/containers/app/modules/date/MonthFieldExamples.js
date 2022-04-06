import React, {Component} from 'react';

import MonthField from 'src/MonthField';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/DateField.json';

class MonthFieldExamples extends Component {

    constructor(props) {
        super(props);
    }

    onChangeHandler = value => {
        console.log(value);
    };

    render() {
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
                                            onChange={this.onChangeHandler}/>

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
                                            value={['2015-08', '2015-09']}
                                            selectMode={MonthField.SelectMode.MULTI_SELECT}
                                            onChange={this.onChangeHandler}/>

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
