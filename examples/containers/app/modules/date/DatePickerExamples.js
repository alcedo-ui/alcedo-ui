/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import DatePicker from 'dist/DatePicker';
import 'sass/containers/app/modules/date/DatePickerExamples.scss';

export default class DatePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example time-picker-example">
                <div className="examples">
                    <div className="examples-title">Date Picker</div>
                    <div className="examples-wrapper">
                        <DatePicker value='2017-04-17'
                                    name="date"
                                    dateFormat='YYYY-MM-DD'
                                    maxValue='2018-02-01'
                                    minValue='2017-02-03'
                                    autoClose={false}

                        />
                    </div>
                </div>

            </div>
        );
    }
};

DatePickerExamples.propTypes = {};