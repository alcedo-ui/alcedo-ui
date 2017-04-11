import React, {Component} from 'react';

import Radio from 'dist/Radio';
import RadioGroup from 'dist/RadioGroup';

import 'sass/containers/app/modules/fields/RadioExamples.scss';

export default class RadioExamples extends Component {

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

                <div className="examples">
                    <div className="examples-title">Radio Group</div>
                    <div className="examples-wrapper">

                        <RadioGroup data={[{
                            label: 1,
                            value: 1
                        }, {
                            label: 2,
                            value: 2
                        }, {
                            label: 3,
                            value: 3
                        }, {
                            label: 4,
                            value: 4
                        }, {
                            label: 5,
                            value: 5
                        }]}/>

                    </div>
                </div>

            </div>
        );
    }
};