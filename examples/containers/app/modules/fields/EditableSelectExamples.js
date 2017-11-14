import React, {Component} from 'react';

import EditableSelect from 'src/EditableSelect';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import EditableSelectDoc from 'assets/propTypes/EditableSelect.json';

import 'sass/containers/app/modules/fields/EditableSelectExamples.scss';

export default class EditableSelectExamples extends Component {

    constructor(props) {

        super(props);

        this.data = ['test0', 'test1', {
            text: 'test2',
            value: 2,
            desc: 'Here is test2.',
            onTouchTap() {
                console.log('test2 selected!');
            }
        }, 'test3', 'test4', 'test5', {
            text: 'test6',
            value: 6,
            desc: 'Here is test6.',
            onTouchTap() {
                console.log('test6 selected!');
            }
        }, 'test7', 'test8', 'test9'];

        this.groupedData = [{
            name: 'socialNetwork',
            children: [{
                iconCls: 'fa fa-facebook',
                text: 'Facebook',
                desc: 'Here is a Facebook Desc.'
            }, {
                iconCls: 'fa fa-twitter',
                text: 'Twitter',
                desc: 'Here is a Twitter Desc.'
            }, {
                iconCls: 'fa fa-google-plus',
                text: 'Google+',
                desc: 'Here is a Google+ Desc.'
            }]
        }, {
            name: 'device',
            children: [{
                iconCls: 'fa fa-android',
                text: 'Android',
                desc: 'Here is a Android Desc.'
            }, {
                iconCls: 'fa fa-apple',
                text: 'Apple',
                desc: 'Here is a Apple Desc.'
            }, {
                iconCls: 'fa fa-windows',
                text: 'Windows',
                desc: 'Here is a Windows Desc.'
            }]
        }];

        this.onChange = this::this.onChange;

    }

    onChange(value) {
        console.log(value);
    }

    render() {

        return (
            <div className="example edit-able-select-examples">

                <h2 className="example-title">Editable Select</h2>

                <p>
                    <span>Editable Select</span> use to store operating elements. Click on the contact
                    and a drop-down menu will appear. You can select from the list and execute the appropriate command.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Editable Select</code> simple example.</p>

                                <div className="field-group">

                                    <EditableSelect data={this.data}
                                                    onChange={this.onChange}
                                                    />

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Editable Select</code> simple example.</p>

                                <div className="field-group">

                                    <EditableSelect data={this.data}
                                                    onChange={this.onChange}
                                                    selectMode={EditableSelect.SelectMode.SINGLE_SELECT}
                                                    useFilter={true}/>

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={EditableSelectDoc}/>

            </div>
        );
    }
};