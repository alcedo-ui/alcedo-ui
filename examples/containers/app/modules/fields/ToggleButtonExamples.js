import React, {Component} from 'react';

import ToggleButton from 'dist/ToggleButton';

import 'sass/containers/app/modules/fields/ToggleButtonExamples.scss';

export default class ToggleButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example toggle-button-examples">

                <div className="examples">
                    <div className="examples-title">ToggleButton</div>
                    <div className="examples-wrapper">

                        <label>Number</label>
                        <ToggleButton text="1"/>
                        <ToggleButton text="2"/>
                        <ToggleButton text="3"/>
                        <ToggleButton text="4"/>
                        <ToggleButton text="5"/>

                    </div>
                </div>

            </div>
        );
    }
};