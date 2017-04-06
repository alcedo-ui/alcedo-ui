import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import Brand from './Brand';
import NavMenuToggleButton from './NavMenuToggleButton';
import ThemeMenu from './ThemeMenu';

import 'sass/containers/app/navBar/nav/Nav.scss';
import 'sass/containers/app/navBar/nav/NavLight.scss';
import 'sass/containers/app/navBar/nav/NavDark.scss';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="nav">

                <Brand/>

                <div className="nav-collapse floatfix">

                    <div className="left">
                        <NavMenuToggleButton/>
                    </div>

                    <div className="right">
                        <ThemeMenu/>
                    </div>

                </div>

            </div>
        );

    }
}

NavBar.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);