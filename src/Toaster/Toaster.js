import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-transition-group';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} from 'react-dom';

import Toast from '../_Toast';

import './Toaster.css';

export default class Toaster extends Component {

    constructor(props) {

        super(props);

        this.wrapper = null;
        this.element = null;
        this.nextKey = 0;
        this.unrenderTimeout = null;

        this.state = {
            toasts: []
        };

        this.addToast = this::this.addToast;
        this.removeToast = this::this.removeToast;
        this.renderWrapper = this::this.renderWrapper;
        this.renderer = this::this.renderer;
        this.renderElement = this::this.renderElement;
        this.unrender = this::this.unrender;

    }

    addToast(toast) {

        if (this.unrenderTimeout) {
            clearTimeout(this.unrenderTimeout);
            this.unrenderTimeout = null;
        }

        let toasts = this.state.toasts;

        toasts.unshift({...toast, toastsId: this.nextKey++});

        this.setState({
            toasts
        });

    }

    removeToast(toastsId) {

        let toasts = this.state.toasts;

        toasts.splice(toasts.findIndex(item => item.toastsId === toastsId), 1);

        this.setState({
            toasts
        }, () => {
            if (toasts.length < 1) {
                this.unrenderTimeout = setTimeout(() => {
                    this.unrender();
                    this.unrenderTimeout = null;
                }, 1250);
            }
        });

    }

    renderWrapper() {

        if (this.wrapper) {
            return;
        }

        const wrapper = document.querySelector('.toaster-container');
        if (wrapper) {
            this.wrapper = wrapper;
        } else {
            this.wrapper = document.createElement('div');
            this.wrapper.className = 'toaster-container';
            document.body.appendChild(this.wrapper);
        }

    }

    renderElement() {

        if (this.unrenderTimeout) {
            clearTimeout(this.unrenderTimeout);
            this.unrenderTimeout = null;
        }

        this.renderWrapper();

        this.element = unstable_renderSubtreeIntoContainer(this, this.renderer(), this.wrapper);

    }

    unrender() {

        unmountComponentAtNode(this.wrapper);
        document.body.removeChild(this.wrapper);
        this.element = null;
        this.wrapper = null;

        // this.props.onToastPop();

    }

    renderer() {

        const {className, style} = this.props;
        const {toasts} = this.state;

        return (
            <ReactCSSTransitionGroup component="div"
                                     className={`toaster ${className}`}
                                     style={style}>
                {
                    toasts && toasts.length > 0
                        ? (
                        toasts.map(options => {
                            return (
                                <Toast {...options}
                                       key={options.toastsId}
                                       onRequestClose={this.removeToast}/>
                            );
                        })
                    )
                        : null
                }
            </ReactCSSTransitionGroup>
        );

    }

    componentDidMount() {
        // this.renderWrapper();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.toasts && nextProps.toasts.length > 0) {

            let toasts = _.cloneDeep(nextProps.toasts);
            for (let toast of toasts) {
                toast.toastsId = this.nextKey++;
            }

            this.setState({
                toasts: [...toasts.reverse(), ...this.state.toasts]
            }, () => {
                this.props.onToastPop();
            });

        }
    }

    componentDidUpdate() {
        this.renderElement();
    }

    componentWillUnmount() {
        this.unrender();
    }

    render() {
        return null;
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

    toasts: PropTypes.arrayOf(PropTypes.shape({

        className: PropTypes.string,
        style: PropTypes.object,

        type: PropTypes.oneOf(Object.keys(Toast.Type).map(key => Toast.Type[key])),
        title: PropTypes.string,
        message: PropTypes.string

    })),

    onToastPop: PropTypes.func

};

Toaster.defaultProps = {
    className: '',
    style: null
};