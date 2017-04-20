import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';
import Event from 'vendors/Event';

import IconAnchor from 'dist/IconAnchor';
import FlatButton from 'dist/FlatButton';

import 'sass/containers/landing/Landing.scss';

class Landing extends Component {

    constructor(props) {

        super(props);

        this.state = {
            bodyScrollTop: 0
        };

        this.scrollHandle = this::this.scrollHandle;

    }

    scrollHandle() {
        this.setState({
            bodyScrollTop: document.body.scrollTop
        });
    }

    componentDidMount() {
        Event.addEvent(document, 'scroll', this.scrollHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'scroll', this.scrollHandle);
    }

    render() {

        const {bodyScrollTop} = this.state;

        return (
            <div className="landing">

                <div className="landing-bg"
                     style={{opacity: bodyScrollTop / 200}}></div>

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

                <section className="landing-section">
                    <div className="landing-section-intro-bg"></div>
                    <div className="landing-section-intro">
                        <div className="landing-section-inner">
                            <i className="logo-icon"></i>
                            <div className="logo-text">Alcedo-UI</div>
                            <div className="slogen">A Set of React Components</div>
                            <div className="buttons">
                                <FlatButton className="ghost-button"
                                            value="Get Started"/>
                                <FlatButton className="ghost-button"
                                            value="Go to Demo"/>
                            </div>
                        </div>
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