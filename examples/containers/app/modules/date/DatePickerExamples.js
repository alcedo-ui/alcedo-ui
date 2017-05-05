/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import DatePicker from 'dist/DatePicker';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

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

                    <WidgetHeader className="example-header" title="Date Picker Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Date Picker using the value property to set initial date.</p>

                                <DatePicker value='2017-04-17'
                                            name="date"/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Date Picker Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Date Picker using the dateFormat property to set date format and using placeholder
                                    property to set a default date when no date choice.</p>

                                <DatePicker name="date"
                                            placeholder="2017-08-09"
                                            dateFormat='YY/MM/DD'/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Date Picker Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Date Picker using the maxValue and minValue property to set date selectable
                                    range.</p>

                                <DatePicker name="date"
                                            dateFormat='YYYY-MM-DD'
                                            maxValue='2018-02-01'
                                            minValue='2017-02-03'/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Date Picker Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set autoClose property to false for closing date picker after choose a date.</p>

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
