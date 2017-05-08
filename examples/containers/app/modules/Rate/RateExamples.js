import React, {Component} from 'react';

import Rate from 'dist/Rate';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import TimeLineDoc from 'assets/propTypes/TimeLine.json';

import 'sass/containers/app/modules/TimeLine/TimeLineExamples.scss';

export default class RateExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example rate-examples">

                <h2 className="example-title">TimeLine</h2>

                <p>
                    The Rate is used to display time flow information vertically.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="TimeLine Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple Rate example.</p>

                            <Rate value={3}
                                  allowHalf={false}/>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TimeLineDoc}/>

            </div>
        )
    }
}