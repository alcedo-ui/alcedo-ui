import React, {Component} from 'react';
import LocalAutoComplete from 'dist/LocalAutoComplete';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import LocalAutoCompleteDoc from 'assets/propTypes/LocalAutoComplete.json';

import 'sass/containers/app/modules/fields/LocalAutoCompleteExamples.scss';

export default class LocalAutoCompleteExamples extends Component {

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

    onChange(item) {
        console.log('select item: ', item);
    }

    render() {

        return (
            <div className="example auto-complete-examples">

                <h2 className="example-title">Local Auto Complete</h2>

                <p>
                    A <span>Local Auto Complete</span> is an interface to help users to complete their input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="auto Complete Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Local Auto Complete simple default example.</p>

                                <LocalAutoComplete data={this.data}
                                                   placeholder="Please select ..."
                                                   onChange={this.onChange}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="auto Complete Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Local Auto Complete simple default example.</p>

                                <LocalAutoComplete popupStyle={{maxHeight: 300}}
                                                   isGrouped={true}
                                                   data={this.groupedData}
                                                   placeholder="Please select ..."
                                                   onChange={this.onChange}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={LocalAutoCompleteDoc}/>

            </div>

        );
    }
};