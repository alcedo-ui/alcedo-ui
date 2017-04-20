import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import 'sass/containers/landing/Landing.scss';

class Landing extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {} = this.props;

        return (
            <div className="landing">
                <div className="landing-nav">
                    <div className="landing-nav-inner">

                    </div>
                </div>
            </div>
        );

    }
}

Landing.contextTypes = {
    router: React.PropTypes.object.isRequired
};

Landing.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);