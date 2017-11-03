import React, {Component} from 'react';

import DropdownSelect from 'src/DropdownSelect';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Theme from 'src/Theme';

import PropTypeDescTable from '../PropTypeDescTable';
import DropdownSelectDoc from 'assets/propTypes/DropdownSelect.json';

import 'sass/containers/app/modules/fields/DropdownSelectExamples.scss';

export default class DropdownSelectExamples extends Component {

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
            }]
        }, {
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

        this.onChange = this::this.onChange;

    }

    onChange(value) {
        console.log(value);
    }

    render() {

        return (
            <div className="example drop-down-select-examples">

                <h2 className="example-title">Dropdown Select</h2>

                <p>
                    <span>Dropdown Select</span> use to store operating elements. Click on the contact
                    and a drop-down menu will appear. You can select from the list and execute the appropriate command.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Dropdown Select</code> simple example.</p>

                                <div className="field-group">

                                    <DropdownSelect data={this.data}
                                                    onChange={this.onChange}/>

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Self defined theme"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>autoClose</code> property to false,the select list will not close when
                                    choose one item.</p>

                                <div className="field-group">

                                    <DropdownSelect theme={Theme.PRIMARY}
                                                    data={this.data}
                                                    onChange={this.onChange}/>

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With Filter"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <div className="field-group">

                                    <p>Set the <code>filter</code> property to true,the DropdownSelect will have user
                                        search input.</p>

                                    <DropdownSelect data={this.data}
                                                    useFilter={true}
                                                    useSelectAll={true}
                                                    mode={DropdownSelect.Mode.CHECKBOX}
                                                    autoClose={false}
                                                    onChange={this.onChange}/>

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With multi"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <div className="field-group">

                                    <p>
                                        Set the <code>mod</code> property to <code>DropdownSelect.Mode.CHECKBOX</code>,
                                        the DropdownSelect can be Multiselect.
                                    </p>

                                    <DropdownSelect data={this.data}
                                                    autoClose={false}
                                                    mode={DropdownSelect.Mode.CHECKBOX}
                                                    onChange={this.onChange}/>

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With isGrouped"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <div className="field-group">

                                    <p>Set the <code>isGrouped</code> property to true,the DropdownSelect will have
                                        group.
                                    </p>

                                    <DropdownSelect style={{width: 240}}
                                                    popupStyle={{maxHeight: 300}}
                                                    data={this.groupedData}
                                                    autoClose={false}
                                                    multi={true}
                                                    isGrouped={true}
                                                    rightIconCls="fa fa-caret-down"
                                                    onChange={this.onChange}/>

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DropdownSelectDoc}/>

            </div>
        );
    }
};