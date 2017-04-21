import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import 'sass/containers/landing/sections/LandingExamples.scss';

class LandingExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="landing-examples"
                     className="landing-section">

                <div className="landing-section-inner">

                    <div className="landing-section-title">Examples</div>


                </div>

            </section>
        );
    }
}

LandingExamples.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingExamples);