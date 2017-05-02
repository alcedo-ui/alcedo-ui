import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-transition-group';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} from 'react-dom';

import DialogBody from './DialogBody';
import Theme from '../Theme';

import './Dialog.css';

export default class Dialog extends Component {

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

        const wrapper = document.querySelector('.dialog-container');
        if (wrapper) {
            this.wrapper = wrapper;
        } else {
            this.wrapper = document.createElement('div');
            this.wrapper.className = 'dialog-container';
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
                <DialogBody {...this.props}
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

Dialog.ButtonUITypes = {
    RAISED: 'raised',
    FLAT: 'flat',
    GHOST: 'ghost',
    ICON: 'icon'
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

    disabled: PropTypes.bool,

    visible: PropTypes.bool,

    theme: PropTypes.string,

    showModal: PropTypes.bool,

    title: PropTypes.any,

    isBlurClose: PropTypes.bool,

    okButtonVisible: PropTypes.bool,
    okButtonText: PropTypes.string,
    okButtonIconCls: PropTypes.string,
    okButtonDisabled: PropTypes.bool,
    okButtonIsLoading: PropTypes.bool,
    okButtonTheme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),
    okButtonUIType: PropTypes.oneOf(Object.keys(Dialog.ButtonUITypes).map(key => Dialog.ButtonUITypes[key])),

    cancelButtonVisible: PropTypes.bool,
    cancelButtonText: PropTypes.string,
    cancelButtonIconCls: PropTypes.string,
    cancelButtonTheme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),
    cancelButtonUIType: PropTypes.oneOf(Object.keys(Dialog.ButtonUITypes).map(key => Dialog.ButtonUITypes[key])),

    buttons: PropTypes.any,

    /**
     * The function that trigger when click submit.
     */
    onRequestClose: PropTypes.func,

    onOKButtonTouchTap: PropTypes.func,
    onCancelButtonTouchTap: PropTypes.func

};

Dialog.defaultProps = {

    className: '',
    style: null,

    disabled: false,
    visible: false,
    theme: '',
    showModal: true,

    title: '',

    isBlurClose: false,

    okButtonVisible: true,
    okButtonText: 'OK',
    okButtonIconCls: '',
    okButtonDisabled: false,
    okButtonIsLoading: false,
    okButtonTheme: Theme.SUCCESS,
    okButtonUIType: Dialog.ButtonUITypes.RAISED,

    cancelButtonVisible: true,
    cancelButtonText: 'Cancel',
    cancelButtonIconCls: '',
    cancelButtonTheme: Theme.DEFAULT,
    cancelButtonUIType: Dialog.ButtonUITypes.FLAT

};