import React, {Component} from 'react';

import RaisedButton from 'src/RaisedButton';
import Notifier from 'src/Notifier';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import MaterialProvider from 'src/MaterialProvider';
import ButtonRadioGroup from 'src/ButtonRadioGroup';
import MaterialTextField from 'src/MaterialTextField';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Notification.json';

import 'sass/containers/app/modules/pop/PopExamples.scss';
import 'sass/containers/app/modules/pop/NotificationExamples.scss';

export default class NotificationExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            type: Notifier.Type.INFO,
            position: Notifier.Position.BOTTOM_RIGHT,
            title: 'Title',
            message: 'Message',
            notifications: []
        };

        this.Type = Object.keys(Notifier.Type).map(item => ({
            className: `type-${item.toLowerCase()}`,
            iconCls: 'fas fa-check',
            label: item,
            value: Notifier.Type[item]
        }));

        this.notificationPosition = Object.keys(Notifier.Position).map(item => ({
            label: item,
            value: Notifier.Position[item]
        }));

        this.updateField = ::this.updateField;
        this.addNotification = ::this.addNotification;
        this.notificationPopHandler = ::this.notificationPopHandler;

    }

    updateField(key, value) {
        let state = {};
        state[key] = value;
        this.setState(state);
    }

    addNotification(position) {

        const {type, title, message, notifications} = this.state;

        notifications.push({
            type,
            title,
            message
        });

        this.setState({
            notifications,
            position
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
            <div className="example pop-examples notification-examples">

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

                                <ButtonRadioGroup data={this.Type}
                                                  value={type}
                                                  onChange={value => {
                                                      this.updateField('type', value);
                                                  }}/>

                                <MaterialTextField theme={MaterialTextField.Theme.HIGHLIGHT}
                                                   value={title}
                                                   onChange={value => {
                                                       this.updateField('title', value);
                                                   }}/>

                                <MaterialTextField theme={MaterialTextField.Theme.HIGHLIGHT}
                                                   value={message}
                                                   onChange={value => {
                                                       this.updateField('message', value);
                                                   }}/>

                                <div className="button-group-wrapper">

                                    <div className="button-group top">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top Left"
                                                      onTouchTap={() => {
                                                          this.addNotification(Notifier.Position.TOP_LEFT);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top"
                                                      onTouchTap={() => {
                                                          this.addNotification(Notifier.Position.TOP);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top right"
                                                      onTouchTap={() => {
                                                          this.addNotification(Notifier.Position.TOP_RIGHT);
                                                      }}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Top"
                                                      onTouchTap={() => {
                                                          this.addNotification(Notifier.Position.RIGHT_TOP);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right"
                                                      onTouchTap={() => {
                                                          this.addNotification(Notifier.Position.RIGHT);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onTouchTap={() => {
                                                          this.addNotification(Notifier.Position.RIGHT_BOTTOM);
                                                      }}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onTouchTap={() => {
                                                          this.addNotification(Notifier.Position.BOTTOM_LEFT);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom"
                                                      onTouchTap={() => {
                                                          this.addNotification(Notifier.Position.BOTTOM);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onTouchTap={() => {
                                                          this.addNotification(Notifier.Position.BOTTOM_RIGHT);
                                                      }}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Top"
                                                      onTouchTap={() => {
                                                          this.addNotification(Notifier.Position.LEFT_TOP);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left"
                                                      onTouchTap={() => {
                                                          this.addNotification(Notifier.Position.LEFT);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onTouchTap={() => {
                                                          this.addNotification(Notifier.Position.LEFT_BOTTOM);
                                                      }}/>
                                    </div>

                                    <div className="button-group center">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Center"
                                                      onTouchTap={() => {
                                                          this.addNotification(Notifier.Position.CENTER);
                                                      }}/>
                                    </div>

                                </div>

                                <Notifier notifications={notifications}
                                          position={position}
                                          onNotificationPop={this.notificationPopHandler}/>

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