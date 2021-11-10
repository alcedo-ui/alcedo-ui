/**
 * @file App.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

// Components
import {Redirect} from 'react-router';
import NavMenu from './navMenu/NavMenu';
import NavBar from './navBar/NavBar';
import PageLoading from 'src/PageLoading';

// Vendors
import {renderRoutes} from 'react-router-config';
import classnames from 'classnames';

// Styles
import './App.scss';
import './example.scss';

const App = ({
    route, location, isDesktop, navMenuCollapsed, componentLoading,
    collapseNavMenu, expandActivatedMenu
}) => {

    useEffect(() => {
        expandActivatedMenu?.(location.hash.slice(1));
    }, [
        location,
        expandActivatedMenu
    ]);

    return (
        <div className={classnames('app', {
            collapsed: navMenuCollapsed
        })}>

            <PageLoading visible={componentLoading}/>

            <NavMenu/>

            <NavBar/>

            <div className="app-content">

                {renderRoutes(route.routes)}

                {
                    location.pathname === '/components' ?
                        <Redirect from="/components" to="/components/RaisedButton"/>
                        :
                        null
                }

                {
                    !isDesktop && !navMenuCollapsed ?
                        <div className="app-content-modal"
                             onClick={collapseNavMenu}/>
                        :
                        null
                }

            </div>

        </div>
    );

};

App.propTypes = {

    route: PropTypes.object,
    location: PropTypes.object,

    isDesktop: PropTypes.bool,
    navMenuCollapsed: PropTypes.bool,
    componentLoading: PropTypes.bool,

    expandActivatedMenu: PropTypes.func,
    collapseNavMenu: PropTypes.func

};

export default connect(state => ({
    isDesktop: state.device.isDesktop,
    navMenuCollapsed: state.navMenu.navMenuCollapsed,
    componentLoading: state.loadComponent.loading
}), dispatch => bindActionCreators({
    expandActivatedMenu: actions.expandActivatedMenu,
    collapseNavMenu: actions.collapseNavMenu
}, dispatch))(App);
