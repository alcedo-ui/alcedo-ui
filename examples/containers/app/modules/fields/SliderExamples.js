/**
 * Created by DT314 on 2017/4/12.
 */
import React,{Component, PropTypes} from 'react';
import Slider from 'dist/Slider';

export default class SliderExamples extends Component{
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <Slider />
                <Slider leftPoint={true}/>
                <Slider leftPoint={true} scale={[0,50,80,100]}/>
                <Slider leftPoint={false} scale={[0,50,80,100]} ruler={5}/>
            </div>
        )
    }
}