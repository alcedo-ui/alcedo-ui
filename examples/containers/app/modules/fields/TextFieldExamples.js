import React, {Component} from 'react';

import TextField from 'dist/TextField';
import TextFieldGroup from 'dist/TextFieldGroup';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import TextFieldDoc from 'docs/TextField.json';

import 'sass/containers/app/modules/fields/TextFieldExamples.scss';

export default class TextFieldExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example text-field-examples">

                <h2 className="example-title">TextField</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="TextField Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <div className="field-group">
                                    <label className="text-field-label">Default</label>
                                    <TextField/>
                                </div>

                                <div className="field-group">
                                    <label className="text-field-label">Password</label>
                                    <TextField type="password"/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="TextField with Icon Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <div className="field-group">
                                    <label className="text-field-label">Username</label>
                                    <TextField iconCls="fa fa-user"/>
                                </div>

                                <div className="field-group">
                                    <label className="text-field-label">Password</label>
                                    <TextField iconCls="fa fa-lock"
                                               type="password"/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="TextFieldGroup Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <TextFieldGroup>
                                    <TextField iconCls="fa fa-user"/>
                                    <TextField iconCls="fa fa-lock"
                                               type="password"/>
                                </TextFieldGroup>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TextFieldDoc}/>

            </div>
        );
    }
};