'use strict';

import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import createHashHistory from 'history/createHashHistory';
import {ConnectedRouter} from 'react-router-redux';

import configureStore from 'reduxes/store';
import routes from './config.routes';

const history = createHashHistory();
const store = configureStore(history);
injectTapEventPlugin();

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {renderRoutes(routes)}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app-container')
);