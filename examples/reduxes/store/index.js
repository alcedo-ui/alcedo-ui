import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from 'reduxes/reducers';

export default history => createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        routerMiddleware(history)
    )
)
