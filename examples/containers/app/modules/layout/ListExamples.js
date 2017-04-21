import React, {Component} from 'react';

import Paper from 'dist/Paper';
import List from 'dist/List';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import ListDoc from 'docs/List.json';

import 'sass/containers/app/modules/layout/ListExamples.scss';

export default class ListExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example list-example">

                <h2 className="example-title">List</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="List Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

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

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={ListDoc}/>

            </div>
        );
    }
};