import ac from 'components/AsyncComponent';

export default function configureRoutes(store) {

    return [{
        component: ac(() => import('containers/Root'), store),
        routes: [{
            path: '/landing',
            component: ac(() => import('containers/landing/Landing'), store)
        }, {
            path: '/components',
            component: ac(() => import('containers/app/App'), store),
            routes: [

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- buttons -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/RaisedButton',
                    component: ac(() => import('modules/buttons/RaisedButtonExamples'), store)
                }, {
                    path: '/components/FlatButton',
                    component: ac(() => import('modules/buttons/FlatButtonExamples'), store)
                }, {
                    path: '/components/GhostButton',
                    component: ac(() => import('modules/buttons/GhostButtonExamples'), store)
                }, {
                    path: '/components/IconButton',
                    component: ac(() => import('modules/buttons/IconButtonExamples'), store)
                }, {
                    path: '/components/AnchorButton',
                    component: ac(() => import('modules/buttons/AnchorButtonExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Anchor -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/Anchor',
                    component: ac(() => import('modules/anchor/AnchorExamples'), store)
                }, {
                    path: '/components/IconAnchor',
                    component: ac(() => import('modules/anchor/IconAnchorExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- fields -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/CascaderSelect',
                    component: ac(() => import('modules/fields/CascaderSelectExamples'), store)
                }, {
                    path: '/components/MaterialCascaderSelect',
                    component: ac(() => import('modules/fields/MaterialCascaderSelectExamples'), store)
                }, {
                    path: '/components/TextField',
                    component: ac(() => import('modules/fields/TextFieldExamples'), store)
                }, {
                    path: '/components/TextArea',
                    component: ac(() => import('modules/fields/TextAreaExamples'), store)
                }, {
                    path: '/components/RemoteAutoComplete',
                    component: ac(() => import('modules/fields/RemoteAutoCompleteExamples'), store)
                }, {
                    path: '/components/LocalAutoComplete',
                    component: ac(() => import('modules/fields/LocalAutoCompleteExamples'), store)
                }, {
                    path: '/components/DropdownSelect',
                    component: ac(() => import('modules/fields/DropdownSelectExamples'), store)
                }, {
                    path: '/components/MultipleSelect',
                    component: ac(() => import('modules/fields/MultipleSelectExamples'), store)
                }, {
                    path: '/components/TreeSelect',
                    component: ac(() => import('modules/fields/TreeSelectExamples'), store)
                }, {
                    path: '/components/Checkbox',
                    component: ac(() => import('modules/fields/CheckboxExamples'), store)
                }, {
                    path: '/components/RadioGroup',
                    component: ac(() => import('modules/fields/RadioGroupExamples'), store)
                }, {
                    path: '/components/ButtonCheckbox',
                    component: ac(() => import('modules/fields/ButtonCheckboxExamples'), store)
                }, {
                    path: '/components/ButtonRadioGroup',
                    component: ac(() => import('modules/fields/ButtonRadioGroupExamples'), store)
                }, {
                    path: '/components/Switcher',
                    component: ac(() => import('modules/fields/SwitcherExamples'), store)
                }, {
                    path: '/components/Slider',
                    component: ac(() => import('modules/fields/SliderExamples'), store)
                }, {
                    path: '/components/EditableField',
                    component: ac(() => import('modules/fields/EditableFieldExamples'), store)
                }, {
                    path: '/components/FlashNumber',
                    component: ac(() => import('modules/fields/FlashNumberExamples'), store)
                }, {
                    path: '/components/Transfer',
                    component: ac(() => import('modules/fields/TransferExamples'), store)
                }, {
                    path: '/components/TagField',
                    component: ac(() => import('modules/fields/TagFieldExamples'), store)
                }, {
                    path: '/components/DynamicRenderTagField',
                    component: ac(() => import('modules/fields/DynamicRenderTagFieldExamples'), store)
                }, {
                    path: '/components/Rate',
                    component: ac(() => import('modules/fields/RateExamples'), store)
                }, {
                    path: '/components/EditableSelect',
                    component: ac(() => import('modules/fields/EditableSelectExamples'), store)
                }, {
                    path: '/components/MaterialTextField',
                    component: ac(() => import('modules/fields/MaterialTextFieldExamples'), store)
                }, {
                    path: '/components/MaterialDropdownSelect',
                    component: ac(() => import('modules/fields/MaterialDropdownSelectExamples'), store)
                }, {
                    path: '/components/MaterialLocalAutoComplete',
                    component: ac(() => import('modules/fields/MaterialLocalAutoCompleteExamples'), store)
                }, {
                    path: '/components/MaterialTextArea',
                    component: ac(() => import('modules/fields/MaterialTextAreaExamples'), store)
                }, {
                    path: '/components/MaterialEditableSelect',
                    component: ac(() => import('modules/fields/MaterialEditableSelectExamples'), store)
                }, {
                    path: '/components/MaterialTreeSelect',
                    component: ac(() => import('modules/fields/MaterialTreeSelectExamples'), store)
                }, {
                    path: '/components/DownloadField',
                    component: ac(() => import('modules/fields/DownloadFieldExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- filter -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/DropdownFilter',
                    component: ac(() => import('modules/filter/DropdownFilterExamples'), store)
                }, {
                    path: '/components/MaterialDropdownFilter',
                    component: ac(() => import('modules/filter/MaterialDropdownFilterExamples'), store)
                }, {
                    path: '/components/AutoCompleteFilter',
                    component: ac(() => import('modules/filter/AutoCompleteFilterExamples'), store)
                }, {
                    path: '/components/MaterialAutoCompleteFilter',
                    component: ac(() => import('modules/filter/MaterialAutoCompleteFilterExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- date -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/DatePicker',
                    component: ac(() => import('modules/date/DatePickerExamples'), store)
                }, {
                    path: '/components/MonthPicker',
                    component: ac(() => import('modules/date/MonthPickerExamples'), store)
                }, {
                    path: '/components/DateRangePicker',
                    component: ac(() => import('modules/date/DateRangePickerExamples'), store)
                }, {
                    path: '/components/TimePicker',
                    component: ac(() => import('modules/date/TimePickerExamples'), store)
                }, {
                    path: '/components/DateTimePicker',
                    component: ac(() => import('modules/date/DateTimePickerExamples'), store)
                },
                {
                    path: '/components/MaterialDatePicker',
                    component: ac(() => import('modules/date/MaterialDatePickerExamples'), store)
                },
                {
                    path: '/components/MaterialDateTimePicker',
                    component: ac(() => import('modules/date/MaterialDateTimePickerExamples'), store)
                },
                {
                    path: '/components/MaterialTimePicker',
                    component: ac(() => import('modules/date/MaterialTimePickerExamples'), store)
                },
                {
                    path: '/components/MaterialDateRangePicker',
                    component: ac(() => import('modules/date/MaterialDateRangePickerExamples'), store)
                },
                {
                    path: '/components/MaterialMonthPicker',
                    component: ac(() => import('modules/date/MaterialMonthPickerExamples'), store)
                },
                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- pop -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/Dialog',
                    component: ac(() => import('modules/pop/DialogExamples'), store)
                }, {
                    path: '/components/Popup',
                    component: ac(() => import('modules/pop/PopupExamples'), store)
                }, {
                    path: '/components/Popover',
                    component: ac(() => import('modules/pop/PopoverExamples'), store)
                }, {
                    path: '/components/Drawer',
                    component: ac(() => import('modules/pop/DrawerExamples'), store)
                }, {
                    path: '/components/Tip',
                    component: ac(() => import('modules/pop/TipExamples'), store)
                }, {
                    path: '/components/Toast',
                    component: ac(() => import('modules/pop/ToastExamples'), store)
                }, {
                    path: '/components/Notification',
                    component: ac(() => import('modules/pop/NotificationExamples'), store)
                }, {
                    path: '/components/Guide',
                    component: ac(() => import('modules/pop/GuideExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- progresses -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/CircularProgress',
                    component: ac(() => import('modules/progress/CircularProgressExample'), store)
                }, {
                    path: '/components/LinearProgress',
                    component: ac(() => import('modules/progress/LinearProgressExample'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- layouts -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/Crumbs',
                    component: ac(() => import('modules/layout/CrumbsExamples'), store)
                }, {
                    path: '/components/Paper',
                    component: ac(() => import('modules/layout/PaperExamples'), store)
                }, {
                    path: '/components/Widget',
                    component: ac(() => import('modules/layout/WidgetExamples'), store)
                }, {
                    path: '/components/List',
                    component: ac(() => import('modules/layout/ListExamples'), store)
                }, {
                    path: '/components/GroupList',
                    component: ac(() => import('modules/layout/GroupListExamples'), store)
                }, {
                    path: '/components/DynamicRenderList',
                    component: ac(() => import('modules/layout/DynamicRenderListExamples'), store)
                }, {
                    path: '/components/CascaderList',
                    component: ac(() => import('modules/layout/CascaderListExamples'), store)
                }, {
                    path: '/components/Tab',
                    component: ac(() => import('modules/layout/TabExamples'), store)
                }, {
                    path: '/components/Accordion',
                    component: ac(() => import('modules/layout/AccordionExamples'), store)
                }, {
                    path: '/components/Table',
                    component: ac(() => import('modules/layout/TableExamples'), store)
                }, {
                    path: '/components/Waterfall',
                    component: ac(() => import('modules/layout/WaterfallExamples'), store)
                }, {
                    path: '/components/Grid',
                    component: ac(() => import('modules/layout/GridExamples'), store)
                }, {
                    path: '/components/GroupGrid',
                    component: ac(() => import('modules/layout/GroupGridExamples'), store)
                }, {
                    path: '/components/Tree',
                    component: ac(() => import('modules/layout/TreeExamples'), store)
                }, {
                    path: '/components/Dropdown',
                    component: ac(() => import('modules/layout/DropdownExamples'), store)
                }, {
                    path: '/components/MaterialDropdown',
                    component: ac(() => import('modules/layout/MaterialDropdownExamples'), store)
                }, {
                    path: '/components/Pagging',
                    component: ac(() => import('modules/layout/PaggingExamples'), store)
                }, {
                    path: '/components/BriefPagging',
                    component: ac(() => import('modules/layout/BriefPaggingExamples'), store)
                }, {
                    path: '/components/MaterialProvider',
                    component: ac(() => import('modules/layout/MaterialProviderExamples'), store)
                }, {
                    path: '/components/TimeLine',
                    component: ac(() => import('modules/layout/TimeLineExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- draggable -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/DraggableList',
                    component: ac(() => import('modules/draggable/DraggableListExamples'), store)
                }, {
                    path: '/components/DraggableGrid',
                    component: ac(() => import('modules/draggable/DraggableGridExamples'), store)
                }, {
                    path: '/components/DraggableTree',
                    component: ac(() => import('modules/draggable/DraggableTreeExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- steppers -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/ArrowStep',
                    component: ac(() => import('modules/stepper/ArrowStepExamples'), store)
                }, {
                    path: '/components/RoundStep',
                    component: ac(() => import('modules/stepper/RoundStepExamples'), store)
                }, {
                    path: '/components/ListStep',
                    component: ac(() => import('modules/stepper/ListStepExamples'), store)
                }, {
                    path: '/components/DotStep',
                    component: ac(() => import('modules/stepper/DotStepExamples'), store)
                }, {
                    path: '/components/PointStep',
                    component: ac(() => import('modules/stepper/PointStepExamples'), store)
                }, {
                    path: '/components/VerticalPointStep',
                    component: ac(() => import('modules/stepper/VerticalPointStepExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- loading -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/SpanLoading',
                    component: ac(() => import('modules/loading/SpanLoadingExamples'), store)
                }, {
                    path: '/components/CircularLoading',
                    component: ac(() => import('modules/loading/CircularLoadingExamples'), store)
                }, {
                    path: '/components/PageLoading',
                    component: ac(() => import('modules/loading/PageLoadingExamples'), store)
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- media -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/LazyImage',
                    component: ac(() => import('modules/media/LazyImageExamples'), store)
                }, {
                    path: '/components/ColorPicker',
                    component: ac(() => import('modules/media/ColorPickerExamples'), store)
                }, {
                    path: '/components/HuePicker',
                    component: ac(() => import('modules/media/HuePickerExamples'), store)
                }
            ]
        }]
    }];

}