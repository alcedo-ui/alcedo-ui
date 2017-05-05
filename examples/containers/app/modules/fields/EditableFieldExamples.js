/**
 * Created by DT314 on 2017/4/18.
 */
import React, {Component, PropTypes} from 'react';
import EditableField from 'dist/EditableField/EditableField';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import EditableFieldDoc from 'assets/propTypes/EditableField.json';

import 'sass/containers/app/modules/fields/EditableFieldExamples.scss';

export default class EditableFieldExamples extends Component {
    constructor(props) {
        super();

        this.state = {
            value: 'text'
        };

        this.onChange = this :: this.onChange;

    }

    onChange(text) {
        console.log(text);
    }

    render() {
        return (
            <div className="example editable-field-examples">

                <h2 className="example-title">Editable Field</h2>

                <p>
                    An <span>Editable Field</span> is an editable text display area.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Editable Field Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Editable Field simple default example.</p>

                                <EditableField value={this.state.value}
                                               onChange={this.onChange}/>

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