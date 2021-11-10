/**
 * @file LandingFoot.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React from 'react';

// Components
import IconAnchor from 'src/IconAnchor';

// Styles
import './LandingFoot.scss';

const LandingFoot = () => (
    <div className="landing-foot">

        <>
            <span className="name">Alcedo-UI</span>
            &nbsp;is freely distributable under the terms of the
            <a className="licence"
               href="https://github.com/alcedo-ui/alcedo-ui/blob/dev/LICENSE">
                {' MIT license'}
            </a>.
        </>

        <IconAnchor className="github-icon"
                    iconCls="fab fa-github"
                    href="https://github.com/alcedo-ui/alcedo-ui"/>

    </div>
);

export default LandingFoot;
