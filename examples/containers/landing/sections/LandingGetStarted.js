import React, {Component, PropTypes} from 'react';
import Highlight from 'react-highlight';

import 'highlight.js/styles/androidstudio.css';
import 'sass/containers/landing/sections/LandingGetStarted.scss';

export default class LandingGetStarted extends Component {

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

                    <Highlight className='bash landing-bash'>
                        {'# latest stable' + '\n' + '$ npm install alcedo-ui --save'}
                    </Highlight>

                </div>

            </section>
        );
    }
}

LandingGetStarted.propTypes = {};