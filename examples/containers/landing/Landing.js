import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'dist/IconButton';
import IconAnchor from 'dist/IconAnchor';

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

                        <a className="logo"
                           href="/">
                            <i className="logo-icon"></i>
                            <span className="logo-text">Alcedo-UI</span>
                        </a>

                        <IconAnchor className="github-icon"
                                    iconCls="fa fa-github"
                                    href="https://github.com/alcedo-ui/alcedo-ui"/>

                    </div>
                </div>

                <section className="landing-section intro">
                    <div className="landing-section-inner">
                        <i className="logo-icon"></i>
                        <div className="logo-text">Alcedo-UI</div>
                        <div className="slogen">A Set of React Components</div>
                    </div>
                </section>

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