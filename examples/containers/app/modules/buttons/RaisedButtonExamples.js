import React, {Component} from 'react';

import RaisedButton from 'dist/RaisedButton/RaisedButton';

import 'sass/containers/app/modules/buttons/RaisedButtonExamples.scss';

export default class RaisedButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="raised-button-examples">

                <div className="button-group-wrapper">
                    <div className="button-group-title">buttons</div>
                    <div className="button-group">

                        <RaisedButton value="Default"/>

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


            </div>
        );
    }
};