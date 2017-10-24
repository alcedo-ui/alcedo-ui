/**
 * @file Toast component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import RaisedButton from '../RaisedButton';
// import TouchRipple from '../TouchRipple';
import Theme from '../Theme';

import Util from '../_vendors/Util';

export default class Toast extends Component {

    static Type = {
        INFO: Theme.HIGHLIGHT,
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

        const {toastsId, duration, onRequestClose} = this.props;

        this.hasMounted = true;

        const toastEl = findDOMNode(this.refs.toast);
        toastEl.style.height = toastEl.clientHeight + 'px';

        duration > 0 && (this.unrenderTimeout = setTimeout(() => {
            onRequestClose && onRequestClose(toastsId);
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

        const {className, style, type, message, iconCls} = this.props,
            {hidden, leave} = this.state,

            wrapperClassName = (hidden ? ' hidden' : '') + (leave ? ' leave' : '') + (className ? ' ' + className : '');

        return (
            <RaisedButton ref="toast"
                          className={'toast' + wrapperClassName}
                          style={style}
                          theme={type}
                          iconCls={`${iconCls ? iconCls : this.getIconCls()} toast-icon`}
                          value={message}
                          onTouchTap={this.touchTapHandler}/>
        );

    }
};

Toast.propTypes = {

    /**
     * The CSS class name of toast.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the toast.
     */
    style: PropTypes.object,

    toastsId: PropTypes.number,

    /**
     * The type of toast.
     */
    type: PropTypes.oneOf(Util.enumerateValue(Toast.Type)),

    /**
     * The message of toast.
     */
    message: PropTypes.any,

    /**
     * The icon class name of toast.
     */
    iconCls: PropTypes.string,

    /**
     * The duration of toast.
     */
    duration: PropTypes.number,

    onRequestClose: PropTypes.func

};

Toast.defaultProps = {

    className: '',
    style: null,

    toastsId: 0,
    type: Toast.Type.INFO,
    message: '',
    iconCls: '',
    duration: 2500

};