import * as types from 'reduxes/actionTypes';

export const switchTheme = themeName => ({
    type: types.SWITCH_THEME,
    themeName
});