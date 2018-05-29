import React, {Component} from 'react';

import TimeLine from 'src/TimeLine/index';
import Widget from 'src/Widget/index';
import WidgetHeader from 'src/WidgetHeader/index';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/TimeLine.json';

class TimeLineExamples extends Component {

    constructor(props) {

        super(props);

        this.data = [{
            type: 'header',
            headerText: 'Now'
        }, {
            theme: TimeLine.Theme.PRIMARY,
            type: 'title',
            contentText: 'just a title.',
            hasBorder: false,
            date: '2017-05-03 15:16:34'
        }, {
            theme: TimeLine.Theme.HIGHLIGHT,
            type: 'title',
            hasBorder: true,
            contentText: 'just a title.',
            date: '2017-05-03 15:16:34'
        }, {
            theme: TimeLine.Theme.SUCCESS,
            type: 'title',
            contentText: 'just a title.',
            hasBorder: true,
            date: '2017-05-03 15:16:34'
        }, {
            theme: TimeLine.Theme.WARNING,
            type: 'title',
            hasBorder: true,
            contentText: 'example content.',
            date: '2017-05-06 12:52:12'
        }, {
            theme: TimeLine.Theme.ERROR,
            type: 'title',
            hasBorder: true,
            contentText: 'welcome to China.',
            date: '2017-05-03 15:16:34'
        }, {
            type: 'header',
            headerText: '2016'
        }];

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

                            <TimeLine data={this.data}/>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
}

export default TimeLineExamples;