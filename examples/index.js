'use strict';

import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import createHashHistory from 'history/createHashHistory';
import {ConnectedRouter} from 'react-router-redux';

import configureStore from 'reduxes/store';
import Root from 'containers/Root';

const history = createHashHistory();
const store = configureStore(history);
injectTapEventPlugin();

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
            <div>
                <Route path="/" component={Root}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app-container')
);