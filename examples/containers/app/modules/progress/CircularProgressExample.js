import React, {Component, PropTypes} from 'react';

import CircularProgress from 'src/CircularProgress';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/CircularProgress.json';

import 'scss/containers/app/modules/progress/CircularProgressExample.scss';

class CircularProgressExample extends Component {

    constructor(props) {

        super(props);

        this.state = {
            percent: 0
        };

    }

    progress = percent => {
        if (percent >= 90) {
            this.setState({
                percent: 100
            });
        } else {
            const add = parseInt((Math.random() * 10).toFixed(0));
            this.setState({
                percent: percent + add
            });
            this.timer = setTimeout(() => this.progress(percent + add), 1000);
        }
    };

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(0), 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <div className="example circular-progress-examples">

                <h2 className="example-title">Circular Progress</h2>

                <p>
                    <span>Circular Progress</span> will rotate to show the progress of a task or that there is a wait
                    for a task to complete.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Circular Progress Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Circular Progress without percentage and text description.</p>

                            <CircularProgress r={50}
                                              width={10}
                                              rgba="#38b1eb"
                                              percent={this.state.percent}
                                              word={false}>
                                <span>百分比：</span>
                            </CircularProgress>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Circular Progress Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Circular Progress without percentage description by default.Set the word property to true
                                for percentage description.</p>

                            <CircularProgress r={20}
                                              width={3}
                                              rgba="#38b1eb"
                                              percent={this.state.percent}
                                              word={true}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Circular Progress Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the word property to true and include a "span" element in this component for
                                percentage and text description.</p>

                            <CircularProgress r={100}
                                              width={15}
                                              rgba="#38b1eb"
                                              percent={this.state.percent}
                                              word={true}
                                              percentStyle={{color: '#03a9f4'}}>
                                <span>已完成：</span>
                            </CircularProgress>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>

        );
    }
}

export default CircularProgressExample;
