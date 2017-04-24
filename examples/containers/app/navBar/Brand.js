import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from 'dist/IconButton';
import IconAnchor from 'dist/IconAnchor';

import 'sass/containers/app/navBar/brand/Brand.scss';

export default class Brand extends Component {

    constructor(props) {

        super(props);

        this.menuToggleButtonMousedownHandle = this::this.menuToggleButtonMousedownHandle;

    }

    menuToggleButtonMousedownHandle(e) {
        e.stopPropagation();
        this.props.toggleNavMenu();
    }

    render() {
        return (
            <div className="brand">

                <IconButton className="menu-toggle-button"
                            iconCls="fa fa-bars"
                            onTouchTap={this.menuToggleButtonMousedownHandle}/>

                <div className="brand-name">
                    <IconAnchor className="brand-logo"
                                href="#/"
                                target="_self"/>
                    Alcedo-UI Examples
                </div>

                <IconAnchor className="github-icon"
                            iconCls="fa fa-github"
                            href="https://github.com/alcedo-ui/alcedo-ui"/>

            </div>
        );
    }
}

Brand.propTypes = {
    toggleNavMenu: PropTypes.func
};