/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import DatePicker from '../../../../../dist/DatePicker'

export default class DatePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="time-picker-example">
                <DatePicker/>
            </div>
        );
    }
};

DatePickerExamples.propTypes = {};