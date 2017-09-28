import React, {Component} from 'react';

import TextField from 'dist/TextField';
import TextFieldGroup from 'dist/TextFieldGroup';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import Theme from 'dist/Theme';

import PropTypeDescTable from '../PropTypeDescTable';
import TextFieldDoc from 'assets/propTypes/TextField.json';

import 'sass/containers/app/modules/fields/TextFieldExamples.scss';

export default class TextFieldExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example text-field-examples">

                <h2 className="example-title">TextField</h2>

                <p>
                    <span>TextField</span> allow users to input text.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With type"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>TextField</code> using the <code>type</code> property to set the type of input
                                    to display such as "password" or "text".</p>

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

                    <WidgetHeader className="example-header"
                                  title="With rightIconCls"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>TextField</code> using the <code>rightIconCls</code> property to set a icon
                                    display at right.</p>

                                <div className="field-group">
                                    <label className="text-field-label">Search</label>
                                    <TextField rightIconCls={'fa fa-search'}
                                               theme={Theme.PRIMARY}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>


                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With icon"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>TextField</code> using the <code>iconCls</code> property to set the icon of
                                    TextField to display at left.</p>

                                <div className="field-group">
                                    <label className="text-field-label">Username</label>
                                    <TextField iconCls="fa fa-user"
                                               theme={Theme.HIGHLIGHT}/>
                                </div>

                                <div className="field-group">
                                    <label className="text-field-label">Password</label>
                                    <TextField iconCls="fa fa-lock"
                                               type="password"
                                               theme={Theme.HIGHLIGHT}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="TextFieldGroup without label"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>TextFieldGroup</code>code> without <code>label</code> element and <code>disabled</code>
                                    props applied.</p>

                                <TextFieldGroup>

                                    <TextField iconCls="fa fa-user"/>

                                    <TextField iconCls="fa fa-lock"
                                               type="password"/>

                                </TextFieldGroup>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With pattern and patternInvalidMsg"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>TextField</code> with <code>pattern</code> and <code>patternInvalidMsg</code>
                                    applied.</p>

                                <div>Required</div>
                                <div className="field-group">
                                    <TextField required={true}/>
                                </div>

                                <div>Min / Max</div>
                                <div className="field-group">
                                    <TextField type="number"
                                               fieldMsgVisible={false}
                                               min={0}
                                               max={100}/>
                                </div>

                                <div>Pattern</div>
                                <div className="field-group">
                                    <TextField pattern={/^[abc]*$/}
                                               patternInvalidMsg="Only a, b, c is allowed."/>
                                </div>

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