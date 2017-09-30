import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import TouchRipple from 'src/TouchRipple';

export default class NavMenuItem extends Component {

    constructor(props) {

        super(props);

        this.menuHeight = 50;
        this.subMenuIndent = 20;

        this.menuGroupMousedownHandle = this::this.menuGroupMousedownHandle;
        this.menuMousedownHandle = this::this.menuMousedownHandle;

    }

    menuGroupMousedownHandle() {

        const {expandMenuName, options, expandMenu} = this.props;

        if (expandMenuName === options.text) {
            expandMenu('');
        } else {
            expandMenu(options.text);
        }

    }

    menuMousedownHandle() {
        const {options, depth, expandMenu, updateActivatedMenu} = this.props;
        depth === 0 && expandMenu('');
        updateActivatedMenu(options);
    }

    render() {

        const {expandMenuName, activatedMenu, options, depth, expandMenu, updateActivatedMenu} = this.props;
        const {menuHeight, subMenuIndent} = this;

        const collapsed = expandMenuName !== options.text,
            hasChildren = options.children && options.children.length > 0;

        return (
            <div className={`nav-menu-item ${collapsed ? 'collapsed' : ''} ${hasChildren ? 'hasChildren' : ''}`}>

                {/* title or link */}
                {
                    hasChildren ?
                        (
                            <div className="nav-menu-item-title"
                                 disabled={options.disabled}
                                 onMouseDown={this.menuGroupMousedownHandle}>

                                <div className="nav-menu-item-name">
                                    {options.text}
                                </div>

                                <i className={`fa fa-angle-down nav-menu-item-collapse-button
                                ${collapsed ? 'collapsed' : ''}`}
                                   aria-hidden="true"></i>

                                <TouchRipple/>

                            </div>
                        )
                        :
                        (
                            <Link
                                className={'nav-menu-item-link' + (activatedMenu && activatedMenu.route === options.route ? ' router-link-active' : '')}
                                to={options.route}
                                disabled={options.disabled}
                                onClick={this.menuMousedownHandle}
                                replace>

                                <div className="nav-menu-item-name"
                                     style={{marginLeft: depth * subMenuIndent}}>
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
                            <div className="nav-menu-children"
                                 style={{height: options.children.length * menuHeight}}>
                                {
                                    options.children.map((item, index) => {
                                        return (
                                            <NavMenuItem key={index}
                                                         expandMenuName={expandMenuName}
                                                         activatedMenu={activatedMenu}
                                                         options={item}
                                                         depth={depth + 1}
                                                         expandMenu={expandMenu}
                                                         updateActivatedMenu={updateActivatedMenu}/>
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
    activatedMenu: null,

    options: null,
    depth: 0

};