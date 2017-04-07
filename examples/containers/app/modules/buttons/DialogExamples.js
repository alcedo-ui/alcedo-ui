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
        return (
            <div className="test-dialog">
                <button onClick={this.clickHandle}>showDialog</button>
                <Dialog className={this.state.hide} onHide={this.hideHandle} onSure={this.hideHandle}/>
            </div>
        );
    }
}