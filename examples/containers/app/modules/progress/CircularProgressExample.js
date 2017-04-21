/**
 * Created by DT314 on 2017/4/7.
 */
import React, {Component, PropTypes} from 'react'

import CircularProgress from '../../../../../dist/CircularProgress'
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import CircularProgressDoc from 'docs/CircularProgress.json';

import 'sass/containers/app/modules/progress/CircularProgressExample.scss';

export default class Test extends Component {
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
        return (
            <div className="example circular-progress-example">

                <h2 className="example-title">Circular Progress</h2>
                <Widget>

                    <WidgetHeader className="example-header" title="Circular Progress Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Circular Progress will rotate to show the progress of a task or that there is a wait for
                                a task to complete.</p>

                            <CircularProgress r={50} width={10} rgba="#38b1eb" percent={this.state.percent} word={true}>
                                <span>百分比：</span>
                            </CircularProgress>

                            <CircularProgress r={20} width={3} rgba="#38b1eb" percent={this.state.percent} word={true}/>

                            <CircularProgress r={100} width={15} rgba="#38b1eb" percent={this.state.percent} word={true}
                                              percentStyle={{color: 'white'}}>
                                <span>已完成：</span>
                            </CircularProgress>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={CircularProgressDoc}/>

                {/*<div className="example-properties">*/}
                {/*<h3>Properties</h3>*/}
                {/*<table className="example-table">*/}
                {/*<thead>*/}
                {/*<tr>*/}
                {/*<th>Name</th>*/}
                {/*<th>Type</th>*/}
                {/*<th>Default</th>*/}
                {/*<th>Description</th>*/}
                {/*</tr>*/}
                {/*</thead>*/}
                {/*<tbody>*/}
                {/*<tr>*/}
                {/*<td className="properties-name">className</td>*/}
                {/*<td className="properties-type">PropTypes.string</td>*/}
                {/*<td></td>*/}
                {/*<td>The css class name of the root element.</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*<td className="properties-name">style</td>*/}
                {/*<td className="properties-type">PropTypes.object</td>*/}
                {/*<td></td>*/}
                {/*<td>The styles of the root element.</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*<td className="properties-name">percentStyle</td>*/}
                {/*<td className="properties-type">PropTypes.object</td>*/}
                {/*<td></td>*/}
                {/*<td>The style of the text description.</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*<td className="properties-name">r</td>*/}
                {/*<td className="properties-type">PropTypes.number</td>*/}
                {/*<td>48</td>*/}
                {/*<td>The radius of the progress in pixels.</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*<td className="properties-name">width</td>*/}
                {/*<td className="properties-type">PropTypes.number</td>*/}
                {/*<td>2</td>*/}
                {/*<td>Stroke width in pixels.</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*<td className="properties-name">rgba</td>*/}
                {/*<td className="properties-type">PropTypes.string</td>*/}
                {/*<td>rgb(0, 188, 212)</td>*/}
                {/*<td>Override the progress's color.</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*<td className="properties-name">percent</td>*/}
                {/*<td className="properties-type">PropTypes.number</td>*/}
                {/*<td>0</td>*/}
                {/*<td>The value of progress.</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*<td className="properties-name">word</td>*/}
                {/*<td className="properties-type">PropTypes.bool</td>*/}
                {/*<td>true</td>*/}
                {/*<td>Whether there is a text description.</td>*/}
                {/*</tr>*/}
                {/*</tbody>*/}
                {/*</table>*/}
                {/*</div>*/}
            </div>

        )
    }
}