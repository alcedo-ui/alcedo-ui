import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import router from './RouterReducer';
import device from './app/DeviceReducer';
import navMenu from './app/NavMenuReducer';

const rootReducer = combineReducers({

    routing,
    router,

    device,
    navMenu

});

export default rootReducer;