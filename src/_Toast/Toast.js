import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TouchRipple from '../TouchRipple';

import './Toast.css';

export default class Toast extends Component {

    constructor(props) {

        super(props);

        this.hasMounted = false;

        this.state = {
            hidden: true,
            leave: false
        };

        this.getIconCls = this::this.getIconCls;
        this.clickHandle = this::this.clickHandle;

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

        setTimeout(() => {
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
            this.timeout = setTimeout(() => {
                this.hasMounted && callback();
            }, 1250);
        });
    }

    componentWillUnmount() {
        this.timeout && clearTimeout(this.timeout);
    }

    render() {

        const {className, style, type, title, message} = this.props;
        const {hidden, leave} = this.state;

        return (
            <div ref="toast"
                 className={`toast ${type ? `toast-${type}` : ''} ${hidden ? 'hidden' : ''}
                    ${leave ? 'leave' : ''} ${className}`}
                 style={style}
                 onClick={this.clickHandle}>

                <i className={`${this.getIconCls()} toast-icon`}
                   aria-hidden="true"></i>

                <div className="toast-title">{title}</div>
                <div className="toast-message">{message}</div>

                <TouchRipple/>

            </div>
        );

    }
};

Toast.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    toastsId: PropTypes.number,
    type: PropTypes.any,
    title: PropTypes.any,
    message: PropTypes.any,

    onRequestClose: PropTypes.func

};

Toast.defaultProps = {

    className: '',
    style: null,

    toastsId: 0,
    type: '',
    title: '',
    message: ''

};