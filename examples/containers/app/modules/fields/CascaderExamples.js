/**
 * Created by Wendy on 2017/5/16.
 */
import React, {Component} from 'react';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import Cascader from 'dist/Cascader';

import PropTypeDescTable from '../PropTypeDescTable';
import CascaderDoc from '../../../../assets/propTypes/Cascader.json';

import '../../../../assets/sass/containers/app/modules/buttons/FlatButtonExamples.scss';

export default class CascaderExamples extends Component {

    constructor(props) {

        super(props);

        this.data = [{
            text: '河南省',
            value: '河南省',
            children: [{
                text: '郑州市',
                value: '郑州市',
                children: [{
                    text: '二七纪念塔',
                    value: '二七纪念塔'
                }, {
                    text: '海洋馆',
                    value: '海洋馆'
                }, {
                    text: '动物园',
                    value: '动物园'
                }]
            }, {
                text: '平顶山市',
                value: '平顶山市',
                children: [{
                    text: '白龟山水库',
                    value: '白龟山水库'
                }, {
                    text: '香山寺',
                    value: '香山寺'
                }]
            }, {
                text: '洛阳市',
                value: '洛阳市',
                children: [{
                    text: '龙门石窟',
                    value: '龙门石窟'
                }, {
                    text: '白马寺',
                    value: '白马寺'
                }]
            }]
        }, {
            text: '湖北省',
            value: '湖北省',
            children: [{
                text: '武汉市',
                value: '武汉市'
            }, {
                text: '黄石市',
                value: '黄石市'
            }, {
                text: '襄樊市',
                value: '襄樊市'
            }]
        }, {
            text: '四川省',
            value: '四川省',
            children: [{
                text: '成都市',
                value: '成都市'
            }, {
                text: '重庆市',
                value: '重庆市'
            }]
        }, {
            text: '辽宁省',
            value: '辽宁省'
        }, {
            text: '上海市',
            value: '上海市',
            children: [{
                text: '上海市',
                value: '上海市',
                children: [{
                    text: '东方明珠塔',
                    value: '东方明珠塔'
                }, {
                    text: '野生动物园',
                    value: '野生动物园'
                }, {
                    text: '城隍庙',
                    value: '城隍庙'
                }, {
                    text: '田子坊',
                    value: '田子坊'
                }]
            }]
        }, {
            text: '北京市',
            value: '北京市'
        }, {
            text: '安徽省',
            value: '安徽省'
        }, {
            text: '山西省',
            value: '山西省'
        }, {
            text: '江苏省',
            value: '江苏省'
        }, {
            text: '浙江省',
            value: '浙江省',
            children: [{
                text: '杭州市',
                value: '杭州市',
                children: [{
                    text: '西湖',
                    value: '西湖'
                }]
            }]
        }];

    }

    changeHandler(value, path) {
        console.log(value);
    }

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

                                <Cascader data={this.data}
                                          value={'田子坊'}
                                          onChange={this.changeHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={CascaderDoc}/>

            </div>
        );
    }
}