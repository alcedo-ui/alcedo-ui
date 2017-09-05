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

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- buttons -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
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

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- fields -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
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

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- date -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/DatePicker',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "DatePickerExamples" */
                                'modules/date/DatePickerExamples'
                                );
                        })
                    }, {
                        path: '/components/DateRangePicker',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "DateRangePickerExamples" */
                                'modules/date/DateRangePickerExamples'
                                );
                        })
                    }, {
                        path: '/components/TimePicker',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "TimePickerExamples" */
                                'modules/date/TimePickerExamples'
                                );
                        })
                    }, {
                        path: '/components/DateTimePicker',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "DateTimePickerExamples" */
                                'modules/date/DateTimePickerExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- popup -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/Dialog',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "DialogExamples" */
                                'modules/popup/DialogExamples'
                                );
                        })
                    }, {
                        path: '/components/Popup',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "PopupExamples" */
                                'modules/popup/PopupExamples'
                                );
                        })
                    }, {
                        path: '/components/Menu',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "MenuExamples" */
                                'modules/popup/MenuExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- progresses -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/CircularProgress',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "CircularProgressExample" */
                                'modules/progress/CircularProgressExample'
                                );
                        })
                    }, {
                        path: '/components/LinearProgress',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "LinearProgressExample" */
                                'modules/progress/LinearProgressExample'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- layouts -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/Paper',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "PaperExamples" */
                                'modules/layout/PaperExamples'
                                );
                        })
                    }, {
                        path: '/components/Widget',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "WidgetExamples" */
                                'modules/layout/WidgetExamples'
                                );
                        })
                    }, {
                        path: '/components/List',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "ListExamples" */
                                'modules/layout/ListExamples'
                                );
                        })
                    }, {
                        path: '/components/CascaderList',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "CascaderListExamples" */
                                'modules/layout/CascaderListExamples'
                                );
                        })
                    }, {
                        path: '/components/Tab',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "TabExamples" */
                                'modules/layout/TabExamples'
                                );
                        })
                    }, {
                        path: '/components/Accordion',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "AccordionExamples" */
                                'modules/layout/AccordionExamples'
                                );
                        })
                    }, {
                        path: '/components/Table',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "TableExamples" */
                                'modules/layout/TableExamples'
                                );
                        })
                    }, {
                        path: '/components/Waterfall',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "WaterfallExamples" */
                                'modules/layout/WaterfallExamples'
                                );
                        })
                    }, {
                        path: '/components/Grid',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "GridExamples" */
                                'modules/layout/GridExamples'
                                );
                        })
                    }, {
                        path: '/components/Tree',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "TreeExamples" */
                                'modules/layout/TreeExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- draggable -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/DraggableList',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "DraggableListExamples" */
                                'modules/draggable/DraggableListExamples'
                                );
                        })
                    }, {
                        path: '/components/DraggableGrid',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "DraggableGridExamples" */
                                'modules/draggable/DraggableGridExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- steppers -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/ArrowStep',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "ArrowStepExamples" */
                                'modules/stepper/ArrowStepExamples'
                                );
                        })
                    }, {
                        path: '/components/RoundStep',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "RoundStepExamples" */
                                'modules/stepper/RoundStepExamples'
                                );
                        })
                    }, {
                        path: '/components/ListStep',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "ListStepExamples" */
                                'modules/stepper/ListStepExamples'
                                );
                        })
                    }, {
                        path: '/components/DotStep',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "DotStepExamples" */
                                'modules/stepper/DotStepExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- messages -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/Toaster',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "ToasterExamples" */
                                'modules/message/ToasterExamples'
                                );
                        })
                    }, {
                        path: '/components/Tip',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "TipExamples" */
                                'modules/message/TipExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- timeLine -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/TimeLine',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "TimeLineExamples" */
                                'modules/timeLine/TimeLineExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- loading -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/SpanLoading',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "SpanLoadingExamples" */
                                'modules/loading/SpanLoadingExamples'
                                );
                        })
                    }, {
                        path: '/components/CircularLoading',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "CircularLoadingExamples" */
                                'modules/loading/CircularLoadingExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- material design -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/MaterialTextField',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "MaterialTextFieldExamples" */
                                'modules/materialDesign/MaterialTextFieldExamples'
                                );
                        })
                    }, {
                        path: '/components/MaterialDropdownSelect',
                        component: asyncComponent(() => {
                            return import(
                                /* webpackChunkName: "MaterialDropdownSelectExamples" */
                                'modules/materialDesign/MaterialDropdownSelectExamples'
                                );
                        })
                    },

                    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- media -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                    {
                        path: '/components/LazyImage',
                        component: asyncComponent(() => {
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