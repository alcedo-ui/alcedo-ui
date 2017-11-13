import React, {Component} from 'react';

import GroupList from 'src/GroupList';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Paper from 'src/Paper';

import PropTypeDescTable from '../PropTypeDescTable';
import GroupListDoc from 'assets/propTypes/GroupList.json';

import 'sass/containers/app/modules/layout/GroupListExamples.scss';

export default class GroupListExamples extends Component {

    constructor(props) {

        super(props);

        this.listData = [{
            name: 'socialNetwork',
            children: [{
                iconCls: 'fa fa-facebook',
                value: 'Facebook',
                text: 'Facebook',
                desc: 'Here is a Facebook Desc.',
                checked: 'true'
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
            }]
        }, GroupList.SEPARATOR, {
            name: 'device',
            children: [{
                iconCls: 'fa fa-android',
                value: 'Android',
                text: 'Android',
                desc: 'Here is a Android Desc.'
            }, {
                iconCls: 'fa fa-apple',
                value: 'Apple',
                text: 'Apple',
                desc: 'Here is a Apple Desc.'
            }, {
                iconCls: 'fa fa-windows',
                value: 'Windows',
                text: 'Windows',
                desc: 'Here is a Windows Desc.'
            }]
        }];

        this.changeHandler = this::this.changeHandler;

    }

    changeHandler(value) {
        console.log(value);
    }

    render() {
        return (
            <div className="example group-list-examples">

                <h2 className="example-title">GroupList</h2>

                <p>
                    <span>GroupList</span> are used to present multiple items vertically as a single continuous
                    element. They can be configured for many uses such as a contacts list, nested lists, etc.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A <code>GroupList</code> with isGrouped.
                                </p>

                                <Paper>
                                    <GroupList selectMode={GroupList.Mode.MULTI_SELECT}
                                               data={this.listData}
                                               onChange={this.changeHandler}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={GroupListDoc}/>

            </div>
        );
    }
};