import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import NavMenuList from './NavMenuList';

import 'sass/containers/app/navMenu/NavMenu.scss';
import 'sass/containers/app/navMenu/NavMenuLight.scss';
import 'sass/containers/app/navMenu/NavMenuDark.scss';

class NavMenu extends Component {

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

NavMenu.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);