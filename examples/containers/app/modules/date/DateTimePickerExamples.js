/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import DateTimePicker from 'dist/DateTimePicker';
import 'sass/containers/app/modules/date/DateTimePickerExamples.scss';


export default class DateTimePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example time-picker-example">
                <div className="examples">
                    <div className="examples-title">Date Time Picker</div>
                    <div className="examples-wrapper">
                        <DateTimePicker value='1940-02-23 12:23:10' maxValue="1941-02-12 00:00:00"/>
                    </div>
                </div>
            </div>
        );
    }
};

DateTimePickerExamples.propTypes = {};