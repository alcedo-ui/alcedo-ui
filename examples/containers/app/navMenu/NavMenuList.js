import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import NavMenuItem from './NavMenuItem';

class NavMenuList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {navMenu, expandMenuName, activatedMenu, expandMenu, updateActivatedMenu} = this.props;

        return (
            <div className="nav-menu-list">
                <div className="nav-menu-scroller">
                    {
                        navMenu && navMenu.map((menu, index) =>
                            <NavMenuItem key={(menu && menu.text) || index}
                                         expandMenuName={expandMenuName}
                                         activatedMenu={activatedMenu}
                                         options={menu}
                                         expandMenu={expandMenu}
                                         updateActivatedMenu={updateActivatedMenu}/>
                        )
                    }
                </div>
            </div>
        );

    }
}

NavMenuList.propTypes = {

    navMenu: PropTypes.array,
    expandMenuName: PropTypes.string,
    activatedMenu: PropTypes.object,

    expandMenu: PropTypes.func,
    updateActivatedMenu: PropTypes.func

};

export default connect(state => ({
    navMenu: state.navMenu.menu,
    expandMenuName: state.navMenu.expandMenuName,
    activatedMenu: state.navMenu.activatedMenu
}), dispatch => bindActionCreators({
    expandMenu: actions.expandMenu,
    updateActivatedMenu: actions.updateActivatedMenu
}, dispatch))(NavMenuList);
