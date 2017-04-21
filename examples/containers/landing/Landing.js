import React, {Component, PropTypes} from 'react';
import Event from 'vendors/Event';

import LandingNav from './LandingNav';
import LandingIntro from './sections/LandingIntro';
import LandingGetStarted from './sections/LandingGetStarted';
import LandingUsage from './sections/LandingUsage';
import LandingExamples from './sections/LandingExamples';
import LandingFoot from './LandingFoot';

import 'sass/containers/landing/Landing.scss';

export default class Landing extends Component {

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