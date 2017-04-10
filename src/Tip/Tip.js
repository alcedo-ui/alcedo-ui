/**
 * Created by Wendy on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';



import './tip.css';

export default class Tip extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //
        // };
        // this.shadowClickHandle = this::this.shadowClickHandle;
    }

    render(){
        return (
            <div className="tip-container">
               {this.props.text}
            </div>
        )
    }
}