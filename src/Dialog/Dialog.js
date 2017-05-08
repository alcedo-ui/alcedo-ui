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

Dialog.ButtonUITypes = DialogBody.ButtonUITypes;
Dialog.propTypes = DialogBody.propTypes;
Dialog.defaultProps = DialogBody.defaultProps;