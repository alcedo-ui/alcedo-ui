/**
 * @file LandingComponentCount.js
 */

// Statics
import { COMPONENTS_TOTAL_COUNT } from 'src';

// Vendors
import React from 'react';

// Styles
import './LandingComponentCount.scss';

const LandingComponentCount = () => (
    <section id="landing-component-count" className="landing-section">
        <div className="landing-section-inner">
            <div className="components-total-count">
                {COMPONENTS_TOTAL_COUNT}
            </div>
            <div>Unique Components</div>
        </div>
    </section>
);

export default LandingComponentCount;
