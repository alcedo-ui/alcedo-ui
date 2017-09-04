import React, {Component} from 'react';

export function asyncComponent(getComponent) {

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
                getComponent().then(({default: Component}) => {
                    AsyncComponent.Component = Component;
                    this.setState({Component});
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