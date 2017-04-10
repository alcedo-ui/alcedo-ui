import React, {Component} from 'react';

import RaisedButton from 'dist/RaisedButton';

import 'sass/containers/app/modules/buttons/RaisedButtonExamples';

export default class RaisedButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="raised-button-examples">

                <div className="button-group-wrapper">
                    <div className="button-group-title">Button Style</div>
                    <div className="button-group">

                        <RaisedButton value="Default"/>

                        <RaisedButton value="Primary"
                                      buttonStyle="primary"/>

                        <RaisedButton value="Success"
                                      buttonStyle="success"/>

                        <RaisedButton value="Warning"
                                      buttonStyle="warning"/>

                        <RaisedButton value="Error"
                                      buttonStyle="error"/>

                        <RaisedButton value="Disabled"
                                      disabled={true}/>

                    </div>
                </div>

                <div className="button-group-wrapper">
                    <div className="button-group-title">Rounded Button</div>
                    <div className="button-group">

                        <RaisedButton value="Default"
                                      rounded={true}/>

                        <RaisedButton value="Primary"
                                      buttonStyle="primary"
                                      rounded={true}/>

                        <RaisedButton value="Success"
                                      buttonStyle="success"
                                      rounded={true}/>

                        <RaisedButton value="Warning"
                                      buttonStyle="warning"
                                      rounded={true}/>

                        <RaisedButton value="Error"
                                      buttonStyle="error"
                                      rounded={true}/>

                        <RaisedButton value="Disabled"
                                      disabled={true}
                                      rounded={true}/>

                    </div>
                </div>

                <div className="button-group-wrapper">
                    <div className="button-group-title">Button Icon</div>
                    <div className="button-group">

                        <RaisedButton value="Reset"
                                      iconCls="fa fa-undo"/>

                        <RaisedButton value="Add"
                                      buttonStyle="success"
                                      iconCls="fa fa-plus"/>

                        <RaisedButton value="Delete"
                                      buttonStyle="error"
                                      iconCls="fa fa-trash"/>

                        <RaisedButton value="Next"
                                      buttonStyle="primary"
                                      iconCls="fa fa-chevron-right"
                                      iconPosition="right"/>

                    </div>
                </div>

            </div>
        );
    }
};