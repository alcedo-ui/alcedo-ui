/**
 * @file Toaster component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';

import PositionPop from '../_PositionPop';
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

        this.state = {
            visible: false,
            toasts: []
        };

        this.isPositiveSequence = ::this.isPositiveSequence;
        this.addToast = ::this.addToast;
        this.removeToast = ::this.removeToast;

    }

    isPositiveSequence(position = this.props.position) {
        return position !== Position.BOTTOM_LEFT && position !== Position.BOTTOM && position !== Position.BOTTOM_RIGHT;
    }

    addToast(toast) {

        let toasts = this.state.toasts;

        if (this.isPositiveSequence()) {
            toasts.push({...toast, toastsId: this.nextKey++});
        } else {
            toasts.unshift({...toast, toastsId: this.nextKey++});
        }

        this.setState({
            toasts,
            visible: true
        }, () => {
            this.refs.toaster.resetPosition();
        });

    }

    removeToast(toastsId) {

        let toasts = this.state.toasts;

        toasts.splice(toasts.findIndex(item => item.toastsId === toastsId), 1);

        this.setState({
            toasts
        }, () => {
            if (toasts.length < 1) {
                this.setState({
                    visible: false
                }, () => {
                    this.refs.toaster.resetPosition();
                });
            }
        });

    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.toasts && nextProps.toasts.length > 0) {

            let toasts = cloneDeep(nextProps.toasts);
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

                this.refs.toaster.resetPosition();

                const {onToastPop} = this.props;
                onToastPop && onToastPop();

            });

        }

    }

    render() {

        const {

                className, position, duration,

                // not passing down these props
                onToastPop,

                ...restProps

            } = this.props,
            {toasts, visible} = this.state,

            toasterClassName = classNames('toaster', {
                [`toaster-${position}`]: position,
                [className]: className
            });

        return (
            <PositionPop {...restProps}
                         ref="toaster"
                         className={toasterClassName}
                         visible={visible}
                         position={position}>
                {
                    toasts && toasts.map(options =>
                        <Toast {...options}
                               key={options.toastsId}
                               duration={'duration' in options ? options.duration : duration}
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
     * The duration of toast.
     */
    duration: PropTypes.number,

    /**
     * Callback function fired when the toaster pop.
     */
    onToastPop: PropTypes.func

};

Toaster.defaultProps = {

    className: null,
    style: null,

    toasts: null,

    position: Position.TOP,
    duration: 2500

};

export default Toaster;