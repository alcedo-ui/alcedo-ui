/**
 * Created by DT314 on 2017/4/12.
 */
import React, {Component, PropTypes} from 'react';
import Slider from 'dist/Slider';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import SliderDoc from 'assets/propTypes/Slider.json';

import 'sass/containers/app/modules/fields/SliderExamples.scss';

export default class SliderExamples extends Component {
    constructor(props) {
        super();

        this.change = this :: this.change;
    }

    change(left, right) {
        console.log(left + '   ' + right);
    }

    render() {

        return (
            <div className="example slider-examples">

                <h2 className="example-title">Slider</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Slider Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Slider/>

                                <Slider leftPoint={true} ruler={10}/>

                                <Slider leftPoint={true}
                                        scale={[0, 50, 80, 100]}
                                        showScale={true}/>

                                <Slider leftPoint={false}
                                        scale={[0, 5, 8, 10]}
                                        showScale={true}
                                        decimalPlaces={1}/>

                                <Slider leftPoint={true}
                                        scale={[0, 5, 8, 10]}
                                        showScale={true}
                                        decimalPlaces={1}
                                        width={600}
                                        tip="right"
                                        onChange={this.change}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={SliderDoc}/>

            </div>
        )
    }
}