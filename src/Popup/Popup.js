import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} from 'react-dom';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

import './Popup.css';

export default class Popup extends Component {

    constructor(props) {

        super(props);

        this.wrapper = null;
        this.wrapperElement = null;

        this.state = {
            visible: !!props.visible
        };

        this.getPopupStyle = this::this.getPopupStyle;
        this.mousedownHandle = this::this.mousedownHandle;
        this.renderWrapper = this::this.renderWrapper;
        this.renderer = this::this.renderer;
        this.renderElement = this::this.renderElement;

    }

    triggerPopupEventHandle(el, triggerEl, popupEl, currentVisible) {

        let flag = true;

        while (el) {
            if (el == popupEl || el == triggerEl) {
                return currentVisible;
            }
            el = el.parentNode;
        }

        if (flag) {
            return false;
        }

    }

    mousedownHandle(e) {

        const {triggerEl, onRequestClose} = this.props,
            visible = this.triggerPopupEventHandle(
                e.target,
                triggerEl,
                this.wrapperElement,
                this.state.visible
            );

        this.setState({
            visible
        }, () => {
            !visible && onRequestClose && onRequestClose();
        });

    }

    getPopupStyle() {

        const {triggerEl, position} = this.props;

        let popupStyle = {};
        if (triggerEl && this.wrapperElement) {

            const offset = Util.getOffset(triggerEl);

            if (position === Popup.Position.RIGHT) {
                popupStyle = {
                    left: offset.left - (this.wrapperElement.clientWidth - triggerEl.clientWidth),
                    top: offset.top + triggerEl.clientHeight
                };
            } else { // default left
                popupStyle = {
                    left: offset.left,
                    top: offset.top + triggerEl.clientHeight
                };
            }
        }

        return popupStyle;

    }

    renderWrapper() {
        this.wrapper = document.createElement('div');
        this.wrapper.className = 'popup-wrapper';
        document.body.appendChild(this.wrapper);
    }

    renderer() {

        const {children, className, style, hasTriangle, theme, position} = this.props;
        const {visible} = this.state;

        return (
            <div className={`popup ${visible ? '' : 'hidden'} ${hasTriangle ? 'hasTriangle' : ''}
                    ${theme ? `theme-${theme}` : ''} ${position ? `position-${position}` : ''} ${className}`}
                 style={{...this.getPopupStyle(), ...style}}>

                <div className="triangle"></div>

                <div className="content">
                    {children}
                </div>

            </div>
        );

    }

    renderElement() {
        this.wrapperElement = unstable_renderSubtreeIntoContainer(this, this.renderer(), this.wrapper);
    }

    componentDidMount() {

        Event.addEvent(document, 'mousedown', this.mousedownHandle);

        this.renderWrapper();
        this.renderElement();

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.setState({
                visible: !!nextProps.visible
            });
        }
        this.renderElement();
    }

    componentDidUpdate() {
        this.renderElement();
    }

    componentWillUnmount() {

        Event.removeEvent(document, 'mousedown', this.mousedownHandle);

        unmountComponentAtNode(this.wrapper);
        document.body.removeChild(this.wrapper);
        this.wrapper = null;

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
    theme: PropTypes.string,

    /**
     * The popover alignment.The value can be Popup.Position.LEFT or Popup.Position.RIGHT.
     */
    position: PropTypes.string,

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
    theme: '',
    position: Popup.Position.LEFT

};