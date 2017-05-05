/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import DateRangePicker from 'dist/DateRangePicker';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import DateRangePickerDoc from 'assets/propTypes/DateRangePicker.json';

import 'sass/containers/app/modules/date/DateRangePickerExamples.scss';


export default class DateRangePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="example date-range-picker-examples">

                <h2 className="example-title">Date Range Picker</h2>

                <p>
                    <span>Date Range Picker</span> is used to select a date range.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Date Range Picker Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Date Range Picker using the value property to set initial date and the dateFormat
                                    property to set date format.</p>

                                <DateRangePicker value={['2015-07-01', '2017-04-21']}
                                                 dateFormat={'YYYY-MM-DD'}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Date Range Picker Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Date Range Picker using the maxValue property and minValue property to set date
                                    selectable range.</p>

                                <DateRangePicker dateFormat={'YYYY-MM-DD'}
                                                 maxValue={'2018-12-21'}
                                                 minValue={'2017-02-01'}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Date Range Picker Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Date Range Picker using the placeholder property to set default value.</p>

                                <DateRangePicker dateFormat={'YYYY-MM-DD'}
                                                 placeholder="hello"
                                                 popupVisible={true}
                                                 maxValue={'2018-12-21'}
                                                 minValue={'2017-02-01'}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DateRangePickerDoc}/>

            </div>
        );
    }
};
