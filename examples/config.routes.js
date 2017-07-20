import React from 'react';
import {IndexRoute, Route, Redirect} from 'react-router';

import * as types from 'reduxes/actionTypes';

import Root from 'containers/Root';
import Landing from 'containers/landing/Landing';
import App from 'containers/app/App';

import TextFieldExamples from 'containers/app/modules/fields/TextFieldExamples';
import TextAreaExamples from 'containers/app/modules/fields/TextAreaExamples';
import RemoteAutoCompleteExamples from 'containers/app/modules/fields/RemoteAutoCompleteExamples';
import LocalAutoCompleteExamples from 'containers/app/modules/fields/LocalAutoCompleteExamples';
import DropdownSelectExamples from 'containers/app/modules/fields/DropdownSelectExamples';
import MultipleSelectExamples from 'containers/app/modules/fields/MultipleSelectExamples';
import TreeSelectExamples from 'containers/app/modules/fields/TreeSelectExamples';
import TreeExamples from 'containers/app/modules/fields/TreeExamples';
import CheckboxExamples from 'containers/app/modules/fields/CheckboxExamples';
import RadioExamples from 'containers/app/modules/fields/RadioExamples';
import RadioGroupExamples from 'containers/app/modules/fields/RadioGroupExamples';
import ButtonCheckboxExamples from 'containers/app/modules/fields/ButtonCheckboxExamples';
import ButtonRadioGroupExamples from 'containers/app/modules/fields/ButtonRadioGroupExamples';
import SwitcherExamples from 'containers/app/modules/fields/SwitcherExamples';
import SliderExamples from 'containers/app/modules/fields/SliderExamples';
import EditableFieldExamples from 'containers/app/modules/fields/EditableFieldExamples';
import FlashNumberExamples from 'containers/app/modules/fields/FlashNumberExamples';
import TransferExamples from 'containers/app/modules/fields/TransferExamples';

import DatePickerExamples from 'containers/app/modules/date/DatePickerExamples';
import DateRangePickerExamples from 'containers/app/modules/date/DateRangePickerExamples';
import TimePickerExamples from 'containers/app/modules/date/TimePickerExamples';
import DateTimePickerExamples from 'containers/app/modules/date/DateTimePickerExamples';

import DialogExamples from 'containers/app/modules/popup/DialogExamples';
import PopupExamples from 'containers/app/modules/popup/PopupExamples';

import CircularProgressExample from 'containers/app/modules/progress/CircularProgressExample';
import LinearProgressExample from 'containers/app/modules/progress/LinearProgressExample';

import PaperExamples from 'containers/app/modules/layout/PaperExamples';
import WidgetExamples from 'containers/app/modules/layout/WidgetExamples';
import ListExamples from 'containers/app/modules/layout/ListExamples';
import TabExamples from 'containers/app/modules/layout/TabExamples';
import AccordionExamples from 'containers/app/modules/layout/AccordionExamples';
import TableExamples from 'containers/app/modules/layout/TableExamples';
import WaterfallExamples from 'containers/app/modules/layout/WaterfallExamples';

import ArrowStepExamples from 'containers/app/modules/stepper/ArrowStepExamples';
import RoundStepExamples from 'containers/app/modules/stepper/RoundStepExamples';
import ListStepExamples from 'containers/app/modules/stepper/ListStepExamples';

import ToasterExamples from 'containers/app/modules/message/ToasterExamples';
import TipExamples from 'containers/app/modules/message/TipExamples';

import TimeLineExamples from 'containers/app/modules/TimeLine/TimeLineExamples';
import SpanLoadingExamples from 'containers/app/modules/loading/SpanLoadingExamples';
import CircularLoadingExamples from 'containers/app/modules/loading/CircularLoadingExamples';
import RateExamples from 'containers/app/modules/Rate/RateExamples';

import CascaderExamples from 'containers/app/modules/cascader/CascaderExamples';


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

            {/* rate */}
            <Route path="Rate"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/Rate/RateExamples').default);
                           loadCompleteCallback();
                       }, 'RateExamples');
                   }}/>

            {/* cascader */}
            <Route path="Cascader"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/cascader/CascaderExamples').default);
                           loadCompleteCallback();
                       }, 'CascaderExamples');
                   }}/>

        </Route>

    </Route>;

};