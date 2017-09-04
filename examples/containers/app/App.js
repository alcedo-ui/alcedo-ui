import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Redirect} from 'react-router';

import * as actions from 'reduxes/actions';

import NavMenu from './navMenu/NavMenu';
import NavBar from './navBar/NavBar';
import PageLoading from 'dist/PageLoading';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

import {asyncComponent} from 'vendors/AsyncComponent';

import 'sass/containers/app/App.scss';
import 'sass/containers/app/example.scss';

class App extends Component {

    constructor(props) {

        super(props);

        this.unrenderTimeout = null;
        this.nextKey = 1;

        this.state = {
            loading: {
                id: this.nextKey++
            }
        };

        this.finishLoading = this::this.finishLoading;

    }

    finishLoading() {
        this.unrenderTimeout = setTimeout(() => {
            this.setState({
                loading: {
                    id: this.nextKey++
                }
            });
        }, 250);
    }

    componentDidMount() {
        this.props.expandActivatedMenu(location.hash.slice(1));
    }

    render() {

        const {$isDesktop, $navMenuCollapsed, $componentLoading, collapseNavMenu} = this.props,
            {loading} = this.state;

        return (
            <div className={'app ' + ($navMenuCollapsed ? 'collapsed' : '')}>

                <ReactCSSTransitionGroup>
                    {
                        $componentLoading ?
                            <PageLoading key={loading.id}
                                         onRequestClose={this.finishLoading}/>
                            :
                            null
                    }
                </ReactCSSTransitionGroup>

                <NavMenu/>

                <NavBar/>

                <div ref="appContent"
                     className="app-content">

                    <Route exact path="/components"
                           render={() => (
                               <Redirect to="/components/RaisedButton"
                                         component={asyncComponent(() =>
                                             import('containers/app/modules/buttons/RaisedButtonExamples'))}/>
                           )}/>
                    <Route path="/components/RaisedButton"
                           component={asyncComponent(() =>
                               import('containers/app/modules/buttons/RaisedButtonExamples'))}/>
                    <Route path="/components/FlatButton"
                           component={asyncComponent(() =>
                               import('containers/app/modules/buttons/FlatButtonExamples'))}/>

                    {
                        !$isDesktop && !$navMenuCollapsed ?
                            <div className="app-content-modal"
                                 onTouchTap={collapseNavMenu}></div>
                            :
                            null
                    }

                </div>

            </div>
        );

    }
}

App.propTypes = {

    $isDesktop: PropTypes.bool,
    $navMenuCollapsed: PropTypes.bool,
    $componentLoading: PropTypes.bool,

    expandActivatedMenu: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $isDesktop: state.device.isDesktop,
        $navMenuCollapsed: state.navMenu.navMenuCollapsed,
        $componentLoading: state.loadComponent.loading
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);