/**
 * @file LandingExamples.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

// Components
import Paper from 'src/Paper';
import FlatButton from 'src/FlatButton';

// Styles
import 'scss/containers/landing/sections/LandingExamples.scss';

function LandingExamples({routerPush}) {

    const goToExamples = useCallback(() => {
        routerPush('/components');
    });

    return (
        <section id="landing-examples"
                 className="landing-section">

            <div className="landing-section-inner">

                <div className="landing-section-title">Examples</div>

                <FlatButton className="ghost-button"
                            value="Go to Examples"
                            onClick={goToExamples}/>

                <Paper className="landing-examples-demo"
                       depth={4}>
                    <div className="window-header">
                        <div className="window-header-dot"></div>
                        <div className="window-header-dot"></div>
                        <div className="window-header-dot"></div>
                    </div>
                    <img className="landing-examples-demo-img"
                         src={import('assets/images/example.jpg')}/>
                </Paper>

            </div>

        </section>
    );

}

LandingExamples.propTypes = {
    routerPush: PropTypes.func
};

export default connect(state => ({}), dispatch => bindActionCreators({
    routerPush: actions.routerPush
}, dispatch))(LandingExamples);
