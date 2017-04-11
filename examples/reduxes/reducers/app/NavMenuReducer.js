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
}];

const initialState = {
    menu: _.cloneDeep(DEFAULT_MENU),
    expandMenuName: ''
};

function navMenu(state = initialState, action) {
    switch (action.type) {

        case types.EXPAND_MENU: {
            return {
                ...state,
                expandMenuName: action.menuName
            };
        }

        default:
            return state;

    }
}

export default navMenu;