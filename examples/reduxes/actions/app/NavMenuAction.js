import * as types from 'reduxes/actionTypes';

export const expandMenu = (menuName) => ({
    type: types.EXPAND_MENU,
    menuName
});