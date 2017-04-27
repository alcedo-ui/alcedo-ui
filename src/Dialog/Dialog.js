import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} from 'react-dom';

import Event from '../_vendors/Event';

import FlatButton from '../FlatButton';
import RaisedButton from '../RaisedButton';
import GhostButton from '../GhostButton';
import IconButton from '../IconButton';
import Theme from '../Theme';

import './Dialog.css';

export default class Dialog extends Component {

    constructor(props) {

        super(props);

        this.wrapper = null;
        this.element = null;

        this.state = {
            visible: !!props.visible
        };

        this.mousedownHandle = this::this.mousedownHandle;
        this.renderWrapper = this::this.renderWrapper;
        this.renderer = this::this.renderer;
        this.renderElement = this::this.renderElement;
        this.unrenderElement = this::this.unrenderElement;
        this.getButton = this::this.getButton;
        this.okButtonTouchTapHandle = this::this.okButtonTouchTapHandle;
        this.cancelButtonTouchTapHandle = this::this.cancelButtonTouchTapHandle;

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
                this.element,
                this.state.visible
            );

        this.setState({
            visible
        }, () => {
            !visible && onRequestClose && onRequestClose();
        });

    }

    renderWrapper() {

        const popupContainer = document.querySelector('#popup-container');

        if (popupContainer) {
            this.wrapper = popupContainer;
        } else {
            this.wrapper = document.createElement('div');
            this.wrapper.id = 'popup-container';
            document.body.appendChild(this.wrapper);
        }

    }

    getButton(uiType, value, iconCls, theme, handle, disabled, isLoading) {
        switch (uiType) {
            case Dialog.ButtonUITypes.RAISED:
                return <RaisedButton value={value}
                                     iconCls={iconCls}
                                     theme={theme}
                                     disabled={disabled}
                                     isLoading={isLoading}
                                     onTouchTap={handle}/>;
            case Dialog.ButtonUITypes.FLAT:
                return <FlatButton value={value}
                                   iconCls={iconCls}
                                   theme={theme}
                                   disabled={disabled}
                                   isLoading={isLoading}
                                   onTouchTap={handle}/>;
            case Dialog.ButtonUITypes.GHOST:
                return <GhostButton value={value}
                                    iconCls={iconCls}
                                    theme={theme}
                                    disabled={disabled}
                                    isLoading={isLoading}
                                    onTouchTap={handle}/>;
            case Dialog.ButtonUITypes.ICON:
                return <IconButton iconCls={iconCls}
                                   theme={theme}
                                   disabled={disabled}
                                   isLoading={isLoading}
                                   onTouchTap={handle}/>;
        }
    }

    okButtonTouchTapHandle() {

        const {onOKButtonTouchTap} = this.props;

        onOKButtonTouchTap && onOKButtonTouchTap(() => {
            this.cancelButtonTouchTapHandle();
        });

    }

    cancelButtonTouchTapHandle() {

        const {onCancelButtonTouchTap, onRequestClose} = this.props;

        this.setState({
            visible: false
        }, () => {
            onCancelButtonTouchTap && onCancelButtonTouchTap();
            onRequestClose && onRequestClose();
        });

    }

    renderer() {

        const {
            children, className, style, disabled, theme, showModal, title, buttons,
            okButtonVisible, okButtonText, okButtonIconCls, okButtonTheme, okButtonUIType, okButtonDisabled, okButtonIsLoading,
            cancelButtonVisible, cancelButtonText, cancelButtonIconCls, cancelButtonTheme, cancelButtonUIType
        } = this.props;
        const {visible} = this.state;

        return (
            <div>

                {
                    showModal
                        ? <div className={`dialog-modal ${visible ? '' : 'hidden'}`}></div>
                        : null
                }

                <div className={`dialog ${visible ? '' : 'hidden'} ${theme ? `theme-${theme}` : ''} ${className}`}
                     style={style}
                     disabled={disabled}>

                    {
                        title
                            ? <div className="dialog-title">{title}</div>
                            : null
                    }

                    <div className="dialog-content">

                        {children}

                    </div>

                    <div className="dialog-buttons">

                        {
                            buttons
                                ? buttons
                                : null
                        }

                        {
                            !buttons && okButtonVisible
                                ? this.getButton(okButtonUIType, okButtonText,
                                okButtonIconCls, okButtonTheme, this.okButtonTouchTapHandle, okButtonDisabled, okButtonIsLoading)
                                : null
                        }

                        {
                            !buttons && cancelButtonVisible
                                ? this.getButton(cancelButtonUIType, cancelButtonText,
                                cancelButtonIconCls, cancelButtonTheme, this.cancelButtonTouchTapHandle)
                                : null
                        }

                    </div>

                </div>

            </div>
        );

    }

    renderElement() {
        this.element = unstable_renderSubtreeIntoContainer(this, this.renderer(), this.wrapper);
    }

    unrenderElement() {
        unmountComponentAtNode(this.wrapper);
    }

    componentDidMount() {

        Event.addEvent(document, 'mousedown', this.mousedownHandle);

        this.renderWrapper();

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

        this.unrenderElement();

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

    triggerEl: PropTypes.object,

    disabled: PropTypes.bool,

    visible: PropTypes.bool,

    theme: PropTypes.string,

    showModal: PropTypes.bool,

    title: PropTypes.any,

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

    triggerEl: null,
    disabled: false,
    visible: false,
    theme: '',
    showModal: true,

    title: '',

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