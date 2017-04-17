import _ from 'lodash';

import * as types from 'reduxes/actionTypes';
import DEFAULT_MENU from 'examples/config.menu';

const userMenuCollapsed = localStorage.getItem('userMenuCollapsed');

const initialState = {

    menu: _.cloneDeep(DEFAULT_MENU),

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
                if (state.menu[i].children.findIndex(item => item.route === action.route) > -1) {
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