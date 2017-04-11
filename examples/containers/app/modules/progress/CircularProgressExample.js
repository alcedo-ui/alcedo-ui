/**
 * Created by DT314 on 2017/4/7.
 */
import React, {Component, PropTypes} from 'react'

import CircularProgress from '../../../../../dist/CircularProgress'

export default class Test extends Component{
    constructor(props){
        super();
        this.state = {
            percent: 5
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
        const hStyle = {
            marginLeft: '20px',
            fontSize: '16px'
        },pStyle = {
            marginLeft: '20px',
            fontSize: '14px'
        },cStyle = {
            marginLeft: '20px',
            marginTop: '10px',
        };
        return (
            <div>
                <h3 style={hStyle}>Circular Progress</h3>
                <p style={pStyle}>Circular Progress will rotate to show the progress of a task or that there is a wait for a task to complete.</p>
                <CircularProgress r={50} width={10} rgba="green" percent={this.state.percent} word={true} style={cStyle}/>
            </div>
        )
    }
}