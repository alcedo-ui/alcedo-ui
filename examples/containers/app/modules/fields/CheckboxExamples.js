import React, {Component} from 'react';

import Checkbox from 'dist/Checkbox';
import CheckboxGroup from 'dist/CheckboxGroup';

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

                <div className="examples">
                    <div className="examples-title">Checkbox Group</div>
                    <div className="examples-wrapper">

                        <CheckboxGroup data={[{
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