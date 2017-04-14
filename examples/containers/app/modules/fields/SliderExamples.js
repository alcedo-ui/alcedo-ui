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
        const style = {
            margin: '20px'
        };
        return (
            <div style={style}>
                <div className="examples-title">Example1</div>
                <Slider />
                <div className="examples-title">Example2</div>
                <Slider leftPoint={true}/>
                <div className="examples-title">Example3</div>
                <Slider leftPoint={true} scale={[0,50,80,100]} showScale={true}/>
                <div className="examples-title">Example4</div>
                <Slider leftPoint={false} scale={[0,5,8,10]} decimalPlaces={1}/>
                <div className="examples-title">Example5</div>
                <Slider leftPoint={false} scale={[0,5,8,10]} ruler={11} decimalPlaces={1} width={600}/>
            </div>
        )
    }
}