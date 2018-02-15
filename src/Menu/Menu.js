/**
 * @file Menu component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';

import Portal from '../Portal';
import MenuBody from '../_MenuBody';
import Theme from '../Theme';

import Position from '../_statics/Position';

class Menu extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {visible} = this.props;

        return (
            <Portal visible={visible}>
                <MenuBody {...this.props}/>
            </Portal>
        );

    }

};

Menu.propTypes = MenuBody.propTypes;
Menu.defaultProps = MenuBody.defaultProps;

export default Menu;