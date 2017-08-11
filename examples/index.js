'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import createHashHistory from 'history/createHashHistory';
import {ConnectedRouter} from 'react-router-redux';

import configureRoute from './config.routes';
import configureStore from 'reduxes/store';

const history = createHashHistory();
const store = configureStore(history);

/**
 * IE polyfill
 */
if (!(Object.setPrototypeOf || {}.__proto__)) {
    var nativeGetPrototypeOf = Object.getPrototypeOf;

    Object.getPrototypeOf = function (object) {
        if (object.__proto__) {
            return object.__proto__;
        } else {
            return nativeGetPrototypeOf.call(Object, object);
        }
    };
}

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {configureRoute(store)}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app-container')
);