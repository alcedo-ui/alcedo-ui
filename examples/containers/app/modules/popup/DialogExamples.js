/**
 * Created by DT314 on 2017/4/7.
 */
import React, {Component, PropTypes} from 'react'

import Dialog from '../../../../../dist/Dialog'

export default class DialogExamples extends Component{
    constructor(props){
        super();
        this.clickHandle = this::this.clickHandle;
        this.hideHandle = this::this.hideHandle;
        this.state = {
            hide: 'hide'
        }
    }

    clickHandle() {
        this.setState({
            hide: ''
        })
    }

    hideHandle() {
        this.setState({
            hide: 'hide'
        })
    }

    render() {
        const hStyle = {
            marginLeft: '20px'
        },pStyle = {
            marginLeft: '20px'
        },bStyle = {
            marginLeft: '20px',
            marginTop: '10px',
            background: 'white',
            cursor: 'pointer',
            boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
            height: '30px',
            width: '70px',
            border: '1px solid #d1d1d1',
            fontWeight: '500'
        };
        return (
            <div className="test-dialog">
                <h3 style={hStyle}>Dialog Examples</h3>
                <p style={pStyle}>Please click this button to show Dialog.</p>
                <button onClick={this.clickHandle} style={bStyle}>Dialog</button>
                <Dialog className={this.state.hide} onHide={this.hideHandle} onSure={this.hideHandle}/>
            </div>
        );
    }
}