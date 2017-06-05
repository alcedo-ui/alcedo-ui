import React, {Component} from 'react';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import PropTypeDescTable from '../PropTypeDescTable';
import Tree from 'dist/Tree';
import TreeDoc from 'assets/propTypes/Tree.json';

import 'sass/containers/app/modules/fields/TreeExamples.scss';

export default class TreeExamples extends Component {

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
            <div className="example tree-examples">

                <h2 className="examples-title">Tree</h2>

                <p>
                    <span>Tree</span>
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Tree Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Tree</p>
                                <div className="field-group">
                                    <Tree className="tree-example"
                                          data={data}
                                          value={value}
                                          multiple={false}
                                          iconCls="fa-id-card-o"/>
                                </div>
                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TreeDoc}/>

            </div>
        );
    }
};