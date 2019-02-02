import React, {Component, PropTypes} from 'react';

import DateTimePicker from 'src/DateTimePicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/DateTimePicker.json';

import 'scss/containers/app/modules/date/DateInDialog.scss';



class DateTimePickerExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DateTimePickerVisible: {}
        };

    }

    show = id => {

        const {DateTimePickerVisible} = this.state;

        DateTimePickerVisible[id] = true;

        this.setState({
            DateTimePickerVisible
        });

    };

    hide = id => {

        const {DateTimePickerVisible} = this.state;

        DateTimePickerVisible[id] = false;

        this.setState({
            DateTimePickerVisible
        });

    };

    onChangeHandle = value => {
        console.log(value);
    };

    render() {

        const {DateTimePickerVisible} = this.state;
        return (
            <div className="example date-time-picker-examples">

                <h2 className="example-title">Date Time Picker</h2>

                <p>
                    <span>Date Time Picker</span> is used to select a date and time.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Date Time Picker</code> simple example.</p>

                                <DateTimePicker value=''
                                                onChange={this.onChangeHandle}/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With value"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Date Time Picker</code> using the <code>value</code> property to set initial
                                    date and time.</p>

                                <DateTimePicker value='2017-04-21 12:23:10'
                                                onChange={this.onChangeHandle}/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With maxVale and minValue"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Date Time Picker</code> using the <code>maxValue</code> property
                                    and <code>minValue</code>
                                    property to set date selectable range.</p>

                                <DateTimePicker value='2017-04-21 12:23:10'
                                                maxValue="2017-09-12 12:23:00"
                                                minValue='2017-01-01 12:55:55'
                                                onChange={this.onChangeHandle}/>
                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With placeholder and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Date Time Picker</code> using the <code>placeholder</code> property to set
                                    default value and using the <code>dateFormat</code> property to format date time.
                                </p>

                                <DateTimePicker value='2017-04-21 12:23:10'
                                                maxValue="2017-09-12 12:23:00"
                                                minValue='2017-01-01 12:55:55'
                                                dateFormat="YYYY/MM/DD HH:mm"
                                                placeholder="2017-05-03 11:05:20"
                                                onChange={this.onChangeHandle}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Date Time Picker</code> using the <code>placeholder</code> property to set
                                    default value and using the <code>dateFormat</code> property to format date time.
                                </p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={DateTimePickerVisible[1]}
                                        onRequestClose={() => this.hide(1)}>

                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <DateTimePicker value='2017-04-21 12:23:10'
                                                                maxValue="2017-09-12 12:23:00"
                                                                minValue='2017-01-01 12:55:55'
                                                                dateFormat="YYYY/MM/DD HH:mm"
                                                                placeholder="2017-05-03 11:05:20"
                                                                parentEl={dialogContentEl}
                                                                onChange={this.onChangeHandle}/>
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

export default DateTimePickerExamples;