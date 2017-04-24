import React, {Component} from 'react';

import Brand from './Brand';
import IconAnchor from 'dist/IconAnchor';

import 'sass/containers/app/navBar/nav/Nav.scss';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav">

                <Brand/>

                <div className="nav-collapse floatfix">
                    <IconAnchor className="github-icon"
                                iconCls="fa fa-github"
                                href="https://github.com/alcedo-ui/alcedo-ui"/>
                </div>

            </div>
        );
    }
}