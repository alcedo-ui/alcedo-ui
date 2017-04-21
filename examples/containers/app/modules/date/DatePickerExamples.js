/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import DatePicker from 'dist/DatePicker';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import DatePickerDoc from 'docs/DatePicker.json';

import 'sass/containers/app/modules/date/DatePickerExamples.scss';

export default class DatePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example time-picker-example">

                <h2 className="example-title">Date Picker</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Date Picker Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <DatePicker value='2017-04-17'
                                            name="date"
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
