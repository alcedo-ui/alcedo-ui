import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import FlatButton from 'dist/FlatButton';

import 'sass/containers/landing/sections/LandingIntro.scss';

class LandingIntro extends Component {

    constructor(props) {

        super(props);

        this.goToDemo = this::this.goToDemo;

    }

    getStarted() {
        location = '#get-started';
    }

    goToDemo() {
        this.context.router.push('/components');
    }

    render() {
        return (
            <section id="landing-intro"
                     className="landing-section">

                <div className="landing-section-intro-bg"></div>

                <div className="landing-section-intro">

                    <div className="landing-section-inner">

                        <i className="logo-icon"></i>
                        <div className="logo-text">Alcedo-UI</div>
                        <div className="slogen">A Set of React Components</div>

                        <div className="buttons">
                            <FlatButton className="ghost-button"
                                        value="Get Started"
                                        onTouchTap={this.getStarted}/>
                            <FlatButton className="ghost-button"
                                        value="Go to Demo"
                                        onTouchTap={this.goToDemo}/>
                        </div>

                    </div>

                </div>

            </section>
        );
    }
}

LandingIntro.contextTypes = {
    router: React.PropTypes.object.isRequired
};

LandingIntro.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingIntro);