import React, {Component} from 'react';

import DatePicker from 'src/DatePicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/DatePicker.json';

import 'scss/containers/app/modules/date/DateInDialog.scss';

class DatePickerExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DatePickerVisible: {},
            DatePickerValue: {
                2: '2017/02/03'
            }
        };

    }

    show = id => {

        const {DatePickerVisible} = this.state;

        DatePickerVisible[id] = true;

        this.setState({
            DatePickerVisible
        });

    };

    hide = id => {

        const {DatePickerVisible} = this.state;

        DatePickerVisible[id] = false;

        this.setState({
            DatePickerVisible
        });

    };


    onChangeHandler = (id, value) => {
        const {DatePickerValue} = this.state;

        DatePickerValue[id] = value;
        this.setState({
            DatePickerValue
        });
        console.log(value);
    };

    render() {

        const {DatePickerVisible, DatePickerValue} = this.state;

        return (
            <div className="example time-picker-examples">

                <h2 className="example-title">DatePicker</h2>

                <p>
                    <span>DatePicker</span> is used to select a single date for an input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>DatePicker</code> using the <code>value</code> property to set initial date.
                                </p>

                                <DatePicker value={DatePickerValue[1]}
                                            dateFormat={'YYYY-MM-DD'}
                                            name="date"
                                            readOnly={true}
                                            minValue="2018-11-01"
                                            rightIconCls={'far fa-calendar-alt'}
                                            popupClassName={'popupClassName'}
                                            position={DatePicker.Position.TOP}
                                            autoClose={true}
                                            onChange={value => this.onChangeHandler(1, value)}/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With dateFormat and placeholder"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>DatePicker</code> using the <code>dateFormat</code> property to set date
                                    format and using <code>placeholder</code> property to set a default date when no
                                    date choice.</p>

                                <DatePicker name="date"
                                            dateFormat="YYYY/MM/DD"
                                            value={DatePickerValue[2]}
                                            autoClose={false}
                                            onChange={value => this.onChangeHandler(2, value)}/>
                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With maxValue and minValue"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>DatePicker</code> using the <code>maxValue</code> and <code>minValue</code>
                                    property to set date selectable range.</p>

                                <DatePicker name="date"
                                            value={DatePickerValue[3]}
                                            dateFormat="YYYY-MM-DD"
                                            maxValue="2050-02-01"
                                            minValue="2017-02-03"
                                            autoClose={false}
                                            onChange={value => this.onChangeHandler(3, value)}/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With autoClose"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set <code>autoClose</code> property to false for closing date picker after choose a
                                    date.</p>

                                <DatePicker name="date"
                                            value={DatePickerValue[4]}
                                            dateFormat="YYYY-MM-DD"
                                            maxValue="2050-02-01"
                                            minValue="2017-02-03"
                                            autoClose={false}
                                            onChange={value => this.onChangeHandler(4, value)}/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set <code>autoClose</code> property to false for closing date picker after choose a
                                    date.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={DatePickerVisible[1]}
                                        onRequestClose={() => this.hide(1)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <div className="field-group">
                                                    <DatePicker name="date"
                                                                value={DatePickerValue[5]}
                                                                dateFormat="YYYY-MM-DD"
                                                                maxValue="2050-02-01"
                                                                minValue="2017-02-03"
                                                                parentEl={dialogContentEl}
                                                                autoClose={false}
                                                                onChange={value => this.onChangeHandler(5, value)}/>
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
}

export default DatePickerExamples;
