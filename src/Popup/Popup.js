import React, {Component} from 'react';

import SubtreeContainer from '../_SubtreeContainer';
import PopupBody from '../_PopupBody';

export default class Popup extends Component {

    static Position = PopupBody.Position;
    static TriggerMode = PopupBody.TriggerMode;

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
                <PopupBody {...this.props}
                           onRequestClose={this.requestCloseHandle}/>
            </SubtreeContainer>
        );

    }

};

Popup.propTypes = PopupBody.propTypes;
Popup.defaultProps = PopupBody.defaultProps;