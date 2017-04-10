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