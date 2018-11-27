import ac from 'components/AsyncComponent';

export default function configureRoutes(store) {

    return [{
        component: ac(() => import(
            /* webpackChunkName: "Root" */
            'containers/Root'), store),
        routes: [{
            path: '/landing',
            component: ac(() => import(
                /* webpackChunkName: "Landing" */
                'containers/landing/Landing'), store)
        }, {
            path: '/components',
            component: ac(() => import(
                /* webpackChunkName: "App" */
                'containers/app/App'), store),
            routes: [

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- buttons -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/RaisedButton',
                    component: ac(() => import(
                        /* webpackChunkName: "RaisedButtonExamples" */
                        'modules/buttons/RaisedButtonExamples'), store)
                }, {
                    path: '/components/FlatButton',
                    component: ac(() => import(
                        /* webpackChunkName: "FlatButtonExamples" */
                        'modules/buttons/FlatButtonExamples'), store)
                }, {
                    path: '/components/GhostButton',
                    component: ac(() => import(
                        /* webpackChunkName: "GhostButtonExamples" */
                        'modules/buttons/GhostButtonExamples'), store)
                }, {
                    path: '/components/IconButton',
                    component: ac(() => import(
                        /* webpackChunkName: "IconButtonExamples" */
                        'modules/buttons/IconButtonExamples'), store)
                }, {
                    path: '/components/AnchorButton',
                    component: ac(() => import(
                        /* webpackChunkName: "AnchorButtonExamples" */
                        'modules/buttons/AnchorButtonExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Anchor -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/Anchor',
                    component: ac(() => import(
                        /* webpackChunkName: "AnchorExamples" */
                        'modules/anchor/AnchorExamples'), store)
                }, {
                    path: '/components/IconAnchor',
                    component: ac(() => import(
                        /* webpackChunkName: "IconAnchorExamples" */
                        'modules/anchor/IconAnchorExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- fields -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/CascaderSelect',
                    component: ac(() => import(
                        /* webpackChunkName: "CascaderSelectExamples" */
                        'modules/fields/CascaderSelectExamples'), store)
                }, {
                    path: '/components/MaterialCascaderSelect',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialCascaderSelectExamples" */
                        'modules/fields/MaterialCascaderSelectExamples'), store)
                }, {
                    path: '/components/TextField',
                    component: ac(() => import(
                        /* webpackChunkName: "TextFieldExamples" */
                        'modules/fields/TextFieldExamples'), store)
                }, {
                    path: '/components/TextArea',
                    component: ac(() => import(
                        /* webpackChunkName: "TextAreaExamples" */
                        'modules/fields/TextAreaExamples'), store)
                }, {
                    path: '/components/RemoteAutoComplete',
                    component: ac(() => import(
                        /* webpackChunkName: "RemoteAutoCompleteExamples" */
                        'modules/fields/RemoteAutoCompleteExamples'), store)
                }, {
                    path: '/components/LocalAutoComplete',
                    component: ac(() => import(
                        /* webpackChunkName: "LocalAutoCompleteExamples" */
                        'modules/fields/LocalAutoCompleteExamples'), store)
                }, {
                    path: '/components/DropdownSelect',
                    component: ac(() => import(
                        /* webpackChunkName: "DropdownSelectExamples" */
                        'modules/fields/DropdownSelectExamples'), store)
                }, {
                    path: '/components/MultipleSelect',
                    component: ac(() => import(
                        /* webpackChunkName: "MultipleSelectExamples" */
                        'modules/fields/MultipleSelectExamples'), store)
                }, {
                    path: '/components/TreeSelect',
                    component: ac(() => import(
                        /* webpackChunkName: "TreeSelectExamples" */
                        'modules/fields/TreeSelectExamples'), store)
                }, {
                    path: '/components/Checkbox',
                    component: ac(() => import(
                        /* webpackChunkName: "CheckboxExamples" */
                        'modules/fields/CheckboxExamples'), store)
                }, {
                    path: '/components/RadioGroup',
                    component: ac(() => import(
                        /* webpackChunkName: "RadioGroupExamples" */
                        'modules/fields/RadioGroupExamples'), store)
                }, {
                    path: '/components/ButtonCheckbox',
                    component: ac(() => import(
                        /* webpackChunkName: "ButtonCheckboxExamples" */
                        'modules/fields/ButtonCheckboxExamples'), store)
                }, {
                    path: '/components/ButtonRadioGroup',
                    component: ac(() => import(
                        /* webpackChunkName: "ButtonRadioGroupExamples" */
                        'modules/fields/ButtonRadioGroupExamples'), store)
                }, {
                    path: '/components/ButtonRadioSelect',
                    component: ac(() => import(
                        /* webpackChunkName: "ButtonRadioSelectExamples" */
                        'modules/fields/ButtonRadioSelectExamples'), store)
                }, {
                    path: '/components/Switcher',
                    component: ac(() => import(
                        /* webpackChunkName: "SwitcherExamples" */
                        'modules/fields/SwitcherExamples'), store)
                }, {
                    path: '/components/Slider',
                    component: ac(() => import(
                        /* webpackChunkName: "SliderExamples" */
                        'modules/fields/SliderExamples'), store)
                }, {
                    path: '/components/EditableField',
                    component: ac(() => import(
                        /* webpackChunkName: "EditableFieldExamples" */
                        'modules/fields/EditableFieldExamples'), store)
                }, {
                    path: '/components/FlashNumber',
                    component: ac(() => import(
                        /* webpackChunkName: "FlashNumberExamples" */
                        'modules/fields/FlashNumberExamples'), store)
                }, {
                    path: '/components/Transfer',
                    component: ac(() => import(
                        /* webpackChunkName: "TransferExamples" */
                        'modules/fields/TransferExamples'), store)
                }, {
                    path: '/components/TagField',
                    component: ac(() => import(
                        /* webpackChunkName: "TagFieldExamples" */
                        'modules/fields/TagFieldExamples'), store)
                }, {
                    path: '/components/DynamicRenderTagField',
                    component: ac(() => import(
                        /* webpackChunkName: "DynamicRenderTagFieldExamples" */
                        'modules/fields/DynamicRenderTagFieldExamples'), store)
                }, {
                    path: '/components/Rate',
                    component: ac(() => import(
                        /* webpackChunkName: "RateExamples" */
                        'modules/fields/RateExamples'), store)
                }, {
                    path: '/components/EditableSelect',
                    component: ac(() => import(
                        /* webpackChunkName: "EditableSelectExamples" */
                        'modules/fields/EditableSelectExamples'), store)
                }, {
                    path: '/components/MaterialTextField',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialTextFieldExamples" */
                        'modules/fields/MaterialTextFieldExamples'), store)
                }, {
                    path: '/components/MaterialDropdownSelect',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialDropdownSelectExamples" */
                        'modules/fields/MaterialDropdownSelectExamples'), store)
                }, {
                    path: '/components/MaterialLocalAutoComplete',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialLocalAutoCompleteExamples" */
                        'modules/fields/MaterialLocalAutoCompleteExamples'), store)
                }, {
                    path: '/components/MaterialTextArea',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialTextAreaExamples" */
                        'modules/fields/MaterialTextAreaExamples'), store)
                }, {
                    path: '/components/MaterialEditableSelect',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialEditableSelectExamples" */
                        'modules/fields/MaterialEditableSelectExamples'), store)
                }, {
                    path: '/components/MaterialTreeSelect',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialTreeSelectExamples" */
                        'modules/fields/MaterialTreeSelectExamples'), store)
                }, {
                    path: '/components/DownloadField',
                    component: ac(() => import(
                        /* webpackChunkName: "DownloadFieldExamples" */
                        'modules/fields/DownloadFieldExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- filter -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/DropdownFilter',
                    component: ac(() => import(
                        /* webpackChunkName: "DropdownFilterExamples" */
                        'modules/filter/DropdownFilterExamples'), store)
                }, {
                    path: '/components/MaterialDropdownFilter',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialDropdownFilterExamples" */
                        'modules/filter/MaterialDropdownFilterExamples'), store)
                }, {
                    path: '/components/AutoCompleteFilter',
                    component: ac(() => import(
                        /* webpackChunkName: "AutoCompleteFilterExamples" */
                        'modules/filter/AutoCompleteFilterExamples'), store)
                }, {
                    path: '/components/MaterialAutoCompleteFilter',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialAutoCompleteFilterExamples" */
                        'modules/filter/MaterialAutoCompleteFilterExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- date -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/DatePicker',
                    component: ac(() => import(
                        /* webpackChunkName: "DatePickerExamples" */
                        'modules/date/DatePickerExamples'), store)
                }, {
                    path: '/components/DateField',
                    component: ac(() => import(
                        /* webpackChunkName: "DateFieldExamples" */
                        'modules/date/DateFieldExamples'), store)
                }, {
                    path: '/components/MonthPicker',
                    component: ac(() => import(
                        /* webpackChunkName: "MonthPickerExamples" */
                        'modules/date/MonthPickerExamples'), store)
                }, {
                    path: '/components/DateRangePicker',
                    component: ac(() => import(
                        /* webpackChunkName: "DateRangePickerExamples" */
                        'modules/date/DateRangePickerExamples'), store)
                }, {
                    path: '/components/DateRangeField',
                    component: ac(() => import(
                        /* webpackChunkName: "DateRangeFieldExamples" */
                        'modules/date/DateRangeFieldExamples'), store)
                }, {
                    path: '/components/TimePicker',
                    component: ac(() => import(
                        /* webpackChunkName: "TimePickerExamples" */
                        'modules/date/TimePickerExamples'), store)
                }, {
                    path: '/components/DateTimePicker',
                    component: ac(() => import(
                        /* webpackChunkName: "DateTimePickerExamples" */
                        'modules/date/DateTimePickerExamples'), store)
                },
                {
                    path: '/components/MaterialDatePicker',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialDatePickerExamples" */
                        'modules/date/MaterialDatePickerExamples'), store)
                },
                {
                    path: '/components/MaterialDateTimePicker',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialDateTimePickerExamples" */
                        'modules/date/MaterialDateTimePickerExamples'), store)
                },
                {
                    path: '/components/MaterialTimePicker',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialTimePickerExamples" */
                        'modules/date/MaterialTimePickerExamples'), store)
                },
                {
                    path: '/components/MaterialDateRangePicker',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialDateRangePickerExamples" */
                        'modules/date/MaterialDateRangePickerExamples'), store)
                },
                {
                    path: '/components/MaterialMonthPicker',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialMonthPickerExamples" */
                        'modules/date/MaterialMonthPickerExamples'), store)
                },
                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- pop -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/Dialog',
                    component: ac(() => import(
                        /* webpackChunkName: "DialogExamples" */
                        'modules/pop/DialogExamples'), store)
                }, {
                    path: '/components/Popup',
                    component: ac(() => import(
                        /* webpackChunkName: "PopupExamples" */
                        'modules/pop/PopupExamples'), store)
                }, {
                    path: '/components/Popover',
                    component: ac(() => import(
                        /* webpackChunkName: "PopoverExamples" */
                        'modules/pop/PopoverExamples'), store)
                }, {
                    path: '/components/Drawer',
                    component: ac(() => import(
                        /* webpackChunkName: "DrawerExamples" */
                        'modules/pop/DrawerExamples'), store)
                }, {
                    path: '/components/Tip',
                    component: ac(() => import(
                        /* webpackChunkName: "TipExamples" */
                        'modules/pop/TipExamples'), store)
                }, {
                    path: '/components/Toast',
                    component: ac(() => import(
                        /* webpackChunkName: "ToastExamples" */
                        'modules/pop/ToastExamples'), store)
                }, {
                    path: '/components/Notification',
                    component: ac(() => import(
                        /* webpackChunkName: "NotificationExamples" */
                        'modules/pop/NotificationExamples'), store)
                }, {
                    path: '/components/Guide',
                    component: ac(() => import(
                        /* webpackChunkName: "GuideExamples" */
                        'modules/pop/GuideExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- progresses -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/CircularProgress',
                    component: ac(() => import(
                        /* webpackChunkName: "CircularProgressExample" */
                        'modules/progress/CircularProgressExample'), store)
                }, {
                    path: '/components/LinearProgress',
                    component: ac(() => import(
                        /* webpackChunkName: "LinearProgressExample" */
                        'modules/progress/LinearProgressExample'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- layouts -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/Crumbs',
                    component: ac(() => import(
                        /* webpackChunkName: "CrumbsExamples" */
                        'modules/layout/CrumbsExamples'), store)
                }, {
                    path: '/components/Paper',
                    component: ac(() => import(
                        /* webpackChunkName: "PaperExamples" */
                        'modules/layout/PaperExamples'), store)
                }, {
                    path: '/components/Widget',
                    component: ac(() => import(
                        /* webpackChunkName: "WidgetExamples" */
                        'modules/layout/WidgetExamples'), store)
                }, {
                    path: '/components/List',
                    component: ac(() => import(
                        /* webpackChunkName: "ListExamples" */
                        'modules/layout/ListExamples'), store)
                }, {
                    path: '/components/GroupList',
                    component: ac(() => import(
                        /* webpackChunkName: "GroupListExamples" */
                        'modules/layout/GroupListExamples'), store)
                }, {
                    path: '/components/DynamicRenderList',
                    component: ac(() => import(
                        /* webpackChunkName: "DynamicRenderListExamples" */
                        'modules/layout/DynamicRenderListExamples'), store)
                }, {
                    path: '/components/CascaderList',
                    component: ac(() => import(
                        /* webpackChunkName: "CascaderListExamples" */
                        'modules/layout/CascaderListExamples'), store)
                }, {
                    path: '/components/Tab',
                    component: ac(() => import(
                        /* webpackChunkName: "TabExamples" */
                        'modules/layout/TabExamples'), store)
                }, {
                    path: '/components/Accordion',
                    component: ac(() => import(
                        /* webpackChunkName: "AccordionExamples" */
                        'modules/layout/AccordionExamples'), store)
                }, {
                    path: '/components/Table',
                    component: ac(() => import(
                        /* webpackChunkName: "TableExamples" */
                        'modules/layout/TableExamples'), store)
                }, {
                    path: '/components/Waterfall',
                    component: ac(() => import(
                        /* webpackChunkName: "WaterfallExamples" */
                        'modules/layout/WaterfallExamples'), store)
                }, {
                    path: '/components/Grid',
                    component: ac(() => import(
                        /* webpackChunkName: "GridExamples" */
                        'modules/layout/GridExamples'), store)
                }, {
                    path: '/components/GroupGrid',
                    component: ac(() => import(
                        /* webpackChunkName: "GroupGridExamples" */
                        'modules/layout/GroupGridExamples'), store)
                }, {
                    path: '/components/Tree',
                    component: ac(() => import(
                        /* webpackChunkName: "TreeExamples" */
                        'modules/layout/TreeExamples'), store)
                }, {
                    path: '/components/Dropdown',
                    component: ac(() => import(
                        /* webpackChunkName: "DropdownExamples" */
                        'modules/layout/DropdownExamples'), store)
                }, {
                    path: '/components/MaterialDropdown',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialDropdownExamples" */
                        'modules/layout/MaterialDropdownExamples'), store)
                }, {
                    path: '/components/Pagging',
                    component: ac(() => import(
                        /* webpackChunkName: "PaggingExamples" */
                        'modules/layout/PaggingExamples'), store)
                }, {
                    path: '/components/BriefPagging',
                    component: ac(() => import(
                        /* webpackChunkName: "BriefPaggingExamples" */
                        'modules/layout/BriefPaggingExamples'), store)
                }, {
                    path: '/components/MaterialProvider',
                    component: ac(() => import(
                        /* webpackChunkName: "MaterialProviderExamples" */
                        'modules/layout/MaterialProviderExamples'), store)
                }, {
                    path: '/components/TimeLine',
                    component: ac(() => import(
                        /* webpackChunkName: "TimeLineExamples" */
                        'modules/layout/TimeLineExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- draggable -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/DraggableList',
                    component: ac(() => import(
                        /* webpackChunkName: "DraggableListExamples" */
                        'modules/draggable/DraggableListExamples'), store)
                }, {
                    path: '/components/DraggableGrid',
                    component: ac(() => import(
                        /* webpackChunkName: "DraggableGridExamples" */
                        'modules/draggable/DraggableGridExamples'), store)
                }, {
                    path: '/components/DraggableTree',
                    component: ac(() => import(
                        /* webpackChunkName: "DraggableTreeExamples" */
                        'modules/draggable/DraggableTreeExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- steppers -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/ArrowStep',
                    component: ac(() => import(
                        /* webpackChunkName: "ArrowStepExamples" */
                        'modules/stepper/ArrowStepExamples'), store)
                }, {
                    path: '/components/RoundStep',
                    component: ac(() => import(
                        /* webpackChunkName: "RoundStepExamples" */
                        'modules/stepper/RoundStepExamples'), store)
                }, {
                    path: '/components/ListStep',
                    component: ac(() => import(
                        /* webpackChunkName: "ListStepExamples" */
                        'modules/stepper/ListStepExamples'), store)
                }, {
                    path: '/components/DotStep',
                    component: ac(() => import(
                        /* webpackChunkName: "DotStepExamples" */
                        'modules/stepper/DotStepExamples'), store)
                }, {
                    path: '/components/PointStep',
                    component: ac(() => import(
                        /* webpackChunkName: "PointStepExamples" */
                        'modules/stepper/PointStepExamples'), store)
                }, {
                    path: '/components/VerticalPointStep',
                    component: ac(() => import(
                        /* webpackChunkName: "VerticalPointStepExamples" */
                        'modules/stepper/VerticalPointStepExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- loading -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/SpanLoading',
                    component: ac(() => import(
                        /* webpackChunkName: "SpanLoadingExamples" */
                        'modules/loading/SpanLoadingExamples'), store)
                }, {
                    path: '/components/CircularLoading',
                    component: ac(() => import(
                        /* webpackChunkName: "CircularLoadingExamples" */
                        'modules/loading/CircularLoadingExamples'), store)
                }, {
                    path: '/components/PageLoading',
                    component: ac(() => import(
                        /* webpackChunkName: "PageLoadingExamples" */
                        'modules/loading/PageLoadingExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- media -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/LazyImage',
                    component: ac(() => import(
                        /* webpackChunkName: "LazyImageExamples" */
                        'modules/media/LazyImageExamples'), store)
                }, {
                    path: '/components/ColorPicker',
                    component: ac(() => import(
                        /* webpackChunkName: "ColorPickerExamples" */
                        'modules/media/ColorPickerExamples'), store)
                }, {
                    path: '/components/HuePicker',
                    component: ac(() => import(
                        /* webpackChunkName: "HuePickerExamples" */
                        'modules/media/HuePickerExamples'), store)
                }
            ]
        }]
    }];

}
