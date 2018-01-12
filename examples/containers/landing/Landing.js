import React, {Component} from 'react';
import _ from 'lodash';

import Event from 'vendors/Event';

import LandingNav from './LandingNav';
import LandingIntro from './sections/LandingIntro';
import LandingComponentCount from './sections/LandingComponentCount';
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

        this.scrollHandler = this::this.scrollHandler;
        this.debounceScrollHandler = _.debounce(this::this.debounceScrollHandler, 150);

    }

    debounceScrollHandler() {
        this.setState({
            bodyScrollTop: document.body.scrollTop || document.documentElement.scrollTop
        });
    }

    scrollHandler(e) {
        this.debounceScrollHandler(e);
    }

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