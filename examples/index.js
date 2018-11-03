'use strict';

import '@babel/polyfill';
import React from 'react';
import {render} from 'react-dom';
import {createHashHistory} from 'history';
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';

import configureStore from 'reduxes/store';
import configureRoutes from './config.routes';

import 'sass/index.scss';

const history = createHashHistory(),
    store = configureStore(history);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {renderRoutes(configureRoutes(store))}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app-container')
);
