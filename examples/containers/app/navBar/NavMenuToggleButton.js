import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

class NavMenuToggleButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {$navMenuCollapsed, toggleNavMenu} = this.props;

        return (
            <i className={'menu-ctrl-button ' + ($navMenuCollapsed ? 'fa fa-arrow-right' : 'fa fa-arrow-left')}
               aria-hidden="true"
               onClick={toggleNavMenu}></i>
        );

    }
}

NavMenuToggleButton.propTypes = {

    $navMenuCollapsed: PropTypes.bool,

    toggleNavMenu: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $navMenuCollapsed: state.navMenu.navMenuCollapsed
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuToggleButton);