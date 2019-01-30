/**
 * @file Dialog component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Children, cloneElement, Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PositionPop from '../_PositionPop';
import Paper from '../Paper';
import FlatButton from '../FlatButton';
import RaisedButton from '../RaisedButton';
import IconButton from '../IconButton';
import Theme from '../Theme';

import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import PopManagement from '../_vendors/PopManagement';

class Dialog extends Component {

    static ButtonTheme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    /**
     * public
     */
    getEl = () => {
        return this.refs.pop && this.refs.pop.getEl();
    };

    okButtonClickHandler = () => {

        const {visible, onOKButtonClick} = this.props;

        visible && onOKButtonClick && onOKButtonClick(() => {
            this.setState({
                visible: false
            }, () => {
                const {onRequestClose} = this.props;
                onRequestClose && onRequestClose();
            });
        });

    };

    cancelButtonClickHandler = () => {

        const {onCancelButtonClick, onRequestClose} = this.props;

        onCancelButtonClick && onCancelButtonClick();

        this.setState({
            visible: false
        }, () => {
            onRequestClose && onRequestClose();
        });

    };

    closeButtonClickHandler = () => {

        const {onCloseButtonClick, onRequestClose} = this.props;

        onCloseButtonClick && onCloseButtonClick();

        this.setState({
            visible: false
        }, () => {
            onRequestClose && onRequestClose();
        });

    };

    renderHandler = (...args) => {

        PopManagement.push(this, {
            shouldLockBody: this.props.showModal
        });

        const {onRender} = this.props;
        onRender && onRender(...args);

    };

    destroyHandler = (...args) => {

        PopManagement.pop(this);

        const {onDestroy} = this.props;
        onDestroy && onDestroy(...args);

    };

    componentWillUnmount() {
        PopManagement.pop(this);
    }

    render() {

        const {

                children,

                className, modalClassName, position, disabled, showModal,
                title, buttons, isLoading, visible,

                okButtonVisible, okButtonText, okButtonIconCls, okButtonTheme, okButtonDisabled, okButtonIsLoading,
                cancelButtonVisible, cancelButtonText, cancelButtonIconCls, cancelButtonDisabled, cancelButtonIsLoading,
                cancelButtonTheme, closeButtonVisible, closeIconCls,


                // not passing down these props
                isBlurClose, isEscClose,
                onRequestClose, onOKButtonClick, onCloseButtonClick, onCancelButtonClick,

                ...restProps

            } = this.props,

            dialogClassName = classNames('dialog', {
                [className]: className
            });

        return (
            <PositionPop {...restProps}
                         ref="pop"
                         className={dialogClassName}
                         position={position}
                         visible={visible}
                         container={<Paper depth={6}></Paper>}
                         showModal={showModal}
                         modalClassName={modalClassName}
                         onRender={this.renderHandler}
                         onDestroy={this.destroyHandler}>

                {
                    popEl => (
                        <Fragment>

                            <div className="dialog-title">

                                {title}

                                {
                                    closeButtonVisible ?
                                        <IconButton className="dialog-title-close-button"
                                                    iconCls={closeIconCls}
                                                    disabled={disabled}
                                                    onClick={this.closeButtonClickHandler}/>
                                        :
                                        null
                                }

                            </div>

                            <div className="dialog-content">
                                {
                                    typeof children === 'function' ?
                                        children(popEl, popEl && popEl.querySelector('.dialog-content'))
                                        :
                                        children
                                }
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
                                                      onClick={this.okButtonClickHandler}/>
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
                                                    onClick={this.cancelButtonClickHandler}/>
                                        :
                                        null
                                }

                            </div>

                        </Fragment>
                    )
                }

            </PositionPop>
        );

    }

}

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

    parentEl: PropTypes.object,

    /**
     * The dialog alignment.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

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
     * If true, the OK button will display.
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
     * If true, the OK button will disabled.
     */
    okButtonDisabled: PropTypes.bool,

    /**
     * If true, the ok button will have loading effect.
     */
    okButtonIsLoading: PropTypes.bool,

    /**
     * Set theme of OK button.
     */
    okButtonTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * If true, the cancel button will display.
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
     * If true, the cancel button will disabled.
     */
    cancelButtonDisabled: PropTypes.bool,

    /**
     * If true, the cancel button will have loading effect.
     */
    cancelButtonIsLoading: PropTypes.bool,

    /**
     * Set theme of cancel button.
     */
    cancelButtonTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * If true, the close button in title will display.
     */
    closeButtonVisible: PropTypes.bool,

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
    onOKButtonClick: PropTypes.func,

    /**
     * Callback function fired when click the cancel button.
     */
    onCancelButtonClick: PropTypes.func,

    /**
     * Callback function fired when click the close button.
     */
    onCloseButtonClick: PropTypes.func

};

Dialog.defaultProps = {

    parentEl: document.body,

    position: Position.CENTER,
    disabled: false,
    visible: false,
    showModal: true,

    isBlurClose: false,
    isLoading: false,

    okButtonVisible: true,
    okButtonText: 'OK',
    okButtonDisabled: false,
    okButtonIsLoading: false,
    okButtonTheme: Theme.SUCCESS,

    cancelButtonVisible: true,
    cancelButtonText: 'Cancel',
    cancelButtonDisabled: false,
    cancelButtonIsLoading: false,
    cancelButtonTheme: Theme.DEFAULT,

    closeButtonVisible: true,
    closeIconCls: 'fas fa-times',

    isEscClose: true

};

export default Dialog;
