import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-transition-group';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} from 'react-dom';

import './PopupContainer.scss';

export default class PopupContainer extends Component {

    constructor(props) {

        super(props);

        this.wrapper = null;
        this.element = null;

        this.renderWrapper = this::this.renderWrapper;
        this.renderer = this::this.renderer;
        this.dorender = this::this.dorender;
        this.unrender = this::this.unrender;
        this.requestCloseHandle = this::this.requestCloseHandle;

    }

    renderWrapper() {

        if (this.wrapper) {
            return;
        }

        const wrapper = document.querySelector('.popup-container');
        if (wrapper) {
            this.wrapper = wrapper;
        } else {
            this.wrapper = document.createElement('div');
            this.wrapper.className = 'popup-container';
            document.body.appendChild(this.wrapper);
        }

    }

    dorender() {
        if (this.props.visible) {
            this.renderWrapper();
            this.element = unstable_renderSubtreeIntoContainer(this, this.renderer(), this.wrapper);
        } else {
            this.unrender();
        }
    }

    unrender() {

        if (!this.wrapper) {
            return;
        }

        unmountComponentAtNode(this.wrapper);
        document.body.removeChild(this.wrapper);
        this.element = null;
        this.wrapper = null;

    }

    requestCloseHandle() {

        const {onRequestClose} = this.props;

        this.unrender();
        onRequestClose && onRequestClose();

    }

    renderer() {
        return (
            <ReactCSSTransitionGroup component="div">
                {this.props.children}
            </ReactCSSTransitionGroup>
        );
    }

    componentDidUpdate() {
        this.dorender();
    }

    componentWillUnmount() {
        this.unrender();
    }

    render() {
        return null;
    }

};

PopupContainer.propTypes = {

    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The styles of the root element.
     */
    style: PropTypes.object

};

PopupContainer.defaultProps = {
    className: '',
    style: null
};