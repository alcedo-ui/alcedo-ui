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
            <div className="example time-picker-examples">

                <h2 className="example-title">Time Picker</h2>

                <p>
                    <span>Time Picker</span> is used to select select a single time for an input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Time Picker Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Time Picker using the value property to set initial time.</p>

                                <TimePicker value="12:00:00"/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Time Picker Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Time Picker using the maxValue and minValue property to set time selectable
                                    range.</p>

                                <TimePicker value="10:00:00"
                                            maxValue="20:56:20"
                                            minValue="01:20:20"/>
                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Time Picker Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Time Picker using the placeholder property to set time default value and using the
                                    dateFormat property constructor set time format.</p>

                                <TimePicker value="12:00:00"
                                            placeholder="hello"
                                            dateFormat="HH:mm"
                                            maxValue="23:56:20"
                                            minValue="01:20:20"
                                            dateFormat={'HH:mm'}/>
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
