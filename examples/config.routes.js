import ac from 'components/AsyncComponent';

export default function configureRoutes(store) {

    return [{
        component: ac(store, () => import('containers/AppRoot')),
        routes: [{
            path: '/landing',
            component: ac(store, () => import('containers/landing/Landing'))
        }, {
            path: '/components',
            component: ac(store, () => import('containers/app/App')),
            routes: [

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- buttons -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/RaisedButton',
                    component: ac(store, () => import('modules/buttons/RaisedButtonExamples'))
                }, {
                    path: '/components/FlatButton',
                    component: ac(store, () => import('modules/buttons/FlatButtonExamples'))
                }, {
                    path: '/components/GhostButton',
                    component: ac(store, () => import('modules/buttons/GhostButtonExamples'))
                }, {
                    path: '/components/IconButton',
                    component: ac(store, () => import('modules/buttons/IconButtonExamples'))
                }, {
                    path: '/components/AnchorButton',
                    component: ac(store, () => import('modules/buttons/AnchorButtonExamples'))
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Anchor -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/Anchor',
                    component: ac(store, () => import('modules/anchor/AnchorExamples'))
                }, {
                    path: '/components/IconAnchor',
                    component: ac(store, () => import('modules/anchor/IconAnchorExamples'))
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- fields -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/CascaderField',
                    component: ac(store, () => import('modules/fields/CascaderFieldExamples'))
                }, {
                    path: '/components/TextField',
                    component: ac(store, () => import('modules/fields/TextFieldExamples'))
                }, {
                    path: '/components/TextArea',
                    component: ac(store, () => import('modules/fields/TextAreaExamples'))
                }, {
                    path: '/components/RemoteAutoComplete',
                    component: ac(store, () => import('modules/fields/RemoteAutoCompleteExamples'))
                }, {
                    path: '/components/LocalAutoComplete',
                    component: ac(store, () => import('modules/fields/LocalAutoCompleteExamples'))
                }, {
                    path: '/components/DropdownSelect',
                    component: ac(store, () => import('modules/fields/DropdownSelectExamples'))
                }, {
                    path: '/components/MultipleSelect',
                    component: ac(store, () => import('modules/fields/MultipleSelectExamples'))
                }, {
                    path: '/components/TreeSelect',
                    component: ac(store, () => import('modules/fields/TreeSelectExamples'))
                }, {
                    path: '/components/Checkbox',
                    component: ac(store, () => import('modules/fields/CheckboxExamples'))
                }, {
                    path: '/components/RadioGroup',
                    component: ac(store, () => import('modules/fields/RadioGroupExamples'))
                }, {
                    path: '/components/ButtonCheckbox',
                    component: ac(store, () => import('modules/fields/ButtonCheckboxExamples'))
                }, {
                    path: '/components/ButtonRadioGroup',
                    component: ac(store, () => import('modules/fields/ButtonRadioGroupExamples'))
                }, {
                    path: '/components/Switcher',
                    component: ac(store, () => import('modules/fields/SwitcherExamples'))
                }, {
                    path: '/components/Slider',
                    component: ac(store, () => import('modules/fields/SliderExamples'))
                }, {
                    path: '/components/EditableField',
                    component: ac(store, () => import('modules/fields/EditableFieldExamples'))
                }, {
                    path: '/components/FlashNumber',
                    component: ac(store, () => import('modules/fields/FlashNumberExamples'))
                }, {
                    path: '/components/Transfer',
                    component: ac(store, () => import('modules/fields/TransferExamples'))
                }, {
                    path: '/components/TagField',
                    component: ac(store, () => import('modules/fields/TagFieldExamples'))
                }, {
                    path: '/components/Rate',
                    component: ac(store, () => import('modules/fields/RateExamples'))
                }, {
                    path: '/components/EditableSelect',
                    component: ac(store, () => import('modules/fields/EditableSelectExamples'))
                }, {
                    path: '/components/MaterialTextField',
                    component: ac(store, () => import('modules/fields/MaterialTextFieldExamples'))
                }, {
                    path: '/components/MaterialDropdownSelect',
                    component: ac(store, () => import('modules/fields/MaterialDropdownSelectExamples'))
                }, {
                    path: '/components/MaterialLocalAutoComplete',
                    component: ac(store, () => import('modules/fields/MaterialLocalAutoCompleteExamples'))
                }, {
                    path: '/components/MaterialTextArea',
                    component: ac(store, () => import('modules/fields/MaterialTextAreaExamples'))
                }, {
                    path: '/components/MaterialEditableSelect',
                    component: ac(store, () => import('modules/fields/MaterialEditableSelectExamples'))
                }, {
                    path: '/components/MaterialTreeSelect',
                    component: ac(store, () => import('modules/fields/MaterialTreeSelectExamples'))
                }, {
                    path: '/components/DownloadField',
                    component: ac(store, () => import('modules/fields/DownloadFieldExamples'))
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- filter -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/DropdownFilter',
                    component: ac(store, () => import('modules/filter/DropdownFilterExamples'))
                }, {
                    path: '/components/MaterialDropdownFilter',
                    component: ac(store, () => import('modules/filter/MaterialDropdownFilterExamples'))
                }, {
                    path: '/components/AutoCompleteFilter',
                    component: ac(store, () => import('modules/filter/AutoCompleteFilterExamples'))
                }, {
                    path: '/components/MaterialAutoCompleteFilter',
                    component: ac(store, () => import('modules/filter/MaterialAutoCompleteFilterExamples'))
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- date -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/DatePicker',
                    component: ac(store, () => import('modules/date/DatePickerExamples'))
                }, {
                    path: '/components/MonthPicker',
                    component: ac(store, () => import('modules/date/MonthPickerExamples'))
                }, {
                    path: '/components/DateRangePicker',
                    component: ac(store, () => import('modules/date/DateRangePickerExamples'))
                }, {
                    path: '/components/TimePicker',
                    component: ac(store, () => import('modules/date/TimePickerExamples'))
                }, {
                    path: '/components/DateTimePicker',
                    component: ac(store, () => import('modules/date/DateTimePickerExamples'))
                },
                {
                    path: '/components/MaterialDatePicker',
                    component: ac(store, () => import('modules/date/MaterialDatePickerExamples'))
                },
                {
                    path: '/components/MaterialDateTimePicker',
                    component: ac(store, () => import('modules/date/MaterialDateTimePickerExamples'))
                },
                {
                    path: '/components/MaterialTimePicker',
                    component: ac(store, () => import('modules/date/MaterialTimePickerExamples'))
                },
                {
                    path: '/components/MaterialDateRangePicker',
                    component: ac(store, () => import('modules/date/MaterialDateRangePickerExamples'))
                },
                {
                    path: '/components/MaterialMonthPicker',
                    component: ac(store, () => import('modules/date/MaterialMonthPickerExamples'))
                },
                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- pop -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/Dialog',
                    component: ac(store, () => import('modules/pop/DialogExamples'))
                }, {
                    path: '/components/Popup',
                    component: ac(store, () => import('modules/pop/PopupExamples'))
                }, {
                    path: '/components/Popover',
                    component: ac(store, () => import('modules/pop/PopoverExamples'))
                }, {
                    path: '/components/Drawer',
                    component: ac(store, () => import('modules/pop/DrawerExamples'))
                }, {
                    path: '/components/Tip',
                    component: ac(store, () => import('modules/pop/TipExamples'))
                }, {
                    path: '/components/Toast',
                    component: ac(store, () => import('modules/pop/ToastExamples'))
                }, {
                    path: '/components/Notification',
                    component: ac(store, () => import('modules/pop/NotificationExamples'))
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- progresses -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/CircularProgress',
                    component: ac(store, () => import('modules/progress/CircularProgressExample'))
                }, {
                    path: '/components/LinearProgress',
                    component: ac(store, () => import('modules/progress/LinearProgressExample'))
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- layouts -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/Crumbs',
                    component: ac(store, () => import('modules/layout/CrumbsExamples'))
                }, {
                    path: '/components/Paper',
                    component: ac(store, () => import('modules/layout/PaperExamples'))
                }, {
                    path: '/components/Widget',
                    component: ac(store, () => import('modules/layout/WidgetExamples'))
                }, {
                    path: '/components/List',
                    component: ac(store, () => import('modules/layout/ListExamples'))
                }, {
                    path: '/components/GroupList',
                    component: ac(store, () => import('modules/layout/GroupListExamples'))
                }, {
                    path: '/components/DynamicRenderList',
                    component: ac(store, () => import('modules/layout/DynamicRenderListExamples'))
                }, {
                    path: '/components/CascaderList',
                    component: ac(store, () => import('modules/layout/CascaderListExamples'))
                }, {
                    path: '/components/Tab',
                    component: ac(store, () => import('modules/layout/TabExamples'))
                }, {
                    path: '/components/Accordion',
                    component: ac(store, () => import('modules/layout/AccordionExamples'))
                }, {
                    path: '/components/Table',
                    component: ac(store, () => import('modules/layout/TableExamples'))
                }, {
                    path: '/components/Waterfall',
                    component: ac(store, () => import('modules/layout/WaterfallExamples'))
                }, {
                    path: '/components/Grid',
                    component: ac(store, () => import('modules/layout/GridExamples'))
                }, {
                    path: '/components/GroupGrid',
                    component: ac(store, () => import('modules/layout/GroupGridExamples'))
                }, {
                    path: '/components/Tree',
                    component: ac(store, () => import('modules/layout/TreeExamples'))
                }, {
                    path: '/components/Dropdown',
                    component: ac(store, () => import('modules/layout/DropdownExamples'))
                }, {
                    path: '/components/MaterialDropdown',
                    component: ac(store, () => import('modules/layout/MaterialDropdownExamples'))
                }, {
                    path: '/components/Pagging',
                    component: ac(store, () => import('modules/layout/PaggingExamples'))
                }, {
                    path: '/components/BriefPagging',
                    component: ac(store, () => import('modules/layout/BriefPaggingExamples'))
                }, {
                    path: '/components/MaterialProvider',
                    component: ac(store, () => import('modules/layout/MaterialProviderExamples'))
                }, {
                    path: '/components/TimeLine',
                    component: ac(store, () => import('modules/layout/TimeLineExamples'))
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- draggable -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/DraggableList',
                    component: ac(store, () => import('modules/draggable/DraggableListExamples'))
                }, {
                    path: '/components/DraggableGrid',
                    component: ac(store, () => import('modules/draggable/DraggableGridExamples'))
                }, {
                    path: '/components/DraggableTree',
                    component: ac(store, () => import('modules/draggable/DraggableTreeExamples'))
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- steppers -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/ArrowStep',
                    component: ac(store, () => import('modules/stepper/ArrowStepExamples'))
                }, {
                    path: '/components/RoundStep',
                    component: ac(store, () => import('modules/stepper/RoundStepExamples'))
                }, {
                    path: '/components/ListStep',
                    component: ac(store, () => import('modules/stepper/ListStepExamples'))
                }, {
                    path: '/components/DotStep',
                    component: ac(store, () => import('modules/stepper/DotStepExamples'))
                }, {
                    path: '/components/PointStep',
                    component: ac(store, () => import('modules/stepper/PointStepExamples'))
                }, {
                    path: '/components/VerticalPointStep',
                    component: ac(store, () => import('modules/stepper/VerticalPointStepExamples'))
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- loading -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/SpanLoading',
                    component: ac(store, () => import('modules/loading/SpanLoadingExamples'))
                }, {
                    path: '/components/CircularLoading',
                    component: ac(store, () => import('modules/loading/CircularLoadingExamples'))
                }, {
                    path: '/components/PageLoading',
                    component: ac(store, () => import('modules/loading/PageLoadingExamples'))
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- media -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/LazyImage',
                    component: ac(store, () => import('modules/media/LazyImageExamples'))
                }, {
                    path: '/components/ColorPicker',
                    component: ac(store, () => import('modules/media/ColorPickerExamples'))
                }, {
                    path: '/components/HuePicker',
                    component: ac(store, () => import('modules/media/HuePickerExamples'))
                }
            ]
        }]
    }];

}