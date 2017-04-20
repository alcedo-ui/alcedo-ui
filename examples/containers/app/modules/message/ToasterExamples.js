import React, {Component} from 'react';

import RadioGroup from 'dist/RadioGroup';
import TextField from 'dist/TextField';
import RaisedButton from 'dist/RaisedButton';
import Toaster from 'dist/Toaster';
import Theme from 'dist/Theme';

import 'sass/containers/app/modules/message/ToasterExamples.scss';

export default class ToasterExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            type: '',
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

        const {type, title, message} = this.state;

        this.refs.toaster.addToast({
            type,
            title,
            message
        });

    }

    render() {

        const {type, title, message} = this.state;

        return (
            <div className="example toaster-examples">

                <div className="examples">
                    <div className="examples-title">Toaster</div>
                    <div className="examples-wrapper">

                        <div className="field-group">
                            <label className="text-field-label">Type</label>
                            <RadioGroup data={[{
                                label: 'Default',
                                value: ''
                            }, {
                                label: 'Success',
                                value: 'success'
                            }, {
                                label: 'Warning',
                                value: 'warning'
                            }, {
                                label: 'Error',
                                value: 'error'
                            }]}
                                        value={type}
                                        onChange={(value) => {
                                            this.updateField('type', value);
                                        }}/>
                        </div>

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

                        <RaisedButton className="show-toast-button"
                                      value="Show Toaster"
                                      buttonStyle={Theme.PRIMARY}
                                      onTouchTap={this.addToast}/>

                        <Toaster ref="toaster"/>

                    </div>
                </div>

            </div>
        );
    }
};