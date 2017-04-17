/**
 * Created by DT314 on 2017/4/7.
 */
import React, {Component, PropTypes} from 'react';

import Dialog from '../../../../../dist/Dialog';

import 'sass/containers/app/modules/popup/DialogExamples.scss';

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
                <h3>Dialog Examples</h3>
                <p>Please click this button to show Dialog.</p>
                <button onClick={this.clickHandle}>Dialog</button>
                <Dialog className={this.state.hide} onHide={this.hideHandle} onSure={this.hideHandle}/>
            </div>
        );
    }
}