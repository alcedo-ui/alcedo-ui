/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import DatePicker from 'dist/DatePicker';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import 'sass/containers/app/modules/date/DatePickerExamples.scss';

export default class DatePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let propertiesList = [{
            Name: 'className',
            Type: 'PropTypes.string',
            Default: '',
            Description: 'The css class name of the root element.'
        }, {
            Name: 'style',
            Type: 'PropTypes.object',
            Default: '',
            Description: 'The styles of the root element.'
        }, {
            Name: 'name',
            Type: 'PropTypes.string',
            Default: '',
            Description: 'Date picker input name.'
        }, {
            Name: 'value',
            Type: 'PropTypes.string',
            Default: 'moment().format(YYYY-MM-DD)',
            Description: 'This is the initial date value of the component.'
        }, {
            Name: 'maxValue',
            Type: 'PropTypes.string',
            Default: '',
            Description: 'The ending of a range of valid dates. The range includes the endDate. '
        }, {
            Name: 'minValue',
            Type: ' PropTypes.string',
            Default: '',
            Description: 'The beginning of a range of valid dates. The range includes the startDate. '
        }, {
            Name: 'placeholder',
            Type: 'PropTypes.string',
            Default: 'Date',
            Description: 'DatePicker textField element placeholder.'
        }, {
            Name: 'dateFormat',
            Type: ' PropTypes.string',
            Default: 'YYYY-MM-DD',
            Description: 'Date format.'
        }, {
            Name: 'autoClose',
            Type: ' PropTypes.bool',
            Default: 'true',
            Description: 'Hide date display.'
        }, {
            Name: 'onChange',
            Type: ' PropTypes.func',
            Default: '',
            Description: 'Callback function that is fired when the date value changes.'
        }];

        return (
            <div className="example time-picker-example">

                <h2 className="example-title">Date Picker</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Popup Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <DatePicker value='2017-04-17'
                                            name="date"
                                            dateFormat='YYYY-MM-DD'
                                            maxValue='2018-02-01'
                                            minValue='2017-02-03'
                                            autoClose={false}/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <div className="example-properties">

                    <h3>Properties</h3>
                    <table className="example-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                propertiesList && propertiesList.length > 0 ?
                                    (
                                        propertiesList.map(function (val) {
                                            return <tr>
                                                <td className="properties-name">{val.Name}</td>
                                                <td className="properties-type">{val.Type}</td>
                                                <td>{val.Default}</td>
                                                <td>{val.Description}</td>
                                            </tr>
                                        })
                                    )
                                    : null
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
};
