/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import TimePicker from 'dist/TimePicker';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import TimePickerDoc from 'assets/propTypes/TimePicker.json';

import 'sass/containers/app/modules/date/TimePickerExamples.scss';


export default class TimePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example time-picker-example">

                <h2 className="example-title">Time Picker</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Time Picker Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">
                                <TimePicker/>
                            </div>

                        </div>
                    </div>
                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TimePickerDoc}/>

            </div>
        );
    }
};
