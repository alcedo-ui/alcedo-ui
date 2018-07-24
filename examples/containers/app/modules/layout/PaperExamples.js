import React, {Component} from 'react';

import Paper from 'src/Paper';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Paper.json';

import 'sass/containers/app/modules/layout/PaperExamples.scss';

class PaperExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example paper-examples">

                <h2 className="example-title">Paper</h2>

                <p>
                    A <span>Paper</span> element is a basic container that can give depth to the page.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Paper Example"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Paper examples showing the range of zDepth.</p>

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
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Non-Rounded Paper Example"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <div className="examples-wrapper">

                                <p>Corners are rounded by default.Set the nonRounded property to true for square
                                    corners.</p>

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
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Circular Paper Example"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <div className="examples-wrapper">

                                <p>Pages are square by default. Set the isCircular property to true for round page.</p>

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

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};

export default PaperExamples;