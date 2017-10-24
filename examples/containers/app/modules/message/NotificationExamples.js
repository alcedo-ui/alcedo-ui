import React, {Component} from 'react';

import RadioGroup from 'src/RadioGroup';
import TextField from 'src/TextField';
import RaisedButton from 'src/RaisedButton';
import Toaster from 'src/Toaster';
import Theme from 'src/Theme';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import NotificationDoc from 'assets/propTypes/Notification.json';

import 'sass/containers/app/modules/message/NotificationExamples.scss';

export default class NotificationExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            type: Toaster.ToastType.INFO,
            position: Toaster.Position.BOTTOM_RIGHT,
            title: 'Title',
            message: 'Message',
            toasts: []
        };

        this.ToastType = Object.keys(Toaster.ToastType).map(item => ({
            label: item,
            value: Toaster.ToastType[item]
        }));

        this.ToasterPosition = Object.keys(Toaster.Position).map(item => ({
            label: item,
            value: Toaster.Position[item]
        }));

        this.updateField = this::this.updateField;
        this.addNotification = this::this.addNotification;
        this.notificationPopHandler = this::this.notificationPopHandler;

    }

    updateField(key, value) {
        let state = {};
        state[key] = value;
        this.setState(state);
    }

    addNotification() {

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

    notificationPopHandler() {
        this.setState({
            toasts: []
        });
    }

    render() {

        const {type, position, title, message, toasts} = this.state;

        return (
            <div className="example notification-examples">

                <h2 className="example-title">Notification</h2>

                <p>
                    <span>Notification</span> is a global display notification alert information .
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <div className="field-group">
                                    <label className="text-field-label">Type</label>
                                    <RadioGroup data={this.ToastType}
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
                                              value="Show Notification"
                                              style={{width: '120px'}}
                                              onTouchTap={this.addNotification}/>

                                <Toaster toasts={toasts}
                                         position={position}
                                         onToastPop={this.notificationPopHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget>


                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={NotificationDoc}/>

            </div>
        );
    }
};