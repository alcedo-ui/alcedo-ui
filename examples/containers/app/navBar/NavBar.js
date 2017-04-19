import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import Brand from './Brand';
import IconAnchor from 'dist/IconAnchor';

import 'sass/containers/app/navBar/nav/Nav.scss';

class NavBar extends Component {

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

NavBar.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);