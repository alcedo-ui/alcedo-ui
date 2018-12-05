import React, {Component} from 'react';

import RaisedButton from 'src/RaisedButton';
import Notifier from 'src/Notifier';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import ButtonRadioGroup from 'src/ButtonRadioGroup';
import MaterialTextField from 'src/MaterialTextField';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Notification.json';

import 'scss/containers/app/modules/pop/PopExamples.scss';
import 'scss/containers/app/modules/pop/NotificationExamples.scss';

class NotificationExamples extends Component {

    constructor(props) {

        super(props);

        this.Type = Object.keys(Notifier.Type).map(item => ({
            className: `type-${item.toLowerCase()}`,
            iconCls: 'fas fa-check',
            text: item,
            value: Notifier.Type[item]
        }));

        this.notificationPosition = Object.keys(Notifier.Position).map(item => ({
            label: item,
            value: Notifier.Position[item]
        }));

        this.state = {
            type: Notifier.Type.INFO,
            position: Notifier.Position.BOTTOM_RIGHT,
            title: 'Title',
            message: 'Message',
            notifications: {}
        };

    }

    updateField = (key, value) => {
        let state = {};
        state[key] = value;
        this.setState(state);
    };

    addNotification = position => {

        const {type, title, message, notifications} = this.state;

        if (!(position in notifications)) {
            notifications[position] = [];
        }

        notifications[position].push({
            type,
            title,
            message
        });

        this.setState({
            notifications,
            position
        });

    };

    notificationPopHandler = () => {
        this.setState({
            notifications: {}
        });
    };

    render() {

        const {type, position, title, message, notifications} = this.state,
            {
                TOP_LEFT, TOP, TOP_RIGHT, RIGHT_TOP, RIGHT, RIGHT_BOTTOM, CENTER,
                BOTTOM_LEFT, BOTTOM, BOTTOM_RIGHT, LEFT_TOP, LEFT, LEFT_BOTTOM
            } = Notifier.Position;

        return (
            <div className="example pop-examples notification-examples">

                <h2 className="example-title">Notification</h2>

                <p>
                    <span>Notification</span>
                    is a global display notification alert information .
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <ButtonRadioGroup data={this.Type}
                                                  value={type}
                                                  onChange={item => this.updateField('type', item.value)}/>

                                <MaterialTextField theme={MaterialTextField.Theme.HIGHLIGHT}
                                                   value={title}
                                                   onChange={value => this.updateField('title', value)}/>

                                <MaterialTextField theme={MaterialTextField.Theme.HIGHLIGHT}
                                                   value={message}
                                                   onChange={value => this.updateField('message', value)}/>

                                <div className="button-group-wrapper">

                                    <div className="button-group top">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top Left"
                                                      onClick={() => this.addNotification(TOP_LEFT)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top"
                                                      onClick={() => this.addNotification(TOP)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top right"
                                                      onClick={() => this.addNotification(TOP_RIGHT)}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Top"
                                                      onClick={() => this.addNotification(RIGHT_TOP)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right"
                                                      onClick={() => this.addNotification(RIGHT)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onClick={() => this.addNotification(RIGHT_BOTTOM)}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onClick={() => this.addNotification(BOTTOM_LEFT)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom"
                                                      onClick={() => this.addNotification(BOTTOM)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onClick={() => this.addNotification(BOTTOM_RIGHT)}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Top"
                                                      onClick={() => this.addNotification(LEFT_TOP)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left"
                                                      onClick={() => this.addNotification(LEFT)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onClick={() => this.addNotification(LEFT_BOTTOM)}/>
                                    </div>

                                    <div className="button-group center">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Center"
                                                      onClick={() => this.addNotification(CENTER)}/>
                                    </div>

                                </div>

                                <Notifier notifications={notifications[TOP_LEFT]}
                                          position={TOP_LEFT}
                                          onNotificationPop={this.notificationPopHandler}/>
                                <Notifier notifications={notifications[TOP]}
                                          position={TOP}
                                          onNotificationPop={this.notificationPopHandler}/>
                                <Notifier notifications={notifications[TOP_RIGHT]}
                                          position={TOP_RIGHT}
                                          onNotificationPop={this.notificationPopHandler}/>
                                <Notifier notifications={notifications[RIGHT_TOP]}
                                          position={RIGHT_TOP}
                                          onNotificationPop={this.notificationPopHandler}/>
                                <Notifier notifications={notifications[RIGHT]}
                                          position={RIGHT}
                                          onNotificationPop={this.notificationPopHandler}/>
                                <Notifier notifications={notifications[RIGHT_BOTTOM]}
                                          position={RIGHT_BOTTOM}
                                          onNotificationPop={this.notificationPopHandler}/>
                                <Notifier notifications={notifications[CENTER]}
                                          position={CENTER}
                                          onNotificationPop={this.notificationPopHandler}/>
                                <Notifier notifications={notifications[BOTTOM_LEFT]}
                                          position={BOTTOM_LEFT}
                                          onNotificationPop={this.notificationPopHandler}/>
                                <Notifier notifications={notifications[BOTTOM]}
                                          position={BOTTOM}
                                          onNotificationPop={this.notificationPopHandler}/>
                                <Notifier notifications={notifications[BOTTOM_RIGHT]}
                                          position={BOTTOM_RIGHT}
                                          onNotificationPop={this.notificationPopHandler}/>
                                <Notifier notifications={notifications[LEFT_TOP]}
                                          position={LEFT_TOP}
                                          onNotificationPop={this.notificationPopHandler}/>
                                <Notifier notifications={notifications[LEFT]}
                                          position={LEFT}
                                          onNotificationPop={this.notificationPopHandler}/>
                                <Notifier notifications={notifications[LEFT_BOTTOM]}
                                          position={LEFT_BOTTOM}
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

export default NotificationExamples;
