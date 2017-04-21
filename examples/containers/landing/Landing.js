import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';
import Event from 'vendors/Event';

import LandingNav from './LandingNav';
import LandingIntro from './sections/LandingIntro';
import LandingGetStarted from './sections/LandingGetStarted';
import LandingUsage from './sections/LandingUsage';
import LandingExamples from './sections/LandingExamples';
import LandingFoot from './LandingFoot';

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

                <LandingNav bodyScrollTop={bodyScrollTop}/>

                <LandingIntro/>

                <LandingGetStarted/>

                <LandingUsage/>

                <LandingExamples/>

                <LandingFoot/>

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