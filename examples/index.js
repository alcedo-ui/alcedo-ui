'use strict';

import '@babel/polyfill';

import React from 'react';
import {render} from 'react-dom';

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
function renderAppContainer() {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {renderRoutes(configureRoutes(store))}
            </ConnectedRouter>
        </Provider>,
        document.getElementById('app-container')
    );
}

renderAppContainer();

module?.hot?.accept?.();
