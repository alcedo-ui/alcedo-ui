/**
 * @file Notification component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import AnchorButton from '../AnchorButton';
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

        const notificationEl = this.refs.notification;
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
            }, 500);
        });
    }

    componentWillUnmount() {
        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);
    }

    render() {

        const {
                className, style, type, title, message, iconCls,
                closeIconVisible, closeButtonVisible, closeButtonValue
            } = this.props,
            {hidden, leave} = this.state,

            wrapperClassName = ` theme-${type}` + (hidden ? ' hidden' : '') + (leave ? ' leave' : '')
                + (closeButtonVisible ? ' has-close-button' : '') + (className ? ' ' + className : '');

        return (
            <div ref="notification"
                 className={'notification' + wrapperClassName}
                 style={style}>

                <i className={`${iconCls ? iconCls : this.getIconCls()} notification-icon`}></i>

                <div className="notification-title">{title}</div>

                <div className="notification-message">
                    {message}
                </div>

                {
                    closeIconVisible ?
                        <IconButton className="notification-close-icon"
                                    iconCls="fa fa-times"
                                    onTouchTap={this.touchTapHandler}/>
                        :
                        null
                }

                {
                    closeButtonVisible ?
                        <AnchorButton className="notification-close-Button"
                                      value={closeButtonValue}
                                      onTouchTap={this.touchTapHandler}/>
                        :
                        null
                }

            </div>
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

    closeIconVisible: PropTypes.bool,
    closeButtonVisible: PropTypes.bool,
    closeButtonValue: PropTypes.string,

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
    duration: 0,

    closeIconVisible: false,
    closeButtonVisible: true,
    closeButtonValue: 'Close'

};