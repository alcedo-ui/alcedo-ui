import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {renderRoutes} from 'react-router-config';

import * as actions from 'reduxes/actions';
import Event from 'vendors/Event';
import Config from 'examples/config';

import 'assets/font-awesome/css/font-awesome.min.css';
import 'sass/global.scss';
import 'sass/containers/AppRoot.scss';

class AppRoot extends Component {

    constructor(props) {

        super(props);

        this.resizeHandle = this::this.resizeHandle;

    }

    resizeHandle() {
        window.innerWidth >= Config.desktopMinWidth ?
            (!this.props.$isDesktop && this.props.switchToDesktop())
            :
            (this.props.$isDesktop && this.props.switchToMobile());
    }

    componentDidMount() {

        Event.addEvent(window, 'resize', this.resizeHandle);

        document.getElementById('loading').style.display = 'none';

    }

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.resizeHandle);
    }

    render() {
        return (
            <div className="app-root">
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }

}

AppRoot.propTypes = {
    $isDesktop: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
    return {
        $isDesktop: state.device.isDesktop
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRoot);