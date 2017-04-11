import React, {Component} from 'react';

import Checkbox from 'dist/Checkbox';

import 'sass/containers/app/modules/fields/CheckboxExamples.scss';

export default class CheckboxExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example checkbox-examples">

                <div className="examples">
                    <div className="examples-title">Checkbox</div>
                    <div className="examples-wrapper">

                        <Checkbox label="Licence"/>

                    </div>
                </div>

            </div>
        );
    }
};