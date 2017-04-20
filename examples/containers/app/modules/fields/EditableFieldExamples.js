/**
 * Created by DT314 on 2017/4/18.
 */
import React, { Component,PropTypes } from 'react';
import EditableField from 'dist/EditableField/EditableField'

export default class EditableFieldExamples extends Component{
    constructor(props) {
        super();

        this.state = {
            value: '123'
        };

        this.onChange = this :: this.onChange;

    }

    onChange(text) {
        console.log(text);
    }

    render() {
        return (
            <div style={{margin: '20px'}}>
                <div>Example</div>
                <EditableField value={this.state.value} onChange={this.onChange}/>
            </div>
        );
    }
}