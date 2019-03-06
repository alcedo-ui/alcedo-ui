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

import 'scss/index.scss';

const history = createHashHistory(),
    store = configureStore(history);

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

// hot
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('examples/config.routes.js', renderAppContainer);
    module.hot.accept('reduxes/store', renderAppContainer);
    module.hot.accept('reduxes/reducers', () => {
        store.replaceReducer(require('reduxes/reducers').default);
    });
}
