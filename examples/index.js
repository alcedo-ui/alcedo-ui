'use strict';

import '@babel/polyfill';

import React from 'react';
import {createRoot} from 'react-dom/client';

// Vendors
import {createHashHistory} from 'history';
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import configureStore from 'reduxes/store';
import configureRoutes from './config.routes';

// Styles
import 'scss/index.scss';

const history = createHashHistory();
const store = configureStore(history);

/**
 * render app
 */
createRoot(document.getElementById('app-container')).render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {renderRoutes(configureRoutes(store))}
        </ConnectedRouter>
    </Provider>
);

module?.hot?.accept?.();
