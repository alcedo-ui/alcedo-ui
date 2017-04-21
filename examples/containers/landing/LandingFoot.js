import React, {Component, PropTypes} from 'react';

import 'sass/containers/landing/LandingFoot.scss';

export default class LandingFoot extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="landing-foot">
                <span className="name">Alcedo-UI </span>
                is freely distributable under the terms of the
                <span className="licence"> MIT</span> license.
            </div>
        );
    }
}

LandingFoot.contextTypes = {
    router: React.PropTypes.object.isRequired
};

LandingFoot.propTypes = {};