import React, {Component} from 'react';

import FlatButton from 'dist/FlatButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import FlatButtonDoc from 'assets/propTypes/FlatButton.json';

import 'sass/containers/app/modules/buttons/FlatButtonExamples.scss';

export default class FlatButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example flat-button-examples">

                <h2 className="example-title">Flat Button</h2>

                <p>
                    <span>Flat Button</span> are used for general functions and reduce the amount of layering on the
                    screen, making it more readable.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Flat Button</code> with default theme,<code>success</code>,<code>warning</code>
                                    ,<code>error</code> and <code>disabled</code> props applied.</p>

                                <FlatButton value="Default"/>

                                <FlatButton value="Primary"
                                            theme="primary"/>

                                <FlatButton value="Success"
                                            theme="success"/>

                                <FlatButton value="Warning"
                                            theme="warning"/>

                                <FlatButton value="Error"
                                            theme="error"/>

                                <FlatButton value="Disabled"

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

                                <p>Set the <code>isRounded</code> property to true for button round corner.</p>

                                <FlatButton value="Default"
                                            isRounded={true}/>

                                <FlatButton value="Primary"
                                            theme="primary"
                                            isRounded={true}/>

                                <FlatButton value="Success"
                                            theme="success"
                                            isRounded={true}/>

                                <FlatButton value="Warning"
                                            theme="warning"
                                            isRounded={true}/>

                                <FlatButton value="Error"
                                            theme="error"
                                            isRounded={true}/>

                                <FlatButton value="Disabled"
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

                                <FlatButton value="Reset"
                                            iconCls="fa fa-undo"/>

                                <FlatButton value="Add"
                                            theme="success"
                                            iconCls="fa fa-plus"/>

                                <FlatButton value="Delete"
                                            theme="error"
                                            iconCls="fa fa-trash"/>

                                <FlatButton value="Next"
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

                                <p>Set the <code>isCircular</code> property to true for circle shape flat button.</p>

                                <FlatButton value="Primary"
                                            isCircular={true}/>

                                <FlatButton value="Success"
                                            theme="success"
                                            isCircular={true}/>

                                <FlatButton value="Error"
                                            theme="error"
                                            isCircular={true}/>

                                <FlatButton value="Warning"
                                            theme="warning"
                                            isCircular={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={FlatButtonDoc}/>

            </div>
        );
    }
};