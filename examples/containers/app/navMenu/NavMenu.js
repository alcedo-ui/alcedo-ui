/**
 * @file NavMenu.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

// Components
import TextField from 'src/TextField';
import NavMenuList from './NavMenuList';

// Styles
import './NavMenu.scss';

const NavMenu = ({
    filter, updateFilter
}) => (
    <div className="nav-menu">

        <TextField className="nav-menu-filter"
                   value={filter}
                   rightIconCls="fas fa-search"
                   onChange={updateFilter}/>

        <NavMenuList/>

    </div>
);

NavMenu.propTypes = {
    filter: PropTypes.string,
    updateFilter: PropTypes.func
};

export default connect(state => ({
    filter: state.navMenu.filter
}), dispatch => bindActionCreators({
    updateFilter: actions.updateFilter
}, dispatch))(NavMenu);
