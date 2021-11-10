/**
 * @file LandingIntro.js
 */

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

// Components
import FlatButton from 'src/FlatButton';

// Styles
import './LandingIntro.scss';

const LandingIntro = ({
    routerPush
}) => {

    const goToDemo = useCallback(() => {
        routerPush?.('/components');
    }, [
        routerPush
    ]);

    return (
        <section id="landing-intro"
                 className="landing-section">

            <div className="landing-section-intro-bg"/>

            <div className="landing-section-intro">

                <div className="landing-section-inner">

                    <i className="logo-icon"/>
                    <div className="logo-text">
                        Alcedo-UI
                    </div>
                    <div className="slogen">
                        A Set of React Components
                    </div>

                    <FlatButton className="ghost-button"
                                value="Examples"
                                onClick={goToDemo}/>

                </div>

            </div>

        </section>
    );

};

LandingIntro.propTypes = {
    routerPush: PropTypes.func
};

export default connect(null, dispatch => bindActionCreators({
    routerPush: actions.routerPush
}, dispatch))(LandingIntro);
