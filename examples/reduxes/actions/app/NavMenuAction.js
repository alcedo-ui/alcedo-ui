import * as types from 'reduxes/actionTypes';

export const expandMenu = (menuName) => ({
    type: types.EXPAND_MENU,
    menuName
});

export const expandActivatedMenu = (route) => ({
    type: types.EXPAND_ACTIVATED_MENU,
    route
});