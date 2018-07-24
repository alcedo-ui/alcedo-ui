import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import IconAnchor from 'src/IconAnchor';

import 'sass/containers/landing/LandingNav.scss';

class LandingNav extends Component {

    constructor(props) {
        super(props);
    }

    menuClickHandler = activatedMenu => {
        const scrollTop = document.querySelector(activatedMenu.hash).offsetTop - 60;
        document.body.scrollTop = scrollTop;
        document.documentElement.scrollTop = scrollTop;
    };

    render() {

        const {menu, activatedMenu, isFixed} = this.props,

            wrapperClassName = classnames('landing-nav-wrapper', {
                fixed: isFixed
            });

        return (
            <div ref="wrapper"
                 className={wrapperClassName}>

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
                                    <li key={index}
                                        className={classnames('landing-nav-menu-item', {
                                            activated: activatedMenu.hash === item.hash
                                        })}
                                        onClick={() => {
                                            this.menuClickHandler(item);
                                        }}>
                                        {item.name}
                                    </li>
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

    }
}

LandingNav.propTypes = {
    menu: PropTypes.array,
    activatedMenu: PropTypes.object,
    isFixed: PropTypes.bool
};

export default LandingNav;