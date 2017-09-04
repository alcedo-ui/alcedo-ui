import AppContainer from 'examples/containers/AppContainer';
import AppRoot from 'examples/containers/AppRoot';

import Landing from 'containers/landing/Landing';
import App from 'containers/app/App';

export default [{
    component: AppContainer,
    routes: [{
        path: '/',
        // exact: true,
        component: AppRoot,
        routes: [{
            path: '/landing',
            component: Landing
        }, {
            path: '/components',
            component: App
        }]
    }]
}];