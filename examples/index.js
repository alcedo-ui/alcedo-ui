'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, Router} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './config.routes';
import configureStore from 'reduxes/store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

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

document.getElementById('loading').style.display = 'none';

render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('app-container')
);