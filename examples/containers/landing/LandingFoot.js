import React, {Component} from 'react';

import IconAnchor from 'dist/IconAnchor';

import 'sass/containers/landing/LandingFoot.scss';

export default class LandingFoot extends Component {

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
                            iconCls="fa fa-github"
                            href="https://github.com/alcedo-ui/alcedo-ui"/>

            </div>
        );
    }
}