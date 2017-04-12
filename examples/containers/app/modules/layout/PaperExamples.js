import React, {Component} from 'react';

import Paper from 'dist/Paper';

import 'sass/containers/app/modules/layout/PaperExamples.scss';

export default class CheckboxExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example paper-examples">

                <div className="examples">
                    <div className="examples-title">Paper</div>
                    <div className="examples-wrapper">

                        <Paper depth={0}/>
                        <Paper depth={1}/>
                        <Paper depth={2}/>
                        <Paper depth={3}/>
                        <Paper depth={4}/>
                        <Paper depth={5}/>
                        <Paper depth={6}/>
                        <Paper depth={7}/>

                    </div>
                </div>

                <div className="examples">
                    <div className="examples-title">Non-Rounded Paper</div>
                    <div className="examples-wrapper">

                        <Paper depth={0}
                               nonRounded={true}/>
                        <Paper depth={1}
                               nonRounded={true}/>
                        <Paper depth={2}
                               nonRounded={true}/>
                        <Paper depth={3}
                               nonRounded={true}/>
                        <Paper depth={4}
                               nonRounded={true}/>
                        <Paper depth={5}
                               nonRounded={true}/>
                        <Paper depth={6}
                               nonRounded={true}/>
                        <Paper depth={7}
                               nonRounded={true}/>

                    </div>
                </div>

                <div className="examples">
                    <div className="examples-title">Circular Paper</div>
                    <div className="examples-wrapper">

                        <Paper depth={0}
                               isCircular={true}/>
                        <Paper depth={1}
                               isCircular={true}/>
                        <Paper depth={2}
                               isCircular={true}/>
                        <Paper depth={3}
                               isCircular={true}/>
                        <Paper depth={4}
                               isCircular={true}/>
                        <Paper depth={5}
                               isCircular={true}/>
                        <Paper depth={6}
                               isCircular={true}/>
                        <Paper depth={7}
                               isCircular={true}/>

                    </div>
                </div>

            </div>
        );
    }
};