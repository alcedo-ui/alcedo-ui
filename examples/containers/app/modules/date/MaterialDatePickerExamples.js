import React, {Component, PropTypes} from 'react';
import moment from 'moment';

import MaterialDatePicker from 'src/MaterialDatePicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MaterialDatePicker.json';

import 'assets/scss/containers/app/modules/date/DateInDialog.scss';
import DatePicker from '../../../../../src/DatePicker';



class MaterialDatePickerExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            start: this.yesterday(),
            end: this.yesterday(),
            MaterialDatePickerVisible: {},
            value: '2017-03-06'
        };

    }

    show = id => {

        const {MaterialDatePickerVisible} = this.state;

        MaterialDatePickerVisible[id] = true;

        this.setState({
            MaterialDatePickerVisible
        });

    };

    hide = id => {

        const {MaterialDatePickerVisible} = this.state;

        MaterialDatePickerVisible[id] = false;

        this.setState({
            MaterialDatePickerVisible
        });

    };

    yesterday = () => {
        return moment().add(-1, 'days').format('YYYY-MM-DD');
    };

    onChangeHandle = value => {
        console.log(value);
        this.setState({
            value
        });
    };

    startChangeHandler = start => {
        console.log(start);
        this.setState({
            start
        });
    };

    endChangeHandler = end => {
        console.log(end);
        this.setState({
            end
        });
    };

    render() {

        const {start, end, MaterialDatePickerVisible, value} = this.state;

        return (
            <div className="example time-picker-examples">

                <h2 className="example-title">Material Date Picker</h2>

                <p>
                    <span>Material Date Picker</span>
                    is used to select a single date for an input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Material Date Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <MaterialDatePicker label="Start"
                                                    value={start}
                                                    maxValue={''}
                                                    minValue={''}
                                                    autoClose={false}
                                                    rightIconCls="far fa-calendar-alt"
                                                    popupClassName="popupClassName"
                                                    onChange={this.startChangeHandler}/>

                                <MaterialDatePicker label="End"
                                                    value={end}
                                                    minValue={start}
                                                    maxValue={''}
                                                    autoClose={false}
                                                    rightIconCls="far fa-calendar-alt"
                                                    popupClassName="popupClassName"
                                                    onChange={this.endChangeHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Material Date Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <MaterialDatePicker name="date"
                                                    label={'date'}
                                                    value={value}
                                                    isLabelAnimate={false}
                                                    autoClose={false}
                                                    disabled={false}
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

                                <p>
                                    <code>Material Date Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={MaterialDatePickerVisible[1]}
                                        onRequestClose={() => this.hide(1)}>

                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <MaterialDatePicker label="Start"
                                                                    value={start}
                                                                    maxValue={end}
                                                                    rightIconCls="far fa-calendar-alt"
                                                                    popupClassName="popupClassName"
                                                                    parentEl={dialogContentEl}
                                                                    onChange={this.startChangeHandler}/>

                                                <MaterialDatePicker label="End"
                                                                    value={end}
                                                                    minValue={start}
                                                                    maxValue={this.yesterday()}
                                                                    rightIconCls="far fa-calendar-alt"
                                                                    popupClassName="popupClassName"
                                                                    parentEl={dialogContentEl}
                                                                    onChange={this.endChangeHandler}/>
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

export default MaterialDatePickerExamples;
