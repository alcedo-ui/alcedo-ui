import React, {Component} from 'react';

import 'assets/scss/containers/landing/sections/LandingGetStarted.scss';

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

                    <pre className="landing-code landing-bash">
                        <div className="comment"># latest stable</div>
                        $ npm install alcedo-ui --save
                    </pre>

                </div>

            </section>
        );
    }
}

export default LandingGetStarted;
