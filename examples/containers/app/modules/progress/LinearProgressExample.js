import React, {Component} from 'react';

import LinearProgress from 'src/LinearProgress';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/LinearProgress.json';

import 'sass/containers/app/modules/progress/LinearProgressExample.scss';

class LinearProgressExample extends Component {

    constructor(props) {

        super(props);

        this.state = {
            percent: 0
        };

    }

    progress(percent) {
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
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(0), 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {

        const style1 = {
            width: '300px',
            height: '30px',
            lineHeight: '30px',
            margin: '30px 0 0 20px'
        }, style2 = {
            width: '80%',
            height: '30px',
            lineHeight: '30px',
            margin: '30px 0 0 20px'
        }, style3 = {
            width: 'calc(100% - 40px)',
            height: '30px',
            lineHeight: '30px',
            margin: '30px 0 0 20px'
        }, progressGroup = {
            marginBottom: '20px'
        };

        return (

            <div className="example linear-progress-examples">

                <h2 className="example-title">Linear Progress</h2>

                <p>
                    <span>Linear Progress</span> bars fill from 0% to 100% to show the progress of a task.
                    It also will animate to show there is a task waiting to be done.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Linear Progress Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Linear Progress without percentage description.</p>

                            <div style={progressGroup}>

                                <LinearProgress highlightWidth={this.state.percent + '%'}
                                                style={style1}
                                                word={true}
                                                wordStyle={LinearProgress.WordStyle.FRONT}
                                                theme="warning"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Linear Progress Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Linear Progress without percentage description by default.Set the word property to true
                                and wordStyle property to middle for percentage description stay at middle.</p>

                            <div style={progressGroup}>

                                <LinearProgress highlightWidth={this.state.percent + '%'}
                                                style={style2}
                                                word={true}
                                                wordStyle={LinearProgress.WordStyle.END}
                                                theme='success'/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Linear Progress Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Linear Progress without percentage description by default.Set the word property to true
                                and wordStyle property to follow for percentage description stay at end.</p>

                            <div style={progressGroup}>

                                <LinearProgress highlightWidth={this.state.percent + '%'}
                                                style={style3}
                                                word={true}
                                                wordStyle={LinearProgress.WordStyle.FOLLOW}
                                                theme="error"
                                                animation={true}/>

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

export default LinearProgressExample;