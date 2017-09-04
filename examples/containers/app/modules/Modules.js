import React, {Component} from 'react';
import {Route, Redirect} from 'react-router';

import Bundle from 'dist/Bundle';

import RaisedButtonExamplesContainer from 'bundle-loader?lazy&name=[name]!modules/buttons/RaisedButtonExamples';
import FlatButtonExamplesContainer from 'bundle-loader?lazy&name=[name]!modules/buttons/FlatButtonExamples';

export default class Modules extends Component {

    constructor(props) {
        super(props);
    }

    asyncComponent(getComponent) {

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

    render() {

        const RaisedButtonExamples = this.asyncComponent(() => import('containers/app/modules/buttons/RaisedButtonExamples'));
        const FlatButtonExamples = this.asyncComponent(() => import('containers/app/modules/buttons/FlatButtonExamples'));

        return (
            <div>

                <Route path="/components/RaisedButton"
                       component={RaisedButtonExamples}/>
                <Route path="/components/FlatButton"
                       component={FlatButtonExamples}/>
                <Route path="/GhostButton"
                       getComponent={(nextState, cb) => {
                           require.ensure([], (require) => {
                               cb(null, require('containers/app/modules/buttons/GhostButtonExamples').default);
                           }, 'GhostButtonExamples');
                       }}/>
                <Route path="/IconButton"
                       getComponent={(nextState, cb) => {
                           require.ensure([], (require) => {
                               cb(null, require('containers/app/modules/buttons/IconButtonExamples').default);
                           }, 'IconButtonExamples');
                       }}/>
                <Route path="/IconAnchor"
                       getComponent={(nextState, cb) => {
                           require.ensure([], (require) => {
                               cb(null, require('containers/app/modules/buttons/IconAnchorExamples').default);
                           }, 'IconAnchorExamples');
                       }}/>

            </div>
        );
    }

}