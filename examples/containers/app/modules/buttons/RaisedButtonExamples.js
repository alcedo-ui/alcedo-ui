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

                <div className="examples">
                    <div className="examples-title">Rounded Button</div>
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

                <div className="examples">
                    <div className="examples-title">Button with Icon</div>
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
        );
    }
};