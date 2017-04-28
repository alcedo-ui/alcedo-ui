import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-transition-group';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} from 'react-dom';

import Theme from '../Theme';

import PopupBody from './PopupBody';

import './Popup.css';

export default class Popup extends Component {

    constructor(props) {

        super(props);

        this.wrapper = null;
        this.element = null;

        this.renderWrapper = this::this.renderWrapper;
        this.renderer = this::this.renderer;
        this.renderElement = this::this.renderElement;
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

    renderElement() {

        if (!this.props.visible) {
            return;
        }

        this.renderWrapper();
        this.element = unstable_renderSubtreeIntoContainer(this, this.renderer(), this.wrapper);

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
                <PopupBody {...this.props}
                           onRequestClose={this.requestCloseHandle}/>
            </ReactCSSTransitionGroup>
        );
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

Popup.Position = {
    LEFT: 'left',
    RIGHT: 'right'
};

Popup.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * This is the DOM element that will be used to set the position of the popover.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the popover is visible.
     */
    visible: PropTypes.bool,

    /**
     * If true,the popover will have a triangle on the top of the DOM element.
     */
    hasTriangle: PropTypes.bool,

    /**
     * The popover theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

    /**
     * The popover alignment.The value can be Popup.Position.LEFT or Popup.Position.RIGHT.
     */
    position: PropTypes.oneOf(Object.keys(Popup.Position).map(key => Popup.Position[key])),

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func

};

Popup.defaultProps = {

    className: '',
    style: null,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    theme: Theme.DEFAULT,
    position: Popup.Position.LEFT

};