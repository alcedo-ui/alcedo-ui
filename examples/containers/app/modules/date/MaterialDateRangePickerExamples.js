/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import MaterialDateRangePicker from 'src/MaterialDateRangePicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import MaterialDateRangePickerDoc from 'assets/propTypes/MaterialDateRangePicker.json';

import 'sass/containers/app/modules/date/DateRangePickerExamples.scss';


export default class MaterialDateRangePickerExamples extends Component {

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

                    <WidgetHeader className="example-header" title="With value and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Date Range Picker</code>simple example.</p>

                                <MaterialDateRangePicker />

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With value and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Date Range Picker</code> using the <code>value</code> property to set initial
                                    date and the <code>dateFormat</code> property to set date format.</p>

                                <MaterialDateRangePicker value={['2015-07-01', '2017-04-21']}
                                                         dateFormat={'YYYY-MM-DD'}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With maxValue and minValue"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Date Range Picker</code> using the <code>maxValue</code> property
                                    and <code>minValue</code>
                                    property to set date selectable range.</p>

                                <MaterialDateRangePicker dateFormat={'YYYY-MM-DD'}
                                                         maxValue={'2018-12-21'}
                                                         minValue={'2017-02-01'}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With placeholder"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Date Range Picker</code> using the <code>placeholder</code> property to set
                                    default value.</p>

                                <MaterialDateRangePicker dateFormat={'YYYY-MM-DD'}
                                                         popupVisible={true}
                                                         maxValue={'2018-12-21'}
                                                         minValue={'2017-02-01'}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={MaterialDateRangePickerDoc}/>

            </div>
        );
    }
};
