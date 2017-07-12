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

        this.scrollHandle = this::this.scrollHandle;
        this.debounceScrollHandle = _.debounce(this::this.debounceScrollHandle, 150);

    }

    debounceScrollHandle() {
        this.setState({
            bodyScrollTop: document.body.scrollTop
        });
    }

    scrollHandle(e) {
        this.debounceScrollHandle(e);
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

                <LandingComponentCount bodyScrollTop={bodyScrollTop}/>

                <LandingGetStarted/>

                <LandingUsage/>

                <LandingExamples/>

                <LandingFoot/>

            </div>
        );

    }
}