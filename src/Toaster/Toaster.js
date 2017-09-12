import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import SubtreeContainer from '../_SubtreeContainer';
import Toast from '../_Toast';

import Util from '../_vendors/Util';

import './Toaster.css';

export default class Toaster extends Component {

    static ToastType = Toast.Type;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.nextKey = 0;
        this.unrenderTimeout = null;

        this.state = {
            visible: false,
            toasts: []
        };

        this.clearUnrenderTimeout = ::this.clearUnrenderTimeout;
        this.addToast = ::this.addToast;
        this.removeToast = ::this.removeToast;

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

        toasts.unshift({...toast, toastsId: this.nextKey++});

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

            this.setState({
                toasts: [...toasts.reverse(), ...this.state.toasts],
                visible: true
            }, () => {
                this.props.onToastPop();
            });

        }

    }

    componentWillUnmount() {
        this.clearUnrenderTimeout();
    }

    render() {

        const {toasts, visible} = this.state;

        return (
            <SubtreeContainer className="toaster"
                              visible={visible}>
                {
                    toasts.length > 0 ?
                        (
                            toasts.map(options =>
                                <Toast {...options}
                                       key={options.toastsId}
                                       onRequestClose={this.removeToast}/>
                            )
                        )
                        : null
                }
            </SubtreeContainer>
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
         * The CSS class name of toaster.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the toaster.
         */
        style: PropTypes.object,

        /**
         * The type of toaster.
         */
        type: PropTypes.oneOf(Util.enumerateValue(Toast.Type)),

        /**
         * The title of toaster.
         */
        title: PropTypes.string,

        /**
         * The message of toaster.
         */
        message: PropTypes.string

    }), PropTypes.string, PropTypes.number])),


    /**
     * Callback function fired when the toaster pop.
     */
    onToastPop: PropTypes.func

};

Toaster.defaultProps = {
    className: '',
    style: null
};