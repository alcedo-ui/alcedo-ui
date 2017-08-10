import React, {Component} from 'react';

import SubtreeContainer from '../_SubtreeContainer';
import DialogBody from '../_DialogBody/DialogBody';

import Dom from '../_vendors/Dom';

import './Dialog.css';

export default class Dialog extends Component {

    static ButtonUITypes = DialogBody.ButtonUITypes;

    constructor(props) {

        super(props);

        this.state = {
            visible: !!props.visible
        };

        this.requestCloseHandle = this::this.requestCloseHandle;

    }

    setBodyLock(bool) {
        Dom.toggleClass(document.querySelector('body'), 'dialog-modal-lock', bool);
    }

    requestCloseHandle() {

        this.setState({
            visible: false
        }, () => {

            const {showModal, onRequestClose} = this.props;

            showModal && this.setBodyLock(false);
            onRequestClose && onRequestClose();

        });

    }

    componentDidMount() {
        this.props.showModal && this.setBodyLock(this.state.visible);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {

            const visible = !!nextProps.visible;

            this.setState({
                visible
            }, () => {
                const {showModal} = nextProps;
                showModal && this.setBodyLock(visible);
            });

        }
    }

    componentWillUnmount() {
        this.setBodyLock(false);
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

Dialog.propTypes = DialogBody.propTypes;
Dialog.defaultProps = DialogBody.defaultProps;