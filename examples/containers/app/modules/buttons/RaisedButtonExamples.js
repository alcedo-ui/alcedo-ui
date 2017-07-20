import React, {Component} from 'react';

import RaisedButton from 'dist/RaisedButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import RaisedButtonDoc from 'assets/propTypes/RaisedButton.json';

import 'sass/containers/app/modules/buttons/RaisedButtonExamples.scss';

export default class RaisedButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example raised-button-examples">

                <h2 className="example-title">Raised Button</h2>

                <p>
                    <span>Raised Button</span> is used to add dimension to mostly flat layouts and emphasizes important
                    functions on your page.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Raised Button</code> with default theme,<code>success</code>,
                                    <code>warning</code>,<code>error</code> and <code>disabled</code> props applied.
                                </p>

                                <RaisedButton value="Default"/>

                                <RaisedButton value="Primary"
                                              theme="primary"/>

                                <RaisedButton value="Success"
                                              theme="success"/>

                                <RaisedButton value="Warning"
                                              theme="warning"/>

                                <RaisedButton value="Error"
                                              theme="error"/>

                                <RaisedButton value="Disabled"
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
                                              theme="primary"
                                              isRounded={true}/>

                                <RaisedButton value="Success"
                                              theme="success"
                                              isRounded={true}/>

                                <RaisedButton value="Warning"
                                              theme="warning"
                                              isRounded={true}/>

                                <RaisedButton value="Error"
                                              theme="error"
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

                                <p>Set the <code>iconCls</code> property for button left icon.And set the
                                    <code>rightIconCls</code> property for button right icon.</p>

                                <RaisedButton value="Reset"
                                              iconCls="fa fa-undo"/>

                                <RaisedButton value="Add"
                                              theme="success"
                                              iconCls="fa fa-plus"/>

                                <RaisedButton value="Delete"
                                              theme="error"
                                              iconCls="fa fa-trash"/>

                                <RaisedButton value="Next"
                                              theme="primary"
                                              rightIconCls="fa fa-chevron-right"/>

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
                                              theme="success"
                                              isCircular={true}/>

                                <RaisedButton value="Delete"
                                              theme="error"
                                              isCircular={true}/>

                                <RaisedButton value="Next"
                                              theme="primary"
                                              isCircular={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={RaisedButtonDoc}/>

            </div>
        );
    }
};