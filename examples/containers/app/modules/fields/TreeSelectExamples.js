import React, {Component} from 'react';


import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import PropTypeDescTable from '../PropTypeDescTable';
import TreeSelect from 'src/TreeSelect';
import TreeSelectDoc from 'assets/propTypes/TreeSelect.json';

import 'sass/containers/app/modules/fields/TreeSelectExamples.scss';

export default class TreeSelectExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{id: 1, text: 'one', deep: 0, children: [{id: '1 - 1', text: 'one-1', deep: 1}]},
                {id: 2, text: 'two', deep: 0},
                {id: 3, text: 'three', deep: 0},
                {
                    id: 4,
                    text: 'four',
                    deep: 0,
                    children: [
                        {
                            id: '4 - 1',
                            text: 'four-1',
                            deep: 1,
                            children: [{id: '4 - 1 - 1', text: 'four-1-1', deep: 2}]
                        },
                        {
                            id: '4 - 2', text: 'four-2', deep: 1, children: [
                            {
                                id: '4 - 2 - 1',
                                text: 'four-2-1',
                                deep: 2,
                                children: [{id: '4 - 2 - 1 - 1', text: 'four-2-1-1', deep: 3}]
                            },
                            {id: '4 - 2 - 2', text: 'four-2-2', deep: 2}
                        ]
                        }
                    ]
                },
                {id: 5, text: 'five', deep: 0},
                {id: 6, text: 'six', deep: 1, children: [{id: '6 - 1', text: 'six-1'}]}],
            value: [{id: 2, text: 'two', deep: 0}]
        };
        this.onChangeHandle = this::this.onChangeHandle;
    }

    onChangeHandle(value) {
        this.setState({
            value: value
        })
    }

    render() {
        const {data, value}=this.state;
        return (
            <div className="example tree-select-examples">

                <h2 className="examples-title">TreeSelect</h2>

                <p>
                    <span>TreeSelect</span> is a Tree component withe select field.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>TreeSelect</code> simple example.</p>
                                <div className="field-group">
                                    <TreeSelect className="tree-select-example"
                                                data={data}
                                                value={value}
                                                placeholder={'please select a n ode'}
                                                multiple={false}
                                                onChange={(value)=> {
                                                    this.onChangeHandle(value)
                                                }}/>
                                </div>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Tree Select Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Icon Tree Select</p>
                                <div className="field-group">
                                    <TreeSelect className="tree-select-example"
                                                data={data}
                                                value={value}
                                                placeholder={'please select a node'}
                                                multiple={false}
                                                iconCls='fa-file'
                                                onChange={(value)=> {
                                                    this.onChangeHandle(value)
                                                }}/>
                                </div>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Tree Select Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Multiple Tree Select</p>
                                <div className="field-group">
                                    <TreeSelect className="tree-select-example"
                                                data={data}
                                                value={value}
                                                placeholder={'please select a node'}
                                                multiple={true}
                                                onChange={(value)=> {
                                                    this.onChangeHandle(value)
                                                }}/>
                                </div>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Tree Select Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Multiple Icon Tree Select</p>
                                <div className="field-group">
                                    <TreeSelect className="tree-select-example"
                                                data={data}
                                                value={value}
                                                placeholder={'please select a node'}
                                                multiple={true}
                                                iconCls='fa-file'
                                                onChange={(value)=> {
                                                    this.onChangeHandle(value)
                                                }}/>
                                </div>
                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TreeSelectDoc}/>

            </div>

        );
    }
};