import React, {Component} from 'react';

import SubtreeContainer from '../_SubtreeContainer';
import MenuBody from '../_MenuBody';

export default class Menu extends Component {

    static Position = MenuBody.Position;
    static TriggerMode = MenuBody.TriggerMode;

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
                <MenuBody {...this.props}
                          onRequestClose={this.requestCloseHandle}/>
            </SubtreeContainer>
        );

    }

};

Menu.propTypes = MenuBody.propTypes;
Menu.defaultProps = MenuBody.defaultProps;