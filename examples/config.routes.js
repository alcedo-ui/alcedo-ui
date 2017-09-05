import {asyncComponent} from 'vendors/AsyncComponent';

import AppContainer from 'examples/containers/AppContainer';
import AppRoot from 'examples/containers/AppRoot';

export default [{
    component: AppContainer,
    routes: [{
        path: '/',
        component: AppRoot,
        routes: [{
            path: '/landing',
            component: asyncComponent(() => {
                return import(
                    /* webpackChunkName: "Landing" */
                    'containers/landing/Landing'
                    );
            })
        }, {
            path: '/components',
            component: asyncComponent(() => {
                return import(
                    /* webpackChunkName: "App" */
                    'containers/app/App'
                    );
            }),
            routes: [

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- buttons -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/RaisedButton',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "RaisedButtonExamples" */
                            'modules/buttons/RaisedButtonExamples'
                            );
                    })
                }, {
                    path: '/components/FlatButton',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "FlatButtonExamples" */
                            'modules/buttons/FlatButtonExamples'
                            );
                    })
                }, {
                    path: '/components/GhostButton',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "GhostButtonExamples" */
                            'modules/buttons/GhostButtonExamples'
                            );
                    })
                }, {
                    path: '/components/IconButton',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "IconButtonExamples" */
                            'modules/buttons/IconButtonExamples'
                            );
                    })
                }, {
                    path: '/components/IconAnchor',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "IconAnchorExamples" */
                            'modules/buttons/IconAnchorExamples'
                            );
                    })
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- fields -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/CascaderField',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "CascaderFieldExamples" */
                            'modules/fields/CascaderFieldExamples'
                            );
                    })
                }, {
                    path: '/components/TextField',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "TextFieldExamples" */
                            'modules/fields/TextFieldExamples'
                            );
                    })
                }, {
                    path: '/components/TextArea',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "TextAreaExamples" */
                            'modules/fields/TextAreaExamples'
                            );
                    })
                }, {
                    path: '/components/RemoteAutoComplete',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "RemoteAutoCompleteExamples" */
                            'modules/fields/RemoteAutoCompleteExamples'
                            );
                    })
                }, {
                    path: '/components/LocalAutoComplete',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "LocalAutoCompleteExamples" */
                            'modules/fields/LocalAutoCompleteExamples'
                            );
                    })
                }, {
                    path: '/components/DatePicker',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "DatePickerExamples" */
                            'modules/fields/DatePickerExamples'
                            );
                    })
                }, {
                    path: '/components/DateRangePicker',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "DateRangePickerExamples" */
                            'modules/fields/DateRangePickerExamples'
                            );
                    })
                }, {
                    path: '/components/TimePicker',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "TimePickerExamples" */
                            'modules/fields/TimePickerExamples'
                            );
                    })
                }, {
                    path: '/components/DateTimePicker',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "DateTimePickerExamples" */
                            'modules/fields/DateTimePickerExamples'
                            );
                    })
                }, {
                    path: '/components/DropdownSelect',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "DropdownSelectExamples" */
                            'modules/fields/DropdownSelectExamples'
                            );
                    })
                }, {
                    path: '/components/MultipleSelect',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "MultipleSelectExamples" */
                            'modules/fields/MultipleSelectExamples'
                            );
                    })
                }, {
                    path: '/components/TreeSelect',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "TreeSelectExamples" */
                            'modules/fields/TreeSelectExamples'
                            );
                    })
                }, {
                    path: '/components/Tree',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "TreeExamples" */
                            'modules/fields/TreeExamples'
                            );
                    })
                }, {
                    path: '/components/Checkbox',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "CheckboxExamples" */
                            'modules/fields/CheckboxExamples'
                            );
                    })
                }, {
                    path: '/components/Radio',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "RadioExamples" */
                            'modules/fields/RadioExamples'
                            );
                    })
                }, {
                    path: '/components/RadioGroup',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "RadioGroupExamples" */
                            'modules/fields/RadioGroupExamples'
                            );
                    })
                }, {
                    path: '/components/ButtonCheckbox',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "ButtonCheckboxExamples" */
                            'modules/fields/ButtonCheckboxExamples'
                            );
                    })
                }, {
                    path: '/components/ButtonRadioGroup',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "ButtonRadioGroupExamples" */
                            'modules/fields/ButtonRadioGroupExamples'
                            );
                    })
                }, {
                    path: '/components/Switcher',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "SwitcherExamples" */
                            'modules/fields/SwitcherExamples'
                            );
                    })
                }, {
                    path: '/components/Slider',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "SliderExamples" */
                            'modules/fields/SliderExamples'
                            );
                    })
                }, {
                    path: '/components/EditableField',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "EditableFieldExamples" */
                            'modules/fields/EditableFieldExamples'
                            );
                    })
                }, {
                    path: '/components/FlashNumber',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "FlashNumberExamples" */
                            'modules/fields/FlashNumberExamples'
                            );
                    })
                }, {
                    path: '/components/Transfer',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "TransferExamples" */
                            'modules/fields/TransferExamples'
                            );
                    })
                }, {
                    path: '/components/TagField',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "TagFieldExamples" */
                            'modules/fields/TagFieldExamples'
                            );
                    })
                }, {
                    path: '/components/Rate',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "RateExamples" */
                            'modules/fields/RateExamples'
                            );
                    })
                }, {
                    path: '/components/EditableSelect',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "EditableSelectExamples" */
                            'modules/fields/EditableSelectExamples'
                            );
                    })
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- popup -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/Dialog',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "DialogExamples" */
                            'modules/popup/DialogExamples'
                            );
                    })
                }
            ]
        }]
    }]
}];