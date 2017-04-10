import React, {Component} from 'react';

import FlatButton from 'dist/FlatButton';

import 'sass/containers/app/modules/buttons/FlatButtonExamples.scss';

export default class FlatButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example flat-button-examples">

                <div className="examples">
                    <div className="examples-title">Button Style</div>
                    <div className="examples-wrapper">

                        <FlatButton value="Default"/>

                        <FlatButton value="Primary"
                                    buttonStyle="primary"/>

                        <FlatButton value="Success"
                                    buttonStyle="success"/>

                        <FlatButton value="Warning"
                                    buttonStyle="warning"/>

                        <FlatButton value="Error"
                                    buttonStyle="error"/>

                        <FlatButton value="Disabled"
                                    disabled={true}/>

                    </div>
                </div>

                <div className="examples">
                    <div className="examples-title">Rounded Button</div>
                    <div className="examples-wrapper">

                        <FlatButton value="Default"
                                    rounded={true}/>

                        <FlatButton value="Primary"
                                    buttonStyle="primary"
                                    rounded={true}/>

                        <FlatButton value="Success"
                                    buttonStyle="success"
                                    rounded={true}/>

                        <FlatButton value="Warning"
                                    buttonStyle="warning"
                                    rounded={true}/>

                        <FlatButton value="Error"
                                    buttonStyle="error"
                                    rounded={true}/>

                        <FlatButton value="Disabled"
                                    disabled={true}
                                    rounded={true}/>

                    </div>
                </div>

                <div className="examples">
                    <div className="examples-title">Button with Icon</div>
                    <div className="examples-wrapper">

                        <FlatButton value="Reset"
                                    iconCls="fa fa-undo"/>

                        <FlatButton value="Add"
                                    buttonStyle="success"
                                    iconCls="fa fa-plus"/>

                        <FlatButton value="Delete"
                                    buttonStyle="error"
                                    iconCls="fa fa-trash"/>

                        <FlatButton value="Next"
                                    buttonStyle="primary"
                                    iconCls="fa fa-chevron-right"
                                    iconPosition="right"/>

                    </div>
                </div>

            </div>
        );
    }
};