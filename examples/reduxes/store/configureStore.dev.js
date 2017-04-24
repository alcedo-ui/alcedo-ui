import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {hashHistory} from 'react-router';
import rootReducer from 'reduxes/reducers';

export default function configureStore(initialState) {

    const browserMiddleware = routerMiddleware(hashHistory);
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunk,
            browserMiddleware
        )
    );

    if (module.hot) {
        module.hot.accept('reduxes/reducers', () => {
            const nextRootReducer = require('reduxes/reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;

};
