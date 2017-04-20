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

        this.menu = [{
            name: 'Intro',
            hash: '#intro'
        }, {
            name: 'Get Started',
            hash: '#get-started'
        }, {
            name: 'Usage',
            hash: '#usage'
        }, {
            name: 'Examples',
            hash: '#examples'
        }];

        this.state = {
            bodyScrollTop: 0
        };

        this.scrollHandle = this::this.scrollHandle;
        this.goToDemo = this::this.goToDemo;

    }

    scrollHandle() {
        this.setState({
            bodyScrollTop: document.body.scrollTop
        });
    }

    getStarted() {
        location = '#get-started';
    }

    goToDemo() {
        this.context.router.push('/components');
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

                <section id="intro"
                         className="landing-section">
                    <div className="landing-section-intro-bg"></div>
                    <div className="landing-section-intro">
                        <div className="landing-section-inner">
                            <i className="logo-icon"></i>
                            <div className="logo-text">Alcedo-UI</div>
                            <div className="slogen">A Set of React Components</div>
                            <div className="buttons">
                                <FlatButton className="ghost-button"
                                            value="Get Started"
                                            onTouchTap={this.getStarted}/>
                                <FlatButton className="ghost-button"
                                            value="Go to Demo"
                                            onTouchTap={this.goToDemo}/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="get-started"
                         className="landing-section">
                    <div className="landing-section-inner"></div>
                </section>

                <section id="usage"
                         className="landing-section">
                    <div className="landing-section-inner"></div>
                </section>

                <section id="examples"
                         className="landing-section">
                    <div className="landing-section-inner"></div>
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