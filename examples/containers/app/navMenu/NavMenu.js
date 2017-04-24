import React, {Component} from 'react';

import NavMenuList from './NavMenuList';

import 'sass/containers/app/navMenu/NavMenu.scss';

export default class NavMenu extends Component {

    constructor(props) {

        super(props);

    }

    render() {
        return (
            <div className="nav-menu">
                <NavMenuList/>
            </div>
        );
    }
}