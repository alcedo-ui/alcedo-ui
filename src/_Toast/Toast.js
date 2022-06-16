/**
 * @file Toast component
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import RaisedButton from '../RaisedButton';

// Statics
import MsgType from '../_statics/MsgType';

// Vendors
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';
import Util from '../_vendors/Util';

class Toast extends Component {

    static Type = MsgType;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.unrenderTimeout = null;

        /**
         * toast reference
         * @type {React.RefObject<unknown>}
         */
        this.toast = createRef();

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

    handleClick = () => {
        const {onRequestClose, toastsId} = this.props;
        onRequestClose?.(toastsId);
    };

    componentDidMount() {

        const {
            toastsId, duration, autoWidth,
            onRequestClose
        } = this.props;

        if (!autoWidth && this.toast?.current) {

            const toastEl = findDOMNode(this.toast.current);

            if (toastEl) {
                toastEl.style.width = toastEl.clientWidth + 'px';
                toastEl.style.height = toastEl.clientHeight + 'px';
            }

        }

        if (duration > 0) {
            this.unrenderTimeout = setTimeout(() => {
                this.setState({
                    hidden: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            leave: true
                        }, () => {
                            setTimeout(() => {
                                onRequestClose?.(toastsId);
                            }, 250);
                        });
                    }, 250);
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

        const {className, style, type, message, iconCls, autoWidth} = this.props;
        const {hidden, leave} = this.state;

        return (
            <RaisedButton ref={this.toast}
                          className={classNames('toast', {
                              hidden,
                              leave,
                              'auto-width': autoWidth,
                              [className]: className
                          })}
                          style={style}
                          theme={type}
                          iconCls={`${iconCls ? iconCls : this.getIconCls()} toast-icon`}
                          value={message}
                          onClick={this.handleClick}/>
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

    autoWidth: PropTypes.bool,

    onRequestClose: PropTypes.func

};

Toast.defaultProps = {
    toastsId: 0,
    type: MsgType.INFO,
    duration: 2500,
    autoWidth: false
};

export default Toast;
