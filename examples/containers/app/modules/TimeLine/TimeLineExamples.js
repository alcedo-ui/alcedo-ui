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
        let data = [{
            index: '1',
            color: 'green',
            title:'just a title',
            date:'2017-05-02 10:46:29',
            description: 'Alcedo-UI examples update 2017-04-01.',
            prefixCls: 'time-line'
        }, {
            index: '2',
            color: 'blue',
            date:'2017-05-03 15:16:34',
            title:'hello',
            description: [
                'Alcedo-UI examples update 2017-04-03.',
                'Alcedo-UI examples update 2017-04-06.'
            ],
            prefixCls: 'time-line'
        }, {
            index: '3',
            color: 'red',
            date:'2017-05-04 20:23:12',
            description: [
                'Alcedo-UI examples update 2017-04-09.',
                'Alcedo-UI examples update 2017-04-15.',
                'Alcedo-UI examples update 2017-04-20.'
            ],
            prefixCls: 'time-line'
        }, {
            index: '4',
            color: 'green',
            description:  ['Alcedo-UI examples update 2017-04-24.',
            'Alcedo-UI examples update 2017-05-04.'],
            prefixCls: 'time-line'
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

                            <TimeLine prefixCls="time-line"
                                      pending={true}
                                      data={data}/>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TimeLineDoc}/>

            </div>
        )
    }
}