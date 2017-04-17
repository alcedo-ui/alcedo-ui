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
}, {
    text: 'popup',
    children: [{
        text: 'Dialog',
        route: '/components/Dialog'
    }, {
        text: 'Popup',
        route: '/components/Popup'
    }]
}, {
    text: 'date',
    children: [{
        text: 'Date Picker',
        route: '/components/DatePicker'
    }, {
        text: 'Date Range Picker',
        route: '/components/DateRangePicker'
    }, {
        text: 'Time Picker',
        route: '/components/TimePicker'
    }, {
        text: 'Date Time Picker',
        route: '/components/DateTimePicker'
    }]
}, {
    text: 'fields',
    children: [{
        text: 'Text Field',
        route: '/components/TextField'
    }, {
        text: 'Dropdown Select',
        route: '/components/DropdownSelect'
    }, {
        text: 'Multiple Select',
        route: '/components/MultipleSelect'
    }, {
        text: 'Checkbox',
        route: '/components/Checkbox'
    }, {
        text: 'Radio',
        route: '/components/Radio'
    }, {
        text: 'ToggleButton',
        route: '/components/ToggleButton'
    }, {
        text: 'Switcher',
        route: '/components/Switcher'
    }, {
        text: 'Slider',
        route: '/components/Slider'
    }]
}, {
    text: 'progress',
    children: [{
        text: 'CircleProgress',
        route: '/components/CircularProgress'
    }, {
        text: 'LinearProgress',
        route: '/components/linearProgress'
    }]
}, {
    text: 'layout',
    children: [{
        text: 'Paper',
        route: '/components/Paper'
    }, {
        text: 'Widget',
        route: '/components/Widget'
    }, {
        text: 'List',
        route: '/components/List'
    }, {
        text: 'Tab',
        route: '/components/Tab'
    }, {
        text: 'Accordion',
        route: '/components/Accordion'
    }, {
        text: 'Table',
        route: '/components/Table'
    }]
}, {
    text: 'stepper',
    children: [{
        text: 'ArrowStep',
        route: '/components/ArrowStep'
    }, {
        text: 'RoundStep',
        route: '/components/RoundStep'
    }]
}];

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