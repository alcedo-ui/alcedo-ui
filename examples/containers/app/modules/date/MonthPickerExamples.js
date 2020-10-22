import React, {Component, PropTypes} from 'react';

import MonthPicker from 'src/MonthPicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MonthPicker.json';

import 'scss/containers/app/modules/date/DateInDialog.scss';

class MonthPickerExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MonthPickerVisible: {},
            month: null
        };

    }

    show = id => {

        const {MonthPickerVisible} = this.state;

        MonthPickerVisible[id] = true;

        this.setState({
            MonthPickerVisible
        });

    };

    hide = id => {

        const {MonthPickerVisible} = this.state;

        MonthPickerVisible[id] = false;

        this.setState({
            MonthPickerVisible
        });

    };

    onChangeHandle = value => {

        this.setState({
            month: value
        });
        console.log(value);
    };

    render() {

        const {MonthPickerVisible, month} = this.state;
        return (
            <div className="example time-picker-examples">

                <h2 className="example-title">Month Picker</h2>

                <p>
                    <span>Month Picker</span> is used to select a single date for an input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Month Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <MonthPicker name="date"
                                             label={'date'}
                                             dateFormat={'YYYY/MM'}
                                             value={month || '2020/11'}
                                             autoClose={false}
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
                                    <code>Month Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={MonthPickerVisible[1]}
                                        onRequestClose={() => this.hide(1)}>

                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <MonthPicker name="date"
                                                             label={'date'}
                                                             dateFormat={'YYYY/MM'}
                                                             parentEl={dialogContentEl}
                                                             autoClose={false}
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

export default MonthPickerExamples;