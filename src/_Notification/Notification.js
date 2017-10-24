/**
 * @file Notification component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import RaisedButton from '../RaisedButton';
import Theme from '../Theme';

import Util from '../_vendors/Util';

export default class Notification extends Component {

    static Type = {
        DEFAULT: Theme.DEFAULT,
        INFO: Theme.INFO,
        SUCCESS: Theme.SUCCESS,
        WARNING: Theme.WARNING,
        ERROR: Theme.ERROR
    };

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.hasMounted = false;
        this.unrenderTimeout = null;

        this.state = {
            hidden: true,
            leave: false
        };

        this.getIconCls = ::this.getIconCls;
        this.touchTapHandler = ::this.touchTapHandler;
        this.initializeAnimation = ::this.initializeAnimation;
        this.animate = ::this.animate;

    }

    getIconCls() {
        switch (this.props.type) {
            case 'success':
                return 'fa fa-check-circle';
            case 'warning':
                return 'fa fa-exclamation-triangle';
            case 'error':
                return 'fa fa-times-circle';
            default:
                return 'fa fa-info-circle';
        }
    }

    touchTapHandler(e) {
        e.preventDefault();
        const {onRequestClose, notificationId} = this.props;
        onRequestClose && onRequestClose(notificationId);
    }

    initializeAnimation(callback) {
        setTimeout(() => {
            this.hasMounted && callback();
        }, 0);
    }

    animate() {
        this.setState({
            hidden: false
        });
    }

    componentDidMount() {

        const {notificationId, duration, onRequestClose} = this.props;

        this.hasMounted = true;

        const notificationEl = findDOMNode(this.refs.notification);
        notificationEl.style.height = notificationEl.clientHeight + 'px';

        duration > 0 && (this.unrenderTimeout = setTimeout(() => {
            onRequestClose && onRequestClose(notificationId);
        }, duration));

    }

    componentWillAppear(callback) {
        this.initializeAnimation(callback);
    }

    componentWillEnter(callback) {
        this.initializeAnimation(callback);
    }

    componentDidAppear() {
        this.animate();
    }

    componentDidEnter() {
        this.animate();
    }

    componentWillLeave(callback) {
        this.setState({
            hidden: true,
            leave: true
        }, () => {
            this.unrenderTimeout = setTimeout(() => {
                this.hasMounted && callback();
            }, 1250);
        });
    }

    componentWillUnmount() {
        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);
    }

    render() {

        const {className, style, type, title, message, iconCls} = this.props,
            {hidden, leave} = this.state,

            wrapperClassName = (hidden ? ' hidden' : '') + (leave ? ' leave' : '') + (className ? ' ' + className : '');

        return (
            <RaisedButton ref="notification"
                          className={'notification' + wrapperClassName}
                          style={style}
                          theme={type}
                          iconCls={`${iconCls ? iconCls : this.getIconCls()} notification-icon`}
                          onTouchTap={this.touchTapHandler}>
                <div className="notification-title">{title}</div>
                <div className="notification-message-wrapper">
                    <div className="notification-message">
                        {message}
                    </div>
                </div>
            </RaisedButton>
        );

    }
};

Notification.propTypes = {

    /**
     * The CSS class name of notification.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the notification.
     */
    style: PropTypes.object,

    notificationId: PropTypes.number,

    /**
     * The type of notification.
     */
    type: PropTypes.oneOf(Util.enumerateValue(Notification.Type)),

    /**
     * The title of notification.
     */
    title: PropTypes.any,

    /**
     * The message of notification.
     */
    message: PropTypes.any,

    /**
     * The icon class name of notification.
     */
    iconCls: PropTypes.string,

    /**
     * The duration of notification.
     */
    duration: PropTypes.number,

    onRequestClose: PropTypes.func

};

Notification.defaultProps = {

    className: '',
    style: null,

    notificationId: 0,
    type: Notification.Type.INFO,
    title: 'message',
    message: '',
    iconCls: '',
    duration: 2500

};