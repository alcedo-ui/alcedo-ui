import React, {Component} from 'react';

import * as types from 'reduxes/actionTypes';

export function asyncComponent(store, getComponent) {

    return class AsyncComponent extends Component {

        static Component = null;

        constructor(props) {

            super(props);

            this.state = {
                Component: AsyncComponent.Component
            };

        }

        loadStartCallback() {
            setTimeout(() => {
                store.dispatch({type: types.LOAD_COMPONENT_START});
            }, 0);
        }

        loadCompleteCallback() {
            setTimeout(() => {
                store.dispatch({type: types.LOAD_COMPONENT_COMPLETE});
            }, 0);
        }

        componentWillMount() {

            if (!this.state.Component) {

                this.loadStartCallback();

                getComponent().then(({default: Component}) => {
                    AsyncComponent.Component = Component;
                    this.setState({
                        Component
                    }, () => {
                        this.loadCompleteCallback();
                    });
                });

            }

        }

        render() {
            const {Component} = this.state;
            if (Component) {
                return <Component {...this.props} />;
            }
            return null;
        }

    };

}