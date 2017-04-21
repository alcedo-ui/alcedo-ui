import React from 'react';
import {IndexRoute, Route, Redirect} from 'react-router';

import Root from 'containers/Root';
import App from 'containers/app/App';

export default (
    <Route path="/" component={Root}>

        {/*<IndexRoute component={App}/>*/}
        <IndexRoute getComponent={(nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('./containers/landing/Landing').default);
            });
        }}/>

        <Route path="landing"
               getComponent={(nextState, cb) => {
                   require.ensure([], (require) => {
                       cb(null, require('./containers/landing/Landing').default);
                   });
               }}/>

        <Redirect from="components" to="/components/RaisedButton"/>

        <Route path="components" component={App}>

            <Route path="RaisedButton"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/buttons/RaisedButtonExamples').default);
                       });
                   }}/>

            <Route path="FlatButton"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/buttons/FlatButtonExamples').default);
                       });
                   }}/>

            <Route path="IconButton"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/buttons/IconButtonExamples').default);
                       });
                   }}/>

            <Route path="IconAnchor"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/buttons/IconAnchorExamples').default);
                       });
                   }}/>

            <Route path="TextField"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/fields/TextFieldExamples').default);
                       });
                   }}/>
            <Route path="DatePicker"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/date/DatePickerExamples').default);
                       });
                   }}/>
            <Route path="DateRangePicker"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/date/DateRangePickerExamples').default);
                       });
                   }}/>
            <Route path="TimePicker"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/date/TimePickerExamples').default);
                       });
                   }}/>
            <Route path="DateTimePicker"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/date/DateTimePickerExamples').default);
                       });
                   }}/>

            <Route path="DropdownSelect"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/fields/DropdownSelectExamples').default);
                       });
                   }}/>
            <Route path="MultipleSelect"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/fields/MultipleSelectExamples').default);
                       });
                   }}/>
            <Route path="TreeSelect"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/fields/TreeSelectExamples').default);
                       });
                   }}/>

            <Route path="Checkbox"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/fields/CheckboxExamples').default);
                       });
                   }}/>

            <Route path="Radio"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/fields/RadioExamples').default);
                       });
                   }}/>

            <Route path="ToggleButton"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/fields/ToggleButtonExamples').default);
                       });
                   }}/>

            <Route path="Switcher"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/fields/SwitcherExamples').default);
                       });
                   }}/>

            <Route path="Slider"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/fields/SliderExamples').default);
                       });
                   }}/>

            <Route path="EditableField"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/fields/EditableFieldExamples').default);
                       });
                   }}/>

            <Route path="Dialog"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/popup/DialogExamples').default);
                       });
                   }}/>

            <Route path="Popup"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/popup/PopupExamples').default);
                       });
                   }}/>

            <Route path="CircularProgress"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/progress/CircularProgressExample').default);
                       });
                   }}/>

            <Route path="LinearProgress"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/progress/LinearProgressExample').default);
                       });
                   }}/>

            <Route path="Paper"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/layout/PaperExamples').default);
                       });
                   }}/>

            <Route path="Widget"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/layout/WidgetExamples').default);
                       });
                   }}/>

            <Route path="List"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/layout/ListExamples').default);
                       });
                   }}/>

            <Route path="Tab"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/layout/TabExamples').default);
                       });
                   }}/>

            <Route path="Accordion"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/layout/AccordionExamples').default);
                       });
                   }}/>

            <Route path="Table"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/layout/TableExamples').default);
                       });
                   }}/>

            <Route path="ArrowStep"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/stepper/ArrowStepExamples').default);
                       });
                   }}/>

            <Route path="RoundStep"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/stepper/RoundStepExamples').default);
                       });
                   }}/>

            <Route path="Toaster"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/message/ToasterExamples').default);
                       });
                   }}/>

        </Route>

    </Route>
);