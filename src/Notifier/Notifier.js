/**
 * @file Notifier component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import PositionPop from '../_PositionPop';
import Notification from '../_Notification';

// Statics
import MsgType from '../_statics/MsgType';
import Position from '../_statics/Position';

// Vendors
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';
import Util from '../_vendors/Util';
import NC from '../_vendors/NotificationCalculation';

class Notifier extends Component {

    static Type = MsgType;
    static Position = Position;

    static getDerivedStateFromProps(props, state) {

        if (!props.notifications || props.notifications.length < 1) {
            return null;
        }

        let notifications = cloneDeep(props.notifications);
        for (let i = 0, len = notifications.length; i < len; i++) {
            if (typeof notifications[i] !== 'object') {
                notifications[i] = {
                    message: notifications[i]
                };
            }
            notifications[i].notificationId = NC.getNotificationsKey();
        }

        if (NC.isPositiveSequence(props.position)) {
            notifications = [...state.notifications, ...notifications];
        } else {
            notifications = [...notifications.reverse(), ...state.notifications];
        }

        return {
            prevProps: props,
            notifications,
            visible: true
        };

    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.pop = createRef();
        this.popInstance = null;

        this.state = {
            visible: false,
            notifications: []
        };

    }

    componentDidMount() {
        this.popInstance = this.pop && this.pop.current;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.notifications && this.props.notifications.length > 0) {

            this.popInstance && this.popInstance.resetPosition();

            const {onNotificationPop} = this.props;
            onNotificationPop && onNotificationPop();

        }
    }

    /**
     * public
     * @param notification
     */
    addNotification = notification => {

        let notifications = this.state.notifications;

        if (NC.isPositiveSequence(this.props.position)) {
            notifications.push({...notification, notificationId: NC.getNotificationsKey()});
        } else {
            notifications.unshift({...notification, notificationId: NC.getNotificationsKey()});
        }

        this.setState({
            notifications,
            visible: true
        }, () => {
            this.popInstance && this.popInstance.resetPosition();
        });

    };

    removeNotification = notificationId => {

        let {notifications} = this.state;

        if (!notifications || notifications.length < 1) {
            return;
        }

        notifications.splice(notifications.findIndex(item => item.notificationId === notificationId), 1);

        this.setState({
            notifications
        }, () => {
            if (notifications.length < 1) {
                this.setState({
                    visible: false
                }, () => {
                    this.popInstance && this.popInstance.resetPosition();
                });
            }
        });

    };

    render() {

        const {

                className, position, duration, parentEl,

                // not passing down these props
                onNotificationPop,

                ...restProps

            } = this.props,
            {notifications, visible} = this.state;

        return (
            <PositionPop {...restProps}
                         ref={this.pop}
                         className={classNames('notifier', {
                             [`notifier-${position}`]: position,
                             [className]: className
                         })}
                         visible={visible}
                         position={position}
                         parentEl={parentEl}>
                {
                    notifications && notifications.map(options =>
                        <Notification {...options}
                                      key={options.notificationId}
                                      duration={'duration' in options ? options.duration : duration}
                                      onRequestClose={this.removeNotification}/>
                    )
                }
            </PositionPop>
        );

    }

}

Notifier.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    parentEl: PropTypes.object,

    /**
     * Children passed into the notifier.
     */
    notifications: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

        /**
         * The CSS class name of notification.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the notification.
         */
        style: PropTypes.object,

        /**
         * The type of notification.
         */
        type: PropTypes.oneOf(Util.enumerateValue(MsgType)),

        /**
         * The title of notification.
         */
        title: PropTypes.string,

        /**
         * The message of notification.
         */
        message: PropTypes.string,

        /**
         * The icon class name of notification.
         */
        iconCls: PropTypes.string,

        /**
         * The duration of notification.
         */
        duration: PropTypes.number

    }), PropTypes.string, PropTypes.number])),

    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * The duration of notification.
     */
    duration: PropTypes.number,

    /**
     * Callback function fired when the notifier pop.
     */
    onNotificationPop: PropTypes.func

};

Notifier.defaultProps = {

    parentEl: document.body,

    position: Position.BOTTOM_RIGHT,
    duration: 0

};

export default Notifier;
