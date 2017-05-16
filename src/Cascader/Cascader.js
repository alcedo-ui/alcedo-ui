/**
 * Created by Wendy on 2017/5/16.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Cascader.css';

export default class Cascader extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const {className,style} = this.props;
        return(

            <div className={`cascader ${className}`}
                 style={style}>

            </div>

        )
    }
}