import React, {Component} from 'react';

import RadioGroup from 'src/RadioGroup';
import TextField from 'src/TextField';
import RaisedButton from 'src/RaisedButton';
import Toaster from 'src/Toaster';
import Theme from 'src/Theme';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import ToasterDoc from 'assets/propTypes/Toaster.json';

import 'sass/containers/app/modules/message/ToasterExamples.scss';

export default class ToasterExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            type: Toaster.ToastType[Object.keys(Toaster.ToastType)[0]],
            title: 'Title',
            message: 'Message',
            toasts: []
        };

        this.ToastType = Object.keys(Toaster.ToastType).map(item => ({
            label: item,
            value: Toaster.ToastType[item]
        }));

        this.updateField = this::this.updateField;
        this.addToast = this::this.addToast;
        this.toastPopHandle = this::this.toastPopHandle;

    }

    updateField(key, value) {
        let state = {};
        state[key] = value;
        this.setState(state);
    }

    addToast() {

        const {type, title, message} = this.state;

        let toasts = this.state.toasts;
        toasts.push({
            type,
            title,
            message
        });

        this.setState({
            toasts
        });

    }

    toastPopHandle() {
        this.setState({
            toasts: []
        });
    }

    render() {

        const {type, title, message, toasts} = this.state;

        return (
            <div className="example toaster-examples">

                <h2 className="example-title">Toaster</h2>

                <p>
                    <span>Toaster</span> is a global display notification alert information .
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Toaster</code> example with RadioGroup and TextField.You can select different
                                    radio button to show different theme toaster,also input different title and message
                                    to use this component.</p>

                                <div className="field-group">
                                    <label className="text-field-label">Type</label>
                                    <RadioGroup data={this.ToastType}
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
                                              theme={Theme.PRIMARY}
                                              value="Show Toaster"
                                              style={{width: '120px'}}
                                              onTouchTap={this.addToast}/>

                                <Toaster toasts={toasts}
                                         position={Toaster.Position.TOP}
                                         onToastPop={this.toastPopHandle}/>

                            </div>

                        </div>
                    </div>

                </Widget>


                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={ToasterDoc}/>

            </div>
        );
    }
};