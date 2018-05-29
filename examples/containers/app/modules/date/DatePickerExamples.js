import React, {Component, PropTypes} from 'react';

import DatePicker from 'src/DatePicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/DatePicker.json';

class DatePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    onChangeHandler = value => {
        console.log(value);
    };

    render() {

        return (
            <div className="example time-picker-examples">

                <h2 className="example-title">DatePicker</h2>

                <p>
                    <span>DatePicker</span> is used to select a single date for an input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>DatePicker</code> using the <code>value</code> property to set initial date.
                                </p>

                                <DatePicker value={''}
                                            dateFormat={'YYYY-MM-DD'}
                                            name="date"
                                            autoClose={true}
                                            onChange={this.onChangeHandler}/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With dateFormat and placeholder"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>DatePicker</code> using the <code>dateFormat</code> property to set date
                                    format and using <code>placeholder</code> property to set a default date when no
                                    date choice.</p>

                                <DatePicker name="date"
                                            dateFormat='YYYY/MM/DD'
                                            value='2017/02/03'
                                            autoClose={false}
                                            onChange={this.onChangeHandler}/>
                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With maxValue and minValue"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>DatePicker</code> using the <code>maxValue</code> and <code>minValue</code>
                                    property to set date selectable range.</p>

                                <DatePicker name="date"
                                            dateFormat='YYYY-MM-DD'
                                            maxValue='2020-02-01'
                                            minValue='2017-02-03'
                                            autoClose={false}
                                            onChange={this.onChangeHandler}/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With autoClose"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set <code>autoClose</code> property to false for closing date picker after choose a
                                    date.</p>

                                <DatePicker name="date"
                                            dateFormat='YYYY-MM-DD'
                                            maxValue='2020-02-01'
                                            minValue='2017-02-03'
                                            autoClose={false}
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

export default DatePickerExamples;