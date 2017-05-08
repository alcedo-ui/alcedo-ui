import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FlatButton from '../FlatButton/index';
import RaisedButton from '../RaisedButton/index';
import GhostButton from '../GhostButton/index';
import IconButton from '../IconButton/index';
import Theme from '../Theme/index';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

import './DialogBody.css';

export default class DialogBody extends Component {

    constructor(props) {

        super(props);

        this.hasMounted = false;
        this.unrenderTimeout = null;

        this.state = {
            visible: false
        };

        this.initializeAnimation = this::this.initializeAnimation;
        this.animate = this::this.animate;
        this.mousedownHandle = this::this.mousedownHandle;
        this.getButton = this::this.getButton;
        this.okButtonTouchTapHandle = this::this.okButtonTouchTapHandle;
        this.cancelButtonTouchTapHandle = this::this.cancelButtonTouchTapHandle;

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

        if (!this.props.isBlurClose || !this.state.visible) {
            return;
        }

        const {onRequestClose} = this.props,
            visible = this.triggerDialogEventHandle(
                e.target,
                this.dialogEl,
                this.state.visible
            );

        this.setState({
            visible
        }, () => {
            if (!visible) {
                setTimeout(() => {
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
        Event.addEvent(document, 'mousedown', this.mousedownHandle);
    }

    componentWillAppear(callback) {
        this.initializeAnimation(callback);
    }

    componentWillEnter(callback) {
        this.initializeAnimation(callback);
    }

    componentDidAppear() {
        this.animate();
    }

    componentDidEnter() {
        this.animate();
    }

    componentWillLeave(callback) {
        this.setState({
            visible: false
        }, () => {
            this.unrenderTimeout = setTimeout(() => {
                this.hasMounted && callback();
            }, 250);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.setState({
                visible: !!nextProps.visible
            });
        }
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.mousedownHandle);
        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);
    }

    render() {

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

                <div className={`dialog-wrapper ${visible ? '' : 'hidden'}
                         ${theme ? `theme-${theme}` : ''} ${className}`}
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
};

DialogBody.ButtonUITypes = {
    RAISED: 'raised',
    FLAT: 'flat',
    GHOST: 'ghost',
    ICON: 'icon'
};

DialogBody.propTypes = {

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
    okButtonTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    okButtonUIType: PropTypes.oneOf(Util.enumerateValue(DialogBody.ButtonUITypes)),

    cancelButtonVisible: PropTypes.bool,
    cancelButtonText: PropTypes.string,
    cancelButtonIconCls: PropTypes.string,
    cancelButtonTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    cancelButtonUIType: PropTypes.oneOf(Util.enumerateValue(DialogBody.ButtonUITypes)),

    buttons: PropTypes.any,

    /**
     * The function that trigger when click submit.
     */
    onRequestClose: PropTypes.func,

    onOKButtonTouchTap: PropTypes.func,
    onCancelButtonTouchTap: PropTypes.func

};

DialogBody.defaultProps = {

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
    okButtonUIType: DialogBody.ButtonUITypes.RAISED,

    cancelButtonVisible: true,
    cancelButtonText: 'Cancel',
    cancelButtonIconCls: '',
    cancelButtonTheme: Theme.DEFAULT,
    cancelButtonUIType: DialogBody.ButtonUITypes.FLAT

};