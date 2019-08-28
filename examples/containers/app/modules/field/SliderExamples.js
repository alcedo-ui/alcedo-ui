import React, {Component, PropTypes} from 'react';

import Slider from 'src/Slider';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Slider.json';

import 'scss/containers/app/modules/field/SliderExamples.scss';

class SliderExamples extends Component {

    constructor(props) {
        super(props);
    }

    changeHandler = (left, right) => {
        //console.log(left + '   ' + right);
    };

    render() {
        return (
            <div className="example slider-examples">

                <h2 className="example-title">Slider</h2>

                <p>
                    A <span>Slider</span> is an interface for users to input a value in a range. Sliders can be
                    continuous or discrete.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Slider Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Slider simple default example.</p>

                                <Slider disabled={true} scale={[20,100]} showScale={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Slider Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the leftPoint property to true for display leftPoint and the ruler property for
                                    the slider step through values.</p>

                                <Slider //leftPoint={true}
                                        initialScale={20}
                                        scale={[20,100]}
                                        width={500}
                                        ruler={10}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Slider Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the showScale property to true and the scale property for size displayed on
                                    slider.</p>

                                <Slider leftPoint={true}
                                        scale={[0, 50, 80, 100]}
                                        showScale={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Slider Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the decimalPlaces property for the decimal digits of tip.</p>

                                <Slider leftPoint={true}
                                        scale={[{value: 4, label: 'Current'},
                                            {value: 3, label: 'POS 3'},
                                            {value: 2, label: 'POS 2'},
                                            {value: 1, label: 'POS 1'}
                                        ]}
                                        initialScale={4.31}
                                        showScale={true}
                                        showScalePoint={true}
                                        decimalPlaces={2}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Slider Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the width property for reset the slider width.</p>

                                <Slider leftPoint={true}
                                        scale={[0, 5, 8, 10]}
                                        showScale={true}
                                        decimalPlaces={1}
                                        width={600}
                                        tip={true}
                                        onChange={this.changeHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
}

export default SliderExamples;
