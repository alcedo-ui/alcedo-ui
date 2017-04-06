import * as types from 'reduxes/actionTypes';

const THEME_LIST = [{
    name: 'light'
}, {
    name: 'dark'
}];
const DEFAULT_THEME_NAME = 'light';

const initialState = {
    defaultThemeName: DEFAULT_THEME_NAME,
    themeList: THEME_LIST,
    themeName: localStorage.getItem('theme') || DEFAULT_THEME_NAME
};

function theme(state = initialState, action) {
    switch (action.type) {

        case types.SWITCH_THEME: {

            const themeName = action.themeName || DEFAULT_THEME_NAME;
            localStorage.setItem('theme', themeName);

            return {
                ...state,
                themeName
            };

        }

        default:
            return state;

    }
}

export default theme;