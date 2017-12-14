/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import DatePicker from 'src/DatePicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import DatePickerDoc from 'assets/propTypes/DatePicker.json';

import 'sass/containers/app/modules/date/DatePickerExamples.scss';

export default class DatePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example time-picker-examples">

                <h2 className="example-title">Date Picker</h2>

                <p>
                    <span>Date Picker</span> is used to select a single date for an input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Date Picker</code> using the <code>value</code> property to set initial date.
                                </p>

                                <DatePicker value='2017-04-17'
                                            name="date"
                                            autoClose={false}/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With dateFormat and placeholder"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Date Picker</code> using the <code>dateFormat</code> property to set date
                                    format and using <code>placeholder</code> property to set a default date when no
                                    date choice.</p>

                                <DatePicker name="date"
                                            dateFormat='YYYY/MM/DD'
                                            autoClose={false}/>
                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With maxValue and minValue"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Date Picker</code> using the <code>maxValue</code> and <code>minValue</code>
                                    property to set date selectable range.</p>

                                <DatePicker name="date"
                                            dateFormat='YYYY-MM-DD'
                                            maxValue='2018-02-01'
                                            minValue='2017-02-03'
                                            autoClose={false}/>

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
                                            maxValue='2018-02-01'
                                            minValue='2017-02-03'
                                            autoClose={false}/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DatePickerDoc}/>

            </div>
        );
    }
};
