/**
 * @file Toast component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import RaisedButton from '../RaisedButton';

import MsgType from '../_statics/MsgType';

import Util from '../_vendors/Util';

class Toast extends Component {

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

    clickHandler = e => {
        const {onRequestClose, toastsId} = this.props;
        onRequestClose && onRequestClose(toastsId);
    };

    componentDidMount() {

        const {toastsId, duration, onRequestClose} = this.props;

        const toastEl = findDOMNode(this.refs.toast);
        toastEl.style.width = toastEl.clientWidth + 'px';
        toastEl.style.height = toastEl.clientHeight + 'px';

        if (duration > 0) {
            this.unrenderTimeout = setTimeout(() => {
                this.setState({
                    hidden: true,
                    leave: true
                }, () => {
                    setTimeout(() => {
                        onRequestClose && onRequestClose(toastsId);
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

        const {className, style, type, message, iconCls} = this.props,
            {hidden, leave} = this.state,

            toastClassName = classNames('toast', {
                hidden,
                leave,
                [className]: className
            });

        return (
            <RaisedButton ref="toast"
                          className={toastClassName}
                          style={style}
                          theme={type}
                          iconCls={`${iconCls ? iconCls : this.getIconCls()} toast-icon`}
                          value={message}
                          onClick={this.clickHandler}/>
        );

    }
}

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
    type: PropTypes.oneOf(Util.enumerateValue(MsgType)),

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
    toastsId: 0,
    type: MsgType.INFO,
    duration: 2500
};

export default Toast;