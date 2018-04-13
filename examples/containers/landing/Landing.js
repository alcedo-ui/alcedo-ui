import React, {Component} from 'react';
import debounce from 'lodash/debounce';

import LandingNav from './LandingNav';
import LandingIntro from './sections/LandingIntro';
import LandingComponentCount from './sections/LandingComponentCount';
import LandingGetStarted from './sections/LandingGetStarted';
import LandingUsage from './sections/LandingUsage';
import LandingExamples from './sections/LandingExamples';
import LandingFoot from './LandingFoot';

import Event from 'vendors/Event';

import 'sass/containers/landing/Landing.scss';

class Landing extends Component {

    constructor(props) {

        super(props);

        this.state = {
            bodyScrollTop: 0
        };

        this.scrollHandler = ::this.scrollHandler;

    }

    scrollHandler = debounce(() => {
        this.setState({
            bodyScrollTop: document.body.scrollTop || document.documentElement.scrollTop
        });
    }, 250);

    componentDidMount() {
        Event.addEvent(document, 'scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'scroll', this.scrollHandler);
    }

    render() {

        const {bodyScrollTop} = this.state;

        return (
            <div className="landing">

                <LandingNav bodyScrollTop={bodyScrollTop}/>

                <LandingIntro/>

                <LandingComponentCount bodyScrollTop={bodyScrollTop}/>

                <LandingGetStarted/>

                <LandingUsage/>

                <LandingExamples/>

                <LandingFoot/>

            </div>
        );

    }
}

export default Landing;