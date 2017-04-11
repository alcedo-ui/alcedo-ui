import React, {Component} from 'react';

import Switcher from 'dist/Switcher';

import 'sass/containers/app/modules/fields/SwitcherExamples.scss';

export default class SwitcherExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example switcher-examples">

                <div className="examples">
                    <div className="examples-title">Switcher</div>
                    <div className="examples-wrapper">

                        <Switcher/>

                    </div>
                </div>

                <div className="examples">
                    <div className="examples-title">Small Size</div>
                    <div className="examples-wrapper">

                        <Switcher size="small"/>

                    </div>
                </div>

            </div>
        );
    }
};