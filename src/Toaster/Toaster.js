/**
 * @file Toaster component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';

import PositionPop from '../PositionPop';
import Toast from '../_Toast';

import Util from '../_vendors/Util';
import MsgType from '../_statics/MsgType';
import Position from '../_statics/Position';

class Toaster extends Component {

    static Type = MsgType;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.nextKey = 0;
        this.unrenderTimeout = null;

        this.state = {
            visible: false,
            toasts: []
        };

        this.isPositiveSequence = ::this.isPositiveSequence;
        this.clearUnrenderTimeout = ::this.clearUnrenderTimeout;
        this.addToast = ::this.addToast;
        this.removeToast = ::this.removeToast;

    }

    isPositiveSequence(position = this.props.position) {
        return position !== Position.BOTTOM_LEFT && position !== Position.BOTTOM && position !== Position.BOTTOM_RIGHT;
    }

    clearUnrenderTimeout() {
        if (this.unrenderTimeout) {
            clearTimeout(this.unrenderTimeout);
            this.unrenderTimeout = null;
        }
    }

    addToast(toast) {

        this.clearUnrenderTimeout();

        let toasts = this.state.toasts;

        if (this.isPositiveSequence()) {
            toasts.push({...toast, toastsId: this.nextKey++});
        } else {
            toasts.unshift({...toast, toastsId: this.nextKey++});
        }

        this.setState({
            toasts,
            visible: true
        });

    }

    removeToast(toastsId) {

        let toasts = this.state.toasts;

        toasts.splice(toasts.findIndex(item => item.toastsId === toastsId), 1);

        this.setState({
            toasts
        }, () => {
            if (toasts.length < 1) {

                this.clearUnrenderTimeout();

                this.unrenderTimeout = setTimeout(() => {
                    this.setState({
                        visible: false
                    });
                }, 1250);

            }
        });

    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.toasts && nextProps.toasts.length > 0) {

            this.clearUnrenderTimeout();

            let toasts = _.cloneDeep(nextProps.toasts);
            for (let i = 0, len = toasts.length; i < len; i++) {
                if (typeof toasts[i] !== 'object') {
                    toasts[i] = {
                        message: toasts[i]
                    };
                }
                toasts[i].toastsId = this.nextKey++;
            }

            if (this.isPositiveSequence()) {
                toasts = [...this.state.toasts, ...toasts];
            } else {
                toasts = [...toasts.reverse(), ...this.state.toasts];
            }

            this.setState({
                toasts,
                visible: true
            }, () => {
                const {onToastPop} = this.props;
                onToastPop && onToastPop();
            });

        }

    }

    componentWillUnmount() {
        this.clearUnrenderTimeout();
    }

    render() {

        const {

                className, position,

                // not passing down these props
                onToastPop,

                ...restProps

            } = this.props,
            {toasts, visible} = this.state,

            toasterClassName = classNames('toaster', {
                [`toaster-position-${position}`]: position,
                [className]: className
            });

        return (
            <PositionPop {...restProps}
                         className={toasterClassName}
                         visible={visible}>
                {
                    toasts && toasts.map(options =>
                        <Toast {...options}
                               key={options.toastsId}
                               onRequestClose={this.removeToast}/>
                    )
                }
            </PositionPop>
        );

    }

};

Toaster.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Children passed into the toaster.
     */
    toasts: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

        /**
         * The CSS class name of toast.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the toast.
         */
        style: PropTypes.object,

        /**
         * The type of toast.
         */
        type: PropTypes.oneOf(Util.enumerateValue(MsgType)),

        /**
         * The message of toast.
         */
        message: PropTypes.string,

        /**
         * The icon class name of toast.
         */
        iconCls: PropTypes.string,

        /**
         * The duration of toast.
         */
        duration: PropTypes.number

    }), PropTypes.string, PropTypes.number])),

    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * Callback function fired when the toaster pop.
     */
    onToastPop: PropTypes.func

};

Toaster.defaultProps = {

    className: null,
    style: null,

    toasts: null,
    position: Position.BOTTOM_RIGHT

};

export default Toaster;