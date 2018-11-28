import React, {Component} from 'react';

import RaisedButton from 'src/RaisedButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/RaisedButton.json';

import 'scss/containers/app/modules/buttons/RaisedButtonExamples.scss';

class RaisedButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example raised-button-examples">

                <h2 className="example-title">Raised Button</h2>

                <p>
                    <span>Raised Button</span>
                    is used to add dimension to mostly flat layouts and emphasizes important
                    functions on your page.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Raised Button</code> with default theme, <code>success</code>
                                    , <code>warning</code>, <code>error</code> and <code>disabled</code> props applied.
                                </p>

                                <RaisedButton value="Default"
                                              tip="Default"/>

                                <RaisedButton value="Primary"
                                              tip="Primary"
                                              theme={RaisedButton.Theme.PRIMARY}/>

                                <RaisedButton value="Secondary"
                                              tip="Secondary"
                                              theme={RaisedButton.Theme.SECONDARY}/>

                                <RaisedButton value="Highlight"
                                              tip="Highlight"
                                              theme={RaisedButton.Theme.HIGHLIGHT}/>

                                <RaisedButton value="Info"
                                              tip="Info"
                                              theme={RaisedButton.Theme.INFO}/>

                                <RaisedButton value="Success"
                                              tip="Success"
                                              theme={RaisedButton.Theme.SUCCESS}/>

                                <RaisedButton value="Warning"
                                              tip="Warning"
                                              theme={RaisedButton.Theme.WARNING}/>

                                <RaisedButton value="Error"
                                              tip="Error"
                                              theme={RaisedButton.Theme.ERROR}/>

                                <RaisedButton value="Disabled"
                                              tip="Disabled"
                                              disabled={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With border radius"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Set the <code>isRounded</code> property to true for button round corner.
                                </p>

                                <RaisedButton value="Default"
                                              isRounded={true}/>

                                <RaisedButton value="Primary"
                                              theme={RaisedButton.Theme.PRIMARY}
                                              isRounded={true}/>

                                <RaisedButton value="Secondary"
                                              theme={RaisedButton.Theme.SECONDARY}
                                              isRounded={true}/>

                                <RaisedButton value="Highlight"
                                              theme={RaisedButton.Theme.HIGHLIGHT}
                                              isRounded={true}/>

                                <RaisedButton value="Info"
                                              theme={RaisedButton.Theme.INFO}
                                              isRounded={true}/>

                                <RaisedButton value="Success"
                                              theme={RaisedButton.Theme.SUCCESS}
                                              isRounded={true}/>

                                <RaisedButton value="Warning"
                                              theme={RaisedButton.Theme.WARNING}
                                              isRounded={true}/>

                                <RaisedButton value="Error"
                                              theme={RaisedButton.Theme.ERROR}
                                              isRounded={true}/>

                                <RaisedButton value="Disabled"
                                              disabled={true}
                                              isRounded={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With icon"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>iconCls</code> property for button left icon. And set the
                                    <code>rightIconCls</code> property for button right icon.</p>

                                <RaisedButton value="Reset"
                                              iconCls="fas fa-undo"/>

                                <RaisedButton value="Add"
                                              theme={RaisedButton.Theme.SUCCESS}
                                              iconCls="fas fa-plus"/>

                                <RaisedButton value="Delete"
                                              theme={RaisedButton.Theme.ERROR}
                                              iconCls="fas fa-trash-alt"/>

                                <RaisedButton value="Next"
                                              theme={RaisedButton.Theme.PRIMARY}
                                              rightIconCls="fas fa-angle-right"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Use circle shape"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>isCircular</code> property to true for circle shape raised button.</p>

                                <RaisedButton value="Reset"
                                              isCircular={true}/>

                                <RaisedButton value="Add"
                                              theme={RaisedButton.Theme.SUCCESS}
                                              isCircular={true}/>

                                <RaisedButton value="Delete"
                                              theme={RaisedButton.Theme.ERROR}
                                              isCircular={true}/>

                                <RaisedButton value="Next"
                                              theme={RaisedButton.Theme.PRIMARY}
                                              isCircular={true}/>

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

export default RaisedButtonExamples;
