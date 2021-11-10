/**
 * @file NavMenuAction.js
 */

import * as actionTypes from 'reduxes/actionTypes';

export const collapseNavMenu = () => ({
    type: actionTypes.COLLAPSE_NAV_MENU
});

export const expandNavMenu = () => ({
    type: actionTypes.EXPAND_NAV_MENU
});

export const toggleNavMenu = () => ({
    type: actionTypes.TOGGLE_NAV_MENU
});

export const expandMenu = menuName => ({
    type: actionTypes.EXPAND_MENU,
    menuName
});

export const expandActivatedMenu = route => ({
    type: actionTypes.EXPAND_ACTIVATED_MENU,
    route
});

export const updateFilter = filter => ({
    type: actionTypes.UPDATE_FILTER,
    filter
});

export const updateActivatedMenu = activatedMenu => ({
    type: actionTypes.UPDATE_ACTIVATED_MENU,
    activatedMenu
});
