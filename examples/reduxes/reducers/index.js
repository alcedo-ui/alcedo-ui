import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import router from './RouterReducer';
import device from './app/DeviceReducer';
import navMenu from './app/NavMenuReducer';
import loadComponent from './app/LoadComponentReducer';

const rootReducer = combineReducers({

    routing,
    router,

    device,
    navMenu,
    loadComponent

});

export default rootReducer;