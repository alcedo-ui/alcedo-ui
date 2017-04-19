/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import DateRangePicker from 'dist/DateRangePicker';
import 'sass/containers/app/modules/date/DateRangePickerExamples.scss';


export default class DateRangePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example time-picker-example">
                <div className="examples">
                    <div className="examples-title">Date Range Picker</div>
                    <div className="examples-wrapper">
                        <DateRangePicker/>
                    </div>
                </div>

            </div>
        );
    }
};

DateRangePickerExamples.propTypes = {};