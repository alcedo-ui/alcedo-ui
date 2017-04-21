import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import 'sass/containers/landing/LandingFoot.scss';

class LandingFoot extends Component {

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

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingFoot);