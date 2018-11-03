import React, {Component} from 'react';

import landingExampleHTML from './landingExample.html';

import 'assets/scss/containers/landing/sections/LandingUsage.scss';

class LandingUsage extends Component {

    constructor(props) {
        super(props);
    }

    getExampleHTML = () => {
        return {
            __html: landingExampleHTML
        };
    };

    render() {
        return (
            <section id="landing-usage"
                     className="landing-section">

                <div className="landing-section-inner">

                    <div className="landing-section-title">Usage</div>

                    <pre className="landing-code landing-jsx"
                         dangerouslySetInnerHTML={this.getExampleHTML()}>
                    </pre>

                </div>

            </section>
        );
    }
}

export default LandingUsage;
