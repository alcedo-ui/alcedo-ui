/**
 * @file Root.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {renderRoutes} from 'react-router-config';

import * as actions from 'reduxes/actions';

// Components
import {Redirect} from 'react-router-dom';

// Statics
import Config from 'examples/config';

// Vendors
import Event from 'vendors/Event';

// Styles
import 'assets/font-awesome/css/fontawesome-all.min.css';
import 'scss/global.scss';
import 'scss/containers/Root.scss';

// eslint-disable-next-line require-jsdoc
function Root({
    route, location, isDesktop,
    switchToDesktop, switchToMobile
}) {

    /**
     * handle switch between desktop mode and mobile mode
     */
    const handleResize = useCallback(() => {
        window.innerWidth >= Config.desktopMinWidth ?
            (!isDesktop && switchToDesktop?.())
            :
            (isDesktop && switchToMobile?.());
    }, [
        isDesktop,
        switchToDesktop, switchToMobile
    ]);

    useEffect(() => {

        Event.addEvent(window, 'resize', handleResize);
        document.getElementById('loading').style.display = 'none';

        return () => Event.removeEvent(window, 'resize', handleResize);

    }, [
        handleResize
    ]);

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

Root.propTypes = {

    route: PropTypes.object,
    location: PropTypes.object,

    isDesktop: PropTypes.bool,

    switchToDesktop: PropTypes.func,
    switchToMobile: PropTypes.func

};

export default connect(state => ({
    isDesktop: state.device.isDesktop
}), dispatch => bindActionCreators({
    switchToDesktop: actions.switchToDesktop,
    switchToMobile: actions.switchToMobile
}, dispatch))(Root);
