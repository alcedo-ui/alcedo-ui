/**
 * Created by Wendy on 2017/5/16.
 */
import React, {Component} from 'react';

import Cascader from 'dist/Cascader';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import CascaderDoc from 'assets/propTypes/Cascader.json';

import 'sass/containers/app/modules/buttons/FlatButtonExamples.scss';

export default class CascaderExamples extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = [{
            value: 'shanghai',
            text: 'shanghai',
            rightIconCls: 'fa fa-chevron-right'
        }, {
            value: 'zhejiang',
            text: 'zhejiang',
            rightIconCls: 'fa fa-chevron-right'
        }, {
            value: 'beijing',
            text: 'beijing',
            rightIconCls: 'fa fa-chevron-right'
        }, {
            value: 'hangzhou',
            text: 'hangzhou',
            rightIconCls: 'fa fa-chevron-right'
        }, {
            value: 'shenzhen',
            text: 'shenzhen',
            rightIconCls: 'fa fa-chevron-right'
        }, {
            value: 'guangzhou',
            text: 'guangzhou',
            rightIconCls: 'fa fa-chevron-right'
        }];

        return (
            <div className="example cascader-examples">
                <h2 className="example-title">Cascader</h2>

                <p>
                    <span>Cascader</span> is a selection box.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Cascader Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Cascader simple example.</p>

                                <Cascader data={data}
                                          optionsVisible={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Cascader Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Cascader simple example.</p>

                                <Cascader placeholder="Please select..."/>

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