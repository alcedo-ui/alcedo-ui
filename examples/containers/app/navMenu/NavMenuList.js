/**
 * @file NavMenuList.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

// Components
import NavMenuItem from './NavMenuItem';

const NavMenuList = ({
    navMenu, expandMenuName, activatedMenu,
    expandMenu, updateActivatedMenu
}) => (
    <div className="nav-menu-list">
        <div className="nav-menu-scroller">
            {
                navMenu?.map((menu, index) => menu ?
                    <NavMenuItem key={menu.text || index}
                                 expandMenuName={expandMenuName}
                                 activatedMenu={activatedMenu}
                                 options={menu}
                                 expandMenu={expandMenu}
                                 updateActivatedMenu={updateActivatedMenu}/>
                    :
                    null
                ) || null
            }
        </div>
    </div>
);

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
