import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import NavMenuItem from './NavMenuItem';

class NavMenuList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {$navMenu} = this.props;

        return (
            <div className="nav-menu-list">
                {
                    $navMenu.map((menu, index) => {
                        return (
                            <NavMenuItem key={index}
                                         options={menu}/>
                        );
                    })
                }
            </div>
        );

    }
}

NavMenuList.propTypes = {
    $navMenu: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        $navMenu: state.navMenu.menu
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuList);