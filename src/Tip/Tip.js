/**
 * Created by Wendy on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';



import './tip.css';

export default class Tip extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //
        // };
        // this.shadowClickHandle = this::this.shadowClickHandle;
    }

    render(){
        const {text}=this.props;

        return (
            <div className="tip-msg">
               <p>{this.props.text}</p>
            </div>
        )
    }
}