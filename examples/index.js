'use strict';

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import createHashHistory from 'history/createHashHistory';
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from 'reduxes/store';
import configureRoutes from './config.routes';

import 'assets/font-awesome/js/fontawesome-all.min';

import 'sass/index.scss';

const history = createHashHistory(),
    store = configureStore(history);

injectTapEventPlugin();

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {renderRoutes(configureRoutes(store))}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app-container')
);