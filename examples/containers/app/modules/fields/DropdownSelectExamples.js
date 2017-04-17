import React, {Component} from 'react';

import DropdownSelect from 'dist/DropdownSelect';

import 'sass/containers/app/modules/fields/DropdownSelectExamples.scss';

export default class DropdownSelectExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example dropdown-select-examples">

                <div className="examples">
                    <div className="examples-title">Dropdown Select</div>
                    <div className="examples-wrapper">

                        <div className="field-group">
                            <label className="dropdown-select-label">Number</label>
                            <DropdownSelect data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                            autoClose={false}/>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
};