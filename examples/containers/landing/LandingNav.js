import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconAnchor from 'dist/IconAnchor';

import 'sass/containers/landing/LandingNav.scss';

export default class LandingNav extends Component {

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

        this.menuClickHandle = this::this.menuClickHandle;
        this.updateActivatedMenu = this::this.updateActivatedMenu;

    }

    menuClickHandle(activatedMenu) {
        document.body.scrollTop = document.querySelector(activatedMenu.hash).offsetTop - 60;
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

        const {bodyScrollTop} = this.props,
            {activatedMenu} = this.state,
            introEl = document.querySelector(this.menu[0].hash),
            isFixed = introEl && (bodyScrollTop > introEl.clientHeight - this.navHeight);

        return (
            <div ref="wrapper"
                 className={`landing-nav-wrapper ${isFixed ? 'fixed' : ''}`}>

                <div className="landing-nav-bg"></div>

                <div className="landing-nav">
                    <div className="landing-nav-inner">

                        <a className="logo"
                           href="#/">
                            <i className="logo-icon"></i>
                            <span className="logo-text">Alcedo-UI</span>
                        </a>

                        <IconAnchor className="github-icon"
                                    iconCls="fa fa-github"
                                    href="https://github.com/alcedo-ui/alcedo-ui"/>

                        <ul className="menu">
                            {
                                this.menu.map((item, index) => {
                                    return (
                                        <li key={index}
                                            className={`menu-item
                                                ${activatedMenu.hash === item.hash ? 'activated' : ''}`}
                                            onClick={() => {
                                                this.menuClickHandle(item);
                                            }}>
                                            {item.name}
                                        </li>
                                    );
                                })
                            }
                        </ul>

                    </div>
                </div>

            </div>
        );

    }
}

LandingNav.propTypes = {
    bodyScrollTop: PropTypes.number
};