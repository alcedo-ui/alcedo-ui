import React, {Component} from 'react';

import RadioGroup from 'src/RadioGroup';
import TextField from 'src/TextField';
import RaisedButton from 'src/RaisedButton';
import Notifier from 'src/Notifier';
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
            type: Notifier.NotificationType.INFO,
            position: Notifier.Position.BOTTOM_RIGHT,
            title: 'Title',
            message: 'Message',
            notifications: []
        };

        this.notificationType = Object.keys(Notifier.NotificationType).map(item => ({
            label: item,
            value: Notifier.NotificationType[item]
        }));

        this.notificationPosition = Object.keys(Notifier.Position).map(item => ({
            label: item,
            value: Notifier.Position[item]
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

        let notifications = this.state.notifications;
        notifications.push({
            type,
            title,
            message
        });

        this.setState({
            notifications
        });

    }

    notificationPopHandler() {
        this.setState({
            notifications: []
        });
    }

    render() {

        const {type, position, title, message, notifications} = this.state;

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
                                    <RadioGroup data={this.notificationType}
                                                value={type}
                                                onChange={(value) => {
                                                    this.updateField('type', value);
                                                }}/>
                                </div>

                                <div className="field-group">
                                    <label className="text-field-label">Position</label>
                                    <RadioGroup data={this.notificationPosition}
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

                                <RaisedButton className="show-notification-button"
                                              theme={Theme.PRIMARY}
                                              value="Show Notification"
                                              onTouchTap={this.addNotification}/>

                                <Notifier notifications={notifications}
                                          position={position}
                                          onNotificationPop={this.notificationPopHandler}/>

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