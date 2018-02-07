/**
 * @file DialogBody component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component, Children, cloneElement} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Paper from '../Paper';
import FlatButton from '../FlatButton';
import RaisedButton from '../RaisedButton';
import IconButton from '../IconButton';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import PopupManagement from '../_vendors/PopupManagement';

class DialogBody extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.mousedownHandle = ::this.mousedownHandle;
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

        const {visible, isBlurClose, isLoading, disabled} = this.props;

        if (!isBlurClose || !visible || isLoading || disabled) {
            return;
        }

        const currVisible = this.triggerDialogEventHandle(
            e.target,
            this.dialogEl,
            visible
        );

        if (!currVisible) {
            const {onRequestClose} = this.props;
            onRequestClose && onRequestClose();
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

        onCancelButtonTouchTap && onCancelButtonTouchTap();
        onRequestClose && onRequestClose();

    }

    closeButtonTouchTapHandle() {

        const {onCloseButtonTouchTap, onRequestClose} = this.props;

        onCloseButtonTouchTap && onCloseButtonTouchTap();
        onRequestClose && onRequestClose();

    }

    componentDidMount() {

        this.dialogEl = findDOMNode(this.refs.dialog);

        Event.addEvent(document, 'mousedown', this.mousedownHandle);

        this.props.isEscClose && PopupManagement.push(this);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.props.visible) {
            this.setState({
                visible: nextProps.visible
            });
        }
    }

    componentDidUpdate() {
        const {visible, onRender} = this.props;
        visible && onRender && onRender(this.dialogEl, this.props.triggerEl);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.mousedownHandle);
    }

    render() {

        const {

                children,

                className, modalClassName, visible, disabled, showModal, title, buttons, isLoading, closeIconCls,

                okButtonVisible, okButtonText, okButtonIconCls, okButtonTheme, okButtonDisabled, okButtonIsLoading,
                cancelButtonVisible, cancelButtonText, cancelButtonIconCls,
                cancelButtonDisabled, cancelButtonIsLoading, cancelButtonTheme,

                // not passing down these props
                isBlurClose, isEscClose, onRender, onRequestClose, onOKButtonTouchTap,
                onCloseButtonTouchTap, onCancelButtonTouchTap,

                ...restProps

            } = this.props,

            dialogClassName = classNames('dialog-wrapper', {
                hidden: !visible,
                [className]: className
            }),

            el = <Paper {...restProps}
                        key={0}
                        ref="dialog"
                        className={dialogClassName}
                        depth={6}>

                <div className="dialog-title">
                    {title}
                    <IconButton className="dialog-title-close-button"
                                iconCls={closeIconCls}
                                disabled={disabled}
                                onTouchTap={this.closeButtonTouchTapHandle}/>
                </div>

                <div className="dialog-content">
                    {children}
                </div>

                <div className="dialog-buttons">

                    {
                        buttons ?
                            Children.map(buttons, button => cloneElement(button, {
                                isLoading,
                                disabled
                            }))
                            :
                            null
                    }

                    {
                        !buttons && okButtonVisible ?
                            <RaisedButton className="ok-button"
                                          value={okButtonText}
                                          iconCls={okButtonIconCls}
                                          theme={okButtonTheme}
                                          disabled={okButtonDisabled}
                                          isLoading={isLoading || okButtonIsLoading}
                                          onTouchTap={this.okButtonTouchTapHandle}/>
                            :
                            null
                    }

                    {
                        !buttons && cancelButtonVisible ?
                            <FlatButton className="cancel-button"
                                        value={cancelButtonText}
                                        iconCls={cancelButtonIconCls}
                                        theme={cancelButtonTheme}
                                        disabled={cancelButtonDisabled}
                                        isLoading={isLoading || cancelButtonIsLoading}
                                        onTouchTap={this.cancelButtonTouchTapHandle}/>
                            :
                            null
                    }

                </div>

            </Paper>;

        if (showModal) {

            const modalClass = classNames('dialog-modal', {
                hidden: !visible,
                [modalClassName]: modalClassName
            });

            return [
                <div key={1}
                     className={modalClass}></div>,
                el
            ];

        }

        return el;

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

    isLoading: PropTypes.bool,

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
     * If true,the cancel button will disabled.
     */
    cancelButtonDisabled: PropTypes.bool,

    /**
     * If true,the cancel button will have loading effect.
     */
    cancelButtonIsLoading: PropTypes.bool,

    /**
     * Set theme of cancel button.
     */
    cancelButtonTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    closeIconCls: PropTypes.string,

    isEscClose: PropTypes.bool,

    /**
     * The buttons of Dialog.
     */
    buttons: PropTypes.any,

    /**
     * The function of dialog render.
     */
    onRender: PropTypes.func,

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
    isLoading: false,

    okButtonVisible: true,
    okButtonText: 'OK',
    okButtonIconCls: '',
    okButtonDisabled: false,
    okButtonIsLoading: false,
    okButtonTheme: Theme.SUCCESS,

    cancelButtonVisible: true,
    cancelButtonText: 'Cancel',
    cancelButtonIconCls: '',
    cancelButtonDisabled: false,
    cancelButtonIsLoading: false,
    cancelButtonTheme: Theme.DEFAULT,

    closeIconCls: 'fa fa-times',

    isEscClose: true

};

export default DialogBody;