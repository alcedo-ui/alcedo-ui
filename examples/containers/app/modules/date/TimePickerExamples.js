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

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Time Picker</code> simple example.</p>

                                <TimePicker/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With value"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Time Picker</code> using the <code>value</code> property to set initial time.
                                </p>

                                <TimePicker value="12:00:00"/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With maxValue and minValue"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Time Picker</code> using the <code>maxValue</code> and <code>minValue</code>
                                    property to set time selectable range.</p>

                                <TimePicker value="10:00:00"
                                            maxValue="20:56:20"
                                            minValue="01:20:20"/>
                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With placeholder and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Time Picker</code> using the <code>placeholder</code> property to set time
                                    default value and using the <code>dateFormat</code> property constructor set time
                                    format.</p>

                                <TimePicker value="12:00"
                                            placeholder="date"
                                            dateFormat="HH:mm"
                                            maxValue="23:56"
                                            minValue="01:20"
                                />
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
