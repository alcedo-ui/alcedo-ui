import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconAnchor from 'dist/IconAnchor';

import 'sass/containers/landing/LandingNav.scss';

class LandingNav extends Component {

    constructor(props) {

        super(props);

        this.menu = [{
            name: 'Intro',
            hash: '#landing-intro'
        }, {
            name: 'Get Started',
            hash: '#landing-get-started'
        }, {
            name: 'Usage',
            hash: '#landing-usage'
        }, {
            name: 'Examples',
            hash: '#landing-examples'
        }];

    }

    render() {

        const {bodyScrollTop} = this.props;

        return (
            <div className="landing-nav-wrapper">

                <div className="landing-nav-bg"
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

                        <div className="menu">
                            {
                                this.menu.map((item, index) => {
                                    return (
                                        <a key={index}
                                           className={`menu-item ${location.hash === item.hash ? 'activated' : ''}`}
                                           href={item.hash}>
                                            {item.name}
                                        </a>
                                    );
                                })
                            }
                        </div>

                    </div>
                </div>

            </div>
        );

    }
}

LandingNav.propTypes = {
    bodyScrollTop: PropTypes.number
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingNav);