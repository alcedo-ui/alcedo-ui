import React from 'react';
import {IndexRoute, Route, Redirect} from 'react-router';

import * as types from 'reduxes/actionTypes';

import Root from 'containers/Root';
import Landing from 'containers/landing/Landing';
import App from 'containers/app/App';

export default function configureRoute(store) {

    function loadStartCallback() {
        store.dispatch({type: types.LOAD_COMPONENT_START});
    }

    function loadCompleteCallback() {
        store.dispatch({type: types.LOAD_COMPONENT_COMPLETE});
    }

    return <Route path="/" component={Root}>

        <IndexRoute component={Landing}/>

        <Route path="landing"
               component={Landing}/>

        <Redirect from="components" to="/components/RaisedButton"/>

        <Route path="components"
               component={App}>

            {/* buttons */}
            <Route path="RaisedButton"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/buttons/RaisedButtonExamples').default);
                           loadCompleteCallback();
                       }, 'RaisedButtonExamples');
                   }}/>
            <Route path="FlatButton"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/buttons/FlatButtonExamples').default);
                           loadCompleteCallback();
                       }, 'FlatButtonExamples');
                   }}/>
            <Route path="GhostButton"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/buttons/GhostButtonExamples').default);
                           loadCompleteCallback();
                       }, 'GhostButtonExamples');
                   }}/>
            <Route path="IconButton"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/buttons/IconButtonExamples').default);
                           loadCompleteCallback();
                       }, 'IconButtonExamples');
                   }}/>
            <Route path="IconAnchor"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/buttons/IconAnchorExamples').default);
                           loadCompleteCallback();
                       }, 'IconAnchorExamples');
                   }}/>

            {/* fields */}

            <Route path="CascaderField"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/CascaderFieldExamples.js').default);
                           loadCompleteCallback();
                       }, 'CascaderFieldExamples');
                   }}/>
            <Route path="CascaderList"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/layout/CascaderListExamples.js').default);
                           loadCompleteCallback();
                       }, 'CascaderListExamples');
                   }}/>
            <Route path="TextField"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/TextFieldExamples').default);
                           loadCompleteCallback();
                       }, 'TextFieldExamples');
                   }}/>
            <Route path="TextArea"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/TextAreaExamples').default);
                           loadCompleteCallback();
                       }, 'TextAreaExamples');
                   }}/>
            <Route path="RemoteAutoComplete"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/RemoteAutoCompleteExamples').default);
                           loadCompleteCallback();
                       }, 'RemoteAutoCompleteExamples');
                   }}/>
            <Route path="LocalAutoComplete"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/LocalAutoCompleteExamples').default);
                           loadCompleteCallback();
                       }, 'LocalAutoCompleteExamples');
                   }}/>
            <Route path="DatePicker"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/date/DatePickerExamples').default);
                           loadCompleteCallback();
                       }, 'DatePickerExamples');
                   }}/>
            <Route path="DateRangePicker"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/date/DateRangePickerExamples').default);
                           loadCompleteCallback();
                       }, 'DateRangePickerExamples');
                   }}/>
            <Route path="TimePicker"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/date/TimePickerExamples').default);
                           loadCompleteCallback();
                       }, 'TimePickerExamples');
                   }}/>
            <Route path="DateTimePicker"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/date/DateTimePickerExamples').default);
                           loadCompleteCallback();
                       }, 'DateTimePickerExamples');
                   }}/>
            <Route path="DropdownSelect"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/DropdownSelectExamples').default);
                           loadCompleteCallback();
                       }, 'DropdownSelectExamples');
                   }}/>
            <Route path="MultipleSelect"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/MultipleSelectExamples').default);
                           loadCompleteCallback();
                       }, 'MultipleSelectExamples');
                   }}/>
            <Route path="TreeSelect"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/TreeSelectExamples').default);
                           loadCompleteCallback();
                       }, 'TreeSelectExamples');
                   }}/>
            <Route path="Tree"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/TreeExamples').default);
                           loadCompleteCallback();
                       }, 'TreeExamples');
                   }}/>
            <Route path="Checkbox"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/CheckboxExamples').default);
                           loadCompleteCallback();
                       }, 'CheckboxExamples');
                   }}/>
            <Route path="Radio"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/RadioExamples').default);
                           loadCompleteCallback();
                       }, 'RadioExamples');
                   }}/>
            <Route path="RadioGroup"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/RadioGroupExamples').default);
                           loadCompleteCallback();
                       }, 'RadioGroupExamples');
                   }}/>
            <Route path="ButtonCheckbox"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/ButtonCheckboxExamples').default);
                           loadCompleteCallback();
                       }, 'ButtonCheckboxExamples');
                   }}/>
            <Route path="ButtonRadioGroup"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/ButtonRadioGroupExamples').default);
                           loadCompleteCallback();
                       }, 'ButtonRadioGroupExamples');
                   }}/>
            <Route path="Switcher"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/SwitcherExamples').default);
                           loadCompleteCallback();
                       }, 'SwitcherExamples');
                   }}/>
            <Route path="Slider"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/SliderExamples').default);
                           loadCompleteCallback();
                       }, 'SliderExamples');
                   }}/>
            <Route path="EditableField"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/EditableFieldExamples').default);
                           loadCompleteCallback();
                       }, 'EditableFieldExamples');
                   }}/>
            <Route path="FlashNumber"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/FlashNumberExamples').default);
                           loadCompleteCallback();
                       }, 'FlashNumberExamples');
                   }}/>
            <Route path="Transfer"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/TransferExamples').default);
                           loadCompleteCallback();
                       }, 'TransferExamples');
                   }}/>
            <Route path="TagField"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/TagFieldExamples').default);
                           loadCompleteCallback();
                       }, 'TagFieldExamples');
                   }}/>

            <Route path="Rate"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/RateExamples').default);
                           loadCompleteCallback();
                       }, 'RateExamples');
                   }}/>
            <Route path="EditableSelect"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/fields/EditableSelectExamples').default);
                           loadCompleteCallback();
                       }, 'EditableSelectExamples');
                   }}/>
            {/* popups */}
            <Route path="Dialog"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/popup/DialogExamples').default);
                           loadCompleteCallback();
                       }, 'DialogExamples');
                   }}/>
            <Route path="Popup"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/popup/PopupExamples').default);
                           loadCompleteCallback();
                       }, 'PopupExamples');
                   }}/>
            <Route path="Menu"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/popup/MenuExamples').default);
                           loadCompleteCallback();
                       }, 'MenuExamples');
                   }}/>

            {/* progresses */}
            <Route path="CircularProgress"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/progress/CircularProgressExample').default);
                           loadCompleteCallback();
                       }, 'CircularProgressExample');
                   }}/>
            <Route path="LinearProgress"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/progress/LinearProgressExample').default);
                           loadCompleteCallback();
                       }, 'LinearProgressExample');
                   }}/>

            {/* layouts */}
            <Route path="Paper"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/layout/PaperExamples').default);
                           loadCompleteCallback();
                       }, 'PaperExamples');
                   }}/>
            <Route path="Widget"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/layout/WidgetExamples').default);
                           loadCompleteCallback();
                       }, 'WidgetExamples');
                   }}/>
            <Route path="List"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/layout/ListExamples').default);
                           loadCompleteCallback();
                       }, 'ListExamples');
                   }}/>
            <Route path="Tab"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/layout/TabExamples').default);
                           loadCompleteCallback();
                       }, 'TabExamples');
                   }}/>
            <Route path="Accordion"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/layout/AccordionExamples').default);
                           loadCompleteCallback();
                       }, 'AccordionExamples');
                   }}/>
            <Route path="Table"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/layout/TableExamples').default);
                           loadCompleteCallback();
                       }, 'TableExamples');
                   }}/>
            <Route path="Waterfall"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/layout/WaterfallExamples').default);
                           loadCompleteCallback();
                       }, 'WaterfallExamples');
                   }}/>
            <Route path="Grid"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/layout/GridExamples').default);
                           loadCompleteCallback();
                       }, 'GridExamples');
                   }}/>

            {/* draggable */}
            <Route path="DraggableList"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/draggable/DraggableListExamples').default);
                           loadCompleteCallback();
                       }, 'DraggableListExamples');
                   }}/>
            <Route path="DraggableGrid"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/draggable/DraggableGridExamples').default);
                           loadCompleteCallback();
                       }, 'DraggableGridExamples');
                   }}/>

            {/* steppers */}
            <Route path="ArrowStep"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/stepper/ArrowStepExamples').default);
                           loadCompleteCallback();
                       }, 'ArrowStepExamples');
                   }}/>
            <Route path="RoundStep"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/stepper/RoundStepExamples').default);
                           loadCompleteCallback();
                       }, 'RoundStepExamples');
                   }}/>
            <Route path="ListStep"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/stepper/ListStepExamples').default);
                           loadCompleteCallback();
                       }, 'ListStepExamples');
                   }}/>
            <Route path="DotStep"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/stepper/DotStepExamples').default);
                           loadCompleteCallback();
                       }, 'ListStepExamples');
                   }}/>

            {/* messages */}
            <Route path="Toaster"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/message/ToasterExamples').default);
                           loadCompleteCallback();
                       }, 'ToasterExamples');
                   }}/>
            <Route path="Tip"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/message/TipExamples').default);
                           loadCompleteCallback();
                       }, 'TipExamples');
                   }}/>

            {/* timeLine */}
            <Route path="TimeLine"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/TimeLine/TimeLineExamples').default);
                           loadCompleteCallback();
                       }, 'TimeLineExamples');
                   }}/>

            {/* loading */}
            <Route path="SpanLoading"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/loading/SpanLoadingExamples').default);
                           loadCompleteCallback();
                       }, 'SpanLoadingExamples');
                   }}/>
            <Route path="CircularLoading"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/loading/CircularLoadingExamples').default);
                           loadCompleteCallback();
                       }, 'CircularLoadingExamples');
                   }}/>

            {/* MaterialDesign */}
            <Route path="MaterialTextField"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/MaterialDesign/MaterialTextFieldExamples').default);
                           loadCompleteCallback();
                       }, 'MaterialTextFieldExamples');
                   }}/>
            <Route path="MaterialDropdownSelect"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/MaterialDesign/MaterialDropdownSelectExamples').default);
                           loadCompleteCallback();
                       }, 'MaterialDropdownSelectExamples');
                   }}/>

            {/* media */}
            <Route path="LazyImage"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/media/LazyImageExamples').default);
                           loadCompleteCallback();
                       }, 'LazyImageExamples');
                   }}/>


        </Route>

    </Route>;

};