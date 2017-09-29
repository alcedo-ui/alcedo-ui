/**
 * @file DialogBody component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component, Children, cloneElement} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';

import Paper from '../Paper';
import FlatButton from '../FlatButton';
import RaisedButton from '../RaisedButton';
import GhostButton from '../GhostButton';
import IconButton from '../IconButton';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import PopupManagement from '../_vendors/PopupManagement';

export default class DialogBody extends Component {

    static ButtonUITypes = {
        RAISED: 'raised',
        FLAT: 'flat',
        GHOST: 'ghost',
        ICON: 'icon'
    };

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.hasMounted = false;
        this.unrenderTimeout = null;

        this.state = {
            visible: false
        };

        this.initializeAnimation = ::this.initializeAnimation;
        this.animate = ::this.animate;
        this.mousedownHandle = ::this.mousedownHandle;
        this.getButton = ::this.getButton;
        this.okButtonTouchTapHandle = ::this.okButtonTouchTapHandle;
        this.cancelButtonTouchTapHandle = ::this.cancelButtonTouchTapHandle;
        this.closeButtonTouchTapHandle = ::this.closeButtonTouchTapHandle;

    }

    triggerDialogEventHandle(el, dialogEl, currentVisible) {

        while (el) {
            if (el == dialogEl) {
                return currentVisible;
            }
            el = el.parentNode;
        }

        return false;

    }

    mousedownHandle(e) {
        const {isBlurClose, isLoading, disabled} = this.props;
        const {visible} = this.state;

        if (!isBlurClose || !visible || isLoading || disabled) {
            return;
        }

        const currVisible = this.triggerDialogEventHandle(
            e.target,
            this.dialogEl,
            visible
        );

        this.setState({
            visible: currVisible
        }, () => {
            if (!currVisible) {
                setTimeout(() => {
                    const {onRequestClose} = this.props;
                    onRequestClose && onRequestClose();
                }, 250);
            }
        });

    }

    getButton(uiType, value, iconCls, theme, handle, disabled, isLoading) {
        switch (uiType) {
            case DialogBody.ButtonUITypes.FLAT:
                return <FlatButton value={value}
                                   iconCls={iconCls}
                                   theme={theme}
                                   disabled={disabled}
                                   isLoading={isLoading}
                                   onTouchTap={handle}/>;
            case DialogBody.ButtonUITypes.GHOST:
                return <GhostButton value={value}
                                    iconCls={iconCls}
                                    theme={theme}
                                    disabled={disabled}
                                    isLoading={isLoading}
                                    onTouchTap={handle}/>;
            case DialogBody.ButtonUITypes.ICON:
                return <IconButton iconCls={iconCls}
                                   theme={theme}
                                   disabled={disabled}
                                   isLoading={isLoading}
                                   onTouchTap={handle}/>;
            default:
                return <RaisedButton value={value}
                                     iconCls={iconCls}
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
            setTimeout(() => {
                onRequestClose && onRequestClose();
            }, 250);
        });

    }

    closeButtonTouchTapHandle() {

        const {onCloseButtonTouchTap, onRequestClose} = this.props;

        this.setState({
            visible: false
        }, () => {
            onCloseButtonTouchTap && onCloseButtonTouchTap();
            setTimeout(() => {
                onRequestClose && onRequestClose();
            }, 250);
        });

    }

    initializeAnimation(callback) {
        setTimeout(() => {
            this.hasMounted && callback();
        }, 0);
    }

    animate() {
        this.setState({
            visible: true
        });
    }

    componentDidMount() {

        this.hasMounted = true;
        this.dialogEl = findDOMNode(this.refs.dialog);

        Event.addEvent(document, 'mousedown', this.mousedownHandle);

        this.props.isEscClose && PopupManagement.push(this);

    }

    componentWillAppear(callback) {
        this.initializeAnimation(callback);
    }

    componentDidAppear() {
        this.animate();
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.mousedownHandle);
        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);
    }

    render() {

        const {

                children, className, modalClassName, style, disabled, showModal, title, buttons, isLoading,

                okButtonVisible, okButtonText, okButtonIconCls, okButtonTheme,
                okButtonUIType, okButtonDisabled, okButtonIsLoading,

                cancelButtonVisible, cancelButtonText, cancelButtonIconCls, cancelButtonTheme, cancelButtonUIType

            } = this.props,
            {visible} = this.state,

            modalClass = (visible ? '' : ' hidden') + (modalClassName ? ' ' + modalClassName : ''),
            dialogClassName = (visible ? '' : ' hidden') + (className ? ' ' + className : '');

        return (
            <div>

                {
                    showModal ?
                        <div className={'dialog-modal' + modalClass}></div>
                        :
                        null
                }

                <Paper ref="dialog"
                       className={'dialog-wrapper' + dialogClassName}
                       style={style}
                       depth={6}>

                    <div className="dialog-title">
                        {title}
                        <IconButton className="dialog-title-close-button"
                                    iconCls="fa fa-times"
                                    disabled={disabled}
                                    onTouchTap={this.closeButtonTouchTapHandle}/>
                    </div>

                    <div className="dialog-content">
                        {children}
                    </div>

                    <div className="dialog-buttons">

                        {
                            buttons ?
                                Children.map(buttons, (button) => cloneElement(button, {
                                    isLoading,
                                    disabled
                                }))
                                :
                                null
                        }

                        {
                            !buttons && okButtonVisible ?
                                this.getButton(okButtonUIType, okButtonText, okButtonIconCls, okButtonTheme,
                                    this.okButtonTouchTapHandle, okButtonDisabled, (isLoading || okButtonIsLoading))
                                :
                                null
                        }

                        {
                            !buttons && cancelButtonVisible ?
                                this.getButton(cancelButtonUIType, cancelButtonText,
                                    cancelButtonIconCls, cancelButtonTheme, this.cancelButtonTouchTapHandle, disabled)
                                :
                                null
                        }

                    </div>

                </Paper>

            </div>
        );

    }
};

DialogBody.propTypes = {

    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The css class name of the modal.
     */
    modalClassName: PropTypes.string,

    /**
     * The styles of the root element.
     */
    style: PropTypes.object,

    /**
     * If true,the element will disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true,dialog box will display.
     */
    visible: PropTypes.bool,

    /**
     * The theme of dialog.
     */
    theme: PropTypes.string,

    /**
     * If true,the pop-up box will be displayed in the mask layer, or the pop-up box will appear below the element.
     */
    showModal: PropTypes.bool,

    /**
     * Set the title of dialog.
     */
    title: PropTypes.any,

    /**
     * If true,when press down mouse the pop-up box will closed.
     */
    isBlurClose: PropTypes.bool,

    /**
     * If true,the OK button will display.
     */
    okButtonVisible: PropTypes.bool,

    /**
     * Set the text value of the OK button.
     */
    okButtonText: PropTypes.string,

    /**
     * Set the icon class of the OK button.
     */
    okButtonIconCls: PropTypes.string,

    /**
     * If true,the OK button will disabled.
     */
    okButtonDisabled: PropTypes.bool,

    /**
     * If true,the ok button will have loading effect.
     */
    okButtonIsLoading: PropTypes.bool,

    /**
     * Set theme of OK button.
     */
    okButtonTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * Set the type of OK button.
     */
    okButtonUIType: PropTypes.oneOf(Util.enumerateValue(DialogBody.ButtonUITypes)),

    /**
     * If true,the cancel button will display.
     */
    cancelButtonVisible: PropTypes.bool,

    /**
     * Set the text value of the cancel button.
     */
    cancelButtonText: PropTypes.string,

    /**
     * Set the icon class of the cancel button.
     */
    cancelButtonIconCls: PropTypes.string,

    /**
     * Set theme of cancel button.
     */
    cancelButtonTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * Set the type of cancel button.
     */
    cancelButtonUIType: PropTypes.oneOf(Util.enumerateValue(DialogBody.ButtonUITypes)),

    /**
     * The buttons of Dialog.
     */
    buttons: PropTypes.any,

    isEscClose: PropTypes.bool,

    /**
     * The function that trigger when click submit.
     */
    onRequestClose: PropTypes.func,

    /**
     * Callback function fired when click the ok button.
     */
    onOKButtonTouchTap: PropTypes.func,

    /**
     * Callback function fired when click the cancel button.
     */
    onCancelButtonTouchTap: PropTypes.func,

    /**
     * Callback function fired when click the close button.
     */
    onCloseButtonTouchTap: PropTypes.func

};

DialogBody.defaultProps = {

    className: '',
    modalClassName: '',
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
    okButtonUIType: DialogBody.ButtonUITypes.RAISED,

    cancelButtonVisible: true,
    cancelButtonText: 'Cancel',
    cancelButtonIconCls: '',
    cancelButtonTheme: Theme.DEFAULT,
    cancelButtonUIType: DialogBody.ButtonUITypes.FLAT,

    isEscClose: true

};