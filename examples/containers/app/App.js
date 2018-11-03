import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router';
import {renderRoutes} from 'react-router-config';
import classnames from 'classnames';

import * as actions from 'reduxes/actions';

import NavMenu from './navMenu/NavMenu';
import NavBar from './navBar/NavBar';
import PageLoading from 'src/PageLoading';

import 'sass/containers/app/App.scss';
import 'sass/containers/app/example.scss';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.expandActivatedMenu(location.hash.slice(1));
    }

    render() {

        const {route, location, isDesktop, navMenuCollapsed, componentLoading, collapseNavMenu} = this.props,

            appClassName = classnames('app', {
                collapsed: navMenuCollapsed
            });

        return (
            <div className={appClassName}>

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
                                 onClick={collapseNavMenu}></div>
                            :
                            null
                    }

                </div>

            </div>
        );

    }
}

App.propTypes = {

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
