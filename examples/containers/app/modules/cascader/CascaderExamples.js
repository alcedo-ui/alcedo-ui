/**
 * Created by Wendy on 2017/5/16.
 */
import React, {Component} from 'react';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import CascaderList from 'dist/Cascader';
import Cascader from 'dist/Cascader';

import PropTypeDescTable from '../PropTypeDescTable';
import CascaderDoc from 'assets/propTypes/Cascader.json';

import 'sass/containers/app/modules/buttons/FlatButtonExamples.scss';

export default class CascaderExamples extends Component {
    constructor(props) {
        super(props);

        this.data = [{
            text: '河南省',
            value: 1,
            rightIconCls: 'fa fa-angle-right',
            children: [{
                text: '郑州市',
                value: 1
            }],
        }, {
            text: '湖北省',
            value: 2,
            rightIconCls: 'fa fa-angle-right',
            onTouchTap() {
                console.log('湖北省');
            }
        }, {
            text: '四川省',
            value: 3,
            rightIconCls: 'fa fa-angle-right',
            onTouchTap() {
                console.log('四川省');
            }
        }, {
            text: '辽宁省',
            value: 4,
            rightIconCls: 'fa fa-angle-right',
            onTouchTap() {
                console.log('辽宁省');
            }
        }, {
            text: '上海市',
            value: 5,
            rightIconCls: 'fa fa-angle-right',
            onTouchTap() {
                console.log('上海市');
            }
        }, {
            text: '北京市',
            value: 6,
            rightIconCls: 'fa fa-angle-right',
            onTouchTap() {
                console.log('北京市');
            }
        }, {
            text: '安徽省',
            value: 7,
            rightIconCls: 'fa fa-angle-right',

            onTouchTap() {
                console.log('安徽省');
            }
        }, {
            text: '山西省',
            value: 8,
            rightIconCls: 'fa fa-angle-right',
        }, {
            text: '江苏省',
            value: 9,
            rightIconCls: 'fa fa-angle-right',
        }, {
            text: '浙江省',
            value: 10,
            rightIconCls: 'fa fa-angle-right',
        }];
        this.listData = [{
            iconCls: 'fa fa-facebook',
            text: 'Facebook'
        }, {
            iconCls: 'fa fa-twitter',
            text: 'Twitter'
        }, {
            iconCls: 'fa fa-google-plus',
            text: 'Google+'
        }];
        // this.onChange = this::this.onChange;
    }

    // onChange(value) {
    //     console.log(value);
    // }

    render() {

        return (
            <div className="example cascader-examples">
                <h2 className="example-title">Cascader</h2>

                <p>
                    <span>Cascader</span> is a selection box.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>CascaderList simple example.</p>

                                <Cascader data={this.data}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={CascaderDoc}/>

            </div>
        )
    }
}