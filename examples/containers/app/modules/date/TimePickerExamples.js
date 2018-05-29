import React, {Component, PropTypes} from 'react';

import TimePicker from 'src/TimePicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/TimePicker.json';

class TimePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    onChangeHandler = value => {
        console.log(value);
    };

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

                                <TimePicker onChange={this.onChangeHandler}
                                            value=""/>

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

                                <TimePicker value="12:00:00"
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

                                <p><code>Time Picker</code> using the <code>maxValue</code> and <code>minValue</code>
                                    property to set time selectable range.</p>

                                <TimePicker value="10:00:00"
                                            maxValue="20:56:20"
                                            minValue="01:20:20"
                                            onChange={this.onChangeHandler}/>
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
                                            dateFormat="HH:mm"
                                            maxValue="23:56"
                                            minValue="01:20"
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

export default TimePickerExamples;