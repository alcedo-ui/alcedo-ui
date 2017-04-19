import React, {Component, PropTypes} from 'react';
import {unstable_renderSubtreeIntoContainer} from 'react-dom';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

import './Popup.css';

export default class Popup extends Component {

    constructor(props) {

        super(props);

        this.layer = null;
        this.layerElement = null;

        this.state = {
            visible: !!props.visible
        };

        this.getPopupStyle = this::this.getPopupStyle;
        this.mousedownHandle = this::this.mousedownHandle;
        this.renderLayer = this::this.renderLayer;
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
                this.layerElement,
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
        if (triggerEl && this.layerElement) {

            const offset = Util.getOffset(triggerEl);

            if (position === Popup.Position.RIGHT) {
                popupStyle = {
                    left: offset.left - (this.layerElement.clientWidth - triggerEl.clientWidth),
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

    renderLayer() {
        this.layer = document.createElement('div');
        this.layer.className = 'popup-layer';
        document.body.appendChild(this.layer);
    }

    renderer() {

        const {children, className, style, disabled, hasTriangle, theme, position} = this.props;
        const {visible} = this.state;

        return (
            <div className={`popup ${visible ? '' : 'hidden'} ${hasTriangle ? 'hasTriangle' : ''}
                    ${theme ? `theme-${theme}` : ''} ${position ? `position-${position}` : ''} ${className}`}
                 style={{...this.getPopupStyle(), ...style}}
                 disabled={disabled}>

                <div className="triangle"></div>

                <div className="content">
                    {children}
                </div>

            </div>
        );

    }

    renderElement() {
        this.layerElement = unstable_renderSubtreeIntoContainer(this, this.renderer(), this.layer);
    }

    componentDidMount() {

        Event.addEvent(document, 'mousedown', this.mousedownHandle);

        this.renderLayer();
        this.renderElement();

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.setState({
                visible: !!nextProps.visible
            });
        }
    }

    componentDidUpdate() {
        this.renderElement();
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.mousedownHandle);
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

    className: PropTypes.string,
    style: PropTypes.object,

    triggerEl: PropTypes.object,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    hasTriangle: PropTypes.bool,
    theme: PropTypes.string,
    position: PropTypes.string,

    onRequestClose: PropTypes.func

};

Popup.defaultProps = {

    className: '',
    style: null,

    triggerEl: null,
    disabled: false,
    visible: false,
    hasTriangle: true,
    theme: '',
    position: Popup.Position.LEFT

};