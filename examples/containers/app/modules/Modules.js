import React, {Component} from 'react';
import {Route, Redirect} from 'react-router';

import Bundle from 'dist/Bundle';

import RaisedButtonExamplesContainer from 'bundle-loader?lazy&name=[name]!modules/buttons/RaisedButtonExamples';
import FlatButtonExamplesContainer from 'bundle-loader?lazy&name=[name]!modules/buttons/FlatButtonExamples';

export default class Modules extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const RaisedButtonExamples = () => (
                <Bundle load={RaisedButtonExamplesContainer}>
                    {(RaisedButtonExamples) => <RaisedButtonExamples/>}
                </Bundle>
            ),
            FlatButtonExamples = () => (
                <Bundle load={FlatButtonExamplesContainer}>
                    {(FlatButtonExamples) => <FlatButtonExamples/>}
                </Bundle>
            );

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