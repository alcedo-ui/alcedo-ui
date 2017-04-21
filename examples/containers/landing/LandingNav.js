import React, {Component, PropTypes} from 'react';

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
            if (el && bodyScrollTop > el.offsetTop - 60) {
                activatedMenu = this.menu[i];
            }
        }

        this.setState({
            activatedMenu
        });

    }

    componentDidMount() {
        this.updateActivatedMenu();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.bodyScrollTop !== this.props.bodyScrollTop) {
            this.updateActivatedMenu(nextProps);
        }
    }

    render() {

        const {bodyScrollTop} = this.props;
        const {activatedMenu} = this.state;

        return (
            <div className={`landing-nav-wrapper ${bodyScrollTop > 0 ? 'fixed' : ''}`}>

                <div className="landing-nav-bg"
                     style={{opacity: bodyScrollTop / 200}}></div>

                <div className="landing-nav">
                    <div className="landing-nav-inner">

                        <a className="logo"
                           href="/">
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