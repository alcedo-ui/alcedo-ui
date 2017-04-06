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

export const collapseUserMenu = () => ({
	type: types.COLLAPSE_USER_MENU
});

export const expandUserMenu = () => ({
	type: types.EXPAND_USER_MENU
});

export const toggleUserMenu = () => ({
	type: types.TOGGLE_USER_MENU
});