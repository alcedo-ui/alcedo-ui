/**
 * @file LandingComponentCount.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React from 'react';
import PropTypes from 'prop-types';

// Statics
import {COMPONENTS_TOTAL_COUNT} from 'src';

// Styles
import './LandingComponentCount.scss';

const LandingComponentCount = () => (
    <section id="landing-component-count"
             className="landing-section">

        <div className="landing-section-inner">

            <div className="components-total-count">
                {COMPONENTS_TOTAL_COUNT}
            </div>

            <div>Unique Components</div>

        </div>

    </section>
);

LandingComponentCount.propTypes = {
    bodyScrollTop: PropTypes.number
};

LandingComponentCount.defaultProps = {
    bodyScrollTop: 0
};

export default LandingComponentCount;
