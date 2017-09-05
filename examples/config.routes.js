import {asyncComponent} from 'vendors/AsyncComponent';

import AppContainer from 'examples/containers/AppContainer';
import AppRoot from 'examples/containers/AppRoot';

export default [{
    component: AppContainer,
    routes: [{
        path: '/',
        component: AppRoot,
        routes: [{
            path: '/landing',
            component: asyncComponent(() => import(/* webpackChunkName: "Landing" */ 'containers/landing/Landing'))
        }, {
            path: '/components',
            component: asyncComponent(() => import(/* webpackChunkName: "App" */ 'containers/app/App'))
        }]
    }]
}];