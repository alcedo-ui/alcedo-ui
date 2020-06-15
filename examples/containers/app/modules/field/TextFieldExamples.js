import React, {Component} from 'react';

import TextField from 'src/TextField';
import TextFieldGroup from 'src/TextFieldGroup';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/TextField.json';

import 'scss/containers/app/modules/field/TextFieldExamples.scss';

class TextFieldExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: {},
            TextFieldVisible: {}
        };

    }

    show = id => {

        const {TextFieldVisible} = this.state;

        TextFieldVisible[id] = true;

        this.setState({
            TextFieldVisible
        });

    };

    hide = id => {

        const {TextFieldVisible} = this.state;

        TextFieldVisible[id] = false;

        this.setState({
            TextFieldVisible
        });

    };

    changeHandler = (v, index) => {

        const {value} = this.state;
        value[index] = v;

        this.setState({
            value
        }, () => {
            console.log('value changed::', v);
        });

    };

    render() {

        const {value, TextFieldVisible} = this.state;

        return (
            <div className="example text-field-examples">

                <h2 className="example-title">TextField</h2>

                <p>
                    <span>TextField</span>
                    allow users to input text.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With type"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>TextField</code> using the
                                    <code>type</code> property to set the type of input to display such
                                                           as &quot;password&quot; or &quot;text&quot;.
                                </p>

                                <div className="field-group">
                                    <label className="text-field-label">Default</label>
                                    <TextField value={value[0] || ''}
                                               maxLength={20}
                                               onChange={v => this.changeHandler(v, 0)}/>
                                </div>

                                <div className="field-group">
                                    <label className="text-field-label">Password</label>
                                    <TextField type="password"
                                               rightIconCls={'fas fa-lock'}
                                               value={value[1] || ''}
                                               onChange={v => this.changeHandler(v, 1)}/>
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

                                <p>
                                    <code>TextField</code> using the
                                    <code>rightIconCls</code> property to set a icon display at right.
                                </p>

                                <div className="field-group">
                                    <label className="text-field-label">Search</label>
                                    <TextField rightIconCls={'fas fa-search'}
                                               theme={TextField.Theme.PRIMARY}
                                               value={value[2] || ''}
                                               onRightIconClick={() => console.log('Search Icon Clicked.')}
                                               onChange={v => this.changeHandler(v, 2)}/>
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

                                <p>
                                    <code>TextField</code> using the
                                    <code>iconCls</code> property to set the icon of TextField to display at left.
                                </p>

                                <div className="field-group">
                                    <label className="text-field-label">Username</label>
                                    <TextField iconCls="fas fa-user"
                                               theme={TextField.Theme.HIGHLIGHT}
                                               value={value[3] || ''}
                                               onChange={v => this.changeHandler(v, 3)}/>
                                </div>

                                <div className="field-group">
                                    <label className="text-field-label">Password</label>
                                    <TextField iconCls="fas fa-lock"
                                               type="password"
                                               theme={TextField.Theme.HIGHLIGHT}
                                               value={value[4] || ''}
                                               onChange={v => this.changeHandler(v, 4)}/>
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

                                <p>
                                    <code>TextFieldGroup</code> without
                                    <code>label</code> element and
                                    <code>disabled</code> props applied.
                                </p>

                                <TextFieldGroup>

                                    <TextField iconCls="fas fa-user"
                                               placeholder="username"
                                               value={value[5] || ''}
                                               onChange={v => this.changeHandler(v, 5)}/>

                                    <TextField iconCls="fas fa-lock"
                                               type={TextField.Type.PASSWORD}
                                               placeholder="password"
                                               value={value[6] || ''}
                                               onChange={v => this.changeHandler(v, 6)}/>

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

                                <p>
                                    <code>TextField</code> with
                                    <code>pattern</code> and
                                    <code>patternInvalidMsg</code> applied.
                                </p>

                                <div>Required</div>
                                <div className="field-group">
                                    <TextField required={true}
                                               clearButtonVisible={false}
                                               fieldMsgVisible={true}
                                               value={value[7] || ''}
                                               onChange={v => this.changeHandler(v, 7)}/>
                                </div>

                                <div>NUMBER</div>
                                <div className="field-group">
                                    <TextField type={TextField.Type.NUMBER}
                                               fieldMsgVisible={true}
                                               value={value[8] || ''}
                                               onChange={v => this.changeHandler(v, 8)}/>
                                </div>

                                <div>Integer</div>
                                <div className="field-group">
                                    <TextField type={TextField.Type.INTEGER}
                                               fieldMsgVisible={true}
                                               value={value[9] || ''}
                                               onChange={v => this.changeHandler(v, 9)}/>
                                </div>

                                <div>Positive Integer</div>
                                <div className="field-group">
                                    <TextField type={TextField.Type.POSITIVE_INTEGER}
                                               fieldMsgVisible={true}
                                               value={value[10] || ''}
                                               onChange={v => this.changeHandler(v, 10)}/>
                                </div>

                                <div>Nonnegative Integer</div>
                                <div className="field-group">
                                    <TextField type={TextField.Type.NONNEGATIVE_INTEGER}
                                               fieldMsgVisible={true}
                                               value={value[11] || ''}
                                               onChange={v => this.changeHandler(v, 11)}/>
                                </div>

                                <div>Negative Integer</div>
                                <div className="field-group">
                                    <TextField type={TextField.Type.NEGATIVE_INTEGER}
                                               fieldMsgVisible={true}
                                               value={value[12] || ''}
                                               onChange={v => this.changeHandler(v, 12)}/>
                                </div>

                                <div>Nonpositive Integer</div>
                                <div className="field-group">
                                    <TextField type={TextField.Type.NONPOSITIVE_INTEGER}
                                               fieldMsgVisible={true}
                                               value={value[13] || ''}
                                               onChange={v => this.changeHandler(v, 13)}/>
                                </div>

                                <div>Min / Max</div>
                                <div className="field-group">
                                    <TextField type={TextField.Type.NUMBER}
                                               min={0}
                                               max={100}
                                               fieldMsgVisible={true}
                                               value={value[14] || ''}
                                               onChange={v => this.changeHandler(v, 14)}/>
                                </div>

                                <div>Self Defined Pattern (Only a, b, c is allowed)</div>
                                <div className="field-group">
                                    <TextField pattern={/^[abc]*$/}
                                               patternInvalidMsg="Only a, b, c is allowed"
                                               fieldMsgVisible={true}
                                               value={value[15] || ''}
                                               onChange={v => this.changeHandler(v, 15)}/>
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
                                               disabled={true}
                                               onChange={v => this.changeHandler(v, 16)}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Valid In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>TextField</code> with
                                    <code>pattern</code> and
                                    <code>patternInvalidMsg</code> applied.
                                </p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={TextFieldVisible[1]}
                                        onRequestClose={() => this.hide(1)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <div>Required</div>
                                                <div className="field-group">
                                                    <TextField required={true}
                                                               clearButtonVisible={false}
                                                               fieldMsgVisible={true}
                                                               value={value[7] || ''}
                                                               parentEl={dialogContentEl}
                                                               onChange={v => this.changeHandler(v, 7)}/>
                                                </div>

                                                <div>NUMBER</div>
                                                <div className="field-group">
                                                    <TextField type={TextField.Type.NUMBER}
                                                               fieldMsgVisible={true}
                                                               value={value[8] || ''}
                                                               parentEl={dialogContentEl}
                                                               onChange={v => this.changeHandler(v, 8)}/>
                                                </div>

                                                <div>Integer</div>
                                                <div className="field-group">
                                                    <TextField type={TextField.Type.INTEGER}
                                                               fieldMsgVisible={true}
                                                               value={value[9] || ''}
                                                               parentEl={dialogContentEl}
                                                               onChange={v => this.changeHandler(v, 9)}/>
                                                </div>

                                                <div>Positive Integer</div>
                                                <div className="field-group">
                                                    <TextField type={TextField.Type.POSITIVE_INTEGER}
                                                               fieldMsgVisible={true}
                                                               value={value[10] || ''}
                                                               parentEl={dialogContentEl}
                                                               onChange={v => this.changeHandler(v, 10)}/>
                                                </div>

                                                <div>Nonnegative Integer</div>
                                                <div className="field-group">
                                                    <TextField type={TextField.Type.NONNEGATIVE_INTEGER}
                                                               fieldMsgVisible={true}
                                                               value={value[11] || ''}
                                                               parentEl={dialogContentEl}
                                                               onChange={v => this.changeHandler(v, 11)}/>
                                                </div>

                                                <div>Negative Integer</div>
                                                <div className="field-group">
                                                    <TextField type={TextField.Type.NEGATIVE_INTEGER}
                                                               fieldMsgVisible={true}
                                                               value={value[12] || ''}
                                                               parentEl={dialogContentEl}
                                                               onChange={v => this.changeHandler(v, 12)}/>
                                                </div>

                                                <div>Nonpositive Integer</div>
                                                <div className="field-group">
                                                    <TextField type={TextField.Type.NONPOSITIVE_INTEGER}
                                                               fieldMsgVisible={true}
                                                               value={value[13] || ''}
                                                               parentEl={dialogContentEl}
                                                               onChange={v => this.changeHandler(v, 13)}/>
                                                </div>

                                                <div>Min / Max</div>
                                                <div className="field-group">
                                                    <TextField type={TextField.Type.NUMBER}
                                                               min={0}
                                                               max={100}
                                                               fieldMsgVisible={true}
                                                               value={value[14] || ''}
                                                               parentEl={dialogContentEl}
                                                               onChange={v => this.changeHandler(v, 14)}/>
                                                </div>

                                                <div>Self Defined Pattern (Only a, b, c is allowed)</div>
                                                <div className="field-group">
                                                    <TextField pattern={/^[abc]*$/}
                                                               patternInvalidMsg="Only a, b, c is allowed"
                                                               fieldMsgVisible={true}
                                                               value={value[15] || ''}
                                                               parentEl={dialogContentEl}
                                                               onChange={v => this.changeHandler(v, 15)}/>
                                                </div>
                                            </div>
                                    }

                                </Dialog>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
}

export default TextFieldExamples;
