import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {renderRoutes} from 'react-router-config';
import {Redirect} from 'react-router-dom';

import * as actions from 'reduxes/actions';
import Event from 'vendors/Event';
import Config from 'examples/config';

import 'assets/font-awesome/css/fontawesome-all.min.css';
import 'sass/global.scss';
import 'sass/containers/Root.scss';

class Root extends Component {

    constructor(props) {

        super(props);

        this.resizeHandle = ::this.resizeHandle;

    }

    resizeHandle() {
        window.innerWidth >= Config.desktopMinWidth ?
            (!this.props.isDesktop && this.props.switchToDesktop())
            :
            (this.props.isDesktop && this.props.switchToMobile());
    }

    componentDidMount() {

        Event.addEvent(window, 'resize', this.resizeHandle);

        document.getElementById('loading').style.display = 'none';

    }

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.resizeHandle);
    }

    render() {

        const {route, location} = this.props;

        return (
            <div className="root">

                {renderRoutes(route.routes)}

                {
                    location.pathname === '/' ?
                        <Redirect from="/" to="/landing"/>
                        :
                        null
                }

            </div>
        );
    }

}

Root.propTypes = {

    isDesktop: PropTypes.bool,

    switchToDesktop: PropTypes.func,
    switchToMobile: PropTypes.func

};

export default connect(state = ({
    isDesktop: state.device.isDesktop
}), dispatch => bindActionCreators({
    switchToDesktop: actions.switchToDesktop,
    switchToMobile: actions.switchToMobile
}, dispatch))(Root);