import React, {Component} from 'react';

import TreeSelect from 'dist/TreeSelect';

import 'sass/containers/app/modules/fields/TreeSelectExamples.scss';

export default class TreeSelectExamples extends Component {

    constructor(props) {
        super(props);
        this.state={
            data: [{id: 1, text: 'one',children:[{id: 1-1, text: 'one-1'}]},
                    {id: 2, text: 'two'},
                    {id: 3,text: 'three'},
                    {id: 4, text: 'four',children:[{id: 4-1, text: 'four-1',children:[{id: 4-1-1, text: 'four-1-1'}]}]},
                    {id: 5, text: 'five'},
                    {id: 6, text: 'six',children:[{id: 6-1, text: 'six-1'}]}],
            value:{id: 2, text: 'two'}
        };
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
                            <TreeSelect className="tree-select-example"
                                        data={data}
                                        value={value}
                                        placeholder={'please select a node'}
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