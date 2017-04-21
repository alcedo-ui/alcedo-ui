import React, {Component} from 'react';

import DropdownSelect from 'dist/DropdownSelect';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import DropdownSelectDoc from 'docs/DropdownSelect.json';

import 'sass/containers/app/modules/fields/DropdownSelectExamples.scss';

export default class DropdownSelectExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example dropdown-select-examples">

                <h2 className="example-title">Dropdown Select</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Dropdown Select Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <div className="field-group">
                                    <label className="dropdown-select-label">Number</label>
                                    <DropdownSelect data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                                    autoClose={false}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DropdownSelectDoc}/>

            </div>
        );
    }
};