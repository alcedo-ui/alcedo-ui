import React, {Component} from 'react';

import SubtreeContainer from '../_SubtreeContainer';
import TipBody from './TipBody';

import './Tip.css';

export default class Tip extends Component {

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
                <TipBody {...this.props}
                         onRequestClose={this.requestCloseHandle}/>
            </SubtreeContainer>
        );

    }

}

Tip.Position = TipBody.Position;
Tip.propTypes = TipBody.propTypes;
Tip.defaultProps = TipBody.defaultProps;
