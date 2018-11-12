import cloneDeep from 'lodash/cloneDeep';

import * as types from 'reduxes/actionTypes';
import DEFAULT_MENU from 'examples/config.menu';
import Util from 'vendors/Util';

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
    arrays.sort(function (a, b) {
        return a.text.toUpperCase() > b.text.toUpperCase() ? 1 : -1;
    });

    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].hasOwnProperty('children')) {
            sortMenu(arrays[i].children);
        }
    }
}

function getMenu(filter) {

    let menu = cloneDeep(DEFAULT_MENU);

    if (filter) {
        filterMenu(menu, filter);
    }

    sortMenu(menu);

    return menu;

}

function calExpandMenuName(menu, lastValue) {

    let result;

    for (let item of menu) {

        if (lastValue && item.text === lastValue) {
            return lastValue;
        }

        if (item.children && item.children.length > 0) {
            result = item.text;
        }

    }

    return result;

}

function getActivatedMenu() {

    if (!location.hash || !location.hash.slice(1)) {
        return;
    }

    let result;

    Util.preOrderTraverse({
        children: DEFAULT_MENU
    }, node => {
        if (node && node.route && node.route === location.hash.slice(1)) {
            result = node;
            return false;
        }
    });

    return result;

}

const initialMenu = getMenu(),
    initialState = {

        filter: '',

        menu: initialMenu,

        activatedMenu: getActivatedMenu(),

        navMenuCollapsed: true,

        expandMenuName: calExpandMenuName(initialMenu)

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

            const filter = action.filter,
                menu = getMenu(action.filter),
                expandMenuName = calExpandMenuName(menu, state.expandMenuName);

            return {
                ...state,
                filter,
                menu,
                expandMenuName
            };

        }

        case types.UPDATE_ACTIVATED_MENU: {
            return {
                ...state,
                activatedMenu: action.activatedMenu
            };
        }

        default:
            return state;

    }
}

export default navMenu;
