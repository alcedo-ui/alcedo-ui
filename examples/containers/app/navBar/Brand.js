import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'src/IconButton';
import IconAnchor from 'src/IconAnchor';

import 'sass/containers/app/navBar/brand/Brand.scss';

class Brand extends Component {

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

                <Link className="brand-name"
                         to="/">
                    <i className="brand-logo"></i>
                    Alcedo-UI Examples
                </Link>

                <IconAnchor className="github-icon"
                            iconCls="fab fa-github"
                            href="https://github.com/alcedo-ui/alcedo-ui"/>

            </div>
        );
    }
}

Brand.propTypes = {
    toggleNavMenu: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Brand);