import React, {Component} from 'react';

import SubtreeContainer from '../_SubtreeContainer';
import DialogBody from '../_DialogBody/DialogBody';

export default class Dialog extends Component {

    constructor(props) {

        super(props);

        this.state = {
            visible: !!props.visible
        };

        this.requestCloseHandle = this::this.requestCloseHandle;

    }

    requestCloseHandle() {

        const {onRequestClose} = this.props;

        this.setState({
            visible: false
        }, () => {
            onRequestClose && onRequestClose();
        });

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.setState({
                visible: !!nextProps.visible
            });
        }
    }

    render() {

        const {visible} = this.state;

        return (
            <SubtreeContainer visible={visible}>
                <DialogBody {...this.props}
                            onRequestClose={this.requestCloseHandle}/>
            </SubtreeContainer>
        );

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

    /**
     * .
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
     * If true,the OK button will disabled.
     */
    okButtonIsLoading: PropTypes.bool,

    /**
     * Set theme of OK button.
     */
    okButtonTheme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

    /**
     * Set the type of OK button.
     */
    okButtonUIType: PropTypes.oneOf(Object.keys(Dialog.ButtonUITypes).map(key => Dialog.ButtonUITypes[key])),

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
    cancelButtonTheme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

    /**
     * Set the type of cancel button.
     */
    cancelButtonUIType: PropTypes.oneOf(Object.keys(Dialog.ButtonUITypes).map(key => Dialog.ButtonUITypes[key])),

    /**
     * .
     */
    buttons: PropTypes.any,

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
Dialog.ButtonUITypes = DialogBody.ButtonUITypes;
Dialog.propTypes = DialogBody.propTypes;
Dialog.defaultProps = DialogBody.defaultProps;