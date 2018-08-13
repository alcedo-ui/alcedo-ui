import React, {Component, PropTypes} from 'react';
import moment from 'moment';

import MaterialDatePicker from 'src/MaterialDatePicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MaterialDatePicker.json';

class MaterialDatePickerExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            start: this.yesterday(),
            end: this.yesterday()
        };

    }

    yesterday = () => {
        return moment().add(-1, 'days').format('YYYY-MM-DD');
    };

    onChangeHandle = value => {
        console.log(value);
    };

    startChangeHandler = start => {
        this.setState({
            start
        });
    };

    endChangeHandler = end => {
        this.setState({
            end
        });
    };

    render() {

        const {start, end} = this.state;

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
                                                    maxValue={end}
                                                    rightIconCls="far fa-calendar-alt"
                                                    popupClassName="popupClassName"
                                                    onChange={this.startChangeHandler}/>

                                <MaterialDatePicker label="End"
                                                    value={end}
                                                    minValue={start}
                                                    maxValue={this.yesterday()}
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
                                                    value="2017-12-12"
                                                    isLabelAnimate={false}
                                                    autoClose={false}
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

export default MaterialDatePickerExamples;