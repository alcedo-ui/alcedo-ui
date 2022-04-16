import React, {Component} from 'react';

import MonthRangeField from 'src/MonthRangeField';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/DateRangePicker.json';

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

                <h2 className="example-title">Date Range Field</h2>

                <p>
                    <span>Date Range Field</span> is used to select a date range.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With value and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Date Range Field</code>simple example.</p>

                                <MonthRangeField onChange={this.onChangeHandler}
                                                // minValue="2021-11-19"
                                                // maxValue="2022-10-13"
                                                value={['2022-10', '2022-10']}
                                                otherSelectedDate={[{
                                                    value: ['2021-11', '2021-11'], tip: 'Multiplier: 3.260'
                                                }, {
                                                    value: ['2022-08', '2022-08'], tip: 'Multiplier: 1.610'
                                                }, {
                                                    value: ['2022-10', '2022-10'], tip: 'Multiplier: 1.300'
                                                }, {
                                                    value: ['2021-12', '2021-12'], tip: 'Multiplier: 1.200'
                                                }]}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With value and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Date Range Field</code> using the <code>value</code> property to set initial
                                    date and the <code>dateFormat</code> property to set date format.</p>

                                <MonthRangeField value={['2015-07', '2017-09']}
                                                dateFormat={'YYYY-MM'}
                                                // maxValue={'2017-04-23'}
                                                // minValue={'2015-07-13'}
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
