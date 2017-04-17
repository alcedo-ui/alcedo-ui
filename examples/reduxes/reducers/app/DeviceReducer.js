import Config from 'examples/config';
import * as types from 'reduxes/actionTypes';

const initialState = {
    isDesktop: window.innerWidth >= Config.desktopMinWidth
};

function device(state = initialState, action) {
    switch (action.type) {

        case types.SWITCH_TO_DESKTOP: {
            return {
                isDesktop: true
            };
        }

        case types.SWITCH_TO_MOBILE: {
            return {
                isDesktop: false
            };
        }

        default:
            return state;

    }
}

export default device;