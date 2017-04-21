import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import 'sass/containers/landing/sections/LandingGetStarted.scss';

class LandingGetStarted extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="landing-get-started"
                     className="landing-section">
                <div className="landing-section-inner"></div>
            </section>
        );
    }
}

LandingGetStarted.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingGetStarted);