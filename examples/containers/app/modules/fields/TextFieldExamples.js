import React, {Component} from 'react';

import TextField from 'dist/TextField';
import TextFieldGroup from 'dist/TextFieldGroup';

import 'sass/containers/app/modules/fields/TextFieldExamples.scss';

export default class TextFieldExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example text-field-examples">

                <div className="examples">
                    <div className="examples-title">TextField</div>
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

                <div className="examples">
                    <div className="examples-title">TextField with Icon</div>
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

                <div className="examples">
                    <div className="examples-title">TextFieldGroup</div>
                    <div className="examples-wrapper">

                        <TextFieldGroup>
                            <TextField iconCls="fa fa-user"/>
                            <TextField iconCls="fa fa-lock"
                                       type="password"/>
                        </TextFieldGroup>

                    </div>
                </div>
            </div>
        );
    }
};