import React, {Component} from 'react';

import * as types from 'reduxes/actionTypes/index';

function asyncComponent(getComponent, store) {

    return class AsyncComponent extends Component {

        constructor(props) {

            super(props);

            this.state = {
                Component: null
            };

        }

        loadStartCallback = () => {
            setTimeout(() => store.dispatch({type: types.LOAD_COMPONENT_START}), 0);
        };

        loadCompleteCallback = () => {
            setTimeout(() => store.dispatch({type: types.LOAD_COMPONENT_COMPLETE}), 0);
        };

        loadComponent = callback => {

            const Component = getComponent();

            if (Component instanceof Promise) {
                Component.then(({default: Component}) => {
                    this.setState({
                        Component
                    }, () => {
                        callback && callback();
                    });
                });
            } else {
                this.setState({
                    Component
                }, () => {
                    callback && callback();
                });
            }

        };

        componentDidMount() {
            if (!this.state.Component) {
                this.loadStartCallback();
                this.loadComponent(this.loadCompleteCallback);
            }
        }

        render() {

            const {Component} = this.state;

            if (Component) {
                return <Component {...this.props}/>;
            }

            return null;

        }

    };

}

export default asyncComponent;