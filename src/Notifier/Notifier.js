/**
 * @file Notifier component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import SubtreeContainer from '../_SubtreeContainer';
import Notification from '../_Notification';

import Util from '../_vendors/Util';

export default class Notifier extends Component {

    static ToastType = Notification.Type;

    static Position = {

        TOP_LEFT: 'top-left',
        TOP: 'top',
        TOP_RIGHT: 'top-right',

        BOTTOM_LEFT: 'bottom-left',
        BOTTOM: 'bottom',
        BOTTOM_RIGHT: 'bottom-right'

    };

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
        return position === Notifier.Position.TOP_LEFT
            || position === Notifier.Position.TOP
            || position === Notifier.Position.TOP_RIGHT;
    }

    clearUnrenderTimeout() {
        if (this.unrenderTimeout) {
            clearTimeout(this.unrenderTimeout);
            this.unrenderTimeout = null;
        }
    }

    addToast(notification) {

        this.clearUnrenderTimeout();

        let toasts = this.state.toasts;

        if (this.isPositiveSequence()) {
            toasts.push({...notification, toastsId: this.nextKey++});
        } else {
            toasts.unshift({...notification, toastsId: this.nextKey++});
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
                this.props.onToastPop();
            });

        }

    }

    componentWillUnmount() {
        this.clearUnrenderTimeout();
    }

    render() {

        const {position} = this.props,
            {toasts, visible} = this.state;

        return (
            <SubtreeContainer className={'notifier' + (position ? ` notifier-position-${position}` : '')}
                              visible={visible}>
                {
                    toasts.length > 0 ?
                        (
                            toasts.map(options =>
                                <Notification {...options}
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

Notifier.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Children passed into the notifier.
     */
    toasts: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

        /**
         * The CSS class name of notifier.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the notifier.
         */
        style: PropTypes.object,

        /**
         * The type of notifier.
         */
        type: PropTypes.oneOf(Util.enumerateValue(Notification.Type)),

        /**
         * The title of notifier.
         */
        title: PropTypes.string,

        /**
         * The message of notifier.
         */
        message: PropTypes.string

    }), PropTypes.string, PropTypes.number])),

    position: PropTypes.oneOf(Util.enumerateValue(Notifier.Position)),

    /**
     * Callback function fired when the notifier pop.
     */
    onToastPop: PropTypes.func

};

Notifier.defaultProps = {

    className: '',
    style: null,

    position: Notifier.Position.BOTTOM_RIGHT

};