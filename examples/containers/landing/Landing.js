/**
 * @file Landing.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {useState, useCallback, useEffect, useRef} from 'react';
import {findDOMNode} from 'react-dom';

// Components
import LandingNav from './LandingNav';
import LandingIntro from './sections/LandingIntro';
import LandingComponentCount from './sections/LandingComponentCount';
import LandingGetStarted from './sections/LandingGetStarted';
import LandingUsage from './sections/LandingUsage';
import LandingExamples from './sections/LandingExamples';
import LandingFoot from './LandingFoot';

// Vendors
import Event from 'vendors/Event';

// Styles
import 'scss/containers/landing/Landing.scss';

function Landing() {

    const MENU = [{
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
        }],

        nav = useRef(null),

        [bodyScrollTop, setBodyScrollTop] = useState(0),
        [activatedMenu, setActivatedMenu] = useState(MENU[0]),
        [isNavFixed, setIsNavFixed] = useState(false),
        [navHeight, setNavHeight] = useState(0),

        getIsNavFixed = useCallback(bodyScrollTop => {
            const introEl = document.querySelector(MENU[0].hash);
            return introEl && (bodyScrollTop > introEl.clientHeight - navHeight);
        }),

        getActivatedMenu = useCallback(bodyScrollTop => {

            let activatedMenu = MENU[0];

            for (let i = 0, len = MENU.length; i < len; i++) {
                const el = document.querySelector(MENU[i].hash);
                if (el && bodyScrollTop >= el.offsetTop - navHeight) {
                    activatedMenu = MENU[i];
                }
            }

            return activatedMenu;

        }),

        handleScroll = useCallback(() => {

            const bodyScrollTop = document.body.scrollTop || document.documentElement.scrollTop;

            setBodyScrollTop(bodyScrollTop);
            setActivatedMenu(getActivatedMenu(bodyScrollTop));
            setIsNavFixed(getIsNavFixed(bodyScrollTop));

        });

    useEffect(() => {

        // mount
        Event.addEvent(document, 'scroll', handleScroll);

        const navEl = findDOMNode(nav?.current);
        setNavHeight(navEl?.offsetHeight || 80);

        // unmount
        return () => {
            Event.removeEvent(document, 'scroll', handleScroll);
        };

    }, []);

    return (
        <div className="landing">

            <LandingNav ref={nav}
                        menu={MENU}
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

export default Landing;
