import React, {Component} from 'react';

import RaisedButton from 'dist/RaisedButton';

import 'sass/containers/app/modules/buttons/RaisedButtonExamples.scss';

export default class RaisedButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example raised-button-examples">

                <div className="examples">
                    <div className="examples-title">Button Style</div>
                    <div className="examples-wrapper">

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

                <div className="examples">
                    <div className="examples-title">Rounded Button</div>
                    <div className="examples-wrapper">

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

                <div className="examples">
                    <div className="examples-title">Button with Icon</div>
                    <div className="examples-wrapper">

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