import React, {Component} from 'react';

import RadioGroup from 'src/RadioGroup';
import TextField from 'src/TextField';
import RaisedButton from 'src/RaisedButton';
import Toaster from 'src/Toaster';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Toast.json';

import 'sass/containers/app/modules/message/ToastExamples.scss';

export default class ToastExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            type: Toaster.Type.INFO,
            position: Toaster.Position.BOTTOM_RIGHT,
            message: 'Message',
            toasts: []
        };

        this.Type = Object.keys(Toaster.Type).map(item => ({
            label: item,
            value: Toaster.Type[item]
        }));

        this.ToasterPosition = Object.keys(Toaster.Position).map(item => ({
            label: item,
            value: Toaster.Position[item]
        }));

        this.updateField = ::this.updateField;
        this.addToast = ::this.addToast;
        this.toastPopHandler = ::this.toastPopHandler;

    }

    updateField(key, value) {
        let state = {};
        state[key] = value;
        this.setState(state);
    }

    addToast() {

        const {type, message, toasts} = this.state;

        toasts.push({
            type,
            message
        });

        this.setState({
            toasts
        });

    }

    toastPopHandler() {
        this.setState({
            toasts: []
        });
    }

    render() {

        const {type, position, title, message, toasts} = this.state;

        return (
            <div className="example toast-examples">

                <h2 className="example-title">Toast</h2>

                <p>
                    <span>Toast</span> is a global display notification alert information .
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <div className="field-group">
                                    <label className="text-field-label">Type</label>
                                    <RadioGroup data={this.Type}
                                                value={type}
                                                onChange={(value) => {
                                                    this.updateField('type', value);
                                                }}/>
                                </div>

                                <div className="field-group">
                                    <label className="text-field-label">Position</label>
                                    <RadioGroup data={this.ToasterPosition}
                                                value={position}
                                                onChange={(value) => {
                                                    this.updateField('position', value);
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
                                              theme={RaisedButton.Theme.PRIMARY}
                                              value="Show Toast"
                                              style={{width: '120px'}}
                                              onTouchTap={this.addToast}/>

                                <Toaster toasts={toasts}
                                         position={position}
                                         onToastPop={this.toastPopHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};