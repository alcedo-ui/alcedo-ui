import React, {Component} from 'react';

import SubtreeContainer from '../_SubtreeContainer';
import MenuBody from '../_MenuBody';

export default class Menu extends Component {

    static Position = MenuBody.Position;
    static TriggerMode = MenuBody.TriggerMode;

    constructor(props) {
        super(props);
    }

    render() {

        const {visible} = this.props;

        return (
            <SubtreeContainer visible={visible}>
                <MenuBody {...this.props}/>
            </SubtreeContainer>
        );

    }

};

Menu.propTypes = MenuBody.propTypes;
Menu.defaultProps = MenuBody.defaultProps;