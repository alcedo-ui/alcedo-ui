import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TouchRipple from '../TouchRipple';

import Util from '../_vendors/Util';

import './Toast.css';

export default class Toast extends Component {

    constructor(props) {

        super(props);

        this.hasMounted = false;
        this.unrenderTimeout = null;

        this.state = {
            hidden: true,
            leave: false
        };

        this.getIconCls = this::this.getIconCls;
        this.clickHandle = this::this.clickHandle;
        this.initializeAnimation = this::this.initializeAnimation;
        this.animate = this::this.animate;

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

    clickHandle() {
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
        this.refs.toast.style.height = this.refs.toast.clientHeight + 'px';

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

        const {className, style, type, title, message} = this.props,
            {hidden, leave} = this.state,
            toastClassName = (type ? ` toast-${type}` : '') + (hidden ? ' hidden' : '')
                + (leave ? ' leave' : '') + (className ? ' ' + className : '');

        return (
            <div ref="toast"
                 className={'toast' + toastClassName}
                 style={style}
                 onClick={this.clickHandle}>

                <i className={`${this.getIconCls()} toast-icon`}
                   aria-hidden="true"></i>

                <div className="toast-title">{title}</div>
                <div className="toast-message-wrapper">
                    <div className="toast-message">
                        {message}
                    </div>
                </div>

                <TouchRipple/>

            </div>
        );

    }
};

Toast.Type = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error'
};

Toast.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    toastsId: PropTypes.number,
    type: PropTypes.oneOf(Util.enumerateValue(Toast.Type)),
    title: PropTypes.any,
    message: PropTypes.any,

    onRequestClose: PropTypes.func

};

Toast.defaultProps = {

    className: '',
    style: null,

    toastsId: 0,
    type: Toast.Type.INFO,
    title: 'message',
    message: ''

};