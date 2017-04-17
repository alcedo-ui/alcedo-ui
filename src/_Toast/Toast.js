import React, {Component, PropTypes} from 'react';

import TouchRipple from '../TouchRipple';

import './Toast.css';

export default class Toast extends Component {

    constructor(props) {

        super(props);

        this.hasMounted = false;

        this.state = {
            hidden: true
        };

        this.getIconCls = this::this.getIconCls;
        this.mouseDownHandle = this::this.mouseDownHandle;

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

    mouseDownHandle() {
        const {onRequestClose} = this.props;
        onRequestClose && onRequestClose();
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
        this.hasMounted = true;
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
            hidden: true
        }, () => {
            this.timeout = setTimeout(() => {
                this.hasMounted && callback();
            }, 1000);
        });
    }

    componentWillUnmount() {
        this.timeout && clearTimeout(this.timeout);
    }

    render() {

        const {className, style, type, title, message} = this.props;
        const {hidden} = this.state;

        return (
            <div className={`toast toast-${type} ${hidden ? 'hidden' : ''} ${className}`}
                 style={style}
                 onMouseDown={this.mouseDownHandle}>

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

    type: PropTypes.any,
    title: PropTypes.any,
    message: PropTypes.any,

    onRequestClose: PropTypes.func

};

Toast.defaultProps = {

    className: '',
    style: null,

    type: '',
    title: '',
    message: ''

};