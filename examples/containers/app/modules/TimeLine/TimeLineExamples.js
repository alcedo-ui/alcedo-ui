/**
 * Created by Wendy on 2017/5/3.
 */
import React, {Component} from 'react';

import TimeLine from 'dist/TimeLine';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import TimeLineDoc from 'assets/propTypes/TimeLine.json';

import 'sass/containers/app/modules/TimeLine/TimeLineExamples.scss';

export default class TimeLineExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example time-line-examples">

                <h2 className="example-title">TimeLine</h2>

                <p>
                    The TimeLine is used to display time flow information vertically.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="TimeLine Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple TimeLine example.</p>

                            <TimeLine prefixCls="time-line">

                            </TimeLine>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TimeLineDoc}/>

            </div>
        )
    }
}