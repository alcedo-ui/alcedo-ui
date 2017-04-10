import React, {Component} from 'react';

import TextField from 'dist/TextField';

import 'sass/containers/app/modules/fields/TextFieldExamples.scss';

export default class TextFieldExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="text-field-examples">

                <TextField/>

            </div>
        );
    }
};