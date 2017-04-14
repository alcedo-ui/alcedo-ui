/**
 * Created by DT314 on 2017/4/7.
 */
import React, {Component, PropTypes} from 'react'

import CircularProgress from '../../../../../dist/CircularProgress'

import 'sass/containers/app/modules/progress/CircularProgressExample.scss';

export default class Test extends Component{
    constructor(props){
        super();
        this.state = {
            percent: 0
        }
    }

    componentDidMount() {
        this.timer = setTimeout( () => this.progress(0), 1000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    progress(percent) {
        if(percent>=90){
            this.setState({
                percent: 100
            });
        }
        else{
            const add = parseInt((Math.random() * 10).toFixed(0));
            this.setState({
                percent: percent + add
            });
            this.timer = setTimeout( () => this.progress(percent + add), 1000);
        }

    }

    render() {
        return (
            <div className="example-box">
                <h3>Circular Progress</h3>
                <p>Circular Progress will rotate to show the progress of a task or that there is a wait for a task to complete.</p>
                <CircularProgress r={50} width={10} rgba="#38b1eb" percent={this.state.percent} word={true}/>
                <CircularProgress r={20} width={3} rgba="#38b1eb" percent={this.state.percent} word={true}/>
                <CircularProgress r={100} width={15} rgba="#38b1eb" percent={this.state.percent} word={true}/>
            </div>
        )
    }
}