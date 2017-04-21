import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Highlight from 'react-highlight';

import * as actions from 'reduxes/actions';

import 'highlight.js/styles/atom-one-dark.css';
import 'sass/containers/landing/sections/LandingGetStarted.scss';

class LandingGetStarted extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="landing-get-started"
                     className="landing-section">

                <div className="landing-section-inner">

                    <div className="landing-section-title">Get Started</div>
                    <div className="landing-section-subtitle">NPM</div>

                    <Highlight className='bash landing-get-started-bash'>
                        {'# latest stable' + '\n' + '$ npm install alcedo-ui'}
                    </Highlight>

                </div>

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