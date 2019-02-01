import React, {Component, PropTypes} from 'react';

import DateRangePicker from 'src/DateRangePicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Dialog from 'src/Dialog';
import RaisedButton from 'src/RaisedButton';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/DateRangePicker.json';

import 'scss/containers/app/modules/date/DateInDialog.scss';

class DateRangePickerExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DateRangePickerVisible: {}
        };

    }

    show = id => {

        const {DateRangePickerVisible} = this.state;

        DateRangePickerVisible[id] = true;

        this.setState({
            DateRangePickerVisible
        });

    };

    hide = id => {

        const {DateRangePickerVisible} = this.state;

        DateRangePickerVisible[id] = false;

        this.setState({
            DateRangePickerVisible
        });

    };

    dialogRenderHandler = () => {

    };

    onChangeHandler = value => {
        console.log(value);
    };

    render() {

        const {DateRangePickerVisible} = this.state;
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

                                <DateRangePicker onChange={this.onChangeHandler}/>

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

                                <DateRangePicker value={['2015-07-01', '2017-04-21']}
                                                 dateFormat={'YYYY-MM-DD'}
                                                 onChange={this.onChangeHandler}/>

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

                                <DateRangePicker dateFormat={'YYYY-MM-DD'}
                                                 maxValue={'2018-12-21'}
                                                 minValue={'2017-02-01'}
                                                 onChange={this.onChangeHandler}/>
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

                                <DateRangePicker dateFormat={'YYYY-MM-DD'}
                                                 popupVisible={true}
                                                 maxValue={'2018-12-21'}
                                                 minValue={'2017-02-01'}
                                                 onChange={this.onChangeHandler}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Date Range Picker</code> using the <code>placeholder</code> property to set
                                    default value.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={DateRangePickerVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <div className="field-group">
                                                    <DateRangePicker dateFormat={'YYYY-MM-DD'}
                                                                     popupVisible={true}
                                                                     parentEl={dialogContentEl}
                                                                     maxValue={'2018-12-21'}
                                                                     minValue={'2017-02-01'}
                                                                     onChange={this.onChangeHandler}/>
                                                </div>
                                            </div>
                                    }
                                </Dialog>

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

export default DateRangePickerExamples;