import React, {Component} from 'react';

import RaisedButton from 'dist/RaisedButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import RaisedButtonDco from 'docs/RaisedButton.json';

import 'sass/containers/app/modules/buttons/RaisedButtonExamples.scss';

export default class RaisedButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example raised-button-example">

                <h2 className="example-title">Raised Button</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Raised Button Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

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

                    <WidgetHeader className="example-header" title="Raised Button Rounded Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

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

                    <WidgetHeader className="example-header" title="Raised Button with Icon Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

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

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={RaisedButtonDco}/>

            </div>
        );
    }
};