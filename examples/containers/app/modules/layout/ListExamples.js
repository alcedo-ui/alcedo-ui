import React, {Component} from 'react';

import Paper from 'dist/Paper';
import List from 'dist/List';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import ListDoc from 'assets/propTypes/List.json';

import 'sass/containers/app/modules/layout/ListExamples.scss';

export default class ListExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example list-examples">

                <h2 className="example-title">List</h2>

                <p>
                    <span>List</span> Lists are used to present multiple items vertically as a single continuous
                    element. They can be configured for many uses such as a contacts list, nested lists, etc.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="List Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>A simple List with left icons.</p>

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

                <Widget>

                    <WidgetHeader className="example-header" title="List Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>A simple List with disabled item.Set the disabled property to true for disabled
                                    items.</p>

                                <Paper>
                                    <List items={[{
                                        iconCls: 'fa fa-firefox',
                                        value: 'Firefox',
                                        disabled: true
                                    }, {
                                        iconCls: 'fa fa-chrome',
                                        value: 'Chrome'
                                    }, {
                                        iconCls: 'fa fa-safari',
                                        value: 'Safari',
                                        disabled: true
                                    }]}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="List Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>A simple List with right icons and different themes.Set the theme property to
                                    "success","error","warning","primary" and set the iconPosition property to different
                                    icon class.</p>

                                <Paper>
                                    <List items={[{
                                        value: 'Success',
                                        theme: 'success',
                                        iconPosition: 'fa fa-check-circle'
                                    }, {
                                        value: 'Error',
                                        theme: 'error',
                                        iconPosition: 'fa fa-times-circle-o'
                                    }, {
                                        value: 'Warning',
                                        theme: 'warning',
                                        iconPosition: 'fa fa-exclamation-triangle'
                                    }, {
                                        value: 'Primary',
                                        theme: 'primary',
                                        iconPosition: 'fa fa-gratipay'
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