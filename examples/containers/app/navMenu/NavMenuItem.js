import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import TouchRipple from 'dist/TouchRipple';

export default class NavMenuItem extends Component {

    constructor(props) {

        super(props);

        this.menuHeight = 50;

        this.state = {
            collapsed: true
        };

        this.menuMousedownHandle = this::this.menuMousedownHandle;

    }

    menuMousedownHandle() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {

        const {options} = this.props;
        const {collapsed} = this.state;
        const {menuHeight} = this;

        const hasChildren = options.children && options.children.length > 0;

        return (
            <div className="nav-menu-item">

                {/* title or link */}
                {
                    hasChildren
                        ? (
                        <div className="nav-menu-item-title"
                             disabled={options.disabled}
                             onMouseDown={this.menuMousedownHandle}>

                            <div className="nav-menu-item-name">
                                {options.text}
                            </div>

                            <i className={`fa fa-angle-down nav-menu-item-collapse-button
                                ${collapsed ? 'collapsed' : ''}`}
                               aria-hidden="true"></i>

                            <TouchRipple/>

                        </div>
                    )
                        : (
                        <Link className="nav-menu-item-link"
                              to={options.route}
                              disabled={options.disabled}
                              activeClassName="router-link-active">

                            <div className="nav-menu-item-name">
                                {options.text}
                            </div>

                            <TouchRipple/>

                        </Link>
                    )
                }

                {/* sub menu */}
                {
                    hasChildren
                        ? (
                        <div className={`nav-menu-children ${collapsed ? 'collapsed' : ''}`}
                             style={{height: options.children.length * menuHeight}}>
                            {
                                options.children.map((item, index) => {
                                    return (
                                        <NavMenuItem key={index}
                                                     options={item}/>
                                    );
                                })
                            }
                        </div>
                    )
                        : null
                }

            </div>
        );

    }
};

NavMenuItem.propTypes = {
    options: PropTypes.object
};

NavMenuItem.defaultProps = {
    options: null
};