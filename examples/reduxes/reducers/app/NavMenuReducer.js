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
    }]
}];

const initialState = {
    menu: _.cloneDeep(DEFAULT_MENU),
    expandMenuName: 'buttons'
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