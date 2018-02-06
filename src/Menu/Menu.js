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
        return this.props.visible ?
            <Portal>
                <MenuBody {...this.props}/>
            </Portal>
            :
            null;
    }

};

Menu.propTypes = MenuBody.propTypes;
Menu.defaultProps = MenuBody.defaultProps;

export default Menu;