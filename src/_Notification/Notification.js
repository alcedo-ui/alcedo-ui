/**
 * @file Notification component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TouchRipple from '../TouchRipple';

import Util from '../_vendors/Util';

export default class Notification extends Component {

    static Type = {
        INFO: 'info',
        SUCCESS: 'success',
        WARNING: 'warning',
        ERROR: 'error'
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
        const {onRequestClose, toastsId} = this.props;
        onRequestClose && onRequestClose(toastsId);
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

        const {onRequestClose, toastsId} = this.props;

        this.hasMounted = true;
        this.refs.notification.style.height = this.refs.notification.clientHeight + 'px';

        this.unrenderTimeout = setTimeout(() => {
            onRequestClose && onRequestClose(toastsId);
        }, 2500);

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

            wrapperClassName = (type ? ` notification-${type}` : '') + (hidden ? ' hidden' : '')
                + (leave ? ' leave' : '') + (className ? ' ' + className : '');

        return (
            <div ref="notification"
                 className={'notification' + wrapperClassName}
                 style={style}
                 onTouchTap={this.touchTapHandler}>

                <i className={`${iconCls ? iconCls : this.getIconCls()} notification-icon`}
                   aria-hidden="true"></i>

                <div className="notification-title">{title}</div>
                <div className="notification-message-wrapper">
                    <div className="notification-message">
                        {message}
                    </div>
                </div>

                <TouchRipple/>

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

    toastsId: PropTypes.number,

    /**
     * The type of notification.
     */
    type: PropTypes.oneOf(Util.enumerateValue(Toast.Type)),

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

    onRequestClose: PropTypes.func

};

Notification.defaultProps = {

    className: '',
    style: null,

    toastsId: 0,
    type: Toast.Type.INFO,
    title: 'message',
    message: '',
    iconCls: ''

};