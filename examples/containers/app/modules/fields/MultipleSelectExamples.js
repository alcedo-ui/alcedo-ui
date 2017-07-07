import React, {Component} from 'react';

import MultipleSelect from 'dist/MultipleSelect';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import MultipleSelectDoc from 'assets/propTypes/MultipleSelect.json';

import 'sass/containers/app/modules/fields/MultipleSelectExamples.scss';

export default class MultipleSelectExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            data: [{
                key: 1,
                text: 'one'
            }, {
                key: 2,
                text: 'two'
            }, {
                key: 3,
                text: 'three'
            }, {
                key: 4,
                text: 'four'
            }, {
                key: 5,
                text: 'five'
            }, {
                key: 6,
                text: 'six'
            }, {
                key: 7,
                text: 'seven'
            }, {
                key: 8,
                text: 'eight'
            }, {
                key: 9,
                text: 'nine'
            }],
            value: []
        };

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

        this.onChangeHandle = this::this.onChangeHandle;
        this.onChangeHandleDisabled = this::this.onChangeHandleDisabled;

    }

    onChangeHandle(value) {
        this.setState({
            value: value
        });
    }

    onChangeHandleDisabled(value) {
        this.setState({
            value: value
        });
    }

    render() {

        const {data, value} = this.state;

        return (
            <div className="example multiple-select-examples">

                <h2 className="example-title">Multiple Select</h2>
                <p>
                    <span>Multiple Select</span> is a user-friendly replacement for select boxes with the multiple
                    attribute.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Multiple Select Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Multiple Select simple default example.</p>

                                <div className="field-group">
                                    <label className="multiple-select-label">Number</label>
                                    <MultipleSelect className="multiple-select"
                                                    data={data}
                                                    value={value}
                                                    infoMsg="please select number"
                                                    onChange={(value) => {
                                                        this.onChangeHandle(value);
                                                    }}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Multiple Select Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Multiple Select simple default example.</p>

                                <div className="field-group">
                                    <label className="multiple-select-label">Number</label>
                                    <MultipleSelect isGrouped={true}
                                                    data={this.groupedData}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={MultipleSelectDoc}/>

            </div>
        );
    }
};