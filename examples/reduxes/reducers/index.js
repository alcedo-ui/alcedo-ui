import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import router from './RouterReducer';
import device from './app/DeviceReducer';
import navMenu from './app/NavMenuReducer';
import theme from './app/ThemeReducer';

const rootReducer = combineReducers({

    routing,
    router,

    device,
    navMenu,
    theme

});

export default rootReducer;