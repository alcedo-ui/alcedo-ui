import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {hashHistory} from 'react-router';
import rootReducer from 'reduxes/reducers';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunk,
            routerMiddleware(hashHistory)
        )
    );
};