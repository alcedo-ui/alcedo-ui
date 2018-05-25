/**
 * @file Notification component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconButton from '../IconButton';
import AnchorButton from '../AnchorButton';

import Util from '../_vendors/Util';
import MsgType from '../_statics/MsgType';

class Notification extends Component {

    static Type = MsgType;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.unrenderTimeout = null;

        this.state = {
            hidden: true,
            leave: false
        };

    }

    getIconCls = () => {
        switch (this.props.type) {
            case MsgType.SUCCESS:
                return 'fas fa-check-circle';
            case MsgType.WARNING:
                return 'fas fa-exclamation-triangle';
            case MsgType.ERROR:
                return 'fas fa-times-circle';
            default:
                return 'fas fa-info-circle';
        }
    };

    touchTapHandler = e => {

        e.preventDefault();

        const {notificationId, onRequestClose} = this.props;

        this.setState({
            hidden: true,
            leave: true
        }, () => {
            setTimeout(() => {
                onRequestClose && onRequestClose(notificationId);
            }, 500);
        });

    };

    componentDidMount() {

        const {notificationId, duration, onRequestClose} = this.props;

        const notificationEl = this.refs.notification;
        notificationEl.style.height = notificationEl.clientHeight + 'px';
        notificationEl.style.width = notificationEl.clientWidth + 'px';

        if (duration > 0) {
            this.unrenderTimeout = setTimeout(() => {
                this.setState({
                    hidden: true,
                    leave: true
                }, () => {
                    setTimeout(() => {
                        onRequestClose && onRequestClose(notificationId);
                    }, 500);
                });
            }, duration);
        }

        setTimeout(() => {
            this.setState({
                hidden: false
            });
        }, 0);

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

            wrapperClassName = classNames('notification', {
                'theme-default': type === MsgType.DEFAULT,
                [`theme-${type}`]: type !== MsgType.DEFAULT,
                hidden: hidden,
                leave: leave,
                'has-close-button': closeButtonVisible,
                [className]: className
            });

        return (
            <div ref="notification"
                 className={wrapperClassName}
                 style={style}>

                {
                    type === MsgType.DEFAULT ?
                        null
                        :
                        <i className={`${iconCls ? iconCls : this.getIconCls()} notification-icon`}></i>
                }

                <div className="notification-title">{title}</div>

                <div className="notification-message">
                    {message}
                </div>

                {
                    closeIconVisible ?
                        <IconButton className="notification-close-icon"
                                    iconCls="fas fa-times"
                                    onClick={this.touchTapHandler}/>
                        :
                        null
                }

                {
                    closeButtonVisible ?
                        <AnchorButton className="notification-close-Button"
                                      value={closeButtonValue}
                                      onClick={this.touchTapHandler}/>
                        :
                        null
                }

            </div>
        );

    }
}

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
    type: PropTypes.oneOf(Util.enumerateValue(MsgType)),

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

    notificationId: 0,
    type: MsgType.INFO,
    title: 'message',
    message: '',
    iconCls: '',
    duration: 0,

    closeIconVisible: false,
    closeButtonVisible: true,
    closeButtonValue: 'Close'

};

export default Notification;