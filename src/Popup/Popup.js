import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SubtreeContainer from '../_SubtreeContainer';
import PopupBody from './PopupBody';
import Theme from '../Theme';

import './Popup.css';

export default class Popup extends Component {

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

Popup.Position = PopupBody.Position;
Popup.propTypes = PopupBody.propTypes;
Popup.defaultProps = PopupBody.defaultProps;