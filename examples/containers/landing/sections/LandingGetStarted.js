import React, {Component} from 'react';

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

                    <code className="landing-bash">
                        <div className="comment"># latest stable</div>
                        $ npm install alcedo-ui --save
                    </code>

                </div>

            </section>
        );
    }
}