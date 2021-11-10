/**
 * @file LandingGetStarted.js
 */

import React from 'react';

// Styles
import './LandingGetStarted.scss';

const LandingGetStarted = () => (
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

export default LandingGetStarted;
