import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-transition-group';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} from 'react-dom';

import TipBody from './TipBody';
import './Tip.css';

export default class Tip extends Component {

    constructor(props) {
        super(props);

        this.wrapper = null;
        this.element = null;

        this.renderWrapper = this::this.renderWrapper;
        this.renderer = this::this.renderer;
        this.renderElement = this::this.renderElement;
        this.unrenderElement = this::this.unrenderElement;
        this.requestCloseHandle = this::this.requestCloseHandle;
    }

    renderWrapper() {

        if (this.wrapper) {
            return;
        }

        const wrapper = document.querySelector('.tip-container');
        if (wrapper) {
            this.wrapper = wrapper;
        } else {
            this.wrapper = document.createElement('div');
            this.wrapper.className = 'tip-container';
            document.body.appendChild(this.wrapper);
        }

    }

    renderElement() {
        if (!this.props.visible) {
            return;
        }

        this.renderWrapper();

        this.element = unstable_renderSubtreeIntoContainer(this, this.renderer(), this.wrapper);
    }

    unrenderElement() {

        if (!this.wrapper) {
            return;
        }

        unmountComponentAtNode(this.wrapper);
        document.body.removeChild(this.wrapper);
        this.wrapper = null;
        this.element = null;
    }

    requestCloseHandle() {
        const {onRequestClose} = this.props;
        // debugger
        this.unrenderElement();
        onRequestClose && onRequestClose();

    }

    renderer() {
        return (
            <ReactCSSTransitionGroup component="div">
                <TipBody {...this.props}
                           onRequestClose={this.requestCloseHandle}/>
            </ReactCSSTransitionGroup>
        );

    }

    componentDidUpdate() {
        this.renderElement();
    }

    componentWillUnmount() {

        this.unrenderElement();

    }

    render() {
        return null;
    }
}

Tip.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Override the styles of the root element.
     */
    text: PropTypes.string,

    /**
     * This is the DOM element that will be used to set the position of the popover.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the popover is visible.
     */
    visible: PropTypes.bool,

    /**
     * The popover alignment.Possible values are: "bottom-center", "top-center", "bottom-right", "top-right", "bottom-left", "top-left", "left" and "right".
     */
    position: PropTypes.string,

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func

};

Tip.defaultProps = {

    className: '',
    style: null,

    triggerEl: null,
    visible: false,
    position: 'bottom-center'

};
