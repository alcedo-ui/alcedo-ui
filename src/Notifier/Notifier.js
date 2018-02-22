/**
 * @file Notifier component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';

import PositionPop from '../_PositionPop';
import Notification from '../_Notification';

import Util from '../_vendors/Util';
import MsgType from '../_statics/MsgType';
import Position from '../_statics/Position';

class Notifier extends Component {

    static Type = MsgType;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.nextKey = 0;

        this.state = {
            visible: false,
            notifications: []
        };

        this.isPositiveSequence = ::this.isPositiveSequence;
        this.addNotification = ::this.addNotification;
        this.removeNotification = ::this.removeNotification;

    }

    isPositiveSequence(position = this.props.position) {
        return position !== Position.BOTTOM_LEFT && position !== Position.BOTTOM && position !== Position.BOTTOM_RIGHT;
    }

    addNotification(notification) {

        let notifications = this.state.notifications;

        if (this.isPositiveSequence()) {
            notifications.push({...notification, notificationId: this.nextKey++});
        } else {
            notifications.unshift({...notification, notificationId: this.nextKey++});
        }

        this.setState({
            notifications,
            visible: true
        }, () => {
            this.refs.notifier.resetPosition();
        });

    }

    removeNotification(notificationId) {

        let notifications = this.state.notifications;

        notifications.splice(notifications.findIndex(item => item.notificationId === notificationId), 1);

        this.setState({
            notifications
        }, () => {
            if (notifications.length < 1) {
                this.setState({
                    visible: false
                }, () => {
                    this.refs.notifier.resetPosition();
                });
            }
        });

    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.notifications && nextProps.notifications.length > 0) {

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

                this.refs.notifier.resetPosition();

                const {onNotificationPop} = this.props;
                onNotificationPop && onNotificationPop();

            });

        }

    }

    render() {

        const {

                className, position,

                // not passing down these props
                onNotificationPop,

                ...restProps

            } = this.props,
            {notifications, visible} = this.state,

            notifierClassName = classNames('notifier', {
                [`notifier-${position}`]: position,
                [className]: className
            });

        return (
            <PositionPop {...restProps}
                         ref="notifier"
                         className={notifierClassName}
                         visible={visible}
                         position={position}>
                {
                    notifications.map(options =>
                        <Notification {...options}
                                      key={options.notificationId}
                                      onRequestClose={this.removeNotification}/>
                    )
                }
            </PositionPop>
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
        type: PropTypes.oneOf(Util.enumerateValue(MsgType)),

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

    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * Callback function fired when the notifier pop.
     */
    onNotificationPop: PropTypes.func

};

Notifier.defaultProps = {

    className: '',
    style: null,

    position: Position.BOTTOM_RIGHT

};

export default Notifier;