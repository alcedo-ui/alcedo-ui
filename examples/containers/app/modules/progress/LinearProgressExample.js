/**
 * Created by DT314 on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react'

import LinearProgress from '../../../../../dist/LinearProgress'
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

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

            <div className="example linear--progress-example">

                <h2 className="example-title">Linear Progress</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Linear Progress Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Linear Progress will rotate to show the progress of a task or that there is a wait for a
                                task to complete.</p>

                            <div style={progressGroup}>

                                <LinearProgress highlightWidth={this.state.percent + '%'} style={style1}
                                                background="#f3f6fa" highlight="#38b1eb" word={true} wordStyle='front'/>

                                <LinearProgress highlightWidth={this.state.percent + '%'} style={style2}
                                                background="#f3f6fa" highlight="#38b1eb" word={true}
                                                wordStyle='middle'/>

                                <LinearProgress highlightWidth={this.state.percent + '%'} style={style3}
                                                background="#f3f6fa" highlight="#38b1eb" word={true}
                                                wordStyle='follow'/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <div className="example-properties">
                    <h3>Properties</h3>
                    <table className="example-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="properties-name">className</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td></td>
                                <td>The css class name of the root element.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">style</td>
                                <td className="properties-type">PropTypes.object</td>
                                <td></td>
                                <td>The styles of the root element.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">highlightWidth</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td>50%</td>
                                <td>The value of progress.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">background</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td>gray</td>
                                <td>The progress's background color.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">highlight</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td>blue</td>
                                <td>Highlight color display.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">word</td>
                                <td className="properties-type">PropTypes.bool</td>
                                <td>false</td>
                                <td>Whether there is a text description.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">wordStyle</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td>front</td>
                                <td>Text location.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }

}