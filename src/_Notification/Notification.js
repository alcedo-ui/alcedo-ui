/**
 * @file Notification component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import IconButton from '../IconButton';
import AnchorButton from '../AnchorButton';

// Statics
import MsgType from '../_statics/MsgType';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';

class Notification extends Component {

    static Type = MsgType;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.notification = createRef();
        this.unrenderTimeout = null;

        this.state = {
            hidden: true,
            leave: false
        };

    }

    componentDidMount() {

        const {duration} = this.props;

        const notificationEl = this.notification && this.notification.current;
        notificationEl.style.height = notificationEl.clientHeight + 'px';
        notificationEl.style.width = notificationEl.clientWidth + 'px';

        if (duration > 0) {
            this.unrenderTimeout = setTimeout(() => {
                this.setState({
                    hidden: true,
                    leave: true
                }, () => setTimeout(() =>
                    this.props.onRequestClose?.(this.props.notificationId), 500
                ));
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

    handleClick = e => {
        this.setState({
            hidden: true,
            leave: true
        }, () => setTimeout(() =>
            this.props.onRequestClose?.(this.props.notificationId), 500
        ));
    };

    render() {

        const {
            className, style, type, title, message, iconCls, closeIconCls,
            closeIconVisible, closeButtonVisible, closeButtonValue
        } = this.props;
        const {hidden, leave} = this.state;

        return (
            <div ref={this.notification}
                 className={classNames('notification', {
                     'theme-default': type === MsgType.DEFAULT,
                     [`theme-${type}`]: type !== MsgType.DEFAULT,
                     hidden: hidden,
                     leave: leave,
                     'has-close-button': closeButtonVisible,
                     [className]: className
                 })}
                 style={style}>

                {
                    type === MsgType.DEFAULT ?
                        null
                        :
                        <i className={`${iconCls ? iconCls : this.getIconCls()} notification-icon`}/>
                }

                <div className="notification-title">
                    {title}
                </div>

                <div className="notification-message">
                    {message}
                </div>

                {
                    closeIconVisible ?
                        <IconButton className="notification-close-icon"
                                    iconCls={closeIconCls}
                                    onClick={this.handleClick}/>
                        :
                        null
                }

                {
                    closeButtonVisible ?
                        <AnchorButton className="notification-close-Button"
                                      value={closeButtonValue}
                                      onClick={this.handleClick}/>
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
     * The close icon class name of notification.
     */
    closeIconCls: PropTypes.string,

    closeIconVisible: PropTypes.bool,
    closeButtonVisible: PropTypes.bool,
    closeButtonValue: PropTypes.string,

    /**
     * The duration of notification.
     */
    duration: PropTypes.number,

    onRequestClose: PropTypes.func

};

Notification.defaultProps = {

    notificationId: 0,
    type: MsgType.INFO,
    title: 'message',
    message: '',
    iconCls: '',

    closeIconCls: 'fas fa-times',
    closeIconVisible: false,
    closeButtonVisible: true,
    closeButtonValue: 'Close',

    duration: 0

};

export default Notification;
