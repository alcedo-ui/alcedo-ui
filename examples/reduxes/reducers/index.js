import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import device from './app/DeviceReducer';
import navMenu from './app/NavMenuReducer';
import loadComponent from './app/LoadComponentReducer';

const rootReducer = combineReducers({

    device,
    navMenu,
    loadComponent,

    router: routerReducer

});

export default rootReducer;