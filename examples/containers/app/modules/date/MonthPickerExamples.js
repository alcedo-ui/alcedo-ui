import React, {Component, PropTypes} from 'react';

import MonthPicker from 'src/MonthPicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MonthPicker.json';

class MonthPickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    onChangeHandle = value => {
        console.log(value);
    };

    render() {
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

export default MonthPickerExamples;