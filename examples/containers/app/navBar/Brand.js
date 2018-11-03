import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'src/IconButton';
import IconAnchor from 'src/IconAnchor';

import 'assets/scss/containers/app/navBar/brand/Brand.scss';

class Brand extends Component {

    constructor(props) {
        super(props);
    }

    mousedownHandler = e => {
        e.stopPropagation();
        this.props.toggleNavMenu();
    };

    render() {
        return (
            <div className="brand">

                <IconButton className="menu-toggle-button"
                            iconCls="fas fa-bars"
                            onClick={this.mousedownHandler}/>

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

export default connect(state => ({}), dispatch => bindActionCreators({
    toggleNavMenu: actions.toggleNavMenu
}, dispatch))(Brand);
