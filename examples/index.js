'use strict';

import React from 'react';
import {render} from 'react-dom';
import createHashHistory from 'history/createHashHistory';
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

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