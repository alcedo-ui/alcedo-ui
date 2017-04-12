/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import TimePicker from 'dist/TimePicker';
import 'sass/containers/app/modules/date/TimePickerExamples.scss';


export default class TimePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example time-picker-example">
                <div className="examples">
                    <div className="examples-title">Time Picker</div>
                    <div className="examples-wrapper">
                        <TimePicker/>
                    </div>
                </div>
            </div>
        );
    }
};

TimePickerExamples.propTypes = {};