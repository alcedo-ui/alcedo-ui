import React, {Component} from 'react';

import Tree from 'dist/Tree';

import 'sass/containers/app/modules/fields/TreeExamples.scss';

export default class TreeExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{id: 1,text: 'one', deep:0, children: [{id: '1 - 1', text: 'one-1', deep:1}]},
                {id: 2, text: 'two', deep:0},
                {id: 3, text: 'three', deep:0},
                {
                    id: 4,
                    text: 'four',
                    deep:0,
                    children: [
                        {id: '4 - 1', text: 'four-1', deep:1, children: [{id: '4 - 1 - 1', text: 'four-1-1', deep:2}]},
                            {id: '4 - 2', text: 'four-2', deep:1, children: [
                                {id: '4 - 2 - 1', text: 'four-2-1', deep:2, children: [{id: '4 - 2 - 1 - 1', text: 'four-2-1-1', deep:3}]},
                                {id: '4 - 2 - 2', text: 'four-2-2', deep:2}
                            ]}
                        ]
                },
                {id: 5, text: 'five', deep:0},
                {id: 6, text: 'six', deep:1, children: [{id: '6 - 1', text: 'six-1'}]}],
            value: [{id: 2, text: 'two', deep:0}]
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

                <div className="examples">
                    <div className="examples-title">Tree Select</div>
                    <div className="examples-wrapper">

                        <div className="field-group">
                            <label className="tree-label">Tree</label>
                            <Tree className="tree-example"
                                  data={data}
                                  value={value}
                                  multiple={true}/>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
};