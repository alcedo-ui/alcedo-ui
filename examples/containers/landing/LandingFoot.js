/**
 * @file LandingFoot.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React from 'react';

// Components
import IconAnchor from 'src/IconAnchor';

// Styles
import 'scss/containers/landing/LandingFoot.scss';

function LandingFoot() {
    return (
        <div className="landing-foot">

            <div>
                <span className="name">Alcedo-UI</span>
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

export default LandingFoot;
