import React, {Component} from 'react';

import Radio from 'dist/Radio';

import 'sass/containers/app/modules/fields/RadioExamples.scss';

export default class CheckboxExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example radio-examples">

                <div className="examples">
                    <div className="examples-title">Radio</div>
                    <div className="examples-wrapper">

                        <Radio label="Licence"/>

                    </div>
                </div>

            </div>
        );
    }
};