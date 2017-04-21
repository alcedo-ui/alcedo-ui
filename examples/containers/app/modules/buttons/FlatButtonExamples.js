import React, {Component} from 'react';

import FlatButton from 'dist/FlatButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import FlatButtonDoc from 'docs/FlatButton.json';

import 'sass/containers/app/modules/buttons/FlatButtonExamples.scss';

export default class FlatButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example flat-button-examples">

                <h2 className="example-title">Flat Button</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Flat Button Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

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

                    <WidgetHeader className="example-header" title="Flat Button Rounded Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

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

                    <WidgetHeader className="example-header" title="Flat Button with Icon Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

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

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={FlatButtonDoc}/>

            </div>
        );
    }
};