/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import MaterialDatePicker from 'src/MaterialDatePicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import MaterialDatePickerDoc from 'assets/propTypes/MaterialDatePicker.json';

import 'sass/containers/app/modules/date/DatePickerExamples.scss';

export default class DatePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example time-picker-examples">

                <h2 className="example-title">Material Date Picker</h2>

                <p>
                    <span>Material Date Picker</span> is used to select a single date for an input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Material Date Picker</code> using the <code>value</code> property to set initial date.
                                </p>

                                <MaterialDatePicker value='2017-04-17'
                                                    name="date"
                                                    autoClose={false}/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={MaterialDatePickerDoc}/>

            </div>
        );
    }
};
