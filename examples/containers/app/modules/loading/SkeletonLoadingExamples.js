/**
 * @file SkeletonLoadingExamples.js
 */

import React, {Component} from 'react';

// Components
import SkeletonLoading from 'src/SkeletonLoading';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

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
                    <span>SkeletonLoading</span>
                    use to show pages and blocks loading status.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="SkeletonLoading Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple SkeletonLoading example.</p>

                            <SkeletonLoading spanning={true}/>

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
