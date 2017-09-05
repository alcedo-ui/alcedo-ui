import {asyncComponent} from 'vendors/AsyncComponent';

import AppContainer from 'examples/containers/AppContainer';
import AppRoot from 'examples/containers/AppRoot';

export default function configureRoutes(store) {

    return [{
        component: AppContainer,
        routes: [{
            path: '/',
            component: AppRoot,
            routes: [{
                path: '/landing',
                component: asyncComponent(store, () => {
                    return import(
                        /* webpackChunkName: "Landing" */
                        'containers/landing/Landing'
                        );
                })
            }, {
                path: '/components',
                component: asyncComponent(store, () => {
                    return import(
                        /* webpackChunkName: "App" */
                        'containers/app/App'
                        );
                }),
                routes: [

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- buttons -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/RaisedButton',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "RaisedButtonExamples" */
                                'modules/buttons/RaisedButtonExamples'
                                );
                        })
                    }, {
                        path: '/components/FlatButton',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "FlatButtonExamples" */
                                'modules/buttons/FlatButtonExamples'
                                );
                        })
                    }, {
                        path: '/components/GhostButton',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "GhostButtonExamples" */
                                'modules/buttons/GhostButtonExamples'
                                );
                        })
                    }, {
                        path: '/components/IconButton',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "IconButtonExamples" */
                                'modules/buttons/IconButtonExamples'
                                );
                        })
                    }, {
                        path: '/components/IconAnchor',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "IconAnchorExamples" */
                                'modules/buttons/IconAnchorExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- fields -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/CascaderField',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "CascaderFieldExamples" */
                                'modules/fields/CascaderFieldExamples'
                                );
                        })
                    }, {
                        path: '/components/TextField',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "TextFieldExamples" */
                                'modules/fields/TextFieldExamples'
                                );
                        })
                    }, {
                        path: '/components/TextArea',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "TextAreaExamples" */
                                'modules/fields/TextAreaExamples'
                                );
                        })
                    }, {
                        path: '/components/RemoteAutoComplete',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "RemoteAutoCompleteExamples" */
                                'modules/fields/RemoteAutoCompleteExamples'
                                );
                        })
                    }, {
                        path: '/components/LocalAutoComplete',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "LocalAutoCompleteExamples" */
                                'modules/fields/LocalAutoCompleteExamples'
                                );
                        })
                    }, {
                        path: '/components/DropdownSelect',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "DropdownSelectExamples" */
                                'modules/fields/DropdownSelectExamples'
                                );
                        })
                    }, {
                        path: '/components/MultipleSelect',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "MultipleSelectExamples" */
                                'modules/fields/MultipleSelectExamples'
                                );
                        })
                    }, {
                        path: '/components/TreeSelect',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "TreeSelectExamples" */
                                'modules/fields/TreeSelectExamples'
                                );
                        })
                    }, {
                        path: '/components/Checkbox',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "CheckboxExamples" */
                                'modules/fields/CheckboxExamples'
                                );
                        })
                    }, {
                        path: '/components/Radio',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "RadioExamples" */
                                'modules/fields/RadioExamples'
                                );
                        })
                    }, {
                        path: '/components/RadioGroup',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "RadioGroupExamples" */
                                'modules/fields/RadioGroupExamples'
                                );
                        })
                    }, {
                        path: '/components/ButtonCheckbox',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "ButtonCheckboxExamples" */
                                'modules/fields/ButtonCheckboxExamples'
                                );
                        })
                    }, {
                        path: '/components/ButtonRadioGroup',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "ButtonRadioGroupExamples" */
                                'modules/fields/ButtonRadioGroupExamples'
                                );
                        })
                    }, {
                        path: '/components/Switcher',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "SwitcherExamples" */
                                'modules/fields/SwitcherExamples'
                                );
                        })
                    }, {
                        path: '/components/Slider',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "SliderExamples" */
                                'modules/fields/SliderExamples'
                                );
                        })
                    }, {
                        path: '/components/EditableField',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "EditableFieldExamples" */
                                'modules/fields/EditableFieldExamples'
                                );
                        })
                    }, {
                        path: '/components/FlashNumber',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "FlashNumberExamples" */
                                'modules/fields/FlashNumberExamples'
                                );
                        })
                    }, {
                        path: '/components/Transfer',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "TransferExamples" */
                                'modules/fields/TransferExamples'
                                );
                        })
                    }, {
                        path: '/components/TagField',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "TagFieldExamples" */
                                'modules/fields/TagFieldExamples'
                                );
                        })
                    }, {
                        path: '/components/Rate',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "RateExamples" */
                                'modules/fields/RateExamples'
                                );
                        })
                    }, {
                        path: '/components/EditableSelect',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "EditableSelectExamples" */
                                'modules/fields/EditableSelectExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- date -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/DatePicker',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "DatePickerExamples" */
                                'modules/date/DatePickerExamples'
                                );
                        })
                    }, {
                        path: '/components/DateRangePicker',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "DateRangePickerExamples" */
                                'modules/date/DateRangePickerExamples'
                                );
                        })
                    }, {
                        path: '/components/TimePicker',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "TimePickerExamples" */
                                'modules/date/TimePickerExamples'
                                );
                        })
                    }, {
                        path: '/components/DateTimePicker',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "DateTimePickerExamples" */
                                'modules/date/DateTimePickerExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- popup -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/Dialog',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "DialogExamples" */
                                'modules/popup/DialogExamples'
                                );
                        })
                    }, {
                        path: '/components/Popup',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "PopupExamples" */
                                'modules/popup/PopupExamples'
                                );
                        })
                    }, {
                        path: '/components/Menu',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "MenuExamples" */
                                'modules/popup/MenuExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- progresses -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/CircularProgress',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "CircularProgressExample" */
                                'modules/progress/CircularProgressExample'
                                );
                        })
                    }, {
                        path: '/components/LinearProgress',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "LinearProgressExample" */
                                'modules/progress/LinearProgressExample'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- layouts -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/Paper',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "PaperExamples" */
                                'modules/layout/PaperExamples'
                                );
                        })
                    }, {
                        path: '/components/Widget',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "WidgetExamples" */
                                'modules/layout/WidgetExamples'
                                );
                        })
                    }, {
                        path: '/components/List',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "ListExamples" */
                                'modules/layout/ListExamples'
                                );
                        })
                    }, {
                        path: '/components/CascaderList',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "CascaderListExamples" */
                                'modules/layout/CascaderListExamples'
                                );
                        })
                    }, {
                        path: '/components/Tab',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "TabExamples" */
                                'modules/layout/TabExamples'
                                );
                        })
                    }, {
                        path: '/components/Accordion',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "AccordionExamples" */
                                'modules/layout/AccordionExamples'
                                );
                        })
                    }, {
                        path: '/components/Table',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "TableExamples" */
                                'modules/layout/TableExamples'
                                );
                        })
                    }, {
                        path: '/components/Waterfall',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "WaterfallExamples" */
                                'modules/layout/WaterfallExamples'
                                );
                        })
                    }, {
                        path: '/components/Grid',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "GridExamples" */
                                'modules/layout/GridExamples'
                                );
                        })
                    }, {
                        path: '/components/Tree',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "TreeExamples" */
                                'modules/layout/TreeExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- draggable -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/DraggableList',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "DraggableListExamples" */
                                'modules/draggable/DraggableListExamples'
                                );
                        })
                    }, {
                        path: '/components/DraggableGrid',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "DraggableGridExamples" */
                                'modules/draggable/DraggableGridExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- steppers -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/ArrowStep',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "ArrowStepExamples" */
                                'modules/stepper/ArrowStepExamples'
                                );
                        })
                    }, {
                        path: '/components/RoundStep',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "RoundStepExamples" */
                                'modules/stepper/RoundStepExamples'
                                );
                        })
                    }, {
                        path: '/components/ListStep',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "ListStepExamples" */
                                'modules/stepper/ListStepExamples'
                                );
                        })
                    }, {
                        path: '/components/DotStep',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "DotStepExamples" */
                                'modules/stepper/DotStepExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- messages -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/Toaster',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "ToasterExamples" */
                                'modules/message/ToasterExamples'
                                );
                        })
                    }, {
                        path: '/components/Tip',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "TipExamples" */
                                'modules/message/TipExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- timeLine -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/TimeLine',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "TimeLineExamples" */
                                'modules/timeLine/TimeLineExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- loading -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/SpanLoading',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "SpanLoadingExamples" */
                                'modules/loading/SpanLoadingExamples'
                                );
                        })
                    }, {
                        path: '/components/CircularLoading',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "CircularLoadingExamples" */
                                'modules/loading/CircularLoadingExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- material design -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/MaterialTextField',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "MaterialTextFieldExamples" */
                                'modules/materialDesign/MaterialTextFieldExamples'
                                );
                        })
                    }, {
                        path: '/components/MaterialDropdownSelect',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "MaterialDropdownSelectExamples" */
                                'modules/materialDesign/MaterialDropdownSelectExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- media -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/LazyImage',
                        component: asyncComponent(store, () => {
                            return import(
                                /* webpackChunkName: "LazyImageExamples" */
                                'modules/media/LazyImageExamples'
                                );
                        })
                    }
                ]
            }]
        }]
    }];

}