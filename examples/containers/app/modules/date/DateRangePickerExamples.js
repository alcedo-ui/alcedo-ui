/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import DateRangePicker from '../../../../../dist/DateRangePicker'

export default class DateRangePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="time-picker-example">
                <DateRangePicker/>
            </div>
        );
    }
};

DateRangePickerExamples.propTypes = {};