import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} from 'react-dom';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

import './Dialog.css';

export default class Dialog extends Component {

    constructor(props) {

        super(props);

        this.wrapper = null;
        this.wrapperElement = null;

        this.state = {
            visible: !!props.visible
        };

        this.mousedownHandle = this::this.mousedownHandle;
        this.renderWrapper = this::this.renderWrapper;
        this.renderer = this::this.renderer;
        this.renderElement = this::this.renderElement;

    }

    triggerDialogEventHandle(el, triggerEl, dialogEl, currentVisible) {

        let flag = true;

        while (el) {
            if (el == dialogEl || el == triggerEl) {
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
            visible = this.triggerDialogEventHandle(
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

    renderWrapper() {
        this.wrapper = document.createElement('div');
        this.wrapper.className = 'dialog-wrapper';
        document.body.appendChild(this.wrapper);
    }

    renderer() {

        const {children, className, style, disabled, theme} = this.props;
        const {visible} = this.state;

        return (
            <div className={`dialog ${visible ? '' : 'hidden'} ${theme ? `theme-${theme}` : ''} ${className}`}
                 style={style}
                 disabled={disabled}>

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

Dialog.propTypes = {

    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The styles of the root element.
     */
    style: PropTypes.object,

    /**
     *
     */
    triggerEl: PropTypes.object,

    /**
     *
     */
    disabled: PropTypes.bool,

    /**
     *
     */
    visible: PropTypes.bool,

    /**
     *
     */
    theme: PropTypes.string,

    /**
     * The function that trigger when click submit.
     */
    onRequestClose: PropTypes.func

};

Dialog.defaultProps = {

    className: '',
    style: null,

    triggerEl: null,
    disabled: false,
    visible: false,
    theme: ''

};