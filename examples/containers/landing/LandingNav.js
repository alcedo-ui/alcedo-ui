import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import IconAnchor from 'src/IconAnchor';

import 'sass/containers/landing/LandingNav.scss';

class LandingNav extends Component {

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
            activatedMenu: this.menu[0]
        };

        this.menuClickHandle = ::this.menuClickHandle;
        this.updateActivatedMenu = ::this.updateActivatedMenu;
        this.isFixed = ::this.isFixed;

    }

    menuClickHandle(activatedMenu) {

        const scrollTop = document.querySelector(activatedMenu.hash).offsetTop - 60;

        document.body.scrollTop = scrollTop;
        document.documentElement.scrollTop = scrollTop;

    }

    updateActivatedMenu(props = this.props) {

        const {bodyScrollTop} = props;

        let activatedMenu = this.menu[0];
        for (let i = 0, len = this.menu.length; i < len; i++) {
            const el = document.querySelector(this.menu[i].hash);
            if (el && bodyScrollTop >= el.offsetTop - this.navHeight) {
                activatedMenu = this.menu[i];
            }
        }

        this.setState({
            activatedMenu
        });

    }

    isFixed() {
        const {bodyScrollTop} = this.props,
            introEl = document.querySelector(this.menu[0].hash);
        return introEl && (bodyScrollTop > introEl.clientHeight - this.navHeight);
    }

    componentDidMount() {

        this.updateActivatedMenu();

        this.navHeight = (this.refs.wrapper && this.refs.wrapper.clientHeight) || 80;

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.bodyScrollTop !== this.props.bodyScrollTop) {
            this.updateActivatedMenu(nextProps);
        }
    }

    render() {

        const {activatedMenu} = this.state,

            wrapperClassName = classnames('landing-nav-wrapper', {
                fixed: this.isFixed()
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
                                this.menu && this.menu.map((item, index) =>
                                    <li key={index}
                                        className={classnames('landing-nav-menu-item', {
                                            activated: activatedMenu.hash === item.hash
                                        })}
                                        onClick={() => {
                                            this.menuClickHandle(item);
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
    bodyScrollTop: PropTypes.number
};

export default LandingNav;