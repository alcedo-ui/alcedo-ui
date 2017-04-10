/**
 * Created by Wendy on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react'

import Tip from '../../../../../dist/Tip/Tip';


export default class DialogExamples extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <h3>tip Examples</h3>
                <p>Please click this button to show tip.</p>
                <Tip text="hello"/>
            </div>
        )
    }
}
