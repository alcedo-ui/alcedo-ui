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

        const {$navMenu} = this.props;

        return (
            <div className="nav-menu-list">
                <div className="nav-menu-scroller">
                    {
                        $navMenu.map((menu, index) => {
                            return (
                                <NavMenuItem key={index}
                                             options={menu}/>
                            );
                        })
                    }
                </div>
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