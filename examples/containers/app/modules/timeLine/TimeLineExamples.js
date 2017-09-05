/**
 * Created by Wendy on 2017/5/3.
 */
import React, {Component} from 'react';
import moment from 'moment';

import TimeLine from 'dist/TimeLine';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import Theme from 'dist/Theme';

import PropTypeDescTable from '../PropTypeDescTable';
import TimeLineDoc from 'assets/propTypes/TimeLine.json';

import 'sass/containers/app/modules/timeLine/TimeLineExamples.scss';

export default class TimeLineExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let data = [{
            type: 'header',
            headerText: 'Now'
        }, {
            theme: Theme.PRIMARY,
            type: 'title',
            contentText: 'just a title.',
            hasBorder: false,
            date: '2017-05-03 15:16:34'
        }, {
            theme: Theme.HIGHLIGHT,
            type: 'title',
            hasBorder: true,
            contentText: 'just a title.',
            date: '2017-05-03 15:16:34'
        }, {
            theme: Theme.SUCCESS,
            type: 'title',
            contentText: 'just a title.',
            hasBorder: true,
            date: '2017-05-03 15:16:34'
        }, {
            theme: Theme.WARNING,
            type: 'title',
            hasBorder: true,
            contentText: 'example content.',
            date: '2017-05-06 12:52:12'
        }, {
            theme: Theme.ERROR,
            type: 'title',
            hasBorder: true,
            contentText: 'welcome to China.',
            date: '2017-05-03 15:16:34'
        },{
            type: 'header',
            headerText: '2016'
        }];

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

                            <TimeLine data={data}/>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TimeLineDoc}/>

            </div>
        )
    }
}