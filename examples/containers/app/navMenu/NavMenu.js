import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import TextField from 'src/TextField';
import NavMenuList from './NavMenuList';

import 'sass/containers/app/navMenu/NavMenu.scss';

class NavMenu extends Component {

    constructor(props) {

        super(props);

    }

    render() {

        const {filter, updateFilter} = this.props;

        return (
            <div className="nav-menu">

                <TextField className="nav-menu-filter"
                           value={filter}
                           rightIconCls="fa fa-search"
                           onChange={updateFilter}/>

                <NavMenuList/>

            </div>
        );
    }
}

NavMenu.propTypes = {

    filter: PropTypes.string,

    updateFilter: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        filter: state.navMenu.filter
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);

