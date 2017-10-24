/**
 * @file Notifier component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import SubtreeContainer from '../_SubtreeContainer';
import Notification from '../_Notification';

import Util from '../_vendors/Util';

export default class Notifier extends Component {

    static NotificationType = Notification.Type;

    static Position = {

        TOP_LEFT: 'top-left',
        TOP: 'top',
        TOP_RIGHT: 'top-right',

        BOTTOM_LEFT: 'bottom-left',
        BOTTOM: 'bottom',
        BOTTOM_RIGHT: 'bottom-right'

    };

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.nextKey = 0;
        this.unrenderTimeout = null;

        this.state = {
            visible: false,
            notifications: []
        };

        this.isPositiveSequence = ::this.isPositiveSequence;
        this.clearUnrenderTimeout = ::this.clearUnrenderTimeout;
        this.addNotification = ::this.addNotification;
        this.removeNotification = ::this.removeNotification;

    }

    isPositiveSequence(position = this.props.position) {
        return position === Notifier.Position.TOP_LEFT
            || position === Notifier.Position.TOP
            || position === Notifier.Position.TOP_RIGHT;
    }

    clearUnrenderTimeout() {
        if (this.unrenderTimeout) {
            clearTimeout(this.unrenderTimeout);
            this.unrenderTimeout = null;
        }
    }

    addNotification(notification) {

        this.clearUnrenderTimeout();

        let notifications = this.state.notifications;

        if (this.isPositiveSequence()) {
            notifications.push({...notification, notificationId: this.nextKey++});
        } else {
            notifications.unshift({...notification, notificationId: this.nextKey++});
        }

        this.setState({
            notifications,
            visible: true
        });

    }

    removeNotification(notificationId) {

        let notifications = this.state.notifications;

        notifications.splice(notifications.findIndex(item => item.notificationId === notificationId), 1);

        this.setState({
            notifications
        }, () => {
            if (notifications.length < 1) {

                this.clearUnrenderTimeout();

                this.unrenderTimeout = setTimeout(() => {
                    this.setState({
                        visible: false
                    });
                }, 1250);

            }
        });

    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.notifications && nextProps.notifications.length > 0) {

            this.clearUnrenderTimeout();

            let notifications = _.cloneDeep(nextProps.notifications);
            for (let i = 0, len = notifications.length; i < len; i++) {
                if (typeof notifications[i] !== 'object') {
                    notifications[i] = {
                        message: notifications[i]
                    };
                }
                notifications[i].notificationId = this.nextKey++;
            }

            if (this.isPositiveSequence()) {
                notifications = [...this.state.notifications, ...notifications];
            } else {
                notifications = [...notifications.reverse(), ...this.state.notifications];
            }

            this.setState({
                notifications,
                visible: true
            }, () => {
                this.props.onNotificationPop();
            });

        }

    }

    componentWillUnmount() {
        this.clearUnrenderTimeout();
    }

    render() {

        const {position} = this.props,
            {notifications, visible} = this.state;

        return (
            <SubtreeContainer className={'notifier' + (position ? ` notifier-position-${position}` : '')}
                              visible={visible}>
                {
                    notifications.length > 0 ?
                        (
                            notifications.map(options =>
                                <Notification {...options}
                                              key={options.notificationId}
                                              onRequestClose={this.removeNotification}/>
                            )
                        )
                        : null
                }
            </SubtreeContainer>
        );

    }

};

Notifier.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Children passed into the notifier.
     */
    notifications: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

        /**
         * The CSS class name of toast.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the toast.
         */
        style: PropTypes.object,

        /**
         * The type of toast.
         */
        type: PropTypes.oneOf(Util.enumerateValue(Notification.Type)),

        /**
         * The title of toast.
         */
        title: PropTypes.string,

        /**
         * The message of toast.
         */
        message: PropTypes.string,

        /**
         * The icon class name of toast.
         */
        iconCls: PropTypes.string,

        /**
         * The duration of toast.
         */
        duration: PropTypes.number

    }), PropTypes.string, PropTypes.number])),

    position: PropTypes.oneOf(Util.enumerateValue(Notifier.Position)),

    /**
     * Callback function fired when the notifier pop.
     */
    onNotificationPop: PropTypes.func

};

Notifier.defaultProps = {

    className: '',
    style: null,

    position: Notifier.Position.BOTTOM_RIGHT

};