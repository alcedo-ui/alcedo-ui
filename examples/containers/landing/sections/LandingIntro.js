import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'src/FlatButton';

import 'sass/containers/landing/sections/LandingIntro.scss';

export default class LandingIntro extends Component {

    constructor(props) {

        super(props);

        this.goToDemo = this::this.goToDemo;

    }

    goToDemo() {
        this.context.router.history.push('/components');
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

                        <FlatButton className="ghost-button"
                                    value="Demo"
                                    onTouchTap={this.goToDemo}/>

                    </div>

                </div>

            </section>
        );
    }
}

LandingIntro.contextTypes = {
    router: PropTypes.object.isRequired
};