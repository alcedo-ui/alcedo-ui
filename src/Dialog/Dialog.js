import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SubtreeContainer from '../_SubtreeContainer';
import DialogBody from './DialogBody';
import Theme from '../Theme';

import './Dialog.css';

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

    disabled: PropTypes.bool,

    visible: PropTypes.bool,

    type: PropTypes.string,

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