import * as types from 'reduxes/actionTypes';

export const collapseNavMenu = () => ({
    type: types.COLLAPSE_NAV_MENU
});

export const expandNavMenu = () => ({
    type: types.EXPAND_NAV_MENU
});

export const toggleNavMenu = () => ({
    type: types.TOGGLE_NAV_MENU
});

export const expandMenu = (menuName) => ({
    type: types.EXPAND_MENU,
    menuName
});

export const expandActivatedMenu = (route) => ({
    type: types.EXPAND_ACTIVATED_MENU,
    route
});

export const updateFilter = (filter) => ({
    type: types.UPDATE_FILTER,
    filter
});

export const updateActivatedMenu = (activatedMenu) => ({
    type: types.UPDATE_ACTIVATED_MENU,
    activatedMenu
});