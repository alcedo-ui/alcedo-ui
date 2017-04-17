import React, {Component} from 'react';

import TextField from 'dist/TextField';
import RaisedButton from 'dist/RaisedButton';
import Toaster from 'dist/Toaster';

import 'sass/containers/app/modules/message/ToasterExamples.scss';

export default class ToasterExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            title: 'Title',
            message: 'Message'
        };

        this.updateField = this::this.updateField;
        this.addToast = this::this.addToast;

    }

    updateField(key, value) {
        let state = {};
        state[key] = value;
        this.setState(state);
    }

    addToast() {

        const {title, message} = this.state;

        this.refs.toaster.addToast({
            title,
            message
        });

    }

    render() {

        const {title, message} = this.state;

        return (
            <div className="example toaster-examples">

                <div className="examples">
                    <div className="examples-title">Toaster</div>
                    <div className="examples-wrapper">

                        <div className="field-group">
                            <label className="text-field-label">Title</label>
                            <TextField value={title}
                                       onChange={(value) => {
                                           this.updateField('title', value);
                                       }}/>
                        </div>

                        <div className="field-group">
                            <label className="text-field-label">Message</label>
                            <TextField value={message}
                                       onChange={(value) => {
                                           this.updateField('message', value);
                                       }}/>
                        </div>

                        <RaisedButton value="Show Toaster"
                                      buttonStyle={RaisedButton.buttonStyle.PRIMARY}
                                      onTouchTap={this.addToast}/>

                        <Toaster ref="toaster"/>

                    </div>
                </div>

            </div>
        );
    }
};