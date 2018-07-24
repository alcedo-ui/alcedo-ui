import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

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

        this.state = {
            bodyScrollTop: 0,
            activatedMenu: this.menu[0],
            isNavFixed: false
        };

    }

    isNavFixed = bodyScrollTop => {
        const introEl = document.querySelector(this.menu[0].hash);
        return introEl && (bodyScrollTop > introEl.clientHeight - this.navHeight);
    };

    getActivatedMenu = bodyScrollTop => {

        let activatedMenu = this.menu[0];

        for (let i = 0, len = this.menu.length; i < len; i++) {
            const el = document.querySelector(this.menu[i].hash);
            if (el && bodyScrollTop >= el.offsetTop - this.navHeight) {
                activatedMenu = this.menu[i];
            }
        }

        return activatedMenu;

    };

    scrollHandler = () => {

        const bodyScrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        this.setState({
            bodyScrollTop,
            activatedMenu: this.getActivatedMenu(bodyScrollTop),
            isNavFixed: this.isNavFixed(bodyScrollTop)
        });

    };

    componentDidMount() {

        Event.addEvent(document, 'scroll', this.scrollHandler);

        this.navEl = findDOMNode(this.refs.nav);
        this.navHeight = (this.navEl && this.navEl.offsetHeight) || 80;

    }

    componentWillUnmount() {
        Event.removeEvent(document, 'scroll', this.scrollHandler);
    }

    render() {

        const {bodyScrollTop, activatedMenu, isNavFixed} = this.state;

        return (
            <div className="landing">

                <LandingNav ref="nav"
                            menu={this.menu}
                            activatedMenu={activatedMenu}
                            isFixed={isNavFixed}/>

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