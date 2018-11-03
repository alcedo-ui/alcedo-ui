import React, {Component} from 'react';

import CircularLoading from 'src/CircularLoading';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/CircularLoading.json';

import 'scss/containers/app/modules/loading/CircularLoadingExamples.scss';

class CircularLoadingExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example circular-loading-examples">

                <h2 className="example-title">CircularLoading</h2>

                <p>
                    <span>CircularLoading</span> use to show pages and blocks loading status.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="CircularLoading Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple CircularLoading example.</p>

                            <CircularLoading spanning={true}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="CircularLoading Size Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the size property to small or large for different size CircularLoading.</p>

                            <CircularLoading spanning={true}
                                             size="small"/>

                            <CircularLoading spanning={true}/>

                            <CircularLoading spanning={true}
                                             size="large"/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="CircularLoading Theme Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the theme property for different theme CircularLoading.</p>

                            <CircularLoading spanning={true}/>

                            <CircularLoading spanning={true}
                                             theme="success"/>

                            <CircularLoading spanning={true}
                                             theme="error"/>

                            <CircularLoading spanning={true}
                                             theme="warning"/>

                            <CircularLoading spanning={true}
                                             theme="highlight"/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="CircularLoading Type Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the type property for different border-style CircularLoading.</p>

                            <CircularLoading spanning={true}/>
                            <CircularLoading spanning={true}
                                             type="dotted"/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="CircularLoading Weight Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the weight property for different border-width CircularLoading.</p>

                            <CircularLoading spanning={true}
                                             weight={5}
                                             size="large"/>

                            <CircularLoading spanning={true}
                                             weight={2}
                                             type="dotted"/>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
}

export default CircularLoadingExamples;
