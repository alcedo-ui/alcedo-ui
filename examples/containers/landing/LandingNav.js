/**
 * @file LandingNav.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {useCallback, forwardRef} from 'react';
import PropTypes from 'prop-types';

// Components
import IconAnchor from 'src/IconAnchor';
import NavItem from './LandingNavItem';

// Vendors
import classnames from 'classnames';

// Styles
import 'scss/containers/landing/LandingNav.scss';

const LandingNav = forwardRef(({menu, activatedMenu, isFixed}, ref) => {

    const handleClick = useCallback(activatedMenu => {
        const scrollTop = document.querySelector(activatedMenu.hash).offsetTop - 60;
        document.body.scrollTop = scrollTop;
        document.documentElement.scrollTop = scrollTop;
    });

    return (
        <div ref={ref}
             className={classnames('landing-nav-wrapper', {
                 fixed: isFixed
             })}>

            <div className="landing-nav-bg"></div>

            <div className="landing-nav">
                <div className="landing-nav-inner">

                    <a className="logo"
                       href="#/">
                        <i className="logo-icon"></i>
                        <span className="logo-text">Alcedo-UI</span>
                    </a>

                    <ul className="landing-nav-menu">
                        {
                            menu && menu.map((item, index) =>
                                <NavItem key={index}
                                         data={item}
                                         activated={activatedMenu.hash === item.hash}
                                         onClick={handleClick}/>
                            )
                        }
                    </ul>

                    <IconAnchor className="github-icon"
                                iconCls="fab fa-github"
                                href="https://github.com/alcedo-ui/alcedo-ui"/>

                </div>
            </div>

        </div>
    );

});

LandingNav.propTypes = {
    menu: PropTypes.array,
    activatedMenu: PropTypes.object,
    isFixed: PropTypes.bool
};

export default LandingNav;
