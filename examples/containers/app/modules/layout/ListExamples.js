import React, {Component} from 'react';

import List from 'src/List';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Paper from 'src/Paper';

import PropTypeDescTable from '../PropTypeDescTable';
import ListDoc from 'assets/propTypes/List.json';

import 'sass/containers/app/modules/layout/ListExamples.scss';

export default class ListExamples extends Component {

    constructor(props) {

        super(props);

        this.listData = [{
            iconCls: 'fa fa-facebook',
            value: 'Facebook',
            text: 'Facebook'
        }, {
            iconCls: 'fa fa-twitter',
            value: 'Twitter',
            text: 'Twitter'
        }, {
            iconCls: 'fa fa-google-plus',
            value: 'Google+',
            text: 'Google+'
        }];

        this.disabledListData = [{
            iconCls: 'fa fa-firefox',
            value: 'Firefox',
            text: 'Firefox',
            disabled: true
        }, {
            iconCls: 'fa fa-chrome',
            value: 'Chrome',
            text: 'Chrome'
        }, {
            iconCls: 'fa fa-safari',
            value: 'Safari',
            text: 'Safari',
            disabled: true
        }];

        this.themeListData = [{
            value: 'Success',
            text: 'Success',
            theme: 'success',
            rightIconCls: 'fa fa-check-circle'
        }, {
            value: 'Error',
            text: 'Error',
            theme: 'error',
            rightIconCls: 'fa fa-times-circle-o'
        }, {
            value: 'Warning',
            text: 'Warning',
            theme: 'warning',
            rightIconCls: 'fa fa-exclamation-triangle'
        }, {
            value: 'Primary',
            text: 'Primary',
            theme: 'primary',
            rightIconCls: 'fa fa-gratipay'
        }];

        this.descListData = [{
            iconCls: 'fa fa-facebook',
            value: 'Facebook',
            text: 'Facebook',
            desc: 'Here is a Facebook Desc.'
        }, {
            iconCls: 'fa fa-twitter',
            value: 'Twitter',
            text: 'Twitter',
            desc: 'Here is a Twitter Desc.'
        }, {
            iconCls: 'fa fa-google-plus',
            value: 'Google+',
            text: 'Google+',
            desc: 'Here is a Google+ Desc.'
        }];

    }

    changeHandler(value, index) {
        console.log('change::', value);
    }

    itemSelectHandler(value, index) {
        console.log('select::', value);
    }

    itemDeselectHandler(value, index) {
        console.log('deselect::', value);
    }

    render() {
        return (
            <div className="example list-examples">

                <h2 className="example-title">List</h2>

                <p>
                    <span>List</span> are used to present multiple items vertically as a single continuous
                    element. They can be configured for many uses such as a contacts list, nested lists, etc.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>A <code>List</code> simple example with left icons.</p>

                                <Paper>
                                    <List data={this.listData}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With disabled"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>disabled</code> property to true for disabled items.</p>

                                <Paper>
                                    <List data={this.disabledListData}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With theme and rightIconCls"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>theme</code> property to "success","error","warning","primary" and set
                                    the <code>rightIconCls</code> property to get rightIcons.</p>

                                <Paper>
                                    <List data={this.themeListData}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With desc"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A <code>List</code> with desc.
                                </p>

                                <Paper style={{width: 240}}>
                                    <List style={{width: 240}}
                                          data={this.descListData}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With mode"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A <code>List</code> with mode.Can be normal,radio,checkbox.
                                </p>

                                <Paper style={{width: 240}}>
                                    <List style={{width: 240}}
                                          mode={List.Mode.CHECKBOX}
                                          data={this.descListData}
                                          onChange={this.changeHandler}
                                          onItemSelect={this.itemSelectHandler}
                                          onItemDeselect={this.itemDeselectHandler}/>
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