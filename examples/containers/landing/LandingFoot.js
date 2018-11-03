import React, {Component} from 'react';

import IconAnchor from 'src/IconAnchor';

import 'assets/scss/containers/landing/LandingFoot.scss';

class LandingFoot extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="landing-foot">

                <div>
                    <span className="name">Alcedo-UI </span>
                    is freely distributable under the terms of the
                    <a className="licence"
                       href="https://github.com/alcedo-ui/alcedo-ui/blob/dev/LICENSE">
                        {' MIT license'}
                    </a>.
                </div>

                <IconAnchor className="github-icon"
                            iconCls="fab fa-github"
                            href="https://github.com/alcedo-ui/alcedo-ui"/>

            </div>

        );
    }
}

export default LandingFoot;
