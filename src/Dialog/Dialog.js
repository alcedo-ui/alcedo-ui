/**
 * @file Dialog component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Children, cloneElement, Component} from 'react';

import PositionPop from '../PositionPop';
import Paper from '../Paper';
import FlatButton from '../FlatButton';
import RaisedButton from '../RaisedButton';
import IconButton from '../IconButton';
import Theme from '../Theme';

import Dom from '../_vendors/Dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Util from '../_vendors/Util';

class Dialog extends Component {

    static ButtonTheme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.setBodyLock = this::this.setBodyLock;
        this.okButtonTouchTapHandler = ::this.okButtonTouchTapHandler;
        this.cancelButtonTouchTapHandler = ::this.cancelButtonTouchTapHandler;
        this.closeButtonTouchTapHandler = ::this.closeButtonTouchTapHandler;

    }

    setBodyLock(props = this.props) {

        if (!props) {
            return;
        }

        props.showModal && Dom.toggleClass(document.querySelector('body'), 'dialog-modal-lock', props.visible);

    }

    resetBody() {
        Dom.removeClass(document.querySelector('body'), 'dialog-modal-lock');
    }

    okButtonTouchTapHandler() {

        const {onOKButtonTouchTap} = this.props;

        onOKButtonTouchTap && onOKButtonTouchTap(() => {
            this.cancelButtonTouchTapHandler();
        });

    }

    cancelButtonTouchTapHandler() {

        const {onCancelButtonTouchTap, onRequestClose} = this.props;

        this.setState({
            visible: false
        }, () => {
            onCancelButtonTouchTap && onCancelButtonTouchTap();
            onRequestClose && onRequestClose();
        });

    }

    closeButtonTouchTapHandler() {

        const {onCloseButtonTouchTap, onRequestClose} = this.props;

        this.setState({
            visible: false
        }, () => {
            onCloseButtonTouchTap && onCloseButtonTouchTap();
            onRequestClose && onRequestClose();
        });

    }

    componentDidMount() {
        this.setBodyLock();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.props.visible) {
            this.setBodyLock(nextProps);
        }
    }

    componentWillUnmount() {
        this.resetBody();
    }

    render() {

        const {

                children,

                className, modalClassName, disabled, showModal, title, buttons, isLoading, visible, closeIconCls,

                okButtonVisible, okButtonText, okButtonIconCls, okButtonTheme, okButtonDisabled, okButtonIsLoading,
                cancelButtonVisible, cancelButtonText, cancelButtonIconCls,
                cancelButtonDisabled, cancelButtonIsLoading, cancelButtonTheme,

                // not passing down these props
                isBlurClose, isEscClose,
                onRender, onRequestClose, onOKButtonTouchTap, onCloseButtonTouchTap, onCancelButtonTouchTap,

                ...restProps

            } = this.props,

            dialogClassName = classNames('dialog', {
                [className]: className
            });

        return (
            <PositionPop {...restProps}
                         className={dialogClassName}
                         visible={visible}
                         container={<Paper depth={6}></Paper>}
                         showModal={showModal}
                         modalClassName={modalClassName}>

                <div className="dialog-title">
                    {title}
                    <IconButton className="dialog-title-close-button"
                                iconCls={closeIconCls}
                                disabled={disabled}
                                onTouchTap={this.closeButtonTouchTapHandler}/>
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
                                          disableTouchRipple={true}
                                          onTouchTap={this.okButtonTouchTapHandler}/>
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
                                        disableTouchRipple={true}
                                        onTouchTap={this.cancelButtonTouchTapHandler}/>
                            :
                            null
                    }

                </div>

            </PositionPop>
        );

    }

};

Dialog.propTypes = {

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

Dialog.defaultProps = {

    className: null,
    modalClassName: null,
    style: null,

    disabled: false,
    visible: false,
    showModal: true,

    title: null,

    isBlurClose: false,
    isLoading: false,

    okButtonVisible: true,
    okButtonText: 'OK',
    okButtonIconCls: null,
    okButtonDisabled: false,
    okButtonIsLoading: false,
    okButtonTheme: Theme.SUCCESS,

    cancelButtonVisible: true,
    cancelButtonText: 'Cancel',
    cancelButtonIconCls: null,
    cancelButtonDisabled: false,
    cancelButtonIsLoading: false,
    cancelButtonTheme: Theme.DEFAULT,

    closeIconCls: 'fas fa-times',

    isEscClose: true

};

export default Dialog;