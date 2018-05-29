import React, {Component, PropTypes} from 'react';

import MaterialMonthPicker from 'src/MaterialMonthPicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MaterialMonthPicker.json';

class MaterialMonthPickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    onChangeHandler = value => {
        console.log(value);
    };

    render() {
        return (
            <div className="example time-picker-examples">

                <h2 className="example-title">Material Month Picker</h2>

                <p>
                    <span>Material Month Picker</span> is used to select a single date for an input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Material Month Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <MaterialMonthPicker name="date"
                                                     label={'date'}
                                                     isLabelAnimate={true}
                                                     autoClose={false}
                                                     onChange={this.onChangeHandler}/>

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
                                    <code>Material Month Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <MaterialMonthPicker name="date"
                                                     label={'date'}
                                                     isLabelAnimate={false}
                                                     autoClose={true}
                                                     onChange={this.onChangeHandler}/>

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

export default MaterialMonthPickerExamples;