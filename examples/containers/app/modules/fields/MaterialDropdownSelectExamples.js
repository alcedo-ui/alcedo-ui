import React, {Component} from 'react';


import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import PropTypeDescTable from '../PropTypeDescTable';
import MaterialDropdownSelect from 'dist/MaterialDropdownSelect';
import MaterialDropdownSelectDoc from 'assets/propTypes/MaterialDropdownSelect.json';

import 'sass/containers/app/modules/fields/MaterialDropdownSelectExamples.scss';

export default class MaterialDropdownSelectExamples extends Component {

    constructor(props) {
        super(props);

    }

    onChangeHandle(value) {
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <div className="example tree-select-examples">

                <h2 className="examples-title">MaterialDropdownSelect</h2>

                <p>
                    <span>MaterialDropdownSelect</span> is a Tree component withe select field.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>MaterialDropdownSelect</code> simple example.</p>
                                <div className="field-group">
                                    <MaterialDropdownSelect />
                                </div>
                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={MaterialDropdownSelectDoc}/>

            </div>

        );
    }
};