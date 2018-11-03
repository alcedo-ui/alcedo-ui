import React, {Component} from 'react';

import Brand from './Brand';
import IconAnchor from 'src/IconAnchor';

import 'scss/containers/app/navBar/nav/Nav.scss';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-nav">

                <Brand/>

                <div className="nav-collapse floatfix">
                    <IconAnchor className="github-icon"
                                iconCls="fab fa-github"
                                href="https://github.com/alcedo-ui/alcedo-ui"/>
                </div>

            </div>
        );
    }
}

export default NavBar;
