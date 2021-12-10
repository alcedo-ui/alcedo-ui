/**
 * @file SkeletonLoadingExamples.js
 */

import React, {Component} from 'react';

// Components
import SkeletonLoading from 'src/SkeletonLoading';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Paper from 'src/Paper';

// Docs
import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/SkeletonLoading.json';

// Styles
import 'scss/containers/app/modules/loading/SkeletonLoadingExamples.scss';

class SkeletonLoadingExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example skeleton-loading-examples">

                <h2 className="example-title">SkeletonLoading</h2>

                <p>
                    <span>SkeletonLoading</span>&nbsp;
                    use to show pages and blocks loading status.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple SkeletonLoading example.</p>

                            <SkeletonLoading/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Circle"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A circle SkeletonLoading example.</p>

                            <SkeletonLoading isCircular={true}
                                             animationDuration={800}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Customized highlight"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Customized highlight SkeletonLoadings example.</p>

                            <SkeletonLoading className="skeleton-loading-examples-customized-highlight"
                                             highlightColor="#f00"
                                             highlightDegree={120}
                                             highlightTransparency={0.8}/>

                            <SkeletonLoading className="skeleton-loading-examples-customized-highlight"
                                             highlightColor="#0f0"
                                             highlightDegree={120}
                                             highlightTransparency={0.8}/>

                            <SkeletonLoading className="skeleton-loading-examples-customized-highlight"
                                             highlightColor="#00f"
                                             highlightDegree={120}
                                             highlightTransparency={0.8}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Card Loading"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <Paper className="skeleton-loading-examples-card"
                                   depth={2}>
                                <SkeletonLoading className="skeleton-loading-examples-card-image"/>
                                <div className="skeleton-loading-examples-card-content">
                                    <div className="skeleton-loading-examples-card-user">
                                        <SkeletonLoading className="skeleton-loading-examples-card-avatar"
                                                         isCircular={true}/>
                                        <SkeletonLoading className="skeleton-loading-examples-card-name"/>
                                    </div>
                                    <SkeletonLoading className="skeleton-loading-examples-card-paragraph"/>
                                    <SkeletonLoading className="skeleton-loading-examples-card-paragraph"/>
                                    <SkeletonLoading className="skeleton-loading-examples-card-paragraph"/>
                                </div>
                            </Paper>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
}

export default SkeletonLoadingExamples;
