import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Root from 'containers/Root';
import App from 'containers/app/App';

export default (
    <Route path="/" component={Root}>

        <IndexRoute component={App}/>

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

            <Route path="Dialog"
                   getComponent={(nextState, cb) => {
                       require.ensure([], (require) => {
                           cb(null, require('./containers/app/modules/popup/DialogExamples').default);
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
        </Route>

    </Route>
);