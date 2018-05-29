import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import TouchRipple from 'src/TouchRipple';

class NavMenuItem extends Component {

    constructor(props) {

        super(props);

        this.menuHeight = 50;
        this.subMenuIndent = 20;

    }

    menuGroupMousedownHandler = () => {

        const {expandMenuName, options, expandMenu} = this.props;

        if (expandMenuName === options.text) {
            expandMenu('');
        } else {
            expandMenu(options.text);
        }

    };

    menuMousedownHandler = () => {
        const {options, depth, expandMenu, updateActivatedMenu} = this.props;
        depth === 0 && expandMenu('');
        updateActivatedMenu(options);
    };

    render() {

        const {expandMenuName, activatedMenu, options, depth, expandMenu, updateActivatedMenu} = this.props,
            {menuHeight, subMenuIndent} = this,

            collapsed = expandMenuName !== options.text,
            hasChildren = options.children && options.children.length > 0,

            linkClassName = classNames('nav-menu-item-link', {
                'router-link-active': activatedMenu && activatedMenu.route === options.route
            });

        return (
            <div className={`nav-menu-item ${collapsed ? 'collapsed' : ''} ${hasChildren ? 'hasChildren' : ''}`}>

                {/* title or link */}
                {
                    hasChildren ?
                        <div className="nav-menu-item-title"
                             disabled={options.disabled}
                             onMouseDown={this.menuGroupMousedownHandler}>

                            <div className="nav-menu-item-name">
                                {options.text}
                            </div>

                            <i className={`fas fa-angle-down nav-menu-item-collapse-button
                                ${collapsed ? 'collapsed' : ''}`}
                               aria-hidden="true"></i>

                            <TouchRipple/>

                        </div>
                        :
                        <Link className={linkClassName}
                              to={options.route}
                              disabled={options.disabled}
                              onClick={this.menuMousedownHandler}>

                            <div className="nav-menu-item-name"
                                 style={{marginLeft: depth * subMenuIndent}}>
                                {options.text}
                            </div>

                            <TouchRipple/>

                        </Link>
                }

                {/* sub menu */}
                {
                    hasChildren ?
                        <div className="nav-menu-children"
                             style={{height: options.children.length * menuHeight}}>
                            {
                                options && options.children && options.children.map((item, index) =>
                                    <NavMenuItem key={index}
                                                 expandMenuName={expandMenuName}
                                                 activatedMenu={activatedMenu}
                                                 options={item}
                                                 depth={depth + 1}
                                                 expandMenu={expandMenu}
                                                 updateActivatedMenu={updateActivatedMenu}/>
                                )
                            }
                        </div>
                        :
                        null
                }

            </div>
        );

    }
}

NavMenuItem.propTypes = {

    expandMenuName: PropTypes.string,
    activatedMenu: PropTypes.object,

    options: PropTypes.object,
    depth: PropTypes.number,

    expandMenu: PropTypes.func,
    updateActivatedMenu: PropTypes.func

};

NavMenuItem.defaultProps = {
    expandMenuName: '',
    depth: 0
};

export default NavMenuItem;