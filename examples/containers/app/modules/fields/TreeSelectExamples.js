import React, {Component} from 'react';

import TreeSelect from 'dist/TreeSelect';

import 'sass/containers/app/modules/fields/TreeSelectExamples.scss';

export default class TreeSelectExamples extends Component {

    constructor(props) {
        super(props);
        this.state={
            data: [{key: 1, text: 'one'}, {key: 2, text: 'two'}, {key: 3,text: 'three'}, {key: 4, text: 'four'}, {key: 5, text: 'five'}, {key: 6, text: 'six'}],
            value:[]
        }
        this.onChangeHandle=this::this.onChangeHandle;
    }
    onChangeHandle(value){
        this.setState({
            value:value
        })
    }
    render() {
        const {data,value}=this.state;
        return (
            <div className="example tree-select-examples">

                <div className="examples">
                    <div className="examples-title">Tree Select</div>
                    <div className="examples-wrapper">

                        <div className="field-group">
                            <label className="tree-select-label">Tree</label>
                            <TreeSelect className="tree-select"
                                            data={data}
                                            value={value}
                                            onChange={(value)=> {
                                                this.onChangeHandle(value)
                                            }}/>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
};