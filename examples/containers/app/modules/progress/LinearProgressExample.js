/**
 * Created by DT314 on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react'

import LinearProgress from '../../../../../dist/LinearProgress'

export default class LinearProgressExample extends Component{
    constructor(props) {
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
        const boxStyle = {
            boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
            margin: '50px',
            padding: '0px 0 20px',
            overflow: 'hidden',
            background: 'white'
        },hStyle = {
            fontSize: '16px',
            color: '#758697',
            backgroundColor: '#E3EAF3',
            margin: '0',
            padding: '15px 20px'
        },pStyle = {
            marginLeft: '20px',
            fontSize: '14px',
            color: '#4C637B'
        },style = {
            width: '300px',
            height: '4px',
            margin: '30px 0 0 20px'
        };
        return (
            <div style={boxStyle}>
                <h3 style={hStyle}>Circular Progress</h3>
                <p style={pStyle}>Circular Progress will rotate to show the progress of a task or that there is a wait for a task to complete.</p>
                <LinearProgress highlightWidth={this.state.percent+'%'} style={style} background="#f3f6fa" highlight="#38b1eb"/>
            </div>
        )
    }

}