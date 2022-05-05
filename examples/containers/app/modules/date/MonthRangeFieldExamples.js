import React, {Component} from 'react';

import MonthRangeField from 'src/MonthRangeField';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MonthRangeField.json';

class MonthRangeFieldExamples extends Component {

    constructor(props) {
        super(props);
    }

    onChangeHandler = value => {
        console.log(value);
    };

    render() {
        return (

            <div className="example date-range-picker-examples">

                <h2 className="example-title">Month Range Field</h2>

                <p>
                    <span>Month Range Field</span> is used to select a date range.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With value and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Month Range Field</code>simple example.</p>

                                <MonthRangeField onChange={this.onChangeHandler}
                                                 value={['2022-5-1', '2023-4']}
                                                 minValue="2021-07"
                                                 maxValue="2023-08"/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With value and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Month Range Field</code> using the <code>value</code> property to set initial
                                    date and the <code>dateFormat</code> property to set date format.</p>

                                <MonthRangeField value={['2015-07', '2017-09']}
                                                 dateFormat={'YYYY/MM'}
                                                 maxValue={'2017-04-23'}
                                                 minValue={'2015-07-13'}
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

export default MonthRangeFieldExamples;
