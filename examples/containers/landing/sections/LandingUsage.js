/**
 * @file LandingUsage.js
 */

import React from 'react';

// Htmls
import landingExampleHTML from './landingExample.html';

// Styles
import './LandingUsage.scss';

const LandingUsage = () => (
    <section id="landing-usage"
             className="landing-section">

        <div className="landing-section-inner">

            <div className="landing-section-title">
                Usage
            </div>

            <pre className="landing-code landing-jsx"
                 dangerouslySetInnerHTML={{
                     __html: landingExampleHTML
                 }}>
            </pre>

        </div>

    </section>
);

export default LandingUsage;
