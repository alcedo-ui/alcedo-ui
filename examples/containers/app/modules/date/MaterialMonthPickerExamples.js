import React, {Component, PropTypes} from 'react';

import MaterialMonthPicker from 'src/MaterialMonthPicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MaterialMonthPicker.json';

import 'sass/containers/app/modules/date/DatePickerExamples.scss';

export default class MaterialMonthPickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example time-picker-examples">

                <h2 className="example-title">Material Date Picker</h2>

                <p>
                    <span>Material Date Picker</span> is used to select a single date for an input.
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

                                <MaterialMonthPicker name="date"
                                                    label={'date'}
                                                    isLabelAnimate={true}
                                                    autoClose={false}/>

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
