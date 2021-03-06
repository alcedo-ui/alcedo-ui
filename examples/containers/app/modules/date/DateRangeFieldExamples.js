import React, {Component, PropTypes} from 'react';

import DateRangeField from 'src/DateRangeField';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/DateRangePicker.json';

class DateRangeFieldExamples extends Component {

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

                                <DateRangeField onChange={this.onChangeHandler}
                                                value={[null, null]}
                                                otherSelectedDate={[{
                                                    value: ['2020-11-20', '2020-12-04'],
                                                    tip: 'balabalabala'
                                                }, {
                                                    value: ['2020-11-1', '2020-11-2'],
                                                    tip: 'balabalabala'
                                                }, {
                                                    value: ['2020-12-10', '2020-12-20'],
                                                    tip: 'balabalabala'
                                                }, {
                                                    value: ['2020-12-22', '2020-12-22'],
                                                    tip: 'balabalabala'
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

                                <DateRangeField value={['2015-07-21', '2017-04-21']}
                                                dateFormat={'YYYY-MM-DD'}
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
};

export default DateRangeFieldExamples;