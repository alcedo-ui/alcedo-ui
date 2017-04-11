import _ from 'lodash';

import * as types from 'reduxes/actionTypes';

const userMenuCollapsed = localStorage.getItem('userMenuCollapsed');

const DEFAULT_MENU = [{
    text: 'buttons',
    children: [{
        text: 'Raised Button',
        route: '/components/RaisedButton'
    }, {
        text: 'Flat Button',
        route: '/components/FlatButton'
    }, {
        text: 'Icon Button',
        route: '/components/IconButton'
    }]
},{
    text: 'popup',
    children: [{
        text: 'Dialog',
        route: '/components/Dialog'
    }]
},{
    text: 'progress',
    children: [{
        text: 'CircleProgress',
        route: '/components/CircularProgress'
    }, {
        text: 'LinearProgress',
        route: '/components/linearProgress'
    }]
}];

const initialState = {
    navMenuCollapsed: true,
    userMenuCollapsed: userMenuCollapsed !== null ? (userMenuCollapsed === '1' ? true : false) : true,
    menu: _.cloneDeep(DEFAULT_MENU)
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

        case types.EXPAND_USER_MENU: {

            localStorage.setItem('userMenuCollapsed', '0');

            return {
                ...state,
                userMenuCollapsed: false
            };

        }

        case types.COLLAPSE_USER_MENU: {

            localStorage.setItem('userMenuCollapsed', '1');

            return {
                ...state,
                userMenuCollapsed: true
            };

        }

        case types.TOGGLE_USER_MENU: {

            const userMenuCollapsed = !state.userMenuCollapsed;
            localStorage.setItem('userMenuCollapsed', userMenuCollapsed ? '1' : '0');

            return {
                ...state,
                userMenuCollapsed
            };

        }

        default:
            return state;

    }
}

export default navMenu;