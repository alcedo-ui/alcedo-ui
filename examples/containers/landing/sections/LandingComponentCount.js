import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {COMPONENTS_TOTAL_COUNT} from 'src';

import 'assets/scss/containers/landing/sections/LandingComponentCount.scss';

class LandingComponentCount extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section ref="section"
                     id="landing-component-count"
                     className="landing-section">

                <div className="landing-section-inner">

                    <div className="components-total-count">
                        {COMPONENTS_TOTAL_COUNT}
                    </div>

                    <div>Unique Components</div>

                </div>

            </section>
        );
    }
}

LandingComponentCount.propTypes = {
    bodyScrollTop: PropTypes.number
};

LandingComponentCount.defaultProps = {
    bodyScrollTop: 0
};

export default LandingComponentCount;
