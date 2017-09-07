import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import PreventOuterScroller from 'dist/PreventOuterScroller';
import NavMenuItem from './NavMenuItem';

class NavMenuList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {$navMenu, $expandMenuName, $activatedMenu, expandMenu, updateActivatedMenu} = this.props;

        return (
            <PreventOuterScroller className="nav-menu-list">
                <div className="nav-menu-scroller">
                    {
                        $navMenu.map((menu, index) => {
                            return (
                                <NavMenuItem key={(menu && menu.text) || index}
                                             expandMenuName={$expandMenuName}
                                             activatedMenu={$activatedMenu}
                                             options={menu}
                                             expandMenu={expandMenu}
                                             updateActivatedMenu={updateActivatedMenu}/>
                            );
                        })
                    }
                </div>
            </PreventOuterScroller>
        );

    }
}

NavMenuList.propTypes = {

    $navMenu: PropTypes.array,
    $expandMenuName: PropTypes.string,
    $activatedMenu: PropTypes.object,

    expandMenu: PropTypes.func,
    updateActivatedMenu: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $navMenu: state.navMenu.menu,
        $expandMenuName: state.navMenu.expandMenuName,
        $activatedMenu: state.navMenu.activatedMenu
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuList);