/**
 * Created by DT314 on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react'

import LinearProgress from '../../../../../dist/LinearProgress'
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import LinearProgressDoc from 'assets/propTypes/LinearProgress.json';

import 'sass/containers/app/modules/progress/LinearProgressExample.scss';

export default class LinearProgressExample extends Component {
    constructor(props) {
        super();
        this.state = {
            percent: 0
        }
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(0), 1000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    progress(percent) {
        if (percent >= 90) {
            this.setState({
                percent: 100
            });
        }
        else {
            const add = parseInt((Math.random() * 10).toFixed(0));
            this.setState({
                percent: percent + add
            });
            this.timer = setTimeout(() => this.progress(percent + add), 1000);
        }

    }

    render() {
        const style1 = {
            width: '300px',
            height: '30px',
            lineHeight: '30px',
            margin: '30px 0 0 20px'
        }, style2 = {
            width: '600px',
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

                <Widget>

                    <WidgetHeader className="example-header" title="Linear Progress Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Linear Progress will rotate to show the progress of a task or that there is a wait for a
                                task to complete.</p>

                            <div style={progressGroup}>

                                <LinearProgress highlightWidth={this.state.percent + '%'}
                                                style={style1}
                                                background="#f3f6fa"
                                                highlight="#38b1eb"
                                                word={true}
                                                wordStyle='front'/>

                                <LinearProgress highlightWidth={this.state.percent + '%'}
                                                style={style2}
                                                background="#f3f6fa"
                                                highlight="#38b1eb"
                                                word={true}
                                                wordStyle='middle'/>

                                <LinearProgress highlightWidth={this.state.percent + '%'}
                                                style={style3}
                                                background="#f3f6fa"
                                                highlight="#38b1eb"
                                                word={true}
                                                wordStyle='follow'/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={LinearProgressDoc}/>

            </div>
        )
    }

}