import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import 'sass/containers/landing/sections/LandingUsage.scss';

class LandingUsage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="landing-usage"
                     className="landing-section">
                <div className="landing-section-inner"></div>
            </section>
        );
    }
}

LandingUsage.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingUsage);