import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import device from './app/DeviceReducer';
import navMenu from './app/NavMenuReducer';
import loadComponent from './app/LoadComponentReducer';

export default history => combineReducers({

    router: connectRouter(history),

    device,
    navMenu,
    loadComponent

});
