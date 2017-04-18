/**
 * Created by DT314 on 2017/4/18.
 */
import React, { Component,PropTypes } from 'react';
import EditableField from 'dist/EditableField/EditableField'

export default class EditableFieldExamples extends Component{
    constructor(props) {
        super();
    }

    render() {
        return (
            <div style={{margin: '20px'}}>
                <div>Example</div>
                <EditableField value={'text1'} style={{height: '30px', lineHeight: '30px'}}/>
            </div>
        );
    }
}