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
            component: asyncComponent(() => {
                return import(
                    /* webpackChunkName: "Landing" */
                    'containers/landing/Landing'
                    );
            })
        }, {
            path: '/components',
            component: asyncComponent(() => {
                return import(
                    /* webpackChunkName: "App" */
                    'containers/app/App'
                    );
            }),
            routes: [

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- buttons -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/RaisedButton',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "RaisedButtonExamples" */
                            'modules/buttons/RaisedButtonExamples'
                            );
                    })
                }, {
                    path: '/components/FlatButton',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "FlatButtonExamples" */
                            'modules/buttons/FlatButtonExamples'
                            );
                    })
                }, {
                    path: '/components/GhostButton',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "GhostButtonExamples" */
                            'modules/buttons/GhostButtonExamples'
                            );
                    })
                }, {
                    path: '/components/IconButton',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "IconButtonExamples" */
                            'modules/buttons/IconButtonExamples'
                            );
                    })
                }, {
                    path: '/components/IconAnchor',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "IconAnchorExamples" */
                            'modules/buttons/IconAnchorExamples'
                            );
                    })
                },

                /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- fields -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
                {
                    path: '/components/CascaderField',
                    component: asyncComponent(() => {
                        return import(
                            /* webpackChunkName: "CascaderFieldExamples" */
                            'modules/fields/CascaderFieldExamples'
                            );
                    })
                }
            ]
        }]
    }]
}];