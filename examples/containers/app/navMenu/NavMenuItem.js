/**
 * @file NavMenuItem.js
 */

import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';

// Components
import { Link } from 'react-router-dom';
import TouchRipple from 'src/TouchRipple';

// Vendors
import classNames from 'classnames';

const NavMenuItem = ({
    expandMenuName = '',
    activatedMenu,
    options,
    depth = 0,
    expandMenu,
    updateActivatedMenu,
}) => {
    const collapsed = useMemo(() => {
        return expandMenuName !== options?.text;
    }, [expandMenuName, options]);

    const hasChildren = useMemo(() => {
        return options?.children?.length > 0;
    }, [options]);

    const handleMenuGroupClick = useCallback(() => {
        expandMenu?.(collapsed ? options?.text : '');
    }, [collapsed, options, expandMenu]);

    const handleMenuClick = useCallback(() => {
        if (depth === 0) {
            expandMenu?.('');
        }
        updateActivatedMenu?.(options);
    }, [options, depth, expandMenu, updateActivatedMenu]);

    return (
        <div
            className={classNames('nav-menu-item', {
                collapsed,
                'has-children': hasChildren,
            })}
        >
            {/* title or link */}
            {hasChildren ? (
                <div
                    className="nav-menu-item-title"
                    onClick={handleMenuGroupClick}
                >
                    <div className="nav-menu-item-name">{options?.text}</div>

                    <i
                        className={classNames(
                            'fas fa-angle-down nav-menu-item-collapse-button',
                            {
                                collapsed,
                            },
                        )}
                        aria-hidden="true"
                    />

                    <TouchRipple />
                </div>
            ) : (
                <Link
                    className={classNames('nav-menu-item-link', {
                        'router-link-active':
                            activatedMenu?.route === options?.route,
                    })}
                    to={options?.route}
                    disabled={options?.disabled}
                    onClick={handleMenuClick}
                >
                    <div
                        className="nav-menu-item-name"
                        style={{
                            marginLeft: depth * NavMenuItem.SUB_MENU_INDENT,
                        }}
                    >
                        {options?.text}
                    </div>

                    <TouchRipple />
                </Link>
            )}

            {/* sub menu */}
            {hasChildren ? (
                <div
                    className="nav-menu-children"
                    style={{
                        height:
                            (options?.children?.length || 0) *
                            NavMenuItem.MENU_HEIGHT,
                    }}
                >
                    {options?.children?.map((item, index) => (
                        <NavMenuItem
                            key={index}
                            expandMenuName={expandMenuName}
                            activatedMenu={activatedMenu}
                            options={item}
                            depth={depth + 1}
                            expandMenu={expandMenu}
                            updateActivatedMenu={updateActivatedMenu}
                        />
                    )) || null}
                </div>
            ) : null}
        </div>
    );
};

NavMenuItem.MENU_HEIGHT = 50;
NavMenuItem.SUB_MENU_INDENT = 20;

NavMenuItem.propTypes = {
    expandMenuName: PropTypes.string,
    activatedMenu: PropTypes.object,

    options: PropTypes.object,
    depth: PropTypes.number,

    expandMenu: PropTypes.func,
    updateActivatedMenu: PropTypes.func,
};

export default NavMenuItem;
