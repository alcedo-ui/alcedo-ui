/**
 * Created by DT314 on 2017/4/18.
 */
import React, {Component, PropTypes} from 'react';
import EditableField from 'dist/EditableField/EditableField';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import EditableFieldDoc from 'docs/EditableField.json';

import 'sass/containers/app/modules/fields/EditableFieldExamples.scss';

export default class EditableFieldExamples extends Component {
    constructor(props) {
        super();

        this.state = {
            value: '123'
        };

        this.onChange = this :: this.onChange;

    }

    onChange(text) {
        console.log(text);
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

                                <EditableField value={this.state.value} onChange={this.onChange}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={EditableFieldDoc}/>

            </div>

        );
    }
}