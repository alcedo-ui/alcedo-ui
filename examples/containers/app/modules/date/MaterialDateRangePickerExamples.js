import React, {Component, PropTypes} from 'react';

import MaterialDateRangePicker from 'src/MaterialDateRangePicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MaterialDateRangePicker.json';

export default class MaterialDateRangePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    onChangeHandle(value) {
        console.log(value);
    }

    render() {
        return (

            <div className="example date-range-picker-examples">

                <h2 className="example-title">Material Date Range Picker</h2>

                <p>
                    <span>Material Date Range Picker</span> is used to select a date range.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With value and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Material Date Range Picker</code>simple example.</p>

                                <MaterialDateRangePicker label={`date range`}
                                                         onChange={this.onChangeHandle}
                                />

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With value and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Material Date Range Picker</code> using the <code>value</code> property to set
                                    initial
                                    date and the <code>dateFormat</code> property to set date format.</p>

                                <MaterialDateRangePicker label={`date range`}
                                                         value={['2015-07-01', '2017-04-21']}
                                                         dateFormat={'YYYY-MM-DD'}
                                                         onChange={this.onChangeHandle}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With maxValue and minValue"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Material Date Range Picker</code> using the <code>maxValue</code> property
                                    and <code>minValue</code>
                                    property to set date selectable range.</p>

                                <MaterialDateRangePicker label={`date range`}
                                                         isLabelAnimate={true}
                                                         dateFormat={'YYYY-MM-DD'}
                                                         maxValue={'2018-12-21'}
                                                         minValue={'2017-02-01'}
                                                         onChange={this.onChangeHandle}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With placeholder"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Material Date Range Picker</code> using the <code>placeholder</code> property
                                    to set
                                    default value.</p>

                                <MaterialDateRangePicker label={`date range`}
                                                         isLabelAnimate={false}
                                                         dateFormat={'YYYY-MM-DD'}
                                                         popupVisible={true}
                                                         maxValue={'2018-12-21'}
                                                         minValue={'2017-02-01'}
                                                         onChange={this.onChangeHandle}/>
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
