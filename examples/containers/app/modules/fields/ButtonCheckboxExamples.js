import React, {Component} from 'react';

import ButtonCheckbox from 'dist/ButtonCheckbox';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import ButtonCheckboxDoc from 'assets/propTypes/ButtonCheckbox.json';

import 'sass/containers/app/modules/fields/ButtonCheckboxExamples.scss';

export default class ButtonCheckboxExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example button-checkbox-examples">


                <h2 className="example-title">ButtonCheckbox</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="ButtonCheckbox Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <label>Number</label>
                                <ButtonCheckbox text="1"/>
                                <ButtonCheckbox text="2"/>
                                <ButtonCheckbox text="3"/>
                                <ButtonCheckbox text="4"/>
                                <ButtonCheckbox text="5"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={ButtonCheckboxDoc}/>

            </div>
        );
    }
};