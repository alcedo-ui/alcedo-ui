import React, {Component} from 'react';

import Badge from 'src/Badge';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Badge.json';

import 'scss/containers/app/modules/layout/BadgeExamples.scss';

class BadgeExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example badge-examples">

                <h2 className="example-title">Badge</h2>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Badge>

                                </Badge>

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

export default BadgeExamples;
