import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import HuePicker from 'src/HuePicker';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/HuePicker.json';

import Color from 'src/_vendors/Color';

import 'scss/containers/app/modules/media/TransparencyPickerExamples.scss';

class TransparencyPickerExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            transparency: Color.rgb2hsb(Color.hex2rgb('38b1eb'))[0]
        };

    }

    changeHandler = transparency => {
        this.setState({
            transparency
        });
    };

    render() {

        const {transparency} = this.state;

        return (
            <div className="example transparency-picker-examples">

                <h2 className="example-title">Hue Picker</h2>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <HuePicker value={transparency}
                                           onChange={this.changeHandler}/>

                                <div className="picked-transparency-wrapper">

                                    <div className="picked-transparency"
                                         style={{background: `rgb(${Color.hue2rgb(transparency).join(', ')})`}}></div>

                                    <div className="picked-transparency-value">{transparency}°</div>

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};

export default TransparencyPickerExamples;
