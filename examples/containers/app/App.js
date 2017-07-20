import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';
import Event from 'vendors/Event';

import NavMenu from './navMenu/NavMenu';
import NavBar from './navBar/NavBar';

import PageLoading from 'dist/PageLoading';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

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

        this.contentMousedownHandle = this::this.contentMousedownHandle;
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

    contentMousedownHandle() {
        if (!this.props.$isDesktop && !this.props.$navMenuCollapsed) {
            this.props.collapseNavMenu();
        }
    }

    componentDidMount() {

        Event.addEvent(this.refs.contentWrap, 'mousedown', this.contentMousedownHandle);

        window.SCROLL_EL = this.refs.contentWrap;

        this.props.expandActivatedMenu(this.context.router.location.pathname);

        // this.context.router.listen((location) => {
        //     console.log(location);
        // });

    }

    componentWillUnmount() {
        Event.removeEvent(this.refs.contentWrap, 'mousedown', this.contentMousedownHandle);
    }

    render() {

        const {children, $navMenuCollapsed, $componentLoading} = this.props;
        const {loading} = this.state;
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

                <div ref="contentWrap"
                     className="content-wrap">

                    <NavBar/>

                    <div className="content">
                        {children}
                    </div>

                </div>

            </div>
        );

    }
}

App.contextTypes = {
    router: PropTypes.object.isRequired
};

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