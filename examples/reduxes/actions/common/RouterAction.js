import {push, replace, go, goBack, goForward} from 'connected-react-router';

export const routerPush = route => dispatch => {
    dispatch(push(route));
};

export const routerReplace = route => dispatch => {
    dispatch(replace(route));
};

export const routerGo = route => dispatch => {
    dispatch(go(route));
};

export const routerGoBack = () => dispatch => {
    dispatch(goBack());
};

export const routerGoForward = () => dispatch => {
    dispatch(goForward());
};
