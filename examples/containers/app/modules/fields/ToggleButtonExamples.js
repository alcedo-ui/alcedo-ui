import React, {Component} from 'react';

import ToggleButton from 'dist/ToggleButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import ToggleButtonDoc from 'assets/propTypes/ToggleButton.json';

import 'sass/containers/app/modules/fields/ToggleButtonExamples.scss';

export default class ToggleButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example toggle-button-examples">


                <h2 className="example-title">ToggleButton</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="ToggleButton Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <label>Number</label>
                                <ToggleButton text="1"/>
                                <ToggleButton text="2"/>
                                <ToggleButton text="3"/>
                                <ToggleButton text="4"/>
                                <ToggleButton text="5"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={ToggleButtonDoc}/>

            </div>
        );
    }
};