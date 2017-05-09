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

        const {$navMenu, $expandMenuName, expandMenu} = this.props;

        return (
            <div className="nav-menu-list">
                <div className="nav-menu-scroller">
                    {
                        $navMenu.map((menu, index) => {
                            return (
                                <NavMenuItem key={index}
                                             expandMenuName={$expandMenuName}
                                             options={menu}
                                             expandMenu={expandMenu}/>
                            );
                        })
                    }
                </div>
            </div>
        );

    }
}

NavMenuList.propTypes = {

    $navMenu: PropTypes.array,
    $expandMenuName: PropTypes.string,

    expandMenu: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $navMenu: state.navMenu.menu,
        $expandMenuName: state.navMenu.expandMenuName
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuList);