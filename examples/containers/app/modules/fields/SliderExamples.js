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
            </div>
        )
    }
}