import React, {Component} from 'react';

import MultipleSelect from 'dist/MultipleSelect';

import 'sass/containers/app/modules/fields/MultipleSelectExamples.scss';

export default class MultipleSelectExamples extends Component {

    constructor(props) {
        super(props);
        this.state={
            data: [{key: 1, text: 'one'}, {key: 2, text: 'two'}, {key: 3,text: 'threethreethree'}, {key: 4, text: 'fourthreethree'}, {key: 5, text: 'five'}, {key: 6, text: 'six'}, {key: 7, text: 'seven'}, {key: 8, text: 'eight'}, {key: 9, text: 'nine'}],
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
            <div className="example multiple-select-examples">

                <div className="examples">
                    <div className="examples-title">Multiple Select</div>
                    <div className="examples-wrapper">

                        <div className="field-group">
                            <label className="multiple-select-label">Number</label>
                            <MultipleSelect className="multiple-select"
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