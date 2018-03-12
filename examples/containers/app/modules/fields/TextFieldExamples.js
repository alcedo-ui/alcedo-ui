import React, {Component} from 'react';

import TextField from 'src/TextField';
import TextFieldGroup from 'src/TextFieldGroup';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/TextField.json';

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
                                    <TextField type="password"
                                               rightIconCls={'fas fa-lock'}/>
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
                                    <TextField rightIconCls={'fas fa-search'}
                                               theme={TextField.Theme.PRIMARY}
                                               onRightIconTouchTap={() => {
                                                   console.log('Search Icon Clicked.');
                                               }}/>
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
                                    <TextField iconCls="fas fa-user"
                                               theme={TextField.Theme.HIGHLIGHT}/>
                                </div>

                                <div className="field-group">
                                    <label className="text-field-label">Password</label>
                                    <TextField iconCls="fas fa-lock"
                                               type="password"
                                               theme={TextField.Theme.HIGHLIGHT}/>
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

                                <p><code>TextFieldGroup</code>code> without <code>label</code> element
                                    and <code>disabled</code>
                                    props applied.</p>

                                <TextFieldGroup>

                                    <TextField iconCls="fas fa-user"
                                               placeholder="username"/>

                                    <TextField iconCls="fas fa-lock"
                                               type={TextField.Type.PASSWORD}
                                               placeholder="password"/>

                                </TextFieldGroup>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Valid"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>TextField</code> with <code>pattern</code> and <code>patternInvalidMsg</code>
                                    applied.</p>

                                <div>Required</div>
                                <div className="field-group">
                                    <TextField required={true}
                                               clearButtonVisible={false}
                                               fieldMsgVisible={true}/>
                                </div>

                                <div>NUMBER</div>
                                <div className="field-group">
                                    <TextField type={TextField.Type.NUMBER}
                                               fieldMsgVisible={true}/>
                                </div>

                                <div>Integer</div>
                                <div className="field-group">
                                    <TextField type={TextField.Type.INTEGER}
                                               fieldMsgVisible={true}/>
                                </div>

                                <div>Positive Integer</div>
                                <div className="field-group">
                                    <TextField type={TextField.Type.POSITIVE_INTEGER}
                                               fieldMsgVisible={true}/>
                                </div>

                                <div>Nonnegative Integer</div>
                                <div className="field-group">
                                    <TextField type={TextField.Type.NONNEGATIVE_INTEGER}
                                               fieldMsgVisible={true}/>
                                </div>

                                <div>Negative Integer</div>
                                <div className="field-group">
                                    <TextField type={TextField.Type.NEGATIVE_INTEGER}
                                               fieldMsgVisible={true}/>
                                </div>

                                <div>Nonpositive Integer</div>
                                <div className="field-group">
                                    <TextField type={TextField.Type.NONPOSITIVE_INTEGER}
                                               fieldMsgVisible={true}/>
                                </div>

                                <div>Min / Max</div>
                                <div className="field-group">
                                    <TextField type={TextField.Type.NUMBER}
                                               min={0}
                                               max={100}
                                               fieldMsgVisible={true}/>
                                </div>

                                <div>Pattern (Only a, b, c is allowed)</div>
                                <div className="field-group">
                                    <TextField pattern={/^[abc]*$/}
                                               patternInvalidMsg="Only a, b, c is allowed"
                                               fieldMsgVisible={true}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Disabled"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <div className="field-group">
                                    <TextField rightIconCls={'fas fa-search'}
                                               value="Disabled"
                                               theme={TextField.Theme.PRIMARY}
                                               disabled={true}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};