import _ from 'lodash';

import * as types from 'reduxes/actionTypes';
import DEFAULT_MENU from 'examples/config.menu';

const userMenuCollapsed = localStorage.getItem('userMenuCollapsed');

const orderMenu = _.cloneDeep(DEFAULT_MENU);

function sortObject(arrays) {
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

        if (arrays[i].hasOwnProperty("children")) {
            sortObject(arrays[i].children);
        }

    }
}

sortObject(orderMenu);

const initialState = {

    menu: orderMenu,

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

        default:
            return state;

    }
}

export default navMenu;