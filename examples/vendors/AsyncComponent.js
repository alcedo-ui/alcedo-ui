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

        componentWillMount() {

            if (!this.state.Component) {

                store.dispatch({type: types.LOAD_COMPONENT_START});

                getComponent().then(({default: Component}) => {
                    AsyncComponent.Component = Component;
                    this.setState({
                        Component
                    }, () => {
                        store.dispatch({type: types.LOAD_COMPONENT_COMPLETE});
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