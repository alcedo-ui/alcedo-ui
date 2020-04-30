/**
 * @file Toaster component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import PositionPop from '../_PositionPop';
import Toast from '../_Toast';

// Statics
import MsgType from '../_statics/MsgType';
import Position from '../_statics/Position';

// Vendors
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';
import Util from '../_vendors/Util';
import TC from '../_vendors/ToasterCalculation';

class Toaster extends Component {

    static Type = MsgType;
    static Position = Position;

    static getDerivedStateFromProps(props, state) {

        if (!props.toasts || props.toasts.length < 1) {
            return null;
        }

        let toasts = cloneDeep(props.toasts);
        for (let i = 0, len = toasts.length; i < len; i++) {
            if (typeof toasts[i] !== 'object') {
                toasts[i] = {
                    message: toasts[i]
                };
            }
            toasts[i].toastsId = TC.getToastsKey();
        }

        if (TC.isPositiveSequence(props.position)) {
            toasts = [...state.toasts, ...toasts];
        } else {
            toasts = [...toasts.reverse(), ...state.toasts];
        }

        return {
            prevProps: props,
            toasts,
            visible: true
        };

    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.pop = createRef();
        this.popInstance = null;

        this.state = {
            visible: false,
            toasts: []
        };

    }

    componentDidMount() {
        this.popInstance = this.pop && this.pop.current;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.toasts && this.props.toasts.length > 0) {

            this.popInstance && this.popInstance.resetPosition();

            const {onToastPop} = this.props;
            onToastPop && onToastPop();

        }
    }

    /**
     * public
     * @param toast
     */
    addToast = toast => {

        let toasts = this.state.toasts;

        if (TC.isPositiveSequence(this.props.position)) {
            toasts.push({...toast, toastsId: TC.getToastsKey()});
        } else {
            toasts.unshift({...toast, toastsId: TC.getToastsKey()});
        }

        this.setState({
            toasts,
            visible: true
        }, () => {
            this.popInstance && this.popInstance.resetPosition();
        });

    };

    removeToast = toastsId => {

        let {toasts} = this.state;

        if (!toasts || toasts.length < 1) {
            return;
        }

        toasts.splice(toasts.findIndex(item => item.toastsId === toastsId), 1);

        this.setState({
            toasts
        }, () => {
            if (toasts.length < 1) {
                this.setState({
                    visible: false
                }, () => {
                    this.popInstance && this.popInstance.resetPosition();
                });
            }
        });

    };

    render() {

        const {

                className, position, duration,

                // not passing down these props
                onToastPop,

                ...restProps

            } = this.props,
            {toasts, visible} = this.state;

        return (
            <PositionPop {...restProps}
                         ref={this.pop}
                         className={classNames('toaster', {
                             [`toaster-${position}`]: position,
                             [className]: className
                         })}
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

}

Toaster.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    parentEl: PropTypes.object,

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

    parentEl: document.body,

    position: Position.TOP,
    duration: 2500

};

export default Toaster;
