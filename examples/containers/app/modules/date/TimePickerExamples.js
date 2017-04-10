/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import TimePicker from '../../../../../dist/TimePicker'

export default class TimePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="time-picker-example">
                <TimePicker/>
            </div>
        );
    }
};

TimePickerExamples.propTypes = {};