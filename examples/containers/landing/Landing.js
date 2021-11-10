/**
 * @file Landing.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {useState, useCallback, useEffect, useRef} from 'react';

// Components
import LandingNav from './LandingNav';
import LandingIntro from './sections/LandingIntro';
import LandingComponentCount from './sections/LandingComponentCount';
import LandingGetStarted from './sections/LandingGetStarted';
import LandingUsage from './sections/LandingUsage';
import LandingExamples from './sections/LandingExamples';
import LandingFoot from './LandingFoot';

// Vendors
import {findDOMNode} from 'react-dom';
import Event from 'vendors/Event';

// Styles
import 'scss/containers/landing/Landing.scss';

// eslint-disable-next-line require-jsdoc
function Landing() {

    const nav = useRef(null);

    const [bodyScrollTop, setBodyScrollTop] = useState(0);
    const [activatedMenu, setActivatedMenu] = useState(Landing.MENU[0]);
    const [isNavFixed, setIsNavFixed] = useState(false);
    const [navHeight, setNavHeight] = useState(0);

    const getIsNavFixed = useCallback(bodyScrollTop => {
        const introEl = document.querySelector(Landing.MENU[0].hash);
        return !!(introEl && (bodyScrollTop > introEl.clientHeight - navHeight));
    }, [
        navHeight
    ]);

    const getActivatedMenu = useCallback(bodyScrollTop => {

        let activatedMenu = Landing.MENU[0];

        for (let i = 0, len = Landing.MENU.length; i < len; i++) {
            const el = document.querySelector(Landing.MENU[i].hash);
            if (el && bodyScrollTop >= el.offsetTop - navHeight) {
                activatedMenu = Landing.MENU[i];
            }
        }

        return activatedMenu;

    }, [
        navHeight
    ]);

    const handleScroll = useCallback(() => {

        const nextBodyScrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        if (nextBodyScrollTop !== bodyScrollTop) {
            setBodyScrollTop(nextBodyScrollTop);
            setActivatedMenu(getActivatedMenu(nextBodyScrollTop));
            setIsNavFixed(getIsNavFixed(nextBodyScrollTop));
        }

    }, [
        bodyScrollTop,
        getActivatedMenu, getIsNavFixed
    ]);

    useEffect(() => {

        Event.addEvent(document, 'scroll', handleScroll);

        const navEl = findDOMNode(nav?.current);
        setNavHeight(navEl?.offsetHeight || 80);
        handleScroll();

        return () => {
            Event.removeEvent(document, 'scroll', handleScroll);
        };

    }, [
        bodyScrollTop, navHeight,
        handleScroll
    ]);

    return (
        <div className="landing">

            <LandingNav ref={nav}
                        menu={Landing.MENU}
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

Landing.MENU = [{
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

export default Landing;
