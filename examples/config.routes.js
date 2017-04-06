import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Root from 'containers/Root';
import App from 'containers/app/App';

export default (
    <Route path="/" component={Root}>

        <IndexRoute component={App}/>

        <Route path="app" component={App}>

            {/*<Route path="changePassword"*/}
            {/*getComponent={(nextState, cb) => {*/}
            {/*require.ensure([], (require) => {*/}
            {/*cb(null, require('./containers/app/modules/changePassword/ChangePassword').default);*/}
            {/*});*/}
            {/*}}/>*/}

        </Route>

    </Route>
);