/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import DateTimePicker from 'dist/DateTimePicker';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import DateTimePickerDoc from 'assets/propTypes/DateTimePicker.json';

import 'sass/containers/app/modules/date/DateTimePickerExamples.scss';


export default class DateTimePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example date-time-picker-example">

                <h2 className="example-title">Date Time Picker</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Date Time Picker Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">
                                <DateTimePicker value='2017-04-21 12:23:10'
                                                maxValue="2017-09-12 12:23:00"
                                                minValue='2017-01-01 12:55:55'/>
                            </div>

                        </div>
                    </div>
                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DateTimePickerDoc}/>

            </div>
        );
    }
};
