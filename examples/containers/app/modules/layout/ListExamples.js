import React, {Component} from 'react';

import Paper from 'dist/Paper';
import List from 'dist/List';

import 'sass/containers/app/modules/layout/ListExamples.scss';

export default class ListExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example list-examples">

                <div className="examples">
                    <div className="examples-title">List</div>
                    <div className="examples-wrapper">

                        <Paper>
                            <List items={[{
                                iconCls: 'fa fa-facebook',
                                value: 'Facebook'
                            }, {
                                iconCls: 'fa fa-twitter',
                                value: 'Twitter'
                            }, {
                                iconCls: 'fa fa-google-plus',
                                value: 'Google+'
                            }]}/>
                        </Paper>

                    </div>
                </div>

            </div>
        );
    }
};