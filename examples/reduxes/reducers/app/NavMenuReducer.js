import _ from 'lodash';

import * as types from 'reduxes/actionTypes';
import DEFAULT_MENU from 'examples/config.menu';

function filterMenu(menu, filter) {

    if (!menu || !filter) {
        return;
    }

    for (let i = 0; i < menu.length; i++) {

        let item = menu[i];

        if (item.children && item.children.length > 0) { // group

            filterMenu(item.children, filter);

            if (item.children.length < 1) {
                menu.splice(i, 1);
                i--;
            }

        } else {
            if (!item.text || !item.text.toUpperCase().includes(filter.toUpperCase())) {
                menu.splice(i, 1);
                i--;
            }
        }

    }

}

function sortMenu(arrays) {

    let len = arrays.length;

    for (let i = 0; i < len - 1; i++) {

        if (i < arrays.length - 1) {
            for (let j = i + 1; j < len; j++) {
                if (arrays[i].text.charAt(0).toUpperCase() > arrays[j].text.charAt(0).toUpperCase()) {
                    let obj = arrays[i];
                    arrays[i] = arrays[j];
                    arrays[j] = obj;
                }
            }
        }

        if (arrays[i].hasOwnProperty('children')) {
            sortMenu(arrays[i].children);
        }

    }

}

function getMenu(filter) {

    let menu = _.cloneDeep(DEFAULT_MENU);

    if (filter) {
        filterMenu(menu, filter);
    }

    sortMenu(menu);

    return menu;

}

const initialState = {

    filter: '',

    menu: getMenu(),

    navMenuCollapsed: true,

    expandMenuName: 'buttons'

};

function navMenu(state = initialState, action) {
    switch (action.type) {

        case types.COLLAPSE_NAV_MENU: {

            localStorage.setItem('navMenuCollapsed', '1');

            return {
                ...state,
                navMenuCollapsed: true
            };

        }

        case types.EXPAND_NAV_MENU: {

            localStorage.setItem('navMenuCollapsed', '0');

            return {
                ...state,
                navMenuCollapsed: false
            };

        }

        case types.TOGGLE_NAV_MENU: {

            const navMenuCollapsed = !state.navMenuCollapsed;
            localStorage.setItem('navMenuCollapsed', navMenuCollapsed ? '1' : '0');

            return {
                ...state,
                navMenuCollapsed
            };

        }

        case types.EXPAND_MENU: {
            return {
                ...state,
                expandMenuName: action.menuName
            };
        }

        case types.EXPAND_ACTIVATED_MENU: {

            let expandMenuName;
            for (let i = 0, len = state.menu.length; i < len; i++) {
                if (state.menu[i].children
                    && state.menu[i].children.findIndex(item => item.route === action.route) > -1) {
                    expandMenuName = state.menu[i].text;
                }
            }

            return {
                ...state,
                expandMenuName
            };

        }

        case types.UPDATE_FILTER: {

            return {
                ...state,
                filter: action.filter,
                menu: getMenu(action.filter)
            };

        }

        default:
            return state;

    }
}

export default navMenu;