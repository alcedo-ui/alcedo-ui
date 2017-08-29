import React, {Component} from 'react';

import SubtreeContainer from '../_SubtreeContainer';
import PopupBody from '../_PopupBody';

export default class Popup extends Component {

    static Position = PopupBody.Position;
    static TriggerMode = PopupBody.TriggerMode;

    constructor(props) {
        super(props);
    }

    render() {

        const {visible} = this.props;

        return (
            <SubtreeContainer visible={visible}>
                <PopupBody {...this.props}/>
            </SubtreeContainer>
        );

    }

};

Popup.propTypes = PopupBody.propTypes;
Popup.defaultProps = PopupBody.defaultProps;