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
        this.wrapperElement = null;

        this.state = {
            visible: !!props.visible
        };

        this.mousedownHandle = this::this.mousedownHandle;
        this.renderWrapper = this::this.renderWrapper;
        this.renderer = this::this.renderer;
        this.renderElement = this::this.renderElement;
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

    getButton(uiType, value, iconCls, theme, handle) {
        switch (uiType) {
            case Dialog.ButtonUITypes.RAISED:
                return <RaisedButton value={value}
                                     iconCls={iconCls}
                                     theme={theme}
                                     onTouchTap={handle}/>;
            case Dialog.ButtonUITypes.FLAT:
                return <FlatButton value={value}
                                   iconCls={iconCls}
                                   theme={theme}
                                   onTouchTap={handle}/>;
            case Dialog.ButtonUITypes.GHOST:
                return <GhostButton value={value}
                                    iconCls={iconCls}
                                    theme={theme}
                                    onTouchTap={handle}/>;
            case Dialog.ButtonUITypes.ICON:
                return <IconButton iconCls={iconCls}
                                   theme={theme}
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
            okButtonVisible, okButtonText, okButtonIconCls, okButtonTheme, okButtonUIType,
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

                    <div className="dialog-content">

                        {
                            title
                                ? <div className="dialog-content-title">{title}</div>
                                : null
                        }

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
                                okButtonIconCls, okButtonTheme, this.okButtonTouchTapHandle)
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
    okButtonTheme: Theme.SUCCESS,
    okButtonUIType: Dialog.ButtonUITypes.RAISED,

    cancelButtonVisible: true,
    cancelButtonText: 'Cancel',
    cancelButtonIconCls: '',
    cancelButtonTheme: Theme.DEFAULT,
    cancelButtonUIType: Dialog.ButtonUITypes.FLAT

};